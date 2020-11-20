#!/usr/bin/env node

const commander = require('commander');
const { prompt } = require('inquirer');
const pkg = require('../package.json');
const { NAME_INPUT, TYPE_CHOICES } = require('../configs');
const {
	serve,
	build,
	initialize,
} = require('../scripts');

// 设定版本
commander.version(pkg.version);

// 创建并初始化项目
commander
	.command('init [name]')
	.description('initialize a project!')
	.action(async (name) => {
		if (!name) {
			// 若未输入项目名称则提醒输入项目名称
			const input = await prompt(NAME_INPUT);
			name = input.name;
		}

		// 选择模板
		const { type } = await prompt(TYPE_CHOICES);

		// 创建项目并初始化
		initialize(name, type);
	});

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

commander
	.command('test')
	.action(() => {
		require('../utils').print('this is a test command');
	})

commander.parse(process.argv);

