webpackJsonp([0],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class NavBar {
    constructor(Security) {
        this.Security = Security;
    }

    logout() {
        this.Security.logout();
    }
}

const navBarController = ['Security', NavBar];

const navBar = {
    template: __webpack_require__(77),
    controller: navBarController
};

/* harmony default export */ __webpack_exports__["a"] = (navBar);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Feedback {
    constructor() {
        this.name = '';
    }

    send() {
        alert('send ' + this.name);
    }
}

const feedbackController = [Feedback];

const feedback = {
    template: __webpack_require__(78),
    controller: feedbackController
};

/* harmony default export */ __webpack_exports__["a"] = (feedback);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(85);

class Home {
    constructor(User) {
        this.User = User;
        this.fetchUsers();
    }

    fetchUsers() {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this.users = yield _this.User.query();
        })();
    }

    getRelease(id) {
        return this.Release.get({ id });
    }

    getArtist(id) {
        return this.Artist.get({ id });
    }
}

const homeController = ['User', Home];

const home = {
    template: __webpack_require__(79),
    controller: homeController
};

/* harmony default export */ __webpack_exports__["a"] = (home);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Login {
    constructor(Security, $state) {
        this.user = {
            username: "",
            password: ""
        };
        this.Security = Security;
        this.state = $state;
    }

    login() {
        var _this = this;

        return _asyncToGenerator(function* () {
            const response = yield _this.Security.login(_this.user);

            if (response) {
                _this.state.go('home');
            }
        })();
    }
}

const loginController = ["Security", "$state", Login];

const login = {
    template: __webpack_require__(80),
    controller: loginController
};

/* harmony default export */ __webpack_exports__["a"] = (login);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Offline {
    constructor($state, $interval) {
        $interval(() => {
            if (navigator.onLine) {
                $state.go('home');
            }
        }, 1000);
    }
}

const offlineController = ['$state', '$interval', Offline];

const offline = {
    template: __webpack_require__(81),
    controller: offlineController
};

/* harmony default export */ __webpack_exports__["a"] = (offline);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Signup {
    constructor(Security) {
        this.user = {
            username: "",
            password: "",
            email: ""
        };
        this.Security = Security;
    }

    signup() {
        this.Security.signup(this.user).then(() => {});
    }
}

const signupController = ["Security", Signup];

const signup = {
    template: __webpack_require__(82),
    controller: signupController
};

/* harmony default export */ __webpack_exports__["a"] = (signup);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Bubble {
    constructor($state) {
        this.$onInit = () => {
            this.stateProvider = $state;
            this.action = this.action || this.onClick;
            this.state = this.state || 'login';
            this.icon = this.icon || 'plus';
            this.color = this.color || 'red';
            this.size = this.size || '36';
        };
    }

    onClick() {
        this.stateProvider.go(this.state);
    }
}

const bubbleController = ['$state', Bubble];

const bubble = {
    bindings: {
        action: '=?',
        state: '@?',
        icon: '@?',
        color: '@?',
        size: '@?'
    },
    template: __webpack_require__(83),
    controller: bubbleController
};

/* harmony default export */ __webpack_exports__["a"] = (bubble);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const states = [{
    name: 'home',
    url: '/',
    component: 'home'
}, {
    name: 'feedback',
    url: '/feedback',
    component: 'feedback'
}, {
    name: 'login',
    url: '/login',
    component: 'login'
}, {
    name: 'signup',
    url: '/signup',
    component: 'signup'
}, {
    name: 'offline',
    url: '/offline',
    component: 'offline'
}];

function init($urlRouterProvider, $stateProvider) {
    states.forEach(state => {
        $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/');
}

const config = ['$urlRouterProvider', '$stateProvider', init];

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });


const url = "http://localhost:9003";

const links = {
    user: {
        url: url + '/users'
    }
};

function user($resource) {
    return $resource(links.user.url, links.user.params);
}

const User = ['$resource', user];



/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const url = 'http://localhost:9002';

class Security {
    constructor($state, $location, $http, $q) {
        this.state = $state;
        this.location = $location;
        this.http = $http;
        this.q = $q;
        this.authenticate = false;
    }

    refetch() {
        return this.q((resolve, reject) => {
            this.http.get('http://localhost:9002/auth').then(data => {
                this.authenticate = data.isAuth;
                resolve(this.authenticate);
            });
        });
    }

    login(user) {
        return this.q((resolve, reject) => {
            this.http.post(url + '/login', user).then(response => {
                this.authenticate = true;
                resolve(response);
            }).catch(err => {
                this.authenticate = false;
                resolve(err);
            });
        });
    }

    signup(user) {
        return this.q((resolve, reject) => {
            this.http.post(url + '/signup', user).$promise.then(response => {
                this.authenticate = true;
                resolve(response);
            }).catch(err => {
                this.authenticate = false;
                reject(err);
            });
        });
    }

    isAuth() {
        return this.authenticate;
    }

    logout() {
        this.http.get(url + '/logout').then(response => {
            this.authenticate = false;
            this.state.go('login');
        });
    }
}

const security = ['$state', '$location', '$http', '$q', Security];

/* harmony default export */ __webpack_exports__["a"] = (security);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(30)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_design_icons__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_design_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_design_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_resource__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_resource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_ui_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_ui_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_ui_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_resources__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_security__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_layout_navBar_navBar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_stateViews_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_stateViews_feedback_feedback__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_stateViews_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_stateViews_signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_stateViews_offline_offline__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_utils_bubble_bubble__ = __webpack_require__(57);





// third parties




// resources


// services



// // components

// layout


// stateViews






// utils


const deps = [__WEBPACK_IMPORTED_MODULE_3_angular_resource___default.a, __WEBPACK_IMPORTED_MODULE_4_angular_ui_router___default.a];

const run = ['$state', '$transitions', 'Security', '$http', Run];

__WEBPACK_IMPORTED_MODULE_2_angular___default.a.module('bridgeData', deps).factory('User', __WEBPACK_IMPORTED_MODULE_5__services_resources__["a" /* User */]).factory('Security', __WEBPACK_IMPORTED_MODULE_7__services_security__["a" /* default */]).config(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */]).run(run).component('navBar', __WEBPACK_IMPORTED_MODULE_8__components_layout_navBar_navBar__["a" /* default */]).component('home', __WEBPACK_IMPORTED_MODULE_9__components_stateViews_home_home__["a" /* default */]).component('feedback', __WEBPACK_IMPORTED_MODULE_10__components_stateViews_feedback_feedback__["a" /* default */]).component('login', __WEBPACK_IMPORTED_MODULE_11__components_stateViews_login_login__["a" /* default */]).component('signup', __WEBPACK_IMPORTED_MODULE_12__components_stateViews_signup_signup__["a" /* default */]).component('offline', __WEBPACK_IMPORTED_MODULE_13__components_stateViews_offline_offline__["a" /* default */]).component('bubble', __WEBPACK_IMPORTED_MODULE_14__components_utils_bubble_bubble__["a" /* default */]

// -------------------------------------------------------

);function Run($state, $transitions, Security, $http) {
    $http.defaults.headers.post['Content-Type'] = 'application/json';
    if (!navigator.onLine) {
        $state.go('offline');
    }
    $transitions.onSuccess({}, () => {
        Security.refetch().then(isAuth => {
            if (!isAuth) {
                if ($state.current.name !== "signup" && $state.current.name !== "login") {
                    Security.logout();
                }
            } else {
                $state.go('home');
            }
        });
    });
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  background: white;\n  transition: background 0.4s; }\n  body:hover {\n    background: blue; }\n\n.shadowed, .hoverable:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.hoverable {\n  transition: box-shadow 0.25s linear;\n  box-shadow: none; }\n", ""]);

// exports


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "<a ui-sref=\"home\">Acceuil</a>\n<a ui-sref=\"feedback\">FeedBack</a>\n<button ng-click=\"$ctrl.logout()\">Disconnect</button>"

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "<div>\n    <input type=\"text\" ng-model=\"$ctrl.name\">\n    <button ng-click=\"$ctrl.send()\">Send</button>\n</div>"

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = "<div ng-repeat=\"user in $ctrl.users track by $index\">{{user}}</div>\n<bubble ></bubble>"

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n    <div>\n        <input type=\"text\" ng-model=\"$ctrl.user.username\">\n    </div>\n    <div>\n        <input type=\"password\" ng-model=\"$ctrl.user.password\">\n    </div>\n    <button ng-click=\"$ctrl.login()\">Send</button>\n</div>\n<a ui-sref=\"signup\">Signup here if no account</a>"

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "<div class=\"container center\">\n    <h2>Oups!</h2>\n    <p>It seems that you are offline, so icons does not show as usualy</p>\n</div>"

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n    <input type=\"text\" ng-model=\"$ctrl.user.username\">\n    <input type=\"password\" ng-model=\"$ctrl.user.password\">\n    <input type=\"email\" ng-model=\"$ctrl.user.email\">\n    <button ng-click=\"$ctrl.signup()\">Send</button>\n</div>"

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = "<div class=\"bubble m flat\">\n    <div class=\"material-icons\">add</div>\n</div>"

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(30)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./home.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./home.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[74]);
//# sourceMappingURL=app.0f46d5e0671994e9ae5a.js.map