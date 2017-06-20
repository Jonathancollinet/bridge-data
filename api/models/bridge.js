'use strict'

const mongoose = require('mongoose')

function bridge() {
    const bridgeSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        created_at: Date,
        updated_at: Date
    })

    return mongoose.model('Bridge', bridgeSchema)
}

module.exports = bridge()