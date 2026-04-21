#!/usr/bin/env python3
"""
FUTURE YOU AI - Hugging Face Spaces Launcher
This script starts the Node.js backend server
"""

import subprocess
import os
import time
import sys

def main():
    print("🚀 Starting FUTURE YOU AI on Hugging Face Spaces...")

    # Check for required environment variables
    if not os.getenv('ANTHROPIC_API_KEY'):
        print("❌ Error: ANTHROPIC_API_KEY environment variable not set")
        print("Please add your Anthropic API key in the Space secrets")
        sys.exit(1)

    # Set environment variables
    os.environ['NODE_ENV'] = 'production'
    os.environ['PORT'] = '7860'

    # Install dependencies
    print("📦 Installing backend dependencies...")
    try:
        subprocess.run(['npm', 'install', '--production'], cwd='server', check=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install backend dependencies: {e}")
        sys.exit(1)

    print("📦 Installing frontend dependencies...")
    try:
        subprocess.run(['npm', 'install'], cwd='client', check=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install frontend dependencies: {e}")
        sys.exit(1)

    # Build frontend
    print("🏗️  Building frontend...")
    try:
        subprocess.run(['npm', 'run', 'build'], cwd='client', check=True, env={**os.environ, 'CI': 'false'})
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to build frontend: {e}")
        sys.exit(1)

    # Copy built frontend to server public folder
    print("📋 Copying frontend to backend...")
    try:
        os.makedirs('server/public', exist_ok=True)
        subprocess.run(['sh', '-c', 'cp -r client/build/* server/public/ 2>/dev/null || true'], check=False)
    except Exception as e:
        print(f"⚠️  Warning: Could not copy frontend: {e}")

    # Start Node.js server
    print("✅ Starting backend server on port 7860...")
    try:
        subprocess.run(['node', 'index.js'], cwd='server', check=False)
    except KeyboardInterrupt:
        print("\n👋 Shutting down...")
        sys.exit(0)

if __name__ == '__main__':
    main()
