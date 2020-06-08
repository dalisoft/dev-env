#!/bin/bash
DOCKER_FILE='./docker-compose.prod.yml'

docker-compose -f "${DOCKER_FILE}" build --force-rm;

list=$(docker images -q -f "dangling=true" -f "label=autodelete=true")
if [ -n "$list" ]; then
     docker rmi $list
fi
