FROM node:18-alpine

WORKDIR /app

# Copy backend
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci --only=production

# Copy frontend
WORKDIR /app
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm ci

# Copy source code
COPY server ./server
COPY client ./client

# Build frontend
WORKDIR /app/client
RUN npm run build

# Expose ports
EXPOSE 5000 3000

# Start backend (frontend served via Express static middleware)
WORKDIR /app/server
CMD ["node", "index.js"]
