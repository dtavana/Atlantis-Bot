import {AkairoClient} from 'discord-akairo';

export const MESSAGES = {
    COMMAND_HANDLER: {
        PROMPT: {
            MODIFY_START: (str: string) => `${str}\n\nType \`cancel\` to cancel the command.`,
            MODIFY_RETRY: (str: string) => `${str}\n\nType \`cancel\` to cancel the command.`,
            TIMEOUT: 'Guess you took too long, the command has been cancelled.',
            ENDED: 'The command has been cancelled.',
            CANCEL: 'The command has been cancelled.',
        },
        LOADED: 'Command Handler has been loaded!',
    },
    EVENTS: {
        // @ts-ignore
        READY: (client: AkairoClient) => `Now logged in as ${client.user.tag} (${client.user.id}). Serving ${client.users.size} users.`,
    },
    INHIBITOR_HANDLER: {
        LOADED: 'Inhibitor Handler has been loaded!',
    },
    LISTENER_HANDLER: {
        LOADED: 'Listener Handler has been loaded!',
    },
    SETTINGS_MANAGER: {
        LOADED: 'Settings manager has been loaded!',
    },
};

export const COMMAND_CATEGORIES = {
    MOD: 'mod',
    MISC: 'misc',
};

export const ROLE_IDS = {
    MOD: '651499746409578496',
};

export const CLIENT_OPTIONS = {
    DEFAULT_PREFIX: 'a!',
    OWNERS: [
        '112762841173368832',
    ],
};
