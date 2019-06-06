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

RUN apk update && apk add --no-cache git

WORKDIR /usr/src/app

COPY app /usr/src/app

RUN npm ci --prod

#
# Stage: 2
# We copy files from `Stage: 1` and just add some polyfill
# and it starts working
#

FROM mhart/alpine-node:slim-12

# RUN apk update && apk add --no-cache libc6-compat (add it when error happens)
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

WORKDIR /usr/src/app

COPY --from=build usr/src/app /usr/src/app

ENTRYPOINT ["node", "/usr/src/app/server.js"]
