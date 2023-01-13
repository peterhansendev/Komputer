//PostgreSQL

import pkg from "pg";
const { Client } = pkg;
import express from "express";
const app = express();
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "",
  password: process.env.POSTGRES_KEY,
});

app.use(express.static("public"));
app.use(express.json());

app.listen(process.env.PORT || 3304, '0.0.0.0', () => {
  console.log("Sever is now listening at port 3300");
});

client.connect();

app.get("/computerinfo", (req, res) => {
  /* const { dynamic } = req.params
  const { key } = req.query
  console.log(dynamic, key); */
 
   client.query(`Select * from computers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      res.status(200).json({info: "1234"})
    }
  });
  client.end; 
});
/*
client.query(`Select * from computers`, (err, result) => {
  if (!err) {
    console.log(JSON.stringify(result.rows));
  }
}); */

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel.value);
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "received" });
});

