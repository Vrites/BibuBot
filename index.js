const Discord = require('discord.js');
const client = new Discord.Client();
let fs = require('fs');
let date = new Date();

client.setMaxListeners(20);

client.on('ready', () => {
    console.log('I am online');
    let day = date.getUTCDay();
    let hours = date.getUTCHours();
    console.log(day + ' ' + hours);
})

//------------------HELP----------------------

client.on('message', (message) => {
    if(message.content == '!help') {
        fs.readFile('./helppage.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Help + '```');
        })
    }
});

//-------------------ROLL----------------------

client.on('message', (message) => {
    if(message.content == '!roll'){
        let rolledNumber = getRandomInt(100);
        message.channel.send('<@'+ message.author.id + '> rolled: ' + rolledNumber);
    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//------------------CORRUPTION COMMANDS---------------------------

client.on('message', (message) => {
    if(message.content == '!cor') {
        fs.readFile('./vendor.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.rotationFive + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!cor next') {
        fs.readFile('./vendor.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.rotationSix + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!cor next next') {
        fs.readFile('./vendor.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.rotationSeven + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!cor next next next') {
        fs.readFile('./vendor.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.rotationEight + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!severe') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Severe + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!infinite stars' || message.content == '!is') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.IS + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!masterful') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Masterful + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!ineffable truth' || message.content == '!ineffable') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Ineffable + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!twilight devastation' || message.content == '!td') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.TD + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!versatile') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Versatile + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!expedient') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Expedient + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!twisted appendage' || message.content == '!mind flay') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.MindFlay + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!void ritual') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.VoidRitual + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!gushing wound' || message.content == '!gw') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.GW + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!strikethrough') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Strikethrough + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!avoidant') {
        fs.readFile('./rotationID.json', 'utf8', (err, jsonString) => {
            if(err){
                console.log("Error: " + err);
                return;
            }
            const vendorData = JSON.parse(jsonString);
            message.channel.send('```' + vendorData.Avoidant + '```');
        })
    }
});

client.on('message', (message) => {
    if(message.content == '!create' && message.member.id == '100267154837872640') {
        const msg = message.channel.send('Glory mountit\nTapahtuu: 30.7.2020\nKello: 18:00\nLeader: <@164054723345907712>\n')
        .then(async function(message){
            await message.react('736990100663304232');
            await message.react('736990085609816084');
            await message.react('736990051149545472');
            await message.react('736990068413300786');
            const tankFilter = (reaction, user) => {
                return reaction.emoji.id === '736990100663304232' && user.id != client.user;
            };
            const healFilter = (reaction, user) => {
                return reaction.emoji.id === '736990085609816084' && user.id != client.user;
            };
            const dpsFilter = (reaction, user) => {
                return reaction.emoji.id === '736990051149545472' && user.id != client.user;
            };
            const cancelFilter = (reaction, user) => {
                return reaction.emoji.id === '736990068413300786' && user.id == '100267154837872640';
            };

            const tankCollector = message.createReactionCollector(tankFilter, { max: 2, time: 345600000 });
            const healCollector = message.createReactionCollector(healFilter, { time: 345600000 });
            const dpsCollector = message.createReactionCollector(dpsFilter, { time: 345600000 });
            const cancelCollector = message.createReactionCollector(cancelFilter, { time: 345600000 });

            tankCollector.on('collect', (reaction, user) => {
                if(!message.content.includes(user)){
                    message.edit(message.content + '\n<:tank:736990100663304232>' + '<@' + user + '>\n');
                }
            });
            healCollector.on('collect', (reaction, user) => {
                if(!message.content.includes(user)){
                    message.edit(message.content + '\n<:heal:736990085609816084>' + '<@' + user + '>\n');
                }
            });
            dpsCollector.on('collect', (reaction, user) => {
                if(!message.content.includes(user)){
                    message.edit(message.content + '\n<:dps:736990051149545472>' + '<@' + user + '>\n');
                }
            });
            cancelCollector.on('collect', (reaction, user) => {
                if(user == '100267154837872640'){
                    message.delete();
                }

            });

        
        });

    }
});


client.login(process.env.token);