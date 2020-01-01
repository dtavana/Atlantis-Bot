import {Command, Inhibitor} from 'discord-akairo';
import {Message} from 'discord.js';
import {COMMAND_CATEGORIES, ROLE_IDS} from '../../lib/constants';

export default class AdminInhibitor extends Inhibitor {
    public constructor() {
        super('admin', {
            reason: 'admin',
        });
    }

    public async exec(message: Message, command: Command) {
        if (command.categoryID === COMMAND_CATEGORIES.ADMIN && message.guild && message.member) {
            return !message.member.roles.has(ROLE_IDS.ADMIN);
        }
        return false;
    }
}
