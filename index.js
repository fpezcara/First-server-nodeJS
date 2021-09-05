const express = require("express");

const app = express();

const path = require("path");
const publicDirPath = path.join(__dirname, "/");

app.use(express.static(publicDirPath, { extensions: ["html"] }));

app.use((req, res) => {
  res.status(404).sendFile(publicDirPath + "404.html");
});

app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
