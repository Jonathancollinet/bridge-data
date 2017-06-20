'use strict'

import './index.scss'
import 'material-design-icons'

// third parties
import angular from 'angular'
import ngResource from 'angular-resource'
import uiRouter from 'angular-ui-router'

// // components

// layout
import navBar from './components/layout/navBar/navBar'
import footer from './components/layout/footer/footer'

// stateViews
import home from './components/stateViews/home/home'
import feedback from './components/stateViews/feedback/feedback'
import bridge from './components/stateViews/bridge/bridge'
import rotation from './components/stateViews/rotation/rotation'

import bridgeItem from './components/stateViews/bridge/bridgeItem/bridgeItem'
import bridgeList from './components/stateViews/bridge/bridgeList/bridgeList'
import bridgeForm from './components/stateViews/bridge/bridgeForm/bridgeForm'

// services
import bridgeService from './services/bridge.service'

const deps = [
    ngResource,
    uiRouter
]

const run = [
    '$http',
    Run
]

const config = [
    "appConsts",
    "$stateProvider",
    "$urlRouterProvider",
    Config
]

angular.module('bridgeData', deps)

    .constant('appConsts', {
        states: [
            {
                name: 'home',
                url: '/',
                component: 'home'
            },
            {
                name: 'feedback',
                url: '/feedback',
                component: 'feedback'
            },
            {
                name: 'bridge',
                url: '/bridge',
                component: 'bridge'
            },
            {
                name: 'rotation',
                url: '/rotation',
                component: 'rotation'
            }
        ]
    })

    .factory('Bridge', bridgeService)
    .config(config)
    .run(run)
    .component('navBar', navBar)
    .component('footer', footer)

    .component('home', home)
    .component('feedback', feedback)
    .component('rotation', rotation)

    .component('bridge', bridge)
    .component('bridgeItem', bridgeItem)
    .component('bridgeList', bridgeList)
    .component('bridgeForm', bridgeForm)

// -------------------------------------------------------

function Config(appConsts, $stateProvider, $urlRouterProvider) {
    appConsts.states.forEach((state) => $stateProvider.state(state))
    $urlRouterProvider.otherwise('/')
}

function Run($http) {
    $http.defaults.headers.post['Content-Type'] = 'application/json'
}
