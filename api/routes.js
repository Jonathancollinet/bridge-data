'use strict'

function routes(router, cluster) {

    router.get('/', root)

    function root(req, res) {
        res.sendFile('/index.html')
    }

    router = require('./controllers/bridge')(router)

    return router
}

module.exports = routes