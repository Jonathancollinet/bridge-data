'use strict'

function route(router) {

    const Bridge = require('../models/bridge')

    router.get('/bridge', getAll)
    router.get('/bridge/:id', getOne)
    router.post('/bridge', add)
    router.put('/bridge/:id', edit)
    router.delete('/bridge/:id', remove)

    function remove(req, res) {
        Bridge.remove(req.params.id).then((r) => {
            console.log(r)
            res.sendStatus(200)
        }).catch((err) => {
            res.sendStatus(500).json(err)
        })
    }

    function edit(req, res) {
        Bridge.findById(req.params.id)
        .then((bridge) => {
            bridge.name = req.body.name || bridge.name
            bridge.updatedAt = new Date()
            bridge.save((e) => {
                res.end({message: r})
            })
        })
        .catch((err) => {
            res.sendStatus(500).json(err)
        })
    }

    function add(req, res) {
        console.log(req.body)
        const newBridge = new Bridge(req.body)
        newBridge.updatedAt = newBridge.createdAt = new Date()
        newBridge.save().then(() => {
            res.end("good")
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500).json(err)
        })
    }

    function getOne(req, res) {
        Bridge.findOne(req.params.id).then((elem) => {
            res.json(elem)
        }).catch((err) => {
            res.sendStatus(500).json(err)
        })
    }

    function getAll(req, res) {
        Bridge.find().then((data) => {
            console.log(data)
            res.status(200).send(data)
        }).catch((err) => {
            res.sendStatus(500).json(err)
        })
    }

    return router
}

module.exports = route