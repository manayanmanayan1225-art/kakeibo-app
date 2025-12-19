CREATE TABLE user_mst(
    user_id uuid PRIMARY KEY,
    user_name varchar(32) NOT NULL,
    email varchar(254) UNIQUE NOT NULL,
    pass varchar(100) NOT NULL,
    register_stamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);