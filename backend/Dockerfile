FROM node:18.9.0
WORKDIR /usr/src/app

COPY express-pomodoro/package.json .
COPY express-pomodoro/package-lock.json .
COPY express-pomodoro/webpack.config.js .
COPY express-pomodoro/tsconfig.json .
RUN npm install

COPY express-pomodoro/src/ ./src
RUN npm run build

ENTRYPOINT ["npm","run","start"]
