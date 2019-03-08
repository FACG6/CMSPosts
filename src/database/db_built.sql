BEGIN;
    DROP TABLE IF EXISTS posts, users;

    CREATE TABLE posts
    (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        privacy INTEGER Not Null,
        user_id INTEGER NOT NULL
    );

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        image TEXT NOT NULL,
        password TEXT NOT NULL
    );

    INSERT INTO users
        (first_name,last_name,email,image,password)
    VALUES
        ('Shorouq', 'Saad', 'shrooq@saad.com', 'https://cdn4.vectorstock.com/i/thumb-large/61/23/software-language-programmer-avatar-vector-17866123.jpg', '$2b$05$voJ631jl17arefeQ//nNBeitrtklbOihQQFwiYjh7Q.ZJ1wjuryZO');
    INSERT INTO posts
        (content, privacy, user_id)
    VALUES
        ('Wellcom :)', 0, 1);

    COMMIT;