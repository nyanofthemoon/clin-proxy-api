const restifyPlugins = require('restify').plugins

module.exports = (server) => {
    server.use(restifyPlugins.acceptParser([
        'application/json'
    ]))
}
