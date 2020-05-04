FROM mysql

ENV MYSQL_ROOT_PASSWORD=insumosPass

EXPOSE 3306/tcp 33060/tcp

COPY insumos_setup.sql /docker-entrypoint-initdb.d/insumos_setup.sql
