const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nova Browse backend is running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    name: "Nova Browse Backend"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Nova Browse backend running on port ${PORT}`);
});
