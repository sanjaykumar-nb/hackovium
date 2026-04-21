FROM node:18-alpine

WORKDIR /app

# Copy backend dependencies
COPY server/package*.json ./server/
RUN cd server && npm ci --only=production

# Copy frontend dependencies
COPY client/package*.json ./client/
RUN cd client && npm ci

# Copy source code
COPY server ./server
COPY client ./client

# Build frontend
RUN cd client && npm run build

# Copy built frontend to backend public folder
RUN mkdir -p server/public && cp -r client/build/* server/public/

# Expose HF Spaces port
EXPOSE 7860

# Set environment variables for HF Spaces
ENV NODE_ENV=production
ENV PORT=7860

# Start backend (serves frontend from public directory)
WORKDIR /app/server
CMD ["node", "index.js"]
