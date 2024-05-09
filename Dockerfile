FROM node:latest
WORKDIR /docapp
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]

