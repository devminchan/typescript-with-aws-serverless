FROM node:10.13-alpine
RUN npm install -g typescript ts-node
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --slient && mv node_modules ../
COPY . .
EXPOSE 4000
CMD ts-node server.ts