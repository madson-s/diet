FROM node:18-alpine

RUN mkdir -p /home/node/api && chown -R node:node /home/node/api

WORKDIR /home/node/api

USER node

COPY --chown=node:node . .

COPY --chown=node:node package*.json ./

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 8080

CMD ["npm","start"]
