FROM node:10 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./
# Warning: do not use below command in micro-service environment. Migration CLI run does not provide concurrent locking.
CMD ["npm", "run", "migrate-then-start:prod"]