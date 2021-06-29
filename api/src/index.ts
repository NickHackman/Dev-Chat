import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (_, res: express.Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
