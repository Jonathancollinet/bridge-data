'use strict'

require('./bridge.scss')

class Bridge {
    constructor(bridgeService) {
        this.Bridge = bridgeService
        this.fetchBridges()
    }

    async fetchBridges() {
        const bridges = await this.Bridge.query().$promise
        this.bridges = bridges
        this.bridges.forEach((e) => console.log(e))
    }
}

const bridgeController = [
    'Bridge',
    Bridge
]

const bridge = {
    template: require('./bridge.html'),
    controller: bridgeController
}

export default bridge