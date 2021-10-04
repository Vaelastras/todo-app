FROM node:14-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD ["npm", "run-script", "start"]
