FROM node:20

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm i  --frozen-lockfile

COPY . .

RUN pnpm run build

CMD ["pnpm", "run", "prod"]
