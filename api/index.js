import express from "express";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.get("/api", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  database: "",
  password: process.env.POSTGRES_KEY,
});

client.connect();


app.get("/computerinfo", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).json({info: "1234"})
  /* const { dynamic } = req.params
  const { key } = req.query
  console.log(dynamic, key); 
 
  res.status(200).send('<h1>ok</h1>')
   client.query(`Select * from computers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      
    }
  });
  client.end; */
});

// Export the Express API
export default app;