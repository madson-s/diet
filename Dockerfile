FROM node:18-alpine

RUN mkdir -p /home/node/api && chown -R node:node /home/node/api

WORKDIR /home/node/api

USER node

COPY --chown=node:node package*.json /home/node/api/

RUN npm install --legacy-peer-deps

CMD ["npm","start"]
