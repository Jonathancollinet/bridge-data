'use strict'

require('./home.scss')

class Home {
    constructor() {}
}

const homeController = [
    Home
]

const home = {
    template: require('./home.html'),
    controller: homeController
}

export default home