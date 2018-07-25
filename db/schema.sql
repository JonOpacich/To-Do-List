drop database if exists todo_db;
create database todo_db;
use todo_db;

create table list (
    id integer auto_increment,
    list_item varchar(255) not null,
    complete boolean not null,
    primary key (id)
)