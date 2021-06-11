import axios from "axios";
const FormData = require("form-data");

interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

class FileAPI {
  private files: File[] = [];
  private url = "http://localhost:9000/files/";

  constructor() {
    this.get().then((files) => (this.files = files));
  }

  upload = async (file: any) => {
    const form_data = new FormData();
    form_data.append("file", file);

    return axios
      .post(this.url, form_data, {
        headers: form_data.getHeaders(),
      })
      .then(async (res) => {
        let {
          data: { file },
        } = res;

        this.files.push({ ...file });
        return { success: true };
      })
      .catch((err) => {
        throw err;
      });
  };

  remove = (name: string) => {
    return axios
      .delete(this.url + name)
      .then(async (res) => {
        let {
          data: { fileId },
        } = res;

        this.files = this.files.filter((item) => item.filename !== fileId);
        return fileId;
      })
      .catch((err) => {
        return { error: true };
      });
  };

  get = () => {
    return axios
      .get(this.url)
      .then(async (res) => {
        this.files = res.data.files;
        return this.files;
      })
      .catch((err) => {
        throw err;
      });
  };
}

const api = new FileAPI();
export default api;
