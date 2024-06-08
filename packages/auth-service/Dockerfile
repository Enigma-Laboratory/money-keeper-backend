# Use Node.js 14.x LTS image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json pnpm-lock.yaml* ./

# Install PNPM globally
RUN npm install -g pnpm

# Install NestJS dependencies using PNPM
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run your NestJS application
CMD ["pnpm", "start"]
