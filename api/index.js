import express from "express";
const app = express();
import elephantsqlData from "./elephantsql.js";

app.listen(3305, () => {
  console.log("Sever is now listening at port 3305");
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;

  if (slug == "computerinfo") {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/public/index.html')
    res.send(elephantsqlData[0] || "Data missing");
  } else {
    res.send(" params Vercel api!" + slug);
  }
});

app.get("/api", (req, res) => {
  res.send("Express on Vercel api!");
});

export default app;
