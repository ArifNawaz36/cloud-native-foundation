FROM node:14.17.4

WORKDIR /code

COPY package.json /code/package.json

RUN npm install

COPY . /code

EXPOSE 8080

CMD [ "node", "src/server.js" ]