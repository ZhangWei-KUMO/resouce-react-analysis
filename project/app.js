const commandLineUsage = require("command-line-usage");
const filesize = require("filesize");

const sections = [
  {
    header: 'Wave Tool',
    content: '生成项目 {italic project} 工具.'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'input',
        typeLabel: '{underline file}',
        description: 'The input to process.'
      },
      {
        name: 'help',
        description: 'Print this usage guide.'
      }
    ]
  }
]
const usage = commandLineUsage(sections)
console.log(usage)

const size = filesize(521321320, { bits: true });
console.log(size)

