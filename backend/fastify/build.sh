docker build -t fastify-dev-env .

list=$(docker images -q -f "dangling=true" -f "label=autodelete=true")
if [ -n "$list" ]; then
     docker rmi $list
fi
