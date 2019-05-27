module.exports = { 
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/homeBase.sqlite3'
        },
        useNullAsDefault: true
    }
};