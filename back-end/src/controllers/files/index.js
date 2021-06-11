const fs = require("fs");
const path = require("path");
const {
  addFile,
  deleteFileByName,
  fetchFiles,
} = require("../../utils/commonFunctions");

const upload = require("../../middleware/multer-uploader");

const filePath = path.join(__dirname, "../../..", "public/uploaded-files");

//using middleware to call to save in public folder to save it there before in JSON
const uploadFileMiddleware = upload.single("file");

// to upload file with new created Formdata object
const uploadFile = (req, res) => {
  uploadFileMiddleware(req, res, async function (err) {
    if (err) {
      return res
        .status(409)
        .json({ message: "File upload failed", file: req.file });
    }

    await addFile(req.file);
    res
      .status(201)
      .json({ message: "File uploaded successfully", file: req.file });
  });
};

// to delete file from public folder and as well from to delete metadata from JSON
const deleteFile = async (req, res) => {
  let name = req.params.name;
  fs.unlink(path.join(filePath, name), (err) => {
    if (err) {
      return res
        .status(409)
        .json({ message: "Failed to delete file", file: req.file });
    } else {
      deleteFileByName(name);
      res.status(200).json({
        message: "File deleted",
        fileId: name,
      });
    }
  });
};

// to get all files metadata from JSON
const getFiles = async (req, res) => {
  try {
    const files = await fetchFiles(req.file);
    res.status(200).json({ files });
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteFile, getFiles, uploadFile };
