FROM node:18-alpine as dependencies
RUN apk update \
    && apk add --no-cache openssl curl libc6-compat \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/cache/apk/*
RUN openssl version && curl --version
RUN curl -sf https://gobinaries.com/tj/node-prune | sh
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps

FROM node:18-alpine as build
ENV NEO4J_URI bolt://neo4j:7687
ENV NEO4J_USERNAME neo4j
ENV NEO4J_PASSWORD eth12345
ENV NEO4J_DB neo4j
ENV NEXT_PUBLIC_API_URL http://localhost:3000
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine as production
ENV NODE_ENV production
WORKDIR /app
COPY --from=build --chown=node:node /app .
EXPOSE 3000
EXPOSE 9229
CMD ["npm", "run", "start"]