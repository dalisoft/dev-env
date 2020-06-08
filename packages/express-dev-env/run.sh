docker stop $(docker ps -q --filter ancestor=express-dev-env)
docker rm $(docker ps -q --filter ancestor=express-dev-env)
docker run --env-file ./.env -p8080:8080 $(docker inspect --format="{{.Id}}" express-dev-env)
