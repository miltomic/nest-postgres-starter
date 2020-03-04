CREATE DATABASE nestjs_starter;
CREATE USER nestjs_starter WITH ENCRYPTED PASSWORD 'nestjs_starter';
GRANT ALL PRIVILEGES ON DATABASE nestjs_starter TO nestjs_starter;
\connect  nestjs_starter;
CREATE SCHEMA IF NOT EXISTS nestjs_starter;
GRANT ALL PRIVILEGES ON SCHEMA nestjs_starter TO nestjs_starter;