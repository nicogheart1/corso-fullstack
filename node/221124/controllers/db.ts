import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDB = async () => {
  /*await db.none(`
        DROP TABLE IF EXISTS students;

        CREATE TABLE students (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            image TEXT
        );
    `);*/

  /*await db.none(`
        INSERT INTO students (name, age) VALUES ('Mario', 24);

        INSERT INTO students (name, age) VALUES ('Lucia', 31);
    `);*/

      /*await db.none(`
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        );
    `);*/

    /*await db.none(`
        INSERT INTO users (username, password) VALUES ('pippo', 'pippo123');
    `);*/

  const studentsDb = await db.many(`
    SELECT * FROM students;
  `);

  console.log("studentsDb", studentsDb);

  const usersDb = await db.many(`
    SELECT * FROM users;
  `);

  console.log("usersDb", usersDb);
};

setupDB();

export { db };