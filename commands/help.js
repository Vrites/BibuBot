module.exports = {
	name: 'help',
	description: 'Display all the available commands.',
	execute(message) {
		const helpJson = require('../helppage.json');
		message.channel.send('```' + helpJson.Help + '```');
	},
};