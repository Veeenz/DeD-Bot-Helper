
import Discord, { Message } from 'discord.js'
import * as config from './config.json';

const client = new Discord.Client();
const types = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];

const rollDice = (type: string, numberOfDice=1): Array<number> => {
    const face: number = parseInt(type.replace("d",""));
    let dices: Array<number> = [];
    for(let i = 0; i < numberOfDice; i++) {
        dices.push(Math.floor((Math.random()*face)+1))
    }
    return dices
}

client.on('message', (message: Message) => {
    if(!message.content.startsWith(config.prefix)) return
    if (message.content.startsWith(`${config.prefix}roll`)) {        
        const args = message.content.split(" ");
        
        if(args.length <= 1) {
            return message.reply("Incorrect syntax, send me something like !roll d4 or !roll d20");
        } else {
            let dado = args[1]
            if(types.includes(dado)) {
                message.reply('Result of the dice: ' + rollDice(dado));
            } else {
                message.reply("Not a valid dice!");
            }
        }

    }

})

client.login(config.token);