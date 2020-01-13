const { join } = require('path');
const createLogger = require('progress-estimator');
const { exec } = require('child-process-promise');

const logger = createLogger({
  // 创建日志，.progress-estimator为日志文件夹
  storagePath: join(__dirname, '.progress-estimator'),
});

/**
 * 
 * @param {function} promise 执行命令行的promise函数
 * @param {string} text 标注当前执行的命令名称
 * @param {number} estimate 预计时间值
 */
const logPromise = async (promise, text, estimate) => {
  logger(promise, text, { estimate });
}

const params = {};
params.cwd = join(__dirname, '..', 'tmpSrc');
// params.packages = await getPublicPackages();


const run = async ({ cwd }) => {
  const defaultOptions = {
    cwd,
  };
  console.log(defaultOptions)

  await exec('yarn install', defaultOptions);
  // await exec('yarn build -- --extract-errors', defaultOptions);

  const tempNodeModulesPath = join(cwd, 'build', 'node_modules');
  console.log(tempNodeModulesPath)

  // const buildPath = join(cwd, 'build');

  // await exec(`cp -r ${tempNodeModulesPath} ${buildPath}`);
};

logPromise(run(params), 'Building Test Project', 600000);
