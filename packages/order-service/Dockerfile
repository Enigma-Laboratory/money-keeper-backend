FROM node:20 

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and pnpm-lock.yaml to install dependencies
COPY package.json  ./


# Install global dependencies
RUN npm install -g pnpm



# Install dependencies and bootstrap the monorepo
RUN pnpm install

# Copy the rest of the application code
COPY . .


# Build the application
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run your application
CMD ["pnpm", "run", "dev"]