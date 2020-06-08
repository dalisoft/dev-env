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

WORKDIR /usr/src/react-static-app

COPY . /usr/src/react-static-app

RUN npm ci
RUN npm run build

#
# Stage: 2
# We copy files from `Stage: 1` and just copy files to NGINX
# and it starts working
#

FROM nginx:1.17-alpine

WORKDIR /usr/src/react-static-app

COPY --from=build /usr/src/react-static-app/dist /usr/share/nginx/html

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
