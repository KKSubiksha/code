# Use the official Node.js image as base
FROM node:latest

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 4000 (or any other port your server is listening on)
EXPOSE 4000

# Command to run the server
CMD ["node", "server.js"]