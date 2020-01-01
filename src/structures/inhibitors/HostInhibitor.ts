import {Command, Inhibitor} from 'discord-akairo';
import {Message} from 'discord.js';
import {COMMAND_CATEGORIES, ROLE_IDS} from '../../lib/constants';

export default class HostInhibitor extends Inhibitor {
    public constructor() {
        super('host', {
            reason: 'host',
        });
    }

    public async exec(message: Message, command: Command) {
        if (command.categoryID === COMMAND_CATEGORIES.HOST && message.guild && message.member) {
            return !message.member.roles.has(ROLE_IDS.HOST);
        }
        return false;
    }
}
