FROM node:16.16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src/

RUN npm run build

CMD [ "npm", "run", "start" ]