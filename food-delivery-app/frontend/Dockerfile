# Use official Node.js image from the Docker Hub
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json /app/
RUN npm install

# Copy the rest of the application code
COPY . /app/

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
