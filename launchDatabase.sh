#!/bin/sh
sudo docker run --name my_database -e POSTGRES_PASSWORD=password -e POSTGRES_USER=root -e POSTGRES_DB=my_database -p 5432:5432 -v "$(pwd)"/db/init.sql:/docker-entrypoint-initdb.d/init.sql postgres:alpine
