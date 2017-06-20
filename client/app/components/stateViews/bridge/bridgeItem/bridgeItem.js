'use strict'

class BridgeItem {
    constructor() {
    }

}

const bridgeItemController = [
    BridgeItem
]

const bridgeItem = {
    bindings: {
        bridge: '<'
    },
    template: require('./bridgeItem.html'),
    controller: bridgeItemController
}

export default bridgeItem