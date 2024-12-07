# Use an official Node.js image as the base for building
FROM node:latest AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the entire application code
COPY . .

# Build the application for production
RUN npm run build

# Use a smaller Node.js runtime for the production environment
FROM node:latest AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy the built application and node_modules from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port that the Next.js app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
