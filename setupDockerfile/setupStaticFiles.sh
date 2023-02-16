# work dir = web/Web_Programming_SharifUniversity
docker build -t frontend -f Dockerfile .
docker run --name frontend -p 9050:8080

docker build -t frontend-nginx-static -f Dockerfile-nginx-static .
docker run --name frontend-nginx-static -p 8000:80 frontend-nginx-static