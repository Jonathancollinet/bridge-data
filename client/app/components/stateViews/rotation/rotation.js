'use strict'

require('./rotation.scss')

class Rotation {
    constructor() {}
}

const rotationCtrl = [
    Rotation
]

const rotation = {
    template: require('./rotation.html'),
    controller: rotationCtrl
}

export default rotation