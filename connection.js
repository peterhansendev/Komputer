import express from "express";
const app = express();
import { v4 } from 'uuid';

app.get('/api', (req, res) => {
  res.send("Express on Vercel");
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
