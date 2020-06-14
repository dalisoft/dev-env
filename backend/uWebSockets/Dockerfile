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

WORKDIR /usr/src/uws-app

COPY . /usr/src/uws-app

RUN apk update && apk add --no-cache git
RUN npm ci --ignore-scripts

# RUN npm run build
RUN npm run build

#
# Stage: 2
# We install the only PROD dependencies
#

FROM mhart/alpine-node:12 as prod-build

LABEL autodelete="true"

WORKDIR /usr/src/uws-app

COPY --from=build usr/src/uws-app /usr/src/uws-app

RUN apk update && apk add --no-cache git
RUN rm -rf /usr/src/uws-app/node_modules
RUN rm -rf /usr/src/uws-app/functions
RUN rm -rf /usr/src/uws-app/src
RUN rm -rf /usr/src/uws-app/.webpack

RUN npm ci --prod --ignore-scripts

#
# Stage: 3
# We copy files from `Stage: 2` and just add some polyfill
# and it starts working
#

FROM mhart/alpine-node:slim-12

WORKDIR /usr/src/uws-app

COPY --from=prod-build usr/src/uws-app /usr/src/uws-app

RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

RUN rm -rf /usr/src/uws-app/node_modules/@sifrr/server/node_modules/uWebSockets.js

ENV NODE_CLUSTER_SCHED_POLICY=rr
ENV PORT=8080

EXPOSE 8080

# Can be any of env :)
# Like `node functions-build/server.js`

ENTRYPOINT ["node", "build/server.js"]
