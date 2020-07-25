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
            message.channel.send('```' + vendorData.rotationThree + '```');
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
            message.channel.send('```' + vendorData.rotationFour + '```');
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
            message.channel.send('```' + vendorData.rotationFive + '```');
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
            message.channel.send('```' + vendorData.rotationSix + '```');
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
            message.channel.send('```' + vendorData.Striketthrough + '```');
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


client.login(process.env.token);