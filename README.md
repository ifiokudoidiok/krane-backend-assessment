# Backend/FullStack Assessment
Assessment for Krane SWE role

## Technical Details
Find API Endpoints under `./client/src/commons/constants/index.ts`
```
UPLOAD_POST: "/api/post"
GET_POSTS: "/api/post"
```

Client-side `UPLOAD_POST` payload: 
```
title: title,
text_body: body,
```

Expected returns
`GET_POSTS` should return an array of posts `{Record[]}`
`UPLOAD_POST` should return the newly created post `{Record}`

Migrations + Prisma has already been setup :)
## Available scripts
`npm run start`
Concurrently run server and client

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