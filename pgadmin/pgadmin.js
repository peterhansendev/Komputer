import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "",
  password: process.env.POSTGRES_KEY,
});

client.connect();

const pgdata = ["ok"];

client.query(`Select * from computers`, (err, result) => {
  if (!err) {
    pgdata.push(result.rows);
    console.log(pgdata);
  }
});
client.end;

export default pgdata;
