import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import fileAPI from "../api/fileApi";
const Table = require("cli-table");

export default class ListFiles extends Command {
  static description = "List all uploaded files";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const table = new Table({
      head: [chalk.blueBright("index"), chalk.blueBright("file")],
    });
    try {
      const files: any = await fileAPI.get();

      if(files.length === 0) {
        this.log(chalk.red("No files are available"));
        
      } else {
        files.forEach((file: any, index: number) => {
          table.push([index, file.filename]);
        });
        this.log(table.toString());
      }
     
    } catch (err) {
      this.error(chalk.red("Not able to fech files"));
    }
  }
}
