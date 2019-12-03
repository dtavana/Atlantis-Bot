import {Provider} from 'discord-akairo';
import {Guild} from 'discord.js';
import {MESSAGES} from '../../lib/constants';
import AtlantisClient from '../client/AtlantisClient';

export default class SettingsManager extends Provider {

    private static getGuildId(guild: string | Guild) {
        if (guild instanceof Guild) { return guild.id; }
        if (guild === 'global' || guild === null) { return '0'; }
        if (/^\d+$/.test(guild)) { return guild; }
        throw new TypeError('Invalid guild specified. Must be a Guild instance, guild ID, "global", or null.');
    }
    private client: AtlantisClient;
    private db;
    public constructor(client: AtlantisClient) {
        super();
        this.client = client;
        this.db = this.client.db;
    }

    public async init(): Promise<void> {
        this.client.sendLog(MESSAGES.SETTINGS_MANAGER.LOADED);
        // Need to cache settings here
    }

    public async clear(guild: string | Guild): Promise<void> {
        const id = SettingsManager.getGuildId(guild);
        this.items.delete(id);
        await this.db.none('DELETE FROM settings WHERE id = $1;', [id]);
    }

    public async delete(guild: string | Guild, key: string): Promise<void> {
        const id = SettingsManager.getGuildId(guild);
        const data = this.items.get(id) || {};
        delete data[key];
        await this.db.none('UPDATE settings SET $1 = null WHERE id = $2;', [key, id]);
    }

    public async get(guild: string | Guild, key: string): Promise<any> {
        const id = SettingsManager.getGuildId(guild);
        return this.items.get(id)[key];
    }

    public async set(guild: string | Guild, key: string, value: any): Promise<void> {
        const id = SettingsManager.getGuildId(guild);
        const data = this.items.get(id) || {};
        data[key] = value;
        this.items.set(id, data);
        await this.db.none('UPDATE settings SET $1 = $2 WHERE id = $3;', [key, value, id]);
    }
}
