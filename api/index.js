import express from "express";

const app = express();


app.get("/", (req, res) => {
  res.send(" on Vercel api!");
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
  res.send(" params Vercel api!");
});


app.get("/api", (req, res) => {
  res.send("Express on Vercel api!");
});

app.get("/apii", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/api/computerinfo", (req, res) => {
 res.send("computerinfo on Vercel");
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

app.listen(3304, () => {
  console.log("Running on port 5000.");
});



// Export the Express API
export default app;