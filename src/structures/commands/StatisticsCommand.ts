import {Command} from 'discord-akairo';
import {Message} from 'discord.js';
import {COMMAND_CATEGORIES} from '../../lib/constants';

export default class StatisticsCommand extends Command {
    public constructor() {
        super('statistics', {
            aliases: ['stats'],
            category: COMMAND_CATEGORIES.MISC,
        });
    }

    public async exec(message: Message) {
        this.client.sendLog('Stats command run');
    }
}
