import {Command, Inhibitor} from 'discord-akairo';
import {Message} from 'discord.js';
import {COMMAND_CATEGORIES, ROLE_IDS} from '../../lib/constants';

export default class ModeratorInhibitor extends Inhibitor {
    public constructor() {
        super('moderator', {
            reason: 'moderator',
        });
    }

    public async exec(message: Message, command: Command) {
        if (command.categoryID === COMMAND_CATEGORIES.MOD && message.guild && message.member) {
            return message.member.roles.has(ROLE_IDS.MOD);
        }
        return false;
    }
}
