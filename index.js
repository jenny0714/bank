const express = require("express");
const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();
const port = 3000;

app.use(cors());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static("public"));

app.use("/hi", (req, res) => res.send("Hi!"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
