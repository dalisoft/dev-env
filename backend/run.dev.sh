docker build -t backend-dev -f Dockerfile.dev .
docker run -p 3000:3000 backend-dev
