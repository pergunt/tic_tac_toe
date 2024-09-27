FROM node:20

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i  --frozen-lockfile

COPY . .

RUN npm run build

CMD ["pnpm", "run", "prod"]


