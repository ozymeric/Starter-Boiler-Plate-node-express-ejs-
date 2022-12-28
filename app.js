// #########################################################
// #########################################################
// #########################################################
const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

const defaultRoutes = require("./routes/default");

const dataFile = require("./util/dataFileFetch");

// #########################################################
// #########################################################
// #########################################################

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", defaultRoutes);

// #########################################################
// #########################################################
// #########################################################

app.get("/filedata", function (req, res) {
  const fileData = dataFile.fetchFileData();
  res.render("datacontent", { file: fileData });
});

app.listen(3000, function () {
  console.log("Server is up and running on port: 3000");
});

// #########################################################
// #########################################################
// #########################################################
