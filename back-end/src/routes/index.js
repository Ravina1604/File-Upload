const {
  deleteFile,
  getFiles,
  uploadFile,
} = require("../controllers/files/index");
const express = require("express");
const router = express.Router();

router.get("/", getFiles);

router.post("/", uploadFile);

router.delete("/:name", deleteFile);

module.exports = router;
