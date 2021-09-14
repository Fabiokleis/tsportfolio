/* tables to knex_portifolio */

create table users (
    id serial primary key,
    name text not null unique,
    email text not null unique,
    password text not null,
    createdAt timestamp not null default current_timestamp,
    updatedAt timestamp not null default current_timestamp,
    tokenDate timestamp unique,
    resetToken text unique,
    bio text 
);

create table subscribedemails(
    email text not null unique
);

create table posts(
    id serial,
    userId integer not null references users(id) on delete cascade,
    title text not null unique,
    description text not null,
    createdAt timestamp not null default current_timestamp,
    updatedAt timestamp not null default current_timestamp
);

CREATE TABLE profile_images(
    id SERIAL NOT NULL PRIMARY KEY,
    userId integer not null unique references users(id) on delete cascade,
    filename TEXT UNIQUE NOT NULL,
    filepath TEXT NOT NULL,
    mimetype TEXT NOT NULL,
    size BIGINT NOT NULL
);
