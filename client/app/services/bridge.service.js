'use strict'

const url = 'http://localhost:9003'

const bridgeService = [
    '$resource',
    Bridge
]

function Bridge($resource) {
    return $resource(url + '/bridge')
}

module.exports = bridgeService