const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n=== HOMEBASE API Listening on http://localhost:${PORT} ===\n`);
})