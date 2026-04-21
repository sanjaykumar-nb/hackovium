#!/usr/bin/env python3
"""
Hugging Face Spaces wrapper for FUTURE YOU AI
This serves the React frontend and Express backend
"""

import os
import subprocess
import time
import requests
from pathlib import Path

def setup_and_run():
    """Setup and run the application on HF Spaces"""

    # Get the space URL from environment
    space_url = os.getenv('SPACE_URL', 'http://localhost:7860')

    print("🚀 Starting FUTURE YOU AI on Hugging Face Spaces...")

    # Set environment variables
    os.environ['NODE_ENV'] = 'production'
    os.environ['PORT'] = '7860'  # HF Spaces default port
    os.environ['REACT_APP_API_URL'] = space_url

    # Check if ANTHROPIC_API_KEY is set
    if not os.getenv('ANTHROPIC_API_KEY'):
        print("❌ Error: ANTHROPIC_API_KEY environment variable not set")
        print("Please add your Anthropic API key in the Spaces secrets")
        return

    # Install backend dependencies
    print("📦 Installing backend dependencies...")
    subprocess.run(['npm', 'install'], cwd='server', check=True)

    # Install frontend dependencies
    print("📦 Installing frontend dependencies...")
    subprocess.run(['npm', 'install'], cwd='client', check=True)

    # Build frontend
    print("🏗️  Building frontend...")
    subprocess.run(
        ['npm', 'run', 'build'],
        cwd='client',
        check=True,
        env={**os.environ, 'CI': 'false'}
    )

    # Copy built frontend to server public folder
    print("📋 Copying frontend build to server...")
    os.makedirs('server/public', exist_ok=True)
    subprocess.run(
        ['cp', '-r', 'client/build/.', 'server/public/'],
        check=True
    )

    # Start backend server
    print("🌐 Starting backend server...")
    subprocess.Popen(
        ['node', 'index.js'],
        cwd='server',
        env={**os.environ}
    )

    # Wait for server to start
    max_retries = 30
    for i in range(max_retries):
        try:
            response = requests.get('http://localhost:7860/api/health')
            if response.status_code == 200:
                print("✅ Server is running!")
                break
        except requests.exceptions.ConnectionError:
            if i < max_retries - 1:
                print(f"⏳ Waiting for server... ({i+1}/{max_retries})")
                time.sleep(1)
            else:
                print("❌ Server failed to start")

    print("\n" + "="*60)
    print("🎉 FUTURE YOU AI is now running on Hugging Face Spaces!")
    print(f"📍 Access it at: {space_url}")
    print("="*60)

    # Keep the process running
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n👋 Shutting down...")

if __name__ == '__main__':
    setup_and_run()
