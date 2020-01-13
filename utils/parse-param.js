#!/usr/bin/env node

'use strict';

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const splitCommaParams = require('./splitCommaParams');

const paramDefinitions = [
  {
    name: 'dry',
    type: Boolean,
    description: 'Dry run command without actually publishing to NPM.',
    defaultValue: false,
  },
  {
    name: 'tags',
    type: String,
    multiple: true,
    description: 'NPM tags to point to the new release.',
  },
  {
    name: 'skipPackages',
    type: String,
    multiple: true,
    description: 'Packages to exclude from publishing',
    defaultValue: [],
  },
];

module.exports = () => {
  const params = commandLineArgs(paramDefinitions);

  const { skipPackages, tags } = params;
  // 如果命令行没有tags，通过commandLineUsage 提示信息
  if (!tags || tags.length === 0) {
    const usage = commandLineUsage([
      {
        content:
          `Publishes the current contents of "build/node_modules" to NPM.\n
          将当前"build/node_modules"打包文件发布到NPM
          `,
      },
      {
        header: 'Options',
        optionList: paramDefinitions,
      },
      {
        header: 'Examples',
        content: [
          {
            desc: 'Dry run test:',
            example: '$ scripts/release/publish.js --dry --tags next',
          },
          {
            desc: 'Publish a new stable | 发布到新的稳定版:',
            example: '$ scripts/release/publish.js --tags next latest',
          },
        ],
      },
    ]);
    // 打印提示信息
    console.log(usage);
    // 退出
    process.exit(1);
  }
  console.log(tags)
  splitCommaParams(skipPackages);
  splitCommaParams(tags);
  console.log(params)

  return params;
};

