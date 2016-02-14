/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);

	var LoginForm = __webpack_require__(3);

	ReactDOM.render(React.createElement(LoginForm, null), document.getElementById('login-form'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var LoginTextField = __webpack_require__(4);
	var LoginAuthImg = __webpack_require__(5);

	var LoginForm = React.createClass({
	    displayName: 'LoginForm',

	    render() {
	        return React.createElement(
	            'form',
	            { className: 'form-horizontal' },
	            React.createElement(LoginTextField, {
	                type: 'text',
	                id: 'account',
	                name: 'account',
	                label: 'Username'
	            }),
	            React.createElement(LoginTextField, {
	                type: 'password',
	                id: 'passwd',
	                name: 'passwd',
	                label: 'Password'
	            }),
	            React.createElement(LoginAuthImg, {
	                type: 'text',
	                id: 'passwd2',
	                name: 'passwd2',
	                label: 'Captcha'
	            }),
	            React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                    'div',
	                    { className: 'col-sm-offset-2 col-sm-10' },
	                    React.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-default' },
	                        'Sign in'
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = LoginForm;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var LoginField = React.createClass({
	    displayName: "LoginField",

	    render() {
	        return React.createElement(
	            "div",
	            { className: "form-group" },
	            React.createElement(
	                "label",
	                {
	                    htmlFor: this.props.id,
	                    className: "col-sm-2 control-label"
	                },
	                this.props.label
	            ),
	            React.createElement(
	                "div",
	                { className: "col-sm-10" },
	                React.createElement("input", {
	                    type: this.props.type,
	                    className: "form-control",
	                    id: this.props.id,
	                    name: this.props.name,
	                    placeholder: this.props.placeholder
	                })
	            )
	        );
	    }
	});

	module.exports = LoginField;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	var LoginAuthImg = React.createClass({
	    displayName: "LoginAuthImg",

	    render() {
	        return React.createElement(
	            "div",
	            { className: "form-group" },
	            React.createElement(
	                "label",
	                {
	                    htmlFor: this.props.id,
	                    className: "col-sm-2 control-label"
	                },
	                this.props.label
	            ),
	            React.createElement(
	                "div",
	                { className: "col-sm-10 row" },
	                React.createElement(
	                    "div",
	                    { className: "col-sm-5" },
	                    React.createElement("input", {
	                        type: this.props.type,
	                        className: "form-control",
	                        id: this.props.id,
	                        name: this.props.name,
	                        placeholder: this.props.placeholder
	                    })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-sm-5" },
	                    React.createElement("img", { src: "" })
	                )
	            )
	        );
	    }
	});

	module.exports = LoginAuthImg;

/***/ }
/******/ ]);