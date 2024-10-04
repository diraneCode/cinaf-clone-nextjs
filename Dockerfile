# develop stage
FROM node:21.5.0-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build

# Définir la commande pour démarrer votre application SSR
# CMD ["pm2-runtime", "index.js"]

EXPOSE 3000