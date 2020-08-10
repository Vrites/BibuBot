module.exports = {
	name: 'currentCorruptionRota',
	description: 'Display the current corruption rotation.',
	execute(message, args) {
		const corJson = require('../vendor.json');
		let { corVendorRotation } = require('../config.json');
		const { corVendorRotationRef } = require('../config.json');
		const specificCorruption = require('../rotationID.json');
		console.log(args);
		if(!args.length) {
			return message.channel.send('```' + corJson[corVendorRotationRef[corVendorRotation]] + '```');
		}
		if (args[0] == 'next') {
			if (corVendorRotation == 7) {
				corVendorRotation = 0;
			}
			else {
				corVendorRotation++;
			}
			return message.channel.send('```' + corJson[corVendorRotationRef[corVendorRotation]] + '```');
		}
		switch (args[0]) {
		case 'infinitestars':
			message.channel.send('```' + specificCorruption.IS + '```');
			break;
		case 'is':
			message.channel.send('```' + specificCorruption.IS + '```');
			break;
		case 'td':
			message.channel.send('```' + specificCorruption.TD + '```');
			break;
		case 'severe':
			message.channel.send('```' + specificCorruption.Severe + '```');
			break;
		case 'versatile':
			message.channel.send('```' + specificCorruption.Versatile + '```');
			break;
		case 'expedient':
			message.channel.send('```' + specificCorruption.Expedient + '```');
			break;
		case 'mindflay':
			message.channel.send('```' + specificCorruption.MindFlay + '```');
			break;
		case 'masterful':
			message.channel.send('```' + specificCorruption.Masterful + '```');
			break;
		case 'voidritual':
			message.channel.send('```' + specificCorruption.TD + '```');
			break;
		case 'gushing':
			message.channel.send('```' + specificCorruption.GW + '```');
			break;
		case 'gw':
			message.channel.send('```' + specificCorruption.GW + '```');
			break;
		case 'gushingwound':
			message.channel.send('```' + specificCorruption.GW + '```');
			break;
		case 'ineffable':
			message.channel.send('```' + specificCorruption.Ineffable + '```');
			break;
		case 'ineff':
			message.channel.send('```' + specificCorruption.Ineffable + '```');
			break;
		case 'it':
			message.channel.send('```' + specificCorruption.Ineffable + '```');
			break;
		case 'strikethrough':
			message.channel.send('```' + specificCorruption.Strikethrough + '```');
			break;
		case 'avoidant':
			message.channel.send('```' + specificCorruption.Avoidant + '```');
			break;
		case 'sv':
			message.channel.send('```' + specificCorruption.SurgingVitality + '```');
			break;
		case 'surgingvitality':
			message.channel.send('```' + specificCorruption.SurgingVitality + '```');
			break;
		case 'surging':
			message.channel.send('```' + specificCorruption.SurgingVitality + '```');
			break;
		}
	},
};