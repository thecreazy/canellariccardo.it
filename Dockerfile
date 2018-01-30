FROM node:8.6.0-alpine

WORKDIR /app

ADD . /app

EXPOSE 80 3000

RUN chmod +x docker/entrypoint.sh

ENTRYPOINT [ "/app/docker/entrypoint.sh" ]
