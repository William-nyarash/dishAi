FROM node:18-slim

RUN groupadd -r swe && useradd -r -g swe swe

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY --chown=swe:swe  . .

USER swe 

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
