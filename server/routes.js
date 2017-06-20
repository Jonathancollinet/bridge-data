'use strict'

function routes(router, mongoose, passport) {

    router.get('/', root)

    function root(req, res) {
        res.sendFile('/index.html')
    }

    return router
}

module.exports = routes