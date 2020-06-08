docker stop $(docker ps -q --filter ancestor=nanoexpress-dev-env)
docker rm $(docker ps -q --filter ancestor=nanoexpress-dev-env)
docker run --env-file ./.env -p8080:8080 $(docker inspect --format="{{.Id}}" nanoexpress-dev-env)
