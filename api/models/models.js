'use strict'

const config = require('../../server.config.json'),
    mongoose = require('mongoose')

function models() {

    connect()

    const Bridge = require('./bridge')(mongoose)

    return {
        bridge: Bridge
    }

}

function connect() {
    mongoose.connect(`mongodb://localhost/${config.mongoose.database}`)
}

module.exports = models()