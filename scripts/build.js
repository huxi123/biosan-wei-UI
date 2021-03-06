
// const { execSync } = require('child_process');
const chalk = require('chalk');
// const exec = require('shelljs.exec');
const filePath = require('./config');

require('shelljs/global');
const argv = JSON.parse(process.env.npm_config_argv).original;
/**
 * 构建dist  传入dist
 * 构建weichatWebsite 传入weichatDemo
 */
var args  = argv.slice(2);

let arg = check(args);
console.log(1)
if(arg){
    let _path = getFilePath(arg);
    console.log(chalk.green(_path))
    // console.log(child_process)
    exec(`gulp build --gulpfile scripts/gulpfile.js --dist ${_path} --color`);
    console.log(chalk.green("success......."));
}


function check(args){
    console.log(chalk.green("building......."));
    if(!Array.isArray(args) || args.length==0){
        console.log(chalk.red("---------------------------------"));
        console.log(chalk.red("--构建命令错误！！"));
        console.log(chalk.red("--example:npm run build arg1 arg2"));
        console.log(chalk.red("--必须传入构建参数！"));
        console.log(chalk.red("--构建dist  传入dist"));
        console.log(chalk.red("--构建weichatWebsite 传入weichatDemo"));
        console.log(chalk.red("---------------------------------"));
        console.log(chalk.red("end......."));
        process.exit(0);
    }
    let [ arg1 ] = args;
    return arg1;
}


function getFilePath(arg){
    let path = "";
    switch (arg) {
        case 'dist':
            path = filePath.dist;
            break;
        case 'weichatDemo':
            path = filePath.weichatDemo;
        break;
        default:
            break;
    }
    return path;
}

