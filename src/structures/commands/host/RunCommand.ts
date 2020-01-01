import {Command} from 'discord-akairo';
import {Message, MessageEmbed} from 'discord.js';
import {COMMAND_CATEGORIES, MESSAGES} from '../../../lib/constants';

export default class RunCommand extends Command {
    public constructor() {
        super('run', {
            aliases: ['run', 'startscrim', 'runscrim'],
            category: COMMAND_CATEGORIES.HOST,
        });
    }

    public async exec(message: Message) {
        const gameModes = await this.client.db.any('SELECT * FROM gameModes;');
        const gameModesEmbed = new MessageEmbed()
            .setTitle('Select Scrim Game Mode')
            .setColor('GREEN');
        for (let i = 0; i < gameModes.length; i++) {
            const gameMode = gameModes[i];
            gameModesEmbed.addField(`Game Mode ${i + 1}`, gameMode);
        }
        gameModesEmbed.addField(`Game Mode ${gameModes.length + 1}`, MESSAGES.COMMANDS.RUN.CUSTOM_GAMEMODE);
        await message.reply(gameModesEmbed);
    }
}
