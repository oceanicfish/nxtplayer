(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NXPlayer"] = factory();
	else
		root["NXPlayer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodeB64ToUint8Array)
/* harmony export */ });
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_0__);


var atob = function atob(s) {
  return (global_window__WEBPACK_IMPORTED_MODULE_0___default().atob) ? global_window__WEBPACK_IMPORTED_MODULE_0___default().atob(s) : Buffer.from(s, 'base64').toString('binary');
};

function decodeB64ToUint8Array(b64Text) {
  var decodedString = atob(b64Text);
  var array = new Uint8Array(decodedString.length);

  for (var i = 0; i < decodedString.length; i++) {
    array[i] = decodedString.charCodeAt(i);
  }

  return array;
}

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/media-groups.js":
/*!************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/media-groups.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEachMediaGroup": () => (/* binding */ forEachMediaGroup)
/* harmony export */ });
/**
 * Loops through all supported media groups in master and calls the provided
 * callback for each group
 *
 * @param {Object} master
 *        The parsed master manifest object
 * @param {string[]} groups
 *        The media groups to call the callback for
 * @param {Function} callback
 *        Callback to call for each media group
 */
var forEachMediaGroup = function forEachMediaGroup(master, groups, callback) {
  groups.forEach(function (mediaType) {
    for (var groupKey in master.mediaGroups[mediaType]) {
      for (var labelKey in master.mediaGroups[mediaType][groupKey]) {
        var mediaProperties = master.mediaGroups[mediaType][groupKey][labelKey];
        callback(mediaProperties, mediaType, groupKey, labelKey);
      }
    }
  });
};

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/resolve-url.js":
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/resolve-url.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js");
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_LOCATION = 'http://example.com';

var resolveUrl = function resolveUrl(baseUrl, relativeUrl) {
  // return early if we don't need to resolve
  if (/^[a-z]+:/i.test(relativeUrl)) {
    return relativeUrl;
  } // if baseUrl is a data URI, ignore it and resolve everything relative to window.location


  if (/^data:/.test(baseUrl)) {
    baseUrl = (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location.href) || '';
  } // IE11 supports URL but not the URL constructor
  // feature detect the behavior we want


  var nativeURL = typeof (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL) === 'function';
  var protocolLess = /^\/\//.test(baseUrl); // remove location if window.location isn't available (i.e. we're in node)
  // and if baseUrl isn't an absolute url

  var removeLocation = !(global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && !/\/\//i.test(baseUrl); // if the base URL is relative then combine with the current location

  if (nativeURL) {
    baseUrl = new (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL)(baseUrl, (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) || DEFAULT_LOCATION);
  } else if (!/\/\//i.test(baseUrl)) {
    baseUrl = url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL((global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location.href) || '', baseUrl);
  }

  if (nativeURL) {
    var newUrl = new URL(relativeUrl, baseUrl); // if we're a protocol-less url, remove the protocol
    // and if we're location-less, remove the location
    // otherwise, return the url unmodified

    if (removeLocation) {
      return newUrl.href.slice(DEFAULT_LOCATION.length);
    } else if (protocolLess) {
      return newUrl.href.slice(newUrl.protocol.length);
    }

    return newUrl.href;
  }

  return url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL(baseUrl, relativeUrl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveUrl);

/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/conventions.js":
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
})

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
})

exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom-parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");
var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
var entities = __webpack_require__(/*! ./entities */ "./node_modules/@xmldom/xmldom/lib/entities.js");
var sax = __webpack_require__(/*! ./sax */ "./node_modules/@xmldom/xmldom/lib/sax.js");

var DOMImplementation = dom.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	if(source && typeof source === 'string'){
		sax.parse(source,defaultNSMap,entityMap);
	}else{
		sax.errorHandler.error("invalid doc source");
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.DOMParser = DOMParser;

/**
 * @deprecated Import/require from main entry point instead
 */
exports.DOMImplementation = dom.DOMImplementation;

/**
 * @deprecated Import/require from main entry point instead
 */
exports.XMLSerializer = dom.XMLSerializer;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");

var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		dest[p] = src[p];
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class)
		}
		pt.constructor = Class
	}
}

// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0, 
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */
	item: function(index) {
		return this[index] || null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	}
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if(list._inc != inc){
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list,'length',ls.length);
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i];
}

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
		
		
	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	
	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {
}

DOMImplementation.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises 
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises 
		this.insertBefore(newChild,oldChild);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
    				if(map[n] == namespaceURI){
    					return n;
    				}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(prefix in map){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}

function _onUpdateChild(doc,el,newChild){
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if(newChild){
			cs[cs.length++] = newChild;
		}else{
			//console.log(1)
			var child = el.firstChild;
			var i = 0;
			while(child){
				cs[i++] = child;
				child =child.nextSibling;
			}
			cs.length = i;
		}
	}
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode,child){
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if(previous){
		previous.nextSibling = next;
	}else{
		parentNode.firstChild = next
	}
	if(next){
		next.previousSibling = previous;
	}else{
		parentNode.lastChild = previous;
	}
	_onUpdateChild(parentNode.ownerDocument,parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode,newChild,nextChild){
	var cp = newChild.parentNode;
	if(cp){
		cp.removeChild(newChild);//remove and update
	}
	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	}else{
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;
	
	
	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parentNode.firstChild = newFirst;
	}
	if(nextChild == null){
		parentNode.lastChild = newLast;
	}else{
		nextChild.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parentNode;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}
function _appendSingleChild(parentNode,newChild){
	var cp = newChild.parentNode;
	if(cp){
		var pre = parentNode.lastChild;
		cp.removeChild(newChild);//remove and update
		var pre = parentNode.lastChild;
	}
	var pre = parentNode.lastChild;
	newChild.parentNode = parentNode;
	newChild.previousSibling = pre;
	newChild.nextSibling = null;
	if(pre){
		pre.nextSibling = newChild;
	}else{
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
	return newChild;
	//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
			this.documentElement = newChild;
		}

		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames)
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class')
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames)
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet))
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue= node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},
	
	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},
	
	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},
	
	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;
			
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);
	
	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;
	
	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
		return false;
	}
	
	var i = visibleNamespaces.length 
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml/#CleanAttrVals
 * @see https://www.w3.org/TR/xml/#NT-AttValue
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<&"]/g,_xmlEncoder), '"')
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;
		
		isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML

		var prefixedNodeName = nodeName
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node		
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}
		
		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 */
		return buf.push(node.data
			.replace(/[<&]/g,_xmlEncoder)
			.replace(/]]>/g, ']]&gt;')
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for(var n in node){
		var v = node[n];
		if(typeof v != 'object' ){
			if(v != node2[n]){
				node2[n] = v;
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})
		
		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DocumentType = DocumentType;
	exports.DOMException = DOMException;
	exports.DOMImplementation = DOMImplementation;
	exports.Element = Element;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/entities.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var freeze = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({amp:'&', apos:"'", gt:'>', lt:'<', quot:'"'})

/**
 * A map of currently 241 entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
       lt: '<',
       gt: '>',
       amp: '&',
       quot: '"',
       apos: "'",
       Agrave: "À",
       Aacute: "Á",
       Acirc: "Â",
       Atilde: "Ã",
       Auml: "Ä",
       Aring: "Å",
       AElig: "Æ",
       Ccedil: "Ç",
       Egrave: "È",
       Eacute: "É",
       Ecirc: "Ê",
       Euml: "Ë",
       Igrave: "Ì",
       Iacute: "Í",
       Icirc: "Î",
       Iuml: "Ï",
       ETH: "Ð",
       Ntilde: "Ñ",
       Ograve: "Ò",
       Oacute: "Ó",
       Ocirc: "Ô",
       Otilde: "Õ",
       Ouml: "Ö",
       Oslash: "Ø",
       Ugrave: "Ù",
       Uacute: "Ú",
       Ucirc: "Û",
       Uuml: "Ü",
       Yacute: "Ý",
       THORN: "Þ",
       szlig: "ß",
       agrave: "à",
       aacute: "á",
       acirc: "â",
       atilde: "ã",
       auml: "ä",
       aring: "å",
       aelig: "æ",
       ccedil: "ç",
       egrave: "è",
       eacute: "é",
       ecirc: "ê",
       euml: "ë",
       igrave: "ì",
       iacute: "í",
       icirc: "î",
       iuml: "ï",
       eth: "ð",
       ntilde: "ñ",
       ograve: "ò",
       oacute: "ó",
       ocirc: "ô",
       otilde: "õ",
       ouml: "ö",
       oslash: "ø",
       ugrave: "ù",
       uacute: "ú",
       ucirc: "û",
       uuml: "ü",
       yacute: "ý",
       thorn: "þ",
       yuml: "ÿ",
       nbsp: "\u00a0",
       iexcl: "¡",
       cent: "¢",
       pound: "£",
       curren: "¤",
       yen: "¥",
       brvbar: "¦",
       sect: "§",
       uml: "¨",
       copy: "©",
       ordf: "ª",
       laquo: "«",
       not: "¬",
       shy: "­­",
       reg: "®",
       macr: "¯",
       deg: "°",
       plusmn: "±",
       sup2: "²",
       sup3: "³",
       acute: "´",
       micro: "µ",
       para: "¶",
       middot: "·",
       cedil: "¸",
       sup1: "¹",
       ordm: "º",
       raquo: "»",
       frac14: "¼",
       frac12: "½",
       frac34: "¾",
       iquest: "¿",
       times: "×",
       divide: "÷",
       forall: "∀",
       part: "∂",
       exist: "∃",
       empty: "∅",
       nabla: "∇",
       isin: "∈",
       notin: "∉",
       ni: "∋",
       prod: "∏",
       sum: "∑",
       minus: "−",
       lowast: "∗",
       radic: "√",
       prop: "∝",
       infin: "∞",
       ang: "∠",
       and: "∧",
       or: "∨",
       cap: "∩",
       cup: "∪",
       'int': "∫",
       there4: "∴",
       sim: "∼",
       cong: "≅",
       asymp: "≈",
       ne: "≠",
       equiv: "≡",
       le: "≤",
       ge: "≥",
       sub: "⊂",
       sup: "⊃",
       nsub: "⊄",
       sube: "⊆",
       supe: "⊇",
       oplus: "⊕",
       otimes: "⊗",
       perp: "⊥",
       sdot: "⋅",
       Alpha: "Α",
       Beta: "Β",
       Gamma: "Γ",
       Delta: "Δ",
       Epsilon: "Ε",
       Zeta: "Ζ",
       Eta: "Η",
       Theta: "Θ",
       Iota: "Ι",
       Kappa: "Κ",
       Lambda: "Λ",
       Mu: "Μ",
       Nu: "Ν",
       Xi: "Ξ",
       Omicron: "Ο",
       Pi: "Π",
       Rho: "Ρ",
       Sigma: "Σ",
       Tau: "Τ",
       Upsilon: "Υ",
       Phi: "Φ",
       Chi: "Χ",
       Psi: "Ψ",
       Omega: "Ω",
       alpha: "α",
       beta: "β",
       gamma: "γ",
       delta: "δ",
       epsilon: "ε",
       zeta: "ζ",
       eta: "η",
       theta: "θ",
       iota: "ι",
       kappa: "κ",
       lambda: "λ",
       mu: "μ",
       nu: "ν",
       xi: "ξ",
       omicron: "ο",
       pi: "π",
       rho: "ρ",
       sigmaf: "ς",
       sigma: "σ",
       tau: "τ",
       upsilon: "υ",
       phi: "φ",
       chi: "χ",
       psi: "ψ",
       omega: "ω",
       thetasym: "ϑ",
       upsih: "ϒ",
       piv: "ϖ",
       OElig: "Œ",
       oelig: "œ",
       Scaron: "Š",
       scaron: "š",
       Yuml: "Ÿ",
       fnof: "ƒ",
       circ: "ˆ",
       tilde: "˜",
       ensp: " ",
       emsp: " ",
       thinsp: " ",
       zwnj: "‌",
       zwj: "‍",
       lrm: "‎",
       rlm: "‏",
       ndash: "–",
       mdash: "—",
       lsquo: "‘",
       rsquo: "’",
       sbquo: "‚",
       ldquo: "“",
       rdquo: "”",
       bdquo: "„",
       dagger: "†",
       Dagger: "‡",
       bull: "•",
       hellip: "…",
       permil: "‰",
       prime: "′",
       Prime: "″",
       lsaquo: "‹",
       rsaquo: "›",
       oline: "‾",
       euro: "€",
       trade: "™",
       larr: "←",
       uarr: "↑",
       rarr: "→",
       darr: "↓",
       harr: "↔",
       crarr: "↵",
       lceil: "⌈",
       rceil: "⌉",
       lfloor: "⌊",
       rfloor: "⌋",
       loz: "◊",
       spades: "♠",
       clubs: "♣",
       hearts: "♥",
       diams: "♦"
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
exports.DOMImplementation = dom.DOMImplementation
exports.XMLSerializer = dom.XMLSerializer
exports.DOMParser = __webpack_require__(/*! ./dom-parser */ "./node_modules/@xmldom/xmldom/lib/dom-parser.js").DOMParser


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/sax.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var NAMESPACE = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").NAMESPACE);

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring 
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
	this.message = message
	this.locator = locator
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name

function XMLReader(){
	
}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if(k in entityMap){
			return entityMap[k]; 
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;
	
	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){
					
	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for(var prefix in localNSMap){
							domBuilder.endPrefixMapping(prefix) ;
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else{
		        	parseStack.push(config)
		        }
				
				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;
				
				
				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}

				if (NAMESPACE.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError) {
				throw e;
			}
			errorHandler.error('element parse error: '+e)
			end = -1;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined')
		}
		el.addValue(qname, value, startIndex)
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
				//console.log(attrName,value,start,p)
				addAttribute(attrName, value, start);
				//console.dir(el)
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
			case S_ATTR_SPACE:
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value.replace(/&#?\w+;/g,entityReplacer), start)
				}else{
					if(!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					addAttribute(value, value, start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute 
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS
			domBuilder.startPrefixMapping(nsPrefix, value) 
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']
				
				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for(prefix in localNSMap){
				domBuilder.endPrefixMapping(prefix) 
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}
			
		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//} 
}
function _copy(source,target){
	for(var n in source){target[n] = source[n]}
}
function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA() 
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();
			
			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {}
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//			
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;
exports.ParseError = ParseError;


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/mpd-parser/dist/mpd-parser.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/mpd-parser/dist/mpd-parser.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "addSidxSegmentsToPlaylist": () => (/* binding */ addSidxSegmentsToPlaylist$1),
/* harmony export */   "generateSidxKey": () => (/* binding */ generateSidxKey),
/* harmony export */   "inheritAttributes": () => (/* binding */ inheritAttributes),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseUTCTiming": () => (/* binding */ parseUTCTiming),
/* harmony export */   "stringToMpdXml": () => (/* binding */ stringToMpdXml),
/* harmony export */   "toM3u8": () => (/* binding */ toM3u8),
/* harmony export */   "toPlaylists": () => (/* binding */ toPlaylists)
/* harmony export */ });
/* harmony import */ var _videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/vhs-utils/es/resolve-url */ "./node_modules/@videojs/vhs-utils/es/resolve-url.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/vhs-utils/es/media-groups */ "./node_modules/@videojs/vhs-utils/es/media-groups.js");
/* harmony import */ var _videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/vhs-utils/es/decode-b64-to-uint8-array */ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js");
/* harmony import */ var _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xmldom/xmldom */ "./node_modules/@xmldom/xmldom/lib/index.js");
/*! @name mpd-parser @version 0.21.1 @license Apache-2.0 */






var version = "0.21.1";

var isObject = function isObject(obj) {
  return !!obj && typeof obj === 'object';
};

var merge = function merge() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return objects.reduce(function (result, source) {
    if (typeof source !== 'object') {
      return result;
    }

    Object.keys(source).forEach(function (key) {
      if (Array.isArray(result[key]) && Array.isArray(source[key])) {
        result[key] = result[key].concat(source[key]);
      } else if (isObject(result[key]) && isObject(source[key])) {
        result[key] = merge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    });
    return result;
  }, {});
};
var values = function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k];
  });
};

var range = function range(start, end) {
  var result = [];

  for (var i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};
var flatten = function flatten(lists) {
  return lists.reduce(function (x, y) {
    return x.concat(y);
  }, []);
};
var from = function from(list) {
  if (!list.length) {
    return [];
  }

  var result = [];

  for (var i = 0; i < list.length; i++) {
    result.push(list[i]);
  }

  return result;
};
var findIndexes = function findIndexes(l, key) {
  return l.reduce(function (a, e, i) {
    if (e[key]) {
      a.push(i);
    }

    return a;
  }, []);
};
/**
 * Returns the first index that satisfies the matching function, or -1 if not found.
 *
 * Only necessary because of IE11 support.
 *
 * @param {Array} list - the list to search through
 * @param {Function} matchingFunction - the matching function
 *
 * @return {number} the matching index or -1 if not found
 */

var findIndex = function findIndex(list, matchingFunction) {
  for (var i = 0; i < list.length; i++) {
    if (matchingFunction(list[i])) {
      return i;
    }
  }

  return -1;
};
/**
 * Returns a union of the included lists provided each element can be identified by a key.
 *
 * @param {Array} list - list of lists to get the union of
 * @param {Function} keyFunction - the function to use as a key for each element
 *
 * @return {Array} the union of the arrays
 */

var union = function union(lists, keyFunction) {
  return values(lists.reduce(function (acc, list) {
    list.forEach(function (el) {
      acc[keyFunction(el)] = el;
    });
    return acc;
  }, {}));
};

var errors = {
  INVALID_NUMBER_OF_PERIOD: 'INVALID_NUMBER_OF_PERIOD',
  DASH_EMPTY_MANIFEST: 'DASH_EMPTY_MANIFEST',
  DASH_INVALID_XML: 'DASH_INVALID_XML',
  NO_BASE_URL: 'NO_BASE_URL',
  MISSING_SEGMENT_INFORMATION: 'MISSING_SEGMENT_INFORMATION',
  SEGMENT_TIME_UNSPECIFIED: 'SEGMENT_TIME_UNSPECIFIED',
  UNSUPPORTED_UTC_TIMING_SCHEME: 'UNSUPPORTED_UTC_TIMING_SCHEME'
};

/**
 * @typedef {Object} SingleUri
 * @property {string} uri - relative location of segment
 * @property {string} resolvedUri - resolved location of segment
 * @property {Object} byterange - Object containing information on how to make byte range
 *   requests following byte-range-spec per RFC2616.
 * @property {String} byterange.length - length of range request
 * @property {String} byterange.offset - byte offset of range request
 *
 * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1
 */

/**
 * Converts a URLType node (5.3.9.2.3 Table 13) to a segment object
 * that conforms to how m3u8-parser is structured
 *
 * @see https://github.com/videojs/m3u8-parser
 *
 * @param {string} baseUrl - baseUrl provided by <BaseUrl> nodes
 * @param {string} source - source url for segment
 * @param {string} range - optional range used for range calls,
 *   follows  RFC 2616, Clause 14.35.1
 * @return {SingleUri} full segment information transformed into a format similar
 *   to m3u8-parser
 */

var urlTypeToSegment = function urlTypeToSegment(_ref) {
  var _ref$baseUrl = _ref.baseUrl,
      baseUrl = _ref$baseUrl === void 0 ? '' : _ref$baseUrl,
      _ref$source = _ref.source,
      source = _ref$source === void 0 ? '' : _ref$source,
      _ref$range = _ref.range,
      range = _ref$range === void 0 ? '' : _ref$range,
      _ref$indexRange = _ref.indexRange,
      indexRange = _ref$indexRange === void 0 ? '' : _ref$indexRange;
  var segment = {
    uri: source,
    resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(baseUrl || '', source)
  };

  if (range || indexRange) {
    var rangeStr = range ? range : indexRange;
    var ranges = rangeStr.split('-'); // default to parsing this as a BigInt if possible

    var startRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[0]) : parseInt(ranges[0], 10);
    var endRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[1]) : parseInt(ranges[1], 10); // convert back to a number if less than MAX_SAFE_INTEGER

    if (startRange < Number.MAX_SAFE_INTEGER && typeof startRange === 'bigint') {
      startRange = Number(startRange);
    }

    if (endRange < Number.MAX_SAFE_INTEGER && typeof endRange === 'bigint') {
      endRange = Number(endRange);
    }

    var length;

    if (typeof endRange === 'bigint' || typeof startRange === 'bigint') {
      length = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(endRange) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(startRange) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      length = endRange - startRange + 1;
    }

    if (typeof length === 'bigint' && length < Number.MAX_SAFE_INTEGER) {
      length = Number(length);
    } // byterange should be inclusive according to
    // RFC 2616, Clause 14.35.1


    segment.byterange = {
      length: length,
      offset: startRange
    };
  }

  return segment;
};
var byteRangeToString = function byteRangeToString(byterange) {
  // `endRange` is one less than `offset + length` because the HTTP range
  // header uses inclusive ranges
  var endRange;

  if (typeof byterange.offset === 'bigint' || typeof byterange.length === 'bigint') {
    endRange = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.offset) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.length) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
  } else {
    endRange = byterange.offset + byterange.length - 1;
  }

  return byterange.offset + "-" + endRange;
};

/**
 * parse the end number attribue that can be a string
 * number, or undefined.
 *
 * @param {string|number|undefined} endNumber
 *        The end number attribute.
 *
 * @return {number|null}
 *          The result of parsing the end number.
 */

var parseEndNumber = function parseEndNumber(endNumber) {
  if (endNumber && typeof endNumber !== 'number') {
    endNumber = parseInt(endNumber, 10);
  }

  if (isNaN(endNumber)) {
    return null;
  }

  return endNumber;
};
/**
 * Functions for calculating the range of available segments in static and dynamic
 * manifests.
 */


var segmentRange = {
  /**
   * Returns the entire range of available segments for a static MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  static: function _static(attributes) {
    var duration = attributes.duration,
        _attributes$timescale = attributes.timescale,
        timescale = _attributes$timescale === void 0 ? 1 : _attributes$timescale,
        sourceDuration = attributes.sourceDuration,
        periodDuration = attributes.periodDuration;
    var endNumber = parseEndNumber(attributes.endNumber);
    var segmentDuration = duration / timescale;

    if (typeof endNumber === 'number') {
      return {
        start: 0,
        end: endNumber
      };
    }

    if (typeof periodDuration === 'number') {
      return {
        start: 0,
        end: periodDuration / segmentDuration
      };
    }

    return {
      start: 0,
      end: sourceDuration / segmentDuration
    };
  },

  /**
   * Returns the current live window range of available segments for a dynamic MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  dynamic: function dynamic(attributes) {
    var NOW = attributes.NOW,
        clientOffset = attributes.clientOffset,
        availabilityStartTime = attributes.availabilityStartTime,
        _attributes$timescale2 = attributes.timescale,
        timescale = _attributes$timescale2 === void 0 ? 1 : _attributes$timescale2,
        duration = attributes.duration,
        _attributes$periodSta = attributes.periodStart,
        periodStart = _attributes$periodSta === void 0 ? 0 : _attributes$periodSta,
        _attributes$minimumUp = attributes.minimumUpdatePeriod,
        minimumUpdatePeriod = _attributes$minimumUp === void 0 ? 0 : _attributes$minimumUp,
        _attributes$timeShift = attributes.timeShiftBufferDepth,
        timeShiftBufferDepth = _attributes$timeShift === void 0 ? Infinity : _attributes$timeShift;
    var endNumber = parseEndNumber(attributes.endNumber); // clientOffset is passed in at the top level of mpd-parser and is an offset calculated
    // after retrieving UTC server time.

    var now = (NOW + clientOffset) / 1000; // WC stands for Wall Clock.
    // Convert the period start time to EPOCH.

    var periodStartWC = availabilityStartTime + periodStart; // Period end in EPOCH is manifest's retrieval time + time until next update.

    var periodEndWC = now + minimumUpdatePeriod;
    var periodDuration = periodEndWC - periodStartWC;
    var segmentCount = Math.ceil(periodDuration * timescale / duration);
    var availableStart = Math.floor((now - periodStartWC - timeShiftBufferDepth) * timescale / duration);
    var availableEnd = Math.floor((now - periodStartWC) * timescale / duration);
    return {
      start: Math.max(0, availableStart),
      end: typeof endNumber === 'number' ? endNumber : Math.min(segmentCount, availableEnd)
    };
  }
};
/**
 * Maps a range of numbers to objects with information needed to build the corresponding
 * segment list
 *
 * @name toSegmentsCallback
 * @function
 * @param {number} number
 *        Number of the segment
 * @param {number} index
 *        Index of the number in the range list
 * @return {{ number: Number, duration: Number, timeline: Number, time: Number }}
 *         Object with segment timing and duration info
 */

/**
 * Returns a callback for Array.prototype.map for mapping a range of numbers to
 * information needed to build the segment list.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {toSegmentsCallback}
 *         Callback map function
 */

var toSegments = function toSegments(attributes) {
  return function (number) {
    var duration = attributes.duration,
        _attributes$timescale3 = attributes.timescale,
        timescale = _attributes$timescale3 === void 0 ? 1 : _attributes$timescale3,
        periodStart = attributes.periodStart,
        _attributes$startNumb = attributes.startNumber,
        startNumber = _attributes$startNumb === void 0 ? 1 : _attributes$startNumb;
    return {
      number: startNumber + number,
      duration: duration / timescale,
      timeline: periodStart,
      time: number * duration
    };
  };
};
/**
 * Returns a list of objects containing segment timing and duration info used for
 * building the list of segments. This uses the @duration attribute specified
 * in the MPD manifest to derive the range of segments.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

var parseByDuration = function parseByDuration(attributes) {
  var type = attributes.type,
      duration = attributes.duration,
      _attributes$timescale4 = attributes.timescale,
      timescale = _attributes$timescale4 === void 0 ? 1 : _attributes$timescale4,
      periodDuration = attributes.periodDuration,
      sourceDuration = attributes.sourceDuration;

  var _segmentRange$type = segmentRange[type](attributes),
      start = _segmentRange$type.start,
      end = _segmentRange$type.end;

  var segments = range(start, end).map(toSegments(attributes));

  if (type === 'static') {
    var index = segments.length - 1; // section is either a period or the full source

    var sectionDuration = typeof periodDuration === 'number' ? periodDuration : sourceDuration; // final segment may be less than full segment duration

    segments[index].duration = sectionDuration - duration / timescale * index;
  }

  return segments;
};

/**
 * Translates SegmentBase into a set of segments.
 * (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @return {Object.<Array>} list of segments
 */

var segmentsFromBase = function segmentsFromBase(attributes) {
  var baseUrl = attributes.baseUrl,
      _attributes$initializ = attributes.initialization,
      initialization = _attributes$initializ === void 0 ? {} : _attributes$initializ,
      sourceDuration = attributes.sourceDuration,
      _attributes$indexRang = attributes.indexRange,
      indexRange = _attributes$indexRang === void 0 ? '' : _attributes$indexRang,
      periodStart = attributes.periodStart,
      presentationTime = attributes.presentationTime,
      _attributes$number = attributes.number,
      number = _attributes$number === void 0 ? 0 : _attributes$number,
      duration = attributes.duration; // base url is required for SegmentBase to work, per spec (Section 5.3.9.2.1)

  if (!baseUrl) {
    throw new Error(errors.NO_BASE_URL);
  }

  var initSegment = urlTypeToSegment({
    baseUrl: baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  var segment = urlTypeToSegment({
    baseUrl: baseUrl,
    source: baseUrl,
    indexRange: indexRange
  });
  segment.map = initSegment; // If there is a duration, use it, otherwise use the given duration of the source
  // (since SegmentBase is only for one total segment)

  if (duration) {
    var segmentTimeInfo = parseByDuration(attributes);

    if (segmentTimeInfo.length) {
      segment.duration = segmentTimeInfo[0].duration;
      segment.timeline = segmentTimeInfo[0].timeline;
    }
  } else if (sourceDuration) {
    segment.duration = sourceDuration;
    segment.timeline = periodStart;
  } // If presentation time is provided, these segments are being generated by SIDX
  // references, and should use the time provided. For the general case of SegmentBase,
  // there should only be one segment in the period, so its presentation time is the same
  // as its period start.


  segment.presentationTime = presentationTime || periodStart;
  segment.number = number;
  return [segment];
};
/**
 * Given a playlist, a sidx box, and a baseUrl, update the segment list of the playlist
 * according to the sidx information given.
 *
 * playlist.sidx has metadadata about the sidx where-as the sidx param
 * is the parsed sidx box itself.
 *
 * @param {Object} playlist the playlist to update the sidx information for
 * @param {Object} sidx the parsed sidx box
 * @return {Object} the playlist object with the updated sidx information
 */

var addSidxSegmentsToPlaylist$1 = function addSidxSegmentsToPlaylist(playlist, sidx, baseUrl) {
  // Retain init segment information
  var initSegment = playlist.sidx.map ? playlist.sidx.map : null; // Retain source duration from initial main manifest parsing

  var sourceDuration = playlist.sidx.duration; // Retain source timeline

  var timeline = playlist.timeline || 0;
  var sidxByteRange = playlist.sidx.byterange;
  var sidxEnd = sidxByteRange.offset + sidxByteRange.length; // Retain timescale of the parsed sidx

  var timescale = sidx.timescale; // referenceType 1 refers to other sidx boxes

  var mediaReferences = sidx.references.filter(function (r) {
    return r.referenceType !== 1;
  });
  var segments = [];
  var type = playlist.endList ? 'static' : 'dynamic';
  var periodStart = playlist.sidx.timeline;
  var presentationTime = periodStart;
  var number = playlist.mediaSequence || 0; // firstOffset is the offset from the end of the sidx box

  var startIndex; // eslint-disable-next-line

  if (typeof sidx.firstOffset === 'bigint') {
    startIndex = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(sidxEnd) + sidx.firstOffset;
  } else {
    startIndex = sidxEnd + sidx.firstOffset;
  }

  for (var i = 0; i < mediaReferences.length; i++) {
    var reference = sidx.references[i]; // size of the referenced (sub)segment

    var size = reference.referencedSize; // duration of the referenced (sub)segment, in  the  timescale
    // this will be converted to seconds when generating segments

    var duration = reference.subsegmentDuration; // should be an inclusive range

    var endIndex = void 0; // eslint-disable-next-line

    if (typeof startIndex === 'bigint') {
      endIndex = startIndex + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      endIndex = startIndex + size - 1;
    }

    var indexRange = startIndex + "-" + endIndex;
    var attributes = {
      baseUrl: baseUrl,
      timescale: timescale,
      timeline: timeline,
      periodStart: periodStart,
      presentationTime: presentationTime,
      number: number,
      duration: duration,
      sourceDuration: sourceDuration,
      indexRange: indexRange,
      type: type
    };
    var segment = segmentsFromBase(attributes)[0];

    if (initSegment) {
      segment.map = initSegment;
    }

    segments.push(segment);

    if (typeof startIndex === 'bigint') {
      startIndex += global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size);
    } else {
      startIndex += size;
    }

    presentationTime += duration / timescale;
    number++;
  }

  playlist.segments = segments;
  return playlist;
};

var SUPPORTED_MEDIA_TYPES = ['AUDIO', 'SUBTITLES']; // allow one 60fps frame as leniency (arbitrarily chosen)

var TIME_FUDGE = 1 / 60;
/**
 * Given a list of timelineStarts, combines, dedupes, and sorts them.
 *
 * @param {TimelineStart[]} timelineStarts - list of timeline starts
 *
 * @return {TimelineStart[]} the combined and deduped timeline starts
 */

var getUniqueTimelineStarts = function getUniqueTimelineStarts(timelineStarts) {
  return union(timelineStarts, function (_ref) {
    var timeline = _ref.timeline;
    return timeline;
  }).sort(function (a, b) {
    return a.timeline > b.timeline ? 1 : -1;
  });
};
/**
 * Finds the playlist with the matching NAME attribute.
 *
 * @param {Array} playlists - playlists to search through
 * @param {string} name - the NAME attribute to search for
 *
 * @return {Object|null} the matching playlist object, or null
 */

var findPlaylistWithName = function findPlaylistWithName(playlists, name) {
  for (var i = 0; i < playlists.length; i++) {
    if (playlists[i].attributes.NAME === name) {
      return playlists[i];
    }
  }

  return null;
};
/**
 * Gets a flattened array of media group playlists.
 *
 * @param {Object} manifest - the main manifest object
 *
 * @return {Array} the media group playlists
 */

var getMediaGroupPlaylists = function getMediaGroupPlaylists(manifest) {
  var mediaGroupPlaylists = [];
  (0,_videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__.forEachMediaGroup)(manifest, SUPPORTED_MEDIA_TYPES, function (properties, type, group, label) {
    mediaGroupPlaylists = mediaGroupPlaylists.concat(properties.playlists || []);
  });
  return mediaGroupPlaylists;
};
/**
 * Updates the playlist's media sequence numbers.
 *
 * @param {Object} config - options object
 * @param {Object} config.playlist - the playlist to update
 * @param {number} config.mediaSequence - the mediaSequence number to start with
 */

var updateMediaSequenceForPlaylist = function updateMediaSequenceForPlaylist(_ref2) {
  var playlist = _ref2.playlist,
      mediaSequence = _ref2.mediaSequence;
  playlist.mediaSequence = mediaSequence;
  playlist.segments.forEach(function (segment, index) {
    segment.number = playlist.mediaSequence + index;
  });
};
/**
 * Updates the media and discontinuity sequence numbers of newPlaylists given oldPlaylists
 * and a complete list of timeline starts.
 *
 * If no matching playlist is found, only the discontinuity sequence number of the playlist
 * will be updated.
 *
 * Since early available timelines are not supported, at least one segment must be present.
 *
 * @param {Object} config - options object
 * @param {Object[]} oldPlaylists - the old playlists to use as a reference
 * @param {Object[]} newPlaylists - the new playlists to update
 * @param {Object} timelineStarts - all timelineStarts seen in the stream to this point
 */

var updateSequenceNumbers = function updateSequenceNumbers(_ref3) {
  var oldPlaylists = _ref3.oldPlaylists,
      newPlaylists = _ref3.newPlaylists,
      timelineStarts = _ref3.timelineStarts;
  newPlaylists.forEach(function (playlist) {
    playlist.discontinuitySequence = findIndex(timelineStarts, function (_ref4) {
      var timeline = _ref4.timeline;
      return timeline === playlist.timeline;
    }); // Playlists NAMEs come from DASH Representation IDs, which are mandatory
    // (see ISO_23009-1-2012 5.3.5.2).
    //
    // If the same Representation existed in a prior Period, it will retain the same NAME.

    var oldPlaylist = findPlaylistWithName(oldPlaylists, playlist.attributes.NAME);

    if (!oldPlaylist) {
      // Since this is a new playlist, the media sequence values can start from 0 without
      // consequence.
      return;
    } // TODO better support for live SIDX
    //
    // As of this writing, mpd-parser does not support multiperiod SIDX (in live or VOD).
    // This is evident by a playlist only having a single SIDX reference. In a multiperiod
    // playlist there would need to be multiple SIDX references. In addition, live SIDX is
    // not supported when the SIDX properties change on refreshes.
    //
    // In the future, if support needs to be added, the merging logic here can be called
    // after SIDX references are resolved. For now, exit early to prevent exceptions being
    // thrown due to undefined references.


    if (playlist.sidx) {
      return;
    } // Since we don't yet support early available timelines, we don't need to support
    // playlists with no segments.


    var firstNewSegment = playlist.segments[0];
    var oldMatchingSegmentIndex = findIndex(oldPlaylist.segments, function (oldSegment) {
      return Math.abs(oldSegment.presentationTime - firstNewSegment.presentationTime) < TIME_FUDGE;
    }); // No matching segment from the old playlist means the entire playlist was refreshed.
    // In this case the media sequence should account for this update, and the new segments
    // should be marked as discontinuous from the prior content, since the last prior
    // timeline was removed.

    if (oldMatchingSegmentIndex === -1) {
      updateMediaSequenceForPlaylist({
        playlist: playlist,
        mediaSequence: oldPlaylist.mediaSequence + oldPlaylist.segments.length
      });
      playlist.segments[0].discontinuity = true;
      playlist.discontinuityStarts.unshift(0); // No matching segment does not necessarily mean there's missing content.
      //
      // If the new playlist's timeline is the same as the last seen segment's timeline,
      // then a discontinuity can be added to identify that there's potentially missing
      // content. If there's no missing content, the discontinuity should still be rather
      // harmless. It's possible that if segment durations are accurate enough, that the
      // existence of a gap can be determined using the presentation times and durations,
      // but if the segment timing info is off, it may introduce more problems than simply
      // adding the discontinuity.
      //
      // If the new playlist's timeline is different from the last seen segment's timeline,
      // then a discontinuity can be added to identify that this is the first seen segment
      // of a new timeline. However, the logic at the start of this function that
      // determined the disconinuity sequence by timeline index is now off by one (the
      // discontinuity of the newest timeline hasn't yet fallen off the manifest...since
      // we added it), so the disconinuity sequence must be decremented.
      //
      // A period may also have a duration of zero, so the case of no segments is handled
      // here even though we don't yet support early available periods.

      if (!oldPlaylist.segments.length && playlist.timeline > oldPlaylist.timeline || oldPlaylist.segments.length && playlist.timeline > oldPlaylist.segments[oldPlaylist.segments.length - 1].timeline) {
        playlist.discontinuitySequence--;
      }

      return;
    } // If the first segment matched with a prior segment on a discontinuity (it's matching
    // on the first segment of a period), then the discontinuitySequence shouldn't be the
    // timeline's matching one, but instead should be the one prior, and the first segment
    // of the new manifest should be marked with a discontinuity.
    //
    // The reason for this special case is that discontinuity sequence shows how many
    // discontinuities have fallen off of the playlist, and discontinuities are marked on
    // the first segment of a new "timeline." Because of this, while DASH will retain that
    // Period while the "timeline" exists, HLS keeps track of it via the discontinuity
    // sequence, and that first segment is an indicator, but can be removed before that
    // timeline is gone.


    var oldMatchingSegment = oldPlaylist.segments[oldMatchingSegmentIndex];

    if (oldMatchingSegment.discontinuity && !firstNewSegment.discontinuity) {
      firstNewSegment.discontinuity = true;
      playlist.discontinuityStarts.unshift(0);
      playlist.discontinuitySequence--;
    }

    updateMediaSequenceForPlaylist({
      playlist: playlist,
      mediaSequence: oldPlaylist.segments[oldMatchingSegmentIndex].number
    });
  });
};
/**
 * Given an old parsed manifest object and a new parsed manifest object, updates the
 * sequence and timing values within the new manifest to ensure that it lines up with the
 * old.
 *
 * @param {Array} oldManifest - the old main manifest object
 * @param {Array} newManifest - the new main manifest object
 *
 * @return {Object} the updated new manifest object
 */

var positionManifestOnTimeline = function positionManifestOnTimeline(_ref5) {
  var oldManifest = _ref5.oldManifest,
      newManifest = _ref5.newManifest;
  // Starting from v4.1.2 of the IOP, section 4.4.3.3 states:
  //
  // "MPD@availabilityStartTime and Period@start shall not be changed over MPD updates."
  //
  // This was added from https://github.com/Dash-Industry-Forum/DASH-IF-IOP/issues/160
  //
  // Because of this change, and the difficulty of supporting periods with changing start
  // times, periods with changing start times are not supported. This makes the logic much
  // simpler, since periods with the same start time can be considerred the same period
  // across refreshes.
  //
  // To give an example as to the difficulty of handling periods where the start time may
  // change, if a single period manifest is refreshed with another manifest with a single
  // period, and both the start and end times are increased, then the only way to determine
  // if it's a new period or an old one that has changed is to look through the segments of
  // each playlist and determine the presentation time bounds to find a match. In addition,
  // if the period start changed to exceed the old period end, then there would be no
  // match, and it would not be possible to determine whether the refreshed period is a new
  // one or the old one.
  var oldPlaylists = oldManifest.playlists.concat(getMediaGroupPlaylists(oldManifest));
  var newPlaylists = newManifest.playlists.concat(getMediaGroupPlaylists(newManifest)); // Save all seen timelineStarts to the new manifest. Although this potentially means that
  // there's a "memory leak" in that it will never stop growing, in reality, only a couple
  // of properties are saved for each seen Period. Even long running live streams won't
  // generate too many Periods, unless the stream is watched for decades. In the future,
  // this can be optimized by mapping to discontinuity sequence numbers for each timeline,
  // but it may not become an issue, and the additional info can be useful for debugging.

  newManifest.timelineStarts = getUniqueTimelineStarts([oldManifest.timelineStarts, newManifest.timelineStarts]);
  updateSequenceNumbers({
    oldPlaylists: oldPlaylists,
    newPlaylists: newPlaylists,
    timelineStarts: newManifest.timelineStarts
  });
  return newManifest;
};

var generateSidxKey = function generateSidxKey(sidx) {
  return sidx && sidx.uri + '-' + byteRangeToString(sidx.byterange);
};

var mergeDiscontiguousPlaylists = function mergeDiscontiguousPlaylists(playlists) {
  var mergedPlaylists = values(playlists.reduce(function (acc, playlist) {
    // assuming playlist IDs are the same across periods
    // TODO: handle multiperiod where representation sets are not the same
    // across periods
    var name = playlist.attributes.id + (playlist.attributes.lang || '');

    if (!acc[name]) {
      // First Period
      acc[name] = playlist;
      acc[name].attributes.timelineStarts = [];
    } else {
      // Subsequent Periods
      if (playlist.segments) {
        var _acc$name$segments;

        // first segment of subsequent periods signal a discontinuity
        if (playlist.segments[0]) {
          playlist.segments[0].discontinuity = true;
        }

        (_acc$name$segments = acc[name].segments).push.apply(_acc$name$segments, playlist.segments);
      } // bubble up contentProtection, this assumes all DRM content
      // has the same contentProtection


      if (playlist.attributes.contentProtection) {
        acc[name].attributes.contentProtection = playlist.attributes.contentProtection;
      }
    }

    acc[name].attributes.timelineStarts.push({
      // Although they represent the same number, it's important to have both to make it
      // compatible with HLS potentially having a similar attribute.
      start: playlist.attributes.periodStart,
      timeline: playlist.attributes.periodStart
    });
    return acc;
  }, {}));
  return mergedPlaylists.map(function (playlist) {
    playlist.discontinuityStarts = findIndexes(playlist.segments || [], 'discontinuity');
    return playlist;
  });
};

var addSidxSegmentsToPlaylist = function addSidxSegmentsToPlaylist(playlist, sidxMapping) {
  var sidxKey = generateSidxKey(playlist.sidx);
  var sidxMatch = sidxKey && sidxMapping[sidxKey] && sidxMapping[sidxKey].sidx;

  if (sidxMatch) {
    addSidxSegmentsToPlaylist$1(playlist, sidxMatch, playlist.sidx.resolvedUri);
  }

  return playlist;
};
var addSidxSegmentsToPlaylists = function addSidxSegmentsToPlaylists(playlists, sidxMapping) {
  if (sidxMapping === void 0) {
    sidxMapping = {};
  }

  if (!Object.keys(sidxMapping).length) {
    return playlists;
  }

  for (var i in playlists) {
    playlists[i] = addSidxSegmentsToPlaylist(playlists[i], sidxMapping);
  }

  return playlists;
};
var formatAudioPlaylist = function formatAudioPlaylist(_ref, isAudioOnly) {
  var _attributes;

  var attributes = _ref.attributes,
      segments = _ref.segments,
      sidx = _ref.sidx,
      mediaSequence = _ref.mediaSequence,
      discontinuitySequence = _ref.discontinuitySequence,
      discontinuityStarts = _ref.discontinuityStarts;
  var playlist = {
    attributes: (_attributes = {
      NAME: attributes.id,
      BANDWIDTH: attributes.bandwidth,
      CODECS: attributes.codecs
    }, _attributes['PROGRAM-ID'] = 1, _attributes),
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: '',
    targetDuration: attributes.duration,
    discontinuitySequence: discontinuitySequence,
    discontinuityStarts: discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    mediaSequence: mediaSequence,
    segments: segments
  };

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  if (isAudioOnly) {
    playlist.attributes.AUDIO = 'audio';
    playlist.attributes.SUBTITLES = 'subs';
  }

  return playlist;
};
var formatVttPlaylist = function formatVttPlaylist(_ref2) {
  var _m3u8Attributes;

  var attributes = _ref2.attributes,
      segments = _ref2.segments,
      mediaSequence = _ref2.mediaSequence,
      discontinuityStarts = _ref2.discontinuityStarts,
      discontinuitySequence = _ref2.discontinuitySequence;

  if (typeof segments === 'undefined') {
    // vtt tracks may use single file in BaseURL
    segments = [{
      uri: attributes.baseUrl,
      timeline: attributes.periodStart,
      resolvedUri: attributes.baseUrl || '',
      duration: attributes.sourceDuration,
      number: 0
    }]; // targetDuration should be the same duration as the only segment

    attributes.duration = attributes.sourceDuration;
  }

  var m3u8Attributes = (_m3u8Attributes = {
    NAME: attributes.id,
    BANDWIDTH: attributes.bandwidth
  }, _m3u8Attributes['PROGRAM-ID'] = 1, _m3u8Attributes);

  if (attributes.codecs) {
    m3u8Attributes.CODECS = attributes.codecs;
  }

  return {
    attributes: m3u8Attributes,
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    timelineStarts: attributes.timelineStarts,
    discontinuityStarts: discontinuityStarts,
    discontinuitySequence: discontinuitySequence,
    mediaSequence: mediaSequence,
    segments: segments
  };
};
var organizeAudioPlaylists = function organizeAudioPlaylists(playlists, sidxMapping, isAudioOnly) {
  if (sidxMapping === void 0) {
    sidxMapping = {};
  }

  if (isAudioOnly === void 0) {
    isAudioOnly = false;
  }

  var mainPlaylist;
  var formattedPlaylists = playlists.reduce(function (a, playlist) {
    var role = playlist.attributes.role && playlist.attributes.role.value || '';
    var language = playlist.attributes.lang || '';
    var label = playlist.attributes.label || 'main';

    if (language && !playlist.attributes.label) {
      var roleLabel = role ? " (" + role + ")" : '';
      label = "" + playlist.attributes.lang + roleLabel;
    }

    if (!a[label]) {
      a[label] = {
        language: language,
        autoselect: true,
        default: role === 'main',
        playlists: [],
        uri: ''
      };
    }

    var formatted = addSidxSegmentsToPlaylist(formatAudioPlaylist(playlist, isAudioOnly), sidxMapping);
    a[label].playlists.push(formatted);

    if (typeof mainPlaylist === 'undefined' && role === 'main') {
      mainPlaylist = playlist;
      mainPlaylist.default = true;
    }

    return a;
  }, {}); // if no playlists have role "main", mark the first as main

  if (!mainPlaylist) {
    var firstLabel = Object.keys(formattedPlaylists)[0];
    formattedPlaylists[firstLabel].default = true;
  }

  return formattedPlaylists;
};
var organizeVttPlaylists = function organizeVttPlaylists(playlists, sidxMapping) {
  if (sidxMapping === void 0) {
    sidxMapping = {};
  }

  return playlists.reduce(function (a, playlist) {
    var label = playlist.attributes.lang || 'text';

    if (!a[label]) {
      a[label] = {
        language: label,
        default: false,
        autoselect: false,
        playlists: [],
        uri: ''
      };
    }

    a[label].playlists.push(addSidxSegmentsToPlaylist(formatVttPlaylist(playlist), sidxMapping));
    return a;
  }, {});
};

var organizeCaptionServices = function organizeCaptionServices(captionServices) {
  return captionServices.reduce(function (svcObj, svc) {
    if (!svc) {
      return svcObj;
    }

    svc.forEach(function (service) {
      var channel = service.channel,
          language = service.language;
      svcObj[language] = {
        autoselect: false,
        default: false,
        instreamId: channel,
        language: language
      };

      if (service.hasOwnProperty('aspectRatio')) {
        svcObj[language].aspectRatio = service.aspectRatio;
      }

      if (service.hasOwnProperty('easyReader')) {
        svcObj[language].easyReader = service.easyReader;
      }

      if (service.hasOwnProperty('3D')) {
        svcObj[language]['3D'] = service['3D'];
      }
    });
    return svcObj;
  }, {});
};

var formatVideoPlaylist = function formatVideoPlaylist(_ref3) {
  var _attributes2;

  var attributes = _ref3.attributes,
      segments = _ref3.segments,
      sidx = _ref3.sidx,
      discontinuityStarts = _ref3.discontinuityStarts;
  var playlist = {
    attributes: (_attributes2 = {
      NAME: attributes.id,
      AUDIO: 'audio',
      SUBTITLES: 'subs',
      RESOLUTION: {
        width: attributes.width,
        height: attributes.height
      },
      CODECS: attributes.codecs,
      BANDWIDTH: attributes.bandwidth
    }, _attributes2['PROGRAM-ID'] = 1, _attributes2),
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: '',
    targetDuration: attributes.duration,
    discontinuityStarts: discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    segments: segments
  };

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  return playlist;
};

var videoOnly = function videoOnly(_ref4) {
  var attributes = _ref4.attributes;
  return attributes.mimeType === 'video/mp4' || attributes.mimeType === 'video/webm' || attributes.contentType === 'video';
};

var audioOnly = function audioOnly(_ref5) {
  var attributes = _ref5.attributes;
  return attributes.mimeType === 'audio/mp4' || attributes.mimeType === 'audio/webm' || attributes.contentType === 'audio';
};

var vttOnly = function vttOnly(_ref6) {
  var attributes = _ref6.attributes;
  return attributes.mimeType === 'text/vtt' || attributes.contentType === 'text';
};
/**
 * Contains start and timeline properties denoting a timeline start. For DASH, these will
 * be the same number.
 *
 * @typedef {Object} TimelineStart
 * @property {number} start - the start time of the timeline
 * @property {number} timeline - the timeline number
 */

/**
 * Adds appropriate media and discontinuity sequence values to the segments and playlists.
 *
 * Throughout mpd-parser, the `number` attribute is used in relation to `startNumber`, a
 * DASH specific attribute used in constructing segment URI's from templates. However, from
 * an HLS perspective, the `number` attribute on a segment would be its `mediaSequence`
 * value, which should start at the original media sequence value (or 0) and increment by 1
 * for each segment thereafter. Since DASH's `startNumber` values are independent per
 * period, it doesn't make sense to use it for `number`. Instead, assume everything starts
 * from a 0 mediaSequence value and increment from there.
 *
 * Note that VHS currently doesn't use the `number` property, but it can be helpful for
 * debugging and making sense of the manifest.
 *
 * For live playlists, to account for values increasing in manifests when periods are
 * removed on refreshes, merging logic should be used to update the numbers to their
 * appropriate values (to ensure they're sequential and increasing).
 *
 * @param {Object[]} playlists - the playlists to update
 * @param {TimelineStart[]} timelineStarts - the timeline starts for the manifest
 */


var addMediaSequenceValues = function addMediaSequenceValues(playlists, timelineStarts) {
  // increment all segments sequentially
  playlists.forEach(function (playlist) {
    playlist.mediaSequence = 0;
    playlist.discontinuitySequence = findIndex(timelineStarts, function (_ref7) {
      var timeline = _ref7.timeline;
      return timeline === playlist.timeline;
    });

    if (!playlist.segments) {
      return;
    }

    playlist.segments.forEach(function (segment, index) {
      segment.number = index;
    });
  });
};
/**
 * Given a media group object, flattens all playlists within the media group into a single
 * array.
 *
 * @param {Object} mediaGroupObject - the media group object
 *
 * @return {Object[]}
 *         The media group playlists
 */

var flattenMediaGroupPlaylists = function flattenMediaGroupPlaylists(mediaGroupObject) {
  if (!mediaGroupObject) {
    return [];
  }

  return Object.keys(mediaGroupObject).reduce(function (acc, label) {
    var labelContents = mediaGroupObject[label];
    return acc.concat(labelContents.playlists);
  }, []);
};
var toM3u8 = function toM3u8(_ref8) {
  var _mediaGroups;

  var dashPlaylists = _ref8.dashPlaylists,
      locations = _ref8.locations,
      _ref8$sidxMapping = _ref8.sidxMapping,
      sidxMapping = _ref8$sidxMapping === void 0 ? {} : _ref8$sidxMapping,
      previousManifest = _ref8.previousManifest;

  if (!dashPlaylists.length) {
    return {};
  } // grab all main manifest attributes


  var _dashPlaylists$0$attr = dashPlaylists[0].attributes,
      duration = _dashPlaylists$0$attr.sourceDuration,
      type = _dashPlaylists$0$attr.type,
      suggestedPresentationDelay = _dashPlaylists$0$attr.suggestedPresentationDelay,
      minimumUpdatePeriod = _dashPlaylists$0$attr.minimumUpdatePeriod;
  var videoPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(videoOnly)).map(formatVideoPlaylist);
  var audioPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(audioOnly));
  var vttPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(vttOnly));
  var captions = dashPlaylists.map(function (playlist) {
    return playlist.attributes.captionServices;
  }).filter(Boolean);
  var manifest = {
    allowCache: true,
    discontinuityStarts: [],
    segments: [],
    endList: true,
    mediaGroups: (_mediaGroups = {
      AUDIO: {},
      VIDEO: {}
    }, _mediaGroups['CLOSED-CAPTIONS'] = {}, _mediaGroups.SUBTITLES = {}, _mediaGroups),
    uri: '',
    duration: duration,
    playlists: addSidxSegmentsToPlaylists(videoPlaylists, sidxMapping)
  };

  if (minimumUpdatePeriod >= 0) {
    manifest.minimumUpdatePeriod = minimumUpdatePeriod * 1000;
  }

  if (locations) {
    manifest.locations = locations;
  }

  if (type === 'dynamic') {
    manifest.suggestedPresentationDelay = suggestedPresentationDelay;
  }

  var isAudioOnly = manifest.playlists.length === 0;
  var organizedAudioGroup = audioPlaylists.length ? organizeAudioPlaylists(audioPlaylists, sidxMapping, isAudioOnly) : null;
  var organizedVttGroup = vttPlaylists.length ? organizeVttPlaylists(vttPlaylists, sidxMapping) : null;
  var formattedPlaylists = videoPlaylists.concat(flattenMediaGroupPlaylists(organizedAudioGroup), flattenMediaGroupPlaylists(organizedVttGroup));
  var playlistTimelineStarts = formattedPlaylists.map(function (_ref9) {
    var timelineStarts = _ref9.timelineStarts;
    return timelineStarts;
  });
  manifest.timelineStarts = getUniqueTimelineStarts(playlistTimelineStarts);
  addMediaSequenceValues(formattedPlaylists, manifest.timelineStarts);

  if (organizedAudioGroup) {
    manifest.mediaGroups.AUDIO.audio = organizedAudioGroup;
  }

  if (organizedVttGroup) {
    manifest.mediaGroups.SUBTITLES.subs = organizedVttGroup;
  }

  if (captions.length) {
    manifest.mediaGroups['CLOSED-CAPTIONS'].cc = organizeCaptionServices(captions);
  }

  if (previousManifest) {
    return positionManifestOnTimeline({
      oldManifest: previousManifest,
      newManifest: manifest
    });
  }

  return manifest;
};

/**
 * Calculates the R (repetition) value for a live stream (for the final segment
 * in a manifest where the r value is negative 1)
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {number} time
 *        current time (typically the total time up until the final segment)
 * @param {number} duration
 *        duration property for the given <S />
 *
 * @return {number}
 *        R value to reach the end of the given period
 */
var getLiveRValue = function getLiveRValue(attributes, time, duration) {
  var NOW = attributes.NOW,
      clientOffset = attributes.clientOffset,
      availabilityStartTime = attributes.availabilityStartTime,
      _attributes$timescale = attributes.timescale,
      timescale = _attributes$timescale === void 0 ? 1 : _attributes$timescale,
      _attributes$periodSta = attributes.periodStart,
      periodStart = _attributes$periodSta === void 0 ? 0 : _attributes$periodSta,
      _attributes$minimumUp = attributes.minimumUpdatePeriod,
      minimumUpdatePeriod = _attributes$minimumUp === void 0 ? 0 : _attributes$minimumUp;
  var now = (NOW + clientOffset) / 1000;
  var periodStartWC = availabilityStartTime + periodStart;
  var periodEndWC = now + minimumUpdatePeriod;
  var periodDuration = periodEndWC - periodStartWC;
  return Math.ceil((periodDuration * timescale - time) / duration);
};
/**
 * Uses information provided by SegmentTemplate.SegmentTimeline to determine segment
 * timing and duration
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */


var parseByTimeline = function parseByTimeline(attributes, segmentTimeline) {
  var type = attributes.type,
      _attributes$minimumUp2 = attributes.minimumUpdatePeriod,
      minimumUpdatePeriod = _attributes$minimumUp2 === void 0 ? 0 : _attributes$minimumUp2,
      _attributes$media = attributes.media,
      media = _attributes$media === void 0 ? '' : _attributes$media,
      sourceDuration = attributes.sourceDuration,
      _attributes$timescale2 = attributes.timescale,
      timescale = _attributes$timescale2 === void 0 ? 1 : _attributes$timescale2,
      _attributes$startNumb = attributes.startNumber,
      startNumber = _attributes$startNumb === void 0 ? 1 : _attributes$startNumb,
      timeline = attributes.periodStart;
  var segments = [];
  var time = -1;

  for (var sIndex = 0; sIndex < segmentTimeline.length; sIndex++) {
    var S = segmentTimeline[sIndex];
    var duration = S.d;
    var repeat = S.r || 0;
    var segmentTime = S.t || 0;

    if (time < 0) {
      // first segment
      time = segmentTime;
    }

    if (segmentTime && segmentTime > time) {
      // discontinuity
      // TODO: How to handle this type of discontinuity
      // timeline++ here would treat it like HLS discontuity and content would
      // get appended without gap
      // E.G.
      //  <S t="0" d="1" />
      //  <S d="1" />
      //  <S d="1" />
      //  <S t="5" d="1" />
      // would have $Time$ values of [0, 1, 2, 5]
      // should this be appened at time positions [0, 1, 2, 3],(#EXT-X-DISCONTINUITY)
      // or [0, 1, 2, gap, gap, 5]? (#EXT-X-GAP)
      // does the value of sourceDuration consider this when calculating arbitrary
      // negative @r repeat value?
      // E.G. Same elements as above with this added at the end
      //  <S d="1" r="-1" />
      //  with a sourceDuration of 10
      // Would the 2 gaps be included in the time duration calculations resulting in
      // 8 segments with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9] or 10 segments
      // with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9, 10, 11] ?
      time = segmentTime;
    }

    var count = void 0;

    if (repeat < 0) {
      var nextS = sIndex + 1;

      if (nextS === segmentTimeline.length) {
        // last segment
        if (type === 'dynamic' && minimumUpdatePeriod > 0 && media.indexOf('$Number$') > 0) {
          count = getLiveRValue(attributes, time, duration);
        } else {
          // TODO: This may be incorrect depending on conclusion of TODO above
          count = (sourceDuration * timescale - time) / duration;
        }
      } else {
        count = (segmentTimeline[nextS].t - time) / duration;
      }
    } else {
      count = repeat + 1;
    }

    var end = startNumber + segments.length + count;
    var number = startNumber + segments.length;

    while (number < end) {
      segments.push({
        number: number,
        duration: duration / timescale,
        time: time,
        timeline: timeline
      });
      time += duration;
      number++;
    }
  }

  return segments;
};

var identifierPattern = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
/**
 * Replaces template identifiers with corresponding values. To be used as the callback
 * for String.prototype.replace
 *
 * @name replaceCallback
 * @function
 * @param {string} match
 *        Entire match of identifier
 * @param {string} identifier
 *        Name of matched identifier
 * @param {string} format
 *        Format tag string. Its presence indicates that padding is expected
 * @param {string} width
 *        Desired length of the replaced value. Values less than this width shall be left
 *        zero padded
 * @return {string}
 *         Replacement for the matched identifier
 */

/**
 * Returns a function to be used as a callback for String.prototype.replace to replace
 * template identifiers
 *
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {replaceCallback}
 *         Callback to be used with String.prototype.replace to replace identifiers
 */

var identifierReplacement = function identifierReplacement(values) {
  return function (match, identifier, format, width) {
    if (match === '$$') {
      // escape sequence
      return '$';
    }

    if (typeof values[identifier] === 'undefined') {
      return match;
    }

    var value = '' + values[identifier];

    if (identifier === 'RepresentationID') {
      // Format tag shall not be present with RepresentationID
      return value;
    }

    if (!format) {
      width = 1;
    } else {
      width = parseInt(width, 10);
    }

    if (value.length >= width) {
      return value;
    }

    return "" + new Array(width - value.length + 1).join('0') + value;
  };
};
/**
 * Constructs a segment url from a template string
 *
 * @param {string} url
 *        Template string to construct url from
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {string}
 *         Segment url with identifiers replaced
 */

var constructTemplateUrl = function constructTemplateUrl(url, values) {
  return url.replace(identifierPattern, identifierReplacement(values));
};
/**
 * Generates a list of objects containing timing and duration information about each
 * segment needed to generate segment uris and the complete segment object
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

var parseTemplateInfo = function parseTemplateInfo(attributes, segmentTimeline) {
  if (!attributes.duration && !segmentTimeline) {
    // if neither @duration or SegmentTimeline are present, then there shall be exactly
    // one media segment
    return [{
      number: attributes.startNumber || 1,
      duration: attributes.sourceDuration,
      time: 0,
      timeline: attributes.periodStart
    }];
  }

  if (attributes.duration) {
    return parseByDuration(attributes);
  }

  return parseByTimeline(attributes, segmentTimeline);
};
/**
 * Generates a list of segments using information provided by the SegmentTemplate element
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object[]}
 *         List of segment objects
 */

var segmentsFromTemplate = function segmentsFromTemplate(attributes, segmentTimeline) {
  var templateValues = {
    RepresentationID: attributes.id,
    Bandwidth: attributes.bandwidth || 0
  };
  var _attributes$initializ = attributes.initialization,
      initialization = _attributes$initializ === void 0 ? {
    sourceURL: '',
    range: ''
  } : _attributes$initializ;
  var mapSegment = urlTypeToSegment({
    baseUrl: attributes.baseUrl,
    source: constructTemplateUrl(initialization.sourceURL, templateValues),
    range: initialization.range
  });
  var segments = parseTemplateInfo(attributes, segmentTimeline);
  return segments.map(function (segment) {
    templateValues.Number = segment.number;
    templateValues.Time = segment.time;
    var uri = constructTemplateUrl(attributes.media || '', templateValues); // See DASH spec section 5.3.9.2.2
    // - if timescale isn't present on any level, default to 1.

    var timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

    var presentationTimeOffset = attributes.presentationTimeOffset || 0;
    var presentationTime = // Even if the @t attribute is not specified for the segment, segment.time is
    // calculated in mpd-parser prior to this, so it's assumed to be available.
    attributes.periodStart + (segment.time - presentationTimeOffset) / timescale;
    var map = {
      uri: uri,
      timeline: segment.timeline,
      duration: segment.duration,
      resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes.baseUrl || '', uri),
      map: mapSegment,
      number: segment.number,
      presentationTime: presentationTime
    };
    return map;
  });
};

/**
 * Converts a <SegmentUrl> (of type URLType from the DASH spec 5.3.9.2 Table 14)
 * to an object that matches the output of a segment in videojs/mpd-parser
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object} segmentUrl
 *   <SegmentURL> node to translate into a segment object
 * @return {Object} translated segment object
 */

var SegmentURLToSegmentObject = function SegmentURLToSegmentObject(attributes, segmentUrl) {
  var baseUrl = attributes.baseUrl,
      _attributes$initializ = attributes.initialization,
      initialization = _attributes$initializ === void 0 ? {} : _attributes$initializ;
  var initSegment = urlTypeToSegment({
    baseUrl: baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  var segment = urlTypeToSegment({
    baseUrl: baseUrl,
    source: segmentUrl.media,
    range: segmentUrl.mediaRange
  });
  segment.map = initSegment;
  return segment;
};
/**
 * Generates a list of segments using information provided by the SegmentList element
 * SegmentList (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object.<Array>} list of segments
 */


var segmentsFromList = function segmentsFromList(attributes, segmentTimeline) {
  var duration = attributes.duration,
      _attributes$segmentUr = attributes.segmentUrls,
      segmentUrls = _attributes$segmentUr === void 0 ? [] : _attributes$segmentUr,
      periodStart = attributes.periodStart; // Per spec (5.3.9.2.1) no way to determine segment duration OR
  // if both SegmentTimeline and @duration are defined, it is outside of spec.

  if (!duration && !segmentTimeline || duration && segmentTimeline) {
    throw new Error(errors.SEGMENT_TIME_UNSPECIFIED);
  }

  var segmentUrlMap = segmentUrls.map(function (segmentUrlObject) {
    return SegmentURLToSegmentObject(attributes, segmentUrlObject);
  });
  var segmentTimeInfo;

  if (duration) {
    segmentTimeInfo = parseByDuration(attributes);
  }

  if (segmentTimeline) {
    segmentTimeInfo = parseByTimeline(attributes, segmentTimeline);
  }

  var segments = segmentTimeInfo.map(function (segmentTime, index) {
    if (segmentUrlMap[index]) {
      var segment = segmentUrlMap[index]; // See DASH spec section 5.3.9.2.2
      // - if timescale isn't present on any level, default to 1.

      var timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

      var presentationTimeOffset = attributes.presentationTimeOffset || 0;
      segment.timeline = segmentTime.timeline;
      segment.duration = segmentTime.duration;
      segment.number = segmentTime.number;
      segment.presentationTime = periodStart + (segmentTime.time - presentationTimeOffset) / timescale;
      return segment;
    } // Since we're mapping we should get rid of any blank segments (in case
    // the given SegmentTimeline is handling for more elements than we have
    // SegmentURLs for).

  }).filter(function (segment) {
    return segment;
  });
  return segments;
};

var generateSegments = function generateSegments(_ref) {
  var attributes = _ref.attributes,
      segmentInfo = _ref.segmentInfo;
  var segmentAttributes;
  var segmentsFn;

  if (segmentInfo.template) {
    segmentsFn = segmentsFromTemplate;
    segmentAttributes = merge(attributes, segmentInfo.template);
  } else if (segmentInfo.base) {
    segmentsFn = segmentsFromBase;
    segmentAttributes = merge(attributes, segmentInfo.base);
  } else if (segmentInfo.list) {
    segmentsFn = segmentsFromList;
    segmentAttributes = merge(attributes, segmentInfo.list);
  }

  var segmentsInfo = {
    attributes: attributes
  };

  if (!segmentsFn) {
    return segmentsInfo;
  }

  var segments = segmentsFn(segmentAttributes, segmentInfo.segmentTimeline); // The @duration attribute will be used to determin the playlist's targetDuration which
  // must be in seconds. Since we've generated the segment list, we no longer need
  // @duration to be in @timescale units, so we can convert it here.

  if (segmentAttributes.duration) {
    var _segmentAttributes = segmentAttributes,
        duration = _segmentAttributes.duration,
        _segmentAttributes$ti = _segmentAttributes.timescale,
        timescale = _segmentAttributes$ti === void 0 ? 1 : _segmentAttributes$ti;
    segmentAttributes.duration = duration / timescale;
  } else if (segments.length) {
    // if there is no @duration attribute, use the largest segment duration as
    // as target duration
    segmentAttributes.duration = segments.reduce(function (max, segment) {
      return Math.max(max, Math.ceil(segment.duration));
    }, 0);
  } else {
    segmentAttributes.duration = 0;
  }

  segmentsInfo.attributes = segmentAttributes;
  segmentsInfo.segments = segments; // This is a sidx box without actual segment information

  if (segmentInfo.base && segmentAttributes.indexRange) {
    segmentsInfo.sidx = segments[0];
    segmentsInfo.segments = [];
  }

  return segmentsInfo;
};
var toPlaylists = function toPlaylists(representations) {
  return representations.map(generateSegments);
};

var findChildren = function findChildren(element, name) {
  return from(element.childNodes).filter(function (_ref) {
    var tagName = _ref.tagName;
    return tagName === name;
  });
};
var getContent = function getContent(element) {
  return element.textContent.trim();
};

var parseDuration = function parseDuration(str) {
  var SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
  var SECONDS_IN_MONTH = 30 * 24 * 60 * 60;
  var SECONDS_IN_DAY = 24 * 60 * 60;
  var SECONDS_IN_HOUR = 60 * 60;
  var SECONDS_IN_MIN = 60; // P10Y10M10DT10H10M10.1S

  var durationRegex = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/;
  var match = durationRegex.exec(str);

  if (!match) {
    return 0;
  }

  var _match$slice = match.slice(1),
      year = _match$slice[0],
      month = _match$slice[1],
      day = _match$slice[2],
      hour = _match$slice[3],
      minute = _match$slice[4],
      second = _match$slice[5];

  return parseFloat(year || 0) * SECONDS_IN_YEAR + parseFloat(month || 0) * SECONDS_IN_MONTH + parseFloat(day || 0) * SECONDS_IN_DAY + parseFloat(hour || 0) * SECONDS_IN_HOUR + parseFloat(minute || 0) * SECONDS_IN_MIN + parseFloat(second || 0);
};
var parseDate = function parseDate(str) {
  // Date format without timezone according to ISO 8601
  // YYY-MM-DDThh:mm:ss.ssssss
  var dateRegex = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/; // If the date string does not specifiy a timezone, we must specifiy UTC. This is
  // expressed by ending with 'Z'

  if (dateRegex.test(str)) {
    str += 'Z';
  }

  return Date.parse(str);
};

var parsers = {
  /**
   * Specifies the duration of the entire Media Presentation. Format is a duration string
   * as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  mediaPresentationDuration: function mediaPresentationDuration(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the Segment availability start time for all Segments referred to in this
   * MPD. For a dynamic manifest, it specifies the anchor for the earliest availability
   * time. Format is a date string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The date as seconds from unix epoch
   */
  availabilityStartTime: function availabilityStartTime(value) {
    return parseDate(value) / 1000;
  },

  /**
   * Specifies the smallest period between potential changes to the MPD. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  minimumUpdatePeriod: function minimumUpdatePeriod(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the suggested presentation delay. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  suggestedPresentationDelay: function suggestedPresentationDelay(value) {
    return parseDuration(value);
  },

  /**
   * specifices the type of mpd. Can be either "static" or "dynamic"
   *
   * @param {string} value
   *        value of attribute as a string
   *
   * @return {string}
   *         The type as a string
   */
  type: function type(value) {
    return value;
  },

  /**
   * Specifies the duration of the smallest time shifting buffer for any Representation
   * in the MPD. Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  timeShiftBufferDepth: function timeShiftBufferDepth(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the PeriodStart time of the Period relative to the availabilityStarttime.
   * Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  start: function start(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the width of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed width
   */
  width: function width(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the height of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed height
   */
  height: function height(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the bitrate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed bandwidth
   */
  bandwidth: function bandwidth(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the number of the first Media Segment in this Representation in the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  startNumber: function startNumber(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the timescale in units per seconds
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed timescale
   */
  timescale: function timescale(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTimeOffset.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTimeOffset
   */
  presentationTimeOffset: function presentationTimeOffset(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the constant approximate Segment duration
   * NOTE: The <Period> element also contains an @duration attribute. This duration
   *       specifies the duration of the Period. This attribute is currently not
   *       supported by the rest of the parser, however we still check for it to prevent
   *       errors.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  duration: function duration(value) {
    var parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      return parseDuration(value);
    }

    return parsedValue;
  },

  /**
   * Specifies the Segment duration, in units of the value of the @timescale.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  d: function d(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the MPD start time, in @timescale units, the first Segment in the series
   * starts relative to the beginning of the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed time
   */
  t: function t(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the repeat count of the number of following contiguous Segments with the
   * same duration expressed by the value of @d
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  r: function r(value) {
    return parseInt(value, 10);
  },

  /**
   * Default parser for all other attributes. Acts as a no-op and just returns the value
   * as a string
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {string}
   *         Unparsed value
   */
  DEFAULT: function DEFAULT(value) {
    return value;
  }
};
/**
 * Gets all the attributes and values of the provided node, parses attributes with known
 * types, and returns an object with attribute names mapped to values.
 *
 * @param {Node} el
 *        The node to parse attributes from
 * @return {Object}
 *         Object with all attributes of el parsed
 */

var parseAttributes = function parseAttributes(el) {
  if (!(el && el.attributes)) {
    return {};
  }

  return from(el.attributes).reduce(function (a, e) {
    var parseFn = parsers[e.name] || parsers.DEFAULT;
    a[e.name] = parseFn(e.value);
    return a;
  }, {});
};

var keySystemsMap = {
  'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
  'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
  'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
  'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime'
};
/**
 * Builds a list of urls that is the product of the reference urls and BaseURL values
 *
 * @param {string[]} referenceUrls
 *        List of reference urls to resolve to
 * @param {Node[]} baseUrlElements
 *        List of BaseURL nodes from the mpd
 * @return {string[]}
 *         List of resolved urls
 */

var buildBaseUrls = function buildBaseUrls(referenceUrls, baseUrlElements) {
  if (!baseUrlElements.length) {
    return referenceUrls;
  }

  return flatten(referenceUrls.map(function (reference) {
    return baseUrlElements.map(function (baseUrlElement) {
      return (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, getContent(baseUrlElement));
    });
  }));
};
/**
 * Contains all Segment information for its containing AdaptationSet
 *
 * @typedef {Object} SegmentInformation
 * @property {Object|undefined} template
 *           Contains the attributes for the SegmentTemplate node
 * @property {Object[]|undefined} segmentTimeline
 *           Contains a list of atrributes for each S node within the SegmentTimeline node
 * @property {Object|undefined} list
 *           Contains the attributes for the SegmentList node
 * @property {Object|undefined} base
 *           Contains the attributes for the SegmentBase node
 */

/**
 * Returns all available Segment information contained within the AdaptationSet node
 *
 * @param {Node} adaptationSet
 *        The AdaptationSet node to get Segment information from
 * @return {SegmentInformation}
 *         The Segment information contained within the provided AdaptationSet
 */

var getSegmentInformation = function getSegmentInformation(adaptationSet) {
  var segmentTemplate = findChildren(adaptationSet, 'SegmentTemplate')[0];
  var segmentList = findChildren(adaptationSet, 'SegmentList')[0];
  var segmentUrls = segmentList && findChildren(segmentList, 'SegmentURL').map(function (s) {
    return merge({
      tag: 'SegmentURL'
    }, parseAttributes(s));
  });
  var segmentBase = findChildren(adaptationSet, 'SegmentBase')[0];
  var segmentTimelineParentNode = segmentList || segmentTemplate;
  var segmentTimeline = segmentTimelineParentNode && findChildren(segmentTimelineParentNode, 'SegmentTimeline')[0];
  var segmentInitializationParentNode = segmentList || segmentBase || segmentTemplate;
  var segmentInitialization = segmentInitializationParentNode && findChildren(segmentInitializationParentNode, 'Initialization')[0]; // SegmentTemplate is handled slightly differently, since it can have both
  // @initialization and an <Initialization> node.  @initialization can be templated,
  // while the node can have a url and range specified.  If the <SegmentTemplate> has
  // both @initialization and an <Initialization> subelement we opt to override with
  // the node, as this interaction is not defined in the spec.

  var template = segmentTemplate && parseAttributes(segmentTemplate);

  if (template && segmentInitialization) {
    template.initialization = segmentInitialization && parseAttributes(segmentInitialization);
  } else if (template && template.initialization) {
    // If it is @initialization we convert it to an object since this is the format that
    // later functions will rely on for the initialization segment.  This is only valid
    // for <SegmentTemplate>
    template.initialization = {
      sourceURL: template.initialization
    };
  }

  var segmentInfo = {
    template: template,
    segmentTimeline: segmentTimeline && findChildren(segmentTimeline, 'S').map(function (s) {
      return parseAttributes(s);
    }),
    list: segmentList && merge(parseAttributes(segmentList), {
      segmentUrls: segmentUrls,
      initialization: parseAttributes(segmentInitialization)
    }),
    base: segmentBase && merge(parseAttributes(segmentBase), {
      initialization: parseAttributes(segmentInitialization)
    })
  };
  Object.keys(segmentInfo).forEach(function (key) {
    if (!segmentInfo[key]) {
      delete segmentInfo[key];
    }
  });
  return segmentInfo;
};
/**
 * Contains Segment information and attributes needed to construct a Playlist object
 * from a Representation
 *
 * @typedef {Object} RepresentationInformation
 * @property {SegmentInformation} segmentInfo
 *           Segment information for this Representation
 * @property {Object} attributes
 *           Inherited attributes for this Representation
 */

/**
 * Maps a Representation node to an object containing Segment information and attributes
 *
 * @name inheritBaseUrlsCallback
 * @function
 * @param {Node} representation
 *        Representation node from the mpd
 * @return {RepresentationInformation}
 *         Representation information needed to construct a Playlist object
 */

/**
 * Returns a callback for Array.prototype.map for mapping Representation nodes to
 * Segment information and attributes using inherited BaseURL nodes.
 *
 * @param {Object} adaptationSetAttributes
 *        Contains attributes inherited by the AdaptationSet
 * @param {string[]} adaptationSetBaseUrls
 *        Contains list of resolved base urls inherited by the AdaptationSet
 * @param {SegmentInformation} adaptationSetSegmentInfo
 *        Contains Segment information for the AdaptationSet
 * @return {inheritBaseUrlsCallback}
 *         Callback map function
 */

var inheritBaseUrls = function inheritBaseUrls(adaptationSetAttributes, adaptationSetBaseUrls, adaptationSetSegmentInfo) {
  return function (representation) {
    var repBaseUrlElements = findChildren(representation, 'BaseURL');
    var repBaseUrls = buildBaseUrls(adaptationSetBaseUrls, repBaseUrlElements);
    var attributes = merge(adaptationSetAttributes, parseAttributes(representation));
    var representationSegmentInfo = getSegmentInformation(representation);
    return repBaseUrls.map(function (baseUrl) {
      return {
        segmentInfo: merge(adaptationSetSegmentInfo, representationSegmentInfo),
        attributes: merge(attributes, {
          baseUrl: baseUrl
        })
      };
    });
  };
};
/**
 * Tranforms a series of content protection nodes to
 * an object containing pssh data by key system
 *
 * @param {Node[]} contentProtectionNodes
 *        Content protection nodes
 * @return {Object}
 *        Object containing pssh data by key system
 */

var generateKeySystemInformation = function generateKeySystemInformation(contentProtectionNodes) {
  return contentProtectionNodes.reduce(function (acc, node) {
    var attributes = parseAttributes(node); // Although it could be argued that according to the UUID RFC spec the UUID string (a-f chars) should be generated
    // as a lowercase string it also mentions it should be treated as case-insensitive on input. Since the key system
    // UUIDs in the keySystemsMap are hardcoded as lowercase in the codebase there isn't any reason not to do
    // .toLowerCase() on the input UUID string from the manifest (at least I could not think of one).

    if (attributes.schemeIdUri) {
      attributes.schemeIdUri = attributes.schemeIdUri.toLowerCase();
    }

    var keySystem = keySystemsMap[attributes.schemeIdUri];

    if (keySystem) {
      acc[keySystem] = {
        attributes: attributes
      };
      var psshNode = findChildren(node, 'cenc:pssh')[0];

      if (psshNode) {
        var pssh = getContent(psshNode);
        acc[keySystem].pssh = pssh && (0,_videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__["default"])(pssh);
      }
    }

    return acc;
  }, {});
}; // defined in ANSI_SCTE 214-1 2016


var parseCaptionServiceMetadata = function parseCaptionServiceMetadata(service) {
  // 608 captions
  if (service.schemeIdUri === 'urn:scte:dash:cc:cea-608:2015') {
    var values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(function (value) {
      var channel;
      var language; // default language to value

      language = value;

      if (/^CC\d=/.test(value)) {
        var _value$split = value.split('=');

        channel = _value$split[0];
        language = _value$split[1];
      } else if (/^CC\d$/.test(value)) {
        channel = value;
      }

      return {
        channel: channel,
        language: language
      };
    });
  } else if (service.schemeIdUri === 'urn:scte:dash:cc:cea-708:2015') {
    var _values = typeof service.value !== 'string' ? [] : service.value.split(';');

    return _values.map(function (value) {
      var flags = {
        // service or channel number 1-63
        'channel': undefined,
        // language is a 3ALPHA per ISO 639.2/B
        // field is required
        'language': undefined,
        // BIT 1/0 or ?
        // default value is 1, meaning 16:9 aspect ratio, 0 is 4:3, ? is unknown
        'aspectRatio': 1,
        // BIT 1/0
        // easy reader flag indicated the text is tailed to the needs of beginning readers
        // default 0, or off
        'easyReader': 0,
        // BIT 1/0
        // If 3d metadata is present (CEA-708.1) then 1
        // default 0
        '3D': 0
      };

      if (/=/.test(value)) {
        var _value$split2 = value.split('='),
            channel = _value$split2[0],
            _value$split2$ = _value$split2[1],
            opts = _value$split2$ === void 0 ? '' : _value$split2$;

        flags.channel = channel;
        flags.language = value;
        opts.split(',').forEach(function (opt) {
          var _opt$split = opt.split(':'),
              name = _opt$split[0],
              val = _opt$split[1];

          if (name === 'lang') {
            flags.language = val; // er for easyReadery
          } else if (name === 'er') {
            flags.easyReader = Number(val); // war for wide aspect ratio
          } else if (name === 'war') {
            flags.aspectRatio = Number(val);
          } else if (name === '3D') {
            flags['3D'] = Number(val);
          }
        });
      } else {
        flags.language = value;
      }

      if (flags.channel) {
        flags.channel = 'SERVICE' + flags.channel;
      }

      return flags;
    });
  }
};
/**
 * Maps an AdaptationSet node to a list of Representation information objects
 *
 * @name toRepresentationsCallback
 * @function
 * @param {Node} adaptationSet
 *        AdaptationSet node from the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping AdaptationSet nodes to a list of
 * Representation information objects
 *
 * @param {Object} periodAttributes
 *        Contains attributes inherited by the Period
 * @param {string[]} periodBaseUrls
 *        Contains list of resolved base urls inherited by the Period
 * @param {string[]} periodSegmentInfo
 *        Contains Segment Information at the period level
 * @return {toRepresentationsCallback}
 *         Callback map function
 */

var toRepresentations = function toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo) {
  return function (adaptationSet) {
    var adaptationSetAttributes = parseAttributes(adaptationSet);
    var adaptationSetBaseUrls = buildBaseUrls(periodBaseUrls, findChildren(adaptationSet, 'BaseURL'));
    var role = findChildren(adaptationSet, 'Role')[0];
    var roleAttributes = {
      role: parseAttributes(role)
    };
    var attrs = merge(periodAttributes, adaptationSetAttributes, roleAttributes);
    var accessibility = findChildren(adaptationSet, 'Accessibility')[0];
    var captionServices = parseCaptionServiceMetadata(parseAttributes(accessibility));

    if (captionServices) {
      attrs = merge(attrs, {
        captionServices: captionServices
      });
    }

    var label = findChildren(adaptationSet, 'Label')[0];

    if (label && label.childNodes.length) {
      var labelVal = label.childNodes[0].nodeValue.trim();
      attrs = merge(attrs, {
        label: labelVal
      });
    }

    var contentProtection = generateKeySystemInformation(findChildren(adaptationSet, 'ContentProtection'));

    if (Object.keys(contentProtection).length) {
      attrs = merge(attrs, {
        contentProtection: contentProtection
      });
    }

    var segmentInfo = getSegmentInformation(adaptationSet);
    var representations = findChildren(adaptationSet, 'Representation');
    var adaptationSetSegmentInfo = merge(periodSegmentInfo, segmentInfo);
    return flatten(representations.map(inheritBaseUrls(attrs, adaptationSetBaseUrls, adaptationSetSegmentInfo)));
  };
};
/**
 * Contains all period information for mapping nodes onto adaptation sets.
 *
 * @typedef {Object} PeriodInformation
 * @property {Node} period.node
 *           Period node from the mpd
 * @property {Object} period.attributes
 *           Parsed period attributes from node plus any added
 */

/**
 * Maps a PeriodInformation object to a list of Representation information objects for all
 * AdaptationSet nodes contained within the Period.
 *
 * @name toAdaptationSetsCallback
 * @function
 * @param {PeriodInformation} period
 *        Period object containing necessary period information
 * @param {number} periodStart
 *        Start time of the Period within the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping Period nodes to a list of
 * Representation information objects
 *
 * @param {Object} mpdAttributes
 *        Contains attributes inherited by the mpd
 * @param {string[]} mpdBaseUrls
 *        Contains list of resolved base urls inherited by the mpd
 * @return {toAdaptationSetsCallback}
 *         Callback map function
 */

var toAdaptationSets = function toAdaptationSets(mpdAttributes, mpdBaseUrls) {
  return function (period, index) {
    var periodBaseUrls = buildBaseUrls(mpdBaseUrls, findChildren(period.node, 'BaseURL'));
    var periodAttributes = merge(mpdAttributes, {
      periodStart: period.attributes.start
    });

    if (typeof period.attributes.duration === 'number') {
      periodAttributes.periodDuration = period.attributes.duration;
    }

    var adaptationSets = findChildren(period.node, 'AdaptationSet');
    var periodSegmentInfo = getSegmentInformation(period.node);
    return flatten(adaptationSets.map(toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo)));
  };
};
/**
 * Gets Period@start property for a given period.
 *
 * @param {Object} options
 *        Options object
 * @param {Object} options.attributes
 *        Period attributes
 * @param {Object} [options.priorPeriodAttributes]
 *        Prior period attributes (if prior period is available)
 * @param {string} options.mpdType
 *        The MPD@type these periods came from
 * @return {number|null}
 *         The period start, or null if it's an early available period or error
 */

var getPeriodStart = function getPeriodStart(_ref) {
  var attributes = _ref.attributes,
      priorPeriodAttributes = _ref.priorPeriodAttributes,
      mpdType = _ref.mpdType;

  // Summary of period start time calculation from DASH spec section 5.3.2.1
  //
  // A period's start is the first period's start + time elapsed after playing all
  // prior periods to this one. Periods continue one after the other in time (without
  // gaps) until the end of the presentation.
  //
  // The value of Period@start should be:
  // 1. if Period@start is present: value of Period@start
  // 2. if previous period exists and it has @duration: previous Period@start +
  //    previous Period@duration
  // 3. if this is first period and MPD@type is 'static': 0
  // 4. in all other cases, consider the period an "early available period" (note: not
  //    currently supported)
  // (1)
  if (typeof attributes.start === 'number') {
    return attributes.start;
  } // (2)


  if (priorPeriodAttributes && typeof priorPeriodAttributes.start === 'number' && typeof priorPeriodAttributes.duration === 'number') {
    return priorPeriodAttributes.start + priorPeriodAttributes.duration;
  } // (3)


  if (!priorPeriodAttributes && mpdType === 'static') {
    return 0;
  } // (4)
  // There is currently no logic for calculating the Period@start value if there is
  // no Period@start or prior Period@start and Period@duration available. This is not made
  // explicit by the DASH interop guidelines or the DASH spec, however, since there's
  // nothing about any other resolution strategies, it's implied. Thus, this case should
  // be considered an early available period, or error, and null should suffice for both
  // of those cases.


  return null;
};
/**
 * Traverses the mpd xml tree to generate a list of Representation information objects
 * that have inherited attributes from parent nodes
 *
 * @param {Node} mpd
 *        The root node of the mpd
 * @param {Object} options
 *        Available options for inheritAttributes
 * @param {string} options.manifestUri
 *        The uri source of the mpd
 * @param {number} options.NOW
 *        Current time per DASH IOP.  Default is current time in ms since epoch
 * @param {number} options.clientOffset
 *        Client time difference from NOW (in milliseconds)
 * @return {RepresentationInformation[]}
 *         List of objects containing Representation information
 */

var inheritAttributes = function inheritAttributes(mpd, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$manifestUri = _options.manifestUri,
      manifestUri = _options$manifestUri === void 0 ? '' : _options$manifestUri,
      _options$NOW = _options.NOW,
      NOW = _options$NOW === void 0 ? Date.now() : _options$NOW,
      _options$clientOffset = _options.clientOffset,
      clientOffset = _options$clientOffset === void 0 ? 0 : _options$clientOffset;
  var periodNodes = findChildren(mpd, 'Period');

  if (!periodNodes.length) {
    throw new Error(errors.INVALID_NUMBER_OF_PERIOD);
  }

  var locations = findChildren(mpd, 'Location');
  var mpdAttributes = parseAttributes(mpd);
  var mpdBaseUrls = buildBaseUrls([manifestUri], findChildren(mpd, 'BaseURL')); // See DASH spec section 5.3.1.2, Semantics of MPD element. Default type to 'static'.

  mpdAttributes.type = mpdAttributes.type || 'static';
  mpdAttributes.sourceDuration = mpdAttributes.mediaPresentationDuration || 0;
  mpdAttributes.NOW = NOW;
  mpdAttributes.clientOffset = clientOffset;

  if (locations.length) {
    mpdAttributes.locations = locations.map(getContent);
  }

  var periods = []; // Since toAdaptationSets acts on individual periods right now, the simplest approach to
  // adding properties that require looking at prior periods is to parse attributes and add
  // missing ones before toAdaptationSets is called. If more such properties are added, it
  // may be better to refactor toAdaptationSets.

  periodNodes.forEach(function (node, index) {
    var attributes = parseAttributes(node); // Use the last modified prior period, as it may contain added information necessary
    // for this period.

    var priorPeriod = periods[index - 1];
    attributes.start = getPeriodStart({
      attributes: attributes,
      priorPeriodAttributes: priorPeriod ? priorPeriod.attributes : null,
      mpdType: mpdAttributes.type
    });
    periods.push({
      node: node,
      attributes: attributes
    });
  });
  return {
    locations: mpdAttributes.locations,
    representationInfo: flatten(periods.map(toAdaptationSets(mpdAttributes, mpdBaseUrls)))
  };
};

var stringToMpdXml = function stringToMpdXml(manifestString) {
  if (manifestString === '') {
    throw new Error(errors.DASH_EMPTY_MANIFEST);
  }

  var parser = new _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__.DOMParser();
  var xml;
  var mpd;

  try {
    xml = parser.parseFromString(manifestString, 'application/xml');
    mpd = xml && xml.documentElement.tagName === 'MPD' ? xml.documentElement : null;
  } catch (e) {// ie 11 throwsw on invalid xml
  }

  if (!mpd || mpd && mpd.getElementsByTagName('parsererror').length > 0) {
    throw new Error(errors.DASH_INVALID_XML);
  }

  return mpd;
};

/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} mpd
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */

var parseUTCTimingScheme = function parseUTCTimingScheme(mpd) {
  var UTCTimingNode = findChildren(mpd, 'UTCTiming')[0];

  if (!UTCTimingNode) {
    return null;
  }

  var attributes = parseAttributes(UTCTimingNode);

  switch (attributes.schemeIdUri) {
    case 'urn:mpeg:dash:utc:http-head:2014':
    case 'urn:mpeg:dash:utc:http-head:2012':
      attributes.method = 'HEAD';
      break;

    case 'urn:mpeg:dash:utc:http-xsdate:2014':
    case 'urn:mpeg:dash:utc:http-iso:2014':
    case 'urn:mpeg:dash:utc:http-xsdate:2012':
    case 'urn:mpeg:dash:utc:http-iso:2012':
      attributes.method = 'GET';
      break;

    case 'urn:mpeg:dash:utc:direct:2014':
    case 'urn:mpeg:dash:utc:direct:2012':
      attributes.method = 'DIRECT';
      attributes.value = Date.parse(attributes.value);
      break;

    case 'urn:mpeg:dash:utc:http-ntp:2014':
    case 'urn:mpeg:dash:utc:ntp:2014':
    case 'urn:mpeg:dash:utc:sntp:2014':
    default:
      throw new Error(errors.UNSUPPORTED_UTC_TIMING_SCHEME);
  }

  return attributes;
};

var VERSION = version;
/*
 * Given a DASH manifest string and options, parses the DASH manifest into an object in the
 * form outputed by m3u8-parser and accepted by videojs/http-streaming.
 *
 * For live DASH manifests, if `previousManifest` is provided in options, then the newly
 * parsed DASH manifest will have its media sequence and discontinuity sequence values
 * updated to reflect its position relative to the prior manifest.
 *
 * @param {string} manifestString - the DASH manifest as a string
 * @param {options} [options] - any options
 *
 * @return {Object} the manifest object
 */

var parse = function parse(manifestString, options) {
  if (options === void 0) {
    options = {};
  }

  var parsedManifestInfo = inheritAttributes(stringToMpdXml(manifestString), options);
  var playlists = toPlaylists(parsedManifestInfo.representationInfo);
  return toM3u8({
    dashPlaylists: playlists,
    locations: parsedManifestInfo.locations,
    sidxMapping: options.sidxMapping,
    previousManifest: options.previousManifest
  });
};
/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} manifestString
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */


var parseUTCTiming = function parseUTCTiming(manifestString) {
  return parseUTCTimingScheme(stringToMpdXml(manifestString));
};




/***/ }),

/***/ "./node_modules/url-toolkit/src/url-toolkit.js":
/*!*****************************************************!*\
  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
  \*****************************************************/
/***/ (function(module) {

// see https://tools.ietf.org/html/rfc1808

(function (root) {
  var URL_REGEX =
    /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/;
  var FIRST_SEGMENT_REGEX = /^(?=([^\/?#]*))\1([^]*)$/;
  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;

  var URLToolkit = {
    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
    // E.g
    // With opts.alwaysNormalize = false (default, spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
    // With opts.alwaysNormalize = true (not spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
    buildAbsoluteURL: function (baseURL, relativeURL, opts) {
      opts = opts || {};
      // remove any remaining space and CRLF
      baseURL = baseURL.trim();
      relativeURL = relativeURL.trim();
      if (!relativeURL) {
        // 2a) If the embedded URL is entirely empty, it inherits the
        // entire base URL (i.e., is set equal to the base URL)
        // and we are done.
        if (!opts.alwaysNormalize) {
          return baseURL;
        }
        var basePartsForNormalise = URLToolkit.parseURL(baseURL);
        if (!basePartsForNormalise) {
          throw new Error('Error trying to parse base URL.');
        }
        basePartsForNormalise.path = URLToolkit.normalizePath(
          basePartsForNormalise.path
        );
        return URLToolkit.buildURLFromParts(basePartsForNormalise);
      }
      var relativeParts = URLToolkit.parseURL(relativeURL);
      if (!relativeParts) {
        throw new Error('Error trying to parse relative URL.');
      }
      if (relativeParts.scheme) {
        // 2b) If the embedded URL starts with a scheme name, it is
        // interpreted as an absolute URL and we are done.
        if (!opts.alwaysNormalize) {
          return relativeURL;
        }
        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
        return URLToolkit.buildURLFromParts(relativeParts);
      }
      var baseParts = URLToolkit.parseURL(baseURL);
      if (!baseParts) {
        throw new Error('Error trying to parse base URL.');
      }
      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
        baseParts.netLoc = pathParts[1];
        baseParts.path = pathParts[2];
      }
      if (baseParts.netLoc && !baseParts.path) {
        baseParts.path = '/';
      }
      var builtParts = {
        // 2c) Otherwise, the embedded URL inherits the scheme of
        // the base URL.
        scheme: baseParts.scheme,
        netLoc: relativeParts.netLoc,
        path: null,
        params: relativeParts.params,
        query: relativeParts.query,
        fragment: relativeParts.fragment,
      };
      if (!relativeParts.netLoc) {
        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
        // (if any) of the base URL.
        builtParts.netLoc = baseParts.netLoc;
        // 4) If the embedded URL path is preceded by a slash "/", the
        // path is not relative and we skip to Step 7.
        if (relativeParts.path[0] !== '/') {
          if (!relativeParts.path) {
            // 5) If the embedded URL path is empty (and not preceded by a
            // slash), then the embedded URL inherits the base URL path
            builtParts.path = baseParts.path;
            // 5a) if the embedded URL's <params> is non-empty, we skip to
            // step 7; otherwise, it inherits the <params> of the base
            // URL (if any) and
            if (!relativeParts.params) {
              builtParts.params = baseParts.params;
              // 5b) if the embedded URL's <query> is non-empty, we skip to
              // step 7; otherwise, it inherits the <query> of the base
              // URL (if any) and we skip to step 7.
              if (!relativeParts.query) {
                builtParts.query = baseParts.query;
              }
            }
          } else {
            // 6) The last segment of the base URL's path (anything
            // following the rightmost slash "/", or the entire path if no
            // slash is present) is removed and the embedded URL's path is
            // appended in its place.
            var baseURLPath = baseParts.path;
            var newPath =
              baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) +
              relativeParts.path;
            builtParts.path = URLToolkit.normalizePath(newPath);
          }
        }
      }
      if (builtParts.path === null) {
        builtParts.path = opts.alwaysNormalize
          ? URLToolkit.normalizePath(relativeParts.path)
          : relativeParts.path;
      }
      return URLToolkit.buildURLFromParts(builtParts);
    },
    parseURL: function (url) {
      var parts = URL_REGEX.exec(url);
      if (!parts) {
        return null;
      }
      return {
        scheme: parts[1] || '',
        netLoc: parts[2] || '',
        path: parts[3] || '',
        params: parts[4] || '',
        query: parts[5] || '',
        fragment: parts[6] || '',
      };
    },
    normalizePath: function (path) {
      // The following operations are
      // then applied, in order, to the new path:
      // 6a) All occurrences of "./", where "." is a complete path
      // segment, are removed.
      // 6b) If the path ends with "." as a complete path segment,
      // that "." is removed.
      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
      // 6c) All occurrences of "<segment>/../", where <segment> is a
      // complete path segment not equal to "..", are removed.
      // Removal of these path segments is performed iteratively,
      // removing the leftmost matching pattern on each iteration,
      // until no matching pattern remains.
      // 6d) If the path ends with "<segment>/..", where <segment> is a
      // complete path segment not equal to "..", that
      // "<segment>/.." is removed.
      while (
        path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length
      ) {}
      return path.split('').reverse().join('');
    },
    buildURLFromParts: function (parts) {
      return (
        parts.scheme +
        parts.netLoc +
        parts.path +
        parts.params +
        parts.query +
        parts.fragment
      );
    },
  };

  if (true)
    module.exports = URLToolkit;
  else {}
})(this);


/***/ }),

/***/ "./src/mediatrack.js":
/*!***************************!*\
  !*** ./src/mediatrack.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NXTMediaTrack": () => (/* binding */ NXTMediaTrack)
/* harmony export */ });
class NXTMediaTrack {

  constructor() {}

  addSegment(segment) {
    this.segments.push(segment);
  }

  getSegment(index) {
    return this.segments[index];
  }

  setAllSegments(segments) {
    this.segments = segments;
  }

  getAllSegments() {
    return this._segments;
  }

  setTrackName(trackName) {
    this.trackName = trackName;
  }

  getSegmentUrl(index) {
    if (this.segments && this.segments[index]) {
      return this.segments[index].resolvedUri
    }
    return null;
  }
}

/***/ }),

/***/ "./src/mpd.js":
/*!********************!*\
  !*** ./src/mpd.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseMPD": () => (/* binding */ parseMPD),
/* harmony export */   "reloadMPD": () => (/* binding */ reloadMPD)
/* harmony export */ });
/* harmony import */ var mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mpd-parser */ "./node_modules/mpd-parser/dist/mpd-parser.es.js");


var parsedManifest;
const manifestUri = 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/4577dca5f8a44756875ab5cc913cd1f1/index.mpd';
// DRM vod
// const manifestUri = 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/2fc23947945841b9b1be9768f9c13e75/index.mpd';
// DRM Live
// const manifestUri = 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/2fc23947945841b9b1be9768f9c13e75/index.mpd';
// const manifestUri = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';
// const manifestUri = 'https://dash.akamaized.net/dash264/TestCases/5a/nomor/1.mpd';
// const manifestUri = 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_1080p.mpd';

async function parseMPD() {
  const res = await fetch(manifestUri);
  const manifest = await res.text();
  parsedManifest = (0,mpd_parser__WEBPACK_IMPORTED_MODULE_0__.parse)(manifest, { manifestUri });
  return parsedManifest;
}

async function reloadMPD() {
    const res = await fetch(manifestUri);
    const manifest = await res.text();
    var newParsedManifest = (0,mpd_parser__WEBPACK_IMPORTED_MODULE_0__.parse)(manifest, { manifestUri, previousManifest: parsedManifest });
    return newParsedManifest;
}




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMedia": () => (/* binding */ getMedia),
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
/**
 * sleep for the specified amount of time
 * @param {*} ms 
 * @returns 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch url and return the arrayBuffer
 * @param {*} url 
 * @returns 
 */
function getMedia(url) {
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.warn("Unexpected status code " + res.status + " for " + url);
        throw res;
      }
      return res.arrayBuffer();
    })
    .catch((err) => console.dir(err));
}

 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mpd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpd */ "./src/mpd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './drm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mediatrack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediatrack */ "./src/mediatrack.js");





class NXPlayer {
  options;
  constructor(options) {
    this.options = options;
  }

  /**
  * The main entrance of nxtPlayer
  * @returns 
  */
  async play() {
    /** pre-define sourceBuffer */
    let videoSrcBuffer;
    let audioSrcBuffer;
    
    /** --- update manifest data --- **/
    // const startReloadingLoop = async () => {
    //   var startTime = new Date().getTime();
    //   while (true) {
    //     var fetchTime = new Date().getTime();
    //     if (new Date().getTime() - startTime >= 2000) {
    //       console.log('reload manifest...');
    //       manifestData = await reloadMPD();
    //       console.log('manifest reloaded.');
    //       numberOfVideoChunks = manifestData.playlists[0].segments.length;
    //       numberOfAudioChunks = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments.length;
    //       startTime = fetchTime;
    //     }
    //     sleep(100);
    //   }
    // };
    // startReloadingLoop();
    
    /** parse manifest by 'mpd-parser' */
    let manifestData = await (0,_mpd__WEBPACK_IMPORTED_MODULE_0__.parseMPD)();

    var videoTrack = new _mediatrack__WEBPACK_IMPORTED_MODULE_3__.NXTMediaTrack();
    videoTrack.setAllSegments(manifestData.playlists[0].segments);
    let numberOfVideoChunks = videoTrack.segments.length;

    var audioTrack = new _mediatrack__WEBPACK_IMPORTED_MODULE_3__.NXTMediaTrack();
    audioTrack.setAllSegments(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
    let numberOfAudioChunks = audioTrack.segments.length;

    // aws multi period
    var initUrl = manifestData.playlists[0].segments[0].map.resolvedUri;
    // tears widevine test
    // var initUrl = manifestData.playlists[0].sidx.uri
    var initSegment = initUrl;

    // aws multi period
    var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
    // tears widevine test
    // var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].sidx.uri;
    var audioInitSegment = audioInitUrl;
    // var initUrl = baseUrl + manifestData.playlists[0].segments[0].map.uri;

    /** get video element under control */
    const video = document.querySelector("video");
    // const video = this.video;

    /** check if the browser supports MSE or not */
    if (!window.MediaSource) {
      console.error("No Media Source API available");
      return;
    }

    /** create MSE instance */
    let mediaSource = new MediaSource();
    video.src = window.URL.createObjectURL(mediaSource);

    // Log events dispatched to make debugging easier...
    [ "canplay", "canplaythrough", "encrypted", "ended", "error", "loadeddata",
      "loadedmetadata", "loadstart", "pause", "play", "playing", "progress",
      "stalled", "suspend", "waiting",
    ].forEach(function (e) {
      video.addEventListener(e, function(event) {
        console.log("EVENT: " + e);
      }, false);
    });

    let videoMimeType = 'video/mp4; codecs="avc1.64001e"';
    let audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

    /** Add callback function [onMediaSourceOpen]  */
    mediaSource.addEventListener("sourceopen", onMediaSourceOpen);
    video.addEventListener('canplay', function() {
      video.play();
    });

    /**
    * Setup EME Options
    */
    // var emeOptions;
    // if (typeof(MediaKeySystemAccess.prototype.getConfiguration) == "undefined") {
    //   // Firefox 43 and earlier used a different style of defining configurations
    //   // for navigator.requestMediaKeySystem that doesn't match the current spec.
    //   log("Detected obsolete navigator.requestMediaKeySystem options style.");
    //   emeOptions = [
    //     {
    //       initDataType: "cenc",
    //       videoType: videoMimeType,
    //       audioType: audioMimeType
    //     }
    //   ];
    // } else {
    //   emeOptions = [
    //     {
    //       initDataTypes: ['keyids','cenc'],
    //       videoCapabilities: [{contentType: videoMimeType}],
    //       audioCapabilities: [{contentType: audioMimeType}],
    //     }
    //   ];
    // }

    /**
    * Initialize Encrypted Media Extention
    */
    // setupEME(video, keySystems.widevine[0], emeOptions);

    /**
    * 
    */
    function onMediaSourceOpen() {

      videoSrcBuffer = mediaSource.addSourceBuffer(videoMimeType);
      videoSrcBuffer.mode = 'sequence';
      
      audioSrcBuffer = mediaSource.addSourceBuffer(audioMimeType);
      audioSrcBuffer.mode = 'sequence';

      videoSrcBuffer.addEventListener("updateend", nextSegment("video"));
      audioSrcBuffer.addEventListener("updateend", nextSegment("audio"));

      // aws multi period
      var initUrl = manifestData.playlists[0].segments[0].map.resolvedUri;
      // tears widevine test
      // var initUrl = manifestData.playlists[0].sidx.uri
      var initSegment = initUrl;

      // aws multi period
      var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
      // tears widevine test
      // var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].sidx.uri;
      var audioInitSegment = audioInitUrl;
      // var initUrl = baseUrl + manifestData.playlists[0].segments[0].map.uri;

      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMedia)(initUrl).then(appendToBuffer("video"));
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMedia)(audioInitUrl).then(appendToBuffer("audio"));
    }

    function nextSegment(type) {
      let videoIndex = 0;
      let audioIndex = 0;
      // const tmpUrl = type === "video" ? templateUrl : audioTmpUrl;
      const sourcebuffer = type === "video" ? videoSrcBuffer : audioSrcBuffer;
      return function () {

        if (manifestData.playlists[0].segments.length === 0) { 
          sourcebuffer.removeEventListener("updateend", nextSegment);
          return;
        }

        if (type === "video") {
          const segmentUrl = videoTrack.getSegmentUrl(videoIndex);
          console.log('segmentUrl >>> ', segmentUrl);
          
          if (videoTrack.getSegment(videoIndex).map.resolvedUri === initSegment) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMedia)(segmentUrl).then(appendToBuffer(type));
            videoIndex++;
          } else {
            initSegment = manifestData.playlists[0].segments[videoIndex].map.resolvedUri;
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMedia)(initSegment).then(appendToBuffer(type));
          }
          // const segmentUrl = baseUrl + manifestData.playlists[0].segments[index].uri;
          
          if (videoIndex > numberOfVideoChunks) {
            sourcebuffer.removeEventListener("updateend", nextSegment);
          }
        } else {
          const audioSegmentUrl = audioTrack.getSegmentUrl(audioIndex);
          console.log('audioSegmentUrl >>> ', audioSegmentUrl);
          if (audioTrack.getSegment(audioIndex).map.resolvedUri === audioInitSegment) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMedia)(audioSegmentUrl).then(appendToBuffer(type));
            audioIndex++;
          } else {
            audioInitSegment = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[audioIndex].map.resolvedUri;
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMedia)(audioInitSegment).then(appendToBuffer(type));
          }
          
          if (audioIndex > numberOfAudioChunks) {
            sourcebuffer.removeEventListener("updateend", nextSegment);
          }
        }
        
      };
    }

    function appendToBuffer(type) {
      const sourcebuffer = type === "video" ? videoSrcBuffer : audioSrcBuffer;
      return function (chunk, error) {
        if (error && mediaSource.readyState === "open") {
          mediaSource.endOfStream();
          return;
        }

        if (chunk) {
          sourcebuffer.appendBuffer(new Uint8Array(chunk));
        }
      };
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NXPlayer);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsQ0FBQzs7QUFFRCxtSEFBbUg7QUFDbkg7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9CQUFvQjtBQUNwQixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOzs7Ozs7Ozs7OztBQzNRckIsa0JBQWtCLG1CQUFPLENBQUMsdUVBQWU7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0Msb0JBQW9CLFlBQVksUUFBUTtBQUNoRiwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QzNCLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0I7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsU0FBUztBQUNUO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVEsZ0VBQWdFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJLEdBQUc7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsaUJBQWlCO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsS0FBSyxzQ0FBc0MsNkJBQTZCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0EsYUFBYSxpRUFBaUU7QUFDOUU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0EsYUFBYSxpRUFBaUU7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZFQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUEsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZFQUE2RTtBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztB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Q0Esc0ZBQXNGLGlCQUFpQjtBQUN2RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLE1BQU0sSUFBeUQ7QUFDL0Q7QUFDQSxPQUFPLEVBS2dDO0FBQ3ZDLENBQUM7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QUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZLGdEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OWFBsYXllci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvQHZpZGVvanMvdmhzLXV0aWxzL2VzL2RlY29kZS1iNjQtdG8tdWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvQHZpZGVvanMvdmhzLXV0aWxzL2VzL21lZGlhLWdyb3Vwcy5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL25vZGVfbW9kdWxlcy9AdmlkZW9qcy92aHMtdXRpbHMvZXMvcmVzb2x2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2NvbnZlbnRpb25zLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9kb20tcGFyc2VyLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2VudGl0aWVzLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvc2F4LmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvbXBkLXBhcnNlci9kaXN0L21wZC1wYXJzZXIuZXMuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvdXJsLXRvb2xraXQvc3JjL3VybC10b29sa2l0LmpzIiwid2VicGFjazovL05YUGxheWVyLy4vc3JjL21lZGlhdHJhY2suanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9zcmMvbXBkLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL05YUGxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL05YUGxheWVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL05YUGxheWVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9OWFBsYXllci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL05YUGxheWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9OWFBsYXllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOWFBsYXllclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOWFBsYXllclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG52YXIgYXRvYiA9IGZ1bmN0aW9uIGF0b2Iocykge1xuICByZXR1cm4gd2luZG93LmF0b2IgPyB3aW5kb3cuYXRvYihzKSA6IEJ1ZmZlci5mcm9tKHMsICdiYXNlNjQnKS50b1N0cmluZygnYmluYXJ5Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNvZGVCNjRUb1VpbnQ4QXJyYXkoYjY0VGV4dCkge1xuICB2YXIgZGVjb2RlZFN0cmluZyA9IGF0b2IoYjY0VGV4dCk7XG4gIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KGRlY29kZWRTdHJpbmcubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlY29kZWRTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheVtpXSA9IGRlY29kZWRTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn0iLCIvKipcbiAqIExvb3BzIHRocm91Z2ggYWxsIHN1cHBvcnRlZCBtZWRpYSBncm91cHMgaW4gbWFzdGVyIGFuZCBjYWxscyB0aGUgcHJvdmlkZWRcbiAqIGNhbGxiYWNrIGZvciBlYWNoIGdyb3VwXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hc3RlclxuICogICAgICAgIFRoZSBwYXJzZWQgbWFzdGVyIG1hbmlmZXN0IG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmdbXX0gZ3JvdXBzXG4gKiAgICAgICAgVGhlIG1lZGlhIGdyb3VwcyB0byBjYWxsIHRoZSBjYWxsYmFjayBmb3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICAgICAgQ2FsbGJhY2sgdG8gY2FsbCBmb3IgZWFjaCBtZWRpYSBncm91cFxuICovXG5leHBvcnQgdmFyIGZvckVhY2hNZWRpYUdyb3VwID0gZnVuY3Rpb24gZm9yRWFjaE1lZGlhR3JvdXAobWFzdGVyLCBncm91cHMsIGNhbGxiYWNrKSB7XG4gIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChtZWRpYVR5cGUpIHtcbiAgICBmb3IgKHZhciBncm91cEtleSBpbiBtYXN0ZXIubWVkaWFHcm91cHNbbWVkaWFUeXBlXSkge1xuICAgICAgZm9yICh2YXIgbGFiZWxLZXkgaW4gbWFzdGVyLm1lZGlhR3JvdXBzW21lZGlhVHlwZV1bZ3JvdXBLZXldKSB7XG4gICAgICAgIHZhciBtZWRpYVByb3BlcnRpZXMgPSBtYXN0ZXIubWVkaWFHcm91cHNbbWVkaWFUeXBlXVtncm91cEtleV1bbGFiZWxLZXldO1xuICAgICAgICBjYWxsYmFjayhtZWRpYVByb3BlcnRpZXMsIG1lZGlhVHlwZSwgZ3JvdXBLZXksIGxhYmVsS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTsiLCJpbXBvcnQgVVJMVG9vbGtpdCBmcm9tICd1cmwtdG9vbGtpdCc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xudmFyIERFRkFVTFRfTE9DQVRJT04gPSAnaHR0cDovL2V4YW1wbGUuY29tJztcblxudmFyIHJlc29sdmVVcmwgPSBmdW5jdGlvbiByZXNvbHZlVXJsKGJhc2VVcmwsIHJlbGF0aXZlVXJsKSB7XG4gIC8vIHJldHVybiBlYXJseSBpZiB3ZSBkb24ndCBuZWVkIHRvIHJlc29sdmVcbiAgaWYgKC9eW2Etel0rOi9pLnRlc3QocmVsYXRpdmVVcmwpKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlVXJsO1xuICB9IC8vIGlmIGJhc2VVcmwgaXMgYSBkYXRhIFVSSSwgaWdub3JlIGl0IGFuZCByZXNvbHZlIGV2ZXJ5dGhpbmcgcmVsYXRpdmUgdG8gd2luZG93LmxvY2F0aW9uXG5cblxuICBpZiAoL15kYXRhOi8udGVzdChiYXNlVXJsKSkge1xuICAgIGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJyc7XG4gIH0gLy8gSUUxMSBzdXBwb3J0cyBVUkwgYnV0IG5vdCB0aGUgVVJMIGNvbnN0cnVjdG9yXG4gIC8vIGZlYXR1cmUgZGV0ZWN0IHRoZSBiZWhhdmlvciB3ZSB3YW50XG5cblxuICB2YXIgbmF0aXZlVVJMID0gdHlwZW9mIHdpbmRvdy5VUkwgPT09ICdmdW5jdGlvbic7XG4gIHZhciBwcm90b2NvbExlc3MgPSAvXlxcL1xcLy8udGVzdChiYXNlVXJsKTsgLy8gcmVtb3ZlIGxvY2F0aW9uIGlmIHdpbmRvdy5sb2NhdGlvbiBpc24ndCBhdmFpbGFibGUgKGkuZS4gd2UncmUgaW4gbm9kZSlcbiAgLy8gYW5kIGlmIGJhc2VVcmwgaXNuJ3QgYW4gYWJzb2x1dGUgdXJsXG5cbiAgdmFyIHJlbW92ZUxvY2F0aW9uID0gIXdpbmRvdy5sb2NhdGlvbiAmJiAhL1xcL1xcLy9pLnRlc3QoYmFzZVVybCk7IC8vIGlmIHRoZSBiYXNlIFVSTCBpcyByZWxhdGl2ZSB0aGVuIGNvbWJpbmUgd2l0aCB0aGUgY3VycmVudCBsb2NhdGlvblxuXG4gIGlmIChuYXRpdmVVUkwpIHtcbiAgICBiYXNlVXJsID0gbmV3IHdpbmRvdy5VUkwoYmFzZVVybCwgd2luZG93LmxvY2F0aW9uIHx8IERFRkFVTFRfTE9DQVRJT04pO1xuICB9IGVsc2UgaWYgKCEvXFwvXFwvL2kudGVzdChiYXNlVXJsKSkge1xuICAgIGJhc2VVcmwgPSBVUkxUb29sa2l0LmJ1aWxkQWJzb2x1dGVVUkwod2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnLCBiYXNlVXJsKTtcbiAgfVxuXG4gIGlmIChuYXRpdmVVUkwpIHtcbiAgICB2YXIgbmV3VXJsID0gbmV3IFVSTChyZWxhdGl2ZVVybCwgYmFzZVVybCk7IC8vIGlmIHdlJ3JlIGEgcHJvdG9jb2wtbGVzcyB1cmwsIHJlbW92ZSB0aGUgcHJvdG9jb2xcbiAgICAvLyBhbmQgaWYgd2UncmUgbG9jYXRpb24tbGVzcywgcmVtb3ZlIHRoZSBsb2NhdGlvblxuICAgIC8vIG90aGVyd2lzZSwgcmV0dXJuIHRoZSB1cmwgdW5tb2RpZmllZFxuXG4gICAgaWYgKHJlbW92ZUxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbmV3VXJsLmhyZWYuc2xpY2UoREVGQVVMVF9MT0NBVElPTi5sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAocHJvdG9jb2xMZXNzKSB7XG4gICAgICByZXR1cm4gbmV3VXJsLmhyZWYuc2xpY2UobmV3VXJsLnByb3RvY29sLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1VybC5ocmVmO1xuICB9XG5cbiAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRBYnNvbHV0ZVVSTChiYXNlVXJsLCByZWxhdGl2ZVVybCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlVXJsOyIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFwiU2hhbGxvdyBmcmVlemVzXCIgYW4gb2JqZWN0IHRvIHJlbmRlciBpdCBpbW11dGFibGUuXG4gKiBVc2VzIGBPYmplY3QuZnJlZXplYCBpZiBhdmFpbGFibGUsXG4gKiBvdGhlcndpc2UgdGhlIGltbXV0YWJpbGl0eSBpcyBvbmx5IGluIHRoZSB0eXBlLlxuICpcbiAqIElzIHVzZWQgdG8gY3JlYXRlIFwiZW51bSBsaWtlXCIgb2JqZWN0cy5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBvYmplY3QgdGhlIG9iamVjdCB0byBmcmVlemVcbiAqIEBwYXJhbSB7UGljazxPYmplY3RDb25zdHJ1Y3RvciwgJ2ZyZWV6ZSc+ID0gT2JqZWN0fSBvYyBgT2JqZWN0YCBieSBkZWZhdWx0LFxuICogXHRcdFx0XHRhbGxvd3MgdG8gaW5qZWN0IGN1c3RvbSBvYmplY3QgY29uc3RydWN0b3IgZm9yIHRlc3RzXG4gKiBAcmV0dXJucyB7UmVhZG9ubHk8VD59XG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvZnJlZXplXG4gKi9cbmZ1bmN0aW9uIGZyZWV6ZShvYmplY3QsIG9jKSB7XG5cdGlmIChvYyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b2MgPSBPYmplY3Rcblx0fVxuXHRyZXR1cm4gb2MgJiYgdHlwZW9mIG9jLmZyZWV6ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9jLmZyZWV6ZShvYmplY3QpIDogb2JqZWN0XG59XG5cbi8qKlxuICogQWxsIG1pbWUgdHlwZXMgdGhhdCBhcmUgYWxsb3dlZCBhcyBpbnB1dCB0byBgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZ2BcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nI0FyZ3VtZW50MDIgTUROXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbXBhcnNlcnN1cHBvcnRlZHR5cGUgV0hBVFdHIEhUTUwgU3BlY1xuICogQHNlZSBET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZ1xuICovXG52YXIgTUlNRV9UWVBFID0gZnJlZXplKHtcblx0LyoqXG5cdCAqIGB0ZXh0L2h0bWxgLCB0aGUgb25seSBtaW1lIHR5cGUgdGhhdCB0cmlnZ2VycyB0cmVhdGluZyBhbiBYTUwgZG9jdW1lbnQgYXMgSFRNTC5cblx0ICpcblx0ICogQHNlZSBET01QYXJzZXIuU3VwcG9ydGVkVHlwZS5pc0hUTUxcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy90ZXh0L2h0bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IVE1MIFdpa2lwZWRpYVxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbS1kb21wYXJzZXItcGFyc2Vmcm9tc3RyaW5nIFdIQVRXRyBIVE1MIFNwZWNcblx0ICovXG5cdEhUTUw6ICd0ZXh0L2h0bWwnLFxuXG5cdC8qKlxuXHQgKiBIZWxwZXIgbWV0aG9kIHRvIGNoZWNrIGEgbWltZSB0eXBlIGlmIGl0IGluZGljYXRlcyBhbiBIVE1MIGRvY3VtZW50XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQvaHRtbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hUTUwgV2lraXBlZGlhXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLWRvbXBhcnNlci1wYXJzZWZyb21zdHJpbmcgXHQgKi9cblx0aXNIVE1MOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUgPT09IE1JTUVfVFlQRS5IVE1MXG5cdH0sXG5cblx0LyoqXG5cdCAqIGBhcHBsaWNhdGlvbi94bWxgLCB0aGUgc3RhbmRhcmQgbWltZSB0eXBlIGZvciBYTUwgZG9jdW1lbnRzLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2FwcGxpY2F0aW9uL3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MzAzI3NlY3Rpb24tOS4xIFJGQyA3MzAzXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWE1MX2FuZF9NSU1FIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX0FQUExJQ0FUSU9OOiAnYXBwbGljYXRpb24veG1sJyxcblxuXHQvKipcblx0ICogYHRleHQvaHRtbGAsIGFuIGFsaWFzIGZvciBgYXBwbGljYXRpb24veG1sYC5cblx0ICpcblx0ICogQHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzMwMyNzZWN0aW9uLTkuMiBSRkMgNzMwM1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQveG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWE1MX2FuZF9NSU1FIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1RFWFQ6ICd0ZXh0L3htbCcsXG5cblx0LyoqXG5cdCAqIGBhcHBsaWNhdGlvbi94aHRtbCt4bWxgLCBpbmRpY2F0ZXMgYW4gWE1MIGRvY3VtZW50IHRoYXQgaGFzIHRoZSBkZWZhdWx0IEhUTUwgbmFtZXNwYWNlLFxuXHQgKiBidXQgaXMgcGFyc2VkIGFzIGFuIFhNTCBkb2N1bWVudC5cblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9hcHBsaWNhdGlvbi94aHRtbCt4bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1jcmVhdGVkb2N1bWVudCBXSEFUV0cgRE9NIFNwZWNcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YSFRNTCBXaWtpcGVkaWFcblx0ICovXG5cdFhNTF9YSFRNTF9BUFBMSUNBVElPTjogJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG5cblx0LyoqXG5cdCAqIGBpbWFnZS9zdmcreG1sYCxcblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9pbWFnZS9zdmcreG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzExLyBXM0MgU1ZHIDEuMVxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjYWxhYmxlX1ZlY3Rvcl9HcmFwaGljcyBXaWtpcGVkaWFcblx0ICovXG5cdFhNTF9TVkdfSU1BR0U6ICdpbWFnZS9zdmcreG1sJyxcbn0pXG5cbi8qKlxuICogTmFtZXNwYWNlcyB0aGF0IGFyZSB1c2VkIGluIHRoaXMgY29kZSBiYXNlLlxuICpcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLXhtbC1uYW1lc1xuICovXG52YXIgTkFNRVNQQUNFID0gZnJlZXplKHtcblx0LyoqXG5cdCAqIFRoZSBYSFRNTCBuYW1lc3BhY2UuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFxuXHQgKi9cblx0SFRNTDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLFxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYHVyaWAgZXF1YWxzIGBOQU1FU1BBQ0UuSFRNTGAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdXJpXVxuXHQgKlxuXHQgKiBAc2VlIE5BTUVTUEFDRS5IVE1MXG5cdCAqL1xuXHRpc0hUTUw6IGZ1bmN0aW9uICh1cmkpIHtcblx0XHRyZXR1cm4gdXJpID09PSBOQU1FU1BBQ0UuSFRNTFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgU1ZHIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xuXHQgKi9cblx0U1ZHOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXG5cdC8qKlxuXHQgKiBUaGUgYHhtbDpgIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2Vcblx0ICovXG5cdFhNTDogJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZScsXG5cblx0LyoqXG5cdCAqIFRoZSBgeG1sbnM6YCBuYW1lc3BhY2Vcblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvMjAwMC94bWxucy9cblx0ICovXG5cdFhNTE5TOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLFxufSlcblxuZXhwb3J0cy5mcmVlemUgPSBmcmVlemU7XG5leHBvcnRzLk1JTUVfVFlQRSA9IE1JTUVfVFlQRTtcbmV4cG9ydHMuTkFNRVNQQUNFID0gTkFNRVNQQUNFO1xuIiwidmFyIGNvbnZlbnRpb25zID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIik7XG52YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnLi9lbnRpdGllcycpO1xudmFyIHNheCA9IHJlcXVpcmUoJy4vc2F4Jyk7XG5cbnZhciBET01JbXBsZW1lbnRhdGlvbiA9IGRvbS5ET01JbXBsZW1lbnRhdGlvbjtcblxudmFyIE5BTUVTUEFDRSA9IGNvbnZlbnRpb25zLk5BTUVTUEFDRTtcblxudmFyIFBhcnNlRXJyb3IgPSBzYXguUGFyc2VFcnJvcjtcbnZhciBYTUxSZWFkZXIgPSBzYXguWE1MUmVhZGVyO1xuXG5mdW5jdGlvbiBET01QYXJzZXIob3B0aW9ucyl7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHx7bG9jYXRvcjp7fX07XG59XG5cbkRPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24oc291cmNlLG1pbWVUeXBlKXtcblx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdHZhciBzYXggPSAgbmV3IFhNTFJlYWRlcigpO1xuXHR2YXIgZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBuZXcgRE9NSGFuZGxlcigpOy8vY29udGVudEhhbmRsZXIgYW5kIExleGljYWxIYW5kbGVyXG5cdHZhciBlcnJvckhhbmRsZXIgPSBvcHRpb25zLmVycm9ySGFuZGxlcjtcblx0dmFyIGxvY2F0b3IgPSBvcHRpb25zLmxvY2F0b3I7XG5cdHZhciBkZWZhdWx0TlNNYXAgPSBvcHRpb25zLnhtbG5zfHx7fTtcblx0dmFyIGlzSFRNTCA9IC9cXC94P2h0bWw/JC8udGVzdChtaW1lVHlwZSk7Ly9taW1lVHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0bWwnKSA+IC0xO1xuICBcdHZhciBlbnRpdHlNYXAgPSBpc0hUTUwgPyBlbnRpdGllcy5IVE1MX0VOVElUSUVTIDogZW50aXRpZXMuWE1MX0VOVElUSUVTO1xuXHRpZihsb2NhdG9yKXtcblx0XHRkb21CdWlsZGVyLnNldERvY3VtZW50TG9jYXRvcihsb2NhdG9yKVxuXHR9XG5cblx0c2F4LmVycm9ySGFuZGxlciA9IGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlcixkb21CdWlsZGVyLGxvY2F0b3IpO1xuXHRzYXguZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBkb21CdWlsZGVyO1xuXHRpZihpc0hUTUwpe1xuXHRcdGRlZmF1bHROU01hcFsnJ10gPSBOQU1FU1BBQ0UuSFRNTDtcblx0fVxuXHRkZWZhdWx0TlNNYXAueG1sID0gZGVmYXVsdE5TTWFwLnhtbCB8fCBOQU1FU1BBQ0UuWE1MO1xuXHRpZihzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpe1xuXHRcdHNheC5wYXJzZShzb3VyY2UsZGVmYXVsdE5TTWFwLGVudGl0eU1hcCk7XG5cdH1lbHNle1xuXHRcdHNheC5lcnJvckhhbmRsZXIuZXJyb3IoXCJpbnZhbGlkIGRvYyBzb3VyY2VcIik7XG5cdH1cblx0cmV0dXJuIGRvbUJ1aWxkZXIuZG9jO1xufVxuZnVuY3Rpb24gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JJbXBsLGRvbUJ1aWxkZXIsbG9jYXRvcil7XG5cdGlmKCFlcnJvckltcGwpe1xuXHRcdGlmKGRvbUJ1aWxkZXIgaW5zdGFuY2VvZiBET01IYW5kbGVyKXtcblx0XHRcdHJldHVybiBkb21CdWlsZGVyO1xuXHRcdH1cblx0XHRlcnJvckltcGwgPSBkb21CdWlsZGVyIDtcblx0fVxuXHR2YXIgZXJyb3JIYW5kbGVyID0ge31cblx0dmFyIGlzQ2FsbGJhY2sgPSBlcnJvckltcGwgaW5zdGFuY2VvZiBGdW5jdGlvbjtcblx0bG9jYXRvciA9IGxvY2F0b3J8fHt9XG5cdGZ1bmN0aW9uIGJ1aWxkKGtleSl7XG5cdFx0dmFyIGZuID0gZXJyb3JJbXBsW2tleV07XG5cdFx0aWYoIWZuICYmIGlzQ2FsbGJhY2spe1xuXHRcdFx0Zm4gPSBlcnJvckltcGwubGVuZ3RoID09IDI/ZnVuY3Rpb24obXNnKXtlcnJvckltcGwoa2V5LG1zZyl9OmVycm9ySW1wbDtcblx0XHR9XG5cdFx0ZXJyb3JIYW5kbGVyW2tleV0gPSBmbiAmJiBmdW5jdGlvbihtc2cpe1xuXHRcdFx0Zm4oJ1t4bWxkb20gJytrZXkrJ11cXHQnK21zZytfbG9jYXRvcihsb2NhdG9yKSk7XG5cdFx0fXx8ZnVuY3Rpb24oKXt9O1xuXHR9XG5cdGJ1aWxkKCd3YXJuaW5nJyk7XG5cdGJ1aWxkKCdlcnJvcicpO1xuXHRidWlsZCgnZmF0YWxFcnJvcicpO1xuXHRyZXR1cm4gZXJyb3JIYW5kbGVyO1xufVxuXG4vL2NvbnNvbGUubG9nKCcjXFxuXFxuXFxuXFxuXFxuXFxuXFxuIyMjIycpXG4vKipcbiAqICtDb250ZW50SGFuZGxlcitFcnJvckhhbmRsZXJcbiAqICtMZXhpY2FsSGFuZGxlcitFbnRpdHlSZXNvbHZlcjJcbiAqIC1EZWNsSGFuZGxlci1EVERIYW5kbGVyXG4gKlxuICogRGVmYXVsdEhhbmRsZXI6RW50aXR5UmVzb2x2ZXIsIERUREhhbmRsZXIsIENvbnRlbnRIYW5kbGVyLCBFcnJvckhhbmRsZXJcbiAqIERlZmF1bHRIYW5kbGVyMjpEZWZhdWx0SGFuZGxlcixMZXhpY2FsSGFuZGxlciwgRGVjbEhhbmRsZXIsIEVudGl0eVJlc29sdmVyMlxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvaGVscGVycy9EZWZhdWx0SGFuZGxlci5odG1sXG4gKi9cbmZ1bmN0aW9uIERPTUhhbmRsZXIoKSB7XG4gICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gcG9zaXRpb24obG9jYXRvcixub2RlKXtcblx0bm9kZS5saW5lTnVtYmVyID0gbG9jYXRvci5saW5lTnVtYmVyO1xuXHRub2RlLmNvbHVtbk51bWJlciA9IGxvY2F0b3IuY29sdW1uTnVtYmVyO1xufVxuLyoqXG4gKiBAc2VlIG9yZy54bWwuc2F4LkNvbnRlbnRIYW5kbGVyI3N0YXJ0RG9jdW1lbnRcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L0NvbnRlbnRIYW5kbGVyLmh0bWxcbiAqL1xuRE9NSGFuZGxlci5wcm90b3R5cGUgPSB7XG5cdHN0YXJ0RG9jdW1lbnQgOiBmdW5jdGlvbigpIHtcbiAgICBcdHRoaXMuZG9jID0gbmV3IERPTUltcGxlbWVudGF0aW9uKCkuY3JlYXRlRG9jdW1lbnQobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgXHRpZiAodGhpcy5sb2NhdG9yKSB7XG4gICAgICAgIFx0dGhpcy5kb2MuZG9jdW1lbnRVUkkgPSB0aGlzLmxvY2F0b3Iuc3lzdGVtSWQ7XG4gICAgXHR9XG5cdH0sXG5cdHN0YXJ0RWxlbWVudDpmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUsIGF0dHJzKSB7XG5cdFx0dmFyIGRvYyA9IHRoaXMuZG9jO1xuXHQgICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHFOYW1lfHxsb2NhbE5hbWUpO1xuXHQgICAgdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgZWwpO1xuXHQgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsO1xuXG5cdFx0dGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixlbClcblx0ICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgdmFyIG5hbWVzcGFjZVVSSSA9IGF0dHJzLmdldFVSSShpKTtcblx0ICAgICAgICB2YXIgdmFsdWUgPSBhdHRycy5nZXRWYWx1ZShpKTtcblx0ICAgICAgICB2YXIgcU5hbWUgPSBhdHRycy5nZXRRTmFtZShpKTtcblx0XHRcdHZhciBhdHRyID0gZG9jLmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcU5hbWUpO1xuXHRcdFx0dGhpcy5sb2NhdG9yICYmcG9zaXRpb24oYXR0cnMuZ2V0TG9jYXRvcihpKSxhdHRyKTtcblx0XHRcdGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHQgICAgfVxuXHR9LFxuXHRlbmRFbGVtZW50OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudFxuXHRcdHZhciB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lO1xuXHRcdHRoaXMuY3VycmVudEVsZW1lbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG5cdH0sXG5cdHN0YXJ0UHJlZml4TWFwcGluZzpmdW5jdGlvbihwcmVmaXgsIHVyaSkge1xuXHR9LFxuXHRlbmRQcmVmaXhNYXBwaW5nOmZ1bmN0aW9uKHByZWZpeCkge1xuXHR9LFxuXHRwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246ZnVuY3Rpb24odGFyZ2V0LCBkYXRhKSB7XG5cdCAgICB2YXIgaW5zID0gdGhpcy5kb2MuY3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uKHRhcmdldCwgZGF0YSk7XG5cdCAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGlucylcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgaW5zKTtcblx0fSxcblx0aWdub3JhYmxlV2hpdGVzcGFjZTpmdW5jdGlvbihjaCwgc3RhcnQsIGxlbmd0aCkge1xuXHR9LFxuXHRjaGFyYWN0ZXJzOmZ1bmN0aW9uKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG5cdFx0Y2hhcnMgPSBfdG9TdHJpbmcuYXBwbHkodGhpcyxhcmd1bWVudHMpXG5cdFx0Ly9jb25zb2xlLmxvZyhjaGFycylcblx0XHRpZihjaGFycyl7XG5cdFx0XHRpZiAodGhpcy5jZGF0YSkge1xuXHRcdFx0XHR2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVDREFUQVNlY3Rpb24oY2hhcnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoY2hhcnMpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5jdXJyZW50RWxlbWVudCl7XG5cdFx0XHRcdHRoaXMuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuXHRcdFx0fWVsc2UgaWYoL15cXHMqJC8udGVzdChjaGFycykpe1xuXHRcdFx0XHR0aGlzLmRvYy5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG5cdFx0XHRcdC8vcHJvY2VzcyB4bWxcblx0XHRcdH1cblx0XHRcdHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsY2hhck5vZGUpXG5cdFx0fVxuXHR9LFxuXHRza2lwcGVkRW50aXR5OmZ1bmN0aW9uKG5hbWUpIHtcblx0fSxcblx0ZW5kRG9jdW1lbnQ6ZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5kb2Mubm9ybWFsaXplKCk7XG5cdH0sXG5cdHNldERvY3VtZW50TG9jYXRvcjpmdW5jdGlvbiAobG9jYXRvcikge1xuXHQgICAgaWYodGhpcy5sb2NhdG9yID0gbG9jYXRvcil7Ly8gJiYgISgnbGluZU51bWJlcicgaW4gbG9jYXRvcikpe1xuXHQgICAgXHRsb2NhdG9yLmxpbmVOdW1iZXIgPSAwO1xuXHQgICAgfVxuXHR9LFxuXHQvL0xleGljYWxIYW5kbGVyXG5cdGNvbW1lbnQ6ZnVuY3Rpb24oY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcblx0XHRjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLGFyZ3VtZW50cylcblx0ICAgIHZhciBjb21tID0gdGhpcy5kb2MuY3JlYXRlQ29tbWVudChjaGFycyk7XG5cdCAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGNvbW0pXG5cdCAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGNvbW0pO1xuXHR9LFxuXG5cdHN0YXJ0Q0RBVEE6ZnVuY3Rpb24oKSB7XG5cdCAgICAvL3VzZWQgaW4gY2hhcmFjdGVycygpIG1ldGhvZHNcblx0ICAgIHRoaXMuY2RhdGEgPSB0cnVlO1xuXHR9LFxuXHRlbmRDREFUQTpmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMuY2RhdGEgPSBmYWxzZTtcblx0fSxcblxuXHRzdGFydERURDpmdW5jdGlvbihuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHtcblx0XHR2YXIgaW1wbCA9IHRoaXMuZG9jLmltcGxlbWVudGF0aW9uO1xuXHQgICAgaWYgKGltcGwgJiYgaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUpIHtcblx0ICAgICAgICB2YXIgZHQgPSBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZShuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpO1xuXHQgICAgICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsZHQpXG5cdCAgICAgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBkdCk7XG5cdFx0XHRcdFx0dGhpcy5kb2MuZG9jdHlwZSA9IGR0O1xuXHQgICAgfVxuXHR9LFxuXHQvKipcblx0ICogQHNlZSBvcmcueG1sLnNheC5FcnJvckhhbmRsZXJcblx0ICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvRXJyb3JIYW5kbGVyLmh0bWxcblx0ICovXG5cdHdhcm5pbmc6ZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRjb25zb2xlLndhcm4oJ1t4bWxkb20gd2FybmluZ11cXHQnK2Vycm9yLF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuXHR9LFxuXHRlcnJvcjpmdW5jdGlvbihlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1t4bWxkb20gZXJyb3JdXFx0JytlcnJvcixfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcblx0fSxcblx0ZmF0YWxFcnJvcjpmdW5jdGlvbihlcnJvcikge1xuXHRcdHRocm93IG5ldyBQYXJzZUVycm9yKGVycm9yLCB0aGlzLmxvY2F0b3IpO1xuXHR9XG59XG5mdW5jdGlvbiBfbG9jYXRvcihsKXtcblx0aWYobCl7XG5cdFx0cmV0dXJuICdcXG5AJysobC5zeXN0ZW1JZCB8fCcnKSsnI1tsaW5lOicrbC5saW5lTnVtYmVyKycsY29sOicrbC5jb2x1bW5OdW1iZXIrJ10nXG5cdH1cbn1cbmZ1bmN0aW9uIF90b1N0cmluZyhjaGFycyxzdGFydCxsZW5ndGgpe1xuXHRpZih0eXBlb2YgY2hhcnMgPT0gJ3N0cmluZycpe1xuXHRcdHJldHVybiBjaGFycy5zdWJzdHIoc3RhcnQsbGVuZ3RoKVxuXHR9ZWxzZXsvL2phdmEgc2F4IGNvbm5lY3Qgd2lkdGggeG1sZG9tIG9uIHJoaW5vKHdoYXQgYWJvdXQ6IFwiPyAmJiAhKGNoYXJzIGluc3RhbmNlb2YgU3RyaW5nKVwiKVxuXHRcdGlmKGNoYXJzLmxlbmd0aCA+PSBzdGFydCtsZW5ndGggfHwgc3RhcnQpe1xuXHRcdFx0cmV0dXJuIG5ldyBqYXZhLmxhbmcuU3RyaW5nKGNoYXJzLHN0YXJ0LGxlbmd0aCkrJyc7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFycztcblx0fVxufVxuXG4vKlxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvZXh0L0xleGljYWxIYW5kbGVyLmh0bWxcbiAqIHVzZWQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5MZXhpY2FsSGFuZGxlcjpcbiAqICAjY29tbWVudChjaGFycywgc3RhcnQsIGxlbmd0aClcbiAqICAjc3RhcnRDREFUQSgpXG4gKiAgI2VuZENEQVRBKClcbiAqICAjc3RhcnREVEQobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKVxuICpcbiAqXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuTGV4aWNhbEhhbmRsZXI6XG4gKiAgI2VuZERURCgpXG4gKiAgI3N0YXJ0RW50aXR5KG5hbWUpXG4gKiAgI2VuZEVudGl0eShuYW1lKVxuICpcbiAqXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvRGVjbEhhbmRsZXIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkRlY2xIYW5kbGVyXG4gKiBcdCNhdHRyaWJ1dGVEZWNsKGVOYW1lLCBhTmFtZSwgdHlwZSwgbW9kZSwgdmFsdWUpXG4gKiAgI2VsZW1lbnREZWNsKG5hbWUsIG1vZGVsKVxuICogICNleHRlcm5hbEVudGl0eURlY2wobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKVxuICogICNpbnRlcm5hbEVudGl0eURlY2wobmFtZSwgdmFsdWUpXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvRW50aXR5UmVzb2x2ZXIyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LkVudGl0eVJlc29sdmVyMlxuICogICNyZXNvbHZlRW50aXR5KFN0cmluZyBuYW1lLFN0cmluZyBwdWJsaWNJZCxTdHJpbmcgYmFzZVVSSSxTdHJpbmcgc3lzdGVtSWQpXG4gKiAgI3Jlc29sdmVFbnRpdHkocHVibGljSWQsIHN5c3RlbUlkKVxuICogICNnZXRFeHRlcm5hbFN1YnNldChuYW1lLCBiYXNlVVJJKVxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvRFRESGFuZGxlci5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5EVERIYW5kbGVyXG4gKiAgI25vdGF0aW9uRGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHt9O1xuICogICN1bnBhcnNlZEVudGl0eURlY2wobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkLCBub3RhdGlvbk5hbWUpIHt9O1xuICovXG5cImVuZERURCxzdGFydEVudGl0eSxlbmRFbnRpdHksYXR0cmlidXRlRGVjbCxlbGVtZW50RGVjbCxleHRlcm5hbEVudGl0eURlY2wsaW50ZXJuYWxFbnRpdHlEZWNsLHJlc29sdmVFbnRpdHksZ2V0RXh0ZXJuYWxTdWJzZXQsbm90YXRpb25EZWNsLHVucGFyc2VkRW50aXR5RGVjbFwiLnJlcGxhY2UoL1xcdysvZyxmdW5jdGlvbihrZXkpe1xuXHRET01IYW5kbGVyLnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH1cbn0pXG5cbi8qIFByaXZhdGUgc3RhdGljIGhlbHBlcnMgdHJlYXRlZCBiZWxvdyBhcyBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMsIHNvIGRvbid0IG5lZWQgdG8gYWRkIHRoZXNlIHRvIHRoZSBwdWJsaWMgQVBJOyB3ZSBtaWdodCB1c2UgYSBSZWxhdG9yIHRvIGFsc28gZ2V0IHJpZCBvZiBub24tc3RhbmRhcmQgcHVibGljIHByb3BlcnRpZXMgKi9cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQgKGhhbmRlcixub2RlKSB7XG4gICAgaWYgKCFoYW5kZXIuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgaGFuZGVyLmRvYy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kZXIuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufS8vYXBwZW5kQ2hpbGQgYW5kIHNldEF0dHJpYnV0ZU5TIGFyZSBwcmVmb3JtYW5jZSBrZXlcblxuZXhwb3J0cy5fX0RPTUhhbmRsZXIgPSBET01IYW5kbGVyO1xuZXhwb3J0cy5ET01QYXJzZXIgPSBET01QYXJzZXI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgSW1wb3J0L3JlcXVpcmUgZnJvbSBtYWluIGVudHJ5IHBvaW50IGluc3RlYWRcbiAqL1xuZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IGRvbS5ET01JbXBsZW1lbnRhdGlvbjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBJbXBvcnQvcmVxdWlyZSBmcm9tIG1haW4gZW50cnkgcG9pbnQgaW5zdGVhZFxuICovXG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBkb20uWE1MU2VyaWFsaXplcjtcbiIsInZhciBjb252ZW50aW9ucyA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpO1xuXG52YXIgTkFNRVNQQUNFID0gY29udmVudGlvbnMuTkFNRVNQQUNFO1xuXG4vKipcbiAqIEEgcHJlcmVxdWlzaXRlIGZvciBgW10uZmlsdGVyYCwgdG8gZHJvcCBlbGVtZW50cyB0aGF0IGFyZSBlbXB0eVxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbm90RW1wdHlTdHJpbmcgKGlucHV0KSB7XG5cdHJldHVybiBpbnB1dCAhPT0gJydcbn1cbi8qKlxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jc3BsaXQtb24tYXNjaWktd2hpdGVzcGFjZVxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ1tdfSAoY2FuIGJlIGVtcHR5KVxuICovXG5mdW5jdGlvbiBzcGxpdE9uQVNDSUlXaGl0ZXNwYWNlKGlucHV0KSB7XG5cdC8vIFUrMDAwOSBUQUIsIFUrMDAwQSBMRiwgVSswMDBDIEZGLCBVKzAwMEQgQ1IsIFUrMDAyMCBTUEFDRVxuXHRyZXR1cm4gaW5wdXQgPyBpbnB1dC5zcGxpdCgvW1xcdFxcblxcZlxcciBdKy8pLmZpbHRlcihub3RFbXB0eVN0cmluZykgOiBbXVxufVxuXG4vKipcbiAqIEFkZHMgZWxlbWVudCBhcyBhIGtleSB0byBjdXJyZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuIHwgdW5kZWZpbmVkPn0gY3VycmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuIHwgdW5kZWZpbmVkPn1cbiAqL1xuZnVuY3Rpb24gb3JkZXJlZFNldFJlZHVjZXIgKGN1cnJlbnQsIGVsZW1lbnQpIHtcblx0aWYgKCFjdXJyZW50Lmhhc093blByb3BlcnR5KGVsZW1lbnQpKSB7XG5cdFx0Y3VycmVudFtlbGVtZW50XSA9IHRydWU7XG5cdH1cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jb3JkZXJlZC1zZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5mdW5jdGlvbiB0b09yZGVyZWRTZXQoaW5wdXQpIHtcblx0aWYgKCFpbnB1dCkgcmV0dXJuIFtdO1xuXHR2YXIgbGlzdCA9IHNwbGl0T25BU0NJSVdoaXRlc3BhY2UoaW5wdXQpO1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobGlzdC5yZWR1Y2Uob3JkZXJlZFNldFJlZHVjZXIsIHt9KSlcbn1cblxuLyoqXG4gKiBVc2VzIGBsaXN0LmluZGV4T2ZgIHRvIGltcGxlbWVudCBzb21ldGhpbmcgbGlrZSBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCxcbiAqIHdoaWNoIHdlIGNhbiBub3QgcmVseSBvbiBiZWluZyBhdmFpbGFibGUuXG4gKlxuICogQHBhcmFtIHthbnlbXX0gbGlzdFxuICogQHJldHVybnMge2Z1bmN0aW9uKGFueSk6IGJvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMgKGxpc3QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbGlzdCAmJiBsaXN0LmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvcHkoc3JjLGRlc3Qpe1xuXHRmb3IodmFyIHAgaW4gc3JjKXtcblx0XHRkZXN0W3BdID0gc3JjW3BdO1xuXHR9XG59XG5cbi8qKlxuXlxcdytcXC5wcm90b3R5cGVcXC4oW19cXHddKylcXHMqPVxccyooKD86LipcXHtcXHMqP1tcXHJcXG5dW1xcc1xcU10qP159KXxcXFMuKj8oPz1bO1xcclxcbl0pKTs/XG5eXFx3K1xcLnByb3RvdHlwZVxcLihbX1xcd10rKVxccyo9XFxzKihcXFMuKj8oPz1bO1xcclxcbl0pKTs/XG4gKi9cbmZ1bmN0aW9uIF9leHRlbmRzKENsYXNzLFN1cGVyKXtcblx0dmFyIHB0ID0gQ2xhc3MucHJvdG90eXBlO1xuXHRpZighKHB0IGluc3RhbmNlb2YgU3VwZXIpKXtcblx0XHRmdW5jdGlvbiB0KCl7fTtcblx0XHR0LnByb3RvdHlwZSA9IFN1cGVyLnByb3RvdHlwZTtcblx0XHR0ID0gbmV3IHQoKTtcblx0XHRjb3B5KHB0LHQpO1xuXHRcdENsYXNzLnByb3RvdHlwZSA9IHB0ID0gdDtcblx0fVxuXHRpZihwdC5jb25zdHJ1Y3RvciAhPSBDbGFzcyl7XG5cdFx0aWYodHlwZW9mIENsYXNzICE9ICdmdW5jdGlvbicpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcInVua25vd24gQ2xhc3M6XCIrQ2xhc3MpXG5cdFx0fVxuXHRcdHB0LmNvbnN0cnVjdG9yID0gQ2xhc3Ncblx0fVxufVxuXG4vLyBOb2RlIFR5cGVzXG52YXIgTm9kZVR5cGUgPSB7fVxudmFyIEVMRU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkVMRU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IDE7XG52YXIgQVRUUklCVVRFX05PREUgICAgICAgICAgICAgID0gTm9kZVR5cGUuQVRUUklCVVRFX05PREUgICAgICAgICAgICAgID0gMjtcbnZhciBURVhUX05PREUgICAgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5URVhUX05PREUgICAgICAgICAgICAgICAgICAgPSAzO1xudmFyIENEQVRBX1NFQ1RJT05fTk9ERSAgICAgICAgICA9IE5vZGVUeXBlLkNEQVRBX1NFQ1RJT05fTk9ERSAgICAgICAgICA9IDQ7XG52YXIgRU5USVRZX1JFRkVSRU5DRV9OT0RFICAgICAgID0gTm9kZVR5cGUuRU5USVRZX1JFRkVSRU5DRV9OT0RFICAgICAgID0gNTtcbnZhciBFTlRJVFlfTk9ERSAgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5FTlRJVFlfTk9ERSAgICAgICAgICAgICAgICAgPSA2O1xudmFyIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IE5vZGVUeXBlLlBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERSA9IDc7XG52YXIgQ09NTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuQ09NTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gODtcbnZhciBET0NVTUVOVF9OT0RFICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5ET0NVTUVOVF9OT0RFICAgICAgICAgICAgICAgPSA5O1xudmFyIERPQ1VNRU5UX1RZUEVfTk9ERSAgICAgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX1RZUEVfTk9ERSAgICAgICAgICA9IDEwO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgICAgICA9IDExO1xudmFyIE5PVEFUSU9OX05PREUgICAgICAgICAgICAgICA9IE5vZGVUeXBlLk5PVEFUSU9OX05PREUgICAgICAgICAgICAgICA9IDEyO1xuXG4vLyBFeGNlcHRpb25Db2RlXG52YXIgRXhjZXB0aW9uQ29kZSA9IHt9XG52YXIgRXhjZXB0aW9uTWVzc2FnZSA9IHt9O1xudmFyIElOREVYX1NJWkVfRVJSICAgICAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5ERVhfU0laRV9FUlIgICAgICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzFdPVwiSW5kZXggc2l6ZSBlcnJvclwiKSwxKTtcbnZhciBET01TVFJJTkdfU0laRV9FUlIgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLkRPTVNUUklOR19TSVpFX0VSUiAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVsyXT1cIkRPTVN0cmluZyBzaXplIGVycm9yXCIpLDIpO1xudmFyIEhJRVJBUkNIWV9SRVFVRVNUX0VSUiAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSElFUkFSQ0hZX1JFUVVFU1RfRVJSICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzNdPVwiSGllcmFyY2h5IHJlcXVlc3QgZXJyb3JcIiksMyk7XG52YXIgV1JPTkdfRE9DVU1FTlRfRVJSICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5XUk9OR19ET0NVTUVOVF9FUlIgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNF09XCJXcm9uZyBkb2N1bWVudFwiKSw0KTtcbnZhciBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgICAgICAgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQ0hBUkFDVEVSX0VSUiAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs1XT1cIkludmFsaWQgY2hhcmFjdGVyXCIpLDUpO1xudmFyIE5PX0RBVEFfQUxMT1dFRF9FUlIgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuTk9fREFUQV9BTExPV0VEX0VSUiAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzZdPVwiTm8gZGF0YSBhbGxvd2VkXCIpLDYpO1xudmFyIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gKChFeGNlcHRpb25NZXNzYWdlWzddPVwiTm8gbW9kaWZpY2F0aW9uIGFsbG93ZWRcIiksNyk7XG52YXIgTk9UX0ZPVU5EX0VSUiAgICAgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT1RfRk9VTkRfRVJSICAgICAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbOF09XCJOb3QgZm91bmRcIiksOCk7XG52YXIgTk9UX1NVUFBPUlRFRF9FUlIgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT1RfU1VQUE9SVEVEX0VSUiAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbOV09XCJOb3Qgc3VwcG9ydGVkXCIpLDkpO1xudmFyIElOVVNFX0FUVFJJQlVURV9FUlIgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5VU0VfQVRUUklCVVRFX0VSUiAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzEwXT1cIkF0dHJpYnV0ZSBpbiB1c2VcIiksMTApO1xuLy9sZXZlbDJcbnZhciBJTlZBTElEX1NUQVRFX0VSUiAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9TVEFURV9FUlIgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTFdPVwiSW52YWxpZCBzdGF0ZVwiKSwxMSk7XG52YXIgU1lOVEFYX0VSUiAgICAgICAgICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLlNZTlRBWF9FUlIgICAgICAgICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzEyXT1cIlN5bnRheCBlcnJvclwiKSwxMik7XG52YXIgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUiBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzEzXT1cIkludmFsaWQgbW9kaWZpY2F0aW9uXCIpLDEzKTtcbnZhciBOQU1FU1BBQ0VfRVJSICAgICAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuTkFNRVNQQUNFX0VSUiAgICAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxNF09XCJJbnZhbGlkIG5hbWVzcGFjZVwiKSwxNCk7XG52YXIgSU5WQUxJRF9BQ0NFU1NfRVJSICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfQUNDRVNTX0VSUiAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTVdPVwiSW52YWxpZCBhY2Nlc3NcIiksMTUpO1xuXG4vKipcbiAqIERPTSBMZXZlbCAyXG4gKiBPYmplY3QgRE9NRXhjZXB0aW9uXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9lY21hLXNjcmlwdC1sYW5ndWFnZS1iaW5kaW5nLmh0bWxcbiAqL1xuZnVuY3Rpb24gRE9NRXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UpIHtcblx0aWYobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKXtcblx0XHR2YXIgZXJyb3IgPSBtZXNzYWdlO1xuXHR9ZWxzZXtcblx0XHRlcnJvciA9IHRoaXM7XG5cdFx0RXJyb3IuY2FsbCh0aGlzLCBFeGNlcHRpb25NZXNzYWdlW2NvZGVdKTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBFeGNlcHRpb25NZXNzYWdlW2NvZGVdO1xuXHRcdGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBET01FeGNlcHRpb24pO1xuXHR9XG5cdGVycm9yLmNvZGUgPSBjb2RlO1xuXHRpZihtZXNzYWdlKSB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbmNvcHkoRXhjZXB0aW9uQ29kZSxET01FeGNlcHRpb24pXG5cbi8qKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2NvcmUuaHRtbCNJRC01MzYyOTcxNzdcbiAqIFRoZSBOb2RlTGlzdCBpbnRlcmZhY2UgcHJvdmlkZXMgdGhlIGFic3RyYWN0aW9uIG9mIGFuIG9yZGVyZWQgY29sbGVjdGlvbiBvZiBub2Rlcywgd2l0aG91dCBkZWZpbmluZyBvciBjb25zdHJhaW5pbmcgaG93IHRoaXMgY29sbGVjdGlvbiBpcyBpbXBsZW1lbnRlZC4gTm9kZUxpc3Qgb2JqZWN0cyBpbiB0aGUgRE9NIGFyZSBsaXZlLlxuICogVGhlIGl0ZW1zIGluIHRoZSBOb2RlTGlzdCBhcmUgYWNjZXNzaWJsZSB2aWEgYW4gaW50ZWdyYWwgaW5kZXgsIHN0YXJ0aW5nIGZyb20gMC5cbiAqL1xuZnVuY3Rpb24gTm9kZUxpc3QoKSB7XG59O1xuTm9kZUxpc3QucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdC4gVGhlIHJhbmdlIG9mIHZhbGlkIGNoaWxkIG5vZGUgaW5kaWNlcyBpcyAwIHRvIGxlbmd0aC0xIGluY2x1c2l2ZS5cblx0ICogQHN0YW5kYXJkIGxldmVsMVxuXHQgKi9cblx0bGVuZ3RoOjAsIFxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgaW5kZXh0aCBpdGVtIGluIHRoZSBjb2xsZWN0aW9uLiBJZiBpbmRleCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdCwgdGhpcyByZXR1cm5zIG51bGwuXG5cdCAqIEBzdGFuZGFyZCBsZXZlbDFcblx0ICogQHBhcmFtIGluZGV4ICB1bnNpZ25lZCBsb25nIFxuXHQgKiAgIEluZGV4IGludG8gdGhlIGNvbGxlY3Rpb24uXG5cdCAqIEByZXR1cm4gTm9kZVxuXHQgKiBcdFRoZSBub2RlIGF0IHRoZSBpbmRleHRoIHBvc2l0aW9uIGluIHRoZSBOb2RlTGlzdCwgb3IgbnVsbCBpZiB0aGF0IGlzIG5vdCBhIHZhbGlkIGluZGV4LiBcblx0ICovXG5cdGl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXNbaW5kZXhdIHx8IG51bGw7XG5cdH0sXG5cdHRvU3RyaW5nOmZ1bmN0aW9uKGlzSFRNTCxub2RlRmlsdGVyKXtcblx0XHRmb3IodmFyIGJ1ZiA9IFtdLCBpID0gMDtpPHRoaXMubGVuZ3RoO2krKyl7XG5cdFx0XHRzZXJpYWxpemVUb1N0cmluZyh0aGlzW2ldLGJ1Zixpc0hUTUwsbm9kZUZpbHRlcik7XG5cdFx0fVxuXHRcdHJldHVybiBidWYuam9pbignJyk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIExpdmVOb2RlTGlzdChub2RlLHJlZnJlc2gpe1xuXHR0aGlzLl9ub2RlID0gbm9kZTtcblx0dGhpcy5fcmVmcmVzaCA9IHJlZnJlc2hcblx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xufVxuZnVuY3Rpb24gX3VwZGF0ZUxpdmVMaXN0KGxpc3Qpe1xuXHR2YXIgaW5jID0gbGlzdC5fbm9kZS5faW5jIHx8IGxpc3QuX25vZGUub3duZXJEb2N1bWVudC5faW5jO1xuXHRpZihsaXN0Ll9pbmMgIT0gaW5jKXtcblx0XHR2YXIgbHMgPSBsaXN0Ll9yZWZyZXNoKGxpc3QuX25vZGUpO1xuXHRcdC8vY29uc29sZS5sb2cobHMubGVuZ3RoKVxuXHRcdF9fc2V0X18obGlzdCwnbGVuZ3RoJyxscy5sZW5ndGgpO1xuXHRcdGNvcHkobHMsbGlzdCk7XG5cdFx0bGlzdC5faW5jID0gaW5jO1xuXHR9XG59XG5MaXZlTm9kZUxpc3QucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbihpKXtcblx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuXHRyZXR1cm4gdGhpc1tpXTtcbn1cblxuX2V4dGVuZHMoTGl2ZU5vZGVMaXN0LE5vZGVMaXN0KTtcblxuLyoqXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGUgTmFtZWROb2RlTWFwIGludGVyZmFjZSBhcmUgdXNlZFxuICogdG8gcmVwcmVzZW50IGNvbGxlY3Rpb25zIG9mIG5vZGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGJ5IG5hbWUuXG4gKiBOb3RlIHRoYXQgTmFtZWROb2RlTWFwIGRvZXMgbm90IGluaGVyaXQgZnJvbSBOb2RlTGlzdDtcbiAqIE5hbWVkTm9kZU1hcHMgYXJlIG5vdCBtYWludGFpbmVkIGluIGFueSBwYXJ0aWN1bGFyIG9yZGVyLlxuICogT2JqZWN0cyBjb250YWluZWQgaW4gYW4gb2JqZWN0IGltcGxlbWVudGluZyBOYW1lZE5vZGVNYXAgbWF5IGFsc28gYmUgYWNjZXNzZWQgYnkgYW4gb3JkaW5hbCBpbmRleCxcbiAqIGJ1dCB0aGlzIGlzIHNpbXBseSB0byBhbGxvdyBjb252ZW5pZW50IGVudW1lcmF0aW9uIG9mIHRoZSBjb250ZW50cyBvZiBhIE5hbWVkTm9kZU1hcCxcbiAqIGFuZCBkb2VzIG5vdCBpbXBseSB0aGF0IHRoZSBET00gc3BlY2lmaWVzIGFuIG9yZGVyIHRvIHRoZXNlIE5vZGVzLlxuICogTmFtZWROb2RlTWFwIG9iamVjdHMgaW4gdGhlIERPTSBhcmUgbGl2ZS5cbiAqIHVzZWQgZm9yIGF0dHJpYnV0ZXMgb3IgRG9jdW1lbnRUeXBlIGVudGl0aWVzIFxuICovXG5mdW5jdGlvbiBOYW1lZE5vZGVNYXAoKSB7XG59O1xuXG5mdW5jdGlvbiBfZmluZE5vZGVJbmRleChsaXN0LG5vZGUpe1xuXHR2YXIgaSA9IGxpc3QubGVuZ3RoO1xuXHR3aGlsZShpLS0pe1xuXHRcdGlmKGxpc3RbaV0gPT09IG5vZGUpe3JldHVybiBpfVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9hZGROYW1lZE5vZGUoZWwsbGlzdCxuZXdBdHRyLG9sZEF0dHIpe1xuXHRpZihvbGRBdHRyKXtcblx0XHRsaXN0W19maW5kTm9kZUluZGV4KGxpc3Qsb2xkQXR0cildID0gbmV3QXR0cjtcblx0fWVsc2V7XG5cdFx0bGlzdFtsaXN0Lmxlbmd0aCsrXSA9IG5ld0F0dHI7XG5cdH1cblx0aWYoZWwpe1xuXHRcdG5ld0F0dHIub3duZXJFbGVtZW50ID0gZWw7XG5cdFx0dmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG5cdFx0aWYoZG9jKXtcblx0XHRcdG9sZEF0dHIgJiYgX29uUmVtb3ZlQXR0cmlidXRlKGRvYyxlbCxvbGRBdHRyKTtcblx0XHRcdF9vbkFkZEF0dHJpYnV0ZShkb2MsZWwsbmV3QXR0cik7XG5cdFx0fVxuXHR9XG59XG5mdW5jdGlvbiBfcmVtb3ZlTmFtZWROb2RlKGVsLGxpc3QsYXR0cil7XG5cdC8vY29uc29sZS5sb2coJ3JlbW92ZSBhdHRyOicrYXR0cilcblx0dmFyIGkgPSBfZmluZE5vZGVJbmRleChsaXN0LGF0dHIpO1xuXHRpZihpPj0wKXtcblx0XHR2YXIgbGFzdEluZGV4ID0gbGlzdC5sZW5ndGgtMVxuXHRcdHdoaWxlKGk8bGFzdEluZGV4KXtcblx0XHRcdGxpc3RbaV0gPSBsaXN0WysraV1cblx0XHR9XG5cdFx0bGlzdC5sZW5ndGggPSBsYXN0SW5kZXg7XG5cdFx0aWYoZWwpe1xuXHRcdFx0dmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRpZihkb2Mpe1xuXHRcdFx0XHRfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLGF0dHIpO1xuXHRcdFx0XHRhdHRyLm93bmVyRWxlbWVudCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ZWxzZXtcblx0XHR0aHJvdyBET01FeGNlcHRpb24oTk9UX0ZPVU5EX0VSUixuZXcgRXJyb3IoZWwudGFnTmFtZSsnQCcrYXR0cikpXG5cdH1cbn1cbk5hbWVkTm9kZU1hcC5wcm90b3R5cGUgPSB7XG5cdGxlbmd0aDowLFxuXHRpdGVtOk5vZGVMaXN0LnByb3RvdHlwZS5pdGVtLFxuXHRnZXROYW1lZEl0ZW06IGZ1bmN0aW9uKGtleSkge1xuLy9cdFx0aWYoa2V5LmluZGV4T2YoJzonKT4wIHx8IGtleSA9PSAneG1sbnMnKXtcbi8vXHRcdFx0cmV0dXJuIG51bGw7XG4vL1x0XHR9XG5cdFx0Ly9jb25zb2xlLmxvZygpXG5cdFx0dmFyIGkgPSB0aGlzLmxlbmd0aDtcblx0XHR3aGlsZShpLS0pe1xuXHRcdFx0dmFyIGF0dHIgPSB0aGlzW2ldO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhhdHRyLm5vZGVOYW1lLGtleSlcblx0XHRcdGlmKGF0dHIubm9kZU5hbWUgPT0ga2V5KXtcblx0XHRcdFx0cmV0dXJuIGF0dHI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZXROYW1lZEl0ZW06IGZ1bmN0aW9uKGF0dHIpIHtcblx0XHR2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudDtcblx0XHRpZihlbCAmJiBlbCE9dGhpcy5fb3duZXJFbGVtZW50KXtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG5cdFx0fVxuXHRcdHZhciBvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oYXR0ci5ub2RlTmFtZSk7XG5cdFx0X2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyLG9sZEF0dHIpO1xuXHRcdHJldHVybiBvbGRBdHRyO1xuXHR9LFxuXHQvKiByZXR1cm5zIE5vZGUgKi9cblx0c2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uKGF0dHIpIHsvLyByYWlzZXM6IFdST05HX0RPQ1VNRU5UX0VSUixOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIsSU5VU0VfQVRUUklCVVRFX0VSUlxuXHRcdHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50LCBvbGRBdHRyO1xuXHRcdGlmKGVsICYmIGVsIT10aGlzLl9vd25lckVsZW1lbnQpe1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcblx0XHR9XG5cdFx0b2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMoYXR0ci5uYW1lc3BhY2VVUkksYXR0ci5sb2NhbE5hbWUpO1xuXHRcdF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cixvbGRBdHRyKTtcblx0XHRyZXR1cm4gb2xkQXR0cjtcblx0fSxcblxuXHQvKiByZXR1cm5zIE5vZGUgKi9cblx0cmVtb3ZlTmFtZWRJdGVtOiBmdW5jdGlvbihrZXkpIHtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGtleSk7XG5cdFx0X3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyKTtcblx0XHRyZXR1cm4gYXR0cjtcblx0XHRcblx0XHRcblx0fSwvLyByYWlzZXM6IE5PVF9GT1VORF9FUlIsTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSXG5cdFxuXHQvL2ZvciBsZXZlbDJcblx0cmVtb3ZlTmFtZWRJdGVtTlM6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLGxvY2FsTmFtZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSxsb2NhbE5hbWUpO1xuXHRcdF9yZW1vdmVOYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cik7XG5cdFx0cmV0dXJuIGF0dHI7XG5cdH0sXG5cdGdldE5hbWVkSXRlbU5TOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuXHRcdHZhciBpID0gdGhpcy5sZW5ndGg7XG5cdFx0d2hpbGUoaS0tKXtcblx0XHRcdHZhciBub2RlID0gdGhpc1tpXTtcblx0XHRcdGlmKG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSAmJiBub2RlLm5hbWVzcGFjZVVSSSA9PSBuYW1lc3BhY2VVUkkpe1xuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cbi8qKlxuICogVGhlIERPTUltcGxlbWVudGF0aW9uIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCBwcm92aWRpbmcgbWV0aG9kc1xuICogd2hpY2ggYXJlIG5vdCBkZXBlbmRlbnQgb24gYW55IHBhcnRpY3VsYXIgZG9jdW1lbnQuXG4gKiBTdWNoIGFuIG9iamVjdCBpcyByZXR1cm5lZCBieSB0aGUgYERvY3VtZW50LmltcGxlbWVudGF0aW9uYCBwcm9wZXJ0eS5cbiAqXG4gKiBfX1RoZSBpbmRpdmlkdWFsIG1ldGhvZHMgZGVzY3JpYmUgdGhlIGRpZmZlcmVuY2VzIGNvbXBhcmVkIHRvIHRoZSBzcGVjcy5fX1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uIE1ETlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2xldmVsLW9uZS1jb3JlLmh0bWwjSUQtMTAyMTYxNDkwIERPTSBMZXZlbCAxIENvcmUgKEluaXRpYWwpXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDIgQ29yZVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9jb3JlLmh0bWwjSUQtMTAyMTYxNDkwIERPTSBMZXZlbCAzIENvcmVcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb21pbXBsZW1lbnRhdGlvbiBET00gTGl2aW5nIFN0YW5kYXJkXG4gKi9cbmZ1bmN0aW9uIERPTUltcGxlbWVudGF0aW9uKCkge1xufVxuXG5ET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBUaGUgRE9NSW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgpIG1ldGhvZCByZXR1cm5zIGEgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgaWYgYSBnaXZlbiBmZWF0dXJlIGlzIHN1cHBvcnRlZC5cblx0ICogVGhlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgZmFpcmx5IGRpdmVyZ2VkIGluIHdoYXQga2luZCBvZiBmZWF0dXJlcyB3ZXJlIHJlcG9ydGVkLlxuXHQgKiBUaGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHNwZWMgc2V0dGxlZCB0byBmb3JjZSB0aGlzIG1ldGhvZCB0byBhbHdheXMgcmV0dXJuIHRydWUsIHdoZXJlIHRoZSBmdW5jdGlvbmFsaXR5IHdhcyBhY2N1cmF0ZSBhbmQgaW4gdXNlLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZCBJdCBpcyBkZXByZWNhdGVkIGFuZCBtb2Rlcm4gYnJvd3NlcnMgcmV0dXJuIHRydWUgaW4gYWxsIGNhc2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3ZlcnNpb25dXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBhbHdheXMgdHJ1ZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9oYXNGZWF0dXJlIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMtRE9NLUxldmVsLTEvbGV2ZWwtb25lLWNvcmUuaHRtbCNJRC01Q0VEOTRENyBET00gTGV2ZWwgMSBDb3JlXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZSBET00gTGl2aW5nIFN0YW5kYXJkXG5cdCAqL1xuXHRoYXNGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gWE1MIERvY3VtZW50IG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgd2l0aCBpdHMgZG9jdW1lbnQgZWxlbWVudC5cblx0ICpcblx0ICogX19JdCBiZWhhdmVzIHNsaWdodGx5IGRpZmZlcmVudCBmcm9tIHRoZSBkZXNjcmlwdGlvbiBpbiB0aGUgbGl2aW5nIHN0YW5kYXJkX186XG5cdCAqIC0gVGhlcmUgaXMgbm8gaW50ZXJmYWNlL2NsYXNzIGBYTUxEb2N1bWVudGAsIGl0IHJldHVybnMgYSBgRG9jdW1lbnRgIGluc3RhbmNlLlxuXHQgKiAtIGBjb250ZW50VHlwZWAsIGBlbmNvZGluZ2AsIGBtb2RlYCwgYG9yaWdpbmAsIGB1cmxgIGZpZWxkcyBhcmUgY3VycmVudGx5IG5vdCBkZWNsYXJlZC5cblx0ICogLSB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCB2YWxpZGF0aW5nIG5hbWVzIG9yIHF1YWxpZmllZCBuYW1lc1xuXHQgKiAgICh3aGVuIHBhcnNpbmcgWE1MIHN0cmluZ3MsIHRoZSBTQVggcGFyc2VyIHRha2VzIGNhcmUgb2YgdGhhdClcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gbmFtZXNwYWNlVVJJXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG5cdCAqIEBwYXJhbSB7RG9jdW1lbnRUeXBlPW51bGx9IGRvY3R5cGVcblx0ICogQHJldHVybnMge0RvY3VtZW50fVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9jcmVhdGVEb2N1bWVudCBNRE5cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItQ29yZS9jb3JlLmh0bWwjTGV2ZWwtMi1Db3JlLURPTS1jcmVhdGVEb2N1bWVudCBET00gTGV2ZWwgMiBDb3JlIChpbml0aWFsKVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50ICBET00gTGV2ZWwgMiBDb3JlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyN2YWxpZGF0ZS1hbmQtZXh0cmFjdCBET006IFZhbGlkYXRlIGFuZCBleHRyYWN0XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtTmFtZVN0YXJ0Q2hhciBYTUwgU3BlYzogTmFtZXNcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzLyNucy1xdWFsbmFtZXMgWE1MIE5hbWVzcGFjZXM6IFF1YWxpZmllZCBuYW1lc1xuXHQgKi9cblx0Y3JlYXRlRG9jdW1lbnQ6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgIHF1YWxpZmllZE5hbWUsIGRvY3R5cGUpe1xuXHRcdHZhciBkb2MgPSBuZXcgRG9jdW1lbnQoKTtcblx0XHRkb2MuaW1wbGVtZW50YXRpb24gPSB0aGlzO1xuXHRcdGRvYy5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0ZG9jLmRvY3R5cGUgPSBkb2N0eXBlIHx8IG51bGw7XG5cdFx0aWYgKGRvY3R5cGUpe1xuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKGRvY3R5cGUpO1xuXHRcdH1cblx0XHRpZiAocXVhbGlmaWVkTmFtZSl7XG5cdFx0XHR2YXIgcm9vdCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcblx0XHRcdGRvYy5hcHBlbmRDaGlsZChyb290KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRvYztcblx0fSxcblx0LyoqXG5cdCAqIFJldHVybnMgYSBkb2N0eXBlLCB3aXRoIHRoZSBnaXZlbiBgcXVhbGlmaWVkTmFtZWAsIGBwdWJsaWNJZGAsIGFuZCBgc3lzdGVtSWRgLlxuXHQgKlxuXHQgKiBfX1RoaXMgYmVoYXZpb3IgaXMgc2xpZ2h0bHkgZGlmZmVyZW50IGZyb20gdGhlIGluIHRoZSBzcGVjc19fOlxuXHQgKiAtIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IHZhbGlkYXRpbmcgbmFtZXMgb3IgcXVhbGlmaWVkIG5hbWVzXG5cdCAqICAgKHdoZW4gcGFyc2luZyBYTUwgc3RyaW5ncywgdGhlIFNBWCBwYXJzZXIgdGFrZXMgY2FyZSBvZiB0aGF0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcXVhbGlmaWVkTmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3B1YmxpY0lkXVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3N5c3RlbUlkXVxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnRUeXBlfSB3aGljaCBjYW4gZWl0aGVyIGJlIHVzZWQgd2l0aCBgRE9NSW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRgIHVwb24gZG9jdW1lbnQgY3JlYXRpb25cblx0ICogXHRcdFx0XHQgIG9yIGNhbiBiZSBwdXQgaW50byB0aGUgZG9jdW1lbnQgdmlhIG1ldGhvZHMgbGlrZSBgTm9kZS5pbnNlcnRCZWZvcmUoKWAgb3IgYE5vZGUucmVwbGFjZUNoaWxkKClgXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2NyZWF0ZURvY3VtZW50VHlwZSBNRE5cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItQ29yZS9jb3JlLmh0bWwjTGV2ZWwtMi1Db3JlLURPTS1jcmVhdGVEb2NUeXBlIERPTSBMZXZlbCAyIENvcmVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1jcmVhdGVkb2N1bWVudHR5cGUgRE9NIExpdmluZyBTdGFuZGFyZFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jdmFsaWRhdGUtYW5kLWV4dHJhY3QgRE9NOiBWYWxpZGF0ZSBhbmQgZXh0cmFjdFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULU5hbWVTdGFydENoYXIgWE1MIFNwZWM6IE5hbWVzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lcy8jbnMtcXVhbG5hbWVzIFhNTCBOYW1lc3BhY2VzOiBRdWFsaWZpZWQgbmFtZXNcblx0ICovXG5cdGNyZWF0ZURvY3VtZW50VHlwZTogZnVuY3Rpb24ocXVhbGlmaWVkTmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBEb2N1bWVudFR5cGUoKTtcblx0XHRub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUucHVibGljSWQgPSBwdWJsaWNJZCB8fCAnJztcblx0XHRub2RlLnN5c3RlbUlkID0gc3lzdGVtSWQgfHwgJyc7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxufTtcblxuXG4vKipcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9SRUMtRE9NLUxldmVsLTItQ29yZS0yMDAwMTExMy9jb3JlLmh0bWwjSUQtMTk1MDY0MTI0N1xuICovXG5cbmZ1bmN0aW9uIE5vZGUoKSB7XG59O1xuXG5Ob2RlLnByb3RvdHlwZSA9IHtcblx0Zmlyc3RDaGlsZCA6IG51bGwsXG5cdGxhc3RDaGlsZCA6IG51bGwsXG5cdHByZXZpb3VzU2libGluZyA6IG51bGwsXG5cdG5leHRTaWJsaW5nIDogbnVsbCxcblx0YXR0cmlidXRlcyA6IG51bGwsXG5cdHBhcmVudE5vZGUgOiBudWxsLFxuXHRjaGlsZE5vZGVzIDogbnVsbCxcblx0b3duZXJEb2N1bWVudCA6IG51bGwsXG5cdG5vZGVWYWx1ZSA6IG51bGwsXG5cdG5hbWVzcGFjZVVSSSA6IG51bGwsXG5cdHByZWZpeCA6IG51bGwsXG5cdGxvY2FsTmFtZSA6IG51bGwsXG5cdC8vIE1vZGlmaWVkIGluIERPTSBMZXZlbCAyOlxuXHRpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obmV3Q2hpbGQsIHJlZkNoaWxkKXsvL3JhaXNlcyBcblx0XHRyZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLG5ld0NoaWxkLHJlZkNoaWxkKTtcblx0fSxcblx0cmVwbGFjZUNoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkLCBvbGRDaGlsZCl7Ly9yYWlzZXMgXG5cdFx0dGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsb2xkQ2hpbGQpO1xuXHRcdGlmKG9sZENoaWxkKXtcblx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuXHRcdH1cblx0fSxcblx0cmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24ob2xkQ2hpbGQpe1xuXHRcdHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcyxvbGRDaGlsZCk7XG5cdH0sXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHRyZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsbnVsbCk7XG5cdH0sXG5cdGhhc0NoaWxkTm9kZXM6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5maXJzdENoaWxkICE9IG51bGw7XG5cdH0sXG5cdGNsb25lTm9kZTpmdW5jdGlvbihkZWVwKXtcblx0XHRyZXR1cm4gY2xvbmVOb2RlKHRoaXMub3duZXJEb2N1bWVudHx8dGhpcyx0aGlzLGRlZXApO1xuXHR9LFxuXHQvLyBNb2RpZmllZCBpbiBET00gTGV2ZWwgMjpcblx0bm9ybWFsaXplOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNoaWxkID0gdGhpcy5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRpZihuZXh0ICYmIG5leHQubm9kZVR5cGUgPT0gVEVYVF9OT0RFICYmIGNoaWxkLm5vZGVUeXBlID09IFRFWFRfTk9ERSl7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQobmV4dCk7XG5cdFx0XHRcdGNoaWxkLmFwcGVuZERhdGEobmV4dC5kYXRhKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRjaGlsZC5ub3JtYWxpemUoKTtcblx0XHRcdFx0Y2hpbGQgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcbiAgXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRpc1N1cHBvcnRlZDpmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKXtcblx0XHRyZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoZmVhdHVyZSx2ZXJzaW9uKTtcblx0fSxcbiAgICAvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuICAgIGhhc0F0dHJpYnV0ZXM6ZnVuY3Rpb24oKXtcbiAgICBcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoPjA7XG4gICAgfSxcblx0LyoqXG5cdCAqIExvb2sgdXAgdGhlIHByZWZpeCBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBuYW1lc3BhY2UgVVJJLCBzdGFydGluZyBmcm9tIHRoaXMgbm9kZS5cblx0ICogKipUaGUgZGVmYXVsdCBuYW1lc3BhY2UgZGVjbGFyYXRpb25zIGFyZSBpZ25vcmVkIGJ5IHRoaXMgbWV0aG9kLioqXG5cdCAqIFNlZSBOYW1lc3BhY2UgUHJlZml4IExvb2t1cCBmb3IgZGV0YWlscyBvbiB0aGUgYWxnb3JpdGhtIHVzZWQgYnkgdGhpcyBtZXRob2QuXG5cdCAqXG5cdCAqIF9Ob3RlOiBUaGUgaW1wbGVtZW50YXRpb24gc2VlbXMgdG8gYmUgaW5jb21wbGV0ZSB3aGVuIGNvbXBhcmVkIHRvIHRoZSBhbGdvcml0aG0gZGVzY3JpYmVkIGluIHRoZSBzcGVjcy5fXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gbmFtZXNwYWNlVVJJXG5cdCAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2NvcmUuaHRtbCNOb2RlMy1sb29rdXBOYW1lc3BhY2VQcmVmaXhcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9uYW1lc3BhY2VzLWFsZ29yaXRobXMuaHRtbCNsb29rdXBOYW1lc3BhY2VQcmVmaXhBbGdvXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1sb29rdXBwcmVmaXhcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMzIyXG5cdCAqL1xuICAgIGxvb2t1cFByZWZpeDpmdW5jdGlvbihuYW1lc3BhY2VVUkkpe1xuICAgIFx0dmFyIGVsID0gdGhpcztcbiAgICBcdHdoaWxlKGVsKXtcbiAgICBcdFx0dmFyIG1hcCA9IGVsLl9uc01hcDtcbiAgICBcdFx0Ly9jb25zb2xlLmRpcihtYXApXG4gICAgXHRcdGlmKG1hcCl7XG4gICAgXHRcdFx0Zm9yKHZhciBuIGluIG1hcCl7XG4gICAgXHRcdFx0XHRpZihtYXBbbl0gPT0gbmFtZXNwYWNlVVJJKXtcbiAgICBcdFx0XHRcdFx0cmV0dXJuIG47XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREU/ZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDM6XG4gICAgbG9va3VwTmFtZXNwYWNlVVJJOmZ1bmN0aW9uKHByZWZpeCl7XG4gICAgXHR2YXIgZWwgPSB0aGlzO1xuICAgIFx0d2hpbGUoZWwpe1xuICAgIFx0XHR2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgIFx0XHQvL2NvbnNvbGUuZGlyKG1hcClcbiAgICBcdFx0aWYobWFwKXtcbiAgICBcdFx0XHRpZihwcmVmaXggaW4gbWFwKXtcbiAgICBcdFx0XHRcdHJldHVybiBtYXBbcHJlZml4XSA7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGVsID0gZWwubm9kZVR5cGUgPT0gQVRUUklCVVRFX05PREU/ZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgXHR9XG4gICAgXHRyZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDM6XG4gICAgaXNEZWZhdWx0TmFtZXNwYWNlOmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSl7XG4gICAgXHR2YXIgcHJlZml4ID0gdGhpcy5sb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKTtcbiAgICBcdHJldHVybiBwcmVmaXggPT0gbnVsbDtcbiAgICB9XG59O1xuXG5cbmZ1bmN0aW9uIF94bWxFbmNvZGVyKGMpe1xuXHRyZXR1cm4gYyA9PSAnPCcgJiYgJyZsdDsnIHx8XG4gICAgICAgICBjID09ICc+JyAmJiAnJmd0OycgfHxcbiAgICAgICAgIGMgPT0gJyYnICYmICcmYW1wOycgfHxcbiAgICAgICAgIGMgPT0gJ1wiJyAmJiAnJnF1b3Q7JyB8fFxuICAgICAgICAgJyYjJytjLmNoYXJDb2RlQXQoKSsnOydcbn1cblxuXG5jb3B5KE5vZGVUeXBlLE5vZGUpO1xuY29weShOb2RlVHlwZSxOb2RlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogQHBhcmFtIGNhbGxiYWNrIHJldHVybiB0cnVlIGZvciBjb250aW51ZSxmYWxzZSBmb3IgYnJlYWtcbiAqIEByZXR1cm4gYm9vbGVhbiB0cnVlOiBicmVhayB2aXNpdDtcbiAqL1xuZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlLGNhbGxiYWNrKXtcblx0aWYoY2FsbGJhY2sobm9kZSkpe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQpe1xuXHRcdGRve1xuXHRcdFx0aWYoX3Zpc2l0Tm9kZShub2RlLGNhbGxiYWNrKSl7cmV0dXJuIHRydWV9XG4gICAgICAgIH13aGlsZShub2RlPW5vZGUubmV4dFNpYmxpbmcpXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gRG9jdW1lbnQoKXtcbn1cblxuZnVuY3Rpb24gX29uQWRkQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyKXtcblx0ZG9jICYmIGRvYy5faW5jKys7XG5cdHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJIDtcblx0aWYobnMgPT09IE5BTUVTUEFDRS5YTUxOUyl7XG5cdFx0Ly91cGRhdGUgbmFtZXNwYWNlXG5cdFx0ZWwuX25zTWFwW25ld0F0dHIucHJlZml4P25ld0F0dHIubG9jYWxOYW1lOicnXSA9IG5ld0F0dHIudmFsdWVcblx0fVxufVxuXG5mdW5jdGlvbiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIscmVtb3ZlKXtcblx0ZG9jICYmIGRvYy5faW5jKys7XG5cdHZhciBucyA9IG5ld0F0dHIubmFtZXNwYWNlVVJJIDtcblx0aWYobnMgPT09IE5BTUVTUEFDRS5YTUxOUyl7XG5cdFx0Ly91cGRhdGUgbmFtZXNwYWNlXG5cdFx0ZGVsZXRlIGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeD9uZXdBdHRyLmxvY2FsTmFtZTonJ11cblx0fVxufVxuXG5mdW5jdGlvbiBfb25VcGRhdGVDaGlsZChkb2MsZWwsbmV3Q2hpbGQpe1xuXHRpZihkb2MgJiYgZG9jLl9pbmMpe1xuXHRcdGRvYy5faW5jKys7XG5cdFx0Ly91cGRhdGUgY2hpbGROb2Rlc1xuXHRcdHZhciBjcyA9IGVsLmNoaWxkTm9kZXM7XG5cdFx0aWYobmV3Q2hpbGQpe1xuXHRcdFx0Y3NbY3MubGVuZ3RoKytdID0gbmV3Q2hpbGQ7XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2NvbnNvbGUubG9nKDEpXG5cdFx0XHR2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHRjc1tpKytdID0gY2hpbGQ7XG5cdFx0XHRcdGNoaWxkID1jaGlsZC5uZXh0U2libGluZztcblx0XHRcdH1cblx0XHRcdGNzLmxlbmd0aCA9IGk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogYXR0cmlidXRlcztcbiAqIGNoaWxkcmVuO1xuICogXG4gKiB3cml0ZWFibGUgcHJvcGVydGllczpcbiAqIG5vZGVWYWx1ZSxBdHRyOnZhbHVlLENoYXJhY3RlckRhdGE6ZGF0YVxuICogcHJlZml4XG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVDaGlsZChwYXJlbnROb2RlLGNoaWxkKXtcblx0dmFyIHByZXZpb3VzID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuXHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRpZihwcmV2aW91cyl7XG5cdFx0cHJldmlvdXMubmV4dFNpYmxpbmcgPSBuZXh0O1xuXHR9ZWxzZXtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXh0XG5cdH1cblx0aWYobmV4dCl7XG5cdFx0bmV4dC5wcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91cztcblx0fWVsc2V7XG5cdFx0cGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBwcmV2aW91cztcblx0fVxuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQscGFyZW50Tm9kZSk7XG5cdHJldHVybiBjaGlsZDtcbn1cbi8qKlxuICogcHJlZm9ybWFuY2Uga2V5KHJlZkNoaWxkID09IG51bGwpXG4gKi9cbmZ1bmN0aW9uIF9pbnNlcnRCZWZvcmUocGFyZW50Tm9kZSxuZXdDaGlsZCxuZXh0Q2hpbGQpe1xuXHR2YXIgY3AgPSBuZXdDaGlsZC5wYXJlbnROb2RlO1xuXHRpZihjcCl7XG5cdFx0Y3AucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpOy8vcmVtb3ZlIGFuZCB1cGRhdGVcblx0fVxuXHRpZihuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0dmFyIG5ld0ZpcnN0ID0gbmV3Q2hpbGQuZmlyc3RDaGlsZDtcblx0XHRpZiAobmV3Rmlyc3QgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG5ld0NoaWxkO1xuXHRcdH1cblx0XHR2YXIgbmV3TGFzdCA9IG5ld0NoaWxkLmxhc3RDaGlsZDtcblx0fWVsc2V7XG5cdFx0bmV3Rmlyc3QgPSBuZXdMYXN0ID0gbmV3Q2hpbGQ7XG5cdH1cblx0dmFyIHByZSA9IG5leHRDaGlsZCA/IG5leHRDaGlsZC5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnROb2RlLmxhc3RDaGlsZDtcblxuXHRuZXdGaXJzdC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG5cdG5ld0xhc3QubmV4dFNpYmxpbmcgPSBuZXh0Q2hpbGQ7XG5cdFxuXHRcblx0aWYocHJlKXtcblx0XHRwcmUubmV4dFNpYmxpbmcgPSBuZXdGaXJzdDtcblx0fWVsc2V7XG5cdFx0cGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV3Rmlyc3Q7XG5cdH1cblx0aWYobmV4dENoaWxkID09IG51bGwpe1xuXHRcdHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3TGFzdDtcblx0fWVsc2V7XG5cdFx0bmV4dENoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0xhc3Q7XG5cdH1cblx0ZG97XG5cdFx0bmV3Rmlyc3QucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG5cdH13aGlsZShuZXdGaXJzdCAhPT0gbmV3TGFzdCAmJiAobmV3Rmlyc3Q9IG5ld0ZpcnN0Lm5leHRTaWJsaW5nKSlcblx0X29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50fHxwYXJlbnROb2RlLHBhcmVudE5vZGUpO1xuXHQvL2NvbnNvbGUubG9nKHBhcmVudE5vZGUubGFzdENoaWxkLm5leHRTaWJsaW5nID09IG51bGwpXG5cdGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0bmV3Q2hpbGQuZmlyc3RDaGlsZCA9IG5ld0NoaWxkLmxhc3RDaGlsZCA9IG51bGw7XG5cdH1cblx0cmV0dXJuIG5ld0NoaWxkO1xufVxuZnVuY3Rpb24gX2FwcGVuZFNpbmdsZUNoaWxkKHBhcmVudE5vZGUsbmV3Q2hpbGQpe1xuXHR2YXIgY3AgPSBuZXdDaGlsZC5wYXJlbnROb2RlO1xuXHRpZihjcCl7XG5cdFx0dmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuXHRcdGNwLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTsvL3JlbW92ZSBhbmQgdXBkYXRlXG5cdFx0dmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuXHR9XG5cdHZhciBwcmUgPSBwYXJlbnROb2RlLmxhc3RDaGlsZDtcblx0bmV3Q2hpbGQucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG5cdG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHByZTtcblx0bmV3Q2hpbGQubmV4dFNpYmxpbmcgPSBudWxsO1xuXHRpZihwcmUpe1xuXHRcdHByZS5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuXHR9ZWxzZXtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcblx0fVxuXHRwYXJlbnROb2RlLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQscGFyZW50Tm9kZSxuZXdDaGlsZCk7XG5cdHJldHVybiBuZXdDaGlsZDtcblx0Ly9jb25zb2xlLmxvZyhcIl9fYWFcIixwYXJlbnROb2RlLmxhc3RDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKVxufVxuRG9jdW1lbnQucHJvdG90eXBlID0ge1xuXHQvL2ltcGxlbWVudGF0aW9uIDogbnVsbCxcblx0bm9kZU5hbWUgOiAgJyNkb2N1bWVudCcsXG5cdG5vZGVUeXBlIDogIERPQ1VNRU5UX05PREUsXG5cdC8qKlxuXHQgKiBUaGUgRG9jdW1lbnRUeXBlIG5vZGUgb2YgdGhlIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHR5cGUgRG9jdW1lbnRUeXBlXG5cdCAqL1xuXHRkb2N0eXBlIDogIG51bGwsXG5cdGRvY3VtZW50RWxlbWVudCA6ICBudWxsLFxuXHRfaW5jIDogMSxcblxuXHRpbnNlcnRCZWZvcmUgOiAgZnVuY3Rpb24obmV3Q2hpbGQsIHJlZkNoaWxkKXsvL3JhaXNlc1xuXHRcdGlmKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdFx0dmFyIGNoaWxkID0gbmV3Q2hpbGQuZmlyc3RDaGlsZDtcblx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0dGhpcy5pbnNlcnRCZWZvcmUoY2hpbGQscmVmQ2hpbGQpO1xuXHRcdFx0XHRjaGlsZCA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3Q2hpbGQ7XG5cdFx0fVxuXHRcdGlmKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG51bGwgJiYgbmV3Q2hpbGQubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKXtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9pbnNlcnRCZWZvcmUodGhpcyxuZXdDaGlsZCxyZWZDaGlsZCksKG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzKSxuZXdDaGlsZDtcblx0fSxcblx0cmVtb3ZlQ2hpbGQgOiAgZnVuY3Rpb24ob2xkQ2hpbGQpe1xuXHRcdGlmKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG9sZENoaWxkKXtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLG9sZENoaWxkKTtcblx0fSxcblx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0aW1wb3J0Tm9kZSA6IGZ1bmN0aW9uKGltcG9ydGVkTm9kZSxkZWVwKXtcblx0XHRyZXR1cm4gaW1wb3J0Tm9kZSh0aGlzLGltcG9ydGVkTm9kZSxkZWVwKTtcblx0fSxcblx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0Z2V0RWxlbWVudEJ5SWQgOlx0ZnVuY3Rpb24oaWQpe1xuXHRcdHZhciBydHYgPSBudWxsO1xuXHRcdF92aXNpdE5vZGUodGhpcy5kb2N1bWVudEVsZW1lbnQsZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRpZihub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSl7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpID09IGlkKXtcblx0XHRcdFx0XHRydHYgPSBub2RlO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gcnR2O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgYGdldEVsZW1lbnRzQnlDbGFzc05hbWVgIG1ldGhvZCBvZiBgRG9jdW1lbnRgIGludGVyZmFjZSByZXR1cm5zIGFuIGFycmF5LWxpa2Ugb2JqZWN0XG5cdCAqIG9mIGFsbCBjaGlsZCBlbGVtZW50cyB3aGljaCBoYXZlICoqYWxsKiogb2YgdGhlIGdpdmVuIGNsYXNzIG5hbWUocykuXG5cdCAqXG5cdCAqIFJldHVybnMgYW4gZW1wdHkgbGlzdCBpZiBgY2xhc3NlTmFtZXNgIGlzIGFuIGVtcHR5IHN0cmluZyBvciBvbmx5IGNvbnRhaW5zIEhUTUwgd2hpdGUgc3BhY2UgY2hhcmFjdGVycy5cblx0ICpcblx0ICpcblx0ICogV2FybmluZzogVGhpcyBpcyBhIGxpdmUgTGl2ZU5vZGVMaXN0LlxuXHQgKiBDaGFuZ2VzIGluIHRoZSBET00gd2lsbCByZWZsZWN0IGluIHRoZSBhcnJheSBhcyB0aGUgY2hhbmdlcyBvY2N1ci5cblx0ICogSWYgYW4gZWxlbWVudCBzZWxlY3RlZCBieSB0aGlzIGFycmF5IG5vIGxvbmdlciBxdWFsaWZpZXMgZm9yIHRoZSBzZWxlY3Rvcixcblx0ICogaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHJlbW92ZWQuIEJlIGF3YXJlIG9mIHRoaXMgZm9yIGl0ZXJhdGlvbiBwdXJwb3Nlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZXMgaXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjbGFzcyBuYW1lKHMpIHRvIG1hdGNoOyBtdWx0aXBsZSBjbGFzcyBuYW1lcyBhcmUgc2VwYXJhdGVkIGJ5IChBU0NJSS0pd2hpdGVzcGFjZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9nZXRFbGVtZW50c0J5Q2xhc3NOYW1lXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWdldGVsZW1lbnRzYnljbGFzc25hbWVcblx0ICovXG5cdGdldEVsZW1lbnRzQnlDbGFzc05hbWU6IGZ1bmN0aW9uKGNsYXNzTmFtZXMpIHtcblx0XHR2YXIgY2xhc3NOYW1lc1NldCA9IHRvT3JkZXJlZFNldChjbGFzc05hbWVzKVxuXHRcdHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsIGZ1bmN0aW9uKGJhc2UpIHtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0aWYgKGNsYXNzTmFtZXNTZXQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRfdmlzaXROb2RlKGJhc2UuZG9jdW1lbnRFbGVtZW50LCBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHRcdFx0aWYobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcblx0XHRcdFx0XHRcdHZhciBub2RlQ2xhc3NOYW1lcyA9IG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpXG5cdFx0XHRcdFx0XHQvLyBjYW4gYmUgbnVsbCBpZiB0aGUgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0XG5cdFx0XHRcdFx0XHRpZiAobm9kZUNsYXNzTmFtZXMpIHtcblx0XHRcdFx0XHRcdFx0Ly8gYmVmb3JlIHNwbGl0dGluZyBhbmQgaXRlcmF0aW5nIGp1c3QgY29tcGFyZSB0aGVtIGZvciB0aGUgbW9zdCBjb21tb24gY2FzZVxuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2hlcyA9IGNsYXNzTmFtZXMgPT09IG5vZGVDbGFzc05hbWVzO1xuXHRcdFx0XHRcdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbm9kZUNsYXNzTmFtZXNTZXQgPSB0b09yZGVyZWRTZXQobm9kZUNsYXNzTmFtZXMpXG5cdFx0XHRcdFx0XHRcdFx0bWF0Y2hlcyA9IGNsYXNzTmFtZXNTZXQuZXZlcnkoYXJyYXlJbmNsdWRlcyhub2RlQ2xhc3NOYW1lc1NldCkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0XHRcdFx0XHRcdGxzLnB1c2gobm9kZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxzO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8vZG9jdW1lbnQgZmFjdG9yeSBtZXRob2Q6XG5cdGNyZWF0ZUVsZW1lbnQgOlx0ZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS50YWdOYW1lID0gdGFnTmFtZTtcblx0XHRub2RlLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHRhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlRG9jdW1lbnRGcmFnbWVudCA6XHRmdW5jdGlvbigpe1xuXHRcdHZhciBub2RlID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVUZXh0Tm9kZSA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBUZXh0KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmFwcGVuZERhdGEoZGF0YSlcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQ29tbWVudCA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBDb21tZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmFwcGVuZERhdGEoZGF0YSlcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQ0RBVEFTZWN0aW9uIDpcdGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IENEQVRBU2VjdGlvbigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbiA6XHRmdW5jdGlvbih0YXJnZXQsZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLnRhZ05hbWUgPSBub2RlLnRhcmdldCA9IHRhcmdldDtcblx0XHRub2RlLm5vZGVWYWx1ZT0gbm9kZS5kYXRhID0gZGF0YTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlQXR0cmlidXRlIDpcdGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEF0dHIoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnRcdD0gdGhpcztcblx0XHRub2RlLm5hbWUgPSBuYW1lO1xuXHRcdG5vZGUubm9kZU5hbWVcdD0gbmFtZTtcblx0XHRub2RlLmxvY2FsTmFtZSA9IG5hbWU7XG5cdFx0bm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVFbnRpdHlSZWZlcmVuY2UgOlx0ZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRW50aXR5UmVmZXJlbmNlKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50XHQ9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZVx0PSBuYW1lO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRjcmVhdGVFbGVtZW50TlMgOlx0ZnVuY3Rpb24obmFtZXNwYWNlVVJJLHF1YWxpZmllZE5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcblx0XHR2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUudGFnTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG5cdFx0aWYocGwubGVuZ3RoID09IDIpe1xuXHRcdFx0bm9kZS5wcmVmaXggPSBwbFswXTtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2VsLnByZWZpeCA9IG51bGw7XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0fVxuXHRcdGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRjcmVhdGVBdHRyaWJ1dGVOUyA6XHRmdW5jdGlvbihuYW1lc3BhY2VVUkkscXVhbGlmaWVkTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuXHRcdHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lc3BhY2VVUkkgPSBuYW1lc3BhY2VVUkk7XG5cdFx0bm9kZS5zcGVjaWZpZWQgPSB0cnVlO1xuXHRcdGlmKHBsLmxlbmd0aCA9PSAyKXtcblx0XHRcdG5vZGUucHJlZml4ID0gcGxbMF07XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly9lbC5wcmVmaXggPSBudWxsO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxufTtcbl9leHRlbmRzKERvY3VtZW50LE5vZGUpO1xuXG5cbmZ1bmN0aW9uIEVsZW1lbnQoKSB7XG5cdHRoaXMuX25zTWFwID0ge307XG59O1xuRWxlbWVudC5wcm90b3R5cGUgPSB7XG5cdG5vZGVUeXBlIDogRUxFTUVOVF9OT0RFLFxuXHRoYXNBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpIT1udWxsO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcblx0XHRyZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24obmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0obmFtZSk7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHR9LFxuXHRyZW1vdmVBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKVxuXHRcdGF0dHIgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuXHR9LFxuXHRcblx0Ly9mb3VyIHJlYWwgb3BlYXJ0aW9uIG1ldGhvZFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0aWYobmV3Q2hpbGQubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIF9hcHBlbmRTaW5nbGVDaGlsZCh0aGlzLG5ld0NoaWxkKTtcblx0XHR9XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihuZXdBdHRyKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbShuZXdBdHRyKTtcblx0fSxcblx0c2V0QXR0cmlidXRlTm9kZU5TIDogZnVuY3Rpb24obmV3QXR0cil7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW1OUyhuZXdBdHRyKTtcblx0fSxcblx0cmVtb3ZlQXR0cmlidXRlTm9kZSA6IGZ1bmN0aW9uKG9sZEF0dHIpe1xuXHRcdC8vY29uc29sZS5sb2codGhpcyA9PSBvbGRBdHRyLm93bmVyRWxlbWVudClcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShvbGRBdHRyLm5vZGVOYW1lKTtcblx0fSxcblx0Ly9nZXQgcmVhbCBhdHRyaWJ1dGUgbmFtZSxhbmQgcmVtb3ZlIGl0IGJ5IHJlbW92ZUF0dHJpYnV0ZU5vZGVcblx0cmVtb3ZlQXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0dmFyIG9sZCA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0XHRvbGQgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZCk7XG5cdH0sXG5cdFxuXHRoYXNBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIT1udWxsO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0XHRyZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuXHR9LFxuXHRzZXRBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG5cdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOb2RlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG5cdH0sXG5cdFxuXHRnZXRFbGVtZW50c0J5VGFnTmFtZSA6IGZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsZnVuY3Rpb24oYmFzZSl7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdF92aXNpdE5vZGUoYmFzZSxmdW5jdGlvbihub2RlKXtcblx0XHRcdFx0aWYobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSAmJiAodGFnTmFtZSA9PT0gJyonIHx8IG5vZGUudGFnTmFtZSA9PSB0YWdOYW1lKSl7XG5cdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbHM7XG5cdFx0fSk7XG5cdH0sXG5cdGdldEVsZW1lbnRzQnlUYWdOYW1lTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcyxmdW5jdGlvbihiYXNlKXtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0X3Zpc2l0Tm9kZShiYXNlLGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSAmJiAobmFtZXNwYWNlVVJJID09PSAnKicgfHwgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSSkgJiYgKGxvY2FsTmFtZSA9PT0gJyonIHx8IG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSkpe1xuXHRcdFx0XHRcdGxzLnB1c2gobm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxzO1xuXHRcdFx0XG5cdFx0fSk7XG5cdH1cbn07XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUztcblxuXG5fZXh0ZW5kcyhFbGVtZW50LE5vZGUpO1xuZnVuY3Rpb24gQXR0cigpIHtcbn07XG5BdHRyLnByb3RvdHlwZS5ub2RlVHlwZSA9IEFUVFJJQlVURV9OT0RFO1xuX2V4dGVuZHMoQXR0cixOb2RlKTtcblxuXG5mdW5jdGlvbiBDaGFyYWN0ZXJEYXRhKCkge1xufTtcbkNoYXJhY3RlckRhdGEucHJvdG90eXBlID0ge1xuXHRkYXRhIDogJycsXG5cdHN1YnN0cmluZ0RhdGEgOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50KSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQrY291bnQpO1xuXHR9LFxuXHRhcHBlbmREYXRhOiBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0dGV4dCA9IHRoaXMuZGF0YSt0ZXh0O1xuXHRcdHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHR9LFxuXHRpbnNlcnREYXRhOiBmdW5jdGlvbihvZmZzZXQsdGV4dCkge1xuXHRcdHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LDAsdGV4dCk7XG5cdFxuXHR9LFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VbSElFUkFSQ0hZX1JFUVVFU1RfRVJSXSlcblx0fSxcblx0ZGVsZXRlRGF0YTogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCkge1xuXHRcdHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LGNvdW50LFwiXCIpO1xuXHR9LFxuXHRyZXBsYWNlRGF0YTogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCwgdGV4dCkge1xuXHRcdHZhciBzdGFydCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCxvZmZzZXQpO1xuXHRcdHZhciBlbmQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCtjb3VudCk7XG5cdFx0dGV4dCA9IHN0YXJ0ICsgdGV4dCArIGVuZDtcblx0XHR0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG5cdFx0dGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblx0fVxufVxuX2V4dGVuZHMoQ2hhcmFjdGVyRGF0YSxOb2RlKTtcbmZ1bmN0aW9uIFRleHQoKSB7XG59O1xuVGV4dC5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjdGV4dFwiLFxuXHRub2RlVHlwZSA6IFRFWFRfTk9ERSxcblx0c3BsaXRUZXh0IDogZnVuY3Rpb24ob2Zmc2V0KSB7XG5cdFx0dmFyIHRleHQgPSB0aGlzLmRhdGE7XG5cdFx0dmFyIG5ld1RleHQgPSB0ZXh0LnN1YnN0cmluZyhvZmZzZXQpO1xuXHRcdHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCBvZmZzZXQpO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHRcdHZhciBuZXdOb2RlID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1RleHQpO1xuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSl7XG5cdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHRoaXMubmV4dFNpYmxpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Tm9kZTtcblx0fVxufVxuX2V4dGVuZHMoVGV4dCxDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENvbW1lbnQoKSB7XG59O1xuQ29tbWVudC5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjY29tbWVudFwiLFxuXHRub2RlVHlwZSA6IENPTU1FTlRfTk9ERVxufVxuX2V4dGVuZHMoQ29tbWVudCxDaGFyYWN0ZXJEYXRhKTtcblxuZnVuY3Rpb24gQ0RBVEFTZWN0aW9uKCkge1xufTtcbkNEQVRBU2VjdGlvbi5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjY2RhdGEtc2VjdGlvblwiLFxuXHRub2RlVHlwZSA6IENEQVRBX1NFQ1RJT05fTk9ERVxufVxuX2V4dGVuZHMoQ0RBVEFTZWN0aW9uLENoYXJhY3RlckRhdGEpO1xuXG5cbmZ1bmN0aW9uIERvY3VtZW50VHlwZSgpIHtcbn07XG5Eb2N1bWVudFR5cGUucHJvdG90eXBlLm5vZGVUeXBlID0gRE9DVU1FTlRfVFlQRV9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRUeXBlLE5vZGUpO1xuXG5mdW5jdGlvbiBOb3RhdGlvbigpIHtcbn07XG5Ob3RhdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBOT1RBVElPTl9OT0RFO1xuX2V4dGVuZHMoTm90YXRpb24sTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eSgpIHtcbn07XG5FbnRpdHkucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX05PREU7XG5fZXh0ZW5kcyhFbnRpdHksTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eVJlZmVyZW5jZSgpIHtcbn07XG5FbnRpdHlSZWZlcmVuY2UucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX1JFRkVSRU5DRV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5UmVmZXJlbmNlLE5vZGUpO1xuXG5mdW5jdGlvbiBEb2N1bWVudEZyYWdtZW50KCkge1xufTtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVOYW1lID1cdFwiI2RvY3VtZW50LWZyYWdtZW50XCI7XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9XHRET0NVTUVOVF9GUkFHTUVOVF9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRGcmFnbWVudCxOb2RlKTtcblxuXG5mdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKSB7XG59XG5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFO1xuX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLE5vZGUpO1xuZnVuY3Rpb24gWE1MU2VyaWFsaXplcigpe31cblhNTFNlcmlhbGl6ZXIucHJvdG90eXBlLnNlcmlhbGl6ZVRvU3RyaW5nID0gZnVuY3Rpb24obm9kZSxpc0h0bWwsbm9kZUZpbHRlcil7XG5cdHJldHVybiBub2RlU2VyaWFsaXplVG9TdHJpbmcuY2FsbChub2RlLGlzSHRtbCxub2RlRmlsdGVyKTtcbn1cbk5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nO1xuZnVuY3Rpb24gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nKGlzSHRtbCxub2RlRmlsdGVyKXtcblx0dmFyIGJ1ZiA9IFtdO1xuXHR2YXIgcmVmTm9kZSA9IHRoaXMubm9kZVR5cGUgPT0gOSAmJiB0aGlzLmRvY3VtZW50RWxlbWVudCB8fCB0aGlzO1xuXHR2YXIgcHJlZml4ID0gcmVmTm9kZS5wcmVmaXg7XG5cdHZhciB1cmkgPSByZWZOb2RlLm5hbWVzcGFjZVVSSTtcblx0XG5cdGlmKHVyaSAmJiBwcmVmaXggPT0gbnVsbCl7XG5cdFx0Ly9jb25zb2xlLmxvZyhwcmVmaXgpXG5cdFx0dmFyIHByZWZpeCA9IHJlZk5vZGUubG9va3VwUHJlZml4KHVyaSk7XG5cdFx0aWYocHJlZml4ID09IG51bGwpe1xuXHRcdFx0Ly9pc0hUTUwgPSB0cnVlO1xuXHRcdFx0dmFyIHZpc2libGVOYW1lc3BhY2VzPVtcblx0XHRcdHtuYW1lc3BhY2U6dXJpLHByZWZpeDpudWxsfVxuXHRcdFx0Ly97bmFtZXNwYWNlOnVyaSxwcmVmaXg6Jyd9XG5cdFx0XHRdXG5cdFx0fVxuXHR9XG5cdHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMsYnVmLGlzSHRtbCxub2RlRmlsdGVyLHZpc2libGVOYW1lc3BhY2VzKTtcblx0Ly9jb25zb2xlLmxvZygnIyMjJyx0aGlzLm5vZGVUeXBlLHVyaSxwcmVmaXgsYnVmLmpvaW4oJycpKVxuXHRyZXR1cm4gYnVmLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpIHtcblx0dmFyIHByZWZpeCA9IG5vZGUucHJlZml4IHx8ICcnO1xuXHR2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG5cdC8vIEFjY29yZGluZyB0byBbTmFtZXNwYWNlcyBpbiBYTUwgMS4wXShodHRwczovL3d3dy53My5vcmcvVFIvUkVDLXhtbC1uYW1lcy8jbnMtdXNpbmcpICxcblx0Ly8gYW5kIG1vcmUgc3BlY2lmaWNhbGx5IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNuc2MtTm9QcmVmaXhVbmRlY2wgOlxuXHQvLyA+IEluIGEgbmFtZXNwYWNlIGRlY2xhcmF0aW9uIGZvciBhIHByZWZpeCBbLi4uXSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBNVVNUIE5PVCBiZSBlbXB0eS5cblx0Ly8gaW4gYSBzaW1pbGFyIG1hbm5lciBbTmFtZXNwYWNlcyBpbiBYTUwgMS4xXShodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzMTEvI25zLXVzaW5nKVxuXHQvLyBhbmQgbW9yZSBzcGVjaWZpY2FsbHkgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lczExLyNuc2MtTlNEZWNsYXJlZCA6XG5cdC8vID4gWy4uLl0gRnVydGhlcm1vcmUsIHRoZSBhdHRyaWJ1dGUgdmFsdWUgWy4uLl0gbXVzdCBub3QgYmUgYW4gZW1wdHkgc3RyaW5nLlxuXHQvLyBzbyBzZXJpYWxpemluZyBlbXB0eSBuYW1lc3BhY2UgdmFsdWUgbGlrZSB4bWxuczpkcz1cIlwiIHdvdWxkIHByb2R1Y2UgYW4gaW52YWxpZCBYTUwgZG9jdW1lbnQuXG5cdGlmICghdXJpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmIChwcmVmaXggPT09IFwieG1sXCIgJiYgdXJpID09PSBOQU1FU1BBQ0UuWE1MIHx8IHVyaSA9PT0gTkFNRVNQQUNFLlhNTE5TKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHR2YXIgaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aCBcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBucyA9IHZpc2libGVOYW1lc3BhY2VzW2ldO1xuXHRcdC8vIGdldCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0aWYgKG5zLnByZWZpeCA9PT0gcHJlZml4KSB7XG5cdFx0XHRyZXR1cm4gbnMubmFtZXNwYWNlICE9PSB1cmk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBXZWxsLWZvcm1lZCBjb25zdHJhaW50OiBObyA8IGluIEF0dHJpYnV0ZSBWYWx1ZXNcbiAqIFRoZSByZXBsYWNlbWVudCB0ZXh0IG9mIGFueSBlbnRpdHkgcmVmZXJyZWQgdG8gZGlyZWN0bHkgb3IgaW5kaXJlY3RseSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgbXVzdCBub3QgY29udGFpbiBhIDwuXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI0NsZWFuQXR0clZhbHNcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtQXR0VmFsdWVcbiAqL1xuZnVuY3Rpb24gYWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIHF1YWxpZmllZE5hbWUsIHZhbHVlKSB7XG5cdGJ1Zi5wdXNoKCcgJywgcXVhbGlmaWVkTmFtZSwgJz1cIicsIHZhbHVlLnJlcGxhY2UoL1s8JlwiXS9nLF94bWxFbmNvZGVyKSwgJ1wiJylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplVG9TdHJpbmcobm9kZSxidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpe1xuXHRpZiAoIXZpc2libGVOYW1lc3BhY2VzKSB7XG5cdFx0dmlzaWJsZU5hbWVzcGFjZXMgPSBbXTtcblx0fVxuXG5cdGlmKG5vZGVGaWx0ZXIpe1xuXHRcdG5vZGUgPSBub2RlRmlsdGVyKG5vZGUpO1xuXHRcdGlmKG5vZGUpe1xuXHRcdFx0aWYodHlwZW9mIG5vZGUgPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRidWYucHVzaChub2RlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvL2J1Zi5zb3J0LmFwcGx5KGF0dHJzLCBhdHRyaWJ1dGVTb3J0ZXIpO1xuXHR9XG5cblx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0dmFyIG5vZGVOYW1lID0gbm9kZS50YWdOYW1lO1xuXHRcdFxuXHRcdGlzSFRNTCA9IE5BTUVTUEFDRS5pc0hUTUwobm9kZS5uYW1lc3BhY2VVUkkpIHx8IGlzSFRNTFxuXG5cdFx0dmFyIHByZWZpeGVkTm9kZU5hbWUgPSBub2RlTmFtZVxuXHRcdGlmICghaXNIVE1MICYmICFub2RlLnByZWZpeCAmJiBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0dmFyIGRlZmF1bHROU1xuXHRcdFx0Ly8gbG9va3VwIGN1cnJlbnQgZGVmYXVsdCBucyBmcm9tIGB4bWxuc2AgYXR0cmlidXRlXG5cdFx0XHRmb3IgKHZhciBhaSA9IDA7IGFpIDwgYXR0cnMubGVuZ3RoOyBhaSsrKSB7XG5cdFx0XHRcdGlmIChhdHRycy5pdGVtKGFpKS5uYW1lID09PSAneG1sbnMnKSB7XG5cdFx0XHRcdFx0ZGVmYXVsdE5TID0gYXR0cnMuaXRlbShhaSkudmFsdWVcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWRlZmF1bHROUykge1xuXHRcdFx0XHQvLyBsb29rdXAgY3VycmVudCBkZWZhdWx0IG5zIGluIHZpc2libGVOYW1lc3BhY2VzXG5cdFx0XHRcdGZvciAodmFyIG5zaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aCAtIDE7IG5zaSA+PSAwOyBuc2ktLSkge1xuXHRcdFx0XHRcdHZhciBuYW1lc3BhY2UgPSB2aXNpYmxlTmFtZXNwYWNlc1tuc2ldXG5cdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5wcmVmaXggPT09ICcnICYmIG5hbWVzcGFjZS5uYW1lc3BhY2UgPT09IG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0TlMgPSBuYW1lc3BhY2UubmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRlZmF1bHROUyAhPT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0Zm9yICh2YXIgbnNpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIC0gMTsgbnNpID49IDA7IG5zaS0tKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IHZpc2libGVOYW1lc3BhY2VzW25zaV1cblx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLm5hbWVzcGFjZSA9PT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdGlmIChuYW1lc3BhY2UucHJlZml4KSB7XG5cdFx0XHRcdFx0XHRcdHByZWZpeGVkTm9kZU5hbWUgPSBuYW1lc3BhY2UucHJlZml4ICsgJzonICsgbm9kZU5hbWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YnVmLnB1c2goJzwnLCBwcmVmaXhlZE5vZGVOYW1lKTtcblxuXHRcdGZvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHQvLyBhZGQgbmFtZXNwYWNlcyBmb3IgYXR0cmlidXRlc1xuXHRcdFx0dmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuXHRcdFx0aWYgKGF0dHIucHJlZml4ID09ICd4bWxucycpIHtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogYXR0ci5sb2NhbE5hbWUsIG5hbWVzcGFjZTogYXR0ci52YWx1ZSB9KTtcblx0XHRcdH1lbHNlIGlmKGF0dHIubm9kZU5hbWUgPT0gJ3htbG5zJyl7XG5cdFx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6ICcnLCBuYW1lc3BhY2U6IGF0dHIudmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcblx0XHRcdGlmIChuZWVkTmFtZXNwYWNlRGVmaW5lKGF0dHIsaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcblx0XHRcdFx0dmFyIHByZWZpeCA9IGF0dHIucHJlZml4fHwnJztcblx0XHRcdFx0dmFyIHVyaSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuXHRcdFx0XHRhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1ZiwgcHJlZml4ID8gJ3htbG5zOicgKyBwcmVmaXggOiBcInhtbG5zXCIsIHVyaSk7XG5cdFx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6IHByZWZpeCwgbmFtZXNwYWNlOnVyaSB9KTtcblx0XHRcdH1cblx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGF0dHIsYnVmLGlzSFRNTCxub2RlRmlsdGVyLHZpc2libGVOYW1lc3BhY2VzKTtcblx0XHR9XG5cblx0XHQvLyBhZGQgbmFtZXNwYWNlIGZvciBjdXJyZW50IG5vZGVcdFx0XG5cdFx0aWYgKG5vZGVOYW1lID09PSBwcmVmaXhlZE5vZGVOYW1lICYmIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcblx0XHRcdHZhciBwcmVmaXggPSBub2RlLnByZWZpeHx8Jyc7XG5cdFx0XHR2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG5cdFx0XHRhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1ZiwgcHJlZml4ID8gJ3htbG5zOicgKyBwcmVmaXggOiBcInhtbG5zXCIsIHVyaSk7XG5cdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBwcmVmaXgsIG5hbWVzcGFjZTp1cmkgfSk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGNoaWxkIHx8IGlzSFRNTCAmJiAhL14oPzptZXRhfGxpbmt8aW1nfGJyfGhyfGlucHV0KSQvaS50ZXN0KG5vZGVOYW1lKSl7XG5cdFx0XHRidWYucHVzaCgnPicpO1xuXHRcdFx0Ly9pZiBpcyBjZGF0YSBjaGlsZCBub2RlXG5cdFx0XHRpZihpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpe1xuXHRcdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdFx0aWYoY2hpbGQuZGF0YSl7XG5cdFx0XHRcdFx0XHRidWYucHVzaChjaGlsZC5kYXRhKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc8LycscHJlZml4ZWROb2RlTmFtZSwnPicpO1xuXHRcdH1lbHNle1xuXHRcdFx0YnVmLnB1c2goJy8+Jyk7XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhZGRlZCB2aXNpYmxlIG5hbWVzcGFjZXNcblx0XHQvL3Zpc2libGVOYW1lc3BhY2VzLmxlbmd0aCA9IHN0YXJ0VmlzaWJsZU5hbWVzcGFjZXM7XG5cdFx0cmV0dXJuO1xuXHRjYXNlIERPQ1VNRU5UX05PREU6XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRyZXR1cm4gYWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIG5vZGUubmFtZSwgbm9kZS52YWx1ZSk7XG5cdGNhc2UgVEVYVF9OT0RFOlxuXHRcdC8qKlxuXHRcdCAqIFRoZSBhbXBlcnNhbmQgY2hhcmFjdGVyICgmKSBhbmQgdGhlIGxlZnQgYW5nbGUgYnJhY2tldCAoPCkgbXVzdCBub3QgYXBwZWFyIGluIHRoZWlyIGxpdGVyYWwgZm9ybSxcblx0XHQgKiBleGNlcHQgd2hlbiB1c2VkIGFzIG1hcmt1cCBkZWxpbWl0ZXJzLCBvciB3aXRoaW4gYSBjb21tZW50LCBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIG9yIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKiBJZiB0aGV5IGFyZSBuZWVkZWQgZWxzZXdoZXJlLCB0aGV5IG11c3QgYmUgZXNjYXBlZCB1c2luZyBlaXRoZXIgbnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBvciB0aGUgc3RyaW5nc1xuXHRcdCAqIGAmYW1wO2AgYW5kIGAmbHQ7YCByZXNwZWN0aXZlbHkuXG5cdFx0ICogVGhlIHJpZ2h0IGFuZ2xlIGJyYWNrZXQgKD4pIG1heSBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgc3RyaW5nIFwiICZndDsgXCIsIGFuZCBtdXN0LCBmb3IgY29tcGF0aWJpbGl0eSxcblx0XHQgKiBiZSBlc2NhcGVkIHVzaW5nIGVpdGhlciBgJmd0O2Agb3IgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlIHdoZW4gaXQgYXBwZWFycyBpbiB0aGUgc3RyaW5nIGBdXT5gIGluIGNvbnRlbnQsXG5cdFx0ICogd2hlbiB0aGF0IHN0cmluZyBpcyBub3QgbWFya2luZyB0aGUgZW5kIG9mIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKlxuXHRcdCAqIEluIHRoZSBjb250ZW50IG9mIGVsZW1lbnRzLCBjaGFyYWN0ZXIgZGF0YSBpcyBhbnkgc3RyaW5nIG9mIGNoYXJhY3RlcnNcblx0XHQgKiB3aGljaCBkb2VzIG5vdCBjb250YWluIHRoZSBzdGFydC1kZWxpbWl0ZXIgb2YgYW55IG1hcmt1cFxuXHRcdCAqIGFuZCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBDREFUQS1zZWN0aW9uLWNsb3NlIGRlbGltaXRlciwgYF1dPmAuXG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULUNoYXJEYXRhXG5cdFx0ICovXG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKG5vZGUuZGF0YVxuXHRcdFx0LnJlcGxhY2UoL1s8Jl0vZyxfeG1sRW5jb2Rlcilcblx0XHRcdC5yZXBsYWNlKC9dXT4vZywgJ11dJmd0OycpXG5cdFx0KTtcblx0Y2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCAnPCFbQ0RBVEFbJyxub2RlLmRhdGEsJ11dPicpO1xuXHRjYXNlIENPTU1FTlRfTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goIFwiPCEtLVwiLG5vZGUuZGF0YSxcIi0tPlwiKTtcblx0Y2FzZSBET0NVTUVOVF9UWVBFX05PREU6XG5cdFx0dmFyIHB1YmlkID0gbm9kZS5wdWJsaWNJZDtcblx0XHR2YXIgc3lzaWQgPSBub2RlLnN5c3RlbUlkO1xuXHRcdGJ1Zi5wdXNoKCc8IURPQ1RZUEUgJyxub2RlLm5hbWUpO1xuXHRcdGlmKHB1YmlkKXtcblx0XHRcdGJ1Zi5wdXNoKCcgUFVCTElDICcsIHB1YmlkKTtcblx0XHRcdGlmIChzeXNpZCAmJiBzeXNpZCE9Jy4nKSB7XG5cdFx0XHRcdGJ1Zi5wdXNoKCcgJywgc3lzaWQpO1xuXHRcdFx0fVxuXHRcdFx0YnVmLnB1c2goJz4nKTtcblx0XHR9ZWxzZSBpZihzeXNpZCAmJiBzeXNpZCE9Jy4nKXtcblx0XHRcdGJ1Zi5wdXNoKCcgU1lTVEVNICcsIHN5c2lkLCAnPicpO1xuXHRcdH1lbHNle1xuXHRcdFx0dmFyIHN1YiA9IG5vZGUuaW50ZXJuYWxTdWJzZXQ7XG5cdFx0XHRpZihzdWIpe1xuXHRcdFx0XHRidWYucHVzaChcIiBbXCIsc3ViLFwiXVwiKTtcblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKFwiPlwiKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHRjYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goIFwiPD9cIixub2RlLnRhcmdldCxcIiBcIixub2RlLmRhdGEsXCI/PlwiKTtcblx0Y2FzZSBFTlRJVFlfUkVGRVJFTkNFX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCAnJicsbm9kZS5ub2RlTmFtZSwnOycpO1xuXHQvL2Nhc2UgRU5USVRZX05PREU6XG5cdC8vY2FzZSBOT1RBVElPTl9OT0RFOlxuXHRkZWZhdWx0OlxuXHRcdGJ1Zi5wdXNoKCc/Pycsbm9kZS5ub2RlTmFtZSk7XG5cdH1cbn1cbmZ1bmN0aW9uIGltcG9ydE5vZGUoZG9jLG5vZGUsZGVlcCl7XG5cdHZhciBub2RlMjtcblx0c3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG5cdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuXHRcdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdFx0Ly92YXIgYXR0cnMgPSBub2RlMi5hdHRyaWJ1dGVzO1xuXHRcdC8vdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0XHQvL2Zvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHQvL25vZGUyLnNldEF0dHJpYnV0ZU5vZGVOUyhpbXBvcnROb2RlKGRvYyxhdHRycy5pdGVtKGkpLGRlZXApKTtcblx0XHQvL31cblx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdGJyZWFrO1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdGRlZXAgPSB0cnVlO1xuXHRcdGJyZWFrO1xuXHQvL2Nhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuXHQvL2Nhc2UgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOlxuXHQvLy8vY2FzZSBURVhUX05PREU6XG5cdC8vY2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG5cdC8vY2FzZSBDT01NRU5UX05PREU6XG5cdC8vXHRkZWVwID0gZmFsc2U7XG5cdC8vXHRicmVhaztcblx0Ly9jYXNlIERPQ1VNRU5UX05PREU6XG5cdC8vY2FzZSBET0NVTUVOVF9UWVBFX05PREU6XG5cdC8vY2Fubm90IGJlIGltcG9ydGVkLlxuXHQvL2Nhc2UgRU5USVRZX05PREU6XG5cdC8vY2FzZSBOT1RBVElPTl9OT0RF77yaXG5cdC8vY2FuIG5vdCBoaXQgaW4gbGV2ZWwzXG5cdC8vZGVmYXVsdDp0aHJvdyBlO1xuXHR9XG5cdGlmKCFub2RlMil7XG5cdFx0bm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7Ly9mYWxzZVxuXHR9XG5cdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdG5vZGUyLnBhcmVudE5vZGUgPSBudWxsO1xuXHRpZihkZWVwKXtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0bm9kZTIuYXBwZW5kQ2hpbGQoaW1wb3J0Tm9kZShkb2MsY2hpbGQsZGVlcCkpO1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5vZGUyO1xufVxuLy9cbi8vdmFyIF9yZWxhdGlvbk1hcCA9IHtmaXJzdENoaWxkOjEsbGFzdENoaWxkOjEscHJldmlvdXNTaWJsaW5nOjEsbmV4dFNpYmxpbmc6MSxcbi8vXHRcdFx0XHRcdGF0dHJpYnV0ZXM6MSxjaGlsZE5vZGVzOjEscGFyZW50Tm9kZToxLGRvY3VtZW50RWxlbWVudDoxLGRvY3R5cGUsfTtcbmZ1bmN0aW9uIGNsb25lTm9kZShkb2Msbm9kZSxkZWVwKXtcblx0dmFyIG5vZGUyID0gbmV3IG5vZGUuY29uc3RydWN0b3IoKTtcblx0Zm9yKHZhciBuIGluIG5vZGUpe1xuXHRcdHZhciB2ID0gbm9kZVtuXTtcblx0XHRpZih0eXBlb2YgdiAhPSAnb2JqZWN0JyApe1xuXHRcdFx0aWYodiAhPSBub2RlMltuXSl7XG5cdFx0XHRcdG5vZGUyW25dID0gdjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYobm9kZS5jaGlsZE5vZGVzKXtcblx0XHRub2RlMi5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdH1cblx0bm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcblx0c3dpdGNoIChub2RlMi5ub2RlVHlwZSkge1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzO1xuXHRcdHZhciBhdHRyczJcdD0gbm9kZTIuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcblx0XHR2YXIgbGVuID0gYXR0cnMubGVuZ3RoXG5cdFx0YXR0cnMyLl9vd25lckVsZW1lbnQgPSBub2RlMjtcblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0bm9kZTIuc2V0QXR0cmlidXRlTm9kZShjbG9uZU5vZGUoZG9jLGF0dHJzLml0ZW0oaSksdHJ1ZSkpO1xuXHRcdH1cblx0XHRicmVhazs7XG5cdGNhc2UgQVRUUklCVVRFX05PREU6XG5cdFx0ZGVlcCA9IHRydWU7XG5cdH1cblx0aWYoZGVlcCl7XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdG5vZGUyLmFwcGVuZENoaWxkKGNsb25lTm9kZShkb2MsY2hpbGQsZGVlcCkpO1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5vZGUyO1xufVxuXG5mdW5jdGlvbiBfX3NldF9fKG9iamVjdCxrZXksdmFsdWUpe1xuXHRvYmplY3Rba2V5XSA9IHZhbHVlXG59XG4vL2RvIGR5bmFtaWNcbnRyeXtcblx0aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KXtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoTGl2ZU5vZGVMaXN0LnByb3RvdHlwZSwnbGVuZ3RoJyx7XG5cdFx0XHRnZXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGxlbmd0aDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwndGV4dENvbnRlbnQnLHtcblx0XHRcdGdldDpmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXR1cm4gZ2V0VGV4dENvbnRlbnQodGhpcyk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6ZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHN3aXRjaCh0aGlzLm5vZGVUeXBlKXtcblx0XHRcdFx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0XHRcdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRcdFx0XHR3aGlsZSh0aGlzLmZpcnN0Q2hpbGQpe1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihkYXRhIHx8IFN0cmluZyhkYXRhKSl7XG5cdFx0XHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gZGF0YTtcblx0XHRcdFx0XHR0aGlzLm5vZGVWYWx1ZSA9IGRhdGE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdFxuXHRcdGZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpe1xuXHRcdFx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRcdFx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdHZhciBidWYgPSBbXTtcblx0XHRcdFx0bm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHRcdFx0d2hpbGUobm9kZSl7XG5cdFx0XHRcdFx0aWYobm9kZS5ub2RlVHlwZSE9PTcgJiYgbm9kZS5ub2RlVHlwZSAhPT04KXtcblx0XHRcdFx0XHRcdGJ1Zi5wdXNoKGdldFRleHRDb250ZW50KG5vZGUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfX3NldF9fID0gZnVuY3Rpb24ob2JqZWN0LGtleSx2YWx1ZSl7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHZhbHVlKVxuXHRcdFx0b2JqZWN0WyckJCcra2V5XSA9IHZhbHVlXG5cdFx0fVxuXHR9XG59Y2F0Y2goZSl7Ly9pZThcbn1cblxuLy9pZih0eXBlb2YgcmVxdWlyZSA9PSAnZnVuY3Rpb24nKXtcblx0ZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSBEb2N1bWVudFR5cGU7XG5cdGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gRE9NRXhjZXB0aW9uO1xuXHRleHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb247XG5cdGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5cdGV4cG9ydHMuTm9kZSA9IE5vZGU7XG5cdGV4cG9ydHMuTm9kZUxpc3QgPSBOb2RlTGlzdDtcblx0ZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcbi8vfVxuIiwidmFyIGZyZWV6ZSA9IHJlcXVpcmUoJy4vY29udmVudGlvbnMnKS5mcmVlemU7XG5cbi8qKlxuICogVGhlIGVudGl0aWVzIHRoYXQgYXJlIHByZWRlZmluZWQgaW4gZXZlcnkgWE1MIGRvY3VtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDYvUkVDLXhtbDExLTIwMDYwODE2LyNzZWMtcHJlZGVmaW5lZC1lbnQgVzNDIFhNTCAxLjFcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLXhtbC0yMDA4MTEyNi8jc2VjLXByZWRlZmluZWQtZW50IFczQyBYTUwgMS4wXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNQcmVkZWZpbmVkX2VudGl0aWVzX2luX1hNTCBXaWtpcGVkaWFcbiAqL1xuZXhwb3J0cy5YTUxfRU5USVRJRVMgPSBmcmVlemUoe2FtcDonJicsIGFwb3M6XCInXCIsIGd0Oic+JywgbHQ6JzwnLCBxdW90OidcIid9KVxuXG4vKipcbiAqIEEgbWFwIG9mIGN1cnJlbnRseSAyNDEgZW50aXRpZXMgdGhhdCBhcmUgZGV0ZWN0ZWQgaW4gYW4gSFRNTCBkb2N1bWVudC5cbiAqIFRoZXkgY29udGFpbiBhbGwgZW50cmllcyBmcm9tIGBYTUxfRU5USVRJRVNgLlxuICpcbiAqIEBzZWUgWE1MX0VOVElUSUVTXG4gKiBAc2VlIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmdcbiAqIEBzZWUgRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlLmNyZWF0ZUhUTUxEb2N1bWVudFxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNuYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlcyBXSEFUV0cgSFRNTCg1KSBTcGVjXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtZW50aXR5LW5hbWVzLyBXM0MgWE1MIEVudGl0eSBOYW1lc1xuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQvc2dtbC9lbnRpdGllcy5odG1sIFczQyBIVE1MNC9TR01MXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNDaGFyYWN0ZXJfZW50aXR5X3JlZmVyZW5jZXNfaW5fSFRNTCBXaWtpcGVkaWEgKEhUTUwpXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNFbnRpdGllc19yZXByZXNlbnRpbmdfc3BlY2lhbF9jaGFyYWN0ZXJzX2luX1hIVE1MIFdpa3BlZGlhIChYSFRNTClcbiAqL1xuZXhwb3J0cy5IVE1MX0VOVElUSUVTID0gZnJlZXplKHtcbiAgICAgICBsdDogJzwnLFxuICAgICAgIGd0OiAnPicsXG4gICAgICAgYW1wOiAnJicsXG4gICAgICAgcXVvdDogJ1wiJyxcbiAgICAgICBhcG9zOiBcIidcIixcbiAgICAgICBBZ3JhdmU6IFwiw4BcIixcbiAgICAgICBBYWN1dGU6IFwiw4FcIixcbiAgICAgICBBY2lyYzogXCLDglwiLFxuICAgICAgIEF0aWxkZTogXCLDg1wiLFxuICAgICAgIEF1bWw6IFwiw4RcIixcbiAgICAgICBBcmluZzogXCLDhVwiLFxuICAgICAgIEFFbGlnOiBcIsOGXCIsXG4gICAgICAgQ2NlZGlsOiBcIsOHXCIsXG4gICAgICAgRWdyYXZlOiBcIsOIXCIsXG4gICAgICAgRWFjdXRlOiBcIsOJXCIsXG4gICAgICAgRWNpcmM6IFwiw4pcIixcbiAgICAgICBFdW1sOiBcIsOLXCIsXG4gICAgICAgSWdyYXZlOiBcIsOMXCIsXG4gICAgICAgSWFjdXRlOiBcIsONXCIsXG4gICAgICAgSWNpcmM6IFwiw45cIixcbiAgICAgICBJdW1sOiBcIsOPXCIsXG4gICAgICAgRVRIOiBcIsOQXCIsXG4gICAgICAgTnRpbGRlOiBcIsORXCIsXG4gICAgICAgT2dyYXZlOiBcIsOSXCIsXG4gICAgICAgT2FjdXRlOiBcIsOTXCIsXG4gICAgICAgT2NpcmM6IFwiw5RcIixcbiAgICAgICBPdGlsZGU6IFwiw5VcIixcbiAgICAgICBPdW1sOiBcIsOWXCIsXG4gICAgICAgT3NsYXNoOiBcIsOYXCIsXG4gICAgICAgVWdyYXZlOiBcIsOZXCIsXG4gICAgICAgVWFjdXRlOiBcIsOaXCIsXG4gICAgICAgVWNpcmM6IFwiw5tcIixcbiAgICAgICBVdW1sOiBcIsOcXCIsXG4gICAgICAgWWFjdXRlOiBcIsOdXCIsXG4gICAgICAgVEhPUk46IFwiw55cIixcbiAgICAgICBzemxpZzogXCLDn1wiLFxuICAgICAgIGFncmF2ZTogXCLDoFwiLFxuICAgICAgIGFhY3V0ZTogXCLDoVwiLFxuICAgICAgIGFjaXJjOiBcIsOiXCIsXG4gICAgICAgYXRpbGRlOiBcIsOjXCIsXG4gICAgICAgYXVtbDogXCLDpFwiLFxuICAgICAgIGFyaW5nOiBcIsOlXCIsXG4gICAgICAgYWVsaWc6IFwiw6ZcIixcbiAgICAgICBjY2VkaWw6IFwiw6dcIixcbiAgICAgICBlZ3JhdmU6IFwiw6hcIixcbiAgICAgICBlYWN1dGU6IFwiw6lcIixcbiAgICAgICBlY2lyYzogXCLDqlwiLFxuICAgICAgIGV1bWw6IFwiw6tcIixcbiAgICAgICBpZ3JhdmU6IFwiw6xcIixcbiAgICAgICBpYWN1dGU6IFwiw61cIixcbiAgICAgICBpY2lyYzogXCLDrlwiLFxuICAgICAgIGl1bWw6IFwiw69cIixcbiAgICAgICBldGg6IFwiw7BcIixcbiAgICAgICBudGlsZGU6IFwiw7FcIixcbiAgICAgICBvZ3JhdmU6IFwiw7JcIixcbiAgICAgICBvYWN1dGU6IFwiw7NcIixcbiAgICAgICBvY2lyYzogXCLDtFwiLFxuICAgICAgIG90aWxkZTogXCLDtVwiLFxuICAgICAgIG91bWw6IFwiw7ZcIixcbiAgICAgICBvc2xhc2g6IFwiw7hcIixcbiAgICAgICB1Z3JhdmU6IFwiw7lcIixcbiAgICAgICB1YWN1dGU6IFwiw7pcIixcbiAgICAgICB1Y2lyYzogXCLDu1wiLFxuICAgICAgIHV1bWw6IFwiw7xcIixcbiAgICAgICB5YWN1dGU6IFwiw71cIixcbiAgICAgICB0aG9ybjogXCLDvlwiLFxuICAgICAgIHl1bWw6IFwiw79cIixcbiAgICAgICBuYnNwOiBcIlxcdTAwYTBcIixcbiAgICAgICBpZXhjbDogXCLCoVwiLFxuICAgICAgIGNlbnQ6IFwiwqJcIixcbiAgICAgICBwb3VuZDogXCLCo1wiLFxuICAgICAgIGN1cnJlbjogXCLCpFwiLFxuICAgICAgIHllbjogXCLCpVwiLFxuICAgICAgIGJydmJhcjogXCLCplwiLFxuICAgICAgIHNlY3Q6IFwiwqdcIixcbiAgICAgICB1bWw6IFwiwqhcIixcbiAgICAgICBjb3B5OiBcIsKpXCIsXG4gICAgICAgb3JkZjogXCLCqlwiLFxuICAgICAgIGxhcXVvOiBcIsKrXCIsXG4gICAgICAgbm90OiBcIsKsXCIsXG4gICAgICAgc2h5OiBcIsKtwq1cIixcbiAgICAgICByZWc6IFwiwq5cIixcbiAgICAgICBtYWNyOiBcIsKvXCIsXG4gICAgICAgZGVnOiBcIsKwXCIsXG4gICAgICAgcGx1c21uOiBcIsKxXCIsXG4gICAgICAgc3VwMjogXCLCslwiLFxuICAgICAgIHN1cDM6IFwiwrNcIixcbiAgICAgICBhY3V0ZTogXCLCtFwiLFxuICAgICAgIG1pY3JvOiBcIsK1XCIsXG4gICAgICAgcGFyYTogXCLCtlwiLFxuICAgICAgIG1pZGRvdDogXCLCt1wiLFxuICAgICAgIGNlZGlsOiBcIsK4XCIsXG4gICAgICAgc3VwMTogXCLCuVwiLFxuICAgICAgIG9yZG06IFwiwrpcIixcbiAgICAgICByYXF1bzogXCLCu1wiLFxuICAgICAgIGZyYWMxNDogXCLCvFwiLFxuICAgICAgIGZyYWMxMjogXCLCvVwiLFxuICAgICAgIGZyYWMzNDogXCLCvlwiLFxuICAgICAgIGlxdWVzdDogXCLCv1wiLFxuICAgICAgIHRpbWVzOiBcIsOXXCIsXG4gICAgICAgZGl2aWRlOiBcIsO3XCIsXG4gICAgICAgZm9yYWxsOiBcIuKIgFwiLFxuICAgICAgIHBhcnQ6IFwi4oiCXCIsXG4gICAgICAgZXhpc3Q6IFwi4oiDXCIsXG4gICAgICAgZW1wdHk6IFwi4oiFXCIsXG4gICAgICAgbmFibGE6IFwi4oiHXCIsXG4gICAgICAgaXNpbjogXCLiiIhcIixcbiAgICAgICBub3RpbjogXCLiiIlcIixcbiAgICAgICBuaTogXCLiiItcIixcbiAgICAgICBwcm9kOiBcIuKIj1wiLFxuICAgICAgIHN1bTogXCLiiJFcIixcbiAgICAgICBtaW51czogXCLiiJJcIixcbiAgICAgICBsb3dhc3Q6IFwi4oiXXCIsXG4gICAgICAgcmFkaWM6IFwi4oiaXCIsXG4gICAgICAgcHJvcDogXCLiiJ1cIixcbiAgICAgICBpbmZpbjogXCLiiJ5cIixcbiAgICAgICBhbmc6IFwi4oigXCIsXG4gICAgICAgYW5kOiBcIuKIp1wiLFxuICAgICAgIG9yOiBcIuKIqFwiLFxuICAgICAgIGNhcDogXCLiiKlcIixcbiAgICAgICBjdXA6IFwi4oiqXCIsXG4gICAgICAgJ2ludCc6IFwi4oirXCIsXG4gICAgICAgdGhlcmU0OiBcIuKItFwiLFxuICAgICAgIHNpbTogXCLiiLxcIixcbiAgICAgICBjb25nOiBcIuKJhVwiLFxuICAgICAgIGFzeW1wOiBcIuKJiFwiLFxuICAgICAgIG5lOiBcIuKJoFwiLFxuICAgICAgIGVxdWl2OiBcIuKJoVwiLFxuICAgICAgIGxlOiBcIuKJpFwiLFxuICAgICAgIGdlOiBcIuKJpVwiLFxuICAgICAgIHN1YjogXCLiioJcIixcbiAgICAgICBzdXA6IFwi4oqDXCIsXG4gICAgICAgbnN1YjogXCLiioRcIixcbiAgICAgICBzdWJlOiBcIuKKhlwiLFxuICAgICAgIHN1cGU6IFwi4oqHXCIsXG4gICAgICAgb3BsdXM6IFwi4oqVXCIsXG4gICAgICAgb3RpbWVzOiBcIuKKl1wiLFxuICAgICAgIHBlcnA6IFwi4oqlXCIsXG4gICAgICAgc2RvdDogXCLii4VcIixcbiAgICAgICBBbHBoYTogXCLOkVwiLFxuICAgICAgIEJldGE6IFwizpJcIixcbiAgICAgICBHYW1tYTogXCLOk1wiLFxuICAgICAgIERlbHRhOiBcIs6UXCIsXG4gICAgICAgRXBzaWxvbjogXCLOlVwiLFxuICAgICAgIFpldGE6IFwizpZcIixcbiAgICAgICBFdGE6IFwizpdcIixcbiAgICAgICBUaGV0YTogXCLOmFwiLFxuICAgICAgIElvdGE6IFwizplcIixcbiAgICAgICBLYXBwYTogXCLOmlwiLFxuICAgICAgIExhbWJkYTogXCLOm1wiLFxuICAgICAgIE11OiBcIs6cXCIsXG4gICAgICAgTnU6IFwizp1cIixcbiAgICAgICBYaTogXCLOnlwiLFxuICAgICAgIE9taWNyb246IFwizp9cIixcbiAgICAgICBQaTogXCLOoFwiLFxuICAgICAgIFJobzogXCLOoVwiLFxuICAgICAgIFNpZ21hOiBcIs6jXCIsXG4gICAgICAgVGF1OiBcIs6kXCIsXG4gICAgICAgVXBzaWxvbjogXCLOpVwiLFxuICAgICAgIFBoaTogXCLOplwiLFxuICAgICAgIENoaTogXCLOp1wiLFxuICAgICAgIFBzaTogXCLOqFwiLFxuICAgICAgIE9tZWdhOiBcIs6pXCIsXG4gICAgICAgYWxwaGE6IFwizrFcIixcbiAgICAgICBiZXRhOiBcIs6yXCIsXG4gICAgICAgZ2FtbWE6IFwizrNcIixcbiAgICAgICBkZWx0YTogXCLOtFwiLFxuICAgICAgIGVwc2lsb246IFwizrVcIixcbiAgICAgICB6ZXRhOiBcIs62XCIsXG4gICAgICAgZXRhOiBcIs63XCIsXG4gICAgICAgdGhldGE6IFwizrhcIixcbiAgICAgICBpb3RhOiBcIs65XCIsXG4gICAgICAga2FwcGE6IFwizrpcIixcbiAgICAgICBsYW1iZGE6IFwizrtcIixcbiAgICAgICBtdTogXCLOvFwiLFxuICAgICAgIG51OiBcIs69XCIsXG4gICAgICAgeGk6IFwizr5cIixcbiAgICAgICBvbWljcm9uOiBcIs6/XCIsXG4gICAgICAgcGk6IFwiz4BcIixcbiAgICAgICByaG86IFwiz4FcIixcbiAgICAgICBzaWdtYWY6IFwiz4JcIixcbiAgICAgICBzaWdtYTogXCLPg1wiLFxuICAgICAgIHRhdTogXCLPhFwiLFxuICAgICAgIHVwc2lsb246IFwiz4VcIixcbiAgICAgICBwaGk6IFwiz4ZcIixcbiAgICAgICBjaGk6IFwiz4dcIixcbiAgICAgICBwc2k6IFwiz4hcIixcbiAgICAgICBvbWVnYTogXCLPiVwiLFxuICAgICAgIHRoZXRhc3ltOiBcIs+RXCIsXG4gICAgICAgdXBzaWg6IFwiz5JcIixcbiAgICAgICBwaXY6IFwiz5ZcIixcbiAgICAgICBPRWxpZzogXCLFklwiLFxuICAgICAgIG9lbGlnOiBcIsWTXCIsXG4gICAgICAgU2Nhcm9uOiBcIsWgXCIsXG4gICAgICAgc2Nhcm9uOiBcIsWhXCIsXG4gICAgICAgWXVtbDogXCLFuFwiLFxuICAgICAgIGZub2Y6IFwixpJcIixcbiAgICAgICBjaXJjOiBcIsuGXCIsXG4gICAgICAgdGlsZGU6IFwiy5xcIixcbiAgICAgICBlbnNwOiBcIuKAglwiLFxuICAgICAgIGVtc3A6IFwi4oCDXCIsXG4gICAgICAgdGhpbnNwOiBcIuKAiVwiLFxuICAgICAgIHp3bmo6IFwi4oCMXCIsXG4gICAgICAgendqOiBcIuKAjVwiLFxuICAgICAgIGxybTogXCLigI5cIixcbiAgICAgICBybG06IFwi4oCPXCIsXG4gICAgICAgbmRhc2g6IFwi4oCTXCIsXG4gICAgICAgbWRhc2g6IFwi4oCUXCIsXG4gICAgICAgbHNxdW86IFwi4oCYXCIsXG4gICAgICAgcnNxdW86IFwi4oCZXCIsXG4gICAgICAgc2JxdW86IFwi4oCaXCIsXG4gICAgICAgbGRxdW86IFwi4oCcXCIsXG4gICAgICAgcmRxdW86IFwi4oCdXCIsXG4gICAgICAgYmRxdW86IFwi4oCeXCIsXG4gICAgICAgZGFnZ2VyOiBcIuKAoFwiLFxuICAgICAgIERhZ2dlcjogXCLigKFcIixcbiAgICAgICBidWxsOiBcIuKAolwiLFxuICAgICAgIGhlbGxpcDogXCLigKZcIixcbiAgICAgICBwZXJtaWw6IFwi4oCwXCIsXG4gICAgICAgcHJpbWU6IFwi4oCyXCIsXG4gICAgICAgUHJpbWU6IFwi4oCzXCIsXG4gICAgICAgbHNhcXVvOiBcIuKAuVwiLFxuICAgICAgIHJzYXF1bzogXCLigLpcIixcbiAgICAgICBvbGluZTogXCLigL5cIixcbiAgICAgICBldXJvOiBcIuKCrFwiLFxuICAgICAgIHRyYWRlOiBcIuKEolwiLFxuICAgICAgIGxhcnI6IFwi4oaQXCIsXG4gICAgICAgdWFycjogXCLihpFcIixcbiAgICAgICByYXJyOiBcIuKGklwiLFxuICAgICAgIGRhcnI6IFwi4oaTXCIsXG4gICAgICAgaGFycjogXCLihpRcIixcbiAgICAgICBjcmFycjogXCLihrVcIixcbiAgICAgICBsY2VpbDogXCLijIhcIixcbiAgICAgICByY2VpbDogXCLijIlcIixcbiAgICAgICBsZmxvb3I6IFwi4oyKXCIsXG4gICAgICAgcmZsb29yOiBcIuKMi1wiLFxuICAgICAgIGxvejogXCLil4pcIixcbiAgICAgICBzcGFkZXM6IFwi4pmgXCIsXG4gICAgICAgY2x1YnM6IFwi4pmjXCIsXG4gICAgICAgaGVhcnRzOiBcIuKZpVwiLFxuICAgICAgIGRpYW1zOiBcIuKZplwiXG59KTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgYEhUTUxfRU5USVRJRVNgIGluc3RlYWRcbiAqIEBzZWUgSFRNTF9FTlRJVElFU1xuICovXG5leHBvcnRzLmVudGl0eU1hcCA9IGV4cG9ydHMuSFRNTF9FTlRJVElFU1xuIiwidmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJylcbmV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSBkb20uRE9NSW1wbGVtZW50YXRpb25cbmV4cG9ydHMuWE1MU2VyaWFsaXplciA9IGRvbS5YTUxTZXJpYWxpemVyXG5leHBvcnRzLkRPTVBhcnNlciA9IHJlcXVpcmUoJy4vZG9tLXBhcnNlcicpLkRPTVBhcnNlclxuIiwidmFyIE5BTUVTUEFDRSA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpLk5BTUVTUEFDRTtcblxuLy9bNF0gICBcdE5hbWVTdGFydENoYXJcdCAgIDo6PSAgIFx0XCI6XCIgfCBbQS1aXSB8IFwiX1wiIHwgW2Etel0gfCBbI3hDMC0jeEQ2XSB8IFsjeEQ4LSN4RjZdIHwgWyN4RjgtI3gyRkZdIHwgWyN4MzcwLSN4MzdEXSB8IFsjeDM3Ri0jeDFGRkZdIHwgWyN4MjAwQy0jeDIwMERdIHwgWyN4MjA3MC0jeDIxOEZdIHwgWyN4MkMwMC0jeDJGRUZdIHwgWyN4MzAwMS0jeEQ3RkZdIHwgWyN4RjkwMC0jeEZEQ0ZdIHwgWyN4RkRGMC0jeEZGRkRdIHwgWyN4MTAwMDAtI3hFRkZGRl1cbi8vWzRhXSAgIFx0TmFtZUNoYXJcdCAgIDo6PSAgIFx0TmFtZVN0YXJ0Q2hhciB8IFwiLVwiIHwgXCIuXCIgfCBbMC05XSB8ICN4QjcgfCBbI3gwMzAwLSN4MDM2Rl0gfCBbI3gyMDNGLSN4MjA0MF1cbi8vWzVdICAgXHROYW1lXHQgICA6Oj0gICBcdE5hbWVTdGFydENoYXIgKE5hbWVDaGFyKSpcbnZhciBuYW1lU3RhcnRDaGFyID0gL1tBLVpfYS16XFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF0vLy9cXHUxMDAwMC1cXHVFRkZGRlxudmFyIG5hbWVDaGFyID0gbmV3IFJlZ0V4cChcIltcXFxcLVxcXFwuMC05XCIrbmFtZVN0YXJ0Q2hhci5zb3VyY2Uuc2xpY2UoMSwtMSkrXCJcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MF1cIik7XG52YXIgdGFnTmFtZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeJytuYW1lU3RhcnRDaGFyLnNvdXJjZStuYW1lQ2hhci5zb3VyY2UrJyooPzpcXDonK25hbWVTdGFydENoYXIuc291cmNlK25hbWVDaGFyLnNvdXJjZSsnKik/JCcpO1xuLy92YXIgdGFnTmFtZVBhdHRlcm4gPSAvXlthLXpBLVpfXVtcXHdcXC1cXC5dKig/OlxcOlthLXpBLVpfXVtcXHdcXC1cXC5dKik/JC9cbi8vdmFyIGhhbmRsZXJzID0gJ3Jlc29sdmVFbnRpdHksZ2V0RXh0ZXJuYWxTdWJzZXQsY2hhcmFjdGVycyxlbmREb2N1bWVudCxlbmRFbGVtZW50LGVuZFByZWZpeE1hcHBpbmcsaWdub3JhYmxlV2hpdGVzcGFjZSxwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sc2V0RG9jdW1lbnRMb2NhdG9yLHNraXBwZWRFbnRpdHksc3RhcnREb2N1bWVudCxzdGFydEVsZW1lbnQsc3RhcnRQcmVmaXhNYXBwaW5nLG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2wsZXJyb3IsZmF0YWxFcnJvcix3YXJuaW5nLGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxjb21tZW50LGVuZENEQVRBLGVuZERURCxlbmRFbnRpdHksc3RhcnRDREFUQSxzdGFydERURCxzdGFydEVudGl0eScuc3BsaXQoJywnKVxuXG4vL1NfVEFHLFx0U19BVFRSLFx0U19FUSxcdFNfQVRUUl9OT1FVT1RfVkFMVUVcbi8vU19BVFRSX1NQQUNFLFx0U19BVFRSX0VORCxcdFNfVEFHX1NQQUNFLCBTX1RBR19DTE9TRVxudmFyIFNfVEFHID0gMDsvL3RhZyBuYW1lIG9mZmVycmluZ1xudmFyIFNfQVRUUiA9IDE7Ly9hdHRyIG5hbWUgb2ZmZXJyaW5nIFxudmFyIFNfQVRUUl9TUEFDRT0yOy8vYXR0ciBuYW1lIGVuZCBhbmQgc3BhY2Ugb2ZmZXJcbnZhciBTX0VRID0gMzsvLz1zcGFjZT9cbnZhciBTX0FUVFJfTk9RVU9UX1ZBTFVFID0gNDsvL2F0dHIgdmFsdWUobm8gcXVvdCB2YWx1ZSBvbmx5KVxudmFyIFNfQVRUUl9FTkQgPSA1Oy8vYXR0ciB2YWx1ZSBlbmQgYW5kIG5vIHNwYWNlKHF1b3QgZW5kKVxudmFyIFNfVEFHX1NQQUNFID0gNjsvLyhhdHRyIHZhbHVlIGVuZCB8fCB0YWcgZW5kICkgJiYgKHNwYWNlIG9mZmVyKVxudmFyIFNfVEFHX0NMT1NFID0gNzsvL2Nsb3NlZCBlbDxlbCAvPlxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZXJyb3IgdGhhdCB3aWxsIG5vdCBiZSBjYXVnaHQgYnkgWE1MUmVhZGVyIGFrYSB0aGUgU0FYIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHthbnk/fSBsb2NhdG9yIE9wdGlvbmFsLCBjYW4gcHJvdmlkZSBkZXRhaWxzIGFib3V0IHRoZSBsb2NhdGlvbiBpbiB0aGUgc291cmNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFyc2VFcnJvcihtZXNzYWdlLCBsb2NhdG9yKSB7XG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2Vcblx0dGhpcy5sb2NhdG9yID0gbG9jYXRvclxuXHRpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgUGFyc2VFcnJvcik7XG59XG5QYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUGFyc2VFcnJvci5wcm90b3R5cGUubmFtZSA9IFBhcnNlRXJyb3IubmFtZVxuXG5mdW5jdGlvbiBYTUxSZWFkZXIoKXtcblx0XG59XG5cblhNTFJlYWRlci5wcm90b3R5cGUgPSB7XG5cdHBhcnNlOmZ1bmN0aW9uKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwKXtcblx0XHR2YXIgZG9tQnVpbGRlciA9IHRoaXMuZG9tQnVpbGRlcjtcblx0XHRkb21CdWlsZGVyLnN0YXJ0RG9jdW1lbnQoKTtcblx0XHRfY29weShkZWZhdWx0TlNNYXAgLGRlZmF1bHROU01hcCA9IHt9KVxuXHRcdHBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwLFxuXHRcdFx0XHRkb21CdWlsZGVyLHRoaXMuZXJyb3JIYW5kbGVyKTtcblx0XHRkb21CdWlsZGVyLmVuZERvY3VtZW50KCk7XG5cdH1cbn1cbmZ1bmN0aW9uIHBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXBDb3B5LGVudGl0eU1hcCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcil7XG5cdGZ1bmN0aW9uIGZpeGVkRnJvbUNoYXJDb2RlKGNvZGUpIHtcblx0XHQvLyBTdHJpbmcucHJvdG90eXBlLmZyb21DaGFyQ29kZSBkb2VzIG5vdCBzdXBwb3J0c1xuXHRcdC8vID4gMiBieXRlcyB1bmljb2RlIGNoYXJzIGRpcmVjdGx5XG5cdFx0aWYgKGNvZGUgPiAweGZmZmYpIHtcblx0XHRcdGNvZGUgLT0gMHgxMDAwMDtcblx0XHRcdHZhciBzdXJyb2dhdGUxID0gMHhkODAwICsgKGNvZGUgPj4gMTApXG5cdFx0XHRcdCwgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjb2RlICYgMHgzZmYpO1xuXG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdXJyb2dhdGUxLCBzdXJyb2dhdGUyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGVudGl0eVJlcGxhY2VyKGEpe1xuXHRcdHZhciBrID0gYS5zbGljZSgxLC0xKTtcblx0XHRpZihrIGluIGVudGl0eU1hcCl7XG5cdFx0XHRyZXR1cm4gZW50aXR5TWFwW2tdOyBcblx0XHR9ZWxzZSBpZihrLmNoYXJBdCgwKSA9PT0gJyMnKXtcblx0XHRcdHJldHVybiBmaXhlZEZyb21DaGFyQ29kZShwYXJzZUludChrLnN1YnN0cigxKS5yZXBsYWNlKCd4JywnMHgnKSkpXG5cdFx0fWVsc2V7XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ2VudGl0eSBub3QgZm91bmQ6JythKTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhcHBlbmRUZXh0KGVuZCl7Ly9oYXMgc29tZSBidWdzXG5cdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdHZhciB4dCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsZW5kKS5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKTtcblx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHN0YXJ0KTtcblx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh4dCwwLGVuZC1zdGFydCk7XG5cdFx0XHRzdGFydCA9IGVuZFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwb3NpdGlvbihwLG0pe1xuXHRcdHdoaWxlKHA+PWxpbmVFbmQgJiYgKG0gPSBsaW5lUGF0dGVybi5leGVjKHNvdXJjZSkpKXtcblx0XHRcdGxpbmVTdGFydCA9IG0uaW5kZXg7XG5cdFx0XHRsaW5lRW5kID0gbGluZVN0YXJ0ICsgbVswXS5sZW5ndGg7XG5cdFx0XHRsb2NhdG9yLmxpbmVOdW1iZXIrKztcblx0XHRcdC8vY29uc29sZS5sb2coJ2xpbmUrKzonLGxvY2F0b3Isc3RhcnRQb3MsZW5kUG9zKVxuXHRcdH1cblx0XHRsb2NhdG9yLmNvbHVtbk51bWJlciA9IHAtbGluZVN0YXJ0KzE7XG5cdH1cblx0dmFyIGxpbmVTdGFydCA9IDA7XG5cdHZhciBsaW5lRW5kID0gMDtcblx0dmFyIGxpbmVQYXR0ZXJuID0gLy4qKD86XFxyXFxuP3xcXG4pfC4qJC9nXG5cdHZhciBsb2NhdG9yID0gZG9tQnVpbGRlci5sb2NhdG9yO1xuXHRcblx0dmFyIHBhcnNlU3RhY2sgPSBbe2N1cnJlbnROU01hcDpkZWZhdWx0TlNNYXBDb3B5fV1cblx0dmFyIGNsb3NlTWFwID0ge307XG5cdHZhciBzdGFydCA9IDA7XG5cdHdoaWxlKHRydWUpe1xuXHRcdHRyeXtcblx0XHRcdHZhciB0YWdTdGFydCA9IHNvdXJjZS5pbmRleE9mKCc8JyxzdGFydCk7XG5cdFx0XHRpZih0YWdTdGFydDwwKXtcblx0XHRcdFx0aWYoIXNvdXJjZS5zdWJzdHIoc3RhcnQpLm1hdGNoKC9eXFxzKiQvKSl7XG5cdFx0XHRcdFx0dmFyIGRvYyA9IGRvbUJ1aWxkZXIuZG9jO1xuXHQgICAgXHRcdFx0dmFyIHRleHQgPSBkb2MuY3JlYXRlVGV4dE5vZGUoc291cmNlLnN1YnN0cihzdGFydCkpO1xuXHQgICAgXHRcdFx0ZG9jLmFwcGVuZENoaWxkKHRleHQpO1xuXHQgICAgXHRcdFx0ZG9tQnVpbGRlci5jdXJyZW50RWxlbWVudCA9IHRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYodGFnU3RhcnQ+c3RhcnQpe1xuXHRcdFx0XHRhcHBlbmRUZXh0KHRhZ1N0YXJ0KTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaChzb3VyY2UuY2hhckF0KHRhZ1N0YXJ0KzEpKXtcblx0XHRcdGNhc2UgJy8nOlxuXHRcdFx0XHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz4nLHRhZ1N0YXJ0KzMpO1xuXHRcdFx0XHR2YXIgdGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQgKyAyLCBlbmQpLnJlcGxhY2UoL1sgXFx0XFxuXFxyXSskL2csICcnKTtcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHBhcnNlU3RhY2sucG9wKCk7XG5cdFx0XHRcdGlmKGVuZDwwKXtcblx0XHRcdFx0XHRcblx0ICAgICAgICBcdFx0dGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQrMikucmVwbGFjZSgvW1xcczxdLiovLCcnKTtcblx0ICAgICAgICBcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgaXMgbm90IGNvbXBsZXRlOicrY29uZmlnLnRhZ05hbWUpO1xuXHQgICAgICAgIFx0XHRlbmQgPSB0YWdTdGFydCsxK3RhZ05hbWUubGVuZ3RoO1xuXHQgICAgICAgIFx0fWVsc2UgaWYodGFnTmFtZS5tYXRjaCgvXFxzPC8pKXtcblx0ICAgICAgICBcdFx0dGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW1xcczxdLiovLCcnKTtcblx0ICAgICAgICBcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgbWF5YmUgbm90IGNvbXBsZXRlJyk7XG5cdCAgICAgICAgXHRcdGVuZCA9IHRhZ1N0YXJ0KzErdGFnTmFtZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGxvY2FsTlNNYXAgPSBjb25maWcubG9jYWxOU01hcDtcblx0XHRcdFx0dmFyIGVuZE1hdGNoID0gY29uZmlnLnRhZ05hbWUgPT0gdGFnTmFtZTtcblx0XHRcdFx0dmFyIGVuZElnbm9yZUNhc2VNYWNoID0gZW5kTWF0Y2ggfHwgY29uZmlnLnRhZ05hbWUmJmNvbmZpZy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0ICAgICAgICBpZihlbmRJZ25vcmVDYXNlTWFjaCl7XG5cdFx0ICAgICAgICBcdGRvbUJ1aWxkZXIuZW5kRWxlbWVudChjb25maWcudXJpLGNvbmZpZy5sb2NhbE5hbWUsdGFnTmFtZSk7XG5cdFx0XHRcdFx0aWYobG9jYWxOU01hcCl7XG5cdFx0XHRcdFx0XHRmb3IodmFyIHByZWZpeCBpbiBsb2NhbE5TTWFwKXtcblx0XHRcdFx0XHRcdFx0ZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCkgO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZighZW5kTWF0Y2gpe1xuXHRcdCAgICAgICAgICAgIFx0ZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBpcyBub3QgbWF0Y2ggdGhlIGN1cnJlbnQgc3RhcnQgdGFnTmFtZTonK2NvbmZpZy50YWdOYW1lICk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0XHRcdH1cblx0XHQgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgXHRwYXJzZVN0YWNrLnB1c2goY29uZmlnKVxuXHRcdCAgICAgICAgfVxuXHRcdFx0XHRcblx0XHRcdFx0ZW5kKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHQvLyBlbmQgZWxtZW50XG5cdFx0XHRjYXNlICc/JzovLyA8Py4uLj8+XG5cdFx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHRhZ1N0YXJ0KTtcblx0XHRcdFx0ZW5kID0gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2UsdGFnU3RhcnQsZG9tQnVpbGRlcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnISc6Ly8gPCFkb2N0eXBlLDwhW0NEQVRBLDwhLS1cblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHRlbmQgPSBwYXJzZURDQyhzb3VyY2UsdGFnU3RhcnQsZG9tQnVpbGRlcixlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHRhZ1N0YXJ0KTtcblx0XHRcdFx0dmFyIGVsID0gbmV3IEVsZW1lbnRBdHRyaWJ1dGVzKCk7XG5cdFx0XHRcdHZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoLTFdLmN1cnJlbnROU01hcDtcblx0XHRcdFx0Ly9lbFN0YXJ0RW5kXG5cdFx0XHRcdHZhciBlbmQgPSBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLHRhZ1N0YXJ0LGVsLGN1cnJlbnROU01hcCxlbnRpdHlSZXBsYWNlcixlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHR2YXIgbGVuID0gZWwubGVuZ3RoO1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFlbC5jbG9zZWQgJiYgZml4U2VsZkNsb3NlZChzb3VyY2UsZW5kLGVsLnRhZ05hbWUsY2xvc2VNYXApKXtcblx0XHRcdFx0XHRlbC5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmKCFlbnRpdHlNYXAubmJzcCl7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygndW5jbG9zZWQgeG1sIGF0dHJpYnV0ZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihsb2NhdG9yICYmIGxlbil7XG5cdFx0XHRcdFx0dmFyIGxvY2F0b3IyID0gY29weUxvY2F0b3IobG9jYXRvcix7fSk7XG5cdFx0XHRcdFx0Ly90cnl7Ly9hdHRyaWJ1dGUgcG9zaXRpb24gZml4ZWRcblx0XHRcdFx0XHRmb3IodmFyIGkgPSAwO2k8bGVuO2krKyl7XG5cdFx0XHRcdFx0XHR2YXIgYSA9IGVsW2ldO1xuXHRcdFx0XHRcdFx0cG9zaXRpb24oYS5vZmZzZXQpO1xuXHRcdFx0XHRcdFx0YS5sb2NhdG9yID0gY29weUxvY2F0b3IobG9jYXRvcix7fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3IyXG5cdFx0XHRcdFx0aWYoYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCkpe1xuXHRcdFx0XHRcdFx0cGFyc2VTdGFjay5wdXNoKGVsKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKSl7XG5cdFx0XHRcdFx0XHRwYXJzZVN0YWNrLnB1c2goZWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKE5BTUVTUEFDRS5pc0hUTUwoZWwudXJpKSAmJiAhZWwuY2xvc2VkKSB7XG5cdFx0XHRcdFx0ZW5kID0gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLGVuZCxlbC50YWdOYW1lLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5kKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRpZiAoZSBpbnN0YW5jZW9mIFBhcnNlRXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcignZWxlbWVudCBwYXJzZSBlcnJvcjogJytlKVxuXHRcdFx0ZW5kID0gLTE7XG5cdFx0fVxuXHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHRzdGFydCA9IGVuZDtcblx0XHR9ZWxzZXtcblx0XHRcdC8vVE9ETzog6L+Z6YeM5pyJ5Y+v6IO9c2F45Zue6YCA77yM5pyJ5L2N572u6ZSZ6K+v6aOO6ZmpXG5cdFx0XHRhcHBlbmRUZXh0KE1hdGgubWF4KHRhZ1N0YXJ0LHN0YXJ0KSsxKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIGNvcHlMb2NhdG9yKGYsdCl7XG5cdHQubGluZU51bWJlciA9IGYubGluZU51bWJlcjtcblx0dC5jb2x1bW5OdW1iZXIgPSBmLmNvbHVtbk51bWJlcjtcblx0cmV0dXJuIHQ7XG59XG5cbi8qKlxuICogQHNlZSAjYXBwZW5kRWxlbWVudChzb3VyY2UsZWxTdGFydEVuZCxlbCxzZWxmQ2xvc2VkLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIscGFyc2VTdGFjayk7XG4gKiBAcmV0dXJuIGVuZCBvZiB0aGUgZWxlbWVudFN0YXJ0UGFydChlbmQgb2YgZWxlbWVudEVuZFBhcnQgZm9yIHNlbGZDbG9zZWQgZWwpXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2Usc3RhcnQsZWwsY3VycmVudE5TTWFwLGVudGl0eVJlcGxhY2VyLGVycm9ySGFuZGxlcil7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxbmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SW5kZXhcblx0ICovXG5cdGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShxbmFtZSwgdmFsdWUsIHN0YXJ0SW5kZXgpIHtcblx0XHRpZiAoZWwuYXR0cmlidXRlTmFtZXMuaGFzT3duUHJvcGVydHkocW5hbWUpKSB7XG5cdFx0XHRlcnJvckhhbmRsZXIuZmF0YWxFcnJvcignQXR0cmlidXRlICcgKyBxbmFtZSArICcgcmVkZWZpbmVkJylcblx0XHR9XG5cdFx0ZWwuYWRkVmFsdWUocW5hbWUsIHZhbHVlLCBzdGFydEluZGV4KVxuXHR9XG5cdHZhciBhdHRyTmFtZTtcblx0dmFyIHZhbHVlO1xuXHR2YXIgcCA9ICsrc3RhcnQ7XG5cdHZhciBzID0gU19UQUc7Ly9zdGF0dXNcblx0d2hpbGUodHJ1ZSl7XG5cdFx0dmFyIGMgPSBzb3VyY2UuY2hhckF0KHApO1xuXHRcdHN3aXRjaChjKXtcblx0XHRjYXNlICc9Jzpcblx0XHRcdGlmKHMgPT09IFNfQVRUUil7Ly9hdHRyTmFtZVxuXHRcdFx0XHRhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKTtcblx0XHRcdFx0cyA9IFNfRVE7XG5cdFx0XHR9ZWxzZSBpZihzID09PSBTX0FUVFJfU1BBQ0Upe1xuXHRcdFx0XHRzID0gU19FUTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQvL2ZhdGFsRXJyb3I6IGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUgb3Igc3BhY2UgYWZ0ZXIgYXR0ck5hbWVcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgZXF1YWwgbXVzdCBhZnRlciBhdHRyTmFtZScpOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ1xcJyc6XG5cdFx0Y2FzZSAnXCInOlxuXHRcdFx0aWYocyA9PT0gU19FUSB8fCBzID09PSBTX0FUVFIgLy98fCBzID09IFNfQVRUUl9TUEFDRVxuXHRcdFx0XHQpey8vZXF1YWxcblx0XHRcdFx0aWYocyA9PT0gU19BVFRSKXtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKVxuXHRcdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApXG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnQgPSBwKzE7XG5cdFx0XHRcdHAgPSBzb3VyY2UuaW5kZXhPZihjLHN0YXJ0KVxuXHRcdFx0XHRpZihwPjApe1xuXHRcdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LHApLnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0LTEpO1xuXHRcdFx0XHRcdHMgPSBTX0FUVFJfRU5EO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQvL2ZhdGFsRXJyb3I6IG5vIGVuZCBxdW90IG1hdGNoXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbm8gZW5kIFxcJycrYysnXFwnIG1hdGNoJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlIGlmKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSl7XG5cdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LHApLnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGF0dHJOYW1lLHZhbHVlLHN0YXJ0LHApXG5cdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KTtcblx0XHRcdFx0Ly9jb25zb2xlLmRpcihlbClcblx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrYXR0ck5hbWUrJ1wiIG1pc3NlZCBzdGFydCBxdW90KCcrYysnKSEhJyk7XG5cdFx0XHRcdHN0YXJ0ID0gcCsxO1xuXHRcdFx0XHRzID0gU19BVFRSX0VORFxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vZmF0YWxFcnJvcjogbm8gZXF1YWwgYmVmb3JlXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcvJzpcblx0XHRcdHN3aXRjaChzKXtcblx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRzID1TX1RBR19DTE9TRTtcblx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcblx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly9jYXNlIFNfRVE6XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUgaW52YWxpZCBjbG9zZSBjaGFyKCcvJylcIikgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcnOi8vZW5kIGRvY3VtZW50XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ3VuZXhwZWN0ZWQgZW5kIG9mIGlucHV0Jyk7XG5cdFx0XHRpZihzID09IFNfVEFHKXtcblx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0Y2FzZSAnPic6XG5cdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRjYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0YnJlYWs7Ly9ub3JtYWxcblx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTovL0NvbXBhdGlibGUgc3RhdGVcblx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKTtcblx0XHRcdFx0aWYodmFsdWUuc2xpY2UoLTEpID09PSAnLycpe1xuXHRcdFx0XHRcdGVsLmNsb3NlZCAgPSB0cnVlO1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc2xpY2UoMCwtMSlcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdGlmKHMgPT09IFNfQVRUUl9TUEFDRSl7XG5cdFx0XHRcdFx0dmFsdWUgPSBhdHRyTmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpe1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgcXVvdChcIikhJyk7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZS5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKSwgc3RhcnQpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKCFOQU1FU1BBQ0UuaXNIVE1MKGN1cnJlbnROU01hcFsnJ10pIHx8ICF2YWx1ZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSl7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHZhbHVlISEgXCInK3ZhbHVlKydcIiBpbnN0ZWFkISEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUodmFsdWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU19FUTpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbWlzc2VkISEnKTtcblx0XHRcdH1cbi8vXHRcdFx0Y29uc29sZS5sb2codGFnTmFtZSx0YWdOYW1lUGF0dGVybix0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKVxuXHRcdFx0cmV0dXJuIHA7XG5cdFx0Lyp4bWwgc3BhY2UgJ1xceDIwJyB8ICN4OSB8ICN4RCB8ICN4QTsgKi9cblx0XHRjYXNlICdcXHUwMDgwJzpcblx0XHRcdGMgPSAnICc7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmKGM8PSAnICcpey8vc3BhY2Vcblx0XHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0XHRjYXNlIFNfVEFHOlxuXHRcdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTsvL3RhZ05hbWVcblx0XHRcdFx0XHRzID0gU19UQUdfU1BBQ0U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApXG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKS5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKTtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0XHRcdHMgPSBTX1RBR19TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0XHQvL2Nhc2UgU19FUTpcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0Ly9cdHZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRcdC8vaWdub3JlIHdhcm5pbmdcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7Ly9ub3Qgc3BhY2Vcbi8vU19UQUcsXHRTX0FUVFIsXHRTX0VRLFx0U19BVFRSX05PUVVPVF9WQUxVRVxuLy9TX0FUVFJfU1BBQ0UsXHRTX0FUVFJfRU5ELFx0U19UQUdfU1BBQ0UsIFNfVEFHX0NMT1NFXG5cdFx0XHRcdHN3aXRjaChzKXtcblx0XHRcdFx0Ly9jYXNlIFNfVEFHOnZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUjp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOnZvaWQoKTticmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdFx0dmFyIHRhZ05hbWUgPSAgZWwudGFnTmFtZTtcblx0XHRcdFx0XHRpZiAoIU5BTUVTUEFDRS5pc0hUTUwoY3VycmVudE5TTWFwWycnXSkgfHwgIWF0dHJOYW1lLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJythdHRyTmFtZSsnXCIgbWlzc2VkIHZhbHVlISEgXCInK2F0dHJOYW1lKydcIiBpbnN0ZWFkMiEhJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSwgc3RhcnQpO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRzID0gU19BVFRSO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBzcGFjZSBpcyByZXF1aXJlZFwiJythdHRyTmFtZSsnXCIhIScpXG5cdFx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRcdFx0cyA9IFNfQVRUUjtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19FUTpcblx0XHRcdFx0XHRzID0gU19BVFRSX05PUVVPVF9WQUxVRTtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudHMgY2xvc2VkIGNoYXJhY3RlciAnLycgYW5kICc+JyBtdXN0IGJlIGNvbm5lY3RlZCB0b1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0vL2VuZCBvdXRlciBzd2l0Y2hcblx0XHQvL2NvbnNvbGUubG9nKCdwKysnLHApXG5cdFx0cCsrO1xuXHR9XG59XG4vKipcbiAqIEByZXR1cm4gdHJ1ZSBpZiBoYXMgbmV3IG5hbWVzcGFjZSBkZWZpbmVcbiAqL1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCl7XG5cdHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcblx0dmFyIGxvY2FsTlNNYXAgPSBudWxsO1xuXHQvL3ZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoLTFdLmN1cnJlbnROU01hcDtcblx0dmFyIGkgPSBlbC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0dmFyIGEgPSBlbFtpXTtcblx0XHR2YXIgcU5hbWUgPSBhLnFOYW1lO1xuXHRcdHZhciB2YWx1ZSA9IGEudmFsdWU7XG5cdFx0dmFyIG5zcCA9IHFOYW1lLmluZGV4T2YoJzonKTtcblx0XHRpZihuc3A+MCl7XG5cdFx0XHR2YXIgcHJlZml4ID0gYS5wcmVmaXggPSBxTmFtZS5zbGljZSgwLG5zcCk7XG5cdFx0XHR2YXIgbG9jYWxOYW1lID0gcU5hbWUuc2xpY2UobnNwKzEpO1xuXHRcdFx0dmFyIG5zUHJlZml4ID0gcHJlZml4ID09PSAneG1sbnMnICYmIGxvY2FsTmFtZVxuXHRcdH1lbHNle1xuXHRcdFx0bG9jYWxOYW1lID0gcU5hbWU7XG5cdFx0XHRwcmVmaXggPSBudWxsXG5cdFx0XHRuc1ByZWZpeCA9IHFOYW1lID09PSAneG1sbnMnICYmICcnXG5cdFx0fVxuXHRcdC8vY2FuIG5vdCBzZXQgcHJlZml4LGJlY2F1c2UgcHJlZml4ICE9PSAnJ1xuXHRcdGEubG9jYWxOYW1lID0gbG9jYWxOYW1lIDtcblx0XHQvL3ByZWZpeCA9PSBudWxsIGZvciBubyBucyBwcmVmaXggYXR0cmlidXRlIFxuXHRcdGlmKG5zUHJlZml4ICE9PSBmYWxzZSl7Ly9oYWNrISFcblx0XHRcdGlmKGxvY2FsTlNNYXAgPT0gbnVsbCl7XG5cdFx0XHRcdGxvY2FsTlNNYXAgPSB7fVxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnROU01hcCwwKVxuXHRcdFx0XHRfY29weShjdXJyZW50TlNNYXAsY3VycmVudE5TTWFwPXt9KVxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnROU01hcCwxKVxuXHRcdFx0fVxuXHRcdFx0Y3VycmVudE5TTWFwW25zUHJlZml4XSA9IGxvY2FsTlNNYXBbbnNQcmVmaXhdID0gdmFsdWU7XG5cdFx0XHRhLnVyaSA9IE5BTUVTUEFDRS5YTUxOU1xuXHRcdFx0ZG9tQnVpbGRlci5zdGFydFByZWZpeE1hcHBpbmcobnNQcmVmaXgsIHZhbHVlKSBcblx0XHR9XG5cdH1cblx0dmFyIGkgPSBlbC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0YSA9IGVsW2ldO1xuXHRcdHZhciBwcmVmaXggPSBhLnByZWZpeDtcblx0XHRpZihwcmVmaXgpey8vbm8gcHJlZml4IGF0dHJpYnV0ZSBoYXMgbm8gbmFtZXNwYWNlXG5cdFx0XHRpZihwcmVmaXggPT09ICd4bWwnKXtcblx0XHRcdFx0YS51cmkgPSBOQU1FU1BBQ0UuWE1MO1xuXHRcdFx0fWlmKHByZWZpeCAhPT0gJ3htbG5zJyl7XG5cdFx0XHRcdGEudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ11cblx0XHRcdFx0XG5cdFx0XHRcdC8ve2NvbnNvbGUubG9nKCcjIyMnK2EucU5hbWUsZG9tQnVpbGRlci5sb2NhdG9yLnN5c3RlbUlkKycnLGN1cnJlbnROU01hcCxhLnVyaSl9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHZhciBuc3AgPSB0YWdOYW1lLmluZGV4T2YoJzonKTtcblx0aWYobnNwPjApe1xuXHRcdHByZWZpeCA9IGVsLnByZWZpeCA9IHRhZ05hbWUuc2xpY2UoMCxuc3ApO1xuXHRcdGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWUuc2xpY2UobnNwKzEpO1xuXHR9ZWxzZXtcblx0XHRwcmVmaXggPSBudWxsOy8vaW1wb3J0YW50ISFcblx0XHRsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuXHR9XG5cdC8vbm8gcHJlZml4IGVsZW1lbnQgaGFzIGRlZmF1bHQgbmFtZXNwYWNlXG5cdHZhciBucyA9IGVsLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddO1xuXHRkb21CdWlsZGVyLnN0YXJ0RWxlbWVudChucyxsb2NhbE5hbWUsdGFnTmFtZSxlbCk7XG5cdC8vZW5kUHJlZml4TWFwcGluZyBhbmQgc3RhcnRQcmVmaXhNYXBwaW5nIGhhdmUgbm90IGFueSBoZWxwIGZvciBkb20gYnVpbGRlclxuXHQvL2xvY2FsTlNNYXAgPSBudWxsXG5cdGlmKGVsLmNsb3NlZCl7XG5cdFx0ZG9tQnVpbGRlci5lbmRFbGVtZW50KG5zLGxvY2FsTmFtZSx0YWdOYW1lKTtcblx0XHRpZihsb2NhbE5TTWFwKXtcblx0XHRcdGZvcihwcmVmaXggaW4gbG9jYWxOU01hcCl7XG5cdFx0XHRcdGRvbUJ1aWxkZXIuZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpIFxuXHRcdFx0fVxuXHRcdH1cblx0fWVsc2V7XG5cdFx0ZWwuY3VycmVudE5TTWFwID0gY3VycmVudE5TTWFwO1xuXHRcdGVsLmxvY2FsTlNNYXAgPSBsb2NhbE5TTWFwO1xuXHRcdC8vcGFyc2VTdGFjay5wdXNoKGVsKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuZnVuY3Rpb24gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLGVsU3RhcnRFbmQsdGFnTmFtZSxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyKXtcblx0aWYoL14oPzpzY3JpcHR8dGV4dGFyZWEpJC9pLnRlc3QodGFnTmFtZSkpe1xuXHRcdHZhciBlbEVuZFN0YXJ0ID0gIHNvdXJjZS5pbmRleE9mKCc8LycrdGFnTmFtZSsnPicsZWxTdGFydEVuZCk7XG5cdFx0dmFyIHRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGVsU3RhcnRFbmQrMSxlbEVuZFN0YXJ0KTtcblx0XHRpZigvWyY8XS8udGVzdCh0ZXh0KSl7XG5cdFx0XHRpZigvXnNjcmlwdCQvaS50ZXN0KHRhZ05hbWUpKXtcblx0XHRcdFx0Ly9pZighL1xcXVxcXT4vLnRlc3QodGV4dCkpe1xuXHRcdFx0XHRcdC8vbGV4SGFuZGxlci5zdGFydENEQVRBKCk7XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsMCx0ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0Ly9sZXhIYW5kbGVyLmVuZENEQVRBKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRW5kU3RhcnQ7XG5cdFx0XHRcdC8vfVxuXHRcdFx0fS8vfWVsc2V7Ly90ZXh0IGFyZWFcblx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LDAsdGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRyZXR1cm4gZWxFbmRTdGFydDtcblx0XHRcdC8vfVxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdHJldHVybiBlbFN0YXJ0RW5kKzE7XG59XG5mdW5jdGlvbiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSxlbFN0YXJ0RW5kLHRhZ05hbWUsY2xvc2VNYXApe1xuXHQvL2lmKHRhZ05hbWUgaW4gY2xvc2VNYXApe1xuXHR2YXIgcG9zID0gY2xvc2VNYXBbdGFnTmFtZV07XG5cdGlmKHBvcyA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHRhZ05hbWUpXG5cdFx0cG9zID0gIHNvdXJjZS5sYXN0SW5kZXhPZignPC8nK3RhZ05hbWUrJz4nKVxuXHRcdGlmKHBvczxlbFN0YXJ0RW5kKXsvL+W/mOiusOmXreWQiFxuXHRcdFx0cG9zID0gc291cmNlLmxhc3RJbmRleE9mKCc8LycrdGFnTmFtZSlcblx0XHR9XG5cdFx0Y2xvc2VNYXBbdGFnTmFtZV0gPXBvc1xuXHR9XG5cdHJldHVybiBwb3M8ZWxTdGFydEVuZDtcblx0Ly99IFxufVxuZnVuY3Rpb24gX2NvcHkoc291cmNlLHRhcmdldCl7XG5cdGZvcih2YXIgbiBpbiBzb3VyY2Upe3RhcmdldFtuXSA9IHNvdXJjZVtuXX1cbn1cbmZ1bmN0aW9uIHBhcnNlRENDKHNvdXJjZSxzdGFydCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcil7Ly9zdXJlIHN0YXJ0IHdpdGggJzwhJ1xuXHR2YXIgbmV4dD0gc291cmNlLmNoYXJBdChzdGFydCsyKVxuXHRzd2l0Y2gobmV4dCl7XG5cdGNhc2UgJy0nOlxuXHRcdGlmKHNvdXJjZS5jaGFyQXQoc3RhcnQgKyAzKSA9PT0gJy0nKXtcblx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignLS0+JyxzdGFydCs0KTtcblx0XHRcdC8vYXBwZW5kIGNvbW1lbnQgc291cmNlLnN1YnN0cmluZyg0LGVuZCkvLzwhLS1cblx0XHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHRcdGRvbUJ1aWxkZXIuY29tbWVudChzb3VyY2Usc3RhcnQrNCxlbmQtc3RhcnQtNCk7XG5cdFx0XHRcdHJldHVybiBlbmQrMztcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoXCJVbmNsb3NlZCBjb21tZW50XCIpO1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2Vycm9yXG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRkZWZhdWx0OlxuXHRcdGlmKHNvdXJjZS5zdWJzdHIoc3RhcnQrMyw2KSA9PSAnQ0RBVEFbJyl7XG5cdFx0XHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJ11dPicsc3RhcnQrOSk7XG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0Q0RBVEEoKTtcblx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyhzb3VyY2Usc3RhcnQrOSxlbmQtc3RhcnQtOSk7XG5cdFx0XHRkb21CdWlsZGVyLmVuZENEQVRBKCkgXG5cdFx0XHRyZXR1cm4gZW5kKzM7XG5cdFx0fVxuXHRcdC8vPCFET0NUWVBFXG5cdFx0Ly9zdGFydERURChqYXZhLmxhbmcuU3RyaW5nIG5hbWUsIGphdmEubGFuZy5TdHJpbmcgcHVibGljSWQsIGphdmEubGFuZy5TdHJpbmcgc3lzdGVtSWQpIFxuXHRcdHZhciBtYXRjaHMgPSBzcGxpdChzb3VyY2Usc3RhcnQpO1xuXHRcdHZhciBsZW4gPSBtYXRjaHMubGVuZ3RoO1xuXHRcdGlmKGxlbj4xICYmIC8hZG9jdHlwZS9pLnRlc3QobWF0Y2hzWzBdWzBdKSl7XG5cdFx0XHR2YXIgbmFtZSA9IG1hdGNoc1sxXVswXTtcblx0XHRcdHZhciBwdWJpZCA9IGZhbHNlO1xuXHRcdFx0dmFyIHN5c2lkID0gZmFsc2U7XG5cdFx0XHRpZihsZW4+Myl7XG5cdFx0XHRcdGlmKC9ecHVibGljJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSl7XG5cdFx0XHRcdFx0cHViaWQgPSBtYXRjaHNbM11bMF07XG5cdFx0XHRcdFx0c3lzaWQgPSBsZW4+NCAmJiBtYXRjaHNbNF1bMF07XG5cdFx0XHRcdH1lbHNlIGlmKC9ec3lzdGVtJC9pLnRlc3QobWF0Y2hzWzJdWzBdKSl7XG5cdFx0XHRcdFx0c3lzaWQgPSBtYXRjaHNbM11bMF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBsYXN0TWF0Y2ggPSBtYXRjaHNbbGVuLTFdXG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0RFREKG5hbWUsIHB1YmlkLCBzeXNpZCk7XG5cdFx0XHRkb21CdWlsZGVyLmVuZERURCgpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gbGFzdE1hdGNoLmluZGV4K2xhc3RNYXRjaFswXS5sZW5ndGhcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5cblxuZnVuY3Rpb24gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2Usc3RhcnQsZG9tQnVpbGRlcil7XG5cdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPz4nLHN0YXJ0KTtcblx0aWYoZW5kKXtcblx0XHR2YXIgbWF0Y2ggPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LGVuZCkubWF0Y2goL148XFw/KFxcUyopXFxzKihbXFxzXFxTXSo/KVxccyokLyk7XG5cdFx0aWYobWF0Y2gpe1xuXHRcdFx0dmFyIGxlbiA9IG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdGRvbUJ1aWxkZXIucHJvY2Vzc2luZ0luc3RydWN0aW9uKG1hdGNoWzFdLCBtYXRjaFsyXSkgO1xuXHRcdFx0cmV0dXJuIGVuZCsyO1xuXHRcdH1lbHNley8vZXJyb3Jcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBFbGVtZW50QXR0cmlidXRlcygpe1xuXHR0aGlzLmF0dHJpYnV0ZU5hbWVzID0ge31cbn1cbkVsZW1lbnRBdHRyaWJ1dGVzLnByb3RvdHlwZSA9IHtcblx0c2V0VGFnTmFtZTpmdW5jdGlvbih0YWdOYW1lKXtcblx0XHRpZighdGFnTmFtZVBhdHRlcm4udGVzdCh0YWdOYW1lKSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdGFnTmFtZTonK3RhZ05hbWUpXG5cdFx0fVxuXHRcdHRoaXMudGFnTmFtZSA9IHRhZ05hbWVcblx0fSxcblx0YWRkVmFsdWU6ZnVuY3Rpb24ocU5hbWUsIHZhbHVlLCBvZmZzZXQpIHtcblx0XHRpZighdGFnTmFtZVBhdHRlcm4udGVzdChxTmFtZSkpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGF0dHJpYnV0ZTonK3FOYW1lKVxuXHRcdH1cblx0XHR0aGlzLmF0dHJpYnV0ZU5hbWVzW3FOYW1lXSA9IHRoaXMubGVuZ3RoO1xuXHRcdHRoaXNbdGhpcy5sZW5ndGgrK10gPSB7cU5hbWU6cU5hbWUsdmFsdWU6dmFsdWUsb2Zmc2V0Om9mZnNldH1cblx0fSxcblx0bGVuZ3RoOjAsXG5cdGdldExvY2FsTmFtZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5sb2NhbE5hbWV9LFxuXHRnZXRMb2NhdG9yOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLmxvY2F0b3J9LFxuXHRnZXRRTmFtZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5xTmFtZX0sXG5cdGdldFVSSTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS51cml9LFxuXHRnZXRWYWx1ZTpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS52YWx1ZX1cbi8vXHQsZ2V0SW5kZXg6ZnVuY3Rpb24odXJpLCBsb2NhbE5hbWUpKXtcbi8vXHRcdGlmKGxvY2FsTmFtZSl7XG4vL1x0XHRcdFxuLy9cdFx0fWVsc2V7XG4vL1x0XHRcdHZhciBxTmFtZSA9IHVyaVxuLy9cdFx0fVxuLy9cdH0sXG4vL1x0Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmdldEluZGV4LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LFxuLy9cdGdldFR5cGU6ZnVuY3Rpb24odXJpLGxvY2FsTmFtZSl7fVxuLy9cdGdldFR5cGU6ZnVuY3Rpb24oaSl7fSxcbn1cblxuXG5cbmZ1bmN0aW9uIHNwbGl0KHNvdXJjZSxzdGFydCl7XG5cdHZhciBtYXRjaDtcblx0dmFyIGJ1ZiA9IFtdO1xuXHR2YXIgcmVnID0gLydbXiddKyd8XCJbXlwiXStcInxbXlxcczw+XFwvPV0rPT98KFxcLz9cXHMqPnw8KS9nO1xuXHRyZWcubGFzdEluZGV4ID0gc3RhcnQ7XG5cdHJlZy5leGVjKHNvdXJjZSk7Ly9za2lwIDxcblx0d2hpbGUobWF0Y2ggPSByZWcuZXhlYyhzb3VyY2UpKXtcblx0XHRidWYucHVzaChtYXRjaCk7XG5cdFx0aWYobWF0Y2hbMV0pcmV0dXJuIGJ1Zjtcblx0fVxufVxuXG5leHBvcnRzLlhNTFJlYWRlciA9IFhNTFJlYWRlcjtcbmV4cG9ydHMuUGFyc2VFcnJvciA9IFBhcnNlRXJyb3I7XG4iLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcbiIsIi8qISBAbmFtZSBtcGQtcGFyc2VyIEB2ZXJzaW9uIDAuMjEuMSBAbGljZW5zZSBBcGFjaGUtMi4wICovXG5pbXBvcnQgcmVzb2x2ZVVybCBmcm9tICdAdmlkZW9qcy92aHMtdXRpbHMvZXMvcmVzb2x2ZS11cmwnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7IGZvckVhY2hNZWRpYUdyb3VwIH0gZnJvbSAnQHZpZGVvanMvdmhzLXV0aWxzL2VzL21lZGlhLWdyb3Vwcyc7XG5pbXBvcnQgZGVjb2RlQjY0VG9VaW50OEFycmF5IGZyb20gJ0B2aWRlb2pzL3Zocy11dGlscy9lcy9kZWNvZGUtYjY0LXRvLXVpbnQ4LWFycmF5JztcbmltcG9ydCB7IERPTVBhcnNlciB9IGZyb20gJ0B4bWxkb20veG1sZG9tJztcblxudmFyIHZlcnNpb24gPSBcIjAuMjEuMVwiO1xuXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvYmplY3RzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG9iamVjdHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRba2V5XSkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSByZXN1bHRba2V5XS5jb25jYXQoc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChyZXN1bHRba2V5XSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufTtcbnZhciB2YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMobykge1xuICByZXR1cm4gT2JqZWN0LmtleXMobykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ba107XG4gIH0pO1xufTtcblxudmFyIHJhbmdlID0gZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIGZsYXR0ZW4gPSBmdW5jdGlvbiBmbGF0dGVuKGxpc3RzKSB7XG4gIHJldHVybiBsaXN0cy5yZWR1Y2UoZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4geC5jb25jYXQoeSk7XG4gIH0sIFtdKTtcbn07XG52YXIgZnJvbSA9IGZ1bmN0aW9uIGZyb20obGlzdCkge1xuICBpZiAoIWxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGxpc3RbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgZmluZEluZGV4ZXMgPSBmdW5jdGlvbiBmaW5kSW5kZXhlcyhsLCBrZXkpIHtcbiAgcmV0dXJuIGwucmVkdWNlKGZ1bmN0aW9uIChhLCBlLCBpKSB7XG4gICAgaWYgKGVba2V5XSkge1xuICAgICAgYS5wdXNoKGkpO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9LCBbXSk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCB0aGF0IHNhdGlzZmllcyB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24sIG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAqXG4gKiBPbmx5IG5lY2Vzc2FyeSBiZWNhdXNlIG9mIElFMTEgc3VwcG9ydC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IC0gdGhlIGxpc3QgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1hdGNoaW5nRnVuY3Rpb24gLSB0aGUgbWF0Y2hpbmcgZnVuY3Rpb25cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBtYXRjaGluZyBpbmRleCBvciAtMSBpZiBub3QgZm91bmRcbiAqL1xuXG52YXIgZmluZEluZGV4ID0gZnVuY3Rpb24gZmluZEluZGV4KGxpc3QsIG1hdGNoaW5nRnVuY3Rpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1hdGNoaW5nRnVuY3Rpb24obGlzdFtpXSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG4vKipcbiAqIFJldHVybnMgYSB1bmlvbiBvZiB0aGUgaW5jbHVkZWQgbGlzdHMgcHJvdmlkZWQgZWFjaCBlbGVtZW50IGNhbiBiZSBpZGVudGlmaWVkIGJ5IGEga2V5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgLSBsaXN0IG9mIGxpc3RzIHRvIGdldCB0aGUgdW5pb24gb2ZcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleUZ1bmN0aW9uIC0gdGhlIGZ1bmN0aW9uIHRvIHVzZSBhcyBhIGtleSBmb3IgZWFjaCBlbGVtZW50XG4gKlxuICogQHJldHVybiB7QXJyYXl9IHRoZSB1bmlvbiBvZiB0aGUgYXJyYXlzXG4gKi9cblxudmFyIHVuaW9uID0gZnVuY3Rpb24gdW5pb24obGlzdHMsIGtleUZ1bmN0aW9uKSB7XG4gIHJldHVybiB2YWx1ZXMobGlzdHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGxpc3QpIHtcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBhY2Nba2V5RnVuY3Rpb24oZWwpXSA9IGVsO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KSk7XG59O1xuXG52YXIgZXJyb3JzID0ge1xuICBJTlZBTElEX05VTUJFUl9PRl9QRVJJT0Q6ICdJTlZBTElEX05VTUJFUl9PRl9QRVJJT0QnLFxuICBEQVNIX0VNUFRZX01BTklGRVNUOiAnREFTSF9FTVBUWV9NQU5JRkVTVCcsXG4gIERBU0hfSU5WQUxJRF9YTUw6ICdEQVNIX0lOVkFMSURfWE1MJyxcbiAgTk9fQkFTRV9VUkw6ICdOT19CQVNFX1VSTCcsXG4gIE1JU1NJTkdfU0VHTUVOVF9JTkZPUk1BVElPTjogJ01JU1NJTkdfU0VHTUVOVF9JTkZPUk1BVElPTicsXG4gIFNFR01FTlRfVElNRV9VTlNQRUNJRklFRDogJ1NFR01FTlRfVElNRV9VTlNQRUNJRklFRCcsXG4gIFVOU1VQUE9SVEVEX1VUQ19USU1JTkdfU0NIRU1FOiAnVU5TVVBQT1JURURfVVRDX1RJTUlOR19TQ0hFTUUnXG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNpbmdsZVVyaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVyaSAtIHJlbGF0aXZlIGxvY2F0aW9uIG9mIHNlZ21lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZXNvbHZlZFVyaSAtIHJlc29sdmVkIGxvY2F0aW9uIG9mIHNlZ21lbnRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBieXRlcmFuZ2UgLSBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBvbiBob3cgdG8gbWFrZSBieXRlIHJhbmdlXG4gKiAgIHJlcXVlc3RzIGZvbGxvd2luZyBieXRlLXJhbmdlLXNwZWMgcGVyIFJGQzI2MTYuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gYnl0ZXJhbmdlLmxlbmd0aCAtIGxlbmd0aCBvZiByYW5nZSByZXF1ZXN0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gYnl0ZXJhbmdlLm9mZnNldCAtIGJ5dGUgb2Zmc2V0IG9mIHJhbmdlIHJlcXVlc3RcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzE0Lmh0bWwjc2VjMTQuMzUuMVxuICovXG5cbi8qKlxuICogQ29udmVydHMgYSBVUkxUeXBlIG5vZGUgKDUuMy45LjIuMyBUYWJsZSAxMykgdG8gYSBzZWdtZW50IG9iamVjdFxuICogdGhhdCBjb25mb3JtcyB0byBob3cgbTN1OC1wYXJzZXIgaXMgc3RydWN0dXJlZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvanMvbTN1OC1wYXJzZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybCAtIGJhc2VVcmwgcHJvdmlkZWQgYnkgPEJhc2VVcmw+IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIC0gc291cmNlIHVybCBmb3Igc2VnbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlIC0gb3B0aW9uYWwgcmFuZ2UgdXNlZCBmb3IgcmFuZ2UgY2FsbHMsXG4gKiAgIGZvbGxvd3MgIFJGQyAyNjE2LCBDbGF1c2UgMTQuMzUuMVxuICogQHJldHVybiB7U2luZ2xlVXJpfSBmdWxsIHNlZ21lbnQgaW5mb3JtYXRpb24gdHJhbnNmb3JtZWQgaW50byBhIGZvcm1hdCBzaW1pbGFyXG4gKiAgIHRvIG0zdTgtcGFyc2VyXG4gKi9cblxudmFyIHVybFR5cGVUb1NlZ21lbnQgPSBmdW5jdGlvbiB1cmxUeXBlVG9TZWdtZW50KF9yZWYpIHtcbiAgdmFyIF9yZWYkYmFzZVVybCA9IF9yZWYuYmFzZVVybCxcbiAgICAgIGJhc2VVcmwgPSBfcmVmJGJhc2VVcmwgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRiYXNlVXJsLFxuICAgICAgX3JlZiRzb3VyY2UgPSBfcmVmLnNvdXJjZSxcbiAgICAgIHNvdXJjZSA9IF9yZWYkc291cmNlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkc291cmNlLFxuICAgICAgX3JlZiRyYW5nZSA9IF9yZWYucmFuZ2UsXG4gICAgICByYW5nZSA9IF9yZWYkcmFuZ2UgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRyYW5nZSxcbiAgICAgIF9yZWYkaW5kZXhSYW5nZSA9IF9yZWYuaW5kZXhSYW5nZSxcbiAgICAgIGluZGV4UmFuZ2UgPSBfcmVmJGluZGV4UmFuZ2UgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRpbmRleFJhbmdlO1xuICB2YXIgc2VnbWVudCA9IHtcbiAgICB1cmk6IHNvdXJjZSxcbiAgICByZXNvbHZlZFVyaTogcmVzb2x2ZVVybChiYXNlVXJsIHx8ICcnLCBzb3VyY2UpXG4gIH07XG5cbiAgaWYgKHJhbmdlIHx8IGluZGV4UmFuZ2UpIHtcbiAgICB2YXIgcmFuZ2VTdHIgPSByYW5nZSA/IHJhbmdlIDogaW5kZXhSYW5nZTtcbiAgICB2YXIgcmFuZ2VzID0gcmFuZ2VTdHIuc3BsaXQoJy0nKTsgLy8gZGVmYXVsdCB0byBwYXJzaW5nIHRoaXMgYXMgYSBCaWdJbnQgaWYgcG9zc2libGVcblxuICAgIHZhciBzdGFydFJhbmdlID0gd2luZG93LkJpZ0ludCA/IHdpbmRvdy5CaWdJbnQocmFuZ2VzWzBdKSA6IHBhcnNlSW50KHJhbmdlc1swXSwgMTApO1xuICAgIHZhciBlbmRSYW5nZSA9IHdpbmRvdy5CaWdJbnQgPyB3aW5kb3cuQmlnSW50KHJhbmdlc1sxXSkgOiBwYXJzZUludChyYW5nZXNbMV0sIDEwKTsgLy8gY29udmVydCBiYWNrIHRvIGEgbnVtYmVyIGlmIGxlc3MgdGhhbiBNQVhfU0FGRV9JTlRFR0VSXG5cbiAgICBpZiAoc3RhcnRSYW5nZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICYmIHR5cGVvZiBzdGFydFJhbmdlID09PSAnYmlnaW50Jykge1xuICAgICAgc3RhcnRSYW5nZSA9IE51bWJlcihzdGFydFJhbmdlKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kUmFuZ2UgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAmJiB0eXBlb2YgZW5kUmFuZ2UgPT09ICdiaWdpbnQnKSB7XG4gICAgICBlbmRSYW5nZSA9IE51bWJlcihlbmRSYW5nZSk7XG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aDtcblxuICAgIGlmICh0eXBlb2YgZW5kUmFuZ2UgPT09ICdiaWdpbnQnIHx8IHR5cGVvZiBzdGFydFJhbmdlID09PSAnYmlnaW50Jykge1xuICAgICAgbGVuZ3RoID0gd2luZG93LkJpZ0ludChlbmRSYW5nZSkgLSB3aW5kb3cuQmlnSW50KHN0YXJ0UmFuZ2UpICsgd2luZG93LkJpZ0ludCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gZW5kUmFuZ2UgLSBzdGFydFJhbmdlICsgMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ2JpZ2ludCcgJiYgbGVuZ3RoIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpO1xuICAgIH0gLy8gYnl0ZXJhbmdlIHNob3VsZCBiZSBpbmNsdXNpdmUgYWNjb3JkaW5nIHRvXG4gICAgLy8gUkZDIDI2MTYsIENsYXVzZSAxNC4zNS4xXG5cblxuICAgIHNlZ21lbnQuYnl0ZXJhbmdlID0ge1xuICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICBvZmZzZXQ6IHN0YXJ0UmFuZ2VcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnQ7XG59O1xudmFyIGJ5dGVSYW5nZVRvU3RyaW5nID0gZnVuY3Rpb24gYnl0ZVJhbmdlVG9TdHJpbmcoYnl0ZXJhbmdlKSB7XG4gIC8vIGBlbmRSYW5nZWAgaXMgb25lIGxlc3MgdGhhbiBgb2Zmc2V0ICsgbGVuZ3RoYCBiZWNhdXNlIHRoZSBIVFRQIHJhbmdlXG4gIC8vIGhlYWRlciB1c2VzIGluY2x1c2l2ZSByYW5nZXNcbiAgdmFyIGVuZFJhbmdlO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXJhbmdlLm9mZnNldCA9PT0gJ2JpZ2ludCcgfHwgdHlwZW9mIGJ5dGVyYW5nZS5sZW5ndGggPT09ICdiaWdpbnQnKSB7XG4gICAgZW5kUmFuZ2UgPSB3aW5kb3cuQmlnSW50KGJ5dGVyYW5nZS5vZmZzZXQpICsgd2luZG93LkJpZ0ludChieXRlcmFuZ2UubGVuZ3RoKSAtIHdpbmRvdy5CaWdJbnQoMSk7XG4gIH0gZWxzZSB7XG4gICAgZW5kUmFuZ2UgPSBieXRlcmFuZ2Uub2Zmc2V0ICsgYnl0ZXJhbmdlLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZXR1cm4gYnl0ZXJhbmdlLm9mZnNldCArIFwiLVwiICsgZW5kUmFuZ2U7XG59O1xuXG4vKipcbiAqIHBhcnNlIHRoZSBlbmQgbnVtYmVyIGF0dHJpYnVlIHRoYXQgY2FuIGJlIGEgc3RyaW5nXG4gKiBudW1iZXIsIG9yIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8dW5kZWZpbmVkfSBlbmROdW1iZXJcbiAqICAgICAgICBUaGUgZW5kIG51bWJlciBhdHRyaWJ1dGUuXG4gKlxuICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gKiAgICAgICAgICBUaGUgcmVzdWx0IG9mIHBhcnNpbmcgdGhlIGVuZCBudW1iZXIuXG4gKi9cblxudmFyIHBhcnNlRW5kTnVtYmVyID0gZnVuY3Rpb24gcGFyc2VFbmROdW1iZXIoZW5kTnVtYmVyKSB7XG4gIGlmIChlbmROdW1iZXIgJiYgdHlwZW9mIGVuZE51bWJlciAhPT0gJ251bWJlcicpIHtcbiAgICBlbmROdW1iZXIgPSBwYXJzZUludChlbmROdW1iZXIsIDEwKTtcbiAgfVxuXG4gIGlmIChpc05hTihlbmROdW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZW5kTnVtYmVyO1xufTtcbi8qKlxuICogRnVuY3Rpb25zIGZvciBjYWxjdWxhdGluZyB0aGUgcmFuZ2Ugb2YgYXZhaWxhYmxlIHNlZ21lbnRzIGluIHN0YXRpYyBhbmQgZHluYW1pY1xuICogbWFuaWZlc3RzLlxuICovXG5cblxudmFyIHNlZ21lbnRSYW5nZSA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVudGlyZSByYW5nZSBvZiBhdmFpbGFibGUgc2VnbWVudHMgZm9yIGEgc3RhdGljIE1QRFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICAgKiAgICAgICAgSW5oZXJpdGllZCBNUEQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHt7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyIH19XG4gICAqICAgICAgICAgVGhlIHN0YXJ0IGFuZCBlbmQgbnVtYmVycyBmb3IgYXZhaWxhYmxlIHNlZ21lbnRzXG4gICAqL1xuICBzdGF0aWM6IGZ1bmN0aW9uIF9zdGF0aWMoYXR0cmlidXRlcykge1xuICAgIHZhciBkdXJhdGlvbiA9IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgICAgIF9hdHRyaWJ1dGVzJHRpbWVzY2FsZSA9IGF0dHJpYnV0ZXMudGltZXNjYWxlLFxuICAgICAgICB0aW1lc2NhbGUgPSBfYXR0cmlidXRlcyR0aW1lc2NhbGUgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyR0aW1lc2NhbGUsXG4gICAgICAgIHNvdXJjZUR1cmF0aW9uID0gYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbixcbiAgICAgICAgcGVyaW9kRHVyYXRpb24gPSBhdHRyaWJ1dGVzLnBlcmlvZER1cmF0aW9uO1xuICAgIHZhciBlbmROdW1iZXIgPSBwYXJzZUVuZE51bWJlcihhdHRyaWJ1dGVzLmVuZE51bWJlcik7XG4gICAgdmFyIHNlZ21lbnREdXJhdGlvbiA9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xuXG4gICAgaWYgKHR5cGVvZiBlbmROdW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiBlbmROdW1iZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwZXJpb2REdXJhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IHBlcmlvZER1cmF0aW9uIC8gc2VnbWVudER1cmF0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogc291cmNlRHVyYXRpb24gLyBzZWdtZW50RHVyYXRpb25cbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxpdmUgd2luZG93IHJhbmdlIG9mIGF2YWlsYWJsZSBzZWdtZW50cyBmb3IgYSBkeW5hbWljIE1QRFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICAgKiAgICAgICAgSW5oZXJpdGllZCBNUEQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHt7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyIH19XG4gICAqICAgICAgICAgVGhlIHN0YXJ0IGFuZCBlbmQgbnVtYmVycyBmb3IgYXZhaWxhYmxlIHNlZ21lbnRzXG4gICAqL1xuICBkeW5hbWljOiBmdW5jdGlvbiBkeW5hbWljKGF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgTk9XID0gYXR0cmlidXRlcy5OT1csXG4gICAgICAgIGNsaWVudE9mZnNldCA9IGF0dHJpYnV0ZXMuY2xpZW50T2Zmc2V0LFxuICAgICAgICBhdmFpbGFiaWxpdHlTdGFydFRpbWUgPSBhdHRyaWJ1dGVzLmF2YWlsYWJpbGl0eVN0YXJ0VGltZSxcbiAgICAgICAgX2F0dHJpYnV0ZXMkdGltZXNjYWxlMiA9IGF0dHJpYnV0ZXMudGltZXNjYWxlLFxuICAgICAgICB0aW1lc2NhbGUgPSBfYXR0cmlidXRlcyR0aW1lc2NhbGUyID09PSB2b2lkIDAgPyAxIDogX2F0dHJpYnV0ZXMkdGltZXNjYWxlMixcbiAgICAgICAgZHVyYXRpb24gPSBhdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgICAgICBfYXR0cmlidXRlcyRwZXJpb2RTdGEgPSBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgICBwZXJpb2RTdGFydCA9IF9hdHRyaWJ1dGVzJHBlcmlvZFN0YSA9PT0gdm9pZCAwID8gMCA6IF9hdHRyaWJ1dGVzJHBlcmlvZFN0YSxcbiAgICAgICAgX2F0dHJpYnV0ZXMkbWluaW11bVVwID0gYXR0cmlidXRlcy5taW5pbXVtVXBkYXRlUGVyaW9kLFxuICAgICAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gX2F0dHJpYnV0ZXMkbWluaW11bVVwID09PSB2b2lkIDAgPyAwIDogX2F0dHJpYnV0ZXMkbWluaW11bVVwLFxuICAgICAgICBfYXR0cmlidXRlcyR0aW1lU2hpZnQgPSBhdHRyaWJ1dGVzLnRpbWVTaGlmdEJ1ZmZlckRlcHRoLFxuICAgICAgICB0aW1lU2hpZnRCdWZmZXJEZXB0aCA9IF9hdHRyaWJ1dGVzJHRpbWVTaGlmdCA9PT0gdm9pZCAwID8gSW5maW5pdHkgOiBfYXR0cmlidXRlcyR0aW1lU2hpZnQ7XG4gICAgdmFyIGVuZE51bWJlciA9IHBhcnNlRW5kTnVtYmVyKGF0dHJpYnV0ZXMuZW5kTnVtYmVyKTsgLy8gY2xpZW50T2Zmc2V0IGlzIHBhc3NlZCBpbiBhdCB0aGUgdG9wIGxldmVsIG9mIG1wZC1wYXJzZXIgYW5kIGlzIGFuIG9mZnNldCBjYWxjdWxhdGVkXG4gICAgLy8gYWZ0ZXIgcmV0cmlldmluZyBVVEMgc2VydmVyIHRpbWUuXG5cbiAgICB2YXIgbm93ID0gKE5PVyArIGNsaWVudE9mZnNldCkgLyAxMDAwOyAvLyBXQyBzdGFuZHMgZm9yIFdhbGwgQ2xvY2suXG4gICAgLy8gQ29udmVydCB0aGUgcGVyaW9kIHN0YXJ0IHRpbWUgdG8gRVBPQ0guXG5cbiAgICB2YXIgcGVyaW9kU3RhcnRXQyA9IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSArIHBlcmlvZFN0YXJ0OyAvLyBQZXJpb2QgZW5kIGluIEVQT0NIIGlzIG1hbmlmZXN0J3MgcmV0cmlldmFsIHRpbWUgKyB0aW1lIHVudGlsIG5leHQgdXBkYXRlLlxuXG4gICAgdmFyIHBlcmlvZEVuZFdDID0gbm93ICsgbWluaW11bVVwZGF0ZVBlcmlvZDtcbiAgICB2YXIgcGVyaW9kRHVyYXRpb24gPSBwZXJpb2RFbmRXQyAtIHBlcmlvZFN0YXJ0V0M7XG4gICAgdmFyIHNlZ21lbnRDb3VudCA9IE1hdGguY2VpbChwZXJpb2REdXJhdGlvbiAqIHRpbWVzY2FsZSAvIGR1cmF0aW9uKTtcbiAgICB2YXIgYXZhaWxhYmxlU3RhcnQgPSBNYXRoLmZsb29yKChub3cgLSBwZXJpb2RTdGFydFdDIC0gdGltZVNoaWZ0QnVmZmVyRGVwdGgpICogdGltZXNjYWxlIC8gZHVyYXRpb24pO1xuICAgIHZhciBhdmFpbGFibGVFbmQgPSBNYXRoLmZsb29yKChub3cgLSBwZXJpb2RTdGFydFdDKSAqIHRpbWVzY2FsZSAvIGR1cmF0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IE1hdGgubWF4KDAsIGF2YWlsYWJsZVN0YXJ0KSxcbiAgICAgIGVuZDogdHlwZW9mIGVuZE51bWJlciA9PT0gJ251bWJlcicgPyBlbmROdW1iZXIgOiBNYXRoLm1pbihzZWdtZW50Q291bnQsIGF2YWlsYWJsZUVuZClcbiAgICB9O1xuICB9XG59O1xuLyoqXG4gKiBNYXBzIGEgcmFuZ2Ugb2YgbnVtYmVycyB0byBvYmplY3RzIHdpdGggaW5mb3JtYXRpb24gbmVlZGVkIHRvIGJ1aWxkIHRoZSBjb3JyZXNwb25kaW5nXG4gKiBzZWdtZW50IGxpc3RcbiAqXG4gKiBAbmFtZSB0b1NlZ21lbnRzQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICogICAgICAgIE51bWJlciBvZiB0aGUgc2VnbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiAgICAgICAgSW5kZXggb2YgdGhlIG51bWJlciBpbiB0aGUgcmFuZ2UgbGlzdFxuICogQHJldHVybiB7eyBudW1iZXI6IE51bWJlciwgZHVyYXRpb246IE51bWJlciwgdGltZWxpbmU6IE51bWJlciwgdGltZTogTnVtYmVyIH19XG4gKiAgICAgICAgIE9iamVjdCB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgYSByYW5nZSBvZiBudW1iZXJzIHRvXG4gKiBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gYnVpbGQgdGhlIHNlZ21lbnQgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIEluaGVyaXRlZCBNUEQgYXR0cmlidXRlc1xuICogQHJldHVybiB7dG9TZWdtZW50c0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG52YXIgdG9TZWdtZW50cyA9IGZ1bmN0aW9uIHRvU2VnbWVudHMoYXR0cmlidXRlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKG51bWJlcikge1xuICAgIHZhciBkdXJhdGlvbiA9IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgICAgIF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTMgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSxcbiAgICAgICAgdGltZXNjYWxlID0gX2F0dHJpYnV0ZXMkdGltZXNjYWxlMyA9PT0gdm9pZCAwID8gMSA6IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTMsXG4gICAgICAgIHBlcmlvZFN0YXJ0ID0gYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICAgICAgX2F0dHJpYnV0ZXMkc3RhcnROdW1iID0gYXR0cmlidXRlcy5zdGFydE51bWJlcixcbiAgICAgICAgc3RhcnROdW1iZXIgPSBfYXR0cmlidXRlcyRzdGFydE51bWIgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyRzdGFydE51bWI7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcjogc3RhcnROdW1iZXIgKyBudW1iZXIsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyB0aW1lc2NhbGUsXG4gICAgICB0aW1lbGluZTogcGVyaW9kU3RhcnQsXG4gICAgICB0aW1lOiBudW1iZXIgKiBkdXJhdGlvblxuICAgIH07XG4gIH07XG59O1xuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm8gdXNlZCBmb3JcbiAqIGJ1aWxkaW5nIHRoZSBsaXN0IG9mIHNlZ21lbnRzLiBUaGlzIHVzZXMgdGhlIEBkdXJhdGlvbiBhdHRyaWJ1dGUgc3BlY2lmaWVkXG4gKiBpbiB0aGUgTVBEIG1hbmlmZXN0IHRvIGRlcml2ZSB0aGUgcmFuZ2Ugb2Ygc2VnbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBJbmhlcml0ZWQgTVBEIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge3tudW1iZXI6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgdGltZTogbnVtYmVyLCB0aW1lbGluZTogbnVtYmVyfVtdfVxuICogICAgICAgICBMaXN0IG9mIE9iamVjdHMgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cbnZhciBwYXJzZUJ5RHVyYXRpb24gPSBmdW5jdGlvbiBwYXJzZUJ5RHVyYXRpb24oYXR0cmlidXRlcykge1xuICB2YXIgdHlwZSA9IGF0dHJpYnV0ZXMudHlwZSxcbiAgICAgIGR1cmF0aW9uID0gYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICAgIF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTQgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSxcbiAgICAgIHRpbWVzY2FsZSA9IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTQgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyR0aW1lc2NhbGU0LFxuICAgICAgcGVyaW9kRHVyYXRpb24gPSBhdHRyaWJ1dGVzLnBlcmlvZER1cmF0aW9uLFxuICAgICAgc291cmNlRHVyYXRpb24gPSBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uO1xuXG4gIHZhciBfc2VnbWVudFJhbmdlJHR5cGUgPSBzZWdtZW50UmFuZ2VbdHlwZV0oYXR0cmlidXRlcyksXG4gICAgICBzdGFydCA9IF9zZWdtZW50UmFuZ2UkdHlwZS5zdGFydCxcbiAgICAgIGVuZCA9IF9zZWdtZW50UmFuZ2UkdHlwZS5lbmQ7XG5cbiAgdmFyIHNlZ21lbnRzID0gcmFuZ2Uoc3RhcnQsIGVuZCkubWFwKHRvU2VnbWVudHMoYXR0cmlidXRlcykpO1xuXG4gIGlmICh0eXBlID09PSAnc3RhdGljJykge1xuICAgIHZhciBpbmRleCA9IHNlZ21lbnRzLmxlbmd0aCAtIDE7IC8vIHNlY3Rpb24gaXMgZWl0aGVyIGEgcGVyaW9kIG9yIHRoZSBmdWxsIHNvdXJjZVxuXG4gICAgdmFyIHNlY3Rpb25EdXJhdGlvbiA9IHR5cGVvZiBwZXJpb2REdXJhdGlvbiA9PT0gJ251bWJlcicgPyBwZXJpb2REdXJhdGlvbiA6IHNvdXJjZUR1cmF0aW9uOyAvLyBmaW5hbCBzZWdtZW50IG1heSBiZSBsZXNzIHRoYW4gZnVsbCBzZWdtZW50IGR1cmF0aW9uXG5cbiAgICBzZWdtZW50c1tpbmRleF0uZHVyYXRpb24gPSBzZWN0aW9uRHVyYXRpb24gLSBkdXJhdGlvbiAvIHRpbWVzY2FsZSAqIGluZGV4O1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzO1xufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIFNlZ21lbnRCYXNlIGludG8gYSBzZXQgb2Ygc2VnbWVudHMuXG4gKiAoREFTSCBTUEVDIFNlY3Rpb24gNS4zLjkuMy4yKSBjb250YWlucyBhIHNldCBvZiA8U2VnbWVudFVSTD4gbm9kZXMuICBFYWNoXG4gKiBub2RlIHNob3VsZCBiZSB0cmFuc2xhdGVkIGludG8gc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgbmFtZXMgYXMga2V5c1xuICogQHJldHVybiB7T2JqZWN0LjxBcnJheT59IGxpc3Qgb2Ygc2VnbWVudHNcbiAqL1xuXG52YXIgc2VnbWVudHNGcm9tQmFzZSA9IGZ1bmN0aW9uIHNlZ21lbnRzRnJvbUJhc2UoYXR0cmlidXRlcykge1xuICB2YXIgYmFzZVVybCA9IGF0dHJpYnV0ZXMuYmFzZVVybCxcbiAgICAgIF9hdHRyaWJ1dGVzJGluaXRpYWxpeiA9IGF0dHJpYnV0ZXMuaW5pdGlhbGl6YXRpb24sXG4gICAgICBpbml0aWFsaXphdGlvbiA9IF9hdHRyaWJ1dGVzJGluaXRpYWxpeiA9PT0gdm9pZCAwID8ge30gOiBfYXR0cmlidXRlcyRpbml0aWFsaXosXG4gICAgICBzb3VyY2VEdXJhdGlvbiA9IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb24sXG4gICAgICBfYXR0cmlidXRlcyRpbmRleFJhbmcgPSBhdHRyaWJ1dGVzLmluZGV4UmFuZ2UsXG4gICAgICBpbmRleFJhbmdlID0gX2F0dHJpYnV0ZXMkaW5kZXhSYW5nID09PSB2b2lkIDAgPyAnJyA6IF9hdHRyaWJ1dGVzJGluZGV4UmFuZyxcbiAgICAgIHBlcmlvZFN0YXJ0ID0gYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICAgIHByZXNlbnRhdGlvblRpbWUgPSBhdHRyaWJ1dGVzLnByZXNlbnRhdGlvblRpbWUsXG4gICAgICBfYXR0cmlidXRlcyRudW1iZXIgPSBhdHRyaWJ1dGVzLm51bWJlcixcbiAgICAgIG51bWJlciA9IF9hdHRyaWJ1dGVzJG51bWJlciA9PT0gdm9pZCAwID8gMCA6IF9hdHRyaWJ1dGVzJG51bWJlcixcbiAgICAgIGR1cmF0aW9uID0gYXR0cmlidXRlcy5kdXJhdGlvbjsgLy8gYmFzZSB1cmwgaXMgcmVxdWlyZWQgZm9yIFNlZ21lbnRCYXNlIHRvIHdvcmssIHBlciBzcGVjIChTZWN0aW9uIDUuMy45LjIuMSlcblxuICBpZiAoIWJhc2VVcmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLk5PX0JBU0VfVVJMKTtcbiAgfVxuXG4gIHZhciBpbml0U2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmw6IGJhc2VVcmwsXG4gICAgc291cmNlOiBpbml0aWFsaXphdGlvbi5zb3VyY2VVUkwsXG4gICAgcmFuZ2U6IGluaXRpYWxpemF0aW9uLnJhbmdlXG4gIH0pO1xuICB2YXIgc2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmw6IGJhc2VVcmwsXG4gICAgc291cmNlOiBiYXNlVXJsLFxuICAgIGluZGV4UmFuZ2U6IGluZGV4UmFuZ2VcbiAgfSk7XG4gIHNlZ21lbnQubWFwID0gaW5pdFNlZ21lbnQ7IC8vIElmIHRoZXJlIGlzIGEgZHVyYXRpb24sIHVzZSBpdCwgb3RoZXJ3aXNlIHVzZSB0aGUgZ2l2ZW4gZHVyYXRpb24gb2YgdGhlIHNvdXJjZVxuICAvLyAoc2luY2UgU2VnbWVudEJhc2UgaXMgb25seSBmb3Igb25lIHRvdGFsIHNlZ21lbnQpXG5cbiAgaWYgKGR1cmF0aW9uKSB7XG4gICAgdmFyIHNlZ21lbnRUaW1lSW5mbyA9IHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKTtcblxuICAgIGlmIChzZWdtZW50VGltZUluZm8ubGVuZ3RoKSB7XG4gICAgICBzZWdtZW50LmR1cmF0aW9uID0gc2VnbWVudFRpbWVJbmZvWzBdLmR1cmF0aW9uO1xuICAgICAgc2VnbWVudC50aW1lbGluZSA9IHNlZ21lbnRUaW1lSW5mb1swXS50aW1lbGluZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc291cmNlRHVyYXRpb24pIHtcbiAgICBzZWdtZW50LmR1cmF0aW9uID0gc291cmNlRHVyYXRpb247XG4gICAgc2VnbWVudC50aW1lbGluZSA9IHBlcmlvZFN0YXJ0O1xuICB9IC8vIElmIHByZXNlbnRhdGlvbiB0aW1lIGlzIHByb3ZpZGVkLCB0aGVzZSBzZWdtZW50cyBhcmUgYmVpbmcgZ2VuZXJhdGVkIGJ5IFNJRFhcbiAgLy8gcmVmZXJlbmNlcywgYW5kIHNob3VsZCB1c2UgdGhlIHRpbWUgcHJvdmlkZWQuIEZvciB0aGUgZ2VuZXJhbCBjYXNlIG9mIFNlZ21lbnRCYXNlLFxuICAvLyB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgc2VnbWVudCBpbiB0aGUgcGVyaW9kLCBzbyBpdHMgcHJlc2VudGF0aW9uIHRpbWUgaXMgdGhlIHNhbWVcbiAgLy8gYXMgaXRzIHBlcmlvZCBzdGFydC5cblxuXG4gIHNlZ21lbnQucHJlc2VudGF0aW9uVGltZSA9IHByZXNlbnRhdGlvblRpbWUgfHwgcGVyaW9kU3RhcnQ7XG4gIHNlZ21lbnQubnVtYmVyID0gbnVtYmVyO1xuICByZXR1cm4gW3NlZ21lbnRdO1xufTtcbi8qKlxuICogR2l2ZW4gYSBwbGF5bGlzdCwgYSBzaWR4IGJveCwgYW5kIGEgYmFzZVVybCwgdXBkYXRlIHRoZSBzZWdtZW50IGxpc3Qgb2YgdGhlIHBsYXlsaXN0XG4gKiBhY2NvcmRpbmcgdG8gdGhlIHNpZHggaW5mb3JtYXRpb24gZ2l2ZW4uXG4gKlxuICogcGxheWxpc3Quc2lkeCBoYXMgbWV0YWRhZGF0YSBhYm91dCB0aGUgc2lkeCB3aGVyZS1hcyB0aGUgc2lkeCBwYXJhbVxuICogaXMgdGhlIHBhcnNlZCBzaWR4IGJveCBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBsYXlsaXN0IHRoZSBwbGF5bGlzdCB0byB1cGRhdGUgdGhlIHNpZHggaW5mb3JtYXRpb24gZm9yXG4gKiBAcGFyYW0ge09iamVjdH0gc2lkeCB0aGUgcGFyc2VkIHNpZHggYm94XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwbGF5bGlzdCBvYmplY3Qgd2l0aCB0aGUgdXBkYXRlZCBzaWR4IGluZm9ybWF0aW9uXG4gKi9cblxudmFyIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QkMSA9IGZ1bmN0aW9uIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QocGxheWxpc3QsIHNpZHgsIGJhc2VVcmwpIHtcbiAgLy8gUmV0YWluIGluaXQgc2VnbWVudCBpbmZvcm1hdGlvblxuICB2YXIgaW5pdFNlZ21lbnQgPSBwbGF5bGlzdC5zaWR4Lm1hcCA/IHBsYXlsaXN0LnNpZHgubWFwIDogbnVsbDsgLy8gUmV0YWluIHNvdXJjZSBkdXJhdGlvbiBmcm9tIGluaXRpYWwgbWFpbiBtYW5pZmVzdCBwYXJzaW5nXG5cbiAgdmFyIHNvdXJjZUR1cmF0aW9uID0gcGxheWxpc3Quc2lkeC5kdXJhdGlvbjsgLy8gUmV0YWluIHNvdXJjZSB0aW1lbGluZVxuXG4gIHZhciB0aW1lbGluZSA9IHBsYXlsaXN0LnRpbWVsaW5lIHx8IDA7XG4gIHZhciBzaWR4Qnl0ZVJhbmdlID0gcGxheWxpc3Quc2lkeC5ieXRlcmFuZ2U7XG4gIHZhciBzaWR4RW5kID0gc2lkeEJ5dGVSYW5nZS5vZmZzZXQgKyBzaWR4Qnl0ZVJhbmdlLmxlbmd0aDsgLy8gUmV0YWluIHRpbWVzY2FsZSBvZiB0aGUgcGFyc2VkIHNpZHhcblxuICB2YXIgdGltZXNjYWxlID0gc2lkeC50aW1lc2NhbGU7IC8vIHJlZmVyZW5jZVR5cGUgMSByZWZlcnMgdG8gb3RoZXIgc2lkeCBib3hlc1xuXG4gIHZhciBtZWRpYVJlZmVyZW5jZXMgPSBzaWR4LnJlZmVyZW5jZXMuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgcmV0dXJuIHIucmVmZXJlbmNlVHlwZSAhPT0gMTtcbiAgfSk7XG4gIHZhciBzZWdtZW50cyA9IFtdO1xuICB2YXIgdHlwZSA9IHBsYXlsaXN0LmVuZExpc3QgPyAnc3RhdGljJyA6ICdkeW5hbWljJztcbiAgdmFyIHBlcmlvZFN0YXJ0ID0gcGxheWxpc3Quc2lkeC50aW1lbGluZTtcbiAgdmFyIHByZXNlbnRhdGlvblRpbWUgPSBwZXJpb2RTdGFydDtcbiAgdmFyIG51bWJlciA9IHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgfHwgMDsgLy8gZmlyc3RPZmZzZXQgaXMgdGhlIG9mZnNldCBmcm9tIHRoZSBlbmQgb2YgdGhlIHNpZHggYm94XG5cbiAgdmFyIHN0YXJ0SW5kZXg7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gIGlmICh0eXBlb2Ygc2lkeC5maXJzdE9mZnNldCA9PT0gJ2JpZ2ludCcpIHtcbiAgICBzdGFydEluZGV4ID0gd2luZG93LkJpZ0ludChzaWR4RW5kKSArIHNpZHguZmlyc3RPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnRJbmRleCA9IHNpZHhFbmQgKyBzaWR4LmZpcnN0T2Zmc2V0O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYVJlZmVyZW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gc2lkeC5yZWZlcmVuY2VzW2ldOyAvLyBzaXplIG9mIHRoZSByZWZlcmVuY2VkIChzdWIpc2VnbWVudFxuXG4gICAgdmFyIHNpemUgPSByZWZlcmVuY2UucmVmZXJlbmNlZFNpemU7IC8vIGR1cmF0aW9uIG9mIHRoZSByZWZlcmVuY2VkIChzdWIpc2VnbWVudCwgaW4gIHRoZSAgdGltZXNjYWxlXG4gICAgLy8gdGhpcyB3aWxsIGJlIGNvbnZlcnRlZCB0byBzZWNvbmRzIHdoZW4gZ2VuZXJhdGluZyBzZWdtZW50c1xuXG4gICAgdmFyIGR1cmF0aW9uID0gcmVmZXJlbmNlLnN1YnNlZ21lbnREdXJhdGlvbjsgLy8gc2hvdWxkIGJlIGFuIGluY2x1c2l2ZSByYW5nZVxuXG4gICAgdmFyIGVuZEluZGV4ID0gdm9pZCAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIGlmICh0eXBlb2Ygc3RhcnRJbmRleCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHdpbmRvdy5CaWdJbnQoc2l6ZSkgLSB3aW5kb3cuQmlnSW50KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBzaXplIC0gMTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXhSYW5nZSA9IHN0YXJ0SW5kZXggKyBcIi1cIiArIGVuZEluZGV4O1xuICAgIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICAgYmFzZVVybDogYmFzZVVybCxcbiAgICAgIHRpbWVzY2FsZTogdGltZXNjYWxlLFxuICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgcGVyaW9kU3RhcnQ6IHBlcmlvZFN0YXJ0LFxuICAgICAgcHJlc2VudGF0aW9uVGltZTogcHJlc2VudGF0aW9uVGltZSxcbiAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgc291cmNlRHVyYXRpb246IHNvdXJjZUR1cmF0aW9uLFxuICAgICAgaW5kZXhSYW5nZTogaW5kZXhSYW5nZSxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9O1xuICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNGcm9tQmFzZShhdHRyaWJ1dGVzKVswXTtcblxuICAgIGlmIChpbml0U2VnbWVudCkge1xuICAgICAgc2VnbWVudC5tYXAgPSBpbml0U2VnbWVudDtcbiAgICB9XG5cbiAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuXG4gICAgaWYgKHR5cGVvZiBzdGFydEluZGV4ID09PSAnYmlnaW50Jykge1xuICAgICAgc3RhcnRJbmRleCArPSB3aW5kb3cuQmlnSW50KHNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEluZGV4ICs9IHNpemU7XG4gICAgfVxuXG4gICAgcHJlc2VudGF0aW9uVGltZSArPSBkdXJhdGlvbiAvIHRpbWVzY2FsZTtcbiAgICBudW1iZXIrKztcbiAgfVxuXG4gIHBsYXlsaXN0LnNlZ21lbnRzID0gc2VnbWVudHM7XG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG5cbnZhciBTVVBQT1JURURfTUVESUFfVFlQRVMgPSBbJ0FVRElPJywgJ1NVQlRJVExFUyddOyAvLyBhbGxvdyBvbmUgNjBmcHMgZnJhbWUgYXMgbGVuaWVuY3kgKGFyYml0cmFyaWx5IGNob3NlbilcblxudmFyIFRJTUVfRlVER0UgPSAxIC8gNjA7XG4vKipcbiAqIEdpdmVuIGEgbGlzdCBvZiB0aW1lbGluZVN0YXJ0cywgY29tYmluZXMsIGRlZHVwZXMsIGFuZCBzb3J0cyB0aGVtLlxuICpcbiAqIEBwYXJhbSB7VGltZWxpbmVTdGFydFtdfSB0aW1lbGluZVN0YXJ0cyAtIGxpc3Qgb2YgdGltZWxpbmUgc3RhcnRzXG4gKlxuICogQHJldHVybiB7VGltZWxpbmVTdGFydFtdfSB0aGUgY29tYmluZWQgYW5kIGRlZHVwZWQgdGltZWxpbmUgc3RhcnRzXG4gKi9cblxudmFyIGdldFVuaXF1ZVRpbWVsaW5lU3RhcnRzID0gZnVuY3Rpb24gZ2V0VW5pcXVlVGltZWxpbmVTdGFydHModGltZWxpbmVTdGFydHMpIHtcbiAgcmV0dXJuIHVuaW9uKHRpbWVsaW5lU3RhcnRzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0aW1lbGluZSA9IF9yZWYudGltZWxpbmU7XG4gICAgcmV0dXJuIHRpbWVsaW5lO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEudGltZWxpbmUgPiBiLnRpbWVsaW5lID8gMSA6IC0xO1xuICB9KTtcbn07XG4vKipcbiAqIEZpbmRzIHRoZSBwbGF5bGlzdCB3aXRoIHRoZSBtYXRjaGluZyBOQU1FIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwbGF5bGlzdHMgLSBwbGF5bGlzdHMgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIE5BTUUgYXR0cmlidXRlIHRvIHNlYXJjaCBmb3JcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH0gdGhlIG1hdGNoaW5nIHBsYXlsaXN0IG9iamVjdCwgb3IgbnVsbFxuICovXG5cbnZhciBmaW5kUGxheWxpc3RXaXRoTmFtZSA9IGZ1bmN0aW9uIGZpbmRQbGF5bGlzdFdpdGhOYW1lKHBsYXlsaXN0cywgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYXlsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwbGF5bGlzdHNbaV0uYXR0cmlidXRlcy5OQU1FID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gcGxheWxpc3RzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogR2V0cyBhIGZsYXR0ZW5lZCBhcnJheSBvZiBtZWRpYSBncm91cCBwbGF5bGlzdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IC0gdGhlIG1haW4gbWFuaWZlc3Qgb2JqZWN0XG4gKlxuICogQHJldHVybiB7QXJyYXl9IHRoZSBtZWRpYSBncm91cCBwbGF5bGlzdHNcbiAqL1xuXG52YXIgZ2V0TWVkaWFHcm91cFBsYXlsaXN0cyA9IGZ1bmN0aW9uIGdldE1lZGlhR3JvdXBQbGF5bGlzdHMobWFuaWZlc3QpIHtcbiAgdmFyIG1lZGlhR3JvdXBQbGF5bGlzdHMgPSBbXTtcbiAgZm9yRWFjaE1lZGlhR3JvdXAobWFuaWZlc3QsIFNVUFBPUlRFRF9NRURJQV9UWVBFUywgZnVuY3Rpb24gKHByb3BlcnRpZXMsIHR5cGUsIGdyb3VwLCBsYWJlbCkge1xuICAgIG1lZGlhR3JvdXBQbGF5bGlzdHMgPSBtZWRpYUdyb3VwUGxheWxpc3RzLmNvbmNhdChwcm9wZXJ0aWVzLnBsYXlsaXN0cyB8fCBbXSk7XG4gIH0pO1xuICByZXR1cm4gbWVkaWFHcm91cFBsYXlsaXN0cztcbn07XG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBsYXlsaXN0J3MgbWVkaWEgc2VxdWVuY2UgbnVtYmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gb3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcucGxheWxpc3QgLSB0aGUgcGxheWxpc3QgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLm1lZGlhU2VxdWVuY2UgLSB0aGUgbWVkaWFTZXF1ZW5jZSBudW1iZXIgdG8gc3RhcnQgd2l0aFxuICovXG5cbnZhciB1cGRhdGVNZWRpYVNlcXVlbmNlRm9yUGxheWxpc3QgPSBmdW5jdGlvbiB1cGRhdGVNZWRpYVNlcXVlbmNlRm9yUGxheWxpc3QoX3JlZjIpIHtcbiAgdmFyIHBsYXlsaXN0ID0gX3JlZjIucGxheWxpc3QsXG4gICAgICBtZWRpYVNlcXVlbmNlID0gX3JlZjIubWVkaWFTZXF1ZW5jZTtcbiAgcGxheWxpc3QubWVkaWFTZXF1ZW5jZSA9IG1lZGlhU2VxdWVuY2U7XG4gIHBsYXlsaXN0LnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQsIGluZGV4KSB7XG4gICAgc2VnbWVudC5udW1iZXIgPSBwbGF5bGlzdC5tZWRpYVNlcXVlbmNlICsgaW5kZXg7XG4gIH0pO1xufTtcbi8qKlxuICogVXBkYXRlcyB0aGUgbWVkaWEgYW5kIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgbnVtYmVycyBvZiBuZXdQbGF5bGlzdHMgZ2l2ZW4gb2xkUGxheWxpc3RzXG4gKiBhbmQgYSBjb21wbGV0ZSBsaXN0IG9mIHRpbWVsaW5lIHN0YXJ0cy5cbiAqXG4gKiBJZiBubyBtYXRjaGluZyBwbGF5bGlzdCBpcyBmb3VuZCwgb25seSB0aGUgZGlzY29udGludWl0eSBzZXF1ZW5jZSBudW1iZXIgb2YgdGhlIHBsYXlsaXN0XG4gKiB3aWxsIGJlIHVwZGF0ZWQuXG4gKlxuICogU2luY2UgZWFybHkgYXZhaWxhYmxlIHRpbWVsaW5lcyBhcmUgbm90IHN1cHBvcnRlZCwgYXQgbGVhc3Qgb25lIHNlZ21lbnQgbXVzdCBiZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBvcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3RbXX0gb2xkUGxheWxpc3RzIC0gdGhlIG9sZCBwbGF5bGlzdHMgdG8gdXNlIGFzIGEgcmVmZXJlbmNlXG4gKiBAcGFyYW0ge09iamVjdFtdfSBuZXdQbGF5bGlzdHMgLSB0aGUgbmV3IHBsYXlsaXN0cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lbGluZVN0YXJ0cyAtIGFsbCB0aW1lbGluZVN0YXJ0cyBzZWVuIGluIHRoZSBzdHJlYW0gdG8gdGhpcyBwb2ludFxuICovXG5cbnZhciB1cGRhdGVTZXF1ZW5jZU51bWJlcnMgPSBmdW5jdGlvbiB1cGRhdGVTZXF1ZW5jZU51bWJlcnMoX3JlZjMpIHtcbiAgdmFyIG9sZFBsYXlsaXN0cyA9IF9yZWYzLm9sZFBsYXlsaXN0cyxcbiAgICAgIG5ld1BsYXlsaXN0cyA9IF9yZWYzLm5ld1BsYXlsaXN0cyxcbiAgICAgIHRpbWVsaW5lU3RhcnRzID0gX3JlZjMudGltZWxpbmVTdGFydHM7XG4gIG5ld1BsYXlsaXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5bGlzdCkge1xuICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZSA9IGZpbmRJbmRleCh0aW1lbGluZVN0YXJ0cywgZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgdGltZWxpbmUgPSBfcmVmNC50aW1lbGluZTtcbiAgICAgIHJldHVybiB0aW1lbGluZSA9PT0gcGxheWxpc3QudGltZWxpbmU7XG4gICAgfSk7IC8vIFBsYXlsaXN0cyBOQU1FcyBjb21lIGZyb20gREFTSCBSZXByZXNlbnRhdGlvbiBJRHMsIHdoaWNoIGFyZSBtYW5kYXRvcnlcbiAgICAvLyAoc2VlIElTT18yMzAwOS0xLTIwMTIgNS4zLjUuMikuXG4gICAgLy9cbiAgICAvLyBJZiB0aGUgc2FtZSBSZXByZXNlbnRhdGlvbiBleGlzdGVkIGluIGEgcHJpb3IgUGVyaW9kLCBpdCB3aWxsIHJldGFpbiB0aGUgc2FtZSBOQU1FLlxuXG4gICAgdmFyIG9sZFBsYXlsaXN0ID0gZmluZFBsYXlsaXN0V2l0aE5hbWUob2xkUGxheWxpc3RzLCBwbGF5bGlzdC5hdHRyaWJ1dGVzLk5BTUUpO1xuXG4gICAgaWYgKCFvbGRQbGF5bGlzdCkge1xuICAgICAgLy8gU2luY2UgdGhpcyBpcyBhIG5ldyBwbGF5bGlzdCwgdGhlIG1lZGlhIHNlcXVlbmNlIHZhbHVlcyBjYW4gc3RhcnQgZnJvbSAwIHdpdGhvdXRcbiAgICAgIC8vIGNvbnNlcXVlbmNlLlxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVE9ETyBiZXR0ZXIgc3VwcG9ydCBmb3IgbGl2ZSBTSURYXG4gICAgLy9cbiAgICAvLyBBcyBvZiB0aGlzIHdyaXRpbmcsIG1wZC1wYXJzZXIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBlcmlvZCBTSURYIChpbiBsaXZlIG9yIFZPRCkuXG4gICAgLy8gVGhpcyBpcyBldmlkZW50IGJ5IGEgcGxheWxpc3Qgb25seSBoYXZpbmcgYSBzaW5nbGUgU0lEWCByZWZlcmVuY2UuIEluIGEgbXVsdGlwZXJpb2RcbiAgICAvLyBwbGF5bGlzdCB0aGVyZSB3b3VsZCBuZWVkIHRvIGJlIG11bHRpcGxlIFNJRFggcmVmZXJlbmNlcy4gSW4gYWRkaXRpb24sIGxpdmUgU0lEWCBpc1xuICAgIC8vIG5vdCBzdXBwb3J0ZWQgd2hlbiB0aGUgU0lEWCBwcm9wZXJ0aWVzIGNoYW5nZSBvbiByZWZyZXNoZXMuXG4gICAgLy9cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCBpZiBzdXBwb3J0IG5lZWRzIHRvIGJlIGFkZGVkLCB0aGUgbWVyZ2luZyBsb2dpYyBoZXJlIGNhbiBiZSBjYWxsZWRcbiAgICAvLyBhZnRlciBTSURYIHJlZmVyZW5jZXMgYXJlIHJlc29sdmVkLiBGb3Igbm93LCBleGl0IGVhcmx5IHRvIHByZXZlbnQgZXhjZXB0aW9ucyBiZWluZ1xuICAgIC8vIHRocm93biBkdWUgdG8gdW5kZWZpbmVkIHJlZmVyZW5jZXMuXG5cblxuICAgIGlmIChwbGF5bGlzdC5zaWR4KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTaW5jZSB3ZSBkb24ndCB5ZXQgc3VwcG9ydCBlYXJseSBhdmFpbGFibGUgdGltZWxpbmVzLCB3ZSBkb24ndCBuZWVkIHRvIHN1cHBvcnRcbiAgICAvLyBwbGF5bGlzdHMgd2l0aCBubyBzZWdtZW50cy5cblxuXG4gICAgdmFyIGZpcnN0TmV3U2VnbWVudCA9IHBsYXlsaXN0LnNlZ21lbnRzWzBdO1xuICAgIHZhciBvbGRNYXRjaGluZ1NlZ21lbnRJbmRleCA9IGZpbmRJbmRleChvbGRQbGF5bGlzdC5zZWdtZW50cywgZnVuY3Rpb24gKG9sZFNlZ21lbnQpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhvbGRTZWdtZW50LnByZXNlbnRhdGlvblRpbWUgLSBmaXJzdE5ld1NlZ21lbnQucHJlc2VudGF0aW9uVGltZSkgPCBUSU1FX0ZVREdFO1xuICAgIH0pOyAvLyBObyBtYXRjaGluZyBzZWdtZW50IGZyb20gdGhlIG9sZCBwbGF5bGlzdCBtZWFucyB0aGUgZW50aXJlIHBsYXlsaXN0IHdhcyByZWZyZXNoZWQuXG4gICAgLy8gSW4gdGhpcyBjYXNlIHRoZSBtZWRpYSBzZXF1ZW5jZSBzaG91bGQgYWNjb3VudCBmb3IgdGhpcyB1cGRhdGUsIGFuZCB0aGUgbmV3IHNlZ21lbnRzXG4gICAgLy8gc2hvdWxkIGJlIG1hcmtlZCBhcyBkaXNjb250aW51b3VzIGZyb20gdGhlIHByaW9yIGNvbnRlbnQsIHNpbmNlIHRoZSBsYXN0IHByaW9yXG4gICAgLy8gdGltZWxpbmUgd2FzIHJlbW92ZWQuXG5cbiAgICBpZiAob2xkTWF0Y2hpbmdTZWdtZW50SW5kZXggPT09IC0xKSB7XG4gICAgICB1cGRhdGVNZWRpYVNlcXVlbmNlRm9yUGxheWxpc3Qoe1xuICAgICAgICBwbGF5bGlzdDogcGxheWxpc3QsXG4gICAgICAgIG1lZGlhU2VxdWVuY2U6IG9sZFBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgKyBvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGhcbiAgICAgIH0pO1xuICAgICAgcGxheWxpc3Quc2VnbWVudHNbMF0uZGlzY29udGludWl0eSA9IHRydWU7XG4gICAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U3RhcnRzLnVuc2hpZnQoMCk7IC8vIE5vIG1hdGNoaW5nIHNlZ21lbnQgZG9lcyBub3QgbmVjZXNzYXJpbHkgbWVhbiB0aGVyZSdzIG1pc3NpbmcgY29udGVudC5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgbmV3IHBsYXlsaXN0J3MgdGltZWxpbmUgaXMgdGhlIHNhbWUgYXMgdGhlIGxhc3Qgc2VlbiBzZWdtZW50J3MgdGltZWxpbmUsXG4gICAgICAvLyB0aGVuIGEgZGlzY29udGludWl0eSBjYW4gYmUgYWRkZWQgdG8gaWRlbnRpZnkgdGhhdCB0aGVyZSdzIHBvdGVudGlhbGx5IG1pc3NpbmdcbiAgICAgIC8vIGNvbnRlbnQuIElmIHRoZXJlJ3Mgbm8gbWlzc2luZyBjb250ZW50LCB0aGUgZGlzY29udGludWl0eSBzaG91bGQgc3RpbGwgYmUgcmF0aGVyXG4gICAgICAvLyBoYXJtbGVzcy4gSXQncyBwb3NzaWJsZSB0aGF0IGlmIHNlZ21lbnQgZHVyYXRpb25zIGFyZSBhY2N1cmF0ZSBlbm91Z2gsIHRoYXQgdGhlXG4gICAgICAvLyBleGlzdGVuY2Ugb2YgYSBnYXAgY2FuIGJlIGRldGVybWluZWQgdXNpbmcgdGhlIHByZXNlbnRhdGlvbiB0aW1lcyBhbmQgZHVyYXRpb25zLFxuICAgICAgLy8gYnV0IGlmIHRoZSBzZWdtZW50IHRpbWluZyBpbmZvIGlzIG9mZiwgaXQgbWF5IGludHJvZHVjZSBtb3JlIHByb2JsZW1zIHRoYW4gc2ltcGx5XG4gICAgICAvLyBhZGRpbmcgdGhlIGRpc2NvbnRpbnVpdHkuXG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIG5ldyBwbGF5bGlzdCdzIHRpbWVsaW5lIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBsYXN0IHNlZW4gc2VnbWVudCdzIHRpbWVsaW5lLFxuICAgICAgLy8gdGhlbiBhIGRpc2NvbnRpbnVpdHkgY2FuIGJlIGFkZGVkIHRvIGlkZW50aWZ5IHRoYXQgdGhpcyBpcyB0aGUgZmlyc3Qgc2VlbiBzZWdtZW50XG4gICAgICAvLyBvZiBhIG5ldyB0aW1lbGluZS4gSG93ZXZlciwgdGhlIGxvZ2ljIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uIHRoYXRcbiAgICAgIC8vIGRldGVybWluZWQgdGhlIGRpc2NvbmludWl0eSBzZXF1ZW5jZSBieSB0aW1lbGluZSBpbmRleCBpcyBub3cgb2ZmIGJ5IG9uZSAodGhlXG4gICAgICAvLyBkaXNjb250aW51aXR5IG9mIHRoZSBuZXdlc3QgdGltZWxpbmUgaGFzbid0IHlldCBmYWxsZW4gb2ZmIHRoZSBtYW5pZmVzdC4uLnNpbmNlXG4gICAgICAvLyB3ZSBhZGRlZCBpdCksIHNvIHRoZSBkaXNjb25pbnVpdHkgc2VxdWVuY2UgbXVzdCBiZSBkZWNyZW1lbnRlZC5cbiAgICAgIC8vXG4gICAgICAvLyBBIHBlcmlvZCBtYXkgYWxzbyBoYXZlIGEgZHVyYXRpb24gb2YgemVybywgc28gdGhlIGNhc2Ugb2Ygbm8gc2VnbWVudHMgaXMgaGFuZGxlZFxuICAgICAgLy8gaGVyZSBldmVuIHRob3VnaCB3ZSBkb24ndCB5ZXQgc3VwcG9ydCBlYXJseSBhdmFpbGFibGUgcGVyaW9kcy5cblxuICAgICAgaWYgKCFvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGggJiYgcGxheWxpc3QudGltZWxpbmUgPiBvbGRQbGF5bGlzdC50aW1lbGluZSB8fCBvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGggJiYgcGxheWxpc3QudGltZWxpbmUgPiBvbGRQbGF5bGlzdC5zZWdtZW50c1tvbGRQbGF5bGlzdC5zZWdtZW50cy5sZW5ndGggLSAxXS50aW1lbGluZSkge1xuICAgICAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U2VxdWVuY2UtLTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgdGhlIGZpcnN0IHNlZ21lbnQgbWF0Y2hlZCB3aXRoIGEgcHJpb3Igc2VnbWVudCBvbiBhIGRpc2NvbnRpbnVpdHkgKGl0J3MgbWF0Y2hpbmdcbiAgICAvLyBvbiB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHBlcmlvZCksIHRoZW4gdGhlIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZSBzaG91bGRuJ3QgYmUgdGhlXG4gICAgLy8gdGltZWxpbmUncyBtYXRjaGluZyBvbmUsIGJ1dCBpbnN0ZWFkIHNob3VsZCBiZSB0aGUgb25lIHByaW9yLCBhbmQgdGhlIGZpcnN0IHNlZ21lbnRcbiAgICAvLyBvZiB0aGUgbmV3IG1hbmlmZXN0IHNob3VsZCBiZSBtYXJrZWQgd2l0aCBhIGRpc2NvbnRpbnVpdHkuXG4gICAgLy9cbiAgICAvLyBUaGUgcmVhc29uIGZvciB0aGlzIHNwZWNpYWwgY2FzZSBpcyB0aGF0IGRpc2NvbnRpbnVpdHkgc2VxdWVuY2Ugc2hvd3MgaG93IG1hbnlcbiAgICAvLyBkaXNjb250aW51aXRpZXMgaGF2ZSBmYWxsZW4gb2ZmIG9mIHRoZSBwbGF5bGlzdCwgYW5kIGRpc2NvbnRpbnVpdGllcyBhcmUgbWFya2VkIG9uXG4gICAgLy8gdGhlIGZpcnN0IHNlZ21lbnQgb2YgYSBuZXcgXCJ0aW1lbGluZS5cIiBCZWNhdXNlIG9mIHRoaXMsIHdoaWxlIERBU0ggd2lsbCByZXRhaW4gdGhhdFxuICAgIC8vIFBlcmlvZCB3aGlsZSB0aGUgXCJ0aW1lbGluZVwiIGV4aXN0cywgSExTIGtlZXBzIHRyYWNrIG9mIGl0IHZpYSB0aGUgZGlzY29udGludWl0eVxuICAgIC8vIHNlcXVlbmNlLCBhbmQgdGhhdCBmaXJzdCBzZWdtZW50IGlzIGFuIGluZGljYXRvciwgYnV0IGNhbiBiZSByZW1vdmVkIGJlZm9yZSB0aGF0XG4gICAgLy8gdGltZWxpbmUgaXMgZ29uZS5cblxuXG4gICAgdmFyIG9sZE1hdGNoaW5nU2VnbWVudCA9IG9sZFBsYXlsaXN0LnNlZ21lbnRzW29sZE1hdGNoaW5nU2VnbWVudEluZGV4XTtcblxuICAgIGlmIChvbGRNYXRjaGluZ1NlZ21lbnQuZGlzY29udGludWl0eSAmJiAhZmlyc3ROZXdTZWdtZW50LmRpc2NvbnRpbnVpdHkpIHtcbiAgICAgIGZpcnN0TmV3U2VnbWVudC5kaXNjb250aW51aXR5ID0gdHJ1ZTtcbiAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTdGFydHMudW5zaGlmdCgwKTtcbiAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZS0tO1xuICAgIH1cblxuICAgIHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdCh7XG4gICAgICBwbGF5bGlzdDogcGxheWxpc3QsXG4gICAgICBtZWRpYVNlcXVlbmNlOiBvbGRQbGF5bGlzdC5zZWdtZW50c1tvbGRNYXRjaGluZ1NlZ21lbnRJbmRleF0ubnVtYmVyXG4gICAgfSk7XG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gYW4gb2xkIHBhcnNlZCBtYW5pZmVzdCBvYmplY3QgYW5kIGEgbmV3IHBhcnNlZCBtYW5pZmVzdCBvYmplY3QsIHVwZGF0ZXMgdGhlXG4gKiBzZXF1ZW5jZSBhbmQgdGltaW5nIHZhbHVlcyB3aXRoaW4gdGhlIG5ldyBtYW5pZmVzdCB0byBlbnN1cmUgdGhhdCBpdCBsaW5lcyB1cCB3aXRoIHRoZVxuICogb2xkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IG9sZE1hbmlmZXN0IC0gdGhlIG9sZCBtYWluIG1hbmlmZXN0IG9iamVjdFxuICogQHBhcmFtIHtBcnJheX0gbmV3TWFuaWZlc3QgLSB0aGUgbmV3IG1haW4gbWFuaWZlc3Qgb2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdXBkYXRlZCBuZXcgbWFuaWZlc3Qgb2JqZWN0XG4gKi9cblxudmFyIHBvc2l0aW9uTWFuaWZlc3RPblRpbWVsaW5lID0gZnVuY3Rpb24gcG9zaXRpb25NYW5pZmVzdE9uVGltZWxpbmUoX3JlZjUpIHtcbiAgdmFyIG9sZE1hbmlmZXN0ID0gX3JlZjUub2xkTWFuaWZlc3QsXG4gICAgICBuZXdNYW5pZmVzdCA9IF9yZWY1Lm5ld01hbmlmZXN0O1xuICAvLyBTdGFydGluZyBmcm9tIHY0LjEuMiBvZiB0aGUgSU9QLCBzZWN0aW9uIDQuNC4zLjMgc3RhdGVzOlxuICAvL1xuICAvLyBcIk1QREBhdmFpbGFiaWxpdHlTdGFydFRpbWUgYW5kIFBlcmlvZEBzdGFydCBzaGFsbCBub3QgYmUgY2hhbmdlZCBvdmVyIE1QRCB1cGRhdGVzLlwiXG4gIC8vXG4gIC8vIFRoaXMgd2FzIGFkZGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0Rhc2gtSW5kdXN0cnktRm9ydW0vREFTSC1JRi1JT1AvaXNzdWVzLzE2MFxuICAvL1xuICAvLyBCZWNhdXNlIG9mIHRoaXMgY2hhbmdlLCBhbmQgdGhlIGRpZmZpY3VsdHkgb2Ygc3VwcG9ydGluZyBwZXJpb2RzIHdpdGggY2hhbmdpbmcgc3RhcnRcbiAgLy8gdGltZXMsIHBlcmlvZHMgd2l0aCBjaGFuZ2luZyBzdGFydCB0aW1lcyBhcmUgbm90IHN1cHBvcnRlZC4gVGhpcyBtYWtlcyB0aGUgbG9naWMgbXVjaFxuICAvLyBzaW1wbGVyLCBzaW5jZSBwZXJpb2RzIHdpdGggdGhlIHNhbWUgc3RhcnQgdGltZSBjYW4gYmUgY29uc2lkZXJyZWQgdGhlIHNhbWUgcGVyaW9kXG4gIC8vIGFjcm9zcyByZWZyZXNoZXMuXG4gIC8vXG4gIC8vIFRvIGdpdmUgYW4gZXhhbXBsZSBhcyB0byB0aGUgZGlmZmljdWx0eSBvZiBoYW5kbGluZyBwZXJpb2RzIHdoZXJlIHRoZSBzdGFydCB0aW1lIG1heVxuICAvLyBjaGFuZ2UsIGlmIGEgc2luZ2xlIHBlcmlvZCBtYW5pZmVzdCBpcyByZWZyZXNoZWQgd2l0aCBhbm90aGVyIG1hbmlmZXN0IHdpdGggYSBzaW5nbGVcbiAgLy8gcGVyaW9kLCBhbmQgYm90aCB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lcyBhcmUgaW5jcmVhc2VkLCB0aGVuIHRoZSBvbmx5IHdheSB0byBkZXRlcm1pbmVcbiAgLy8gaWYgaXQncyBhIG5ldyBwZXJpb2Qgb3IgYW4gb2xkIG9uZSB0aGF0IGhhcyBjaGFuZ2VkIGlzIHRvIGxvb2sgdGhyb3VnaCB0aGUgc2VnbWVudHMgb2ZcbiAgLy8gZWFjaCBwbGF5bGlzdCBhbmQgZGV0ZXJtaW5lIHRoZSBwcmVzZW50YXRpb24gdGltZSBib3VuZHMgdG8gZmluZCBhIG1hdGNoLiBJbiBhZGRpdGlvbixcbiAgLy8gaWYgdGhlIHBlcmlvZCBzdGFydCBjaGFuZ2VkIHRvIGV4Y2VlZCB0aGUgb2xkIHBlcmlvZCBlbmQsIHRoZW4gdGhlcmUgd291bGQgYmUgbm9cbiAgLy8gbWF0Y2gsIGFuZCBpdCB3b3VsZCBub3QgYmUgcG9zc2libGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHJlZnJlc2hlZCBwZXJpb2QgaXMgYSBuZXdcbiAgLy8gb25lIG9yIHRoZSBvbGQgb25lLlxuICB2YXIgb2xkUGxheWxpc3RzID0gb2xkTWFuaWZlc3QucGxheWxpc3RzLmNvbmNhdChnZXRNZWRpYUdyb3VwUGxheWxpc3RzKG9sZE1hbmlmZXN0KSk7XG4gIHZhciBuZXdQbGF5bGlzdHMgPSBuZXdNYW5pZmVzdC5wbGF5bGlzdHMuY29uY2F0KGdldE1lZGlhR3JvdXBQbGF5bGlzdHMobmV3TWFuaWZlc3QpKTsgLy8gU2F2ZSBhbGwgc2VlbiB0aW1lbGluZVN0YXJ0cyB0byB0aGUgbmV3IG1hbmlmZXN0LiBBbHRob3VnaCB0aGlzIHBvdGVudGlhbGx5IG1lYW5zIHRoYXRcbiAgLy8gdGhlcmUncyBhIFwibWVtb3J5IGxlYWtcIiBpbiB0aGF0IGl0IHdpbGwgbmV2ZXIgc3RvcCBncm93aW5nLCBpbiByZWFsaXR5LCBvbmx5IGEgY291cGxlXG4gIC8vIG9mIHByb3BlcnRpZXMgYXJlIHNhdmVkIGZvciBlYWNoIHNlZW4gUGVyaW9kLiBFdmVuIGxvbmcgcnVubmluZyBsaXZlIHN0cmVhbXMgd29uJ3RcbiAgLy8gZ2VuZXJhdGUgdG9vIG1hbnkgUGVyaW9kcywgdW5sZXNzIHRoZSBzdHJlYW0gaXMgd2F0Y2hlZCBmb3IgZGVjYWRlcy4gSW4gdGhlIGZ1dHVyZSxcbiAgLy8gdGhpcyBjYW4gYmUgb3B0aW1pemVkIGJ5IG1hcHBpbmcgdG8gZGlzY29udGludWl0eSBzZXF1ZW5jZSBudW1iZXJzIGZvciBlYWNoIHRpbWVsaW5lLFxuICAvLyBidXQgaXQgbWF5IG5vdCBiZWNvbWUgYW4gaXNzdWUsIGFuZCB0aGUgYWRkaXRpb25hbCBpbmZvIGNhbiBiZSB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cblxuICBuZXdNYW5pZmVzdC50aW1lbGluZVN0YXJ0cyA9IGdldFVuaXF1ZVRpbWVsaW5lU3RhcnRzKFtvbGRNYW5pZmVzdC50aW1lbGluZVN0YXJ0cywgbmV3TWFuaWZlc3QudGltZWxpbmVTdGFydHNdKTtcbiAgdXBkYXRlU2VxdWVuY2VOdW1iZXJzKHtcbiAgICBvbGRQbGF5bGlzdHM6IG9sZFBsYXlsaXN0cyxcbiAgICBuZXdQbGF5bGlzdHM6IG5ld1BsYXlsaXN0cyxcbiAgICB0aW1lbGluZVN0YXJ0czogbmV3TWFuaWZlc3QudGltZWxpbmVTdGFydHNcbiAgfSk7XG4gIHJldHVybiBuZXdNYW5pZmVzdDtcbn07XG5cbnZhciBnZW5lcmF0ZVNpZHhLZXkgPSBmdW5jdGlvbiBnZW5lcmF0ZVNpZHhLZXkoc2lkeCkge1xuICByZXR1cm4gc2lkeCAmJiBzaWR4LnVyaSArICctJyArIGJ5dGVSYW5nZVRvU3RyaW5nKHNpZHguYnl0ZXJhbmdlKTtcbn07XG5cbnZhciBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMgPSBmdW5jdGlvbiBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMocGxheWxpc3RzKSB7XG4gIHZhciBtZXJnZWRQbGF5bGlzdHMgPSB2YWx1ZXMocGxheWxpc3RzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGF5bGlzdCkge1xuICAgIC8vIGFzc3VtaW5nIHBsYXlsaXN0IElEcyBhcmUgdGhlIHNhbWUgYWNyb3NzIHBlcmlvZHNcbiAgICAvLyBUT0RPOiBoYW5kbGUgbXVsdGlwZXJpb2Qgd2hlcmUgcmVwcmVzZW50YXRpb24gc2V0cyBhcmUgbm90IHRoZSBzYW1lXG4gICAgLy8gYWNyb3NzIHBlcmlvZHNcbiAgICB2YXIgbmFtZSA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMuaWQgKyAocGxheWxpc3QuYXR0cmlidXRlcy5sYW5nIHx8ICcnKTtcblxuICAgIGlmICghYWNjW25hbWVdKSB7XG4gICAgICAvLyBGaXJzdCBQZXJpb2RcbiAgICAgIGFjY1tuYW1lXSA9IHBsYXlsaXN0O1xuICAgICAgYWNjW25hbWVdLmF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3Vic2VxdWVudCBQZXJpb2RzXG4gICAgICBpZiAocGxheWxpc3Quc2VnbWVudHMpIHtcbiAgICAgICAgdmFyIF9hY2MkbmFtZSRzZWdtZW50cztcblxuICAgICAgICAvLyBmaXJzdCBzZWdtZW50IG9mIHN1YnNlcXVlbnQgcGVyaW9kcyBzaWduYWwgYSBkaXNjb250aW51aXR5XG4gICAgICAgIGlmIChwbGF5bGlzdC5zZWdtZW50c1swXSkge1xuICAgICAgICAgIHBsYXlsaXN0LnNlZ21lbnRzWzBdLmRpc2NvbnRpbnVpdHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgKF9hY2MkbmFtZSRzZWdtZW50cyA9IGFjY1tuYW1lXS5zZWdtZW50cykucHVzaC5hcHBseShfYWNjJG5hbWUkc2VnbWVudHMsIHBsYXlsaXN0LnNlZ21lbnRzKTtcbiAgICAgIH0gLy8gYnViYmxlIHVwIGNvbnRlbnRQcm90ZWN0aW9uLCB0aGlzIGFzc3VtZXMgYWxsIERSTSBjb250ZW50XG4gICAgICAvLyBoYXMgdGhlIHNhbWUgY29udGVudFByb3RlY3Rpb25cblxuXG4gICAgICBpZiAocGxheWxpc3QuYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbikge1xuICAgICAgICBhY2NbbmFtZV0uYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbiA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWNjW25hbWVdLmF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMucHVzaCh7XG4gICAgICAvLyBBbHRob3VnaCB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBudW1iZXIsIGl0J3MgaW1wb3J0YW50IHRvIGhhdmUgYm90aCB0byBtYWtlIGl0XG4gICAgICAvLyBjb21wYXRpYmxlIHdpdGggSExTIHBvdGVudGlhbGx5IGhhdmluZyBhIHNpbWlsYXIgYXR0cmlidXRlLlxuICAgICAgc3RhcnQ6IHBsYXlsaXN0LmF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgICB0aW1lbGluZTogcGxheWxpc3QuYXR0cmlidXRlcy5wZXJpb2RTdGFydFxuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KSk7XG4gIHJldHVybiBtZXJnZWRQbGF5bGlzdHMubWFwKGZ1bmN0aW9uIChwbGF5bGlzdCkge1xuICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTdGFydHMgPSBmaW5kSW5kZXhlcyhwbGF5bGlzdC5zZWdtZW50cyB8fCBbXSwgJ2Rpc2NvbnRpbnVpdHknKTtcbiAgICByZXR1cm4gcGxheWxpc3Q7XG4gIH0pO1xufTtcblxudmFyIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QgPSBmdW5jdGlvbiBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0KHBsYXlsaXN0LCBzaWR4TWFwcGluZykge1xuICB2YXIgc2lkeEtleSA9IGdlbmVyYXRlU2lkeEtleShwbGF5bGlzdC5zaWR4KTtcbiAgdmFyIHNpZHhNYXRjaCA9IHNpZHhLZXkgJiYgc2lkeE1hcHBpbmdbc2lkeEtleV0gJiYgc2lkeE1hcHBpbmdbc2lkeEtleV0uc2lkeDtcblxuICBpZiAoc2lkeE1hdGNoKSB7XG4gICAgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCQxKHBsYXlsaXN0LCBzaWR4TWF0Y2gsIHBsYXlsaXN0LnNpZHgucmVzb2x2ZWRVcmkpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcbnZhciBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0cyA9IGZ1bmN0aW9uIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3RzKHBsYXlsaXN0cywgc2lkeE1hcHBpbmcpIHtcbiAgaWYgKHNpZHhNYXBwaW5nID09PSB2b2lkIDApIHtcbiAgICBzaWR4TWFwcGluZyA9IHt9O1xuICB9XG5cbiAgaWYgKCFPYmplY3Qua2V5cyhzaWR4TWFwcGluZykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfVxuXG4gIGZvciAodmFyIGkgaW4gcGxheWxpc3RzKSB7XG4gICAgcGxheWxpc3RzW2ldID0gYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChwbGF5bGlzdHNbaV0sIHNpZHhNYXBwaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdHM7XG59O1xudmFyIGZvcm1hdEF1ZGlvUGxheWxpc3QgPSBmdW5jdGlvbiBmb3JtYXRBdWRpb1BsYXlsaXN0KF9yZWYsIGlzQXVkaW9Pbmx5KSB7XG4gIHZhciBfYXR0cmlidXRlcztcblxuICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHNlZ21lbnRzID0gX3JlZi5zZWdtZW50cyxcbiAgICAgIHNpZHggPSBfcmVmLnNpZHgsXG4gICAgICBtZWRpYVNlcXVlbmNlID0gX3JlZi5tZWRpYVNlcXVlbmNlLFxuICAgICAgZGlzY29udGludWl0eVNlcXVlbmNlID0gX3JlZi5kaXNjb250aW51aXR5U2VxdWVuY2UsXG4gICAgICBkaXNjb250aW51aXR5U3RhcnRzID0gX3JlZi5kaXNjb250aW51aXR5U3RhcnRzO1xuICB2YXIgcGxheWxpc3QgPSB7XG4gICAgYXR0cmlidXRlczogKF9hdHRyaWJ1dGVzID0ge1xuICAgICAgTkFNRTogYXR0cmlidXRlcy5pZCxcbiAgICAgIEJBTkRXSURUSDogYXR0cmlidXRlcy5iYW5kd2lkdGgsXG4gICAgICBDT0RFQ1M6IGF0dHJpYnV0ZXMuY29kZWNzXG4gICAgfSwgX2F0dHJpYnV0ZXNbJ1BST0dSQU0tSUQnXSA9IDEsIF9hdHRyaWJ1dGVzKSxcbiAgICB1cmk6ICcnLFxuICAgIGVuZExpc3Q6IGF0dHJpYnV0ZXMudHlwZSA9PT0gJ3N0YXRpYycsXG4gICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgcmVzb2x2ZWRVcmk6ICcnLFxuICAgIHRhcmdldER1cmF0aW9uOiBhdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZTogZGlzY29udGludWl0eVNlcXVlbmNlLFxuICAgIGRpc2NvbnRpbnVpdHlTdGFydHM6IGRpc2NvbnRpbnVpdHlTdGFydHMsXG4gICAgdGltZWxpbmVTdGFydHM6IGF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMsXG4gICAgbWVkaWFTZXF1ZW5jZTogbWVkaWFTZXF1ZW5jZSxcbiAgICBzZWdtZW50czogc2VnbWVudHNcbiAgfTtcblxuICBpZiAoYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbikge1xuICAgIHBsYXlsaXN0LmNvbnRlbnRQcm90ZWN0aW9uID0gYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbjtcbiAgfVxuXG4gIGlmIChzaWR4KSB7XG4gICAgcGxheWxpc3Quc2lkeCA9IHNpZHg7XG4gIH1cblxuICBpZiAoaXNBdWRpb09ubHkpIHtcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzLkFVRElPID0gJ2F1ZGlvJztcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzLlNVQlRJVExFUyA9ICdzdWJzJztcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG52YXIgZm9ybWF0VnR0UGxheWxpc3QgPSBmdW5jdGlvbiBmb3JtYXRWdHRQbGF5bGlzdChfcmVmMikge1xuICB2YXIgX20zdThBdHRyaWJ1dGVzO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcyxcbiAgICAgIHNlZ21lbnRzID0gX3JlZjIuc2VnbWVudHMsXG4gICAgICBtZWRpYVNlcXVlbmNlID0gX3JlZjIubWVkaWFTZXF1ZW5jZSxcbiAgICAgIGRpc2NvbnRpbnVpdHlTdGFydHMgPSBfcmVmMi5kaXNjb250aW51aXR5U3RhcnRzLFxuICAgICAgZGlzY29udGludWl0eVNlcXVlbmNlID0gX3JlZjIuZGlzY29udGludWl0eVNlcXVlbmNlO1xuXG4gIGlmICh0eXBlb2Ygc2VnbWVudHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gdnR0IHRyYWNrcyBtYXkgdXNlIHNpbmdsZSBmaWxlIGluIEJhc2VVUkxcbiAgICBzZWdtZW50cyA9IFt7XG4gICAgICB1cmk6IGF0dHJpYnV0ZXMuYmFzZVVybCxcbiAgICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgcmVzb2x2ZWRVcmk6IGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJyxcbiAgICAgIGR1cmF0aW9uOiBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgbnVtYmVyOiAwXG4gICAgfV07IC8vIHRhcmdldER1cmF0aW9uIHNob3VsZCBiZSB0aGUgc2FtZSBkdXJhdGlvbiBhcyB0aGUgb25seSBzZWdtZW50XG5cbiAgICBhdHRyaWJ1dGVzLmR1cmF0aW9uID0gYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbjtcbiAgfVxuXG4gIHZhciBtM3U4QXR0cmlidXRlcyA9IChfbTN1OEF0dHJpYnV0ZXMgPSB7XG4gICAgTkFNRTogYXR0cmlidXRlcy5pZCxcbiAgICBCQU5EV0lEVEg6IGF0dHJpYnV0ZXMuYmFuZHdpZHRoXG4gIH0sIF9tM3U4QXR0cmlidXRlc1snUFJPR1JBTS1JRCddID0gMSwgX20zdThBdHRyaWJ1dGVzKTtcblxuICBpZiAoYXR0cmlidXRlcy5jb2RlY3MpIHtcbiAgICBtM3U4QXR0cmlidXRlcy5DT0RFQ1MgPSBhdHRyaWJ1dGVzLmNvZGVjcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlczogbTN1OEF0dHJpYnV0ZXMsXG4gICAgdXJpOiAnJyxcbiAgICBlbmRMaXN0OiBhdHRyaWJ1dGVzLnR5cGUgPT09ICdzdGF0aWMnLFxuICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgIHJlc29sdmVkVXJpOiBhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsXG4gICAgdGFyZ2V0RHVyYXRpb246IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgdGltZWxpbmVTdGFydHM6IGF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMsXG4gICAgZGlzY29udGludWl0eVN0YXJ0czogZGlzY29udGludWl0eVN0YXJ0cyxcbiAgICBkaXNjb250aW51aXR5U2VxdWVuY2U6IGRpc2NvbnRpbnVpdHlTZXF1ZW5jZSxcbiAgICBtZWRpYVNlcXVlbmNlOiBtZWRpYVNlcXVlbmNlLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9O1xufTtcbnZhciBvcmdhbml6ZUF1ZGlvUGxheWxpc3RzID0gZnVuY3Rpb24gb3JnYW5pemVBdWRpb1BsYXlsaXN0cyhwbGF5bGlzdHMsIHNpZHhNYXBwaW5nLCBpc0F1ZGlvT25seSkge1xuICBpZiAoc2lkeE1hcHBpbmcgPT09IHZvaWQgMCkge1xuICAgIHNpZHhNYXBwaW5nID0ge307XG4gIH1cblxuICBpZiAoaXNBdWRpb09ubHkgPT09IHZvaWQgMCkge1xuICAgIGlzQXVkaW9Pbmx5ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgbWFpblBsYXlsaXN0O1xuICB2YXIgZm9ybWF0dGVkUGxheWxpc3RzID0gcGxheWxpc3RzLnJlZHVjZShmdW5jdGlvbiAoYSwgcGxheWxpc3QpIHtcbiAgICB2YXIgcm9sZSA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMucm9sZSAmJiBwbGF5bGlzdC5hdHRyaWJ1dGVzLnJvbGUudmFsdWUgfHwgJyc7XG4gICAgdmFyIGxhbmd1YWdlID0gcGxheWxpc3QuYXR0cmlidXRlcy5sYW5nIHx8ICcnO1xuICAgIHZhciBsYWJlbCA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFiZWwgfHwgJ21haW4nO1xuXG4gICAgaWYgKGxhbmd1YWdlICYmICFwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhYmVsKSB7XG4gICAgICB2YXIgcm9sZUxhYmVsID0gcm9sZSA/IFwiIChcIiArIHJvbGUgKyBcIilcIiA6ICcnO1xuICAgICAgbGFiZWwgPSBcIlwiICsgcGxheWxpc3QuYXR0cmlidXRlcy5sYW5nICsgcm9sZUxhYmVsO1xuICAgIH1cblxuICAgIGlmICghYVtsYWJlbF0pIHtcbiAgICAgIGFbbGFiZWxdID0ge1xuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgICAgIGF1dG9zZWxlY3Q6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHJvbGUgPT09ICdtYWluJyxcbiAgICAgICAgcGxheWxpc3RzOiBbXSxcbiAgICAgICAgdXJpOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVkID0gYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChmb3JtYXRBdWRpb1BsYXlsaXN0KHBsYXlsaXN0LCBpc0F1ZGlvT25seSksIHNpZHhNYXBwaW5nKTtcbiAgICBhW2xhYmVsXS5wbGF5bGlzdHMucHVzaChmb3JtYXR0ZWQpO1xuXG4gICAgaWYgKHR5cGVvZiBtYWluUGxheWxpc3QgPT09ICd1bmRlZmluZWQnICYmIHJvbGUgPT09ICdtYWluJykge1xuICAgICAgbWFpblBsYXlsaXN0ID0gcGxheWxpc3Q7XG4gICAgICBtYWluUGxheWxpc3QuZGVmYXVsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTsgLy8gaWYgbm8gcGxheWxpc3RzIGhhdmUgcm9sZSBcIm1haW5cIiwgbWFyayB0aGUgZmlyc3QgYXMgbWFpblxuXG4gIGlmICghbWFpblBsYXlsaXN0KSB7XG4gICAgdmFyIGZpcnN0TGFiZWwgPSBPYmplY3Qua2V5cyhmb3JtYXR0ZWRQbGF5bGlzdHMpWzBdO1xuICAgIGZvcm1hdHRlZFBsYXlsaXN0c1tmaXJzdExhYmVsXS5kZWZhdWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXR0ZWRQbGF5bGlzdHM7XG59O1xudmFyIG9yZ2FuaXplVnR0UGxheWxpc3RzID0gZnVuY3Rpb24gb3JnYW5pemVWdHRQbGF5bGlzdHMocGxheWxpc3RzLCBzaWR4TWFwcGluZykge1xuICBpZiAoc2lkeE1hcHBpbmcgPT09IHZvaWQgMCkge1xuICAgIHNpZHhNYXBwaW5nID0ge307XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3RzLnJlZHVjZShmdW5jdGlvbiAoYSwgcGxheWxpc3QpIHtcbiAgICB2YXIgbGFiZWwgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgfHwgJ3RleHQnO1xuXG4gICAgaWYgKCFhW2xhYmVsXSkge1xuICAgICAgYVtsYWJlbF0gPSB7XG4gICAgICAgIGxhbmd1YWdlOiBsYWJlbCxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIGF1dG9zZWxlY3Q6IGZhbHNlLFxuICAgICAgICBwbGF5bGlzdHM6IFtdLFxuICAgICAgICB1cmk6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGFbbGFiZWxdLnBsYXlsaXN0cy5wdXNoKGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QoZm9ybWF0VnR0UGxheWxpc3QocGxheWxpc3QpLCBzaWR4TWFwcGluZykpO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59O1xuXG52YXIgb3JnYW5pemVDYXB0aW9uU2VydmljZXMgPSBmdW5jdGlvbiBvcmdhbml6ZUNhcHRpb25TZXJ2aWNlcyhjYXB0aW9uU2VydmljZXMpIHtcbiAgcmV0dXJuIGNhcHRpb25TZXJ2aWNlcy5yZWR1Y2UoZnVuY3Rpb24gKHN2Y09iaiwgc3ZjKSB7XG4gICAgaWYgKCFzdmMpIHtcbiAgICAgIHJldHVybiBzdmNPYmo7XG4gICAgfVxuXG4gICAgc3ZjLmZvckVhY2goZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgICAgIHZhciBjaGFubmVsID0gc2VydmljZS5jaGFubmVsLFxuICAgICAgICAgIGxhbmd1YWdlID0gc2VydmljZS5sYW5ndWFnZTtcbiAgICAgIHN2Y09ialtsYW5ndWFnZV0gPSB7XG4gICAgICAgIGF1dG9zZWxlY3Q6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgaW5zdHJlYW1JZDogY2hhbm5lbCxcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2VydmljZS5oYXNPd25Qcm9wZXJ0eSgnYXNwZWN0UmF0aW8nKSkge1xuICAgICAgICBzdmNPYmpbbGFuZ3VhZ2VdLmFzcGVjdFJhdGlvID0gc2VydmljZS5hc3BlY3RSYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlcnZpY2UuaGFzT3duUHJvcGVydHkoJ2Vhc3lSZWFkZXInKSkge1xuICAgICAgICBzdmNPYmpbbGFuZ3VhZ2VdLmVhc3lSZWFkZXIgPSBzZXJ2aWNlLmVhc3lSZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXJ2aWNlLmhhc093blByb3BlcnR5KCczRCcpKSB7XG4gICAgICAgIHN2Y09ialtsYW5ndWFnZV1bJzNEJ10gPSBzZXJ2aWNlWyczRCddO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdmNPYmo7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBmb3JtYXRWaWRlb1BsYXlsaXN0ID0gZnVuY3Rpb24gZm9ybWF0VmlkZW9QbGF5bGlzdChfcmVmMykge1xuICB2YXIgX2F0dHJpYnV0ZXMyO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcyxcbiAgICAgIHNlZ21lbnRzID0gX3JlZjMuc2VnbWVudHMsXG4gICAgICBzaWR4ID0gX3JlZjMuc2lkeCxcbiAgICAgIGRpc2NvbnRpbnVpdHlTdGFydHMgPSBfcmVmMy5kaXNjb250aW51aXR5U3RhcnRzO1xuICB2YXIgcGxheWxpc3QgPSB7XG4gICAgYXR0cmlidXRlczogKF9hdHRyaWJ1dGVzMiA9IHtcbiAgICAgIE5BTUU6IGF0dHJpYnV0ZXMuaWQsXG4gICAgICBBVURJTzogJ2F1ZGlvJyxcbiAgICAgIFNVQlRJVExFUzogJ3N1YnMnLFxuICAgICAgUkVTT0xVVElPTjoge1xuICAgICAgICB3aWR0aDogYXR0cmlidXRlcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBhdHRyaWJ1dGVzLmhlaWdodFxuICAgICAgfSxcbiAgICAgIENPREVDUzogYXR0cmlidXRlcy5jb2RlY3MsXG4gICAgICBCQU5EV0lEVEg6IGF0dHJpYnV0ZXMuYmFuZHdpZHRoXG4gICAgfSwgX2F0dHJpYnV0ZXMyWydQUk9HUkFNLUlEJ10gPSAxLCBfYXR0cmlidXRlczIpLFxuICAgIHVyaTogJycsXG4gICAgZW5kTGlzdDogYXR0cmlidXRlcy50eXBlID09PSAnc3RhdGljJyxcbiAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICByZXNvbHZlZFVyaTogJycsXG4gICAgdGFyZ2V0RHVyYXRpb246IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgZGlzY29udGludWl0eVN0YXJ0czogZGlzY29udGludWl0eVN0YXJ0cyxcbiAgICB0aW1lbGluZVN0YXJ0czogYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyxcbiAgICBzZWdtZW50czogc2VnbWVudHNcbiAgfTtcblxuICBpZiAoYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbikge1xuICAgIHBsYXlsaXN0LmNvbnRlbnRQcm90ZWN0aW9uID0gYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbjtcbiAgfVxuXG4gIGlmIChzaWR4KSB7XG4gICAgcGxheWxpc3Quc2lkeCA9IHNpZHg7XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3Q7XG59O1xuXG52YXIgdmlkZW9Pbmx5ID0gZnVuY3Rpb24gdmlkZW9Pbmx5KF9yZWY0KSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZjQuYXR0cmlidXRlcztcbiAgcmV0dXJuIGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICd2aWRlby9tcDQnIHx8IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICd2aWRlby93ZWJtJyB8fCBhdHRyaWJ1dGVzLmNvbnRlbnRUeXBlID09PSAndmlkZW8nO1xufTtcblxudmFyIGF1ZGlvT25seSA9IGZ1bmN0aW9uIGF1ZGlvT25seShfcmVmNSkge1xuICB2YXIgYXR0cmlidXRlcyA9IF9yZWY1LmF0dHJpYnV0ZXM7XG4gIHJldHVybiBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAnYXVkaW8vbXA0JyB8fCBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAnYXVkaW8vd2VibScgfHwgYXR0cmlidXRlcy5jb250ZW50VHlwZSA9PT0gJ2F1ZGlvJztcbn07XG5cbnZhciB2dHRPbmx5ID0gZnVuY3Rpb24gdnR0T25seShfcmVmNikge1xuICB2YXIgYXR0cmlidXRlcyA9IF9yZWY2LmF0dHJpYnV0ZXM7XG4gIHJldHVybiBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAndGV4dC92dHQnIHx8IGF0dHJpYnV0ZXMuY29udGVudFR5cGUgPT09ICd0ZXh0Jztcbn07XG4vKipcbiAqIENvbnRhaW5zIHN0YXJ0IGFuZCB0aW1lbGluZSBwcm9wZXJ0aWVzIGRlbm90aW5nIGEgdGltZWxpbmUgc3RhcnQuIEZvciBEQVNILCB0aGVzZSB3aWxsXG4gKiBiZSB0aGUgc2FtZSBudW1iZXIuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVGltZWxpbmVTdGFydFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IC0gdGhlIHN0YXJ0IHRpbWUgb2YgdGhlIHRpbWVsaW5lXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGltZWxpbmUgLSB0aGUgdGltZWxpbmUgbnVtYmVyXG4gKi9cblxuLyoqXG4gKiBBZGRzIGFwcHJvcHJpYXRlIG1lZGlhIGFuZCBkaXNjb250aW51aXR5IHNlcXVlbmNlIHZhbHVlcyB0byB0aGUgc2VnbWVudHMgYW5kIHBsYXlsaXN0cy5cbiAqXG4gKiBUaHJvdWdob3V0IG1wZC1wYXJzZXIsIHRoZSBgbnVtYmVyYCBhdHRyaWJ1dGUgaXMgdXNlZCBpbiByZWxhdGlvbiB0byBgc3RhcnROdW1iZXJgLCBhXG4gKiBEQVNIIHNwZWNpZmljIGF0dHJpYnV0ZSB1c2VkIGluIGNvbnN0cnVjdGluZyBzZWdtZW50IFVSSSdzIGZyb20gdGVtcGxhdGVzLiBIb3dldmVyLCBmcm9tXG4gKiBhbiBITFMgcGVyc3BlY3RpdmUsIHRoZSBgbnVtYmVyYCBhdHRyaWJ1dGUgb24gYSBzZWdtZW50IHdvdWxkIGJlIGl0cyBgbWVkaWFTZXF1ZW5jZWBcbiAqIHZhbHVlLCB3aGljaCBzaG91bGQgc3RhcnQgYXQgdGhlIG9yaWdpbmFsIG1lZGlhIHNlcXVlbmNlIHZhbHVlIChvciAwKSBhbmQgaW5jcmVtZW50IGJ5IDFcbiAqIGZvciBlYWNoIHNlZ21lbnQgdGhlcmVhZnRlci4gU2luY2UgREFTSCdzIGBzdGFydE51bWJlcmAgdmFsdWVzIGFyZSBpbmRlcGVuZGVudCBwZXJcbiAqIHBlcmlvZCwgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHVzZSBpdCBmb3IgYG51bWJlcmAuIEluc3RlYWQsIGFzc3VtZSBldmVyeXRoaW5nIHN0YXJ0c1xuICogZnJvbSBhIDAgbWVkaWFTZXF1ZW5jZSB2YWx1ZSBhbmQgaW5jcmVtZW50IGZyb20gdGhlcmUuXG4gKlxuICogTm90ZSB0aGF0IFZIUyBjdXJyZW50bHkgZG9lc24ndCB1c2UgdGhlIGBudW1iZXJgIHByb3BlcnR5LCBidXQgaXQgY2FuIGJlIGhlbHBmdWwgZm9yXG4gKiBkZWJ1Z2dpbmcgYW5kIG1ha2luZyBzZW5zZSBvZiB0aGUgbWFuaWZlc3QuXG4gKlxuICogRm9yIGxpdmUgcGxheWxpc3RzLCB0byBhY2NvdW50IGZvciB2YWx1ZXMgaW5jcmVhc2luZyBpbiBtYW5pZmVzdHMgd2hlbiBwZXJpb2RzIGFyZVxuICogcmVtb3ZlZCBvbiByZWZyZXNoZXMsIG1lcmdpbmcgbG9naWMgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBudW1iZXJzIHRvIHRoZWlyXG4gKiBhcHByb3ByaWF0ZSB2YWx1ZXMgKHRvIGVuc3VyZSB0aGV5J3JlIHNlcXVlbnRpYWwgYW5kIGluY3JlYXNpbmcpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0W119IHBsYXlsaXN0cyAtIHRoZSBwbGF5bGlzdHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge1RpbWVsaW5lU3RhcnRbXX0gdGltZWxpbmVTdGFydHMgLSB0aGUgdGltZWxpbmUgc3RhcnRzIGZvciB0aGUgbWFuaWZlc3RcbiAqL1xuXG5cbnZhciBhZGRNZWRpYVNlcXVlbmNlVmFsdWVzID0gZnVuY3Rpb24gYWRkTWVkaWFTZXF1ZW5jZVZhbHVlcyhwbGF5bGlzdHMsIHRpbWVsaW5lU3RhcnRzKSB7XG4gIC8vIGluY3JlbWVudCBhbGwgc2VnbWVudHMgc2VxdWVudGlhbGx5XG4gIHBsYXlsaXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5bGlzdCkge1xuICAgIHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgPSAwO1xuICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZSA9IGZpbmRJbmRleCh0aW1lbGluZVN0YXJ0cywgZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICB2YXIgdGltZWxpbmUgPSBfcmVmNy50aW1lbGluZTtcbiAgICAgIHJldHVybiB0aW1lbGluZSA9PT0gcGxheWxpc3QudGltZWxpbmU7XG4gICAgfSk7XG5cbiAgICBpZiAoIXBsYXlsaXN0LnNlZ21lbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWxpc3Quc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCwgaW5kZXgpIHtcbiAgICAgIHNlZ21lbnQubnVtYmVyID0gaW5kZXg7XG4gICAgfSk7XG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gYSBtZWRpYSBncm91cCBvYmplY3QsIGZsYXR0ZW5zIGFsbCBwbGF5bGlzdHMgd2l0aGluIHRoZSBtZWRpYSBncm91cCBpbnRvIGEgc2luZ2xlXG4gKiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWVkaWFHcm91cE9iamVjdCAtIHRoZSBtZWRpYSBncm91cCBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqICAgICAgICAgVGhlIG1lZGlhIGdyb3VwIHBsYXlsaXN0c1xuICovXG5cbnZhciBmbGF0dGVuTWVkaWFHcm91cFBsYXlsaXN0cyA9IGZ1bmN0aW9uIGZsYXR0ZW5NZWRpYUdyb3VwUGxheWxpc3RzKG1lZGlhR3JvdXBPYmplY3QpIHtcbiAgaWYgKCFtZWRpYUdyb3VwT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lZGlhR3JvdXBPYmplY3QpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBsYWJlbCkge1xuICAgIHZhciBsYWJlbENvbnRlbnRzID0gbWVkaWFHcm91cE9iamVjdFtsYWJlbF07XG4gICAgcmV0dXJuIGFjYy5jb25jYXQobGFiZWxDb250ZW50cy5wbGF5bGlzdHMpO1xuICB9LCBbXSk7XG59O1xudmFyIHRvTTN1OCA9IGZ1bmN0aW9uIHRvTTN1OChfcmVmOCkge1xuICB2YXIgX21lZGlhR3JvdXBzO1xuXG4gIHZhciBkYXNoUGxheWxpc3RzID0gX3JlZjguZGFzaFBsYXlsaXN0cyxcbiAgICAgIGxvY2F0aW9ucyA9IF9yZWY4LmxvY2F0aW9ucyxcbiAgICAgIF9yZWY4JHNpZHhNYXBwaW5nID0gX3JlZjguc2lkeE1hcHBpbmcsXG4gICAgICBzaWR4TWFwcGluZyA9IF9yZWY4JHNpZHhNYXBwaW5nID09PSB2b2lkIDAgPyB7fSA6IF9yZWY4JHNpZHhNYXBwaW5nLFxuICAgICAgcHJldmlvdXNNYW5pZmVzdCA9IF9yZWY4LnByZXZpb3VzTWFuaWZlc3Q7XG5cbiAgaWYgKCFkYXNoUGxheWxpc3RzLmxlbmd0aCkge1xuICAgIHJldHVybiB7fTtcbiAgfSAvLyBncmFiIGFsbCBtYWluIG1hbmlmZXN0IGF0dHJpYnV0ZXNcblxuXG4gIHZhciBfZGFzaFBsYXlsaXN0cyQwJGF0dHIgPSBkYXNoUGxheWxpc3RzWzBdLmF0dHJpYnV0ZXMsXG4gICAgICBkdXJhdGlvbiA9IF9kYXNoUGxheWxpc3RzJDAkYXR0ci5zb3VyY2VEdXJhdGlvbixcbiAgICAgIHR5cGUgPSBfZGFzaFBsYXlsaXN0cyQwJGF0dHIudHlwZSxcbiAgICAgIHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5ID0gX2Rhc2hQbGF5bGlzdHMkMCRhdHRyLnN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5LFxuICAgICAgbWluaW11bVVwZGF0ZVBlcmlvZCA9IF9kYXNoUGxheWxpc3RzJDAkYXR0ci5taW5pbXVtVXBkYXRlUGVyaW9kO1xuICB2YXIgdmlkZW9QbGF5bGlzdHMgPSBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMoZGFzaFBsYXlsaXN0cy5maWx0ZXIodmlkZW9Pbmx5KSkubWFwKGZvcm1hdFZpZGVvUGxheWxpc3QpO1xuICB2YXIgYXVkaW9QbGF5bGlzdHMgPSBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMoZGFzaFBsYXlsaXN0cy5maWx0ZXIoYXVkaW9Pbmx5KSk7XG4gIHZhciB2dHRQbGF5bGlzdHMgPSBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMoZGFzaFBsYXlsaXN0cy5maWx0ZXIodnR0T25seSkpO1xuICB2YXIgY2FwdGlvbnMgPSBkYXNoUGxheWxpc3RzLm1hcChmdW5jdGlvbiAocGxheWxpc3QpIHtcbiAgICByZXR1cm4gcGxheWxpc3QuYXR0cmlidXRlcy5jYXB0aW9uU2VydmljZXM7XG4gIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgdmFyIG1hbmlmZXN0ID0ge1xuICAgIGFsbG93Q2FjaGU6IHRydWUsXG4gICAgZGlzY29udGludWl0eVN0YXJ0czogW10sXG4gICAgc2VnbWVudHM6IFtdLFxuICAgIGVuZExpc3Q6IHRydWUsXG4gICAgbWVkaWFHcm91cHM6IChfbWVkaWFHcm91cHMgPSB7XG4gICAgICBBVURJTzoge30sXG4gICAgICBWSURFTzoge31cbiAgICB9LCBfbWVkaWFHcm91cHNbJ0NMT1NFRC1DQVBUSU9OUyddID0ge30sIF9tZWRpYUdyb3Vwcy5TVUJUSVRMRVMgPSB7fSwgX21lZGlhR3JvdXBzKSxcbiAgICB1cmk6ICcnLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBwbGF5bGlzdHM6IGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3RzKHZpZGVvUGxheWxpc3RzLCBzaWR4TWFwcGluZylcbiAgfTtcblxuICBpZiAobWluaW11bVVwZGF0ZVBlcmlvZCA+PSAwKSB7XG4gICAgbWFuaWZlc3QubWluaW11bVVwZGF0ZVBlcmlvZCA9IG1pbmltdW1VcGRhdGVQZXJpb2QgKiAxMDAwO1xuICB9XG5cbiAgaWYgKGxvY2F0aW9ucykge1xuICAgIG1hbmlmZXN0LmxvY2F0aW9ucyA9IGxvY2F0aW9ucztcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnZHluYW1pYycpIHtcbiAgICBtYW5pZmVzdC5zdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheSA9IHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5O1xuICB9XG5cbiAgdmFyIGlzQXVkaW9Pbmx5ID0gbWFuaWZlc3QucGxheWxpc3RzLmxlbmd0aCA9PT0gMDtcbiAgdmFyIG9yZ2FuaXplZEF1ZGlvR3JvdXAgPSBhdWRpb1BsYXlsaXN0cy5sZW5ndGggPyBvcmdhbml6ZUF1ZGlvUGxheWxpc3RzKGF1ZGlvUGxheWxpc3RzLCBzaWR4TWFwcGluZywgaXNBdWRpb09ubHkpIDogbnVsbDtcbiAgdmFyIG9yZ2FuaXplZFZ0dEdyb3VwID0gdnR0UGxheWxpc3RzLmxlbmd0aCA/IG9yZ2FuaXplVnR0UGxheWxpc3RzKHZ0dFBsYXlsaXN0cywgc2lkeE1hcHBpbmcpIDogbnVsbDtcbiAgdmFyIGZvcm1hdHRlZFBsYXlsaXN0cyA9IHZpZGVvUGxheWxpc3RzLmNvbmNhdChmbGF0dGVuTWVkaWFHcm91cFBsYXlsaXN0cyhvcmdhbml6ZWRBdWRpb0dyb3VwKSwgZmxhdHRlbk1lZGlhR3JvdXBQbGF5bGlzdHMob3JnYW5pemVkVnR0R3JvdXApKTtcbiAgdmFyIHBsYXlsaXN0VGltZWxpbmVTdGFydHMgPSBmb3JtYXR0ZWRQbGF5bGlzdHMubWFwKGZ1bmN0aW9uIChfcmVmOSkge1xuICAgIHZhciB0aW1lbGluZVN0YXJ0cyA9IF9yZWY5LnRpbWVsaW5lU3RhcnRzO1xuICAgIHJldHVybiB0aW1lbGluZVN0YXJ0cztcbiAgfSk7XG4gIG1hbmlmZXN0LnRpbWVsaW5lU3RhcnRzID0gZ2V0VW5pcXVlVGltZWxpbmVTdGFydHMocGxheWxpc3RUaW1lbGluZVN0YXJ0cyk7XG4gIGFkZE1lZGlhU2VxdWVuY2VWYWx1ZXMoZm9ybWF0dGVkUGxheWxpc3RzLCBtYW5pZmVzdC50aW1lbGluZVN0YXJ0cyk7XG5cbiAgaWYgKG9yZ2FuaXplZEF1ZGlvR3JvdXApIHtcbiAgICBtYW5pZmVzdC5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpbyA9IG9yZ2FuaXplZEF1ZGlvR3JvdXA7XG4gIH1cblxuICBpZiAob3JnYW5pemVkVnR0R3JvdXApIHtcbiAgICBtYW5pZmVzdC5tZWRpYUdyb3Vwcy5TVUJUSVRMRVMuc3VicyA9IG9yZ2FuaXplZFZ0dEdyb3VwO1xuICB9XG5cbiAgaWYgKGNhcHRpb25zLmxlbmd0aCkge1xuICAgIG1hbmlmZXN0Lm1lZGlhR3JvdXBzWydDTE9TRUQtQ0FQVElPTlMnXS5jYyA9IG9yZ2FuaXplQ2FwdGlvblNlcnZpY2VzKGNhcHRpb25zKTtcbiAgfVxuXG4gIGlmIChwcmV2aW91c01hbmlmZXN0KSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uTWFuaWZlc3RPblRpbWVsaW5lKHtcbiAgICAgIG9sZE1hbmlmZXN0OiBwcmV2aW91c01hbmlmZXN0LFxuICAgICAgbmV3TWFuaWZlc3Q6IG1hbmlmZXN0XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWFuaWZlc3Q7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIFIgKHJlcGV0aXRpb24pIHZhbHVlIGZvciBhIGxpdmUgc3RyZWFtIChmb3IgdGhlIGZpbmFsIHNlZ21lbnRcbiAqIGluIGEgbWFuaWZlc3Qgd2hlcmUgdGhlIHIgdmFsdWUgaXMgbmVnYXRpdmUgMSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiAgICAgICAgY3VycmVudCB0aW1lICh0eXBpY2FsbHkgdGhlIHRvdGFsIHRpbWUgdXAgdW50aWwgdGhlIGZpbmFsIHNlZ21lbnQpXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqICAgICAgICBkdXJhdGlvbiBwcm9wZXJ0eSBmb3IgdGhlIGdpdmVuIDxTIC8+XG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICAgICAgIFIgdmFsdWUgdG8gcmVhY2ggdGhlIGVuZCBvZiB0aGUgZ2l2ZW4gcGVyaW9kXG4gKi9cbnZhciBnZXRMaXZlUlZhbHVlID0gZnVuY3Rpb24gZ2V0TGl2ZVJWYWx1ZShhdHRyaWJ1dGVzLCB0aW1lLCBkdXJhdGlvbikge1xuICB2YXIgTk9XID0gYXR0cmlidXRlcy5OT1csXG4gICAgICBjbGllbnRPZmZzZXQgPSBhdHRyaWJ1dGVzLmNsaWVudE9mZnNldCxcbiAgICAgIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IGF0dHJpYnV0ZXMuYXZhaWxhYmlsaXR5U3RhcnRUaW1lLFxuICAgICAgX2F0dHJpYnV0ZXMkdGltZXNjYWxlID0gYXR0cmlidXRlcy50aW1lc2NhbGUsXG4gICAgICB0aW1lc2NhbGUgPSBfYXR0cmlidXRlcyR0aW1lc2NhbGUgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyR0aW1lc2NhbGUsXG4gICAgICBfYXR0cmlidXRlcyRwZXJpb2RTdGEgPSBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgcGVyaW9kU3RhcnQgPSBfYXR0cmlidXRlcyRwZXJpb2RTdGEgPT09IHZvaWQgMCA/IDAgOiBfYXR0cmlidXRlcyRwZXJpb2RTdGEsXG4gICAgICBfYXR0cmlidXRlcyRtaW5pbXVtVXAgPSBhdHRyaWJ1dGVzLm1pbmltdW1VcGRhdGVQZXJpb2QsXG4gICAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gX2F0dHJpYnV0ZXMkbWluaW11bVVwID09PSB2b2lkIDAgPyAwIDogX2F0dHJpYnV0ZXMkbWluaW11bVVwO1xuICB2YXIgbm93ID0gKE5PVyArIGNsaWVudE9mZnNldCkgLyAxMDAwO1xuICB2YXIgcGVyaW9kU3RhcnRXQyA9IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSArIHBlcmlvZFN0YXJ0O1xuICB2YXIgcGVyaW9kRW5kV0MgPSBub3cgKyBtaW5pbXVtVXBkYXRlUGVyaW9kO1xuICB2YXIgcGVyaW9kRHVyYXRpb24gPSBwZXJpb2RFbmRXQyAtIHBlcmlvZFN0YXJ0V0M7XG4gIHJldHVybiBNYXRoLmNlaWwoKHBlcmlvZER1cmF0aW9uICogdGltZXNjYWxlIC0gdGltZSkgLyBkdXJhdGlvbik7XG59O1xuLyoqXG4gKiBVc2VzIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IFNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUgdG8gZGV0ZXJtaW5lIHNlZ21lbnRcbiAqIHRpbWluZyBhbmQgZHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W119IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICpcbiAqIEByZXR1cm4ge3tudW1iZXI6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgdGltZTogbnVtYmVyLCB0aW1lbGluZTogbnVtYmVyfVtdfVxuICogICAgICAgICBMaXN0IG9mIE9iamVjdHMgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cblxudmFyIHBhcnNlQnlUaW1lbGluZSA9IGZ1bmN0aW9uIHBhcnNlQnlUaW1lbGluZShhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpIHtcbiAgdmFyIHR5cGUgPSBhdHRyaWJ1dGVzLnR5cGUsXG4gICAgICBfYXR0cmlidXRlcyRtaW5pbXVtVXAyID0gYXR0cmlidXRlcy5taW5pbXVtVXBkYXRlUGVyaW9kLFxuICAgICAgbWluaW11bVVwZGF0ZVBlcmlvZCA9IF9hdHRyaWJ1dGVzJG1pbmltdW1VcDIgPT09IHZvaWQgMCA/IDAgOiBfYXR0cmlidXRlcyRtaW5pbXVtVXAyLFxuICAgICAgX2F0dHJpYnV0ZXMkbWVkaWEgPSBhdHRyaWJ1dGVzLm1lZGlhLFxuICAgICAgbWVkaWEgPSBfYXR0cmlidXRlcyRtZWRpYSA9PT0gdm9pZCAwID8gJycgOiBfYXR0cmlidXRlcyRtZWRpYSxcbiAgICAgIHNvdXJjZUR1cmF0aW9uID0gYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbixcbiAgICAgIF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTIgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSxcbiAgICAgIHRpbWVzY2FsZSA9IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTIgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyR0aW1lc2NhbGUyLFxuICAgICAgX2F0dHJpYnV0ZXMkc3RhcnROdW1iID0gYXR0cmlidXRlcy5zdGFydE51bWJlcixcbiAgICAgIHN0YXJ0TnVtYmVyID0gX2F0dHJpYnV0ZXMkc3RhcnROdW1iID09PSB2b2lkIDAgPyAxIDogX2F0dHJpYnV0ZXMkc3RhcnROdW1iLFxuICAgICAgdGltZWxpbmUgPSBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0O1xuICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgdmFyIHRpbWUgPSAtMTtcblxuICBmb3IgKHZhciBzSW5kZXggPSAwOyBzSW5kZXggPCBzZWdtZW50VGltZWxpbmUubGVuZ3RoOyBzSW5kZXgrKykge1xuICAgIHZhciBTID0gc2VnbWVudFRpbWVsaW5lW3NJbmRleF07XG4gICAgdmFyIGR1cmF0aW9uID0gUy5kO1xuICAgIHZhciByZXBlYXQgPSBTLnIgfHwgMDtcbiAgICB2YXIgc2VnbWVudFRpbWUgPSBTLnQgfHwgMDtcblxuICAgIGlmICh0aW1lIDwgMCkge1xuICAgICAgLy8gZmlyc3Qgc2VnbWVudFxuICAgICAgdGltZSA9IHNlZ21lbnRUaW1lO1xuICAgIH1cblxuICAgIGlmIChzZWdtZW50VGltZSAmJiBzZWdtZW50VGltZSA+IHRpbWUpIHtcbiAgICAgIC8vIGRpc2NvbnRpbnVpdHlcbiAgICAgIC8vIFRPRE86IEhvdyB0byBoYW5kbGUgdGhpcyB0eXBlIG9mIGRpc2NvbnRpbnVpdHlcbiAgICAgIC8vIHRpbWVsaW5lKysgaGVyZSB3b3VsZCB0cmVhdCBpdCBsaWtlIEhMUyBkaXNjb250dWl0eSBhbmQgY29udGVudCB3b3VsZFxuICAgICAgLy8gZ2V0IGFwcGVuZGVkIHdpdGhvdXQgZ2FwXG4gICAgICAvLyBFLkcuXG4gICAgICAvLyAgPFMgdD1cIjBcIiBkPVwiMVwiIC8+XG4gICAgICAvLyAgPFMgZD1cIjFcIiAvPlxuICAgICAgLy8gIDxTIGQ9XCIxXCIgLz5cbiAgICAgIC8vICA8UyB0PVwiNVwiIGQ9XCIxXCIgLz5cbiAgICAgIC8vIHdvdWxkIGhhdmUgJFRpbWUkIHZhbHVlcyBvZiBbMCwgMSwgMiwgNV1cbiAgICAgIC8vIHNob3VsZCB0aGlzIGJlIGFwcGVuZWQgYXQgdGltZSBwb3NpdGlvbnMgWzAsIDEsIDIsIDNdLCgjRVhULVgtRElTQ09OVElOVUlUWSlcbiAgICAgIC8vIG9yIFswLCAxLCAyLCBnYXAsIGdhcCwgNV0/ICgjRVhULVgtR0FQKVxuICAgICAgLy8gZG9lcyB0aGUgdmFsdWUgb2Ygc291cmNlRHVyYXRpb24gY29uc2lkZXIgdGhpcyB3aGVuIGNhbGN1bGF0aW5nIGFyYml0cmFyeVxuICAgICAgLy8gbmVnYXRpdmUgQHIgcmVwZWF0IHZhbHVlP1xuICAgICAgLy8gRS5HLiBTYW1lIGVsZW1lbnRzIGFzIGFib3ZlIHdpdGggdGhpcyBhZGRlZCBhdCB0aGUgZW5kXG4gICAgICAvLyAgPFMgZD1cIjFcIiByPVwiLTFcIiAvPlxuICAgICAgLy8gIHdpdGggYSBzb3VyY2VEdXJhdGlvbiBvZiAxMFxuICAgICAgLy8gV291bGQgdGhlIDIgZ2FwcyBiZSBpbmNsdWRlZCBpbiB0aGUgdGltZSBkdXJhdGlvbiBjYWxjdWxhdGlvbnMgcmVzdWx0aW5nIGluXG4gICAgICAvLyA4IHNlZ21lbnRzIHdpdGggJFRpbWUkIHZhbHVlcyBvZiBbMCwgMSwgMiwgNSwgNiwgNywgOCwgOV0gb3IgMTAgc2VnbWVudHNcbiAgICAgIC8vIHdpdGggJFRpbWUkIHZhbHVlcyBvZiBbMCwgMSwgMiwgNSwgNiwgNywgOCwgOSwgMTAsIDExXSA/XG4gICAgICB0aW1lID0gc2VnbWVudFRpbWU7XG4gICAgfVxuXG4gICAgdmFyIGNvdW50ID0gdm9pZCAwO1xuXG4gICAgaWYgKHJlcGVhdCA8IDApIHtcbiAgICAgIHZhciBuZXh0UyA9IHNJbmRleCArIDE7XG5cbiAgICAgIGlmIChuZXh0UyA9PT0gc2VnbWVudFRpbWVsaW5lLmxlbmd0aCkge1xuICAgICAgICAvLyBsYXN0IHNlZ21lbnRcbiAgICAgICAgaWYgKHR5cGUgPT09ICdkeW5hbWljJyAmJiBtaW5pbXVtVXBkYXRlUGVyaW9kID4gMCAmJiBtZWRpYS5pbmRleE9mKCckTnVtYmVyJCcpID4gMCkge1xuICAgICAgICAgIGNvdW50ID0gZ2V0TGl2ZVJWYWx1ZShhdHRyaWJ1dGVzLCB0aW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVE9ETzogVGhpcyBtYXkgYmUgaW5jb3JyZWN0IGRlcGVuZGluZyBvbiBjb25jbHVzaW9uIG9mIFRPRE8gYWJvdmVcbiAgICAgICAgICBjb3VudCA9IChzb3VyY2VEdXJhdGlvbiAqIHRpbWVzY2FsZSAtIHRpbWUpIC8gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ID0gKHNlZ21lbnRUaW1lbGluZVtuZXh0U10udCAtIHRpbWUpIC8gZHVyYXRpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gcmVwZWF0ICsgMTtcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gc3RhcnROdW1iZXIgKyBzZWdtZW50cy5sZW5ndGggKyBjb3VudDtcbiAgICB2YXIgbnVtYmVyID0gc3RhcnROdW1iZXIgKyBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobnVtYmVyIDwgZW5kKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIHRpbWVzY2FsZSxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lXG4gICAgICB9KTtcbiAgICAgIHRpbWUgKz0gZHVyYXRpb247XG4gICAgICBudW1iZXIrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHM7XG59O1xuXG52YXIgaWRlbnRpZmllclBhdHRlcm4gPSAvXFwkKFtBLXpdKikoPzooJTApKFswLTldKylkKT9cXCQvZztcbi8qKlxuICogUmVwbGFjZXMgdGVtcGxhdGUgaWRlbnRpZmllcnMgd2l0aCBjb3JyZXNwb25kaW5nIHZhbHVlcy4gVG8gYmUgdXNlZCBhcyB0aGUgY2FsbGJhY2tcbiAqIGZvciBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAqXG4gKiBAbmFtZSByZXBsYWNlQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gKiAgICAgICAgRW50aXJlIG1hdGNoIG9mIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGlmaWVyXG4gKiAgICAgICAgTmFtZSBvZiBtYXRjaGVkIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAqICAgICAgICBGb3JtYXQgdGFnIHN0cmluZy4gSXRzIHByZXNlbmNlIGluZGljYXRlcyB0aGF0IHBhZGRpbmcgaXMgZXhwZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aWR0aFxuICogICAgICAgIERlc2lyZWQgbGVuZ3RoIG9mIHRoZSByZXBsYWNlZCB2YWx1ZS4gVmFsdWVzIGxlc3MgdGhhbiB0aGlzIHdpZHRoIHNoYWxsIGJlIGxlZnRcbiAqICAgICAgICB6ZXJvIHBhZGRlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICogICAgICAgICBSZXBsYWNlbWVudCBmb3IgdGhlIG1hdGNoZWQgaWRlbnRpZmllclxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayBmb3IgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlIHRvIHJlcGxhY2VcbiAqIHRlbXBsYXRlIGlkZW50aWZpZXJzXG4gKlxuICogQHBhcmFtIHtPYmVjdH0gdmFsdWVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgdmFsdWVzIHRoYXQgc2hhbGwgYmUgdXNlZCB0byByZXBsYWNlIGtub3duIGlkZW50aWZpZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlJlcHJlc2VudGF0aW9uSURcbiAqICAgICAgICBWYWx1ZSBvZiB0aGUgUmVwcmVzZW50YXRpb25AaWQgYXR0cmlidXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLk51bWJlclxuICogICAgICAgIE51bWJlciBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWdtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLkJhbmR3aWR0aFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBiYW5kd2lkdGggYXR0cmlidXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5UaW1lXG4gKiAgICAgICAgVGltZXN0YW1wIHZhbHVlIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEByZXR1cm4ge3JlcGxhY2VDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgdG8gYmUgdXNlZCB3aXRoIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSB0byByZXBsYWNlIGlkZW50aWZpZXJzXG4gKi9cblxudmFyIGlkZW50aWZpZXJSZXBsYWNlbWVudCA9IGZ1bmN0aW9uIGlkZW50aWZpZXJSZXBsYWNlbWVudCh2YWx1ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgaWRlbnRpZmllciwgZm9ybWF0LCB3aWR0aCkge1xuICAgIGlmIChtYXRjaCA9PT0gJyQkJykge1xuICAgICAgLy8gZXNjYXBlIHNlcXVlbmNlXG4gICAgICByZXR1cm4gJyQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWVzW2lkZW50aWZpZXJdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9ICcnICsgdmFsdWVzW2lkZW50aWZpZXJdO1xuXG4gICAgaWYgKGlkZW50aWZpZXIgPT09ICdSZXByZXNlbnRhdGlvbklEJykge1xuICAgICAgLy8gRm9ybWF0IHRhZyBzaGFsbCBub3QgYmUgcHJlc2VudCB3aXRoIFJlcHJlc2VudGF0aW9uSURcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgd2lkdGggPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoLCAxMCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+PSB3aWR0aCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiICsgbmV3IEFycmF5KHdpZHRoIC0gdmFsdWUubGVuZ3RoICsgMSkuam9pbignMCcpICsgdmFsdWU7XG4gIH07XG59O1xuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgc2VnbWVudCB1cmwgZnJvbSBhIHRlbXBsYXRlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqICAgICAgICBUZW1wbGF0ZSBzdHJpbmcgdG8gY29uc3RydWN0IHVybCBmcm9tXG4gKiBAcGFyYW0ge09iZWN0fSB2YWx1ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyB2YWx1ZXMgdGhhdCBzaGFsbCBiZSB1c2VkIHRvIHJlcGxhY2Uga25vd24gaWRlbnRpZmllcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuUmVwcmVzZW50YXRpb25JRFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBpZCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuTnVtYmVyXG4gKiAgICAgICAgTnVtYmVyIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuQmFuZHdpZHRoXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGJhbmR3aWR0aCBhdHRyaWJ1dGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlRpbWVcbiAqICAgICAgICBUaW1lc3RhbXAgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICogICAgICAgICBTZWdtZW50IHVybCB3aXRoIGlkZW50aWZpZXJzIHJlcGxhY2VkXG4gKi9cblxudmFyIGNvbnN0cnVjdFRlbXBsYXRlVXJsID0gZnVuY3Rpb24gY29uc3RydWN0VGVtcGxhdGVVcmwodXJsLCB2YWx1ZXMpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKGlkZW50aWZpZXJQYXR0ZXJuLCBpZGVudGlmaWVyUmVwbGFjZW1lbnQodmFsdWVzKSk7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9ybWF0aW9uIGFib3V0IGVhY2hcbiAqIHNlZ21lbnQgbmVlZGVkIHRvIGdlbmVyYXRlIHNlZ21lbnQgdXJpcyBhbmQgdGhlIGNvbXBsZXRlIHNlZ21lbnQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgICAgICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKiAgICAgICAgdGhlIFNlZ21lbnRUaW1lbGluZSBlbGVtZW50XG4gKiBAcmV0dXJuIHt7bnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHRpbWU6IG51bWJlciwgdGltZWxpbmU6IG51bWJlcn1bXX1cbiAqICAgICAgICAgTGlzdCBvZiBPYmplY3RzIHdpdGggc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9cbiAqL1xuXG52YXIgcGFyc2VUZW1wbGF0ZUluZm8gPSBmdW5jdGlvbiBwYXJzZVRlbXBsYXRlSW5mbyhhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpIHtcbiAgaWYgKCFhdHRyaWJ1dGVzLmR1cmF0aW9uICYmICFzZWdtZW50VGltZWxpbmUpIHtcbiAgICAvLyBpZiBuZWl0aGVyIEBkdXJhdGlvbiBvciBTZWdtZW50VGltZWxpbmUgYXJlIHByZXNlbnQsIHRoZW4gdGhlcmUgc2hhbGwgYmUgZXhhY3RseVxuICAgIC8vIG9uZSBtZWRpYSBzZWdtZW50XG4gICAgcmV0dXJuIFt7XG4gICAgICBudW1iZXI6IGF0dHJpYnV0ZXMuc3RhcnROdW1iZXIgfHwgMSxcbiAgICAgIGR1cmF0aW9uOiBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgdGltZTogMCxcbiAgICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0XG4gICAgfV07XG4gIH1cblxuICBpZiAoYXR0cmlidXRlcy5kdXJhdGlvbikge1xuICAgIHJldHVybiBwYXJzZUJ5RHVyYXRpb24oYXR0cmlidXRlcyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VCeVRpbWVsaW5lKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSk7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHNlZ21lbnRzIHVzaW5nIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBTZWdtZW50VGVtcGxhdGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXXx1bmRlZmluZWR9IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICogICAgICAgIHRoZSBTZWdtZW50VGltZWxpbmUgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiAgICAgICAgIExpc3Qgb2Ygc2VnbWVudCBvYmplY3RzXG4gKi9cblxudmFyIHNlZ21lbnRzRnJvbVRlbXBsYXRlID0gZnVuY3Rpb24gc2VnbWVudHNGcm9tVGVtcGxhdGUoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKSB7XG4gIHZhciB0ZW1wbGF0ZVZhbHVlcyA9IHtcbiAgICBSZXByZXNlbnRhdGlvbklEOiBhdHRyaWJ1dGVzLmlkLFxuICAgIEJhbmR3aWR0aDogYXR0cmlidXRlcy5iYW5kd2lkdGggfHwgMFxuICB9O1xuICB2YXIgX2F0dHJpYnV0ZXMkaW5pdGlhbGl6ID0gYXR0cmlidXRlcy5pbml0aWFsaXphdGlvbixcbiAgICAgIGluaXRpYWxpemF0aW9uID0gX2F0dHJpYnV0ZXMkaW5pdGlhbGl6ID09PSB2b2lkIDAgPyB7XG4gICAgc291cmNlVVJMOiAnJyxcbiAgICByYW5nZTogJydcbiAgfSA6IF9hdHRyaWJ1dGVzJGluaXRpYWxpejtcbiAgdmFyIG1hcFNlZ21lbnQgPSB1cmxUeXBlVG9TZWdtZW50KHtcbiAgICBiYXNlVXJsOiBhdHRyaWJ1dGVzLmJhc2VVcmwsXG4gICAgc291cmNlOiBjb25zdHJ1Y3RUZW1wbGF0ZVVybChpbml0aWFsaXphdGlvbi5zb3VyY2VVUkwsIHRlbXBsYXRlVmFsdWVzKSxcbiAgICByYW5nZTogaW5pdGlhbGl6YXRpb24ucmFuZ2VcbiAgfSk7XG4gIHZhciBzZWdtZW50cyA9IHBhcnNlVGVtcGxhdGVJbmZvKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSk7XG4gIHJldHVybiBzZWdtZW50cy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICB0ZW1wbGF0ZVZhbHVlcy5OdW1iZXIgPSBzZWdtZW50Lm51bWJlcjtcbiAgICB0ZW1wbGF0ZVZhbHVlcy5UaW1lID0gc2VnbWVudC50aW1lO1xuICAgIHZhciB1cmkgPSBjb25zdHJ1Y3RUZW1wbGF0ZVVybChhdHRyaWJ1dGVzLm1lZGlhIHx8ICcnLCB0ZW1wbGF0ZVZhbHVlcyk7IC8vIFNlZSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuOS4yLjJcbiAgICAvLyAtIGlmIHRpbWVzY2FsZSBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAxLlxuXG4gICAgdmFyIHRpbWVzY2FsZSA9IGF0dHJpYnV0ZXMudGltZXNjYWxlIHx8IDE7IC8vIC0gaWYgcHJlc2VudGF0aW9uVGltZU9mZnNldCBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAwXG5cbiAgICB2YXIgcHJlc2VudGF0aW9uVGltZU9mZnNldCA9IGF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZU9mZnNldCB8fCAwO1xuICAgIHZhciBwcmVzZW50YXRpb25UaW1lID0gLy8gRXZlbiBpZiB0aGUgQHQgYXR0cmlidXRlIGlzIG5vdCBzcGVjaWZpZWQgZm9yIHRoZSBzZWdtZW50LCBzZWdtZW50LnRpbWUgaXNcbiAgICAvLyBjYWxjdWxhdGVkIGluIG1wZC1wYXJzZXIgcHJpb3IgdG8gdGhpcywgc28gaXQncyBhc3N1bWVkIHRvIGJlIGF2YWlsYWJsZS5cbiAgICBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0ICsgKHNlZ21lbnQudGltZSAtIHByZXNlbnRhdGlvblRpbWVPZmZzZXQpIC8gdGltZXNjYWxlO1xuICAgIHZhciBtYXAgPSB7XG4gICAgICB1cmk6IHVyaSxcbiAgICAgIHRpbWVsaW5lOiBzZWdtZW50LnRpbWVsaW5lLFxuICAgICAgZHVyYXRpb246IHNlZ21lbnQuZHVyYXRpb24sXG4gICAgICByZXNvbHZlZFVyaTogcmVzb2x2ZVVybChhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsIHVyaSksXG4gICAgICBtYXA6IG1hcFNlZ21lbnQsXG4gICAgICBudW1iZXI6IHNlZ21lbnQubnVtYmVyLFxuICAgICAgcHJlc2VudGF0aW9uVGltZTogcHJlc2VudGF0aW9uVGltZVxuICAgIH07XG4gICAgcmV0dXJuIG1hcDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgPFNlZ21lbnRVcmw+IChvZiB0eXBlIFVSTFR5cGUgZnJvbSB0aGUgREFTSCBzcGVjIDUuMy45LjIgVGFibGUgMTQpXG4gKiB0byBhbiBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBvdXRwdXQgb2YgYSBzZWdtZW50IGluIHZpZGVvanMvbXBkLXBhcnNlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdH0gc2VnbWVudFVybFxuICogICA8U2VnbWVudFVSTD4gbm9kZSB0byB0cmFuc2xhdGUgaW50byBhIHNlZ21lbnQgb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRyYW5zbGF0ZWQgc2VnbWVudCBvYmplY3RcbiAqL1xuXG52YXIgU2VnbWVudFVSTFRvU2VnbWVudE9iamVjdCA9IGZ1bmN0aW9uIFNlZ21lbnRVUkxUb1NlZ21lbnRPYmplY3QoYXR0cmlidXRlcywgc2VnbWVudFVybCkge1xuICB2YXIgYmFzZVVybCA9IGF0dHJpYnV0ZXMuYmFzZVVybCxcbiAgICAgIF9hdHRyaWJ1dGVzJGluaXRpYWxpeiA9IGF0dHJpYnV0ZXMuaW5pdGlhbGl6YXRpb24sXG4gICAgICBpbml0aWFsaXphdGlvbiA9IF9hdHRyaWJ1dGVzJGluaXRpYWxpeiA9PT0gdm9pZCAwID8ge30gOiBfYXR0cmlidXRlcyRpbml0aWFsaXo7XG4gIHZhciBpbml0U2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmw6IGJhc2VVcmwsXG4gICAgc291cmNlOiBpbml0aWFsaXphdGlvbi5zb3VyY2VVUkwsXG4gICAgcmFuZ2U6IGluaXRpYWxpemF0aW9uLnJhbmdlXG4gIH0pO1xuICB2YXIgc2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmw6IGJhc2VVcmwsXG4gICAgc291cmNlOiBzZWdtZW50VXJsLm1lZGlhLFxuICAgIHJhbmdlOiBzZWdtZW50VXJsLm1lZGlhUmFuZ2VcbiAgfSk7XG4gIHNlZ21lbnQubWFwID0gaW5pdFNlZ21lbnQ7XG4gIHJldHVybiBzZWdtZW50O1xufTtcbi8qKlxuICogR2VuZXJhdGVzIGEgbGlzdCBvZiBzZWdtZW50cyB1c2luZyBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgU2VnbWVudExpc3QgZWxlbWVudFxuICogU2VnbWVudExpc3QgKERBU0ggU1BFQyBTZWN0aW9uIDUuMy45LjMuMikgY29udGFpbnMgYSBzZXQgb2YgPFNlZ21lbnRVUkw+IG5vZGVzLiAgRWFjaFxuICogbm9kZSBzaG91bGQgYmUgdHJhbnNsYXRlZCBpbnRvIHNlZ21lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBhdHRyaWJ1dGVzIG9mIGVhY2ggUyBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW5cbiAqICAgICAgICB0aGUgU2VnbWVudFRpbWVsaW5lIGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdC48QXJyYXk+fSBsaXN0IG9mIHNlZ21lbnRzXG4gKi9cblxuXG52YXIgc2VnbWVudHNGcm9tTGlzdCA9IGZ1bmN0aW9uIHNlZ21lbnRzRnJvbUxpc3QoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKSB7XG4gIHZhciBkdXJhdGlvbiA9IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgICBfYXR0cmlidXRlcyRzZWdtZW50VXIgPSBhdHRyaWJ1dGVzLnNlZ21lbnRVcmxzLFxuICAgICAgc2VnbWVudFVybHMgPSBfYXR0cmlidXRlcyRzZWdtZW50VXIgPT09IHZvaWQgMCA/IFtdIDogX2F0dHJpYnV0ZXMkc2VnbWVudFVyLFxuICAgICAgcGVyaW9kU3RhcnQgPSBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0OyAvLyBQZXIgc3BlYyAoNS4zLjkuMi4xKSBubyB3YXkgdG8gZGV0ZXJtaW5lIHNlZ21lbnQgZHVyYXRpb24gT1JcbiAgLy8gaWYgYm90aCBTZWdtZW50VGltZWxpbmUgYW5kIEBkdXJhdGlvbiBhcmUgZGVmaW5lZCwgaXQgaXMgb3V0c2lkZSBvZiBzcGVjLlxuXG4gIGlmICghZHVyYXRpb24gJiYgIXNlZ21lbnRUaW1lbGluZSB8fCBkdXJhdGlvbiAmJiBzZWdtZW50VGltZWxpbmUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlNFR01FTlRfVElNRV9VTlNQRUNJRklFRCk7XG4gIH1cblxuICB2YXIgc2VnbWVudFVybE1hcCA9IHNlZ21lbnRVcmxzLm1hcChmdW5jdGlvbiAoc2VnbWVudFVybE9iamVjdCkge1xuICAgIHJldHVybiBTZWdtZW50VVJMVG9TZWdtZW50T2JqZWN0KGF0dHJpYnV0ZXMsIHNlZ21lbnRVcmxPYmplY3QpO1xuICB9KTtcbiAgdmFyIHNlZ21lbnRUaW1lSW5mbztcblxuICBpZiAoZHVyYXRpb24pIHtcbiAgICBzZWdtZW50VGltZUluZm8gPSBwYXJzZUJ5RHVyYXRpb24oYXR0cmlidXRlcyk7XG4gIH1cblxuICBpZiAoc2VnbWVudFRpbWVsaW5lKSB7XG4gICAgc2VnbWVudFRpbWVJbmZvID0gcGFyc2VCeVRpbWVsaW5lKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSk7XG4gIH1cblxuICB2YXIgc2VnbWVudHMgPSBzZWdtZW50VGltZUluZm8ubWFwKGZ1bmN0aW9uIChzZWdtZW50VGltZSwgaW5kZXgpIHtcbiAgICBpZiAoc2VnbWVudFVybE1hcFtpbmRleF0pIHtcbiAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudFVybE1hcFtpbmRleF07IC8vIFNlZSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuOS4yLjJcbiAgICAgIC8vIC0gaWYgdGltZXNjYWxlIGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDEuXG5cbiAgICAgIHZhciB0aW1lc2NhbGUgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSB8fCAxOyAvLyAtIGlmIHByZXNlbnRhdGlvblRpbWVPZmZzZXQgaXNuJ3QgcHJlc2VudCBvbiBhbnkgbGV2ZWwsIGRlZmF1bHQgdG8gMFxuXG4gICAgICB2YXIgcHJlc2VudGF0aW9uVGltZU9mZnNldCA9IGF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZU9mZnNldCB8fCAwO1xuICAgICAgc2VnbWVudC50aW1lbGluZSA9IHNlZ21lbnRUaW1lLnRpbWVsaW5lO1xuICAgICAgc2VnbWVudC5kdXJhdGlvbiA9IHNlZ21lbnRUaW1lLmR1cmF0aW9uO1xuICAgICAgc2VnbWVudC5udW1iZXIgPSBzZWdtZW50VGltZS5udW1iZXI7XG4gICAgICBzZWdtZW50LnByZXNlbnRhdGlvblRpbWUgPSBwZXJpb2RTdGFydCArIChzZWdtZW50VGltZS50aW1lIC0gcHJlc2VudGF0aW9uVGltZU9mZnNldCkgLyB0aW1lc2NhbGU7XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9IC8vIFNpbmNlIHdlJ3JlIG1hcHBpbmcgd2Ugc2hvdWxkIGdldCByaWQgb2YgYW55IGJsYW5rIHNlZ21lbnRzIChpbiBjYXNlXG4gICAgLy8gdGhlIGdpdmVuIFNlZ21lbnRUaW1lbGluZSBpcyBoYW5kbGluZyBmb3IgbW9yZSBlbGVtZW50cyB0aGFuIHdlIGhhdmVcbiAgICAvLyBTZWdtZW50VVJMcyBmb3IpLlxuXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgIHJldHVybiBzZWdtZW50O1xuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzO1xufTtcblxudmFyIGdlbmVyYXRlU2VnbWVudHMgPSBmdW5jdGlvbiBnZW5lcmF0ZVNlZ21lbnRzKF9yZWYpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzZWdtZW50SW5mbyA9IF9yZWYuc2VnbWVudEluZm87XG4gIHZhciBzZWdtZW50QXR0cmlidXRlcztcbiAgdmFyIHNlZ21lbnRzRm47XG5cbiAgaWYgKHNlZ21lbnRJbmZvLnRlbXBsYXRlKSB7XG4gICAgc2VnbWVudHNGbiA9IHNlZ21lbnRzRnJvbVRlbXBsYXRlO1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzID0gbWVyZ2UoYXR0cmlidXRlcywgc2VnbWVudEluZm8udGVtcGxhdGUpO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRJbmZvLmJhc2UpIHtcbiAgICBzZWdtZW50c0ZuID0gc2VnbWVudHNGcm9tQmFzZTtcbiAgICBzZWdtZW50QXR0cmlidXRlcyA9IG1lcmdlKGF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLmJhc2UpO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRJbmZvLmxpc3QpIHtcbiAgICBzZWdtZW50c0ZuID0gc2VnbWVudHNGcm9tTGlzdDtcbiAgICBzZWdtZW50QXR0cmlidXRlcyA9IG1lcmdlKGF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLmxpc3QpO1xuICB9XG5cbiAgdmFyIHNlZ21lbnRzSW5mbyA9IHtcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG5cbiAgaWYgKCFzZWdtZW50c0ZuKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRzSW5mbztcbiAgfVxuXG4gIHZhciBzZWdtZW50cyA9IHNlZ21lbnRzRm4oc2VnbWVudEF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLnNlZ21lbnRUaW1lbGluZSk7IC8vIFRoZSBAZHVyYXRpb24gYXR0cmlidXRlIHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbiB0aGUgcGxheWxpc3QncyB0YXJnZXREdXJhdGlvbiB3aGljaFxuICAvLyBtdXN0IGJlIGluIHNlY29uZHMuIFNpbmNlIHdlJ3ZlIGdlbmVyYXRlZCB0aGUgc2VnbWVudCBsaXN0LCB3ZSBubyBsb25nZXIgbmVlZFxuICAvLyBAZHVyYXRpb24gdG8gYmUgaW4gQHRpbWVzY2FsZSB1bml0cywgc28gd2UgY2FuIGNvbnZlcnQgaXQgaGVyZS5cblxuICBpZiAoc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24pIHtcbiAgICB2YXIgX3NlZ21lbnRBdHRyaWJ1dGVzID0gc2VnbWVudEF0dHJpYnV0ZXMsXG4gICAgICAgIGR1cmF0aW9uID0gX3NlZ21lbnRBdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgICAgICBfc2VnbWVudEF0dHJpYnV0ZXMkdGkgPSBfc2VnbWVudEF0dHJpYnV0ZXMudGltZXNjYWxlLFxuICAgICAgICB0aW1lc2NhbGUgPSBfc2VnbWVudEF0dHJpYnV0ZXMkdGkgPT09IHZvaWQgMCA/IDEgOiBfc2VnbWVudEF0dHJpYnV0ZXMkdGk7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24gPSBkdXJhdGlvbiAvIHRpbWVzY2FsZTtcbiAgfSBlbHNlIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBAZHVyYXRpb24gYXR0cmlidXRlLCB1c2UgdGhlIGxhcmdlc3Qgc2VnbWVudCBkdXJhdGlvbiBhc1xuICAgIC8vIGFzIHRhcmdldCBkdXJhdGlvblxuICAgIHNlZ21lbnRBdHRyaWJ1dGVzLmR1cmF0aW9uID0gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChtYXgsIHNlZ21lbnQpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChtYXgsIE1hdGguY2VpbChzZWdtZW50LmR1cmF0aW9uKSk7XG4gICAgfSwgMCk7XG4gIH0gZWxzZSB7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24gPSAwO1xuICB9XG5cbiAgc2VnbWVudHNJbmZvLmF0dHJpYnV0ZXMgPSBzZWdtZW50QXR0cmlidXRlcztcbiAgc2VnbWVudHNJbmZvLnNlZ21lbnRzID0gc2VnbWVudHM7IC8vIFRoaXMgaXMgYSBzaWR4IGJveCB3aXRob3V0IGFjdHVhbCBzZWdtZW50IGluZm9ybWF0aW9uXG5cbiAgaWYgKHNlZ21lbnRJbmZvLmJhc2UgJiYgc2VnbWVudEF0dHJpYnV0ZXMuaW5kZXhSYW5nZSkge1xuICAgIHNlZ21lbnRzSW5mby5zaWR4ID0gc2VnbWVudHNbMF07XG4gICAgc2VnbWVudHNJbmZvLnNlZ21lbnRzID0gW107XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHNJbmZvO1xufTtcbnZhciB0b1BsYXlsaXN0cyA9IGZ1bmN0aW9uIHRvUGxheWxpc3RzKHJlcHJlc2VudGF0aW9ucykge1xuICByZXR1cm4gcmVwcmVzZW50YXRpb25zLm1hcChnZW5lcmF0ZVNlZ21lbnRzKTtcbn07XG5cbnZhciBmaW5kQ2hpbGRyZW4gPSBmdW5jdGlvbiBmaW5kQ2hpbGRyZW4oZWxlbWVudCwgbmFtZSkge1xuICByZXR1cm4gZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0YWdOYW1lID0gX3JlZi50YWdOYW1lO1xuICAgIHJldHVybiB0YWdOYW1lID09PSBuYW1lO1xuICB9KTtcbn07XG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG59O1xuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oc3RyKSB7XG4gIHZhciBTRUNPTkRTX0lOX1lFQVIgPSAzNjUgKiAyNCAqIDYwICogNjA7XG4gIHZhciBTRUNPTkRTX0lOX01PTlRIID0gMzAgKiAyNCAqIDYwICogNjA7XG4gIHZhciBTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MDtcbiAgdmFyIFNFQ09ORFNfSU5fSE9VUiA9IDYwICogNjA7XG4gIHZhciBTRUNPTkRTX0lOX01JTiA9IDYwOyAvLyBQMTBZMTBNMTBEVDEwSDEwTTEwLjFTXG5cbiAgdmFyIGR1cmF0aW9uUmVnZXggPSAvUCg/OihcXGQqKVkpPyg/OihcXGQqKU0pPyg/OihcXGQqKUQpPyg/OlQoPzooXFxkKilIKT8oPzooXFxkKilNKT8oPzooW1xcZC5dKilTKT8pPy87XG4gIHZhciBtYXRjaCA9IGR1cmF0aW9uUmVnZXguZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBfbWF0Y2gkc2xpY2UgPSBtYXRjaC5zbGljZSgxKSxcbiAgICAgIHllYXIgPSBfbWF0Y2gkc2xpY2VbMF0sXG4gICAgICBtb250aCA9IF9tYXRjaCRzbGljZVsxXSxcbiAgICAgIGRheSA9IF9tYXRjaCRzbGljZVsyXSxcbiAgICAgIGhvdXIgPSBfbWF0Y2gkc2xpY2VbM10sXG4gICAgICBtaW51dGUgPSBfbWF0Y2gkc2xpY2VbNF0sXG4gICAgICBzZWNvbmQgPSBfbWF0Y2gkc2xpY2VbNV07XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoeWVhciB8fCAwKSAqIFNFQ09ORFNfSU5fWUVBUiArIHBhcnNlRmxvYXQobW9udGggfHwgMCkgKiBTRUNPTkRTX0lOX01PTlRIICsgcGFyc2VGbG9hdChkYXkgfHwgMCkgKiBTRUNPTkRTX0lOX0RBWSArIHBhcnNlRmxvYXQoaG91ciB8fCAwKSAqIFNFQ09ORFNfSU5fSE9VUiArIHBhcnNlRmxvYXQobWludXRlIHx8IDApICogU0VDT05EU19JTl9NSU4gKyBwYXJzZUZsb2F0KHNlY29uZCB8fCAwKTtcbn07XG52YXIgcGFyc2VEYXRlID0gZnVuY3Rpb24gcGFyc2VEYXRlKHN0cikge1xuICAvLyBEYXRlIGZvcm1hdCB3aXRob3V0IHRpbWV6b25lIGFjY29yZGluZyB0byBJU08gODYwMVxuICAvLyBZWVktTU0tRERUaGg6bW06c3Muc3Nzc3NzXG4gIHZhciBkYXRlUmVnZXggPSAvXlxcZCstXFxkKy1cXGQrVFxcZCs6XFxkKzpcXGQrKFxcLlxcZCspPyQvOyAvLyBJZiB0aGUgZGF0ZSBzdHJpbmcgZG9lcyBub3Qgc3BlY2lmaXkgYSB0aW1lem9uZSwgd2UgbXVzdCBzcGVjaWZpeSBVVEMuIFRoaXMgaXNcbiAgLy8gZXhwcmVzc2VkIGJ5IGVuZGluZyB3aXRoICdaJ1xuXG4gIGlmIChkYXRlUmVnZXgudGVzdChzdHIpKSB7XG4gICAgc3RyICs9ICdaJztcbiAgfVxuXG4gIHJldHVybiBEYXRlLnBhcnNlKHN0cik7XG59O1xuXG52YXIgcGFyc2VycyA9IHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgZHVyYXRpb24gb2YgdGhlIGVudGlyZSBNZWRpYSBQcmVzZW50YXRpb24uIEZvcm1hdCBpcyBhIGR1cmF0aW9uIHN0cmluZ1xuICAgKiBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICBtZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uOiBmdW5jdGlvbiBtZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFNlZ21lbnQgYXZhaWxhYmlsaXR5IHN0YXJ0IHRpbWUgZm9yIGFsbCBTZWdtZW50cyByZWZlcnJlZCB0byBpbiB0aGlzXG4gICAqIE1QRC4gRm9yIGEgZHluYW1pYyBtYW5pZmVzdCwgaXQgc3BlY2lmaWVzIHRoZSBhbmNob3IgZm9yIHRoZSBlYXJsaWVzdCBhdmFpbGFiaWxpdHlcbiAgICogdGltZS4gRm9ybWF0IGlzIGEgZGF0ZSBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZGF0ZSBhcyBzZWNvbmRzIGZyb20gdW5peCBlcG9jaFxuICAgKi9cbiAgYXZhaWxhYmlsaXR5U3RhcnRUaW1lOiBmdW5jdGlvbiBhdmFpbGFiaWxpdHlTdGFydFRpbWUodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEYXRlKHZhbHVlKSAvIDEwMDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgc21hbGxlc3QgcGVyaW9kIGJldHdlZW4gcG90ZW50aWFsIGNoYW5nZXMgdG8gdGhlIE1QRC4gRm9ybWF0IGlzIGFcbiAgICogZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIG1pbmltdW1VcGRhdGVQZXJpb2Q6IGZ1bmN0aW9uIG1pbmltdW1VcGRhdGVQZXJpb2QodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgc3VnZ2VzdGVkIHByZXNlbnRhdGlvbiBkZWxheS4gRm9ybWF0IGlzIGFcbiAgICogZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5OiBmdW5jdGlvbiBzdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogc3BlY2lmaWNlcyB0aGUgdHlwZSBvZiBtcGQuIENhbiBiZSBlaXRoZXIgXCJzdGF0aWNcIiBvciBcImR5bmFtaWNcIlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIHR5cGUgYXMgYSBzdHJpbmdcbiAgICovXG4gIHR5cGU6IGZ1bmN0aW9uIHR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgZHVyYXRpb24gb2YgdGhlIHNtYWxsZXN0IHRpbWUgc2hpZnRpbmcgYnVmZmVyIGZvciBhbnkgUmVwcmVzZW50YXRpb25cbiAgICogaW4gdGhlIE1QRC4gRm9ybWF0IGlzIGEgZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIHRpbWVTaGlmdEJ1ZmZlckRlcHRoOiBmdW5jdGlvbiB0aW1lU2hpZnRCdWZmZXJEZXB0aCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBQZXJpb2RTdGFydCB0aW1lIG9mIHRoZSBQZXJpb2QgcmVsYXRpdmUgdG8gdGhlIGF2YWlsYWJpbGl0eVN0YXJ0dGltZS5cbiAgICogRm9ybWF0IGlzIGEgZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB3aWR0aCBvZiB0aGUgdmlzdWFsIHByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCB3aWR0aFxuICAgKi9cbiAgd2lkdGg6IGZ1bmN0aW9uIHdpZHRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgaGVpZ2h0IG9mIHRoZSB2aXN1YWwgcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGhlaWdodFxuICAgKi9cbiAgaGVpZ2h0OiBmdW5jdGlvbiBoZWlnaHQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBiaXRyYXRlIG9mIHRoZSByZXByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBiYW5kd2lkdGhcbiAgICovXG4gIGJhbmR3aWR0aDogZnVuY3Rpb24gYmFuZHdpZHRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHRoZSBmaXJzdCBNZWRpYSBTZWdtZW50IGluIHRoaXMgUmVwcmVzZW50YXRpb24gaW4gdGhlIFBlcmlvZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBudW1iZXJcbiAgICovXG4gIHN0YXJ0TnVtYmVyOiBmdW5jdGlvbiBzdGFydE51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHRpbWVzY2FsZSBpbiB1bml0cyBwZXIgc2Vjb25kc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCB0aW1lc2NhbGVcbiAgICovXG4gIHRpbWVzY2FsZTogZnVuY3Rpb24gdGltZXNjYWxlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcHJlc2VudGF0aW9uVGltZU9mZnNldC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHByZXNlbnRhdGlvblRpbWVPZmZzZXRcbiAgICovXG4gIHByZXNlbnRhdGlvblRpbWVPZmZzZXQ6IGZ1bmN0aW9uIHByZXNlbnRhdGlvblRpbWVPZmZzZXQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBjb25zdGFudCBhcHByb3hpbWF0ZSBTZWdtZW50IGR1cmF0aW9uXG4gICAqIE5PVEU6IFRoZSA8UGVyaW9kPiBlbGVtZW50IGFsc28gY29udGFpbnMgYW4gQGR1cmF0aW9uIGF0dHJpYnV0ZS4gVGhpcyBkdXJhdGlvblxuICAgKiAgICAgICBzcGVjaWZpZXMgdGhlIGR1cmF0aW9uIG9mIHRoZSBQZXJpb2QuIFRoaXMgYXR0cmlidXRlIGlzIGN1cnJlbnRseSBub3RcbiAgICogICAgICAgc3VwcG9ydGVkIGJ5IHRoZSByZXN0IG9mIHRoZSBwYXJzZXIsIGhvd2V2ZXIgd2Ugc3RpbGwgY2hlY2sgZm9yIGl0IHRvIHByZXZlbnRcbiAgICogICAgICAgZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBkdXJhdGlvblxuICAgKi9cbiAgZHVyYXRpb246IGZ1bmN0aW9uIGR1cmF0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHBhcnNlZFZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkVmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgU2VnbWVudCBkdXJhdGlvbiwgaW4gdW5pdHMgb2YgdGhlIHZhbHVlIG9mIHRoZSBAdGltZXNjYWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBkdXJhdGlvblxuICAgKi9cbiAgZDogZnVuY3Rpb24gZCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIE1QRCBzdGFydCB0aW1lLCBpbiBAdGltZXNjYWxlIHVuaXRzLCB0aGUgZmlyc3QgU2VnbWVudCBpbiB0aGUgc2VyaWVzXG4gICAqIHN0YXJ0cyByZWxhdGl2ZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBQZXJpb2RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgdGltZVxuICAgKi9cbiAgdDogZnVuY3Rpb24gdCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHJlcGVhdCBjb3VudCBvZiB0aGUgbnVtYmVyIG9mIGZvbGxvd2luZyBjb250aWd1b3VzIFNlZ21lbnRzIHdpdGggdGhlXG4gICAqIHNhbWUgZHVyYXRpb24gZXhwcmVzc2VkIGJ5IHRoZSB2YWx1ZSBvZiBAZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBudW1iZXJcbiAgICovXG4gIHI6IGZ1bmN0aW9uIHIodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogRGVmYXVsdCBwYXJzZXIgZm9yIGFsbCBvdGhlciBhdHRyaWJ1dGVzLiBBY3RzIGFzIGEgbm8tb3AgYW5kIGp1c3QgcmV0dXJucyB0aGUgdmFsdWVcbiAgICogYXMgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiAgICAgICAgIFVucGFyc2VkIHZhbHVlXG4gICAqL1xuICBERUZBVUxUOiBmdW5jdGlvbiBERUZBVUxUKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuLyoqXG4gKiBHZXRzIGFsbCB0aGUgYXR0cmlidXRlcyBhbmQgdmFsdWVzIG9mIHRoZSBwcm92aWRlZCBub2RlLCBwYXJzZXMgYXR0cmlidXRlcyB3aXRoIGtub3duXG4gKiB0eXBlcywgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYXR0cmlidXRlIG5hbWVzIG1hcHBlZCB0byB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbFxuICogICAgICAgIFRoZSBub2RlIHRvIHBhcnNlIGF0dHJpYnV0ZXMgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fVxuICogICAgICAgICBPYmplY3Qgd2l0aCBhbGwgYXR0cmlidXRlcyBvZiBlbCBwYXJzZWRcbiAqL1xuXG52YXIgcGFyc2VBdHRyaWJ1dGVzID0gZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVzKGVsKSB7XG4gIGlmICghKGVsICYmIGVsLmF0dHJpYnV0ZXMpKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcmV0dXJuIGZyb20oZWwuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhLCBlKSB7XG4gICAgdmFyIHBhcnNlRm4gPSBwYXJzZXJzW2UubmFtZV0gfHwgcGFyc2Vycy5ERUZBVUxUO1xuICAgIGFbZS5uYW1lXSA9IHBhcnNlRm4oZS52YWx1ZSk7XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBrZXlTeXN0ZW1zTWFwID0ge1xuICAndXJuOnV1aWQ6MTA3N2VmZWMtYzBiMi00ZDAyLWFjZTMtM2MxZTUyZTJmYjRiJzogJ29yZy53My5jbGVhcmtleScsXG4gICd1cm46dXVpZDplZGVmOGJhOS03OWQ2LTRhY2UtYTNjOC0yN2RjZDUxZDIxZWQnOiAnY29tLndpZGV2aW5lLmFscGhhJyxcbiAgJ3Vybjp1dWlkOjlhMDRmMDc5LTk4NDAtNDI4Ni1hYjkyLWU2NWJlMDg4NWY5NSc6ICdjb20ubWljcm9zb2Z0LnBsYXlyZWFkeScsXG4gICd1cm46dXVpZDpmMjM5ZTc2OS1lZmEzLTQ4NTAtOWMxNi1hOTAzYzY5MzJlZmInOiAnY29tLmFkb2JlLnByaW1ldGltZSdcbn07XG4vKipcbiAqIEJ1aWxkcyBhIGxpc3Qgb2YgdXJscyB0aGF0IGlzIHRoZSBwcm9kdWN0IG9mIHRoZSByZWZlcmVuY2UgdXJscyBhbmQgQmFzZVVSTCB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWZlcmVuY2VVcmxzXG4gKiAgICAgICAgTGlzdCBvZiByZWZlcmVuY2UgdXJscyB0byByZXNvbHZlIHRvXG4gKiBAcGFyYW0ge05vZGVbXX0gYmFzZVVybEVsZW1lbnRzXG4gKiAgICAgICAgTGlzdCBvZiBCYXNlVVJMIG5vZGVzIGZyb20gdGhlIG1wZFxuICogQHJldHVybiB7c3RyaW5nW119XG4gKiAgICAgICAgIExpc3Qgb2YgcmVzb2x2ZWQgdXJsc1xuICovXG5cbnZhciBidWlsZEJhc2VVcmxzID0gZnVuY3Rpb24gYnVpbGRCYXNlVXJscyhyZWZlcmVuY2VVcmxzLCBiYXNlVXJsRWxlbWVudHMpIHtcbiAgaWYgKCFiYXNlVXJsRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZVVybHM7XG4gIH1cblxuICByZXR1cm4gZmxhdHRlbihyZWZlcmVuY2VVcmxzLm1hcChmdW5jdGlvbiAocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIGJhc2VVcmxFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGJhc2VVcmxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZVVybChyZWZlcmVuY2UsIGdldENvbnRlbnQoYmFzZVVybEVsZW1lbnQpKTtcbiAgICB9KTtcbiAgfSkpO1xufTtcbi8qKlxuICogQ29udGFpbnMgYWxsIFNlZ21lbnQgaW5mb3JtYXRpb24gZm9yIGl0cyBjb250YWluaW5nIEFkYXB0YXRpb25TZXRcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZWdtZW50SW5mb3JtYXRpb25cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fHVuZGVmaW5lZH0gdGVtcGxhdGVcbiAqICAgICAgICAgICBDb250YWlucyB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIFNlZ21lbnRUZW1wbGF0ZSBub2RlXG4gKiBAcHJvcGVydHkge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgICAgQ29udGFpbnMgYSBsaXN0IG9mIGF0cnJpYnV0ZXMgZm9yIGVhY2ggUyBub2RlIHdpdGhpbiB0aGUgU2VnbWVudFRpbWVsaW5lIG5vZGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fHVuZGVmaW5lZH0gbGlzdFxuICogICAgICAgICAgIENvbnRhaW5zIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgU2VnbWVudExpc3Qgbm9kZVxuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSBiYXNlXG4gKiAgICAgICAgICAgQ29udGFpbnMgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBTZWdtZW50QmFzZSBub2RlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBhdmFpbGFibGUgU2VnbWVudCBpbmZvcm1hdGlvbiBjb250YWluZWQgd2l0aGluIHRoZSBBZGFwdGF0aW9uU2V0IG5vZGVcbiAqXG4gKiBAcGFyYW0ge05vZGV9IGFkYXB0YXRpb25TZXRcbiAqICAgICAgICBUaGUgQWRhcHRhdGlvblNldCBub2RlIHRvIGdldCBTZWdtZW50IGluZm9ybWF0aW9uIGZyb21cbiAqIEByZXR1cm4ge1NlZ21lbnRJbmZvcm1hdGlvbn1cbiAqICAgICAgICAgVGhlIFNlZ21lbnQgaW5mb3JtYXRpb24gY29udGFpbmVkIHdpdGhpbiB0aGUgcHJvdmlkZWQgQWRhcHRhdGlvblNldFxuICovXG5cbnZhciBnZXRTZWdtZW50SW5mb3JtYXRpb24gPSBmdW5jdGlvbiBnZXRTZWdtZW50SW5mb3JtYXRpb24oYWRhcHRhdGlvblNldCkge1xuICB2YXIgc2VnbWVudFRlbXBsYXRlID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdTZWdtZW50VGVtcGxhdGUnKVswXTtcbiAgdmFyIHNlZ21lbnRMaXN0ID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdTZWdtZW50TGlzdCcpWzBdO1xuICB2YXIgc2VnbWVudFVybHMgPSBzZWdtZW50TGlzdCAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudExpc3QsICdTZWdtZW50VVJMJykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIG1lcmdlKHtcbiAgICAgIHRhZzogJ1NlZ21lbnRVUkwnXG4gICAgfSwgcGFyc2VBdHRyaWJ1dGVzKHMpKTtcbiAgfSk7XG4gIHZhciBzZWdtZW50QmFzZSA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnU2VnbWVudEJhc2UnKVswXTtcbiAgdmFyIHNlZ21lbnRUaW1lbGluZVBhcmVudE5vZGUgPSBzZWdtZW50TGlzdCB8fCBzZWdtZW50VGVtcGxhdGU7XG4gIHZhciBzZWdtZW50VGltZWxpbmUgPSBzZWdtZW50VGltZWxpbmVQYXJlbnROb2RlICYmIGZpbmRDaGlsZHJlbihzZWdtZW50VGltZWxpbmVQYXJlbnROb2RlLCAnU2VnbWVudFRpbWVsaW5lJylbMF07XG4gIHZhciBzZWdtZW50SW5pdGlhbGl6YXRpb25QYXJlbnROb2RlID0gc2VnbWVudExpc3QgfHwgc2VnbWVudEJhc2UgfHwgc2VnbWVudFRlbXBsYXRlO1xuICB2YXIgc2VnbWVudEluaXRpYWxpemF0aW9uID0gc2VnbWVudEluaXRpYWxpemF0aW9uUGFyZW50Tm9kZSAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudEluaXRpYWxpemF0aW9uUGFyZW50Tm9kZSwgJ0luaXRpYWxpemF0aW9uJylbMF07IC8vIFNlZ21lbnRUZW1wbGF0ZSBpcyBoYW5kbGVkIHNsaWdodGx5IGRpZmZlcmVudGx5LCBzaW5jZSBpdCBjYW4gaGF2ZSBib3RoXG4gIC8vIEBpbml0aWFsaXphdGlvbiBhbmQgYW4gPEluaXRpYWxpemF0aW9uPiBub2RlLiAgQGluaXRpYWxpemF0aW9uIGNhbiBiZSB0ZW1wbGF0ZWQsXG4gIC8vIHdoaWxlIHRoZSBub2RlIGNhbiBoYXZlIGEgdXJsIGFuZCByYW5nZSBzcGVjaWZpZWQuICBJZiB0aGUgPFNlZ21lbnRUZW1wbGF0ZT4gaGFzXG4gIC8vIGJvdGggQGluaXRpYWxpemF0aW9uIGFuZCBhbiA8SW5pdGlhbGl6YXRpb24+IHN1YmVsZW1lbnQgd2Ugb3B0IHRvIG92ZXJyaWRlIHdpdGhcbiAgLy8gdGhlIG5vZGUsIGFzIHRoaXMgaW50ZXJhY3Rpb24gaXMgbm90IGRlZmluZWQgaW4gdGhlIHNwZWMuXG5cbiAgdmFyIHRlbXBsYXRlID0gc2VnbWVudFRlbXBsYXRlICYmIHBhcnNlQXR0cmlidXRlcyhzZWdtZW50VGVtcGxhdGUpO1xuXG4gIGlmICh0ZW1wbGF0ZSAmJiBzZWdtZW50SW5pdGlhbGl6YXRpb24pIHtcbiAgICB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvbiA9IHNlZ21lbnRJbml0aWFsaXphdGlvbiAmJiBwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudEluaXRpYWxpemF0aW9uKTtcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvbikge1xuICAgIC8vIElmIGl0IGlzIEBpbml0aWFsaXphdGlvbiB3ZSBjb252ZXJ0IGl0IHRvIGFuIG9iamVjdCBzaW5jZSB0aGlzIGlzIHRoZSBmb3JtYXQgdGhhdFxuICAgIC8vIGxhdGVyIGZ1bmN0aW9ucyB3aWxsIHJlbHkgb24gZm9yIHRoZSBpbml0aWFsaXphdGlvbiBzZWdtZW50LiAgVGhpcyBpcyBvbmx5IHZhbGlkXG4gICAgLy8gZm9yIDxTZWdtZW50VGVtcGxhdGU+XG4gICAgdGVtcGxhdGUuaW5pdGlhbGl6YXRpb24gPSB7XG4gICAgICBzb3VyY2VVUkw6IHRlbXBsYXRlLmluaXRpYWxpemF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHZhciBzZWdtZW50SW5mbyA9IHtcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgc2VnbWVudFRpbWVsaW5lOiBzZWdtZW50VGltZWxpbmUgJiYgZmluZENoaWxkcmVuKHNlZ21lbnRUaW1lbGluZSwgJ1MnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBwYXJzZUF0dHJpYnV0ZXMocyk7XG4gICAgfSksXG4gICAgbGlzdDogc2VnbWVudExpc3QgJiYgbWVyZ2UocGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRMaXN0KSwge1xuICAgICAgc2VnbWVudFVybHM6IHNlZ21lbnRVcmxzLFxuICAgICAgaW5pdGlhbGl6YXRpb246IHBhcnNlQXR0cmlidXRlcyhzZWdtZW50SW5pdGlhbGl6YXRpb24pXG4gICAgfSksXG4gICAgYmFzZTogc2VnbWVudEJhc2UgJiYgbWVyZ2UocGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRCYXNlKSwge1xuICAgICAgaW5pdGlhbGl6YXRpb246IHBhcnNlQXR0cmlidXRlcyhzZWdtZW50SW5pdGlhbGl6YXRpb24pXG4gICAgfSlcbiAgfTtcbiAgT2JqZWN0LmtleXMoc2VnbWVudEluZm8pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghc2VnbWVudEluZm9ba2V5XSkge1xuICAgICAgZGVsZXRlIHNlZ21lbnRJbmZvW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRJbmZvO1xufTtcbi8qKlxuICogQ29udGFpbnMgU2VnbWVudCBpbmZvcm1hdGlvbiBhbmQgYXR0cmlidXRlcyBuZWVkZWQgdG8gY29uc3RydWN0IGEgUGxheWxpc3Qgb2JqZWN0XG4gKiBmcm9tIGEgUmVwcmVzZW50YXRpb25cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uXG4gKiBAcHJvcGVydHkge1NlZ21lbnRJbmZvcm1hdGlvbn0gc2VnbWVudEluZm9cbiAqICAgICAgICAgICBTZWdtZW50IGluZm9ybWF0aW9uIGZvciB0aGlzIFJlcHJlc2VudGF0aW9uXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgICAgIEluaGVyaXRlZCBhdHRyaWJ1dGVzIGZvciB0aGlzIFJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBNYXBzIGEgUmVwcmVzZW50YXRpb24gbm9kZSB0byBhbiBvYmplY3QgY29udGFpbmluZyBTZWdtZW50IGluZm9ybWF0aW9uIGFuZCBhdHRyaWJ1dGVzXG4gKlxuICogQG5hbWUgaW5oZXJpdEJhc2VVcmxzQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtOb2RlfSByZXByZXNlbnRhdGlvblxuICogICAgICAgIFJlcHJlc2VudGF0aW9uIG5vZGUgZnJvbSB0aGUgbXBkXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9ufVxuICogICAgICAgICBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gY29uc3RydWN0IGEgUGxheWxpc3Qgb2JqZWN0XG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgUmVwcmVzZW50YXRpb24gbm9kZXMgdG9cbiAqIFNlZ21lbnQgaW5mb3JtYXRpb24gYW5kIGF0dHJpYnV0ZXMgdXNpbmcgaW5oZXJpdGVkIEJhc2VVUkwgbm9kZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzXG4gKiAgICAgICAgQ29udGFpbnMgYXR0cmlidXRlcyBpbmhlcml0ZWQgYnkgdGhlIEFkYXB0YXRpb25TZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFkYXB0YXRpb25TZXRCYXNlVXJsc1xuICogICAgICAgIENvbnRhaW5zIGxpc3Qgb2YgcmVzb2x2ZWQgYmFzZSB1cmxzIGluaGVyaXRlZCBieSB0aGUgQWRhcHRhdGlvblNldFxuICogQHBhcmFtIHtTZWdtZW50SW5mb3JtYXRpb259IGFkYXB0YXRpb25TZXRTZWdtZW50SW5mb1xuICogICAgICAgIENvbnRhaW5zIFNlZ21lbnQgaW5mb3JtYXRpb24gZm9yIHRoZSBBZGFwdGF0aW9uU2V0XG4gKiBAcmV0dXJuIHtpbmhlcml0QmFzZVVybHNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxudmFyIGluaGVyaXRCYXNlVXJscyA9IGZ1bmN0aW9uIGluaGVyaXRCYXNlVXJscyhhZGFwdGF0aW9uU2V0QXR0cmlidXRlcywgYWRhcHRhdGlvblNldEJhc2VVcmxzLCBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXByZXNlbnRhdGlvbikge1xuICAgIHZhciByZXBCYXNlVXJsRWxlbWVudHMgPSBmaW5kQ2hpbGRyZW4ocmVwcmVzZW50YXRpb24sICdCYXNlVVJMJyk7XG4gICAgdmFyIHJlcEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhhZGFwdGF0aW9uU2V0QmFzZVVybHMsIHJlcEJhc2VVcmxFbGVtZW50cyk7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBtZXJnZShhZGFwdGF0aW9uU2V0QXR0cmlidXRlcywgcGFyc2VBdHRyaWJ1dGVzKHJlcHJlc2VudGF0aW9uKSk7XG4gICAgdmFyIHJlcHJlc2VudGF0aW9uU2VnbWVudEluZm8gPSBnZXRTZWdtZW50SW5mb3JtYXRpb24ocmVwcmVzZW50YXRpb24pO1xuICAgIHJldHVybiByZXBCYXNlVXJscy5tYXAoZnVuY3Rpb24gKGJhc2VVcmwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlZ21lbnRJbmZvOiBtZXJnZShhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8sIHJlcHJlc2VudGF0aW9uU2VnbWVudEluZm8pLFxuICAgICAgICBhdHRyaWJ1dGVzOiBtZXJnZShhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgYmFzZVVybDogYmFzZVVybFxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbn07XG4vKipcbiAqIFRyYW5mb3JtcyBhIHNlcmllcyBvZiBjb250ZW50IHByb3RlY3Rpb24gbm9kZXMgdG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHBzc2ggZGF0YSBieSBrZXkgc3lzdGVtXG4gKlxuICogQHBhcmFtIHtOb2RlW119IGNvbnRlbnRQcm90ZWN0aW9uTm9kZXNcbiAqICAgICAgICBDb250ZW50IHByb3RlY3Rpb24gbm9kZXNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBwc3NoIGRhdGEgYnkga2V5IHN5c3RlbVxuICovXG5cbnZhciBnZW5lcmF0ZUtleVN5c3RlbUluZm9ybWF0aW9uID0gZnVuY3Rpb24gZ2VuZXJhdGVLZXlTeXN0ZW1JbmZvcm1hdGlvbihjb250ZW50UHJvdGVjdGlvbk5vZGVzKSB7XG4gIHJldHVybiBjb250ZW50UHJvdGVjdGlvbk5vZGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMobm9kZSk7IC8vIEFsdGhvdWdoIGl0IGNvdWxkIGJlIGFyZ3VlZCB0aGF0IGFjY29yZGluZyB0byB0aGUgVVVJRCBSRkMgc3BlYyB0aGUgVVVJRCBzdHJpbmcgKGEtZiBjaGFycykgc2hvdWxkIGJlIGdlbmVyYXRlZFxuICAgIC8vIGFzIGEgbG93ZXJjYXNlIHN0cmluZyBpdCBhbHNvIG1lbnRpb25zIGl0IHNob3VsZCBiZSB0cmVhdGVkIGFzIGNhc2UtaW5zZW5zaXRpdmUgb24gaW5wdXQuIFNpbmNlIHRoZSBrZXkgc3lzdGVtXG4gICAgLy8gVVVJRHMgaW4gdGhlIGtleVN5c3RlbXNNYXAgYXJlIGhhcmRjb2RlZCBhcyBsb3dlcmNhc2UgaW4gdGhlIGNvZGViYXNlIHRoZXJlIGlzbid0IGFueSByZWFzb24gbm90IHRvIGRvXG4gICAgLy8gLnRvTG93ZXJDYXNlKCkgb24gdGhlIGlucHV0IFVVSUQgc3RyaW5nIGZyb20gdGhlIG1hbmlmZXN0IChhdCBsZWFzdCBJIGNvdWxkIG5vdCB0aGluayBvZiBvbmUpLlxuXG4gICAgaWYgKGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkpIHtcbiAgICAgIGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkgPSBhdHRyaWJ1dGVzLnNjaGVtZUlkVXJpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgdmFyIGtleVN5c3RlbSA9IGtleVN5c3RlbXNNYXBbYXR0cmlidXRlcy5zY2hlbWVJZFVyaV07XG5cbiAgICBpZiAoa2V5U3lzdGVtKSB7XG4gICAgICBhY2Nba2V5U3lzdGVtXSA9IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICAgICAgfTtcbiAgICAgIHZhciBwc3NoTm9kZSA9IGZpbmRDaGlsZHJlbihub2RlLCAnY2VuYzpwc3NoJylbMF07XG5cbiAgICAgIGlmIChwc3NoTm9kZSkge1xuICAgICAgICB2YXIgcHNzaCA9IGdldENvbnRlbnQocHNzaE5vZGUpO1xuICAgICAgICBhY2Nba2V5U3lzdGVtXS5wc3NoID0gcHNzaCAmJiBkZWNvZGVCNjRUb1VpbnQ4QXJyYXkocHNzaCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTsgLy8gZGVmaW5lZCBpbiBBTlNJX1NDVEUgMjE0LTEgMjAxNlxuXG5cbnZhciBwYXJzZUNhcHRpb25TZXJ2aWNlTWV0YWRhdGEgPSBmdW5jdGlvbiBwYXJzZUNhcHRpb25TZXJ2aWNlTWV0YWRhdGEoc2VydmljZSkge1xuICAvLyA2MDggY2FwdGlvbnNcbiAgaWYgKHNlcnZpY2Uuc2NoZW1lSWRVcmkgPT09ICd1cm46c2N0ZTpkYXNoOmNjOmNlYS02MDg6MjAxNScpIHtcbiAgICB2YXIgdmFsdWVzID0gdHlwZW9mIHNlcnZpY2UudmFsdWUgIT09ICdzdHJpbmcnID8gW10gOiBzZXJ2aWNlLnZhbHVlLnNwbGl0KCc7Jyk7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgY2hhbm5lbDtcbiAgICAgIHZhciBsYW5ndWFnZTsgLy8gZGVmYXVsdCBsYW5ndWFnZSB0byB2YWx1ZVxuXG4gICAgICBsYW5ndWFnZSA9IHZhbHVlO1xuXG4gICAgICBpZiAoL15DQ1xcZD0vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhciBfdmFsdWUkc3BsaXQgPSB2YWx1ZS5zcGxpdCgnPScpO1xuXG4gICAgICAgIGNoYW5uZWwgPSBfdmFsdWUkc3BsaXRbMF07XG4gICAgICAgIGxhbmd1YWdlID0gX3ZhbHVlJHNwbGl0WzFdO1xuICAgICAgfSBlbHNlIGlmICgvXkNDXFxkJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgY2hhbm5lbCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoc2VydmljZS5zY2hlbWVJZFVyaSA9PT0gJ3VybjpzY3RlOmRhc2g6Y2M6Y2VhLTcwODoyMDE1Jykge1xuICAgIHZhciBfdmFsdWVzID0gdHlwZW9mIHNlcnZpY2UudmFsdWUgIT09ICdzdHJpbmcnID8gW10gOiBzZXJ2aWNlLnZhbHVlLnNwbGl0KCc7Jyk7XG5cbiAgICByZXR1cm4gX3ZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgZmxhZ3MgPSB7XG4gICAgICAgIC8vIHNlcnZpY2Ugb3IgY2hhbm5lbCBudW1iZXIgMS02M1xuICAgICAgICAnY2hhbm5lbCc6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gbGFuZ3VhZ2UgaXMgYSAzQUxQSEEgcGVyIElTTyA2MzkuMi9CXG4gICAgICAgIC8vIGZpZWxkIGlzIHJlcXVpcmVkXG4gICAgICAgICdsYW5ndWFnZSc6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gQklUIDEvMCBvciA/XG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWUgaXMgMSwgbWVhbmluZyAxNjo5IGFzcGVjdCByYXRpbywgMCBpcyA0OjMsID8gaXMgdW5rbm93blxuICAgICAgICAnYXNwZWN0UmF0aW8nOiAxLFxuICAgICAgICAvLyBCSVQgMS8wXG4gICAgICAgIC8vIGVhc3kgcmVhZGVyIGZsYWcgaW5kaWNhdGVkIHRoZSB0ZXh0IGlzIHRhaWxlZCB0byB0aGUgbmVlZHMgb2YgYmVnaW5uaW5nIHJlYWRlcnNcbiAgICAgICAgLy8gZGVmYXVsdCAwLCBvciBvZmZcbiAgICAgICAgJ2Vhc3lSZWFkZXInOiAwLFxuICAgICAgICAvLyBCSVQgMS8wXG4gICAgICAgIC8vIElmIDNkIG1ldGFkYXRhIGlzIHByZXNlbnQgKENFQS03MDguMSkgdGhlbiAxXG4gICAgICAgIC8vIGRlZmF1bHQgMFxuICAgICAgICAnM0QnOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoLz0vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhciBfdmFsdWUkc3BsaXQyID0gdmFsdWUuc3BsaXQoJz0nKSxcbiAgICAgICAgICAgIGNoYW5uZWwgPSBfdmFsdWUkc3BsaXQyWzBdLFxuICAgICAgICAgICAgX3ZhbHVlJHNwbGl0MiQgPSBfdmFsdWUkc3BsaXQyWzFdLFxuICAgICAgICAgICAgb3B0cyA9IF92YWx1ZSRzcGxpdDIkID09PSB2b2lkIDAgPyAnJyA6IF92YWx1ZSRzcGxpdDIkO1xuXG4gICAgICAgIGZsYWdzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICBmbGFncy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgICAgICBvcHRzLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgdmFyIF9vcHQkc3BsaXQgPSBvcHQuc3BsaXQoJzonKSxcbiAgICAgICAgICAgICAgbmFtZSA9IF9vcHQkc3BsaXRbMF0sXG4gICAgICAgICAgICAgIHZhbCA9IF9vcHQkc3BsaXRbMV07XG5cbiAgICAgICAgICBpZiAobmFtZSA9PT0gJ2xhbmcnKSB7XG4gICAgICAgICAgICBmbGFncy5sYW5ndWFnZSA9IHZhbDsgLy8gZXIgZm9yIGVhc3lSZWFkZXJ5XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnZXInKSB7XG4gICAgICAgICAgICBmbGFncy5lYXN5UmVhZGVyID0gTnVtYmVyKHZhbCk7IC8vIHdhciBmb3Igd2lkZSBhc3BlY3QgcmF0aW9cbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICd3YXInKSB7XG4gICAgICAgICAgICBmbGFncy5hc3BlY3RSYXRpbyA9IE51bWJlcih2YWwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJzNEJykge1xuICAgICAgICAgICAgZmxhZ3NbJzNEJ10gPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxhZ3MubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsYWdzLmNoYW5uZWwpIHtcbiAgICAgICAgZmxhZ3MuY2hhbm5lbCA9ICdTRVJWSUNFJyArIGZsYWdzLmNoYW5uZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbGFncztcbiAgICB9KTtcbiAgfVxufTtcbi8qKlxuICogTWFwcyBhbiBBZGFwdGF0aW9uU2V0IG5vZGUgdG8gYSBsaXN0IG9mIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqXG4gKiBAbmFtZSB0b1JlcHJlc2VudGF0aW9uc0NhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7Tm9kZX0gYWRhcHRhdGlvblNldFxuICogICAgICAgIEFkYXB0YXRpb25TZXQgbm9kZSBmcm9tIHRoZSBtcGRcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25bXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgUmVwcmVzZW50YWlvbiBpbmZvcm1hdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNhbGxiYWNrIGZvciBBcnJheS5wcm90b3R5cGUubWFwIGZvciBtYXBwaW5nIEFkYXB0YXRpb25TZXQgbm9kZXMgdG8gYSBsaXN0IG9mXG4gKiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBlcmlvZEF0dHJpYnV0ZXNcbiAqICAgICAgICBDb250YWlucyBhdHRyaWJ1dGVzIGluaGVyaXRlZCBieSB0aGUgUGVyaW9kXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwZXJpb2RCYXNlVXJsc1xuICogICAgICAgIENvbnRhaW5zIGxpc3Qgb2YgcmVzb2x2ZWQgYmFzZSB1cmxzIGluaGVyaXRlZCBieSB0aGUgUGVyaW9kXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwZXJpb2RTZWdtZW50SW5mb1xuICogICAgICAgIENvbnRhaW5zIFNlZ21lbnQgSW5mb3JtYXRpb24gYXQgdGhlIHBlcmlvZCBsZXZlbFxuICogQHJldHVybiB7dG9SZXByZXNlbnRhdGlvbnNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxudmFyIHRvUmVwcmVzZW50YXRpb25zID0gZnVuY3Rpb24gdG9SZXByZXNlbnRhdGlvbnMocGVyaW9kQXR0cmlidXRlcywgcGVyaW9kQmFzZVVybHMsIHBlcmlvZFNlZ21lbnRJbmZvKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWRhcHRhdGlvblNldCkge1xuICAgIHZhciBhZGFwdGF0aW9uU2V0QXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhhZGFwdGF0aW9uU2V0KTtcbiAgICB2YXIgYWRhcHRhdGlvblNldEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhwZXJpb2RCYXNlVXJscywgZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdCYXNlVVJMJykpO1xuICAgIHZhciByb2xlID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdSb2xlJylbMF07XG4gICAgdmFyIHJvbGVBdHRyaWJ1dGVzID0ge1xuICAgICAgcm9sZTogcGFyc2VBdHRyaWJ1dGVzKHJvbGUpXG4gICAgfTtcbiAgICB2YXIgYXR0cnMgPSBtZXJnZShwZXJpb2RBdHRyaWJ1dGVzLCBhZGFwdGF0aW9uU2V0QXR0cmlidXRlcywgcm9sZUF0dHJpYnV0ZXMpO1xuICAgIHZhciBhY2Nlc3NpYmlsaXR5ID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdBY2Nlc3NpYmlsaXR5JylbMF07XG4gICAgdmFyIGNhcHRpb25TZXJ2aWNlcyA9IHBhcnNlQ2FwdGlvblNlcnZpY2VNZXRhZGF0YShwYXJzZUF0dHJpYnV0ZXMoYWNjZXNzaWJpbGl0eSkpO1xuXG4gICAgaWYgKGNhcHRpb25TZXJ2aWNlcykge1xuICAgICAgYXR0cnMgPSBtZXJnZShhdHRycywge1xuICAgICAgICBjYXB0aW9uU2VydmljZXM6IGNhcHRpb25TZXJ2aWNlc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdMYWJlbCcpWzBdO1xuXG4gICAgaWYgKGxhYmVsICYmIGxhYmVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGFiZWxWYWwgPSBsYWJlbC5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZS50cmltKCk7XG4gICAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCB7XG4gICAgICAgIGxhYmVsOiBsYWJlbFZhbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnRQcm90ZWN0aW9uID0gZ2VuZXJhdGVLZXlTeXN0ZW1JbmZvcm1hdGlvbihmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0NvbnRlbnRQcm90ZWN0aW9uJykpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbnRlbnRQcm90ZWN0aW9uKS5sZW5ndGgpIHtcbiAgICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIHtcbiAgICAgICAgY29udGVudFByb3RlY3Rpb246IGNvbnRlbnRQcm90ZWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc2VnbWVudEluZm8gPSBnZXRTZWdtZW50SW5mb3JtYXRpb24oYWRhcHRhdGlvblNldCk7XG4gICAgdmFyIHJlcHJlc2VudGF0aW9ucyA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnUmVwcmVzZW50YXRpb24nKTtcbiAgICB2YXIgYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvID0gbWVyZ2UocGVyaW9kU2VnbWVudEluZm8sIHNlZ21lbnRJbmZvKTtcbiAgICByZXR1cm4gZmxhdHRlbihyZXByZXNlbnRhdGlvbnMubWFwKGluaGVyaXRCYXNlVXJscyhhdHRycywgYWRhcHRhdGlvblNldEJhc2VVcmxzLCBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8pKSk7XG4gIH07XG59O1xuLyoqXG4gKiBDb250YWlucyBhbGwgcGVyaW9kIGluZm9ybWF0aW9uIGZvciBtYXBwaW5nIG5vZGVzIG9udG8gYWRhcHRhdGlvbiBzZXRzLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBlcmlvZEluZm9ybWF0aW9uXG4gKiBAcHJvcGVydHkge05vZGV9IHBlcmlvZC5ub2RlXG4gKiAgICAgICAgICAgUGVyaW9kIG5vZGUgZnJvbSB0aGUgbXBkXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGVyaW9kLmF0dHJpYnV0ZXNcbiAqICAgICAgICAgICBQYXJzZWQgcGVyaW9kIGF0dHJpYnV0ZXMgZnJvbSBub2RlIHBsdXMgYW55IGFkZGVkXG4gKi9cblxuLyoqXG4gKiBNYXBzIGEgUGVyaW9kSW5mb3JtYXRpb24gb2JqZWN0IHRvIGEgbGlzdCBvZiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzIGZvciBhbGxcbiAqIEFkYXB0YXRpb25TZXQgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGUgUGVyaW9kLlxuICpcbiAqIEBuYW1lIHRvQWRhcHRhdGlvblNldHNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1BlcmlvZEluZm9ybWF0aW9ufSBwZXJpb2RcbiAqICAgICAgICBQZXJpb2Qgb2JqZWN0IGNvbnRhaW5pbmcgbmVjZXNzYXJ5IHBlcmlvZCBpbmZvcm1hdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZFN0YXJ0XG4gKiAgICAgICAgU3RhcnQgdGltZSBvZiB0aGUgUGVyaW9kIHdpdGhpbiB0aGUgbXBkXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uW119XG4gKiAgICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIFJlcHJlc2VudGFpb24gaW5mb3JtYXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBQZXJpb2Qgbm9kZXMgdG8gYSBsaXN0IG9mXG4gKiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1wZEF0dHJpYnV0ZXNcbiAqICAgICAgICBDb250YWlucyBhdHRyaWJ1dGVzIGluaGVyaXRlZCBieSB0aGUgbXBkXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBtcGRCYXNlVXJsc1xuICogICAgICAgIENvbnRhaW5zIGxpc3Qgb2YgcmVzb2x2ZWQgYmFzZSB1cmxzIGluaGVyaXRlZCBieSB0aGUgbXBkXG4gKiBAcmV0dXJuIHt0b0FkYXB0YXRpb25TZXRzQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIG1hcCBmdW5jdGlvblxuICovXG5cbnZhciB0b0FkYXB0YXRpb25TZXRzID0gZnVuY3Rpb24gdG9BZGFwdGF0aW9uU2V0cyhtcGRBdHRyaWJ1dGVzLCBtcGRCYXNlVXJscykge1xuICByZXR1cm4gZnVuY3Rpb24gKHBlcmlvZCwgaW5kZXgpIHtcbiAgICB2YXIgcGVyaW9kQmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKG1wZEJhc2VVcmxzLCBmaW5kQ2hpbGRyZW4ocGVyaW9kLm5vZGUsICdCYXNlVVJMJykpO1xuICAgIHZhciBwZXJpb2RBdHRyaWJ1dGVzID0gbWVyZ2UobXBkQXR0cmlidXRlcywge1xuICAgICAgcGVyaW9kU3RhcnQ6IHBlcmlvZC5hdHRyaWJ1dGVzLnN0YXJ0XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHBlcmlvZC5hdHRyaWJ1dGVzLmR1cmF0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgcGVyaW9kQXR0cmlidXRlcy5wZXJpb2REdXJhdGlvbiA9IHBlcmlvZC5hdHRyaWJ1dGVzLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBhZGFwdGF0aW9uU2V0cyA9IGZpbmRDaGlsZHJlbihwZXJpb2Qubm9kZSwgJ0FkYXB0YXRpb25TZXQnKTtcbiAgICB2YXIgcGVyaW9kU2VnbWVudEluZm8gPSBnZXRTZWdtZW50SW5mb3JtYXRpb24ocGVyaW9kLm5vZGUpO1xuICAgIHJldHVybiBmbGF0dGVuKGFkYXB0YXRpb25TZXRzLm1hcCh0b1JlcHJlc2VudGF0aW9ucyhwZXJpb2RBdHRyaWJ1dGVzLCBwZXJpb2RCYXNlVXJscywgcGVyaW9kU2VnbWVudEluZm8pKSk7XG4gIH07XG59O1xuLyoqXG4gKiBHZXRzIFBlcmlvZEBzdGFydCBwcm9wZXJ0eSBmb3IgYSBnaXZlbiBwZXJpb2QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuYXR0cmlidXRlc1xuICogICAgICAgIFBlcmlvZCBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucHJpb3JQZXJpb2RBdHRyaWJ1dGVzXVxuICogICAgICAgIFByaW9yIHBlcmlvZCBhdHRyaWJ1dGVzIChpZiBwcmlvciBwZXJpb2QgaXMgYXZhaWxhYmxlKVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubXBkVHlwZVxuICogICAgICAgIFRoZSBNUERAdHlwZSB0aGVzZSBwZXJpb2RzIGNhbWUgZnJvbVxuICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gKiAgICAgICAgIFRoZSBwZXJpb2Qgc3RhcnQsIG9yIG51bGwgaWYgaXQncyBhbiBlYXJseSBhdmFpbGFibGUgcGVyaW9kIG9yIGVycm9yXG4gKi9cblxudmFyIGdldFBlcmlvZFN0YXJ0ID0gZnVuY3Rpb24gZ2V0UGVyaW9kU3RhcnQoX3JlZikge1xuICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHByaW9yUGVyaW9kQXR0cmlidXRlcyA9IF9yZWYucHJpb3JQZXJpb2RBdHRyaWJ1dGVzLFxuICAgICAgbXBkVHlwZSA9IF9yZWYubXBkVHlwZTtcblxuICAvLyBTdW1tYXJ5IG9mIHBlcmlvZCBzdGFydCB0aW1lIGNhbGN1bGF0aW9uIGZyb20gREFTSCBzcGVjIHNlY3Rpb24gNS4zLjIuMVxuICAvL1xuICAvLyBBIHBlcmlvZCdzIHN0YXJ0IGlzIHRoZSBmaXJzdCBwZXJpb2QncyBzdGFydCArIHRpbWUgZWxhcHNlZCBhZnRlciBwbGF5aW5nIGFsbFxuICAvLyBwcmlvciBwZXJpb2RzIHRvIHRoaXMgb25lLiBQZXJpb2RzIGNvbnRpbnVlIG9uZSBhZnRlciB0aGUgb3RoZXIgaW4gdGltZSAod2l0aG91dFxuICAvLyBnYXBzKSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBwcmVzZW50YXRpb24uXG4gIC8vXG4gIC8vIFRoZSB2YWx1ZSBvZiBQZXJpb2RAc3RhcnQgc2hvdWxkIGJlOlxuICAvLyAxLiBpZiBQZXJpb2RAc3RhcnQgaXMgcHJlc2VudDogdmFsdWUgb2YgUGVyaW9kQHN0YXJ0XG4gIC8vIDIuIGlmIHByZXZpb3VzIHBlcmlvZCBleGlzdHMgYW5kIGl0IGhhcyBAZHVyYXRpb246IHByZXZpb3VzIFBlcmlvZEBzdGFydCArXG4gIC8vICAgIHByZXZpb3VzIFBlcmlvZEBkdXJhdGlvblxuICAvLyAzLiBpZiB0aGlzIGlzIGZpcnN0IHBlcmlvZCBhbmQgTVBEQHR5cGUgaXMgJ3N0YXRpYyc6IDBcbiAgLy8gNC4gaW4gYWxsIG90aGVyIGNhc2VzLCBjb25zaWRlciB0aGUgcGVyaW9kIGFuIFwiZWFybHkgYXZhaWxhYmxlIHBlcmlvZFwiIChub3RlOiBub3RcbiAgLy8gICAgY3VycmVudGx5IHN1cHBvcnRlZClcbiAgLy8gKDEpXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5zdGFydCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zdGFydDtcbiAgfSAvLyAoMilcblxuXG4gIGlmIChwcmlvclBlcmlvZEF0dHJpYnV0ZXMgJiYgdHlwZW9mIHByaW9yUGVyaW9kQXR0cmlidXRlcy5zdGFydCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHByaW9yUGVyaW9kQXR0cmlidXRlcy5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLnN0YXJ0ICsgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLmR1cmF0aW9uO1xuICB9IC8vICgzKVxuXG5cbiAgaWYgKCFwcmlvclBlcmlvZEF0dHJpYnV0ZXMgJiYgbXBkVHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyAoNClcbiAgLy8gVGhlcmUgaXMgY3VycmVudGx5IG5vIGxvZ2ljIGZvciBjYWxjdWxhdGluZyB0aGUgUGVyaW9kQHN0YXJ0IHZhbHVlIGlmIHRoZXJlIGlzXG4gIC8vIG5vIFBlcmlvZEBzdGFydCBvciBwcmlvciBQZXJpb2RAc3RhcnQgYW5kIFBlcmlvZEBkdXJhdGlvbiBhdmFpbGFibGUuIFRoaXMgaXMgbm90IG1hZGVcbiAgLy8gZXhwbGljaXQgYnkgdGhlIERBU0ggaW50ZXJvcCBndWlkZWxpbmVzIG9yIHRoZSBEQVNIIHNwZWMsIGhvd2V2ZXIsIHNpbmNlIHRoZXJlJ3NcbiAgLy8gbm90aGluZyBhYm91dCBhbnkgb3RoZXIgcmVzb2x1dGlvbiBzdHJhdGVnaWVzLCBpdCdzIGltcGxpZWQuIFRodXMsIHRoaXMgY2FzZSBzaG91bGRcbiAgLy8gYmUgY29uc2lkZXJlZCBhbiBlYXJseSBhdmFpbGFibGUgcGVyaW9kLCBvciBlcnJvciwgYW5kIG51bGwgc2hvdWxkIHN1ZmZpY2UgZm9yIGJvdGhcbiAgLy8gb2YgdGhvc2UgY2FzZXMuXG5cblxuICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIFRyYXZlcnNlcyB0aGUgbXBkIHhtbCB0cmVlIHRvIGdlbmVyYXRlIGEgbGlzdCBvZiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKiB0aGF0IGhhdmUgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgbm9kZXNcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG1wZFxuICogICAgICAgIFRoZSByb290IG5vZGUgb2YgdGhlIG1wZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICBBdmFpbGFibGUgb3B0aW9ucyBmb3IgaW5oZXJpdEF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1hbmlmZXN0VXJpXG4gKiAgICAgICAgVGhlIHVyaSBzb3VyY2Ugb2YgdGhlIG1wZFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuTk9XXG4gKiAgICAgICAgQ3VycmVudCB0aW1lIHBlciBEQVNIIElPUC4gIERlZmF1bHQgaXMgY3VycmVudCB0aW1lIGluIG1zIHNpbmNlIGVwb2NoXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5jbGllbnRPZmZzZXRcbiAqICAgICAgICBDbGllbnQgdGltZSBkaWZmZXJlbmNlIGZyb20gTk9XIChpbiBtaWxsaXNlY29uZHMpXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uW119XG4gKiAgICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uXG4gKi9cblxudmFyIGluaGVyaXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gaW5oZXJpdEF0dHJpYnV0ZXMobXBkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkbWFuaWZlc3RVcmkgPSBfb3B0aW9ucy5tYW5pZmVzdFVyaSxcbiAgICAgIG1hbmlmZXN0VXJpID0gX29wdGlvbnMkbWFuaWZlc3RVcmkgPT09IHZvaWQgMCA/ICcnIDogX29wdGlvbnMkbWFuaWZlc3RVcmksXG4gICAgICBfb3B0aW9ucyROT1cgPSBfb3B0aW9ucy5OT1csXG4gICAgICBOT1cgPSBfb3B0aW9ucyROT1cgPT09IHZvaWQgMCA/IERhdGUubm93KCkgOiBfb3B0aW9ucyROT1csXG4gICAgICBfb3B0aW9ucyRjbGllbnRPZmZzZXQgPSBfb3B0aW9ucy5jbGllbnRPZmZzZXQsXG4gICAgICBjbGllbnRPZmZzZXQgPSBfb3B0aW9ucyRjbGllbnRPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRjbGllbnRPZmZzZXQ7XG4gIHZhciBwZXJpb2ROb2RlcyA9IGZpbmRDaGlsZHJlbihtcGQsICdQZXJpb2QnKTtcblxuICBpZiAoIXBlcmlvZE5vZGVzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuSU5WQUxJRF9OVU1CRVJfT0ZfUEVSSU9EKTtcbiAgfVxuXG4gIHZhciBsb2NhdGlvbnMgPSBmaW5kQ2hpbGRyZW4obXBkLCAnTG9jYXRpb24nKTtcbiAgdmFyIG1wZEF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMobXBkKTtcbiAgdmFyIG1wZEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhbbWFuaWZlc3RVcmldLCBmaW5kQ2hpbGRyZW4obXBkLCAnQmFzZVVSTCcpKTsgLy8gU2VlIERBU0ggc3BlYyBzZWN0aW9uIDUuMy4xLjIsIFNlbWFudGljcyBvZiBNUEQgZWxlbWVudC4gRGVmYXVsdCB0eXBlIHRvICdzdGF0aWMnLlxuXG4gIG1wZEF0dHJpYnV0ZXMudHlwZSA9IG1wZEF0dHJpYnV0ZXMudHlwZSB8fCAnc3RhdGljJztcbiAgbXBkQXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbiA9IG1wZEF0dHJpYnV0ZXMubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiB8fCAwO1xuICBtcGRBdHRyaWJ1dGVzLk5PVyA9IE5PVztcbiAgbXBkQXR0cmlidXRlcy5jbGllbnRPZmZzZXQgPSBjbGllbnRPZmZzZXQ7XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBtcGRBdHRyaWJ1dGVzLmxvY2F0aW9ucyA9IGxvY2F0aW9ucy5tYXAoZ2V0Q29udGVudCk7XG4gIH1cblxuICB2YXIgcGVyaW9kcyA9IFtdOyAvLyBTaW5jZSB0b0FkYXB0YXRpb25TZXRzIGFjdHMgb24gaW5kaXZpZHVhbCBwZXJpb2RzIHJpZ2h0IG5vdywgdGhlIHNpbXBsZXN0IGFwcHJvYWNoIHRvXG4gIC8vIGFkZGluZyBwcm9wZXJ0aWVzIHRoYXQgcmVxdWlyZSBsb29raW5nIGF0IHByaW9yIHBlcmlvZHMgaXMgdG8gcGFyc2UgYXR0cmlidXRlcyBhbmQgYWRkXG4gIC8vIG1pc3Npbmcgb25lcyBiZWZvcmUgdG9BZGFwdGF0aW9uU2V0cyBpcyBjYWxsZWQuIElmIG1vcmUgc3VjaCBwcm9wZXJ0aWVzIGFyZSBhZGRlZCwgaXRcbiAgLy8gbWF5IGJlIGJldHRlciB0byByZWZhY3RvciB0b0FkYXB0YXRpb25TZXRzLlxuXG4gIHBlcmlvZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMobm9kZSk7IC8vIFVzZSB0aGUgbGFzdCBtb2RpZmllZCBwcmlvciBwZXJpb2QsIGFzIGl0IG1heSBjb250YWluIGFkZGVkIGluZm9ybWF0aW9uIG5lY2Vzc2FyeVxuICAgIC8vIGZvciB0aGlzIHBlcmlvZC5cblxuICAgIHZhciBwcmlvclBlcmlvZCA9IHBlcmlvZHNbaW5kZXggLSAxXTtcbiAgICBhdHRyaWJ1dGVzLnN0YXJ0ID0gZ2V0UGVyaW9kU3RhcnQoe1xuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIHByaW9yUGVyaW9kQXR0cmlidXRlczogcHJpb3JQZXJpb2QgPyBwcmlvclBlcmlvZC5hdHRyaWJ1dGVzIDogbnVsbCxcbiAgICAgIG1wZFR5cGU6IG1wZEF0dHJpYnV0ZXMudHlwZVxuICAgIH0pO1xuICAgIHBlcmlvZHMucHVzaCh7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbnM6IG1wZEF0dHJpYnV0ZXMubG9jYXRpb25zLFxuICAgIHJlcHJlc2VudGF0aW9uSW5mbzogZmxhdHRlbihwZXJpb2RzLm1hcCh0b0FkYXB0YXRpb25TZXRzKG1wZEF0dHJpYnV0ZXMsIG1wZEJhc2VVcmxzKSkpXG4gIH07XG59O1xuXG52YXIgc3RyaW5nVG9NcGRYbWwgPSBmdW5jdGlvbiBzdHJpbmdUb01wZFhtbChtYW5pZmVzdFN0cmluZykge1xuICBpZiAobWFuaWZlc3RTdHJpbmcgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5EQVNIX0VNUFRZX01BTklGRVNUKTtcbiAgfVxuXG4gIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIHZhciB4bWw7XG4gIHZhciBtcGQ7XG5cbiAgdHJ5IHtcbiAgICB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG1hbmlmZXN0U3RyaW5nLCAnYXBwbGljYXRpb24veG1sJyk7XG4gICAgbXBkID0geG1sICYmIHhtbC5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ01QRCcgPyB4bWwuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcbiAgfSBjYXRjaCAoZSkgey8vIGllIDExIHRocm93c3cgb24gaW52YWxpZCB4bWxcbiAgfVxuXG4gIGlmICghbXBkIHx8IG1wZCAmJiBtcGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuREFTSF9JTlZBTElEX1hNTCk7XG4gIH1cblxuICByZXR1cm4gbXBkO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIG1hbmlmZXN0IGZvciBhIFVUQ1RpbWluZyBub2RlLCByZXR1cm5pbmcgdGhlIG5vZGVzIGF0dHJpYnV0ZXMgaWYgZm91bmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXBkXG4gKiAgICAgICAgWE1MIHN0cmluZyBvZiB0aGUgTVBEIG1hbmlmZXN0XG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAqICAgICAgICAgQXR0cmlidXRlcyBvZiBVVENUaW1pbmcgbm9kZSBzcGVjaWZpZWQgaW4gdGhlIG1hbmlmZXN0LiBOdWxsIGlmIG5vbmUgZm91bmRcbiAqL1xuXG52YXIgcGFyc2VVVENUaW1pbmdTY2hlbWUgPSBmdW5jdGlvbiBwYXJzZVVUQ1RpbWluZ1NjaGVtZShtcGQpIHtcbiAgdmFyIFVUQ1RpbWluZ05vZGUgPSBmaW5kQ2hpbGRyZW4obXBkLCAnVVRDVGltaW5nJylbMF07XG5cbiAgaWYgKCFVVENUaW1pbmdOb2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgYXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhVVENUaW1pbmdOb2RlKTtcblxuICBzd2l0Y2ggKGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkpIHtcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLWhlYWQ6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1oZWFkOjIwMTInOlxuICAgICAgYXR0cmlidXRlcy5tZXRob2QgPSAnSEVBRCc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAteHNkYXRlOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaXNvOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAteHNkYXRlOjIwMTInOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaXNvOjIwMTInOlxuICAgICAgYXR0cmlidXRlcy5tZXRob2QgPSAnR0VUJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6ZGlyZWN0OjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmRpcmVjdDoyMDEyJzpcbiAgICAgIGF0dHJpYnV0ZXMubWV0aG9kID0gJ0RJUkVDVCc7XG4gICAgICBhdHRyaWJ1dGVzLnZhbHVlID0gRGF0ZS5wYXJzZShhdHRyaWJ1dGVzLnZhbHVlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1udHA6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6bnRwOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOnNudHA6MjAxNCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuVU5TVVBQT1JURURfVVRDX1RJTUlOR19TQ0hFTUUpO1xuICB9XG5cbiAgcmV0dXJuIGF0dHJpYnV0ZXM7XG59O1xuXG52YXIgVkVSU0lPTiA9IHZlcnNpb247XG4vKlxuICogR2l2ZW4gYSBEQVNIIG1hbmlmZXN0IHN0cmluZyBhbmQgb3B0aW9ucywgcGFyc2VzIHRoZSBEQVNIIG1hbmlmZXN0IGludG8gYW4gb2JqZWN0IGluIHRoZVxuICogZm9ybSBvdXRwdXRlZCBieSBtM3U4LXBhcnNlciBhbmQgYWNjZXB0ZWQgYnkgdmlkZW9qcy9odHRwLXN0cmVhbWluZy5cbiAqXG4gKiBGb3IgbGl2ZSBEQVNIIG1hbmlmZXN0cywgaWYgYHByZXZpb3VzTWFuaWZlc3RgIGlzIHByb3ZpZGVkIGluIG9wdGlvbnMsIHRoZW4gdGhlIG5ld2x5XG4gKiBwYXJzZWQgREFTSCBtYW5pZmVzdCB3aWxsIGhhdmUgaXRzIG1lZGlhIHNlcXVlbmNlIGFuZCBkaXNjb250aW51aXR5IHNlcXVlbmNlIHZhbHVlc1xuICogdXBkYXRlZCB0byByZWZsZWN0IGl0cyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgcHJpb3IgbWFuaWZlc3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hbmlmZXN0U3RyaW5nIC0gdGhlIERBU0ggbWFuaWZlc3QgYXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7b3B0aW9uc30gW29wdGlvbnNdIC0gYW55IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtYW5pZmVzdCBvYmplY3RcbiAqL1xuXG52YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShtYW5pZmVzdFN0cmluZywgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHBhcnNlZE1hbmlmZXN0SW5mbyA9IGluaGVyaXRBdHRyaWJ1dGVzKHN0cmluZ1RvTXBkWG1sKG1hbmlmZXN0U3RyaW5nKSwgb3B0aW9ucyk7XG4gIHZhciBwbGF5bGlzdHMgPSB0b1BsYXlsaXN0cyhwYXJzZWRNYW5pZmVzdEluZm8ucmVwcmVzZW50YXRpb25JbmZvKTtcbiAgcmV0dXJuIHRvTTN1OCh7XG4gICAgZGFzaFBsYXlsaXN0czogcGxheWxpc3RzLFxuICAgIGxvY2F0aW9uczogcGFyc2VkTWFuaWZlc3RJbmZvLmxvY2F0aW9ucyxcbiAgICBzaWR4TWFwcGluZzogb3B0aW9ucy5zaWR4TWFwcGluZyxcbiAgICBwcmV2aW91c01hbmlmZXN0OiBvcHRpb25zLnByZXZpb3VzTWFuaWZlc3RcbiAgfSk7XG59O1xuLyoqXG4gKiBQYXJzZXMgdGhlIG1hbmlmZXN0IGZvciBhIFVUQ1RpbWluZyBub2RlLCByZXR1cm5pbmcgdGhlIG5vZGVzIGF0dHJpYnV0ZXMgaWYgZm91bmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFuaWZlc3RTdHJpbmdcbiAqICAgICAgICBYTUwgc3RyaW5nIG9mIHRoZSBNUEQgbWFuaWZlc3RcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICogICAgICAgICBBdHRyaWJ1dGVzIG9mIFVUQ1RpbWluZyBub2RlIHNwZWNpZmllZCBpbiB0aGUgbWFuaWZlc3QuIE51bGwgaWYgbm9uZSBmb3VuZFxuICovXG5cblxudmFyIHBhcnNlVVRDVGltaW5nID0gZnVuY3Rpb24gcGFyc2VVVENUaW1pbmcobWFuaWZlc3RTdHJpbmcpIHtcbiAgcmV0dXJuIHBhcnNlVVRDVGltaW5nU2NoZW1lKHN0cmluZ1RvTXBkWG1sKG1hbmlmZXN0U3RyaW5nKSk7XG59O1xuXG5leHBvcnQgeyBWRVJTSU9OLCBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0JDEgYXMgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCwgZ2VuZXJhdGVTaWR4S2V5LCBpbmhlcml0QXR0cmlidXRlcywgcGFyc2UsIHBhcnNlVVRDVGltaW5nLCBzdHJpbmdUb01wZFhtbCwgdG9NM3U4LCB0b1BsYXlsaXN0cyB9O1xuIiwiLy8gc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMxODA4XG5cbihmdW5jdGlvbiAocm9vdCkge1xuICB2YXIgVVJMX1JFR0VYID1cbiAgICAvXig/PSgoPzpbYS16QS1aMC05K1xcLS5dKzopPykpXFwxKD89KCg/OlxcL1xcL1teXFwvPyNdKik/KSlcXDIoPz0oKD86KD86W14/I1xcL10qXFwvKSpbXjs/I1xcL10qKT8pKVxcMygoPzo7W14/I10qKT8pKFxcP1teI10qKT8oI1teXSopPyQvO1xuICB2YXIgRklSU1RfU0VHTUVOVF9SRUdFWCA9IC9eKD89KFteXFwvPyNdKikpXFwxKFteXSopJC87XG4gIHZhciBTTEFTSF9ET1RfUkVHRVggPSAvKD86XFwvfF4pXFwuKD89XFwvKS9nO1xuICB2YXIgU0xBU0hfRE9UX0RPVF9SRUdFWCA9IC8oPzpcXC98XilcXC5cXC5cXC8oPyFcXC5cXC5cXC8pW15cXC9dKig/PVxcLykvZztcblxuICB2YXIgVVJMVG9vbGtpdCA9IHtcbiAgICAvLyBJZiBvcHRzLmFsd2F5c05vcm1hbGl6ZSBpcyB0cnVlIHRoZW4gdGhlIHBhdGggd2lsbCBhbHdheXMgYmUgbm9ybWFsaXplZCBldmVuIHdoZW4gaXQgc3RhcnRzIHdpdGggLyBvciAvL1xuICAgIC8vIEUuZ1xuICAgIC8vIFdpdGggb3B0cy5hbHdheXNOb3JtYWxpemUgPSBmYWxzZSAoZGVmYXVsdCwgc3BlYyBjb21wbGlhbnQpXG4gICAgLy8gaHR0cDovL2EuY29tL2IvY2QgKyAvZS9mLy4uL2cgPT4gaHR0cDovL2EuY29tL2UvZi8uLi9nXG4gICAgLy8gV2l0aCBvcHRzLmFsd2F5c05vcm1hbGl6ZSA9IHRydWUgKG5vdCBzcGVjIGNvbXBsaWFudClcbiAgICAvLyBodHRwOi8vYS5jb20vYi9jZCArIC9lL2YvLi4vZyA9PiBodHRwOi8vYS5jb20vZS9nXG4gICAgYnVpbGRBYnNvbHV0ZVVSTDogZnVuY3Rpb24gKGJhc2VVUkwsIHJlbGF0aXZlVVJMLCBvcHRzKSB7XG4gICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgIC8vIHJlbW92ZSBhbnkgcmVtYWluaW5nIHNwYWNlIGFuZCBDUkxGXG4gICAgICBiYXNlVVJMID0gYmFzZVVSTC50cmltKCk7XG4gICAgICByZWxhdGl2ZVVSTCA9IHJlbGF0aXZlVVJMLnRyaW0oKTtcbiAgICAgIGlmICghcmVsYXRpdmVVUkwpIHtcbiAgICAgICAgLy8gMmEpIElmIHRoZSBlbWJlZGRlZCBVUkwgaXMgZW50aXJlbHkgZW1wdHksIGl0IGluaGVyaXRzIHRoZVxuICAgICAgICAvLyBlbnRpcmUgYmFzZSBVUkwgKGkuZS4sIGlzIHNldCBlcXVhbCB0byB0aGUgYmFzZSBVUkwpXG4gICAgICAgIC8vIGFuZCB3ZSBhcmUgZG9uZS5cbiAgICAgICAgaWYgKCFvcHRzLmFsd2F5c05vcm1hbGl6ZSkge1xuICAgICAgICAgIHJldHVybiBiYXNlVVJMO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiYXNlUGFydHNGb3JOb3JtYWxpc2UgPSBVUkxUb29sa2l0LnBhcnNlVVJMKGJhc2VVUkwpO1xuICAgICAgICBpZiAoIWJhc2VQYXJ0c0Zvck5vcm1hbGlzZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdHJ5aW5nIHRvIHBhcnNlIGJhc2UgVVJMLicpO1xuICAgICAgICB9XG4gICAgICAgIGJhc2VQYXJ0c0Zvck5vcm1hbGlzZS5wYXRoID0gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKFxuICAgICAgICAgIGJhc2VQYXJ0c0Zvck5vcm1hbGlzZS5wYXRoXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkVVJMRnJvbVBhcnRzKGJhc2VQYXJ0c0Zvck5vcm1hbGlzZSk7XG4gICAgICB9XG4gICAgICB2YXIgcmVsYXRpdmVQYXJ0cyA9IFVSTFRvb2xraXQucGFyc2VVUkwocmVsYXRpdmVVUkwpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdHJ5aW5nIHRvIHBhcnNlIHJlbGF0aXZlIFVSTC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWxhdGl2ZVBhcnRzLnNjaGVtZSkge1xuICAgICAgICAvLyAyYikgSWYgdGhlIGVtYmVkZGVkIFVSTCBzdGFydHMgd2l0aCBhIHNjaGVtZSBuYW1lLCBpdCBpc1xuICAgICAgICAvLyBpbnRlcnByZXRlZCBhcyBhbiBhYnNvbHV0ZSBVUkwgYW5kIHdlIGFyZSBkb25lLlxuICAgICAgICBpZiAoIW9wdHMuYWx3YXlzTm9ybWFsaXplKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbGF0aXZlVVJMO1xuICAgICAgICB9XG4gICAgICAgIHJlbGF0aXZlUGFydHMucGF0aCA9IFVSTFRvb2xraXQubm9ybWFsaXplUGF0aChyZWxhdGl2ZVBhcnRzLnBhdGgpO1xuICAgICAgICByZXR1cm4gVVJMVG9vbGtpdC5idWlsZFVSTEZyb21QYXJ0cyhyZWxhdGl2ZVBhcnRzKTtcbiAgICAgIH1cbiAgICAgIHZhciBiYXNlUGFydHMgPSBVUkxUb29sa2l0LnBhcnNlVVJMKGJhc2VVUkwpO1xuICAgICAgaWYgKCFiYXNlUGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB0cnlpbmcgdG8gcGFyc2UgYmFzZSBVUkwuJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWJhc2VQYXJ0cy5uZXRMb2MgJiYgYmFzZVBhcnRzLnBhdGggJiYgYmFzZVBhcnRzLnBhdGhbMF0gIT09ICcvJykge1xuICAgICAgICAvLyBJZiBuZXRMb2MgbWlzc2luZyBhbmQgcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggJy8nLCBhc3N1bWUgZXZlcnRoaW5nIGJlZm9yZSB0aGUgZmlyc3QgJy8nIGlzIHRoZSBuZXRMb2NcbiAgICAgICAgLy8gVGhpcyBjYXVzZXMgJ2V4YW1wbGUuY29tL2EnIHRvIGJlIGhhbmRsZWQgYXMgJy8vZXhhbXBsZS5jb20vYScgaW5zdGVhZCBvZiAnL2V4YW1wbGUuY29tL2EnXG4gICAgICAgIHZhciBwYXRoUGFydHMgPSBGSVJTVF9TRUdNRU5UX1JFR0VYLmV4ZWMoYmFzZVBhcnRzLnBhdGgpO1xuICAgICAgICBiYXNlUGFydHMubmV0TG9jID0gcGF0aFBhcnRzWzFdO1xuICAgICAgICBiYXNlUGFydHMucGF0aCA9IHBhdGhQYXJ0c1syXTtcbiAgICAgIH1cbiAgICAgIGlmIChiYXNlUGFydHMubmV0TG9jICYmICFiYXNlUGFydHMucGF0aCkge1xuICAgICAgICBiYXNlUGFydHMucGF0aCA9ICcvJztcbiAgICAgIH1cbiAgICAgIHZhciBidWlsdFBhcnRzID0ge1xuICAgICAgICAvLyAyYykgT3RoZXJ3aXNlLCB0aGUgZW1iZWRkZWQgVVJMIGluaGVyaXRzIHRoZSBzY2hlbWUgb2ZcbiAgICAgICAgLy8gdGhlIGJhc2UgVVJMLlxuICAgICAgICBzY2hlbWU6IGJhc2VQYXJ0cy5zY2hlbWUsXG4gICAgICAgIG5ldExvYzogcmVsYXRpdmVQYXJ0cy5uZXRMb2MsXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIHBhcmFtczogcmVsYXRpdmVQYXJ0cy5wYXJhbXMsXG4gICAgICAgIHF1ZXJ5OiByZWxhdGl2ZVBhcnRzLnF1ZXJ5LFxuICAgICAgICBmcmFnbWVudDogcmVsYXRpdmVQYXJ0cy5mcmFnbWVudCxcbiAgICAgIH07XG4gICAgICBpZiAoIXJlbGF0aXZlUGFydHMubmV0TG9jKSB7XG4gICAgICAgIC8vIDMpIElmIHRoZSBlbWJlZGRlZCBVUkwncyA8bmV0X2xvYz4gaXMgbm9uLWVtcHR5LCB3ZSBza2lwIHRvXG4gICAgICAgIC8vIFN0ZXAgNy4gIE90aGVyd2lzZSwgdGhlIGVtYmVkZGVkIFVSTCBpbmhlcml0cyB0aGUgPG5ldF9sb2M+XG4gICAgICAgIC8vIChpZiBhbnkpIG9mIHRoZSBiYXNlIFVSTC5cbiAgICAgICAgYnVpbHRQYXJ0cy5uZXRMb2MgPSBiYXNlUGFydHMubmV0TG9jO1xuICAgICAgICAvLyA0KSBJZiB0aGUgZW1iZWRkZWQgVVJMIHBhdGggaXMgcHJlY2VkZWQgYnkgYSBzbGFzaCBcIi9cIiwgdGhlXG4gICAgICAgIC8vIHBhdGggaXMgbm90IHJlbGF0aXZlIGFuZCB3ZSBza2lwIHRvIFN0ZXAgNy5cbiAgICAgICAgaWYgKHJlbGF0aXZlUGFydHMucGF0aFswXSAhPT0gJy8nKSB7XG4gICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLnBhdGgpIHtcbiAgICAgICAgICAgIC8vIDUpIElmIHRoZSBlbWJlZGRlZCBVUkwgcGF0aCBpcyBlbXB0eSAoYW5kIG5vdCBwcmVjZWRlZCBieSBhXG4gICAgICAgICAgICAvLyBzbGFzaCksIHRoZW4gdGhlIGVtYmVkZGVkIFVSTCBpbmhlcml0cyB0aGUgYmFzZSBVUkwgcGF0aFxuICAgICAgICAgICAgYnVpbHRQYXJ0cy5wYXRoID0gYmFzZVBhcnRzLnBhdGg7XG4gICAgICAgICAgICAvLyA1YSkgaWYgdGhlIGVtYmVkZGVkIFVSTCdzIDxwYXJhbXM+IGlzIG5vbi1lbXB0eSwgd2Ugc2tpcCB0b1xuICAgICAgICAgICAgLy8gc3RlcCA3OyBvdGhlcndpc2UsIGl0IGluaGVyaXRzIHRoZSA8cGFyYW1zPiBvZiB0aGUgYmFzZVxuICAgICAgICAgICAgLy8gVVJMIChpZiBhbnkpIGFuZFxuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLnBhcmFtcykge1xuICAgICAgICAgICAgICBidWlsdFBhcnRzLnBhcmFtcyA9IGJhc2VQYXJ0cy5wYXJhbXM7XG4gICAgICAgICAgICAgIC8vIDViKSBpZiB0aGUgZW1iZWRkZWQgVVJMJ3MgPHF1ZXJ5PiBpcyBub24tZW1wdHksIHdlIHNraXAgdG9cbiAgICAgICAgICAgICAgLy8gc3RlcCA3OyBvdGhlcndpc2UsIGl0IGluaGVyaXRzIHRoZSA8cXVlcnk+IG9mIHRoZSBiYXNlXG4gICAgICAgICAgICAgIC8vIFVSTCAoaWYgYW55KSBhbmQgd2Ugc2tpcCB0byBzdGVwIDcuXG4gICAgICAgICAgICAgIGlmICghcmVsYXRpdmVQYXJ0cy5xdWVyeSkge1xuICAgICAgICAgICAgICAgIGJ1aWx0UGFydHMucXVlcnkgPSBiYXNlUGFydHMucXVlcnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gNikgVGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYmFzZSBVUkwncyBwYXRoIChhbnl0aGluZ1xuICAgICAgICAgICAgLy8gZm9sbG93aW5nIHRoZSByaWdodG1vc3Qgc2xhc2ggXCIvXCIsIG9yIHRoZSBlbnRpcmUgcGF0aCBpZiBub1xuICAgICAgICAgICAgLy8gc2xhc2ggaXMgcHJlc2VudCkgaXMgcmVtb3ZlZCBhbmQgdGhlIGVtYmVkZGVkIFVSTCdzIHBhdGggaXNcbiAgICAgICAgICAgIC8vIGFwcGVuZGVkIGluIGl0cyBwbGFjZS5cbiAgICAgICAgICAgIHZhciBiYXNlVVJMUGF0aCA9IGJhc2VQYXJ0cy5wYXRoO1xuICAgICAgICAgICAgdmFyIG5ld1BhdGggPVxuICAgICAgICAgICAgICBiYXNlVVJMUGF0aC5zdWJzdHJpbmcoMCwgYmFzZVVSTFBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpICtcbiAgICAgICAgICAgICAgcmVsYXRpdmVQYXJ0cy5wYXRoO1xuICAgICAgICAgICAgYnVpbHRQYXJ0cy5wYXRoID0gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKG5ld1BhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ1aWx0UGFydHMucGF0aCA9PT0gbnVsbCkge1xuICAgICAgICBidWlsdFBhcnRzLnBhdGggPSBvcHRzLmFsd2F5c05vcm1hbGl6ZVxuICAgICAgICAgID8gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKHJlbGF0aXZlUGFydHMucGF0aClcbiAgICAgICAgICA6IHJlbGF0aXZlUGFydHMucGF0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkVVJMRnJvbVBhcnRzKGJ1aWx0UGFydHMpO1xuICAgIH0sXG4gICAgcGFyc2VVUkw6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHZhciBwYXJ0cyA9IFVSTF9SRUdFWC5leGVjKHVybCk7XG4gICAgICBpZiAoIXBhcnRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1lOiBwYXJ0c1sxXSB8fCAnJyxcbiAgICAgICAgbmV0TG9jOiBwYXJ0c1syXSB8fCAnJyxcbiAgICAgICAgcGF0aDogcGFydHNbM10gfHwgJycsXG4gICAgICAgIHBhcmFtczogcGFydHNbNF0gfHwgJycsXG4gICAgICAgIHF1ZXJ5OiBwYXJ0c1s1XSB8fCAnJyxcbiAgICAgICAgZnJhZ21lbnQ6IHBhcnRzWzZdIHx8ICcnLFxuICAgICAgfTtcbiAgICB9LFxuICAgIG5vcm1hbGl6ZVBhdGg6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAvLyBUaGUgZm9sbG93aW5nIG9wZXJhdGlvbnMgYXJlXG4gICAgICAvLyB0aGVuIGFwcGxpZWQsIGluIG9yZGVyLCB0byB0aGUgbmV3IHBhdGg6XG4gICAgICAvLyA2YSkgQWxsIG9jY3VycmVuY2VzIG9mIFwiLi9cIiwgd2hlcmUgXCIuXCIgaXMgYSBjb21wbGV0ZSBwYXRoXG4gICAgICAvLyBzZWdtZW50LCBhcmUgcmVtb3ZlZC5cbiAgICAgIC8vIDZiKSBJZiB0aGUgcGF0aCBlbmRzIHdpdGggXCIuXCIgYXMgYSBjb21wbGV0ZSBwYXRoIHNlZ21lbnQsXG4gICAgICAvLyB0aGF0IFwiLlwiIGlzIHJlbW92ZWQuXG4gICAgICBwYXRoID0gcGF0aC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpLnJlcGxhY2UoU0xBU0hfRE9UX1JFR0VYLCAnJyk7XG4gICAgICAvLyA2YykgQWxsIG9jY3VycmVuY2VzIG9mIFwiPHNlZ21lbnQ+Ly4uL1wiLCB3aGVyZSA8c2VnbWVudD4gaXMgYVxuICAgICAgLy8gY29tcGxldGUgcGF0aCBzZWdtZW50IG5vdCBlcXVhbCB0byBcIi4uXCIsIGFyZSByZW1vdmVkLlxuICAgICAgLy8gUmVtb3ZhbCBvZiB0aGVzZSBwYXRoIHNlZ21lbnRzIGlzIHBlcmZvcm1lZCBpdGVyYXRpdmVseSxcbiAgICAgIC8vIHJlbW92aW5nIHRoZSBsZWZ0bW9zdCBtYXRjaGluZyBwYXR0ZXJuIG9uIGVhY2ggaXRlcmF0aW9uLFxuICAgICAgLy8gdW50aWwgbm8gbWF0Y2hpbmcgcGF0dGVybiByZW1haW5zLlxuICAgICAgLy8gNmQpIElmIHRoZSBwYXRoIGVuZHMgd2l0aCBcIjxzZWdtZW50Pi8uLlwiLCB3aGVyZSA8c2VnbWVudD4gaXMgYVxuICAgICAgLy8gY29tcGxldGUgcGF0aCBzZWdtZW50IG5vdCBlcXVhbCB0byBcIi4uXCIsIHRoYXRcbiAgICAgIC8vIFwiPHNlZ21lbnQ+Ly4uXCIgaXMgcmVtb3ZlZC5cbiAgICAgIHdoaWxlIChcbiAgICAgICAgcGF0aC5sZW5ndGggIT09IChwYXRoID0gcGF0aC5yZXBsYWNlKFNMQVNIX0RPVF9ET1RfUkVHRVgsICcnKSkubGVuZ3RoXG4gICAgICApIHt9XG4gICAgICByZXR1cm4gcGF0aC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgIH0sXG4gICAgYnVpbGRVUkxGcm9tUGFydHM6IGZ1bmN0aW9uIChwYXJ0cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcGFydHMuc2NoZW1lICtcbiAgICAgICAgcGFydHMubmV0TG9jICtcbiAgICAgICAgcGFydHMucGF0aCArXG4gICAgICAgIHBhcnRzLnBhcmFtcyArXG4gICAgICAgIHBhcnRzLnF1ZXJ5ICtcbiAgICAgICAgcGFydHMuZnJhZ21lbnRcbiAgICAgICk7XG4gICAgfSxcbiAgfTtcblxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuICAgIG1vZHVsZS5leHBvcnRzID0gVVJMVG9vbGtpdDtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFVSTFRvb2xraXQ7XG4gICAgfSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgZXhwb3J0c1snVVJMVG9vbGtpdCddID0gVVJMVG9vbGtpdDtcbiAgZWxzZSByb290WydVUkxUb29sa2l0J10gPSBVUkxUb29sa2l0O1xufSkodGhpcyk7XG4iLCJleHBvcnQgY2xhc3MgTlhUTWVkaWFUcmFjayB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZFNlZ21lbnQoc2VnbWVudCkge1xuICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgfVxuXG4gIGdldFNlZ21lbnQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWdtZW50c1tpbmRleF07XG4gIH1cblxuICBzZXRBbGxTZWdtZW50cyhzZWdtZW50cykge1xuICAgIHRoaXMuc2VnbWVudHMgPSBzZWdtZW50cztcbiAgfVxuXG4gIGdldEFsbFNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWdtZW50cztcbiAgfVxuXG4gIHNldFRyYWNrTmFtZSh0cmFja05hbWUpIHtcbiAgICB0aGlzLnRyYWNrTmFtZSA9IHRyYWNrTmFtZTtcbiAgfVxuXG4gIGdldFNlZ21lbnRVcmwoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5zZWdtZW50cyAmJiB0aGlzLnNlZ21lbnRzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHNbaW5kZXhdLnJlc29sdmVkVXJpXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiaW1wb3J0IHsgcGFyc2UgYXMgbXBkUGFyc2VyIH0gZnJvbSBcIm1wZC1wYXJzZXJcIjtcblxudmFyIHBhcnNlZE1hbmlmZXN0O1xuY29uc3QgbWFuaWZlc3RVcmkgPSAnaHR0cHM6Ly9kMjRyd3hudDd2dzlxYi5jbG91ZGZyb250Lm5ldC92MS9kYXNoL2U2ZDIzNDk2NTY0NWI0MTFhZDU3MjgwMmI2YzlkNWExMDc5OWM5YzEvQWxsX1JlZmVyZW5jZV9TdHJlYW1zLzQ1NzdkY2E1ZjhhNDQ3NTY4NzVhYjVjYzkxM2NkMWYxL2luZGV4Lm1wZCc7XG4vLyBEUk0gdm9kXG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL2QyNHJ3eG50N3Z3OXFiLmNsb3VkZnJvbnQubmV0L3YxL2Rhc2gvZTZkMjM0OTY1NjQ1YjQxMWFkNTcyODAyYjZjOWQ1YTEwNzk5YzljMS9BbGxfUmVmZXJlbmNlX1N0cmVhbXMvMmZjMjM5NDc5NDU4NDFiOWIxYmU5NzY4ZjljMTNlNzUvaW5kZXgubXBkJztcbi8vIERSTSBMaXZlXG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL2QyNHJ3eG50N3Z3OXFiLmNsb3VkZnJvbnQubmV0L3YxL2Rhc2gvZTZkMjM0OTY1NjQ1YjQxMWFkNTcyODAyYjZjOWQ1YTEwNzk5YzljMS9BbGxfUmVmZXJlbmNlX1N0cmVhbXMvMmZjMjM5NDc5NDU4NDFiOWIxYmU5NzY4ZjljMTNlNzUvaW5kZXgubXBkJztcbi8vIGNvbnN0IG1hbmlmZXN0VXJpID0gJ2h0dHBzOi8vZGFzaC5ha2FtYWl6ZWQubmV0L2FrYW1haS9iYmJfMzBmcHMvYmJiXzMwZnBzLm1wZCc7XG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL2Rhc2guYWthbWFpemVkLm5ldC9kYXNoMjY0L1Rlc3RDYXNlcy81YS9ub21vci8xLm1wZCc7XG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL21lZGlhLmF4cHJvZC5uZXQvVGVzdFZlY3RvcnMvdjctQ2xlYXIvTWFuaWZlc3RfMTA4MHAubXBkJztcblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VNUEQoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG1hbmlmZXN0VXJpKTtcbiAgY29uc3QgbWFuaWZlc3QgPSBhd2FpdCByZXMudGV4dCgpO1xuICBwYXJzZWRNYW5pZmVzdCA9IG1wZFBhcnNlcihtYW5pZmVzdCwgeyBtYW5pZmVzdFVyaSB9KTtcbiAgcmV0dXJuIHBhcnNlZE1hbmlmZXN0O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWxvYWRNUEQoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobWFuaWZlc3RVcmkpO1xuICAgIGNvbnN0IG1hbmlmZXN0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICB2YXIgbmV3UGFyc2VkTWFuaWZlc3QgPSBtcGRQYXJzZXIobWFuaWZlc3QsIHsgbWFuaWZlc3RVcmksIHByZXZpb3VzTWFuaWZlc3Q6IHBhcnNlZE1hbmlmZXN0IH0pO1xuICAgIHJldHVybiBuZXdQYXJzZWRNYW5pZmVzdDtcbn1cblxuZXhwb3J0IHsgcGFyc2VNUEQsIHJlbG9hZE1QRCB9O1xuIiwiLyoqXG4gKiBzbGVlcCBmb3IgdGhlIHNwZWNpZmllZCBhbW91bnQgb2YgdGltZVxuICogQHBhcmFtIHsqfSBtcyBcbiAqIEByZXR1cm5zIFxuICovXG5mdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLyoqXG4gKiBGZXRjaCB1cmwgYW5kIHJldHVybiB0aGUgYXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7Kn0gdXJsIFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIGdldE1lZGlhKHVybCkge1xuICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5leHBlY3RlZCBzdGF0dXMgY29kZSBcIiArIHJlcy5zdGF0dXMgKyBcIiBmb3IgXCIgKyB1cmwpO1xuICAgICAgICB0aHJvdyByZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmFycmF5QnVmZmVyKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5kaXIoZXJyKSk7XG59XG5cbmV4cG9ydCB7c2xlZXAsIGdldE1lZGlhfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYXJzZU1QRCwgcmVsb2FkTVBEIH0gZnJvbSBcIi4vbXBkXCI7XG5pbXBvcnQgeyBzZXR1cEVNRSB9IGZyb20gXCIuL2RybVwiO1xuaW1wb3J0IHsgc2xlZXAsIGdldE1lZGlhIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IE5YVE1lZGlhVHJhY2sgfSBmcm9tIFwiLi9tZWRpYXRyYWNrXCJcblxuY2xhc3MgTlhQbGF5ZXIge1xuICBvcHRpb25zO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBtYWluIGVudHJhbmNlIG9mIG54dFBsYXllclxuICAqIEByZXR1cm5zIFxuICAqL1xuICBhc3luYyBwbGF5KCkge1xuICAgIC8qKiBwcmUtZGVmaW5lIHNvdXJjZUJ1ZmZlciAqL1xuICAgIGxldCB2aWRlb1NyY0J1ZmZlcjtcbiAgICBsZXQgYXVkaW9TcmNCdWZmZXI7XG4gICAgXG4gICAgLyoqIC0tLSB1cGRhdGUgbWFuaWZlc3QgZGF0YSAtLS0gKiovXG4gICAgLy8gY29uc3Qgc3RhcnRSZWxvYWRpbmdMb29wID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIC8vICAgd2hpbGUgKHRydWUpIHtcbiAgICAvLyAgICAgdmFyIGZldGNoVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIC8vICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUgPj0gMjAwMCkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyZWxvYWQgbWFuaWZlc3QuLi4nKTtcbiAgICAvLyAgICAgICBtYW5pZmVzdERhdGEgPSBhd2FpdCByZWxvYWRNUEQoKTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnbWFuaWZlc3QgcmVsb2FkZWQuJyk7XG4gICAgLy8gICAgICAgbnVtYmVyT2ZWaWRlb0NodW5rcyA9IG1hbmlmZXN0RGF0YS5wbGF5bGlzdHNbMF0uc2VnbWVudHMubGVuZ3RoO1xuICAgIC8vICAgICAgIG51bWJlck9mQXVkaW9DaHVua3MgPSBtYW5pZmVzdERhdGEubWVkaWFHcm91cHMuQVVESU8uYXVkaW8uZW5nLnBsYXlsaXN0c1swXS5zZWdtZW50cy5sZW5ndGg7XG4gICAgLy8gICAgICAgc3RhcnRUaW1lID0gZmV0Y2hUaW1lO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNsZWVwKDEwMCk7XG4gICAgLy8gICB9XG4gICAgLy8gfTtcbiAgICAvLyBzdGFydFJlbG9hZGluZ0xvb3AoKTtcbiAgICBcbiAgICAvKiogcGFyc2UgbWFuaWZlc3QgYnkgJ21wZC1wYXJzZXInICovXG4gICAgbGV0IG1hbmlmZXN0RGF0YSA9IGF3YWl0IHBhcnNlTVBEKCk7XG5cbiAgICB2YXIgdmlkZW9UcmFjayA9IG5ldyBOWFRNZWRpYVRyYWNrKCk7XG4gICAgdmlkZW9UcmFjay5zZXRBbGxTZWdtZW50cyhtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzKTtcbiAgICBsZXQgbnVtYmVyT2ZWaWRlb0NodW5rcyA9IHZpZGVvVHJhY2suc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgdmFyIGF1ZGlvVHJhY2sgPSBuZXcgTlhUTWVkaWFUcmFjaygpO1xuICAgIGF1ZGlvVHJhY2suc2V0QWxsU2VnbWVudHMobWFuaWZlc3REYXRhLm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvLmVuZy5wbGF5bGlzdHNbMF0uc2VnbWVudHMpO1xuICAgIGxldCBudW1iZXJPZkF1ZGlvQ2h1bmtzID0gYXVkaW9UcmFjay5zZWdtZW50cy5sZW5ndGg7XG5cbiAgICAvLyBhd3MgbXVsdGkgcGVyaW9kXG4gICAgdmFyIGluaXRVcmwgPSBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzWzBdLm1hcC5yZXNvbHZlZFVyaTtcbiAgICAvLyB0ZWFycyB3aWRldmluZSB0ZXN0XG4gICAgLy8gdmFyIGluaXRVcmwgPSBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNpZHgudXJpXG4gICAgdmFyIGluaXRTZWdtZW50ID0gaW5pdFVybDtcblxuICAgIC8vIGF3cyBtdWx0aSBwZXJpb2RcbiAgICB2YXIgYXVkaW9Jbml0VXJsID0gbWFuaWZlc3REYXRhLm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvLmVuZy5wbGF5bGlzdHNbMF0uc2VnbWVudHNbMF0ubWFwLnJlc29sdmVkVXJpO1xuICAgIC8vIHRlYXJzIHdpZGV2aW5lIHRlc3RcbiAgICAvLyB2YXIgYXVkaW9Jbml0VXJsID0gbWFuaWZlc3REYXRhLm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvLmVuLnBsYXlsaXN0c1swXS5zaWR4LnVyaTtcbiAgICB2YXIgYXVkaW9Jbml0U2VnbWVudCA9IGF1ZGlvSW5pdFVybDtcbiAgICAvLyB2YXIgaW5pdFVybCA9IGJhc2VVcmwgKyBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzWzBdLm1hcC51cmk7XG5cbiAgICAvKiogZ2V0IHZpZGVvIGVsZW1lbnQgdW5kZXIgY29udHJvbCAqL1xuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpO1xuICAgIC8vIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlbztcblxuICAgIC8qKiBjaGVjayBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBNU0Ugb3Igbm90ICovXG4gICAgaWYgKCF3aW5kb3cuTWVkaWFTb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBNZWRpYSBTb3VyY2UgQVBJIGF2YWlsYWJsZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogY3JlYXRlIE1TRSBpbnN0YW5jZSAqL1xuICAgIGxldCBtZWRpYVNvdXJjZSA9IG5ldyBNZWRpYVNvdXJjZSgpO1xuICAgIHZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG1lZGlhU291cmNlKTtcblxuICAgIC8vIExvZyBldmVudHMgZGlzcGF0Y2hlZCB0byBtYWtlIGRlYnVnZ2luZyBlYXNpZXIuLi5cbiAgICBbIFwiY2FucGxheVwiLCBcImNhbnBsYXl0aHJvdWdoXCIsIFwiZW5jcnlwdGVkXCIsIFwiZW5kZWRcIiwgXCJlcnJvclwiLCBcImxvYWRlZGRhdGFcIixcbiAgICAgIFwibG9hZGVkbWV0YWRhdGFcIiwgXCJsb2Fkc3RhcnRcIiwgXCJwYXVzZVwiLCBcInBsYXlcIiwgXCJwbGF5aW5nXCIsIFwicHJvZ3Jlc3NcIixcbiAgICAgIFwic3RhbGxlZFwiLCBcInN1c3BlbmRcIiwgXCJ3YWl0aW5nXCIsXG4gICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKGUsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVZFTlQ6IFwiICsgZSk7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgdmlkZW9NaW1lVHlwZSA9ICd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNjQwMDFlXCInO1xuICAgIGxldCBhdWRpb01pbWVUeXBlID0gJ2F1ZGlvL21wNDsgY29kZWNzPVwibXA0YS40MC4yXCInO1xuXG4gICAgLyoqIEFkZCBjYWxsYmFjayBmdW5jdGlvbiBbb25NZWRpYVNvdXJjZU9wZW5dICAqL1xuICAgIG1lZGlhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIoXCJzb3VyY2VvcGVuXCIsIG9uTWVkaWFTb3VyY2VPcGVuKTtcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICB2aWRlby5wbGF5KCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAqIFNldHVwIEVNRSBPcHRpb25zXG4gICAgKi9cbiAgICAvLyB2YXIgZW1lT3B0aW9ucztcbiAgICAvLyBpZiAodHlwZW9mKE1lZGlhS2V5U3lzdGVtQWNjZXNzLnByb3RvdHlwZS5nZXRDb25maWd1cmF0aW9uKSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gICAvLyBGaXJlZm94IDQzIGFuZCBlYXJsaWVyIHVzZWQgYSBkaWZmZXJlbnQgc3R5bGUgb2YgZGVmaW5pbmcgY29uZmlndXJhdGlvbnNcbiAgICAvLyAgIC8vIGZvciBuYXZpZ2F0b3IucmVxdWVzdE1lZGlhS2V5U3lzdGVtIHRoYXQgZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBzcGVjLlxuICAgIC8vICAgbG9nKFwiRGV0ZWN0ZWQgb2Jzb2xldGUgbmF2aWdhdG9yLnJlcXVlc3RNZWRpYUtleVN5c3RlbSBvcHRpb25zIHN0eWxlLlwiKTtcbiAgICAvLyAgIGVtZU9wdGlvbnMgPSBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBpbml0RGF0YVR5cGU6IFwiY2VuY1wiLFxuICAgIC8vICAgICAgIHZpZGVvVHlwZTogdmlkZW9NaW1lVHlwZSxcbiAgICAvLyAgICAgICBhdWRpb1R5cGU6IGF1ZGlvTWltZVR5cGVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgZW1lT3B0aW9ucyA9IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGluaXREYXRhVHlwZXM6IFsna2V5aWRzJywnY2VuYyddLFxuICAgIC8vICAgICAgIHZpZGVvQ2FwYWJpbGl0aWVzOiBbe2NvbnRlbnRUeXBlOiB2aWRlb01pbWVUeXBlfV0sXG4gICAgLy8gICAgICAgYXVkaW9DYXBhYmlsaXRpZXM6IFt7Y29udGVudFR5cGU6IGF1ZGlvTWltZVR5cGV9XSxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXTtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAqIEluaXRpYWxpemUgRW5jcnlwdGVkIE1lZGlhIEV4dGVudGlvblxuICAgICovXG4gICAgLy8gc2V0dXBFTUUodmlkZW8sIGtleVN5c3RlbXMud2lkZXZpbmVbMF0sIGVtZU9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgKiBcbiAgICAqL1xuICAgIGZ1bmN0aW9uIG9uTWVkaWFTb3VyY2VPcGVuKCkge1xuXG4gICAgICB2aWRlb1NyY0J1ZmZlciA9IG1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcih2aWRlb01pbWVUeXBlKTtcbiAgICAgIHZpZGVvU3JjQnVmZmVyLm1vZGUgPSAnc2VxdWVuY2UnO1xuICAgICAgXG4gICAgICBhdWRpb1NyY0J1ZmZlciA9IG1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihhdWRpb01pbWVUeXBlKTtcbiAgICAgIGF1ZGlvU3JjQnVmZmVyLm1vZGUgPSAnc2VxdWVuY2UnO1xuXG4gICAgICB2aWRlb1NyY0J1ZmZlci5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZW5kXCIsIG5leHRTZWdtZW50KFwidmlkZW9cIikpO1xuICAgICAgYXVkaW9TcmNCdWZmZXIuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCBuZXh0U2VnbWVudChcImF1ZGlvXCIpKTtcblxuICAgICAgLy8gYXdzIG11bHRpIHBlcmlvZFxuICAgICAgdmFyIGluaXRVcmwgPSBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzWzBdLm1hcC5yZXNvbHZlZFVyaTtcbiAgICAgIC8vIHRlYXJzIHdpZGV2aW5lIHRlc3RcbiAgICAgIC8vIHZhciBpbml0VXJsID0gbWFuaWZlc3REYXRhLnBsYXlsaXN0c1swXS5zaWR4LnVyaVxuICAgICAgdmFyIGluaXRTZWdtZW50ID0gaW5pdFVybDtcblxuICAgICAgLy8gYXdzIG11bHRpIHBlcmlvZFxuICAgICAgdmFyIGF1ZGlvSW5pdFVybCA9IG1hbmlmZXN0RGF0YS5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpby5lbmcucGxheWxpc3RzWzBdLnNlZ21lbnRzWzBdLm1hcC5yZXNvbHZlZFVyaTtcbiAgICAgIC8vIHRlYXJzIHdpZGV2aW5lIHRlc3RcbiAgICAgIC8vIHZhciBhdWRpb0luaXRVcmwgPSBtYW5pZmVzdERhdGEubWVkaWFHcm91cHMuQVVESU8uYXVkaW8uZW4ucGxheWxpc3RzWzBdLnNpZHgudXJpO1xuICAgICAgdmFyIGF1ZGlvSW5pdFNlZ21lbnQgPSBhdWRpb0luaXRVcmw7XG4gICAgICAvLyB2YXIgaW5pdFVybCA9IGJhc2VVcmwgKyBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzWzBdLm1hcC51cmk7XG5cbiAgICAgIGdldE1lZGlhKGluaXRVcmwpLnRoZW4oYXBwZW5kVG9CdWZmZXIoXCJ2aWRlb1wiKSk7XG4gICAgICBnZXRNZWRpYShhdWRpb0luaXRVcmwpLnRoZW4oYXBwZW5kVG9CdWZmZXIoXCJhdWRpb1wiKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dFNlZ21lbnQodHlwZSkge1xuICAgICAgbGV0IHZpZGVvSW5kZXggPSAwO1xuICAgICAgbGV0IGF1ZGlvSW5kZXggPSAwO1xuICAgICAgLy8gY29uc3QgdG1wVXJsID0gdHlwZSA9PT0gXCJ2aWRlb1wiID8gdGVtcGxhdGVVcmwgOiBhdWRpb1RtcFVybDtcbiAgICAgIGNvbnN0IHNvdXJjZWJ1ZmZlciA9IHR5cGUgPT09IFwidmlkZW9cIiA/IHZpZGVvU3JjQnVmZmVyIDogYXVkaW9TcmNCdWZmZXI7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmIChtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzLmxlbmd0aCA9PT0gMCkgeyBcbiAgICAgICAgICBzb3VyY2VidWZmZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCBuZXh0U2VnbWVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwidmlkZW9cIikge1xuICAgICAgICAgIGNvbnN0IHNlZ21lbnRVcmwgPSB2aWRlb1RyYWNrLmdldFNlZ21lbnRVcmwodmlkZW9JbmRleCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NlZ21lbnRVcmwgPj4+ICcsIHNlZ21lbnRVcmwpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICh2aWRlb1RyYWNrLmdldFNlZ21lbnQodmlkZW9JbmRleCkubWFwLnJlc29sdmVkVXJpID09PSBpbml0U2VnbWVudCkge1xuICAgICAgICAgICAgZ2V0TWVkaWEoc2VnbWVudFVybCkudGhlbihhcHBlbmRUb0J1ZmZlcih0eXBlKSk7XG4gICAgICAgICAgICB2aWRlb0luZGV4Kys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRTZWdtZW50ID0gbWFuaWZlc3REYXRhLnBsYXlsaXN0c1swXS5zZWdtZW50c1t2aWRlb0luZGV4XS5tYXAucmVzb2x2ZWRVcmk7XG4gICAgICAgICAgICBnZXRNZWRpYShpbml0U2VnbWVudCkudGhlbihhcHBlbmRUb0J1ZmZlcih0eXBlKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnN0IHNlZ21lbnRVcmwgPSBiYXNlVXJsICsgbWFuaWZlc3REYXRhLnBsYXlsaXN0c1swXS5zZWdtZW50c1tpbmRleF0udXJpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICh2aWRlb0luZGV4ID4gbnVtYmVyT2ZWaWRlb0NodW5rcykge1xuICAgICAgICAgICAgc291cmNlYnVmZmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVlbmRcIiwgbmV4dFNlZ21lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhdWRpb1NlZ21lbnRVcmwgPSBhdWRpb1RyYWNrLmdldFNlZ21lbnRVcmwoYXVkaW9JbmRleCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1ZGlvU2VnbWVudFVybCA+Pj4gJywgYXVkaW9TZWdtZW50VXJsKTtcbiAgICAgICAgICBpZiAoYXVkaW9UcmFjay5nZXRTZWdtZW50KGF1ZGlvSW5kZXgpLm1hcC5yZXNvbHZlZFVyaSA9PT0gYXVkaW9Jbml0U2VnbWVudCkge1xuICAgICAgICAgICAgZ2V0TWVkaWEoYXVkaW9TZWdtZW50VXJsKS50aGVuKGFwcGVuZFRvQnVmZmVyKHR5cGUpKTtcbiAgICAgICAgICAgIGF1ZGlvSW5kZXgrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXVkaW9Jbml0U2VnbWVudCA9IG1hbmlmZXN0RGF0YS5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpby5lbmcucGxheWxpc3RzWzBdLnNlZ21lbnRzW2F1ZGlvSW5kZXhdLm1hcC5yZXNvbHZlZFVyaTtcbiAgICAgICAgICAgIGdldE1lZGlhKGF1ZGlvSW5pdFNlZ21lbnQpLnRoZW4oYXBwZW5kVG9CdWZmZXIodHlwZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoYXVkaW9JbmRleCA+IG51bWJlck9mQXVkaW9DaHVua3MpIHtcbiAgICAgICAgICAgIHNvdXJjZWJ1ZmZlci5yZW1vdmVFdmVudExpc3RlbmVyKFwidXBkYXRlZW5kXCIsIG5leHRTZWdtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvQnVmZmVyKHR5cGUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZWJ1ZmZlciA9IHR5cGUgPT09IFwidmlkZW9cIiA/IHZpZGVvU3JjQnVmZmVyIDogYXVkaW9TcmNCdWZmZXI7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGNodW5rLCBlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgJiYgbWVkaWFTb3VyY2UucmVhZHlTdGF0ZSA9PT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICBtZWRpYVNvdXJjZS5lbmRPZlN0cmVhbSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHVuaykge1xuICAgICAgICAgIHNvdXJjZWJ1ZmZlci5hcHBlbmRCdWZmZXIobmV3IFVpbnQ4QXJyYXkoY2h1bmspKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTlhQbGF5ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9