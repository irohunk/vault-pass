DROP TABLE IF EXISTS organizations CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS websites CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- CREATE TABLE categories (
--   id SERIAL PRIMARY KEY NOT NULL,
--   cat_name VARCHAR(255) NOT NULL
-- );

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  postal VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  org_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  is_admin SMALLINT NOT NULL,
  login_username VARCHAR(255) NOT NULL,
  login_password VARCHAR(255) NOT NULL
);

CREATE TABLE websites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  org_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  category VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

