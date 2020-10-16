# Database Schema Design

Guided project for **Node DB II** module.

## Prerequisites

- [TablePlus](https://tableplus.com) or a similar app installed.
- a REST client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.

## Notes from Lecture

Good structuring of a Database Schema
-What fields, or columns, does a table need? (ID is always a required)
-What should the identifying column (or primary key) be?
-What type of data do we expect for each column?
-Are there any restrictions needed for each column?

-Data Types Examples
---Look to sqlite documentation in bookmarks.

-DDL commands

CREATE TABLE `<table>` can use (IF NOT EXISTS to ensure a non error)
    Column type  Constraints
    column type  Constraints

ALTER TABLE `<table name>`
    ADD COLUMN `name` constraints

DROP TABLE (IF EXISTS is option) `<table name>`

Database Schema Migrations

This is a way to store the way the schema was created by using files that programatically change the database over time.
cmd line
    npx knex migrate:make `<filename>`

    //migrate latest will run all the batches in order //if all batches ran at once this will create multiple migrations
    npx knex migrate:latest (Used to run the knex up command)
    //migrate rollback will only rollback one batch at a time
    npx knex migrate:rollback (Used to run the knex down command)

    //Use this to create individual batches as you run through migrations
    npx knex migrate:up  

    //use this to make the seed file
    npx knex seed:make `<name>`
    //use this to run the seed
    npx knex seed:run
 -->
