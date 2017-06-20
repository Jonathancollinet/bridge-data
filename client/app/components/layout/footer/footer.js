'use strict'

require('./footer.scss')

class Footer {
    constructor() {
    }

}

const footerController = [
    Footer
]

const footer = {
    template: require('./footer.html'),
    controller: footerController
}

export default footer