
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- CREATE TABLE "habits" (
--     "id" SERIAL PRIMARY KEY,
--     "habit" VARCHAR (80) UNIQUE NOT NULL,
--     "description" VARCHAR (1000) NOT NULL
--     "date" DATE NOT NULL
-- );

CREATE TABLE "habits" (
    "id" SERIAL PRIMARY KEY,
    "habit" VARCHAR (80) NOT NULL,
    "description" VARCHAR (1000),
    "date" DATE (1000),
    "user_id" INT REFERENCES "user"
);