module.exports = {
	name: 'setRotationID',
	description: 'Sets the corruption vendor rotation to a specific index.',
	execute(message, args) {
		// User of this command must be Aville :)
		if(message.author.id != '100267154837872640') return;
		const configJSON = require('../config.json');
		const fs = require('fs');

		const setIdArg = parseInt(args[0]);
		configJSON.corVendorRotation = setIdArg;

		fs.writeFile('./config.json', JSON.stringify(configJSON, null, 2), function writeJSON(err) {
			if(err) return console.log(err);
			console.log(JSON.stringify(configJSON));
			console.log('Setting rotation ID in config.json');
		});
		message.channel.send('```Rotation set to ' + args[0] + '```');
	},
};