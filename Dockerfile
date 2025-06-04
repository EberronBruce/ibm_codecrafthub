# Dockerfile for User Service (Node.js + MongoDB client)

# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]