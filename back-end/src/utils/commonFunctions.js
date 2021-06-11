const fs = require("fs");
const path = require("path");

const localStaticPath = "../localStore/uploaded-files.json";

// to add new file using new created file object in JSON
async function addFile(file) {
  try {
    // read JSON file
    const data = await getJsonData(localStaticPath);

    data.files.push({
      ...file,
    });
    writeJsonData(localStaticPath, data);
  } catch (e) {
    console.log(e);
  }
}

// to get file metadata using filepath from JSON
async function getJsonData(filePath) {
  try {
    const res = await fs
      .readFileSync(path.join(__dirname, filePath))
      .toString();
    return JSON.parse(res);
  } catch (e) {
    console.log(e);
  }
}

// to write new updated data in JSON
async function writeJsonData(filePath, content) {
  try {
    await fs.writeFileSync(
      path.join(__dirname, filePath),
      JSON.stringify(content)
    );
  } catch (e) {
    console.log(e);
  }
}

// to delete Particular file using it's name in JSON
const deleteFileByName = async (name) => {
  const data = await getJsonData(localStaticPath);

  // as filename is unique based on date, it will delete particular file
  data.files = data.files.filter((file) => file.filename !== name);
  writeJsonData(localStaticPath, data);
  return { success: true };
};

// to fetch all file metadata from JSON
const fetchFiles = async () => {
  const { files } = await getJsonData(localStaticPath);
  return files;
};

module.exports = {
  addFile,
  getJsonData,
  writeJsonData,
  deleteFileByName,
  fetchFiles,
};
