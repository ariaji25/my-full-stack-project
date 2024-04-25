FROM node:20.2.0-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npx mikro-orm schema:sync

CMD [ "npm", "run", "start:prod" ]