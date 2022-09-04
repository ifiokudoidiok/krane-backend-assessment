# Backend-assessment
assessment for fullstack/backend role

## Available scripts


## Postgres Setup
```
1. brew install postgresql
2. brew services start postgresql
    a) brew services stop postgresql (to stop Postgres
3. psql postgres
    a) create database krane;
    b) create user root with encrypted password 'password';
    c) grant all privileges on database krane to root;
4. psql -d krane -U root
    a) Can get connection info via `\conninfo`
    b) Read relations via `\dt`
```

Add the following to `./server/.env`:
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://root:password@localhost:5432/krane?schema=public"
```