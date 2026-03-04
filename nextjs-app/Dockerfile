FROM node:24-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .
COPY postcss.config.mjs .
COPY next.config.ts .
COPY next-env.d.ts .
COPY eslint.config.mjs .

RUN npm install

COPY public ./public
COPY app ./app


RUN npm run build

RUN adduser --system nodejs
USER nodejs

EXPOSE 3000

CMD [ "npm", "run", "start" ]