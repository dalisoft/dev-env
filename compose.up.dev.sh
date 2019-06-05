#!/bin/bash
DOCKER_FILE='./docker-compose.dev.yml'

docker-compose -f "${DOCKER_FILE}" down;
docker-compose -f "${DOCKER_FILE}" up --build;
