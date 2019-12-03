import {Listener} from 'discord-akairo';
import {MESSAGES} from '../../lib/constants';

export default class ReadyListener extends Listener {
    public constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready',
        });
    }

    public async exec() {
        this.client.sendLog(MESSAGES.EVENTS.READY(this.client));
    }
}
