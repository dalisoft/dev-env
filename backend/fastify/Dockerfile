#
# PRODUCTION
# Dockerfile
#

#
# Stage: 1
# We install the dependencies
# and required tools such as git, npm
#

FROM mhart/alpine-node:12 as build

LABEL autodelete="true"

WORKDIR /usr/src/fastify-app

COPY . /usr/src/fastify-app

RUN npm ci --ignore-scripts

# RUN npm run build
RUN npm run build:server

#
# Stage: 2
# We install the only PROD dependencies
#

FROM mhart/alpine-node:12 as prod-build

LABEL autodelete="true"

WORKDIR /usr/src/fastify-app

COPY --from=build usr/src/fastify-app /usr/src/fastify-app

RUN rm -rf /usr/src/fastify-app/node_modules
RUN rm -rf /usr/src/fastify-app/functions
RUN rm -rf /usr/src/fastify-app/src
RUN rm -rf /usr/src/fastify-app/.webpack

RUN npm ci --prod --ignore-scripts

#
# Stage: 3
# We copy files from `Stage: 2` and just add some polyfill
# and it starts working
#

FROM mhart/alpine-node:slim-12

WORKDIR /usr/src/fastify-app

COPY --from=prod-build usr/src/fastify-app /usr/src/fastify-app

ENV NODE_CLUSTER_SCHED_POLICY=rr
ENV PORT=8080

EXPOSE 8080

# Can be any of env :)
# Like `node functions-build/server.js`

ENTRYPOINT ["node", "build/server.js"]
