import express from "express";

const app = express();

const { v4 } = require('uuid');

app.get('/api', (req, res) => {
    res.send("Express on Vercel api");
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get('/api1', (req, res) => {
  res.send("Express on Vercel api");
});




// Export the Express API
export default app;