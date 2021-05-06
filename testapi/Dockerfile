FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000
CMD [ "node", "/app/index.js" ]

LABEL org.opencontainers.image.source https://github.com/Atema/Cloudprober-Demo
