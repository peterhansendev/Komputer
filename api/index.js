import express from "express";
const app = express();
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

app.listen( 3305, () => {
  console.log("Sever is now listening at port 3300");
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params

  if(slug == "computerinfo") {
    res.send(JSON.parse('{"name":"John", "age":30, "city":"New York"}'));
  } else {
    res.send(
      " params Vercel api!" + slug
    );
  }
 
  
});

app.get("/api", (req, res) => {
  const { dynamic } = req.params;
  const { key } = req.query;
  console.log(dynamic, key);

  client.query(`Select * from computers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

/*
app.get("/api/item/computerinfo", (req, res) => {
  res.send("computerinfo on Vercel");
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
*/


// Export the Express API
export default app;
