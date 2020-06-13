// 定义参数配置
const argv = require('yargs').argv;

// 获取脚本种的参数e
const env = argv.e;

// require指定的环境配置文件  这个是一个文件名 看到下面你就理解了
const envConfigFile = "../config/env/" + env + ".env.js";

// 将require的配置文件原封不动export回出去
module.exports = require(envConfigFile);