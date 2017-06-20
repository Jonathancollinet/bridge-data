'use strict'

require('./navBar.scss')

class NavBar {
    constructor(appConsts) {
        this.links = angular.copy(appConsts.states)
    }

}

const navBarController = [
    "appConsts",
    NavBar
]

const navBar = {
    template: require('./navBar.html'),
    controller: navBarController
}

export default navBar