'use strict'

class Feedback {
    constructor() {
        this.name = ''
    }

    send() {
        alert('send ' + this.name)
    }
}

const feedbackController = [
    Feedback
]

const feedback = {
    template: require('./feedback.html'),
    controller: feedbackController
}

export default feedback