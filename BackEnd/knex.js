module.exports = { 
    development: {
        client: 'sqlite3',
        connection: {
            filename: 'backend/data/homeBase.sqlite3'
        },
        useNullAsDefault: true
    }
};