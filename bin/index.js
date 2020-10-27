#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');
const {
	serve,
	build,
	initialize,
} = require('../scripts');

// 设定版本
commander.version(pkg.version);

// 创建并初始化项目
commander
	.command('init <name>')
	.description('initialize a project!')
	.action(initialize);

// 启动一个项目
commander
	.command('serve')
	.option('--host <host>', 'set the host')
	.option('--port <port>', 'set the port')
	.option('--env <env>', 'set the env')
	.option('--open', 'enable open default browser')
	.description('start a project!')
	.action(serve)

// 打包一个项目
commander
	.command('build')
	.option('--env <env>', 'set the env')
	.description('build a project!')
	.action(build)

commander.parse(process.argv);

