'use strict'

class BridgeForm {
    constructor() {
    }
}

const bridgeFormController = [
    BridgeForm
]

const bridgeForm = {
    template: require('./bridgeForm.html'),
    controller: bridgeFormController
}

module.exports = bridgeForm