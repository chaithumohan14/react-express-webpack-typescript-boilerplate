import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: express.Application = express();

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.listen(process.env.PORT, () => {
  console.log(`> Server has started...`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});
