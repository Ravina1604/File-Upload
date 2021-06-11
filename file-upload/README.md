file-upload
===========

File upload app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/file-upload.svg)](https://npmjs.org/package/file-upload)
[![Downloads/week](https://img.shields.io/npm/dw/file-upload.svg)](https://npmjs.org/package/file-upload)
[![License](https://img.shields.io/npm/l/file-upload.svg)](https://github.com/File_Upload_system/file-upload/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g file-upload
$ file-upload COMMAND
running command...
$ file-upload (-v|--version|version)
file-upload/1.0.0 win32-x64 node-v14.16.1
$ file-upload --help [COMMAND]
USAGE
  $ file-upload COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`file-upload delete [FILE]`](#file-upload-delete-file)
* [`file-upload hello [FILE]`](#file-upload-hello-file)
* [`file-upload help [COMMAND]`](#file-upload-help-command)
* [`file-upload list-files [FILE]`](#file-upload-list-files-file)
* [`file-upload upload [FILE]`](#file-upload-upload-file)

## `file-upload delete [FILE]`

describe the command here

```
USAGE
  $ file-upload delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/delete.ts](https://github.com/File_Upload_system/file-upload/blob/v1.0.0/src/commands/delete.ts)_

## `file-upload hello [FILE]`

describe the command here

```
USAGE
  $ file-upload hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ file-upload hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/File_Upload_system/file-upload/blob/v1.0.0/src/commands/hello.ts)_

## `file-upload help [COMMAND]`

display help for file-upload

```
USAGE
  $ file-upload help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `file-upload list-files [FILE]`

describe the command here

```
USAGE
  $ file-upload list-files [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list-files.ts](https://github.com/File_Upload_system/file-upload/blob/v1.0.0/src/commands/list-files.ts)_

## `file-upload upload [FILE]`

Upload a new file

```
USAGE
  $ file-upload upload [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/upload.ts](https://github.com/File_Upload_system/file-upload/blob/v1.0.0/src/commands/upload.ts)_
<!-- commandsstop -->
