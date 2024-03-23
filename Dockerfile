FROM node:18.18.2-alpine

USER node

RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package*.json /home/node/api

COPY start.sh /

# CMD [ "/start.sh" ]