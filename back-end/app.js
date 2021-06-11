const express = require("express");
const cors = require("cors");
var indexRouter = require("./src/routes/index");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

// router file for differnt api
app.use("/files", indexRouter);

app.listen(9000, function () {
  console.log("Example app listening on port 9000!");
});

module.exports = app;
