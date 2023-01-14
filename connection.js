

//PostgreSQL

import pkg from "pg";
const { Client } = pkg;
import express from "express";
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import { v4 } from 'uuid';

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "",
  password: process.env.POSTGRES_KEY,
});

app.use(express.static("public"));
app.use(express.json());

app.listen(process.env.PORT || 3304 || 'https://komputer.vercel.app' || "komputer.vercel.app", '0.0.0.0', () => {
  console.log("Sever is now listening at port 3300");
});

client.connect();

app.get('/api1', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/computerinfo", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).json({info: "1234"})
   const { dynamic } = req.params
  const { key } = req.query
  console.log(dynamic, key); 
 
  res.status(200).send('<h1>ok</h1>')
   client.query(`Select * from computers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      
    }
  });
  client.end; 
});
client.query(`Select * from computers`, (err, result) => {
  if (!err) {
    console.log(JSON.stringify(result.rows));
  }
}); 

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel.value);
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "received" });
});


module.exports = app; 