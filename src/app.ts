import './lib/loadEnv';
import AtlantisClient from './structures/client/AtlantisClient';

const client = new AtlantisClient();
client.start().then();
