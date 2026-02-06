FROM node:24-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY index.js .

EXPOSE 4000

RUN adduser --system nodejs
USER nodejs

CMD [ "node", "index.js" ]