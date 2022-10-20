// 输入项目名称
const NAME_INPUT = [
	{
		type: 'input',
		message: 'please input project name：',
		name: 'name',
	}
];

// 模板选择
const TYPE_CHOICES = [
	{
		type: 'list',
		message: 'please choose a template：',
		name: 'type',
		choices: [
      { name: 'docsify template for markdown', value: 'DOCSIFY' },
			{ name: 'react template for pc', value: 'REACT_WEB' },
			{ name: 'react template for mobile', value: 'REACT_MOBILE' },
			{ name: 'koa template for node', value: 'KOA_NODE' },
		],
	}
]

module.exports = {
	NAME_INPUT,
	TYPE_CHOICES,
}
