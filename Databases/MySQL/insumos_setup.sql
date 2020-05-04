-- Creación de las DB
CREATE DATABASE INSUMOS;
create user "user_insumos" identified by 'insumos_PASS';
GRANT ALL PRIVILEGES ON INSUMOS . * TO "user_insumos";
FLUSH PRIVILEGES;
