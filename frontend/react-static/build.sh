docker build -t react-static-app .

list=$(docker images -q -f "dangling=true" -f "label=autodelete=true")
if [ -n "$list" ]; then
     docker rmi $list
fi
