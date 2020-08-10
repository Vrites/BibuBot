const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {
	prefix,
} = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Client: Online');
});

// ------------------COMMAND HANDLER---------------
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch (command) {
	case 'help':
		client.commands.get('help').execute(message);
		break;
	case 'cor':
		client.commands.get('currentCorruptionRota').execute(message, args);
		break;
	case 'set':
		client.commands.get('setRotationID').execute(message, args);
		break;
	case 'roll':
		client.commands.get('roll').execute(message);
		break;
	}
});

// client.on('message', (message) => {
//     if(message.content == '!create' && message.member.id == '100267154837872640') {
//         const msg = message.channel.send('Glory mountit\nTapahtuu: 30.7.2020\nKello: 18:00\nLeader: <@164054723345907712>\n')
//         .then(async function(message){
//             await message.react('736990100663304232');
//             await message.react('736990085609816084');
//             await message.react('736990051149545472');
//             await message.react('736990068413300786');
//             const tankFilter = (reaction, user) => {
//                 return reaction.emoji.id === '736990100663304232' && user.id != client.user;
//             };
//             const healFilter = (reaction, user) => {
//                 return reaction.emoji.id === '736990085609816084' && user.id != client.user;
//             };
//             const dpsFilter = (reaction, user) => {
//                 return reaction.emoji.id === '736990051149545472' && user.id != client.user;
//             };
//             const cancelFilter = (reaction, user) => {
//                 return reaction.emoji.id === '736990068413300786' && user.id == '100267154837872640';
//             };

//             const tankCollector = message.createReactionCollector(tankFilter, { max: 2, time: 345600000 });
//             const healCollector = message.createReactionCollector(healFilter, { time: 345600000 });
//             const dpsCollector = message.createReactionCollector(dpsFilter, { time: 345600000 });
//             const cancelCollector = message.createReactionCollector(cancelFilter, { time: 345600000 });

//             tankCollector.on('collect', (reaction, user) => {
//                 if(!message.content.includes(user)){
//                     message.edit(message.content + '\n<:tank:736990100663304232>' + '<@' + user + '>\n');
//                 }
//             });
//             healCollector.on('collect', (reaction, user) => {
//                 if(!message.content.includes(user)){
//                     message.edit(message.content + '\n<:heal:736990085609816084>' + '<@' + user + '>\n');
//                 }
//             });
//             dpsCollector.on('collect', (reaction, user) => {
//                 if(!message.content.includes(user)){
//                     message.edit(message.content + '\n<:dps:736990051149545472>' + '<@' + user + '>\n');
//                 }
//             });
//             cancelCollector.on('collect', (reaction, user) => {
//                 if(user == '100267154837872640'){
//                     message.delete();
//                 }

//             });

//         });

//     }
// });


client.login(process.env.token);