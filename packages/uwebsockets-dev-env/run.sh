docker stop $(docker ps -q --filter ancestor=uws-dev-env)
docker rm $(docker ps -q --filter ancestor=uws-dev-env)
docker run -p8080:8080 $(docker inspect --format="{{.Id}}" uws-dev-env)
