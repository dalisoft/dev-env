#!/bin/bash
DOCKER_FILE='./docker-compose.prod.yml'

docker-compose -f "${DOCKER_FILE}" build;
