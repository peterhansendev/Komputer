import express from "express";

const app = express();

app.get('/api/item/:slug', (req, res) => {
  res.send(" params Vercel api!" + res);
  const { slug } = req.params;
console.log(res);
  
});

app.get("/api", (req, res) => {
  res.send("Express on Vercel api!");
});


app.get("/api/item/computerinfo", (req, res) => {
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