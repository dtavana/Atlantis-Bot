import pgPromise from 'pg-promise';

const _init = async (db) => {
    // Initialize tables here
};

const _start = () => {
    const pgp = pgPromise();
    const db = pgp(process.env.CONNECTION_STRING as string);
    _init(db).then();
    return db;
};

export default _start();
