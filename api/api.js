'use strict'

const cluster = require('cluster')

if (cluster.isMaster) {
    const cpuCount = require('os').cpus().length - 2

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }

    cluster.on('exit', function (worker) {
        console.log('Worker %d died', worker.id)
        cluster.fork()
    })

} else {
    const express = require('express'),
        serverConfig = require('../server.config.json'),
        app = express(),
        port = serverConfig.apiPort,
        morgan = require('morgan'),
        bodyParser = require('body-parser'),
        router = require('./routes')(express.Router(), cluster)

    require('./models/models')

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Credentials', true)
        next()
    })

    app.use(express.static(__dirname + '/public/'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(morgan('tiny'))

    app.use(router)

    app.listen(port, () => {
        console.log('api run on port 9003')
    })
}
