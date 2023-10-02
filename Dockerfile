ARG BASE=node:18-alpine

# Installing dependencies
FROM ${BASE} as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps

# Building Next.js application
FROM ${BASE} as build

# Getting environment variables from docker-compose
ARG NEO4J_URI
ARG NEO4J_USERNAME
ARG NEO4J_PASSWORD
ARG NEO4J_DB
ARG NEXT_PUBLIC_API_URL

ENV NEO4J_URI ${NEO4J_URI}
ENV NEO4J_USERNAME ${NEO4J_USERNAME}
ENV NEO4J_PASSWORD ${NEO4J_PASSWORD}
ENV NEO4J_DB ${NEO4J_DB}
ENV NEXT_PUBLIC_API_URL ${NEXT_PUBLIC_API_URL}

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Copy from build to production
FROM ${BASE} as production

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build /app/README.md ./README.md
COPY --from=build /app/docs ./docs

EXPOSE 3000
EXPOSE 9229
CMD ["npm", "run", "start"]