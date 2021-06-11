import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import * as fs from "fs";
import fileAPI from "../api/fileApi";

export default class Upload extends Command {
  static description = "Upload a new file";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "filepath" }];

  async run() {
    const { args, flags } = this.parse(Upload);

    const file = args.filepath;

    if (file) {
      let filedata = fs.createReadStream(file);

      fileAPI
        .upload(filedata)
        .then((res) => {
          if (res.success) {
            this.log(
              `${chalk.green("[Success]")} File uploaded succesfully${file}`
            );
          }
        })
        .catch((e) => {
          const oclifHandler = require("@oclif/errors/handle");
          this.log(chalk.red("Couldn't upload file. Please try again"));
          return oclifHandler(e);
        });
    } else {
      this.error(chalk.red("Please specify the filepath"));
    }
  }
}
