FROM node:12.16.3

WORKDIR /src/app

ENV PORT 80

COPY package.json /src/app/package.json

RUN npm install

COPY . /src/app

CMD ["node", "./dist/server.js"]
