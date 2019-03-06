BEGIN;
DROP TABLE IF EXISTS posts, users, post_user;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    privacy INTEGER Not Null
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE post_user(
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts (id) ON DELETE CASCADE,
     PRIMARY KEY (user_id, post_id)
);

COMMIT;