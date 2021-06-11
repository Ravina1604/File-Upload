import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import fileAPI from "../api/fileApi";

export default class Delete extends Command {
  static description = "Delete a file from uploaded list";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "filename" }];

  async run() {
    const { args, flags } = this.parse(Delete);
    let fileId = args.filename;

    if (fileId) {
      const fileName: any = await fileAPI.remove(fileId);
      if (fileName.error) {
        this.error(chalk.red("Please specify correct file name"));
      } else {
        this.log(`${chalk.green("[Success]")} File Deleted: ${fileName}`);
      }
    } else {
      this.error(chalk.red("Please specify the file name"));
    }
  }
}
