FROM node:12
WORKDIR /app
COPY package.json /app
COPY . /app
RUN yarn
RUN yarn test
