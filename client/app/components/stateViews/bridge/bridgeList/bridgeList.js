'use strict'

class BridgeList {
    constructor() {
        this.$onInit = () => {
            console.log(this.bridges)
        }
    }

}

const bridgeListController = [
    BridgeList
]

const bridgeList = {
    bindings: {
        bridges: '<'
    },
    template: require('./bridgeList.html'),
    controller: bridgeListController
}

export default bridgeList