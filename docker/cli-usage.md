## Course link
https://www.udemy.com/course/docker-mastery/

## Concepts
- Install https://www.docker.com/products/docker-desktop
  - Preferences: CPUs/Memory
- Shell completion https://docs.docker.com/compose/completion/
- Image VS Containers
  - An images is the application we want to run
  - A container is an instance of that images
  - You can have multiple containers using the same image
  - Images are stored in registries: default is Docker Hub but others are ECR in AWS

## Starting a container
`docker container run -p 80:80 httpd:alpine`
 - `-p <HOST_PORT>:<CONTAINER_PORT>` (publish/forward the port)
 - `httpd` image with `alpine` tag (normally the smallest images) https://hub.docker.com/layers/httpd/library/httpd/alpine/images/sha256-6d7f15159c60506e45f7a0dcc6ed5fb5d20a4aa614e000170ccfc7891026385b?context=explore

## Starting an interactive container
`docker container run -it -p 80:80 httpd:alpine /bin/sh`
 - `-it` interactive/tty container
 - `/bin/sh` the command to run

## See logs in a detached container
`docker logs <CONTAINER_NAME_OR_ID>`

## Attach a shell session to a running container
`docker exec -it <CONTAINER_NAME> /bin/sh`

## Mounting volumes into a container
`docker container run -d -p 80:80 --name my_apache_server -v $(pwd)/html-sample:/usr/local/apache2/htdocs/ httpd:alpine`
 - -v <HOST_FOLDER>:<CONTAINER_FOLDER> mount a host folder into a directory in the container

## Docker compose
`docker-compose -f docker/docker-compose-basic.yml up -d`
`docker-compose -f docker/docker-compose-basic.yml down`

Tips:
 - add `--name <NAME>` to name your container
 - add `--rm` to delete the container when exists
 - add `-d` to run in detached mode
