import DiscordJs, { Intents, Message } from 'discord.js'
import DotEnv from 'dotenv'

DotEnv.config()

const client = new DiscordJs.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot ready');
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
})

client.login(process.env.TOKEN)