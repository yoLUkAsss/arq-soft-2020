#!/bin/bash

docker rm -f insumos-mysql

docker build -t insumos-mysql .

docker run -p 3306:3306 -p 33060:33060 --name insumos-mysql -d insumos-mysql

