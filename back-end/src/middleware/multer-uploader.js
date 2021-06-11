const path = require("path");
const multer = require("multer");

const filePath = path.join(__dirname, "../..", "public/uploaded-files");

const storage = multer.diskStorage({
  destination: filePath,
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${file.originalname}-${Date.now() + ext}`);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
