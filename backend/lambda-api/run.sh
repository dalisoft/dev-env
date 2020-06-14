docker stop $(docker ps -q --filter ancestor=lambda-api-dev-env)
docker rm $(docker ps -q --filter ancestor=lambda-api-dev-env)
docker run --env-file ./.env -p3000:8080 $(docker inspect --format="{{.Id}}" lambda-api-dev-env)
