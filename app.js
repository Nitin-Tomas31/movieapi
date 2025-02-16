const express = require("express");
const path = require("path");
const app = express();
const movieRouter = require("./routes/movieRouter");

app.use(express.json()); // Middleware to parse JSON requests
app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
