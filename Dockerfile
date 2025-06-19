FROM node:22

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["npx", "nodemon", "server.js"]
