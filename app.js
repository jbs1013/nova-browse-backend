
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow Nova Browse to connect from CodePen
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

// Nova Browse homepage check
app.get("/", (req, res) => {
  res.send("🌐 Nova Browse Backend is running!");
});

// Railway connection check
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    name: "Nova Browse Backend",
    connected: true
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Nova Browse running on port ${PORT}`);
});
