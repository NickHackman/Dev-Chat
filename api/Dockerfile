# Build Container
FROM node:14-alpine as build
COPY . .
RUN npm ci
RUN npm run build

# Shipped Container
FROM node:14-alpine

EXPOSE 8000

# Run with non-root user
RUN addgroup -S appgroup && adduser -S dev -G appgroup
USER dev
RUN mkdir -p /home/dev
WORKDIR /home/dev

COPY --from=build package*.json ./                   
COPY --from=build build ./build

RUN npm i --only=production

ENTRYPOINT [ "node", "build/index.js" ]