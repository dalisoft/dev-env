docker stop $(docker ps -q --filter ancestor=fastify-dev-env)
docker rm $(docker ps -q --filter ancestor=fastify-dev-env)
docker run --env-file ./.env -p8080:8080 $(docker inspect --format="{{.Id}}" fastify-dev-env)
