# build stage
FROM node:22-alpine AS builder
ENV NODE_ENV=development
ENV PORT=3000
WORKDIR /app
COPY package.json tsconfig.json ./
RUN yarn install --immutable --immutable-cache --check-cache
COPY src .
RUN yarn run build

# runtime
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
RUN yarn install --immutable --immutable-cache --check-cache
EXPOSE $PORT
CMD ["node", "dist/index.js"]

