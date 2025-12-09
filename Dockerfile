FROM node:current-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]