# Build stage
FROM node:22-alpine AS build

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Enable build-time environment variable for Vite
ARG VITE_API_BASE
ENV VITE_API_BASE=$VITE_API_BASE

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Install 'serve' package to handle the static files
RUN npm install -g serve
COPY --from=build /app/dist ./dist

# Expose the production port
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
