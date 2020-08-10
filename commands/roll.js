module.exports = {
	name: 'roll',
	description: 'Roll between the numbers 0-100 to show your gayness.',
	execute(message) {
		const rolledNumber = Math.floor(Math.random() * Math.floor(100));
		message.channel.send('<@' + message.author.id + '> rolled: ' + rolledNumber);
	},
};