# Capstone Project - WMS

This is the codebase for Group 25 - UniqueCoders Capstone Project. All features in this repo have been created by Elmer Almeida.

This project is built using the **PERN** stack.

-   PostgresSQL
-   Express
-   React
-   NodeJS

This project also utilizes the React-Konva library, Bootstrap 5, and Redux-Thunk.

---

# Database

PostgresSQL using a database called `WMS`.

#### Create `WMS` database

```sql
create database wms;
```

#### Use `WMS` database

```sql
\c wms
```

#### Create User Table

```sql
create table users (
    user_id serial primary key,
    first_name varchar(120) not null,
    last_name varchar(120) not null,
    username varchar(120) unique not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    active boolean not null default false,
    role_type varchar(120) not null,
    created_at date default current_date
);
```

#### Create Warehouse Objects Table

```sql
-- Warehouse objects table
create table objects (
    id varchar(120) primary key,
    type varchar(120) not null, -- rect or image
    x int not null,
    y int not null,
    width int not null,
    height int not null,
    image varchar(255),
    fill varchar(120),
    created_at date default current_date,
    active boolean not null default true
);
```

#### Output User Table Data

```sql
table users;
```

#### Change active status of an account

```sql
--- updating by username
update users set active=true where username='<username>';

--- updating by user id
update users set active=true where user_id=<user_id>;
```

---

# Create `.env` File

Under `server` directory, add the following `.env` file:

```env
PORT = 5000
SECRET = 75ca8cbdceeffdfeb4950150e8983436

CLIENT_URL = http://localhost:3000
SERVER_URL = http://localhost:5000
```

# NOTE

Please don't forget to run the following script in the `server` directory **and** the `client` directory:

```sh
npm install
```
