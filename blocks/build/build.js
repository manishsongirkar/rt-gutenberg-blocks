/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);



/* Set up variables */
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    RichText = _wp$blocks.RichText,
    children = _wp$blocks.source.children,
    InspectorControls = _wp$blocks.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;

/* Register block type */

registerBlockType('rt-blocks/timeline', {

	title: __('Timeline'),
	icon: 'list-view',
	category: 'common',

	attributes: {

		timelineTitle: {
			type: 'array',
			source: 'children',
			selector: '.timeline-title'
		},

		timelineContent: {
			type: 'array',
			source: 'children',
			selector: '.timeline-description'
		},

		releaseType: {
			type: 'select',
			default: 'major'
		},

		newslink: {
			type: 'url',
			selector: '.timeline-news-link'
		},

		bloglink: {
			type: 'url',
			selector: '.timeline-blog-link'
		}

	},

	edit: function edit(props) {
		var focus = props.focus,
		    _props$attributes = props.attributes,
		    releaseType = _props$attributes.releaseType,
		    releaseDate = _props$attributes.releaseDate,
		    timelineTitle = _props$attributes.timelineTitle,
		    timelineContent = _props$attributes.timelineContent,
		    newslink = _props$attributes.newslink,
		    bloglink = _props$attributes.bloglink,
		    className = props.className,
		    setFocus = props.setFocus;

		var availableTypes = [{ value: 'major', label: __('Major Release') }, { value: 'minor', label: __('Minor Release') }];

		/* Event handlers */
		var onChangeType = function onChangeType(newreleaseType) {
			props.setAttributes({ releaseType: newreleaseType });
		};

		var onChangeDate = function onChangeDate(newreleaseDate) {
			props.setAttributes({ releaseDate: newreleaseDate });
		};

		var onTitleChange = function onTitleChange(newtimelineTitle) {
			props.setAttributes({ timelineTitle: newtimelineTitle });
		};

		var onContentChange = function onContentChange(newtimelineContent) {
			props.setAttributes({ timelineContent: newtimelineContent });
		};

		var onChangenewslink = function onChangenewslink(newnewslink) {
			props.setAttributes({ newslink: newnewslink });
		};

		var onChangebloglink = function onChangebloglink(newbloglink) {
			props.setAttributes({ bloglink: newbloglink });
		};

		var onFocusTitle = function onFocusTitle(focus) {
			props.setFocus(_.extend({}, focus, { editable: 'timelineTitle' }));
		};

		var onFocusContent = function onFocusContent(focus) {
			props.setFocus(_.extend({}, focus, { editable: 'timelineContent' }));
		};

		return wp.element.createElement(
			'div',
			{ className: className + ' timeline-' + releaseType },
			!!focus && wp.element.createElement(
				InspectorControls,
				{ key: 'inspector' },
				wp.element.createElement(SelectControl, {
					type: 'select',
					label: __('WordPress Release Type'),
					value: releaseType,
					onChange: onChangeType,
					options: availableTypes
				}),
				wp.element.createElement(TextControl, {
					type: 'date',
					label: __('Set Release Date'),
					value: releaseDate ? releaseDate : null,
					onChange: onChangeDate
				}),
				wp.element.createElement(TextControl, {
					type: 'url',
					label: __('News article link'),
					value: newslink,
					onChange: onChangenewslink
				}),
				wp.element.createElement(TextControl, {
					type: 'url',
					label: __('Blog article link'),
					value: bloglink,
					onChange: onChangebloglink
				})
			),
			wp.element.createElement(
				'div',
				{ className: 'timeline-container' },
				wp.element.createElement(
					'time',
					{ className: 'timeline-date' },
					releaseDate ? moment(releaseDate).local().format('MMM, Y') : ''
				),
				wp.element.createElement('div', { className: 'separator' }),
				wp.element.createElement(
					'div',
					{ className: 'content-wrap' },
					wp.element.createElement(
						'div',
						{ className: 'content-inner' },
						wp.element.createElement(RichText, {
							className: 'timeline-title',
							tagName: 'h3',
							onChange: onTitleChange,
							value: timelineTitle,
							focus: setFocus,
							placeholder: __('Title'),
							onFocus: onFocusTitle
						}),
						wp.element.createElement(RichText, {
							tagName: 'p',
							className: 'timeline-description',
							inline: true,
							placeholder: __('Enter contributors list here'),
							value: timelineContent,
							onChange: onContentChange,
							focus: setFocus,
							onFocus: onFocusContent,
							children: wp.element.createElement('span', { 'class': 'dashicons dashicons-groups' })
						}),
						wp.element.createElement(
							'div',
							{ className: 'postlinks' },
							newslink || bloglink ? wp.element.createElement(
								'strong',
								null,
								'Links: '
							) : null,
							newslink ? wp.element.createElement(
								'a',
								{ href: newslink, className: 'timeline-news-link' },
								__('News')
							) : '',
							bloglink ? wp.element.createElement(
								'a',
								{ href: bloglink, className: 'timeline-blog-link' },
								__('Blog')
							) : ''
						)
					)
				)
			)
		);
	},

	save: function save(props) {
		var className = props.className,
		    _props$attributes2 = props.attributes,
		    releaseType = _props$attributes2.releaseType,
		    releaseDate = _props$attributes2.releaseDate,
		    timelineTitle = _props$attributes2.timelineTitle,
		    timelineContent = _props$attributes2.timelineContent,
		    newslink = _props$attributes2.newslink,
		    bloglink = _props$attributes2.bloglink;


		return wp.element.createElement(
			'div',
			{ className: className + ' timeline-' + releaseType },
			wp.element.createElement(
				'div',
				{ className: 'timeline-container' },
				wp.element.createElement(
					'time',
					{ className: 'timeline-date' },
					releaseDate ? moment(releaseDate).local().format('MMM, Y') : ''
				),
				wp.element.createElement('div', { className: 'separator' }),
				wp.element.createElement(
					'div',
					{ className: 'content-wrap' },
					wp.element.createElement(
						'div',
						{ className: 'content-inner' },
						wp.element.createElement(
							'h3',
							{ className: 'timeline-title' },
							timelineTitle,
							'minor' === releaseType ? wp.element.createElement(
								'span',
								null,
								'(Minor Release)'
							) : ''
						),
						wp.element.createElement(
							'p',
							{ className: 'timeline-description', title: 'Contributors' },
							wp.element.createElement('span', { 'class': 'dashicons dashicons-groups' }),
							timelineContent
						),
						wp.element.createElement(
							'div',
							{ className: 'postlinks' },
							newslink || bloglink ? wp.element.createElement(
								'strong',
								null,
								'Links: '
							) : null,
							newslink ? wp.element.createElement(
								'a',
								{ href: newslink, className: 'timeline-news-link' },
								__('News')
							) : '',
							bloglink ? wp.element.createElement(
								'a',
								{ href: bloglink, className: 'timeline-blog-link' },
								__('Blog')
							) : ''
						)
					)
				)
			)
		);
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);