#FROM node:18-alpine as builder
FROM --platform=linux/amd64 node:18-alpine as builder

WORKDIR /usr/app

COPY package*.json .

RUN npm install --production=false

COPY . .

# build wit tsc
RUN ls -ls node_modules/typescript
RUN npm run build

FROM --platform=linux/amd64 node:18-alpine as production
#FROM node:18-alpine as production

WORKDIR /usr/app

COPY --from=builder /usr/app/dist ./dist
COPY package*.json .

RUN npm install --omit=dev

EXPOSE 80

CMD ["node", "dist/index.js"]
