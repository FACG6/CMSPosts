BEGIN;
DROP TABLE IF EXISTS posts, users, post_user;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    privacy INTEGER Not Null,
    user_id INTEGER NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
    password TEXT NOT NULL
);
COMMIT;