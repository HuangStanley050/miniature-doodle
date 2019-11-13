FROM node:12.13.0-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm","run","start"]
