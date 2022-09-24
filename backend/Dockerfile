FROM node:18.9.0
WORKDIR /usr/src/app

ENV NODE_ENV=development
COPY express-pomodoro/package.json .
COPY express-pomodoro/package-lock.json .
RUN npm install

COPY express-pomodoro/.env .
COPY express-pomodoro/tsconfig.json .
COPY express-pomodoro/src/ ./src