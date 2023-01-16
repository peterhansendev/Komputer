import pgdata from "../pgadmin/pgadmin.js";
import express from "express";
const app = express(); 

app.listen(3305, () => {
  console.log("Sever is now listening at port 3305");
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;

  if (slug == "computerinfo") {
    res.send(pgdata);
  } else {
    res.send(" params Vercel api!" + slug);
  }
});

app.get("/api", (req, res) => {
  res.send("Express on Vercel api!");
});

export default app;
