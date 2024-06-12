# Use the official Node.js image as the base image
FROM node:20

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json from the project root directory
COPY package.json ./

# Install pnpm and workspace dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Expose the port that the app runs on
EXPOSE 3302

# Define the command to run the application
CMD ["pnpm", "run" , "dev"]
