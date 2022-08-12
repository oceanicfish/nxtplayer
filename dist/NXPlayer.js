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

/***/ "./src/eme.js":
/*!********************!*\
  !*** ./src/eme.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupEME": () => (/* binding */ setupEME)
/* harmony export */ });

// function createMediaKeys(keySystem, config) {
//   return new Promise(function(resolve, reject) {
//     if (!video.webkitKeys) {
//       try {
//           // for Safari only
//           var mediakey = new window.WebKitMediaKeys(keySystem);
//           video.webkitSetMediaKeys(mediakey);

//       }catch(error) {
//           reject(error);
//           return;
//       }
//     }
//   });
// }

const keySystems = {
    widevine: ['com.widevine.alpha'],
    playready: ['com.microsoft.playready', 'com.youtube.playready'],
    clearkey: ['webkit-org.w3.clearkey', 'org.w3.clearkey'],
    primetime: ['com.adobe.primetime', 'com.adobe.access'],
    fairplay: ['com.apple.fps', 'com.apple.fps.1_0', 'com.apple.fps.2_0', 'com.apple.fps.3_0']
};

var ensurePromise;
var session;

/**
 * createMediaKeys
 * @param {*} video 
 * @param {*} keySystem 
 * @param {*} config 
 * @returns 
 */
function createMediaKeys(video, keySystem, config) {
    if (ensurePromise) {
        return ensurePromise;
    }
    ensurePromise = navigator.requestMediaKeySystemAccess(keySystem, config)
        .then(function(keySystemAccess){
            var mediaKeys = keySystemAccess.createMediaKeys();
            video.mediaKeysObject = mediaKeys;
            return mediaKeys;
        }).then(function(mediaKeys){
            video.mediaKeysObject = mediaKeys;
            // if (serverCertification) {
            //   mediaKeys.setServerCertificate(serverCertification);
            // }
            return video.setMediaKeys(mediaKeys);
        });
    return ensurePromise;
}

function licenseRequestReady(event) {
  if (event === undefined) {
    return;
  }
  var request = event.message;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.keySession = event.target;
  xmlhttp.responseType = 'arraybuffer';
  const licenseUrl = "https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true";
  const customData = 'ewogICAgInVzZXJJZCI6ICJhd3MtZWxlbWVudGFsOjpzcGVrZS10ZXN0aW5nIiwKICAgICJzZXNzaW9uSWQiOiAiZWxlbWVudGFsLXJlZnN0cmVhbSIsCiAgICAibWVyY2hhbnQiOiAiYXdzLWVsZW1lbnRhbCIKfQo=';
  xmlhttp.open("POST", licenseUrl);
  xmlhttp.setRequestHeader("x-dt-custom-data", customData);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      var license = new Uint8Array(xmlhttp.response);
      try {
        // session.update(license);
        xmlhttp.keySession.update(license);
      } catch(error) {
        console.log('xmlhttp.keySession.update Error: ', error);
        console.error.bind(console, 'update() failed')
      }
    }
  }
  xmlhttp.send(request);
}

/**
 * setup EME
 * @param {*} keySystem 
 * @param {*} config 
 */
function setupEME(video, keySystem, config) {
    video.session = [];
    video.addEventListener('encrypted', function(encryptedEvent){
        console.log(encryptedEvent);
        console.log('initDataType ===> ', encryptedEvent.initDataType);
        console.log('initData ===> ', encryptedEvent.initData);

        // if (video.mediaKeysObject === undefined) {
        //   video.mediaKeysObject = null; // Prevent entering this path again.
        //   video.pendingSessionData = [];
        // }

        createMediaKeys(video, keySystem, config).then(function(){
            
            // var session = video.mediaKeys.createSession('com.widevine.alpha', encryptedEvent.initData);
            session = video.mediaKeys.createSession();
            video.session.push(session);
            session.addEventListener('message', licenseRequestReady(event), false);
            session.addEventListener('keystatuschange', function() {
              console.log('keystatuschange ===> ');
            });
            //For safari event 'webkitkeymessage'.
            // session.addEventListener('webkitkeymessage', webkitUpdateSession);
            session.generateRequest(encryptedEvent.initDataType, encryptedEvent.initData)
            .then(function () {
                console.log('EME setup completed');
                return true;
            }).catch(function(error) {
                console.log(error.message);
                console.log(error.stack);
                return false;
            });
        });
        
    });
}



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
/* harmony import */ var _eme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eme */ "./src/eme.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mediatrack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediatrack */ "./src/mediatrack.js");





class NXPlayer {
  options;
  video;
  manifestData;
  initSegment;
  audioInitSegment;
  numberOfVideoChunks;
  numberOfAudioChunks;

  videoMimeType = 'video/mp4; codecs="avc1.64001e"';
  audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

  constructor(video, options) {
    this.options = options;
    this.video = video;
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
    const startReloadingLoop = async () => {
      var startTime = new Date().getTime();
      while (true) {
        var fetchTime = new Date().getTime();
        if (new Date().getTime() - startTime >= 2000) {
          console.log('reload manifest...');
          manifestData = await (0,_mpd__WEBPACK_IMPORTED_MODULE_0__.reloadMPD)();
          console.log('manifest reloaded.');
          numberOfVideoChunks = manifestData.playlists[0].segments.length;
          numberOfAudioChunks = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments.length;
          startTime = fetchTime;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sleep)(100);
      }
    };
    // startReloadingLoop();
    
    /** parse manifest by 'mpd-parser' */
    manifestData = await (0,_mpd__WEBPACK_IMPORTED_MODULE_0__.parseMPD)();

    var videoTrack = new _mediatrack__WEBPACK_IMPORTED_MODULE_3__.NXTMediaTrack();
    videoTrack.setAllSegments(manifestData.playlists[0].segments);
    numberOfVideoChunks = videoTrack.segments.length;

    var audioTrack = new _mediatrack__WEBPACK_IMPORTED_MODULE_3__.NXTMediaTrack();
    audioTrack.setAllSegments(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
    numberOfAudioChunks = audioTrack.segments.length;

    /** get video element under control */
    // const video = document.querySelector("video");
    const video = this.video;

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
      initSegment = initUrl;

      // aws multi period
      var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
      // tears widevine test
      // var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].sidx.uri;
      audioInitSegment = audioInitUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsQ0FBQzs7QUFFRCxtSEFBbUg7QUFDbkg7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9CQUFvQjtBQUNwQixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOzs7Ozs7Ozs7OztBQzNRckIsa0JBQWtCLG1CQUFPLENBQUMsdUVBQWU7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0Msb0JBQW9CLFlBQVksUUFBUTtBQUNoRiwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QzNCLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0I7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsU0FBUztBQUNUO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVEsZ0VBQWdFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJLEdBQUc7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsaUJBQWlCO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsS0FBSyxzQ0FBc0MsNkJBQTZCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0EsYUFBYSxpRUFBaUU7QUFDOUU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFF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QXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztB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Q0Esc0ZBQXNGLGlCQUFpQjtBQUN2RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLE1BQU0sSUFBeUQ7QUFDL0Q7QUFDQSxPQUFPLEVBS2dDO0FBQ3ZDLENBQUM7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTlhQbGF5ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B2aWRlb2pzL3Zocy11dGlscy9lcy9kZWNvZGUtYjY0LXRvLXVpbnQ4LWFycmF5LmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B2aWRlb2pzL3Zocy11dGlscy9lcy9tZWRpYS1ncm91cHMuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvQHZpZGVvanMvdmhzLXV0aWxzL2VzL3Jlc29sdmUtdXJsLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9jb252ZW50aW9ucy5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZG9tLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZG9tLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL3NheC5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL21wZC1wYXJzZXIvZGlzdC9tcGQtcGFyc2VyLmVzLmpzIiwid2VicGFjazovL05YUGxheWVyLy4vbm9kZV9tb2R1bGVzL3VybC10b29sa2l0L3NyYy91cmwtdG9vbGtpdC5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL3NyYy9lbWUuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9zcmMvbWVkaWF0cmFjay5qcyIsIndlYnBhY2s6Ly9OWFBsYXllci8uL3NyYy9tcGQuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL05YUGxheWVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTlhQbGF5ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9OWFBsYXllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL05YUGxheWVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5YUGxheWVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5YUGxheWVyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbnZhciBhdG9iID0gZnVuY3Rpb24gYXRvYihzKSB7XG4gIHJldHVybiB3aW5kb3cuYXRvYiA/IHdpbmRvdy5hdG9iKHMpIDogQnVmZmVyLmZyb20ocywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdiaW5hcnknKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlY29kZUI2NFRvVWludDhBcnJheShiNjRUZXh0KSB7XG4gIHZhciBkZWNvZGVkU3RyaW5nID0gYXRvYihiNjRUZXh0KTtcbiAgdmFyIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGVjb2RlZFN0cmluZy5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGVjb2RlZFN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldID0gZGVjb2RlZFN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufSIsIi8qKlxuICogTG9vcHMgdGhyb3VnaCBhbGwgc3VwcG9ydGVkIG1lZGlhIGdyb3VwcyBpbiBtYXN0ZXIgYW5kIGNhbGxzIHRoZSBwcm92aWRlZFxuICogY2FsbGJhY2sgZm9yIGVhY2ggZ3JvdXBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWFzdGVyXG4gKiAgICAgICAgVGhlIHBhcnNlZCBtYXN0ZXIgbWFuaWZlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBncm91cHNcbiAqICAgICAgICBUaGUgbWVkaWEgZ3JvdXBzIHRvIGNhbGwgdGhlIGNhbGxiYWNrIGZvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqICAgICAgICBDYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIG1lZGlhIGdyb3VwXG4gKi9cbmV4cG9ydCB2YXIgZm9yRWFjaE1lZGlhR3JvdXAgPSBmdW5jdGlvbiBmb3JFYWNoTWVkaWFHcm91cChtYXN0ZXIsIGdyb3VwcywgY2FsbGJhY2spIHtcbiAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKG1lZGlhVHlwZSkge1xuICAgIGZvciAodmFyIGdyb3VwS2V5IGluIG1hc3Rlci5tZWRpYUdyb3Vwc1ttZWRpYVR5cGVdKSB7XG4gICAgICBmb3IgKHZhciBsYWJlbEtleSBpbiBtYXN0ZXIubWVkaWFHcm91cHNbbWVkaWFUeXBlXVtncm91cEtleV0pIHtcbiAgICAgICAgdmFyIG1lZGlhUHJvcGVydGllcyA9IG1hc3Rlci5tZWRpYUdyb3Vwc1ttZWRpYVR5cGVdW2dyb3VwS2V5XVtsYWJlbEtleV07XG4gICAgICAgIGNhbGxiYWNrKG1lZGlhUHJvcGVydGllcywgbWVkaWFUeXBlLCBncm91cEtleSwgbGFiZWxLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59OyIsImltcG9ydCBVUkxUb29sa2l0IGZyb20gJ3VybC10b29sa2l0JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG52YXIgREVGQVVMVF9MT0NBVElPTiA9ICdodHRwOi8vZXhhbXBsZS5jb20nO1xuXG52YXIgcmVzb2x2ZVVybCA9IGZ1bmN0aW9uIHJlc29sdmVVcmwoYmFzZVVybCwgcmVsYXRpdmVVcmwpIHtcbiAgLy8gcmV0dXJuIGVhcmx5IGlmIHdlIGRvbid0IG5lZWQgdG8gcmVzb2x2ZVxuICBpZiAoL15bYS16XSs6L2kudGVzdChyZWxhdGl2ZVVybCkpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVVcmw7XG4gIH0gLy8gaWYgYmFzZVVybCBpcyBhIGRhdGEgVVJJLCBpZ25vcmUgaXQgYW5kIHJlc29sdmUgZXZlcnl0aGluZyByZWxhdGl2ZSB0byB3aW5kb3cubG9jYXRpb25cblxuXG4gIGlmICgvXmRhdGE6Ly50ZXN0KGJhc2VVcmwpKSB7XG4gICAgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJztcbiAgfSAvLyBJRTExIHN1cHBvcnRzIFVSTCBidXQgbm90IHRoZSBVUkwgY29uc3RydWN0b3JcbiAgLy8gZmVhdHVyZSBkZXRlY3QgdGhlIGJlaGF2aW9yIHdlIHdhbnRcblxuXG4gIHZhciBuYXRpdmVVUkwgPSB0eXBlb2Ygd2luZG93LlVSTCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3RvY29sTGVzcyA9IC9eXFwvXFwvLy50ZXN0KGJhc2VVcmwpOyAvLyByZW1vdmUgbG9jYXRpb24gaWYgd2luZG93LmxvY2F0aW9uIGlzbid0IGF2YWlsYWJsZSAoaS5lLiB3ZSdyZSBpbiBub2RlKVxuICAvLyBhbmQgaWYgYmFzZVVybCBpc24ndCBhbiBhYnNvbHV0ZSB1cmxcblxuICB2YXIgcmVtb3ZlTG9jYXRpb24gPSAhd2luZG93LmxvY2F0aW9uICYmICEvXFwvXFwvL2kudGVzdChiYXNlVXJsKTsgLy8gaWYgdGhlIGJhc2UgVVJMIGlzIHJlbGF0aXZlIHRoZW4gY29tYmluZSB3aXRoIHRoZSBjdXJyZW50IGxvY2F0aW9uXG5cbiAgaWYgKG5hdGl2ZVVSTCkge1xuICAgIGJhc2VVcmwgPSBuZXcgd2luZG93LlVSTChiYXNlVXJsLCB3aW5kb3cubG9jYXRpb24gfHwgREVGQVVMVF9MT0NBVElPTik7XG4gIH0gZWxzZSBpZiAoIS9cXC9cXC8vaS50ZXN0KGJhc2VVcmwpKSB7XG4gICAgYmFzZVVybCA9IFVSTFRvb2xraXQuYnVpbGRBYnNvbHV0ZVVSTCh3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJycsIGJhc2VVcmwpO1xuICB9XG5cbiAgaWYgKG5hdGl2ZVVSTCkge1xuICAgIHZhciBuZXdVcmwgPSBuZXcgVVJMKHJlbGF0aXZlVXJsLCBiYXNlVXJsKTsgLy8gaWYgd2UncmUgYSBwcm90b2NvbC1sZXNzIHVybCwgcmVtb3ZlIHRoZSBwcm90b2NvbFxuICAgIC8vIGFuZCBpZiB3ZSdyZSBsb2NhdGlvbi1sZXNzLCByZW1vdmUgdGhlIGxvY2F0aW9uXG4gICAgLy8gb3RoZXJ3aXNlLCByZXR1cm4gdGhlIHVybCB1bm1vZGlmaWVkXG5cbiAgICBpZiAocmVtb3ZlTG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBuZXdVcmwuaHJlZi5zbGljZShERUZBVUxUX0xPQ0FUSU9OLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChwcm90b2NvbExlc3MpIHtcbiAgICAgIHJldHVybiBuZXdVcmwuaHJlZi5zbGljZShuZXdVcmwucHJvdG9jb2wubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VXJsLmhyZWY7XG4gIH1cblxuICByZXR1cm4gVVJMVG9vbGtpdC5idWlsZEFic29sdXRlVVJMKGJhc2VVcmwsIHJlbGF0aXZlVXJsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVVcmw7IiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogXCJTaGFsbG93IGZyZWV6ZXNcIiBhbiBvYmplY3QgdG8gcmVuZGVyIGl0IGltbXV0YWJsZS5cbiAqIFVzZXMgYE9iamVjdC5mcmVlemVgIGlmIGF2YWlsYWJsZSxcbiAqIG90aGVyd2lzZSB0aGUgaW1tdXRhYmlsaXR5IGlzIG9ubHkgaW4gdGhlIHR5cGUuXG4gKlxuICogSXMgdXNlZCB0byBjcmVhdGUgXCJlbnVtIGxpa2VcIiBvYmplY3RzLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IG9iamVjdCB0aGUgb2JqZWN0IHRvIGZyZWV6ZVxuICogQHBhcmFtIHtQaWNrPE9iamVjdENvbnN0cnVjdG9yLCAnZnJlZXplJz4gPSBPYmplY3R9IG9jIGBPYmplY3RgIGJ5IGRlZmF1bHQsXG4gKiBcdFx0XHRcdGFsbG93cyB0byBpbmplY3QgY3VzdG9tIG9iamVjdCBjb25zdHJ1Y3RvciBmb3IgdGVzdHNcbiAqIEByZXR1cm5zIHtSZWFkb25seTxUPn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9mcmVlemVcbiAqL1xuZnVuY3Rpb24gZnJlZXplKG9iamVjdCwgb2MpIHtcblx0aWYgKG9jID09PSB1bmRlZmluZWQpIHtcblx0XHRvYyA9IE9iamVjdFxuXHR9XG5cdHJldHVybiBvYyAmJiB0eXBlb2Ygb2MuZnJlZXplID09PSAnZnVuY3Rpb24nID8gb2MuZnJlZXplKG9iamVjdCkgOiBvYmplY3Rcbn1cblxuLyoqXG4gKiBBbGwgbWltZSB0eXBlcyB0aGF0IGFyZSBhbGxvd2VkIGFzIGlucHV0IHRvIGBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nYFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcjQXJndW1lbnQwMiBNRE5cbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tcGFyc2Vyc3VwcG9ydGVkdHlwZSBXSEFUV0cgSFRNTCBTcGVjXG4gKiBAc2VlIERPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nXG4gKi9cbnZhciBNSU1FX1RZUEUgPSBmcmVlemUoe1xuXHQvKipcblx0ICogYHRleHQvaHRtbGAsIHRoZSBvbmx5IG1pbWUgdHlwZSB0aGF0IHRyaWdnZXJzIHRyZWF0aW5nIGFuIFhNTCBkb2N1bWVudCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBAc2VlIERPTVBhcnNlci5TdXBwb3J0ZWRUeXBlLmlzSFRNTFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQvaHRtbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hUTUwgV2lraXBlZGlhXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLWRvbXBhcnNlci1wYXJzZWZyb21zdHJpbmcgV0hBVFdHIEhUTUwgU3BlY1xuXHQgKi9cblx0SFRNTDogJ3RleHQvaHRtbCcsXG5cblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gY2hlY2sgYSBtaW1lIHR5cGUgaWYgaXQgaW5kaWNhdGVzIGFuIEhUTUwgZG9jdW1lbnRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC9odG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFRNTCBXaWtpcGVkaWFcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyL3BhcnNlRnJvbVN0cmluZyBNRE5cblx0ICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb20tZG9tcGFyc2VyLXBhcnNlZnJvbXN0cmluZyBcdCAqL1xuXHRpc0hUTUw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gTUlNRV9UWVBFLkhUTUxcblx0fSxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3htbGAsIHRoZSBzdGFuZGFyZCBtaW1lIHR5cGUgZm9yIFhNTCBkb2N1bWVudHMuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvYXBwbGljYXRpb24veG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzczMDMjc2VjdGlvbi05LjEgUkZDIDczMDNcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfQVBQTElDQVRJT046ICdhcHBsaWNhdGlvbi94bWwnLFxuXG5cdC8qKlxuXHQgKiBgdGV4dC9odG1sYCwgYW4gYWxpYXMgZm9yIGBhcHBsaWNhdGlvbi94bWxgLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MzAzI3NlY3Rpb24tOS4yIFJGQyA3MzAzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC94bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfVEVYVDogJ3RleHQveG1sJyxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3hodG1sK3htbGAsIGluZGljYXRlcyBhbiBYTUwgZG9jdW1lbnQgdGhhdCBoYXMgdGhlIGRlZmF1bHQgSFRNTCBuYW1lc3BhY2UsXG5cdCAqIGJ1dCBpcyBwYXJzZWQgYXMgYW4gWE1MIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2FwcGxpY2F0aW9uL3hodG1sK3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50IFdIQVRXRyBET00gU3BlY1xuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1hIVE1MIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1hIVE1MX0FQUExJQ0FUSU9OOiAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcblxuXHQvKipcblx0ICogYGltYWdlL3N2Zyt4bWxgLFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2ltYWdlL3N2Zyt4bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHMTEvIFczQyBTVkcgMS4xXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NhbGFibGVfVmVjdG9yX0dyYXBoaWNzIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1NWR19JTUFHRTogJ2ltYWdlL3N2Zyt4bWwnLFxufSlcblxuLyoqXG4gKiBOYW1lc3BhY2VzIHRoYXQgYXJlIHVzZWQgaW4gdGhpcyBjb2RlIGJhc2UuXG4gKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzXG4gKi9cbnZhciBOQU1FU1BBQ0UgPSBmcmVlemUoe1xuXHQvKipcblx0ICogVGhlIFhIVE1MIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXG5cdCAqL1xuXHRIVE1MOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsXG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdXJpYCBlcXVhbHMgYE5BTUVTUEFDRS5IVE1MYC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1cmldXG5cdCAqXG5cdCAqIEBzZWUgTkFNRVNQQUNFLkhUTUxcblx0ICovXG5cdGlzSFRNTDogZnVuY3Rpb24gKHVyaSkge1xuXHRcdHJldHVybiB1cmkgPT09IE5BTUVTUEFDRS5IVE1MXG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBTVkcgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXG5cdCAqL1xuXHRTVkc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cblx0LyoqXG5cdCAqIFRoZSBgeG1sOmAgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVxuXHQgKi9cblx0WE1MOiAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJyxcblxuXHQvKipcblx0ICogVGhlIGB4bWxuczpgIG5hbWVzcGFjZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1xuXHQgKi9cblx0WE1MTlM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsXG59KVxuXG5leHBvcnRzLmZyZWV6ZSA9IGZyZWV6ZTtcbmV4cG9ydHMuTUlNRV9UWVBFID0gTUlNRV9UWVBFO1xuZXhwb3J0cy5OQU1FU1BBQ0UgPSBOQU1FU1BBQ0U7XG4iLCJ2YXIgY29udmVudGlvbnMgPSByZXF1aXJlKFwiLi9jb252ZW50aW9uc1wiKTtcbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpXG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG52YXIgc2F4ID0gcmVxdWlyZSgnLi9zYXgnKTtcblxudmFyIERPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uO1xuXG52YXIgTkFNRVNQQUNFID0gY29udmVudGlvbnMuTkFNRVNQQUNFO1xuXG52YXIgUGFyc2VFcnJvciA9IHNheC5QYXJzZUVycm9yO1xudmFyIFhNTFJlYWRlciA9IHNheC5YTUxSZWFkZXI7XG5cbmZ1bmN0aW9uIERPTVBhcnNlcihvcHRpb25zKXtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fHtsb2NhdG9yOnt9fTtcbn1cblxuRE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmcgPSBmdW5jdGlvbihzb3VyY2UsbWltZVR5cGUpe1xuXHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0dmFyIHNheCA9ICBuZXcgWE1MUmVhZGVyKCk7XG5cdHZhciBkb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IG5ldyBET01IYW5kbGVyKCk7Ly9jb250ZW50SGFuZGxlciBhbmQgTGV4aWNhbEhhbmRsZXJcblx0dmFyIGVycm9ySGFuZGxlciA9IG9wdGlvbnMuZXJyb3JIYW5kbGVyO1xuXHR2YXIgbG9jYXRvciA9IG9wdGlvbnMubG9jYXRvcjtcblx0dmFyIGRlZmF1bHROU01hcCA9IG9wdGlvbnMueG1sbnN8fHt9O1xuXHR2YXIgaXNIVE1MID0gL1xcL3g/aHRtbD8kLy50ZXN0KG1pbWVUeXBlKTsvL21pbWVUeXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHRtbCcpID4gLTE7XG4gIFx0dmFyIGVudGl0eU1hcCA9IGlzSFRNTCA/IGVudGl0aWVzLkhUTUxfRU5USVRJRVMgOiBlbnRpdGllcy5YTUxfRU5USVRJRVM7XG5cdGlmKGxvY2F0b3Ipe1xuXHRcdGRvbUJ1aWxkZXIuc2V0RG9jdW1lbnRMb2NhdG9yKGxvY2F0b3IpXG5cdH1cblxuXHRzYXguZXJyb3JIYW5kbGVyID0gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLGRvbUJ1aWxkZXIsbG9jYXRvcik7XG5cdHNheC5kb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IGRvbUJ1aWxkZXI7XG5cdGlmKGlzSFRNTCl7XG5cdFx0ZGVmYXVsdE5TTWFwWycnXSA9IE5BTUVTUEFDRS5IVE1MO1xuXHR9XG5cdGRlZmF1bHROU01hcC54bWwgPSBkZWZhdWx0TlNNYXAueG1sIHx8IE5BTUVTUEFDRS5YTUw7XG5cdGlmKHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyl7XG5cdFx0c2F4LnBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwKTtcblx0fWVsc2V7XG5cdFx0c2F4LmVycm9ySGFuZGxlci5lcnJvcihcImludmFsaWQgZG9jIHNvdXJjZVwiKTtcblx0fVxuXHRyZXR1cm4gZG9tQnVpbGRlci5kb2M7XG59XG5mdW5jdGlvbiBidWlsZEVycm9ySGFuZGxlcihlcnJvckltcGwsZG9tQnVpbGRlcixsb2NhdG9yKXtcblx0aWYoIWVycm9ySW1wbCl7XG5cdFx0aWYoZG9tQnVpbGRlciBpbnN0YW5jZW9mIERPTUhhbmRsZXIpe1xuXHRcdFx0cmV0dXJuIGRvbUJ1aWxkZXI7XG5cdFx0fVxuXHRcdGVycm9ySW1wbCA9IGRvbUJ1aWxkZXIgO1xuXHR9XG5cdHZhciBlcnJvckhhbmRsZXIgPSB7fVxuXHR2YXIgaXNDYWxsYmFjayA9IGVycm9ySW1wbCBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuXHRsb2NhdG9yID0gbG9jYXRvcnx8e31cblx0ZnVuY3Rpb24gYnVpbGQoa2V5KXtcblx0XHR2YXIgZm4gPSBlcnJvckltcGxba2V5XTtcblx0XHRpZighZm4gJiYgaXNDYWxsYmFjayl7XG5cdFx0XHRmbiA9IGVycm9ySW1wbC5sZW5ndGggPT0gMj9mdW5jdGlvbihtc2cpe2Vycm9ySW1wbChrZXksbXNnKX06ZXJyb3JJbXBsO1xuXHRcdH1cblx0XHRlcnJvckhhbmRsZXJba2V5XSA9IGZuICYmIGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRmbignW3htbGRvbSAnK2tleSsnXVxcdCcrbXNnK19sb2NhdG9yKGxvY2F0b3IpKTtcblx0XHR9fHxmdW5jdGlvbigpe307XG5cdH1cblx0YnVpbGQoJ3dhcm5pbmcnKTtcblx0YnVpbGQoJ2Vycm9yJyk7XG5cdGJ1aWxkKCdmYXRhbEVycm9yJyk7XG5cdHJldHVybiBlcnJvckhhbmRsZXI7XG59XG5cbi8vY29uc29sZS5sb2coJyNcXG5cXG5cXG5cXG5cXG5cXG5cXG4jIyMjJylcbi8qKlxuICogK0NvbnRlbnRIYW5kbGVyK0Vycm9ySGFuZGxlclxuICogK0xleGljYWxIYW5kbGVyK0VudGl0eVJlc29sdmVyMlxuICogLURlY2xIYW5kbGVyLURUREhhbmRsZXJcbiAqXG4gKiBEZWZhdWx0SGFuZGxlcjpFbnRpdHlSZXNvbHZlciwgRFRESGFuZGxlciwgQ29udGVudEhhbmRsZXIsIEVycm9ySGFuZGxlclxuICogRGVmYXVsdEhhbmRsZXIyOkRlZmF1bHRIYW5kbGVyLExleGljYWxIYW5kbGVyLCBEZWNsSGFuZGxlciwgRW50aXR5UmVzb2x2ZXIyXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9oZWxwZXJzL0RlZmF1bHRIYW5kbGVyLmh0bWxcbiAqL1xuZnVuY3Rpb24gRE9NSGFuZGxlcigpIHtcbiAgICB0aGlzLmNkYXRhID0gZmFsc2U7XG59XG5mdW5jdGlvbiBwb3NpdGlvbihsb2NhdG9yLG5vZGUpe1xuXHRub2RlLmxpbmVOdW1iZXIgPSBsb2NhdG9yLmxpbmVOdW1iZXI7XG5cdG5vZGUuY29sdW1uTnVtYmVyID0gbG9jYXRvci5jb2x1bW5OdW1iZXI7XG59XG4vKipcbiAqIEBzZWUgb3JnLnhtbC5zYXguQ29udGVudEhhbmRsZXIjc3RhcnREb2N1bWVudFxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvQ29udGVudEhhbmRsZXIuaHRtbFxuICovXG5ET01IYW5kbGVyLnByb3RvdHlwZSA9IHtcblx0c3RhcnREb2N1bWVudCA6IGZ1bmN0aW9uKCkge1xuICAgIFx0dGhpcy5kb2MgPSBuZXcgRE9NSW1wbGVtZW50YXRpb24oKS5jcmVhdGVEb2N1bWVudChudWxsLCBudWxsLCBudWxsKTtcbiAgICBcdGlmICh0aGlzLmxvY2F0b3IpIHtcbiAgICAgICAgXHR0aGlzLmRvYy5kb2N1bWVudFVSSSA9IHRoaXMubG9jYXRvci5zeXN0ZW1JZDtcbiAgICBcdH1cblx0fSxcblx0c3RhcnRFbGVtZW50OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSwgYXR0cnMpIHtcblx0XHR2YXIgZG9jID0gdGhpcy5kb2M7XG5cdCAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcU5hbWV8fGxvY2FsTmFtZSk7XG5cdCAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBlbCk7XG5cdCAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWw7XG5cblx0XHR0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGVsKVxuXHQgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICB2YXIgbmFtZXNwYWNlVVJJID0gYXR0cnMuZ2V0VVJJKGkpO1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJzLmdldFZhbHVlKGkpO1xuXHQgICAgICAgIHZhciBxTmFtZSA9IGF0dHJzLmdldFFOYW1lKGkpO1xuXHRcdFx0dmFyIGF0dHIgPSBkb2MuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxTmFtZSk7XG5cdFx0XHR0aGlzLmxvY2F0b3IgJiZwb3NpdGlvbihhdHRycy5nZXRMb2NhdG9yKGkpLGF0dHIpO1xuXHRcdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gdmFsdWU7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdCAgICB9XG5cdH0sXG5cdGVuZEVsZW1lbnQ6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRFbGVtZW50XG5cdFx0dmFyIHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWU7XG5cdFx0dGhpcy5jdXJyZW50RWxlbWVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcblx0fSxcblx0c3RhcnRQcmVmaXhNYXBwaW5nOmZ1bmN0aW9uKHByZWZpeCwgdXJpKSB7XG5cdH0sXG5cdGVuZFByZWZpeE1hcHBpbmc6ZnVuY3Rpb24ocHJlZml4KSB7XG5cdH0sXG5cdHByb2Nlc3NpbmdJbnN0cnVjdGlvbjpmdW5jdGlvbih0YXJnZXQsIGRhdGEpIHtcblx0ICAgIHZhciBpbnMgPSB0aGlzLmRvYy5jcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKTtcblx0ICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsaW5zKVxuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBpbnMpO1xuXHR9LFxuXHRpZ25vcmFibGVXaGl0ZXNwYWNlOmZ1bmN0aW9uKGNoLCBzdGFydCwgbGVuZ3RoKSB7XG5cdH0sXG5cdGNoYXJhY3RlcnM6ZnVuY3Rpb24oY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcblx0XHRjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLGFyZ3VtZW50cylcblx0XHQvL2NvbnNvbGUubG9nKGNoYXJzKVxuXHRcdGlmKGNoYXJzKXtcblx0XHRcdGlmICh0aGlzLmNkYXRhKSB7XG5cdFx0XHRcdHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihjaGFycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjaGFycyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLmN1cnJlbnRFbGVtZW50KXtcblx0XHRcdFx0dGhpcy5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG5cdFx0XHR9ZWxzZSBpZigvXlxccyokLy50ZXN0KGNoYXJzKSl7XG5cdFx0XHRcdHRoaXMuZG9jLmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcblx0XHRcdFx0Ly9wcm9jZXNzIHhtbFxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixjaGFyTm9kZSlcblx0XHR9XG5cdH0sXG5cdHNraXBwZWRFbnRpdHk6ZnVuY3Rpb24obmFtZSkge1xuXHR9LFxuXHRlbmREb2N1bWVudDpmdW5jdGlvbigpIHtcblx0XHR0aGlzLmRvYy5ub3JtYWxpemUoKTtcblx0fSxcblx0c2V0RG9jdW1lbnRMb2NhdG9yOmZ1bmN0aW9uIChsb2NhdG9yKSB7XG5cdCAgICBpZih0aGlzLmxvY2F0b3IgPSBsb2NhdG9yKXsvLyAmJiAhKCdsaW5lTnVtYmVyJyBpbiBsb2NhdG9yKSl7XG5cdCAgICBcdGxvY2F0b3IubGluZU51bWJlciA9IDA7XG5cdCAgICB9XG5cdH0sXG5cdC8vTGV4aWNhbEhhbmRsZXJcblx0Y29tbWVudDpmdW5jdGlvbihjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuXHRcdGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsYXJndW1lbnRzKVxuXHQgICAgdmFyIGNvbW0gPSB0aGlzLmRvYy5jcmVhdGVDb21tZW50KGNoYXJzKTtcblx0ICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsY29tbSlcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgY29tbSk7XG5cdH0sXG5cblx0c3RhcnRDREFUQTpmdW5jdGlvbigpIHtcblx0ICAgIC8vdXNlZCBpbiBjaGFyYWN0ZXJzKCkgbWV0aG9kc1xuXHQgICAgdGhpcy5jZGF0YSA9IHRydWU7XG5cdH0sXG5cdGVuZENEQVRBOmZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xuXHR9LFxuXG5cdHN0YXJ0RFREOmZ1bmN0aW9uKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuXHRcdHZhciBpbXBsID0gdGhpcy5kb2MuaW1wbGVtZW50YXRpb247XG5cdCAgICBpZiAoaW1wbCAmJiBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZSkge1xuXHQgICAgICAgIHZhciBkdCA9IGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCk7XG5cdCAgICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixkdClcblx0ICAgICAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGR0KTtcblx0XHRcdFx0XHR0aGlzLmRvYy5kb2N0eXBlID0gZHQ7XG5cdCAgICB9XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2VlIG9yZy54bWwuc2F4LkVycm9ySGFuZGxlclxuXHQgKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9FcnJvckhhbmRsZXIuaHRtbFxuXHQgKi9cblx0d2FybmluZzpmdW5jdGlvbihlcnJvcikge1xuXHRcdGNvbnNvbGUud2FybignW3htbGRvbSB3YXJuaW5nXVxcdCcrZXJyb3IsX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG5cdH0sXG5cdGVycm9yOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW3htbGRvbSBlcnJvcl1cXHQnK2Vycm9yLF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuXHR9LFxuXHRmYXRhbEVycm9yOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IFBhcnNlRXJyb3IoZXJyb3IsIHRoaXMubG9jYXRvcik7XG5cdH1cbn1cbmZ1bmN0aW9uIF9sb2NhdG9yKGwpe1xuXHRpZihsKXtcblx0XHRyZXR1cm4gJ1xcbkAnKyhsLnN5c3RlbUlkIHx8JycpKycjW2xpbmU6JytsLmxpbmVOdW1iZXIrJyxjb2w6JytsLmNvbHVtbk51bWJlcisnXSdcblx0fVxufVxuZnVuY3Rpb24gX3RvU3RyaW5nKGNoYXJzLHN0YXJ0LGxlbmd0aCl7XG5cdGlmKHR5cGVvZiBjaGFycyA9PSAnc3RyaW5nJyl7XG5cdFx0cmV0dXJuIGNoYXJzLnN1YnN0cihzdGFydCxsZW5ndGgpXG5cdH1lbHNley8vamF2YSBzYXggY29ubmVjdCB3aWR0aCB4bWxkb20gb24gcmhpbm8od2hhdCBhYm91dDogXCI/ICYmICEoY2hhcnMgaW5zdGFuY2VvZiBTdHJpbmcpXCIpXG5cdFx0aWYoY2hhcnMubGVuZ3RoID49IHN0YXJ0K2xlbmd0aCB8fCBzdGFydCl7XG5cdFx0XHRyZXR1cm4gbmV3IGphdmEubGFuZy5TdHJpbmcoY2hhcnMsc3RhcnQsbGVuZ3RoKSsnJztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYXJzO1xuXHR9XG59XG5cbi8qXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvTGV4aWNhbEhhbmRsZXIuaHRtbFxuICogdXNlZCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkxleGljYWxIYW5kbGVyOlxuICogICNjb21tZW50KGNoYXJzLCBzdGFydCwgbGVuZ3RoKVxuICogICNzdGFydENEQVRBKClcbiAqICAjZW5kQ0RBVEEoKVxuICogICNzdGFydERURChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKlxuICpcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5MZXhpY2FsSGFuZGxlcjpcbiAqICAjZW5kRFREKClcbiAqICAjc3RhcnRFbnRpdHkobmFtZSlcbiAqICAjZW5kRW50aXR5KG5hbWUpXG4gKlxuICpcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9EZWNsSGFuZGxlci5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuRGVjbEhhbmRsZXJcbiAqIFx0I2F0dHJpYnV0ZURlY2woZU5hbWUsIGFOYW1lLCB0eXBlLCBtb2RlLCB2YWx1ZSlcbiAqICAjZWxlbWVudERlY2wobmFtZSwgbW9kZWwpXG4gKiAgI2V4dGVybmFsRW50aXR5RGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKiAgI2ludGVybmFsRW50aXR5RGVjbChuYW1lLCB2YWx1ZSlcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9FbnRpdHlSZXNvbHZlcjIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguRW50aXR5UmVzb2x2ZXIyXG4gKiAgI3Jlc29sdmVFbnRpdHkoU3RyaW5nIG5hbWUsU3RyaW5nIHB1YmxpY0lkLFN0cmluZyBiYXNlVVJJLFN0cmluZyBzeXN0ZW1JZClcbiAqICAjcmVzb2x2ZUVudGl0eShwdWJsaWNJZCwgc3lzdGVtSWQpXG4gKiAgI2dldEV4dGVybmFsU3Vic2V0KG5hbWUsIGJhc2VVUkkpXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9EVERIYW5kbGVyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LkRUREhhbmRsZXJcbiAqICAjbm90YXRpb25EZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge307XG4gKiAgI3VucGFyc2VkRW50aXR5RGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQsIG5vdGF0aW9uTmFtZSkge307XG4gKi9cblwiZW5kRFRELHN0YXJ0RW50aXR5LGVuZEVudGl0eSxhdHRyaWJ1dGVEZWNsLGVsZW1lbnREZWNsLGV4dGVybmFsRW50aXR5RGVjbCxpbnRlcm5hbEVudGl0eURlY2wscmVzb2x2ZUVudGl0eSxnZXRFeHRlcm5hbFN1YnNldCxub3RhdGlvbkRlY2wsdW5wYXJzZWRFbnRpdHlEZWNsXCIucmVwbGFjZSgvXFx3Ky9nLGZ1bmN0aW9uKGtleSl7XG5cdERPTUhhbmRsZXIucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpe3JldHVybiBudWxsfVxufSlcblxuLyogUHJpdmF0ZSBzdGF0aWMgaGVscGVycyB0cmVhdGVkIGJlbG93IGFzIHByaXZhdGUgaW5zdGFuY2UgbWV0aG9kcywgc28gZG9uJ3QgbmVlZCB0byBhZGQgdGhlc2UgdG8gdGhlIHB1YmxpYyBBUEk7IHdlIG1pZ2h0IHVzZSBhIFJlbGF0b3IgdG8gYWxzbyBnZXQgcmlkIG9mIG5vbi1zdGFuZGFyZCBwdWJsaWMgcHJvcGVydGllcyAqL1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudCAoaGFuZGVyLG5vZGUpIHtcbiAgICBpZiAoIWhhbmRlci5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICBoYW5kZXIuZG9jLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRlci5jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59Ly9hcHBlbmRDaGlsZCBhbmQgc2V0QXR0cmlidXRlTlMgYXJlIHByZWZvcm1hbmNlIGtleVxuXG5leHBvcnRzLl9fRE9NSGFuZGxlciA9IERPTUhhbmRsZXI7XG5leHBvcnRzLkRPTVBhcnNlciA9IERPTVBhcnNlcjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBJbXBvcnQvcmVxdWlyZSBmcm9tIG1haW4gZW50cnkgcG9pbnQgaW5zdGVhZFxuICovXG5leHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIEltcG9ydC9yZXF1aXJlIGZyb20gbWFpbiBlbnRyeSBwb2ludCBpbnN0ZWFkXG4gKi9cbmV4cG9ydHMuWE1MU2VyaWFsaXplciA9IGRvbS5YTUxTZXJpYWxpemVyO1xuIiwidmFyIGNvbnZlbnRpb25zID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIik7XG5cbnZhciBOQU1FU1BBQ0UgPSBjb252ZW50aW9ucy5OQU1FU1BBQ0U7XG5cbi8qKlxuICogQSBwcmVyZXF1aXNpdGUgZm9yIGBbXS5maWx0ZXJgLCB0byBkcm9wIGVsZW1lbnRzIHRoYXQgYXJlIGVtcHR5XG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBub3RFbXB0eVN0cmluZyAoaW5wdXQpIHtcblx0cmV0dXJuIGlucHV0ICE9PSAnJ1xufVxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzcGxpdC1vbi1hc2NpaS13aGl0ZXNwYWNlXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nW119IChjYW4gYmUgZW1wdHkpXG4gKi9cbmZ1bmN0aW9uIHNwbGl0T25BU0NJSVdoaXRlc3BhY2UoaW5wdXQpIHtcblx0Ly8gVSswMDA5IFRBQiwgVSswMDBBIExGLCBVKzAwMEMgRkYsIFUrMDAwRCBDUiwgVSswMDIwIFNQQUNFXG5cdHJldHVybiBpbnB1dCA/IGlucHV0LnNwbGl0KC9bXFx0XFxuXFxmXFxyIF0rLykuZmlsdGVyKG5vdEVtcHR5U3RyaW5nKSA6IFtdXG59XG5cbi8qKlxuICogQWRkcyBlbGVtZW50IGFzIGEga2V5IHRvIGN1cnJlbnQgaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQ+fSBjdXJyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudFxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQ+fVxuICovXG5mdW5jdGlvbiBvcmRlcmVkU2V0UmVkdWNlciAoY3VycmVudCwgZWxlbWVudCkge1xuXHRpZiAoIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoZWxlbWVudCkpIHtcblx0XHRjdXJyZW50W2VsZW1lbnRdID0gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNvcmRlcmVkLXNldFxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIHRvT3JkZXJlZFNldChpbnB1dCkge1xuXHRpZiAoIWlucHV0KSByZXR1cm4gW107XG5cdHZhciBsaXN0ID0gc3BsaXRPbkFTQ0lJV2hpdGVzcGFjZShpbnB1dCk7XG5cdHJldHVybiBPYmplY3Qua2V5cyhsaXN0LnJlZHVjZShvcmRlcmVkU2V0UmVkdWNlciwge30pKVxufVxuXG4vKipcbiAqIFVzZXMgYGxpc3QuaW5kZXhPZmAgdG8gaW1wbGVtZW50IHNvbWV0aGluZyBsaWtlIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgLFxuICogd2hpY2ggd2UgY2FuIG5vdCByZWx5IG9uIGJlaW5nIGF2YWlsYWJsZS5cbiAqXG4gKiBAcGFyYW0ge2FueVtdfSBsaXN0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oYW55KTogYm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyAobGlzdCkge1xuXHRyZXR1cm4gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBsaXN0ICYmIGxpc3QuaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG5cdH1cbn1cblxuZnVuY3Rpb24gY29weShzcmMsZGVzdCl7XG5cdGZvcih2YXIgcCBpbiBzcmMpe1xuXHRcdGRlc3RbcF0gPSBzcmNbcF07XG5cdH1cbn1cblxuLyoqXG5eXFx3K1xcLnByb3RvdHlwZVxcLihbX1xcd10rKVxccyo9XFxzKigoPzouKlxce1xccyo/W1xcclxcbl1bXFxzXFxTXSo/Xn0pfFxcUy4qPyg/PVs7XFxyXFxuXSkpOz9cbl5cXHcrXFwucHJvdG90eXBlXFwuKFtfXFx3XSspXFxzKj1cXHMqKFxcUy4qPyg/PVs7XFxyXFxuXSkpOz9cbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoQ2xhc3MsU3VwZXIpe1xuXHR2YXIgcHQgPSBDbGFzcy5wcm90b3R5cGU7XG5cdGlmKCEocHQgaW5zdGFuY2VvZiBTdXBlcikpe1xuXHRcdGZ1bmN0aW9uIHQoKXt9O1xuXHRcdHQucHJvdG90eXBlID0gU3VwZXIucHJvdG90eXBlO1xuXHRcdHQgPSBuZXcgdCgpO1xuXHRcdGNvcHkocHQsdCk7XG5cdFx0Q2xhc3MucHJvdG90eXBlID0gcHQgPSB0O1xuXHR9XG5cdGlmKHB0LmNvbnN0cnVjdG9yICE9IENsYXNzKXtcblx0XHRpZih0eXBlb2YgQ2xhc3MgIT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwidW5rbm93biBDbGFzczpcIitDbGFzcylcblx0XHR9XG5cdFx0cHQuY29uc3RydWN0b3IgPSBDbGFzc1xuXHR9XG59XG5cbi8vIE5vZGUgVHlwZXNcbnZhciBOb2RlVHlwZSA9IHt9XG52YXIgRUxFTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuRUxFTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gMTtcbnZhciBBVFRSSUJVVEVfTk9ERSAgICAgICAgICAgICAgPSBOb2RlVHlwZS5BVFRSSUJVVEVfTk9ERSAgICAgICAgICAgICAgPSAyO1xudmFyIFRFWFRfTk9ERSAgICAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLlRFWFRfTk9ERSAgICAgICAgICAgICAgICAgICA9IDM7XG52YXIgQ0RBVEFfU0VDVElPTl9OT0RFICAgICAgICAgID0gTm9kZVR5cGUuQ0RBVEFfU0VDVElPTl9OT0RFICAgICAgICAgID0gNDtcbnZhciBFTlRJVFlfUkVGRVJFTkNFX05PREUgICAgICAgPSBOb2RlVHlwZS5FTlRJVFlfUkVGRVJFTkNFX05PREUgICAgICAgPSA1O1xudmFyIEVOVElUWV9OT0RFICAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkVOVElUWV9OT0RFICAgICAgICAgICAgICAgICA9IDY7XG52YXIgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gTm9kZVR5cGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gNztcbnZhciBDT01NRU5UX05PREUgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5DT01NRU5UX05PREUgICAgICAgICAgICAgICAgPSA4O1xudmFyIERPQ1VNRU5UX05PREUgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX05PREUgICAgICAgICAgICAgICA9IDk7XG52YXIgRE9DVU1FTlRfVFlQRV9OT0RFICAgICAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfVFlQRV9OT0RFICAgICAgICAgID0gMTA7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAgICAgID0gMTE7XG52YXIgTk9UQVRJT05fTk9ERSAgICAgICAgICAgICAgID0gTm9kZVR5cGUuTk9UQVRJT05fTk9ERSAgICAgICAgICAgICAgID0gMTI7XG5cbi8vIEV4Y2VwdGlvbkNvZGVcbnZhciBFeGNlcHRpb25Db2RlID0ge31cbnZhciBFeGNlcHRpb25NZXNzYWdlID0ge307XG52YXIgSU5ERVhfU0laRV9FUlIgICAgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTkRFWF9TSVpFX0VSUiAgICAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMV09XCJJbmRleCBzaXplIGVycm9yXCIpLDEpO1xudmFyIERPTVNUUklOR19TSVpFX0VSUiAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuRE9NU1RSSU5HX1NJWkVfRVJSICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzJdPVwiRE9NU3RyaW5nIHNpemUgZXJyb3JcIiksMik7XG52YXIgSElFUkFSQ0hZX1JFUVVFU1RfRVJSICAgICAgID0gRXhjZXB0aW9uQ29kZS5ISUVSQVJDSFlfUkVRVUVTVF9FUlIgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbM109XCJIaWVyYXJjaHkgcmVxdWVzdCBlcnJvclwiKSwzKTtcbnZhciBXUk9OR19ET0NVTUVOVF9FUlIgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLldST05HX0RPQ1VNRU5UX0VSUiAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs0XT1cIldyb25nIGRvY3VtZW50XCIpLDQpO1xudmFyIElOVkFMSURfQ0hBUkFDVEVSX0VSUiAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9DSEFSQUNURVJfRVJSICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzVdPVwiSW52YWxpZCBjaGFyYWN0ZXJcIiksNSk7XG52YXIgTk9fREFUQV9BTExPV0VEX0VSUiAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT19EQVRBX0FMTE9XRURfRVJSICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNl09XCJObyBkYXRhIGFsbG93ZWRcIiksNik7XG52YXIgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbN109XCJObyBtb2RpZmljYXRpb24gYWxsb3dlZFwiKSw3KTtcbnZhciBOT1RfRk9VTkRfRVJSICAgICAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PVF9GT1VORF9FUlIgICAgICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs4XT1cIk5vdCBmb3VuZFwiKSw4KTtcbnZhciBOT1RfU1VQUE9SVEVEX0VSUiAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PVF9TVVBQT1JURURfRVJSICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs5XT1cIk5vdCBzdXBwb3J0ZWRcIiksOSk7XG52YXIgSU5VU0VfQVRUUklCVVRFX0VSUiAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTlVTRV9BVFRSSUJVVEVfRVJSICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTBdPVwiQXR0cmlidXRlIGluIHVzZVwiKSwxMCk7XG4vL2xldmVsMlxudmFyIElOVkFMSURfU1RBVEVfRVJSICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX1NUQVRFX0VSUiAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxMV09XCJJbnZhbGlkIHN0YXRlXCIpLDExKTtcbnZhciBTWU5UQVhfRVJSICAgICAgICAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuU1lOVEFYX0VSUiAgICAgICAgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTJdPVwiU3ludGF4IGVycm9yXCIpLDEyKTtcbnZhciBJTlZBTElEX01PRElGSUNBVElPTl9FUlIgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTNdPVwiSW52YWxpZCBtb2RpZmljYXRpb25cIiksMTMpO1xudmFyIE5BTUVTUEFDRV9FUlIgICAgICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5OQU1FU1BBQ0VfRVJSICAgICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzE0XT1cIkludmFsaWQgbmFtZXNwYWNlXCIpLDE0KTtcbnZhciBJTlZBTElEX0FDQ0VTU19FUlIgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9BQ0NFU1NfRVJSICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxNV09XCJJbnZhbGlkIGFjY2Vzc1wiKSwxNSk7XG5cbi8qKlxuICogRE9NIExldmVsIDJcbiAqIE9iamVjdCBET01FeGNlcHRpb25cbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9SRUMtRE9NLUxldmVsLTItQ29yZS0yMDAwMTExMy9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2VjbWEtc2NyaXB0LWxhbmd1YWdlLWJpbmRpbmcuaHRtbFxuICovXG5mdW5jdGlvbiBET01FeGNlcHRpb24oY29kZSwgbWVzc2FnZSkge1xuXHRpZihtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3Ipe1xuXHRcdHZhciBlcnJvciA9IG1lc3NhZ2U7XG5cdH1lbHNle1xuXHRcdGVycm9yID0gdGhpcztcblx0XHRFcnJvci5jYWxsKHRoaXMsIEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV0pO1xuXHRcdHRoaXMubWVzc2FnZSA9IEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV07XG5cdFx0aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIERPTUV4Y2VwdGlvbik7XG5cdH1cblx0ZXJyb3IuY29kZSA9IGNvZGU7XG5cdGlmKG1lc3NhZ2UpIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2U7XG5cdHJldHVybiBlcnJvcjtcbn07XG5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuY29weShFeGNlcHRpb25Db2RlLERPTUV4Y2VwdGlvbilcblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvY29yZS5odG1sI0lELTUzNjI5NzE3N1xuICogVGhlIE5vZGVMaXN0IGludGVyZmFjZSBwcm92aWRlcyB0aGUgYWJzdHJhY3Rpb24gb2YgYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIG5vZGVzLCB3aXRob3V0IGRlZmluaW5nIG9yIGNvbnN0cmFpbmluZyBob3cgdGhpcyBjb2xsZWN0aW9uIGlzIGltcGxlbWVudGVkLiBOb2RlTGlzdCBvYmplY3RzIGluIHRoZSBET00gYXJlIGxpdmUuXG4gKiBUaGUgaXRlbXMgaW4gdGhlIE5vZGVMaXN0IGFyZSBhY2Nlc3NpYmxlIHZpYSBhbiBpbnRlZ3JhbCBpbmRleCwgc3RhcnRpbmcgZnJvbSAwLlxuICovXG5mdW5jdGlvbiBOb2RlTGlzdCgpIHtcbn07XG5Ob2RlTGlzdC5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0LiBUaGUgcmFuZ2Ugb2YgdmFsaWQgY2hpbGQgbm9kZSBpbmRpY2VzIGlzIDAgdG8gbGVuZ3RoLTEgaW5jbHVzaXZlLlxuXHQgKiBAc3RhbmRhcmQgbGV2ZWwxXG5cdCAqL1xuXHRsZW5ndGg6MCwgXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBpbmRleHRoIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24uIElmIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0LCB0aGlzIHJldHVybnMgbnVsbC5cblx0ICogQHN0YW5kYXJkIGxldmVsMVxuXHQgKiBAcGFyYW0gaW5kZXggIHVuc2lnbmVkIGxvbmcgXG5cdCAqICAgSW5kZXggaW50byB0aGUgY29sbGVjdGlvbi5cblx0ICogQHJldHVybiBOb2RlXG5cdCAqIFx0VGhlIG5vZGUgYXQgdGhlIGluZGV4dGggcG9zaXRpb24gaW4gdGhlIE5vZGVMaXN0LCBvciBudWxsIGlmIHRoYXQgaXMgbm90IGEgdmFsaWQgaW5kZXguIFxuXHQgKi9cblx0aXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpc1tpbmRleF0gfHwgbnVsbDtcblx0fSxcblx0dG9TdHJpbmc6ZnVuY3Rpb24oaXNIVE1MLG5vZGVGaWx0ZXIpe1xuXHRcdGZvcih2YXIgYnVmID0gW10sIGkgPSAwO2k8dGhpcy5sZW5ndGg7aSsrKXtcblx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXNbaV0sYnVmLGlzSFRNTCxub2RlRmlsdGVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0fVxufTtcblxuZnVuY3Rpb24gTGl2ZU5vZGVMaXN0KG5vZGUscmVmcmVzaCl7XG5cdHRoaXMuX25vZGUgPSBub2RlO1xuXHR0aGlzLl9yZWZyZXNoID0gcmVmcmVzaFxuXHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG59XG5mdW5jdGlvbiBfdXBkYXRlTGl2ZUxpc3QobGlzdCl7XG5cdHZhciBpbmMgPSBsaXN0Ll9ub2RlLl9pbmMgfHwgbGlzdC5fbm9kZS5vd25lckRvY3VtZW50Ll9pbmM7XG5cdGlmKGxpc3QuX2luYyAhPSBpbmMpe1xuXHRcdHZhciBscyA9IGxpc3QuX3JlZnJlc2gobGlzdC5fbm9kZSk7XG5cdFx0Ly9jb25zb2xlLmxvZyhscy5sZW5ndGgpXG5cdFx0X19zZXRfXyhsaXN0LCdsZW5ndGgnLGxzLmxlbmd0aCk7XG5cdFx0Y29weShscyxsaXN0KTtcblx0XHRsaXN0Ll9pbmMgPSBpbmM7XG5cdH1cbn1cbkxpdmVOb2RlTGlzdC5wcm90b3R5cGUuaXRlbSA9IGZ1bmN0aW9uKGkpe1xuXHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG5cdHJldHVybiB0aGlzW2ldO1xufVxuXG5fZXh0ZW5kcyhMaXZlTm9kZUxpc3QsTm9kZUxpc3QpO1xuXG4vKipcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoZSBOYW1lZE5vZGVNYXAgaW50ZXJmYWNlIGFyZSB1c2VkXG4gKiB0byByZXByZXNlbnQgY29sbGVjdGlvbnMgb2Ygbm9kZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgYnkgbmFtZS5cbiAqIE5vdGUgdGhhdCBOYW1lZE5vZGVNYXAgZG9lcyBub3QgaW5oZXJpdCBmcm9tIE5vZGVMaXN0O1xuICogTmFtZWROb2RlTWFwcyBhcmUgbm90IG1haW50YWluZWQgaW4gYW55IHBhcnRpY3VsYXIgb3JkZXIuXG4gKiBPYmplY3RzIGNvbnRhaW5lZCBpbiBhbiBvYmplY3QgaW1wbGVtZW50aW5nIE5hbWVkTm9kZU1hcCBtYXkgYWxzbyBiZSBhY2Nlc3NlZCBieSBhbiBvcmRpbmFsIGluZGV4LFxuICogYnV0IHRoaXMgaXMgc2ltcGx5IHRvIGFsbG93IGNvbnZlbmllbnQgZW51bWVyYXRpb24gb2YgdGhlIGNvbnRlbnRzIG9mIGEgTmFtZWROb2RlTWFwLFxuICogYW5kIGRvZXMgbm90IGltcGx5IHRoYXQgdGhlIERPTSBzcGVjaWZpZXMgYW4gb3JkZXIgdG8gdGhlc2UgTm9kZXMuXG4gKiBOYW1lZE5vZGVNYXAgb2JqZWN0cyBpbiB0aGUgRE9NIGFyZSBsaXZlLlxuICogdXNlZCBmb3IgYXR0cmlidXRlcyBvciBEb2N1bWVudFR5cGUgZW50aXRpZXMgXG4gKi9cbmZ1bmN0aW9uIE5hbWVkTm9kZU1hcCgpIHtcbn07XG5cbmZ1bmN0aW9uIF9maW5kTm9kZUluZGV4KGxpc3Qsbm9kZSl7XG5cdHZhciBpID0gbGlzdC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0aWYobGlzdFtpXSA9PT0gbm9kZSl7cmV0dXJuIGl9XG5cdH1cbn1cblxuZnVuY3Rpb24gX2FkZE5hbWVkTm9kZShlbCxsaXN0LG5ld0F0dHIsb2xkQXR0cil7XG5cdGlmKG9sZEF0dHIpe1xuXHRcdGxpc3RbX2ZpbmROb2RlSW5kZXgobGlzdCxvbGRBdHRyKV0gPSBuZXdBdHRyO1xuXHR9ZWxzZXtcblx0XHRsaXN0W2xpc3QubGVuZ3RoKytdID0gbmV3QXR0cjtcblx0fVxuXHRpZihlbCl7XG5cdFx0bmV3QXR0ci5vd25lckVsZW1lbnQgPSBlbDtcblx0XHR2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcblx0XHRpZihkb2Mpe1xuXHRcdFx0b2xkQXR0ciAmJiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLG9sZEF0dHIpO1xuXHRcdFx0X29uQWRkQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIF9yZW1vdmVOYW1lZE5vZGUoZWwsbGlzdCxhdHRyKXtcblx0Ly9jb25zb2xlLmxvZygncmVtb3ZlIGF0dHI6JythdHRyKVxuXHR2YXIgaSA9IF9maW5kTm9kZUluZGV4KGxpc3QsYXR0cik7XG5cdGlmKGk+PTApe1xuXHRcdHZhciBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aC0xXG5cdFx0d2hpbGUoaTxsYXN0SW5kZXgpe1xuXHRcdFx0bGlzdFtpXSA9IGxpc3RbKytpXVxuXHRcdH1cblx0XHRsaXN0Lmxlbmd0aCA9IGxhc3RJbmRleDtcblx0XHRpZihlbCl7XG5cdFx0XHR2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcblx0XHRcdGlmKGRvYyl7XG5cdFx0XHRcdF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsYXR0cik7XG5cdFx0XHRcdGF0dHIub3duZXJFbGVtZW50ID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1lbHNle1xuXHRcdHRocm93IERPTUV4Y2VwdGlvbihOT1RfRk9VTkRfRVJSLG5ldyBFcnJvcihlbC50YWdOYW1lKydAJythdHRyKSlcblx0fVxufVxuTmFtZWROb2RlTWFwLnByb3RvdHlwZSA9IHtcblx0bGVuZ3RoOjAsXG5cdGl0ZW06Tm9kZUxpc3QucHJvdG90eXBlLml0ZW0sXG5cdGdldE5hbWVkSXRlbTogZnVuY3Rpb24oa2V5KSB7XG4vL1x0XHRpZihrZXkuaW5kZXhPZignOicpPjAgfHwga2V5ID09ICd4bWxucycpe1xuLy9cdFx0XHRyZXR1cm4gbnVsbDtcbi8vXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKClcblx0XHR2YXIgaSA9IHRoaXMubGVuZ3RoO1xuXHRcdHdoaWxlKGktLSl7XG5cdFx0XHR2YXIgYXR0ciA9IHRoaXNbaV07XG5cdFx0XHQvL2NvbnNvbGUubG9nKGF0dHIubm9kZU5hbWUsa2V5KVxuXHRcdFx0aWYoYXR0ci5ub2RlTmFtZSA9PSBrZXkpe1xuXHRcdFx0XHRyZXR1cm4gYXR0cjtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHNldE5hbWVkSXRlbTogZnVuY3Rpb24oYXR0cikge1xuXHRcdHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50O1xuXHRcdGlmKGVsICYmIGVsIT10aGlzLl9vd25lckVsZW1lbnQpe1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcblx0XHR9XG5cdFx0dmFyIG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShhdHRyLm5vZGVOYW1lKTtcblx0XHRfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIsb2xkQXR0cik7XG5cdFx0cmV0dXJuIG9sZEF0dHI7XG5cdH0sXG5cdC8qIHJldHVybnMgTm9kZSAqL1xuXHRzZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24oYXR0cikgey8vIHJhaXNlczogV1JPTkdfRE9DVU1FTlRfRVJSLE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUixJTlVTRV9BVFRSSUJVVEVfRVJSXG5cdFx0dmFyIGVsID0gYXR0ci5vd25lckVsZW1lbnQsIG9sZEF0dHI7XG5cdFx0aWYoZWwgJiYgZWwhPXRoaXMuX293bmVyRWxlbWVudCl7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuXHRcdH1cblx0XHRvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhhdHRyLm5hbWVzcGFjZVVSSSxhdHRyLmxvY2FsTmFtZSk7XG5cdFx0X2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyLG9sZEF0dHIpO1xuXHRcdHJldHVybiBvbGRBdHRyO1xuXHR9LFxuXG5cdC8qIHJldHVybnMgTm9kZSAqL1xuXHRyZW1vdmVOYW1lZEl0ZW06IGZ1bmN0aW9uKGtleSkge1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oa2V5KTtcblx0XHRfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIpO1xuXHRcdHJldHVybiBhdHRyO1xuXHRcdFxuXHRcdFxuXHR9LC8vIHJhaXNlczogTk9UX0ZPVU5EX0VSUixOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlJcblx0XG5cdC8vZm9yIGxldmVsMlxuXHRyZW1vdmVOYW1lZEl0ZW1OUzpmdW5jdGlvbihuYW1lc3BhY2VVUkksbG9jYWxOYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLGxvY2FsTmFtZSk7XG5cdFx0X3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyKTtcblx0XHRyZXR1cm4gYXR0cjtcblx0fSxcblx0Z2V0TmFtZWRJdGVtTlM6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG5cdFx0dmFyIGkgPSB0aGlzLmxlbmd0aDtcblx0XHR3aGlsZShpLS0pe1xuXHRcdFx0dmFyIG5vZGUgPSB0aGlzW2ldO1xuXHRcdFx0aWYobm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lICYmIG5vZGUubmFtZXNwYWNlVVJJID09IG5hbWVzcGFjZVVSSSl7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuLyoqXG4gKiBUaGUgRE9NSW1wbGVtZW50YXRpb24gaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHByb3ZpZGluZyBtZXRob2RzXG4gKiB3aGljaCBhcmUgbm90IGRlcGVuZGVudCBvbiBhbnkgcGFydGljdWxhciBkb2N1bWVudC5cbiAqIFN1Y2ggYW4gb2JqZWN0IGlzIHJldHVybmVkIGJ5IHRoZSBgRG9jdW1lbnQuaW1wbGVtZW50YXRpb25gIHByb3BlcnR5LlxuICpcbiAqIF9fVGhlIGluZGl2aWR1YWwgbWV0aG9kcyBkZXNjcmliZSB0aGUgZGlmZmVyZW5jZXMgY29tcGFyZWQgdG8gdGhlIHNwZWNzLl9fXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24gTUROXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMtRE9NLUxldmVsLTEvbGV2ZWwtb25lLWNvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDEgQ29yZSAoSW5pdGlhbClcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMiBDb3JlXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2NvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDMgQ29yZVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbWltcGxlbWVudGF0aW9uIERPTSBMaXZpbmcgU3RhbmRhcmRcbiAqL1xuZnVuY3Rpb24gRE9NSW1wbGVtZW50YXRpb24oKSB7XG59XG5cbkRPTUltcGxlbWVudGF0aW9uLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIFRoZSBET01JbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCkgbWV0aG9kIHJldHVybnMgYSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyBpZiBhIGdpdmVuIGZlYXR1cmUgaXMgc3VwcG9ydGVkLlxuXHQgKiBUaGUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucyBmYWlybHkgZGl2ZXJnZWQgaW4gd2hhdCBraW5kIG9mIGZlYXR1cmVzIHdlcmUgcmVwb3J0ZWQuXG5cdCAqIFRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgc3BlYyBzZXR0bGVkIHRvIGZvcmNlIHRoaXMgbWV0aG9kIHRvIGFsd2F5cyByZXR1cm4gdHJ1ZSwgd2hlcmUgdGhlIGZ1bmN0aW9uYWxpdHkgd2FzIGFjY3VyYXRlIGFuZCBpbiB1c2UuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIEl0IGlzIGRlcHJlY2F0ZWQgYW5kIG1vZGVybiBicm93c2VycyByZXR1cm4gdHJ1ZSBpbiBhbGwgY2FzZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdmVyc2lvbl1cblx0ICogQHJldHVybnMge2Jvb2xlYW59IGFsd2F5cyB0cnVlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2hhc0ZlYXR1cmUgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9sZXZlbC1vbmUtY29yZS5odG1sI0lELTVDRUQ5NEQ3IERPTSBMZXZlbCAxIENvcmVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlIERPTSBMaXZpbmcgU3RhbmRhcmRcblx0ICovXG5cdGhhc0ZlYXR1cmU6IGZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBYTUwgRG9jdW1lbnQgb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSB3aXRoIGl0cyBkb2N1bWVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBfX0l0IGJlaGF2ZXMgc2xpZ2h0bHkgZGlmZmVyZW50IGZyb20gdGhlIGRlc2NyaXB0aW9uIGluIHRoZSBsaXZpbmcgc3RhbmRhcmRfXzpcblx0ICogLSBUaGVyZSBpcyBubyBpbnRlcmZhY2UvY2xhc3MgYFhNTERvY3VtZW50YCwgaXQgcmV0dXJucyBhIGBEb2N1bWVudGAgaW5zdGFuY2UuXG5cdCAqIC0gYGNvbnRlbnRUeXBlYCwgYGVuY29kaW5nYCwgYG1vZGVgLCBgb3JpZ2luYCwgYHVybGAgZmllbGRzIGFyZSBjdXJyZW50bHkgbm90IGRlY2xhcmVkLlxuXHQgKiAtIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IHZhbGlkYXRpbmcgbmFtZXMgb3IgcXVhbGlmaWVkIG5hbWVzXG5cdCAqICAgKHdoZW4gcGFyc2luZyBYTUwgc3RyaW5ncywgdGhlIFNBWCBwYXJzZXIgdGFrZXMgY2FyZSBvZiB0aGF0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBuYW1lc3BhY2VVUklcblx0ICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcblx0ICogQHBhcmFtIHtEb2N1bWVudFR5cGU9bnVsbH0gZG9jdHlwZVxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnR9XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2NyZWF0ZURvY3VtZW50IE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNMZXZlbC0yLUNvcmUtRE9NLWNyZWF0ZURvY3VtZW50IERPTSBMZXZlbCAyIENvcmUgKGluaXRpYWwpXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24tY3JlYXRlZG9jdW1lbnQgIERPTSBMZXZlbCAyIENvcmVcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI3ZhbGlkYXRlLWFuZC1leHRyYWN0IERPTTogVmFsaWRhdGUgYW5kIGV4dHJhY3Rcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1OYW1lU3RhcnRDaGFyIFhNTCBTcGVjOiBOYW1lc1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMvI25zLXF1YWxuYW1lcyBYTUwgTmFtZXNwYWNlczogUXVhbGlmaWVkIG5hbWVzXG5cdCAqL1xuXHRjcmVhdGVEb2N1bWVudDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCAgcXVhbGlmaWVkTmFtZSwgZG9jdHlwZSl7XG5cdFx0dmFyIGRvYyA9IG5ldyBEb2N1bWVudCgpO1xuXHRcdGRvYy5pbXBsZW1lbnRhdGlvbiA9IHRoaXM7XG5cdFx0ZG9jLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRkb2MuZG9jdHlwZSA9IGRvY3R5cGUgfHwgbnVsbDtcblx0XHRpZiAoZG9jdHlwZSl7XG5cdFx0XHRkb2MuYXBwZW5kQ2hpbGQoZG9jdHlwZSk7XG5cdFx0fVxuXHRcdGlmIChxdWFsaWZpZWROYW1lKXtcblx0XHRcdHZhciByb290ID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKHJvb3QpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jO1xuXHR9LFxuXHQvKipcblx0ICogUmV0dXJucyBhIGRvY3R5cGUsIHdpdGggdGhlIGdpdmVuIGBxdWFsaWZpZWROYW1lYCwgYHB1YmxpY0lkYCwgYW5kIGBzeXN0ZW1JZGAuXG5cdCAqXG5cdCAqIF9fVGhpcyBiZWhhdmlvciBpcyBzbGlnaHRseSBkaWZmZXJlbnQgZnJvbSB0aGUgaW4gdGhlIHNwZWNzX186XG5cdCAqIC0gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgdmFsaWRhdGluZyBuYW1lcyBvciBxdWFsaWZpZWQgbmFtZXNcblx0ICogICAod2hlbiBwYXJzaW5nIFhNTCBzdHJpbmdzLCB0aGUgU0FYIHBhcnNlciB0YWtlcyBjYXJlIG9mIHRoYXQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcHVibGljSWRdXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbc3lzdGVtSWRdXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudFR5cGV9IHdoaWNoIGNhbiBlaXRoZXIgYmUgdXNlZCB3aXRoIGBET01JbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudGAgdXBvbiBkb2N1bWVudCBjcmVhdGlvblxuXHQgKiBcdFx0XHRcdCAgb3IgY2FuIGJlIHB1dCBpbnRvIHRoZSBkb2N1bWVudCB2aWEgbWV0aG9kcyBsaWtlIGBOb2RlLmluc2VydEJlZm9yZSgpYCBvciBgTm9kZS5yZXBsYWNlQ2hpbGQoKWBcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vY3JlYXRlRG9jdW1lbnRUeXBlIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNMZXZlbC0yLUNvcmUtRE9NLWNyZWF0ZURvY1R5cGUgRE9NIExldmVsIDIgQ29yZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50dHlwZSBET00gTGl2aW5nIFN0YW5kYXJkXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyN2YWxpZGF0ZS1hbmQtZXh0cmFjdCBET006IFZhbGlkYXRlIGFuZCBleHRyYWN0XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtTmFtZVN0YXJ0Q2hhciBYTUwgU3BlYzogTmFtZXNcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzLyNucy1xdWFsbmFtZXMgWE1MIE5hbWVzcGFjZXM6IFF1YWxpZmllZCBuYW1lc1xuXHQgKi9cblx0Y3JlYXRlRG9jdW1lbnRUeXBlOiBmdW5jdGlvbihxdWFsaWZpZWROYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpe1xuXHRcdHZhciBub2RlID0gbmV3IERvY3VtZW50VHlwZSgpO1xuXHRcdG5vZGUubmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5wdWJsaWNJZCA9IHB1YmxpY0lkIHx8ICcnO1xuXHRcdG5vZGUuc3lzdGVtSWQgPSBzeXN0ZW1JZCB8fCAnJztcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG59O1xuXG5cbi8qKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2NvcmUuaHRtbCNJRC0xOTUwNjQxMjQ3XG4gKi9cblxuZnVuY3Rpb24gTm9kZSgpIHtcbn07XG5cbk5vZGUucHJvdG90eXBlID0ge1xuXHRmaXJzdENoaWxkIDogbnVsbCxcblx0bGFzdENoaWxkIDogbnVsbCxcblx0cHJldmlvdXNTaWJsaW5nIDogbnVsbCxcblx0bmV4dFNpYmxpbmcgOiBudWxsLFxuXHRhdHRyaWJ1dGVzIDogbnVsbCxcblx0cGFyZW50Tm9kZSA6IG51bGwsXG5cdGNoaWxkTm9kZXMgOiBudWxsLFxuXHRvd25lckRvY3VtZW50IDogbnVsbCxcblx0bm9kZVZhbHVlIDogbnVsbCxcblx0bmFtZXNwYWNlVVJJIDogbnVsbCxcblx0cHJlZml4IDogbnVsbCxcblx0bG9jYWxOYW1lIDogbnVsbCxcblx0Ly8gTW9kaWZpZWQgaW4gRE9NIExldmVsIDI6XG5cdGluc2VydEJlZm9yZTpmdW5jdGlvbihuZXdDaGlsZCwgcmVmQ2hpbGQpey8vcmFpc2VzIFxuXHRcdHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsbmV3Q2hpbGQscmVmQ2hpbGQpO1xuXHR9LFxuXHRyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQsIG9sZENoaWxkKXsvL3JhaXNlcyBcblx0XHR0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCxvbGRDaGlsZCk7XG5cdFx0aWYob2xkQ2hpbGQpe1xuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG5cdFx0fVxuXHR9LFxuXHRyZW1vdmVDaGlsZDpmdW5jdGlvbihvbGRDaGlsZCl7XG5cdFx0cmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLG9sZENoaWxkKTtcblx0fSxcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCxudWxsKTtcblx0fSxcblx0aGFzQ2hpbGROb2RlczpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmZpcnN0Q2hpbGQgIT0gbnVsbDtcblx0fSxcblx0Y2xvbmVOb2RlOmZ1bmN0aW9uKGRlZXApe1xuXHRcdHJldHVybiBjbG9uZU5vZGUodGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHRoaXMsZGVlcCk7XG5cdH0sXG5cdC8vIE1vZGlmaWVkIGluIERPTSBMZXZlbCAyOlxuXHRub3JtYWxpemU6ZnVuY3Rpb24oKXtcblx0XHR2YXIgY2hpbGQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdGlmKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PSBURVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgPT0gVEVYVF9OT0RFKXtcblx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZChuZXh0KTtcblx0XHRcdFx0Y2hpbGQuYXBwZW5kRGF0YShuZXh0LmRhdGEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGNoaWxkLm5vcm1hbGl6ZSgpO1xuXHRcdFx0XHRjaGlsZCA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuICBcdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGlzU3VwcG9ydGVkOmZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pe1xuXHRcdHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShmZWF0dXJlLHZlcnNpb24pO1xuXHR9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG4gICAgaGFzQXR0cmlidXRlczpmdW5jdGlvbigpe1xuICAgIFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGg+MDtcbiAgICB9LFxuXHQvKipcblx0ICogTG9vayB1cCB0aGUgcHJlZml4IGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIG5hbWVzcGFjZSBVUkksIHN0YXJ0aW5nIGZyb20gdGhpcyBub2RlLlxuXHQgKiAqKlRoZSBkZWZhdWx0IG5hbWVzcGFjZSBkZWNsYXJhdGlvbnMgYXJlIGlnbm9yZWQgYnkgdGhpcyBtZXRob2QuKipcblx0ICogU2VlIE5hbWVzcGFjZSBQcmVmaXggTG9va3VwIGZvciBkZXRhaWxzIG9uIHRoZSBhbGdvcml0aG0gdXNlZCBieSB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogX05vdGU6IFRoZSBpbXBsZW1lbnRhdGlvbiBzZWVtcyB0byBiZSBpbmNvbXBsZXRlIHdoZW4gY29tcGFyZWQgdG8gdGhlIGFsZ29yaXRobSBkZXNjcmliZWQgaW4gdGhlIHNwZWNzLl9cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSBuYW1lc3BhY2VVUklcblx0ICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI05vZGUzLWxvb2t1cE5hbWVzcGFjZVByZWZpeFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL25hbWVzcGFjZXMtYWxnb3JpdGhtcy5odG1sI2xvb2t1cE5hbWVzcGFjZVByZWZpeEFsZ29cblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWxvb2t1cHByZWZpeFxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8zMjJcblx0ICovXG4gICAgbG9va3VwUHJlZml4OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSl7XG4gICAgXHR2YXIgZWwgPSB0aGlzO1xuICAgIFx0d2hpbGUoZWwpe1xuICAgIFx0XHR2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgIFx0XHQvL2NvbnNvbGUuZGlyKG1hcClcbiAgICBcdFx0aWYobWFwKXtcbiAgICBcdFx0XHRmb3IodmFyIG4gaW4gbWFwKXtcbiAgICBcdFx0XHRcdGlmKG1hcFtuXSA9PSBuYW1lc3BhY2VVUkkpe1xuICAgIFx0XHRcdFx0XHRyZXR1cm4gbjtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0ZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERT9lbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICBcdH1cbiAgICBcdHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMzpcbiAgICBsb29rdXBOYW1lc3BhY2VVUkk6ZnVuY3Rpb24ocHJlZml4KXtcbiAgICBcdHZhciBlbCA9IHRoaXM7XG4gICAgXHR3aGlsZShlbCl7XG4gICAgXHRcdHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgXHRcdC8vY29uc29sZS5kaXIobWFwKVxuICAgIFx0XHRpZihtYXApe1xuICAgIFx0XHRcdGlmKHByZWZpeCBpbiBtYXApe1xuICAgIFx0XHRcdFx0cmV0dXJuIG1hcFtwcmVmaXhdIDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0ZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERT9lbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICBcdH1cbiAgICBcdHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMzpcbiAgICBpc0RlZmF1bHROYW1lc3BhY2U6ZnVuY3Rpb24obmFtZXNwYWNlVVJJKXtcbiAgICBcdHZhciBwcmVmaXggPSB0aGlzLmxvb2t1cFByZWZpeChuYW1lc3BhY2VVUkkpO1xuICAgIFx0cmV0dXJuIHByZWZpeCA9PSBudWxsO1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gX3htbEVuY29kZXIoYyl7XG5cdHJldHVybiBjID09ICc8JyAmJiAnJmx0OycgfHxcbiAgICAgICAgIGMgPT0gJz4nICYmICcmZ3Q7JyB8fFxuICAgICAgICAgYyA9PSAnJicgJiYgJyZhbXA7JyB8fFxuICAgICAgICAgYyA9PSAnXCInICYmICcmcXVvdDsnIHx8XG4gICAgICAgICAnJiMnK2MuY2hhckNvZGVBdCgpKyc7J1xufVxuXG5cbmNvcHkoTm9kZVR5cGUsTm9kZSk7XG5jb3B5KE5vZGVUeXBlLE5vZGUucHJvdG90eXBlKTtcblxuLyoqXG4gKiBAcGFyYW0gY2FsbGJhY2sgcmV0dXJuIHRydWUgZm9yIGNvbnRpbnVlLGZhbHNlIGZvciBicmVha1xuICogQHJldHVybiBib29sZWFuIHRydWU6IGJyZWFrIHZpc2l0O1xuICovXG5mdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUsY2FsbGJhY2spe1xuXHRpZihjYWxsYmFjayhub2RlKSl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYobm9kZSA9IG5vZGUuZmlyc3RDaGlsZCl7XG5cdFx0ZG97XG5cdFx0XHRpZihfdmlzaXROb2RlKG5vZGUsY2FsbGJhY2spKXtyZXR1cm4gdHJ1ZX1cbiAgICAgICAgfXdoaWxlKG5vZGU9bm9kZS5uZXh0U2libGluZylcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBEb2N1bWVudCgpe1xufVxuXG5mdW5jdGlvbiBfb25BZGRBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIpe1xuXHRkb2MgJiYgZG9jLl9pbmMrKztcblx0dmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkkgO1xuXHRpZihucyA9PT0gTkFNRVNQQUNFLlhNTE5TKXtcblx0XHQvL3VwZGF0ZSBuYW1lc3BhY2Vcblx0XHRlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXg/bmV3QXR0ci5sb2NhbE5hbWU6JyddID0gbmV3QXR0ci52YWx1ZVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsbmV3QXR0cixyZW1vdmUpe1xuXHRkb2MgJiYgZG9jLl9pbmMrKztcblx0dmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkkgO1xuXHRpZihucyA9PT0gTkFNRVNQQUNFLlhNTE5TKXtcblx0XHQvL3VwZGF0ZSBuYW1lc3BhY2Vcblx0XHRkZWxldGUgZWwuX25zTWFwW25ld0F0dHIucHJlZml4P25ld0F0dHIubG9jYWxOYW1lOicnXVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9vblVwZGF0ZUNoaWxkKGRvYyxlbCxuZXdDaGlsZCl7XG5cdGlmKGRvYyAmJiBkb2MuX2luYyl7XG5cdFx0ZG9jLl9pbmMrKztcblx0XHQvL3VwZGF0ZSBjaGlsZE5vZGVzXG5cdFx0dmFyIGNzID0gZWwuY2hpbGROb2Rlcztcblx0XHRpZihuZXdDaGlsZCl7XG5cdFx0XHRjc1tjcy5sZW5ndGgrK10gPSBuZXdDaGlsZDtcblx0XHR9ZWxzZXtcblx0XHRcdC8vY29uc29sZS5sb2coMSlcblx0XHRcdHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdGNzW2krK10gPSBjaGlsZDtcblx0XHRcdFx0Y2hpbGQgPWNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdFx0Y3MubGVuZ3RoID0gaTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBhdHRyaWJ1dGVzO1xuICogY2hpbGRyZW47XG4gKiBcbiAqIHdyaXRlYWJsZSBwcm9wZXJ0aWVzOlxuICogbm9kZVZhbHVlLEF0dHI6dmFsdWUsQ2hhcmFjdGVyRGF0YTpkYXRhXG4gKiBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUNoaWxkKHBhcmVudE5vZGUsY2hpbGQpe1xuXHR2YXIgcHJldmlvdXMgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG5cdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdGlmKHByZXZpb3VzKXtcblx0XHRwcmV2aW91cy5uZXh0U2libGluZyA9IG5leHQ7XG5cdH1lbHNle1xuXHRcdHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5leHRcblx0fVxuXHRpZihuZXh0KXtcblx0XHRuZXh0LnByZXZpb3VzU2libGluZyA9IHByZXZpb3VzO1xuXHR9ZWxzZXtcblx0XHRwYXJlbnROb2RlLmxhc3RDaGlsZCA9IHByZXZpb3VzO1xuXHR9XG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCxwYXJlbnROb2RlKTtcblx0cmV0dXJuIGNoaWxkO1xufVxuLyoqXG4gKiBwcmVmb3JtYW5jZSBrZXkocmVmQ2hpbGQgPT0gbnVsbClcbiAqL1xuZnVuY3Rpb24gX2luc2VydEJlZm9yZShwYXJlbnROb2RlLG5ld0NoaWxkLG5leHRDaGlsZCl7XG5cdHZhciBjcCA9IG5ld0NoaWxkLnBhcmVudE5vZGU7XG5cdGlmKGNwKXtcblx0XHRjcC5yZW1vdmVDaGlsZChuZXdDaGlsZCk7Ly9yZW1vdmUgYW5kIHVwZGF0ZVxuXHR9XG5cdGlmKG5ld0NoaWxkLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtcblx0XHR2YXIgbmV3Rmlyc3QgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuXHRcdGlmIChuZXdGaXJzdCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbmV3Q2hpbGQ7XG5cdFx0fVxuXHRcdHZhciBuZXdMYXN0ID0gbmV3Q2hpbGQubGFzdENoaWxkO1xuXHR9ZWxzZXtcblx0XHRuZXdGaXJzdCA9IG5ld0xhc3QgPSBuZXdDaGlsZDtcblx0fVxuXHR2YXIgcHJlID0gbmV4dENoaWxkID8gbmV4dENoaWxkLnByZXZpb3VzU2libGluZyA6IHBhcmVudE5vZGUubGFzdENoaWxkO1xuXG5cdG5ld0ZpcnN0LnByZXZpb3VzU2libGluZyA9IHByZTtcblx0bmV3TGFzdC5uZXh0U2libGluZyA9IG5leHRDaGlsZDtcblx0XG5cdFxuXHRpZihwcmUpe1xuXHRcdHByZS5uZXh0U2libGluZyA9IG5ld0ZpcnN0O1xuXHR9ZWxzZXtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdGaXJzdDtcblx0fVxuXHRpZihuZXh0Q2hpbGQgPT0gbnVsbCl7XG5cdFx0cGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBuZXdMYXN0O1xuXHR9ZWxzZXtcblx0XHRuZXh0Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3TGFzdDtcblx0fVxuXHRkb3tcblx0XHRuZXdGaXJzdC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcblx0fXdoaWxlKG5ld0ZpcnN0ICE9PSBuZXdMYXN0ICYmIChuZXdGaXJzdD0gbmV3Rmlyc3QubmV4dFNpYmxpbmcpKVxuXHRfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnR8fHBhcmVudE5vZGUscGFyZW50Tm9kZSk7XG5cdC8vY29uc29sZS5sb2cocGFyZW50Tm9kZS5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbClcblx0aWYgKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcblx0XHRuZXdDaGlsZC5maXJzdENoaWxkID0gbmV3Q2hpbGQubGFzdENoaWxkID0gbnVsbDtcblx0fVxuXHRyZXR1cm4gbmV3Q2hpbGQ7XG59XG5mdW5jdGlvbiBfYXBwZW5kU2luZ2xlQ2hpbGQocGFyZW50Tm9kZSxuZXdDaGlsZCl7XG5cdHZhciBjcCA9IG5ld0NoaWxkLnBhcmVudE5vZGU7XG5cdGlmKGNwKXtcblx0XHR2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0Y3AucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpOy8vcmVtb3ZlIGFuZCB1cGRhdGVcblx0XHR2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdH1cblx0dmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuXHRuZXdDaGlsZC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcblx0bmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcHJlO1xuXHRuZXdDaGlsZC5uZXh0U2libGluZyA9IG51bGw7XG5cdGlmKHByZSl7XG5cdFx0cHJlLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cdH1lbHNle1xuXHRcdHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuXHR9XG5cdHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCxwYXJlbnROb2RlLG5ld0NoaWxkKTtcblx0cmV0dXJuIG5ld0NoaWxkO1xuXHQvL2NvbnNvbGUubG9nKFwiX19hYVwiLHBhcmVudE5vZGUubGFzdENoaWxkLm5leHRTaWJsaW5nID09IG51bGwpXG59XG5Eb2N1bWVudC5wcm90b3R5cGUgPSB7XG5cdC8vaW1wbGVtZW50YXRpb24gOiBudWxsLFxuXHRub2RlTmFtZSA6ICAnI2RvY3VtZW50Jyxcblx0bm9kZVR5cGUgOiAgRE9DVU1FTlRfTk9ERSxcblx0LyoqXG5cdCAqIFRoZSBEb2N1bWVudFR5cGUgbm9kZSBvZiB0aGUgZG9jdW1lbnQuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAdHlwZSBEb2N1bWVudFR5cGVcblx0ICovXG5cdGRvY3R5cGUgOiAgbnVsbCxcblx0ZG9jdW1lbnRFbGVtZW50IDogIG51bGwsXG5cdF9pbmMgOiAxLFxuXG5cdGluc2VydEJlZm9yZSA6ICBmdW5jdGlvbihuZXdDaGlsZCwgcmVmQ2hpbGQpey8vcmFpc2VzXG5cdFx0aWYobmV3Q2hpbGQubm9kZVR5cGUgPT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0XHR2YXIgY2hpbGQgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuXHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0XHR0aGlzLmluc2VydEJlZm9yZShjaGlsZCxyZWZDaGlsZCk7XG5cdFx0XHRcdGNoaWxkID0gbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdDaGlsZDtcblx0XHR9XG5cdFx0aWYodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gbnVsbCAmJiBuZXdDaGlsZC5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpe1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXdDaGlsZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLG5ld0NoaWxkLHJlZkNoaWxkKSwobmV3Q2hpbGQub3duZXJEb2N1bWVudCA9IHRoaXMpLG5ld0NoaWxkO1xuXHR9LFxuXHRyZW1vdmVDaGlsZCA6ICBmdW5jdGlvbihvbGRDaGlsZCl7XG5cdFx0aWYodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gb2xkQ2hpbGQpe1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsb2xkQ2hpbGQpO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRpbXBvcnROb2RlIDogZnVuY3Rpb24oaW1wb3J0ZWROb2RlLGRlZXApe1xuXHRcdHJldHVybiBpbXBvcnROb2RlKHRoaXMsaW1wb3J0ZWROb2RlLGRlZXApO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRnZXRFbGVtZW50QnlJZCA6XHRmdW5jdGlvbihpZCl7XG5cdFx0dmFyIHJ0diA9IG51bGw7XG5cdFx0X3Zpc2l0Tm9kZSh0aGlzLmRvY3VtZW50RWxlbWVudCxmdW5jdGlvbihub2RlKXtcblx0XHRcdGlmKG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKXtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpe1xuXHRcdFx0XHRcdHJ0diA9IG5vZGU7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiBydHY7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZWAgbWV0aG9kIG9mIGBEb2N1bWVudGAgaW50ZXJmYWNlIHJldHVybnMgYW4gYXJyYXktbGlrZSBvYmplY3Rcblx0ICogb2YgYWxsIGNoaWxkIGVsZW1lbnRzIHdoaWNoIGhhdmUgKiphbGwqKiBvZiB0aGUgZ2l2ZW4gY2xhc3MgbmFtZShzKS5cblx0ICpcblx0ICogUmV0dXJucyBhbiBlbXB0eSBsaXN0IGlmIGBjbGFzc2VOYW1lc2AgaXMgYW4gZW1wdHkgc3RyaW5nIG9yIG9ubHkgY29udGFpbnMgSFRNTCB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzLlxuXHQgKlxuXHQgKlxuXHQgKiBXYXJuaW5nOiBUaGlzIGlzIGEgbGl2ZSBMaXZlTm9kZUxpc3QuXG5cdCAqIENoYW5nZXMgaW4gdGhlIERPTSB3aWxsIHJlZmxlY3QgaW4gdGhlIGFycmF5IGFzIHRoZSBjaGFuZ2VzIG9jY3VyLlxuXHQgKiBJZiBhbiBlbGVtZW50IHNlbGVjdGVkIGJ5IHRoaXMgYXJyYXkgbm8gbG9uZ2VyIHF1YWxpZmllcyBmb3IgdGhlIHNlbGVjdG9yLFxuXHQgKiBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgcmVtb3ZlZC4gQmUgYXdhcmUgb2YgdGhpcyBmb3IgaXRlcmF0aW9uIHB1cnBvc2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lcyBpcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGNsYXNzIG5hbWUocykgdG8gbWF0Y2g7IG11bHRpcGxlIGNsYXNzIG5hbWVzIGFyZSBzZXBhcmF0ZWQgYnkgKEFTQ0lJLSl3aGl0ZXNwYWNlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2dldEVsZW1lbnRzQnlDbGFzc05hbWVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtZ2V0ZWxlbWVudHNieWNsYXNzbmFtZVxuXHQgKi9cblx0Z2V0RWxlbWVudHNCeUNsYXNzTmFtZTogZnVuY3Rpb24oY2xhc3NOYW1lcykge1xuXHRcdHZhciBjbGFzc05hbWVzU2V0ID0gdG9PcmRlcmVkU2V0KGNsYXNzTmFtZXMpXG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24oYmFzZSkge1xuXHRcdFx0dmFyIGxzID0gW107XG5cdFx0XHRpZiAoY2xhc3NOYW1lc1NldC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdF92aXNpdE5vZGUoYmFzZS5kb2N1bWVudEVsZW1lbnQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuXHRcdFx0XHRcdFx0dmFyIG5vZGVDbGFzc05hbWVzID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJylcblx0XHRcdFx0XHRcdC8vIGNhbiBiZSBudWxsIGlmIHRoZSBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3Rcblx0XHRcdFx0XHRcdGlmIChub2RlQ2xhc3NOYW1lcykge1xuXHRcdFx0XHRcdFx0XHQvLyBiZWZvcmUgc3BsaXR0aW5nIGFuZCBpdGVyYXRpbmcganVzdCBjb21wYXJlIHRoZW0gZm9yIHRoZSBtb3N0IGNvbW1vbiBjYXNlXG5cdFx0XHRcdFx0XHRcdHZhciBtYXRjaGVzID0gY2xhc3NOYW1lcyA9PT0gbm9kZUNsYXNzTmFtZXM7XG5cdFx0XHRcdFx0XHRcdGlmICghbWF0Y2hlcykge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBub2RlQ2xhc3NOYW1lc1NldCA9IHRvT3JkZXJlZFNldChub2RlQ2xhc3NOYW1lcylcblx0XHRcdFx0XHRcdFx0XHRtYXRjaGVzID0gY2xhc3NOYW1lc1NldC5ldmVyeShhcnJheUluY2x1ZGVzKG5vZGVDbGFzc05hbWVzU2V0KSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZihtYXRjaGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbHM7XG5cdFx0fSk7XG5cdH0sXG5cblx0Ly9kb2N1bWVudCBmYWN0b3J5IG1ldGhvZDpcblx0Y3JlYXRlRWxlbWVudCA6XHRmdW5jdGlvbih0YWdOYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lID0gdGFnTmFtZTtcblx0XHRub2RlLnRhZ05hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUubG9jYWxOYW1lID0gdGFnTmFtZTtcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVEb2N1bWVudEZyYWdtZW50IDpcdGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZVRleHROb2RlIDpcdGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IFRleHQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuYXBwZW5kRGF0YShkYXRhKVxuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVDb21tZW50IDpcdGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IENvbW1lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuYXBwZW5kRGF0YShkYXRhKVxuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVDREFUQVNlY3Rpb24gOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQ0RBVEFTZWN0aW9uKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmFwcGVuZERhdGEoZGF0YSlcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uIDpcdGZ1bmN0aW9uKHRhcmdldCxkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUudGFnTmFtZSA9IG5vZGUudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdG5vZGUubm9kZVZhbHVlPSBub2RlLmRhdGEgPSBkYXRhO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVBdHRyaWJ1dGUgOlx0ZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudFx0PSB0aGlzO1xuXHRcdG5vZGUubmFtZSA9IG5hbWU7XG5cdFx0bm9kZS5ub2RlTmFtZVx0PSBuYW1lO1xuXHRcdG5vZGUubG9jYWxOYW1lID0gbmFtZTtcblx0XHRub2RlLnNwZWNpZmllZCA9IHRydWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUVudGl0eVJlZmVyZW5jZSA6XHRmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBFbnRpdHlSZWZlcmVuY2UoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnRcdD0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lXHQ9IG5hbWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGNyZWF0ZUVsZW1lbnROUyA6XHRmdW5jdGlvbihuYW1lc3BhY2VVUkkscXVhbGlmaWVkTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuXHRcdHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS50YWdOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblx0XHRpZihwbC5sZW5ndGggPT0gMil7XG5cdFx0XHRub2RlLnByZWZpeCA9IHBsWzBdO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBwbFsxXTtcblx0XHR9ZWxzZXtcblx0XHRcdC8vZWwucHJlZml4ID0gbnVsbDtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHR9XG5cdFx0YXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGNyZWF0ZUF0dHJpYnV0ZU5TIDpcdGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSxxdWFsaWZpZWROYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBBdHRyKCk7XG5cdFx0dmFyIHBsID0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnOicpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblx0XHRub2RlLnNwZWNpZmllZCA9IHRydWU7XG5cdFx0aWYocGwubGVuZ3RoID09IDIpe1xuXHRcdFx0bm9kZS5wcmVmaXggPSBwbFswXTtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2VsLnByZWZpeCA9IG51bGw7XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0fVxuXHRcdHJldHVybiBub2RlO1xuXHR9XG59O1xuX2V4dGVuZHMoRG9jdW1lbnQsTm9kZSk7XG5cblxuZnVuY3Rpb24gRWxlbWVudCgpIHtcblx0dGhpcy5fbnNNYXAgPSB7fTtcbn07XG5FbGVtZW50LnByb3RvdHlwZSA9IHtcblx0bm9kZVR5cGUgOiBFTEVNRU5UX05PREUsXG5cdGhhc0F0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkhPW51bGw7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuXHRcdHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShuYW1lKTtcblx0fSxcblx0c2V0QXR0cmlidXRlIDogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdH0sXG5cdHJlbW92ZUF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpXG5cdFx0YXR0ciAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG5cdH0sXG5cdFxuXHQvL2ZvdXIgcmVhbCBvcGVhcnRpb24gbWV0aG9kXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHRpZihuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsbnVsbCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gX2FwcGVuZFNpbmdsZUNoaWxkKHRoaXMsbmV3Q2hpbGQpO1xuXHRcdH1cblx0fSxcblx0c2V0QXR0cmlidXRlTm9kZSA6IGZ1bmN0aW9uKG5ld0F0dHIpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtKG5ld0F0dHIpO1xuXHR9LFxuXHRzZXRBdHRyaWJ1dGVOb2RlTlMgOiBmdW5jdGlvbihuZXdBdHRyKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbU5TKG5ld0F0dHIpO1xuXHR9LFxuXHRyZW1vdmVBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24ob2xkQXR0cil7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzID09IG9sZEF0dHIub3duZXJFbGVtZW50KVxuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKG9sZEF0dHIubm9kZU5hbWUpO1xuXHR9LFxuXHQvL2dldCByZWFsIGF0dHJpYnV0ZSBuYW1lLGFuZCByZW1vdmUgaXQgYnkgcmVtb3ZlQXR0cmlidXRlTm9kZVxuXHRyZW1vdmVBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHR2YXIgb2xkID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHRcdG9sZCAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUob2xkKTtcblx0fSxcblx0XG5cdGhhc0F0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkhPW51bGw7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHRcdHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcblx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5vZGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0fSxcblx0XG5cdGdldEVsZW1lbnRzQnlUYWdOYW1lIDogZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcyxmdW5jdGlvbihiYXNlKXtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0X3Zpc2l0Tm9kZShiYXNlLGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFICYmICh0YWdOYW1lID09PSAnKicgfHwgbm9kZS50YWdOYW1lID09IHRhZ05hbWUpKXtcblx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBscztcblx0XHR9KTtcblx0fSxcblx0Z2V0RWxlbWVudHNCeVRhZ05hbWVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLGZ1bmN0aW9uKGJhc2Upe1xuXHRcdFx0dmFyIGxzID0gW107XG5cdFx0XHRfdmlzaXROb2RlKGJhc2UsZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFICYmIChuYW1lc3BhY2VVUkkgPT09ICcqJyB8fCBub2RlLm5hbWVzcGFjZVVSSSA9PT0gbmFtZXNwYWNlVVJJKSAmJiAobG9jYWxOYW1lID09PSAnKicgfHwgbm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lKSl7XG5cdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbHM7XG5cdFx0XHRcblx0XHR9KTtcblx0fVxufTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TO1xuXG5cbl9leHRlbmRzKEVsZW1lbnQsTm9kZSk7XG5mdW5jdGlvbiBBdHRyKCkge1xufTtcbkF0dHIucHJvdG90eXBlLm5vZGVUeXBlID0gQVRUUklCVVRFX05PREU7XG5fZXh0ZW5kcyhBdHRyLE5vZGUpO1xuXG5cbmZ1bmN0aW9uIENoYXJhY3RlckRhdGEoKSB7XG59O1xuQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUgPSB7XG5cdGRhdGEgOiAnJyxcblx0c3Vic3RyaW5nRGF0YSA6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQsIG9mZnNldCtjb3VudCk7XG5cdH0sXG5cdGFwcGVuZERhdGE6IGZ1bmN0aW9uKHRleHQpIHtcblx0XHR0ZXh0ID0gdGhpcy5kYXRhK3RleHQ7XG5cdFx0dGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdH0sXG5cdGluc2VydERhdGE6IGZ1bmN0aW9uKG9mZnNldCx0ZXh0KSB7XG5cdFx0dGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsMCx0ZXh0KTtcblx0XG5cdH0sXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoRXhjZXB0aW9uTWVzc2FnZVtISUVSQVJDSFlfUkVRVUVTVF9FUlJdKVxuXHR9LFxuXHRkZWxldGVEYXRhOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50KSB7XG5cdFx0dGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsY291bnQsXCJcIik7XG5cdH0sXG5cdHJlcGxhY2VEYXRhOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50LCB0ZXh0KSB7XG5cdFx0dmFyIHN0YXJ0ID0gdGhpcy5kYXRhLnN1YnN0cmluZygwLG9mZnNldCk7XG5cdFx0dmFyIGVuZCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0K2NvdW50KTtcblx0XHR0ZXh0ID0gc3RhcnQgKyB0ZXh0ICsgZW5kO1xuXHRcdHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHR9XG59XG5fZXh0ZW5kcyhDaGFyYWN0ZXJEYXRhLE5vZGUpO1xuZnVuY3Rpb24gVGV4dCgpIHtcbn07XG5UZXh0LnByb3RvdHlwZSA9IHtcblx0bm9kZU5hbWUgOiBcIiN0ZXh0XCIsXG5cdG5vZGVUeXBlIDogVEVYVF9OT0RFLFxuXHRzcGxpdFRleHQgOiBmdW5jdGlvbihvZmZzZXQpIHtcblx0XHR2YXIgdGV4dCA9IHRoaXMuZGF0YTtcblx0XHR2YXIgbmV3VGV4dCA9IHRleHQuc3Vic3RyaW5nKG9mZnNldCk7XG5cdFx0dGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG9mZnNldCk7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy5ub2RlVmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdFx0dmFyIG5ld05vZGUgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3VGV4dCk7XG5cdFx0aWYodGhpcy5wYXJlbnROb2RlKXtcblx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG59XG5fZXh0ZW5kcyhUZXh0LENoYXJhY3RlckRhdGEpO1xuZnVuY3Rpb24gQ29tbWVudCgpIHtcbn07XG5Db21tZW50LnByb3RvdHlwZSA9IHtcblx0bm9kZU5hbWUgOiBcIiNjb21tZW50XCIsXG5cdG5vZGVUeXBlIDogQ09NTUVOVF9OT0RFXG59XG5fZXh0ZW5kcyhDb21tZW50LENoYXJhY3RlckRhdGEpO1xuXG5mdW5jdGlvbiBDREFUQVNlY3Rpb24oKSB7XG59O1xuQ0RBVEFTZWN0aW9uLnByb3RvdHlwZSA9IHtcblx0bm9kZU5hbWUgOiBcIiNjZGF0YS1zZWN0aW9uXCIsXG5cdG5vZGVUeXBlIDogQ0RBVEFfU0VDVElPTl9OT0RFXG59XG5fZXh0ZW5kcyhDREFUQVNlY3Rpb24sQ2hhcmFjdGVyRGF0YSk7XG5cblxuZnVuY3Rpb24gRG9jdW1lbnRUeXBlKCkge1xufTtcbkRvY3VtZW50VHlwZS5wcm90b3R5cGUubm9kZVR5cGUgPSBET0NVTUVOVF9UWVBFX05PREU7XG5fZXh0ZW5kcyhEb2N1bWVudFR5cGUsTm9kZSk7XG5cbmZ1bmN0aW9uIE5vdGF0aW9uKCkge1xufTtcbk5vdGF0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5PVEFUSU9OX05PREU7XG5fZXh0ZW5kcyhOb3RhdGlvbixOb2RlKTtcblxuZnVuY3Rpb24gRW50aXR5KCkge1xufTtcbkVudGl0eS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfTk9ERTtcbl9leHRlbmRzKEVudGl0eSxOb2RlKTtcblxuZnVuY3Rpb24gRW50aXR5UmVmZXJlbmNlKCkge1xufTtcbkVudGl0eVJlZmVyZW5jZS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfUkVGRVJFTkNFX05PREU7XG5fZXh0ZW5kcyhFbnRpdHlSZWZlcmVuY2UsTm9kZSk7XG5cbmZ1bmN0aW9uIERvY3VtZW50RnJhZ21lbnQoKSB7XG59O1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZU5hbWUgPVx0XCIjZG9jdW1lbnQtZnJhZ21lbnRcIjtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVUeXBlID1cdERPQ1VNRU5UX0ZSQUdNRU5UX05PREU7XG5fZXh0ZW5kcyhEb2N1bWVudEZyYWdtZW50LE5vZGUpO1xuXG5cbmZ1bmN0aW9uIFByb2Nlc3NpbmdJbnN0cnVjdGlvbigpIHtcbn1cblByb2Nlc3NpbmdJbnN0cnVjdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU7XG5fZXh0ZW5kcyhQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sTm9kZSk7XG5mdW5jdGlvbiBYTUxTZXJpYWxpemVyKCl7fVxuWE1MU2VyaWFsaXplci5wcm90b3R5cGUuc2VyaWFsaXplVG9TdHJpbmcgPSBmdW5jdGlvbihub2RlLGlzSHRtbCxub2RlRmlsdGVyKXtcblx0cmV0dXJuIG5vZGVTZXJpYWxpemVUb1N0cmluZy5jYWxsKG5vZGUsaXNIdG1sLG5vZGVGaWx0ZXIpO1xufVxuTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBub2RlU2VyaWFsaXplVG9TdHJpbmc7XG5mdW5jdGlvbiBub2RlU2VyaWFsaXplVG9TdHJpbmcoaXNIdG1sLG5vZGVGaWx0ZXIpe1xuXHR2YXIgYnVmID0gW107XG5cdHZhciByZWZOb2RlID0gdGhpcy5ub2RlVHlwZSA9PSA5ICYmIHRoaXMuZG9jdW1lbnRFbGVtZW50IHx8IHRoaXM7XG5cdHZhciBwcmVmaXggPSByZWZOb2RlLnByZWZpeDtcblx0dmFyIHVyaSA9IHJlZk5vZGUubmFtZXNwYWNlVVJJO1xuXHRcblx0aWYodXJpICYmIHByZWZpeCA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHByZWZpeClcblx0XHR2YXIgcHJlZml4ID0gcmVmTm9kZS5sb29rdXBQcmVmaXgodXJpKTtcblx0XHRpZihwcmVmaXggPT0gbnVsbCl7XG5cdFx0XHQvL2lzSFRNTCA9IHRydWU7XG5cdFx0XHR2YXIgdmlzaWJsZU5hbWVzcGFjZXM9W1xuXHRcdFx0e25hbWVzcGFjZTp1cmkscHJlZml4Om51bGx9XG5cdFx0XHQvL3tuYW1lc3BhY2U6dXJpLHByZWZpeDonJ31cblx0XHRcdF1cblx0XHR9XG5cdH1cblx0c2VyaWFsaXplVG9TdHJpbmcodGhpcyxidWYsaXNIdG1sLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHQvL2NvbnNvbGUubG9nKCcjIyMnLHRoaXMubm9kZVR5cGUsdXJpLHByZWZpeCxidWYuam9pbignJykpXG5cdHJldHVybiBidWYuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuXHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG5cdHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblx0Ly8gQWNjb3JkaW5nIHRvIFtOYW1lc3BhY2VzIGluIFhNTCAxLjBdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNucy11c2luZykgLFxuXHQvLyBhbmQgbW9yZSBzcGVjaWZpY2FsbHkgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXMvI25zYy1Ob1ByZWZpeFVuZGVjbCA6XG5cdC8vID4gSW4gYSBuYW1lc3BhY2UgZGVjbGFyYXRpb24gZm9yIGEgcHJlZml4IFsuLi5dLCB0aGUgYXR0cmlidXRlIHZhbHVlIE1VU1QgTk9UIGJlIGVtcHR5LlxuXHQvLyBpbiBhIHNpbWlsYXIgbWFubmVyIFtOYW1lc3BhY2VzIGluIFhNTCAxLjFdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMxMS8jbnMtdXNpbmcpXG5cdC8vIGFuZCBtb3JlIHNwZWNpZmljYWxseSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzMTEvI25zYy1OU0RlY2xhcmVkIDpcblx0Ly8gPiBbLi4uXSBGdXJ0aGVybW9yZSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBbLi4uXSBtdXN0IG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXG5cdC8vIHNvIHNlcmlhbGl6aW5nIGVtcHR5IG5hbWVzcGFjZSB2YWx1ZSBsaWtlIHhtbG5zOmRzPVwiXCIgd291bGQgcHJvZHVjZSBhbiBpbnZhbGlkIFhNTCBkb2N1bWVudC5cblx0aWYgKCF1cmkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IE5BTUVTUEFDRS5YTUwgfHwgdXJpID09PSBOQU1FU1BBQ0UuWE1MTlMpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdHZhciBpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIFxuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG5zID0gdmlzaWJsZU5hbWVzcGFjZXNbaV07XG5cdFx0Ly8gZ2V0IG5hbWVzcGFjZSBwcmVmaXhcblx0XHRpZiAobnMucHJlZml4ID09PSBwcmVmaXgpIHtcblx0XHRcdHJldHVybiBucy5uYW1lc3BhY2UgIT09IHVyaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG4vKipcbiAqIFdlbGwtZm9ybWVkIGNvbnN0cmFpbnQ6IE5vIDwgaW4gQXR0cmlidXRlIFZhbHVlc1xuICogVGhlIHJlcGxhY2VtZW50IHRleHQgb2YgYW55IGVudGl0eSByZWZlcnJlZCB0byBkaXJlY3RseSBvciBpbmRpcmVjdGx5IGluIGFuIGF0dHJpYnV0ZSB2YWx1ZSBtdXN0IG5vdCBjb250YWluIGEgPC5cbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jQ2xlYW5BdHRyVmFsc1xuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1BdHRWYWx1ZVxuICovXG5mdW5jdGlvbiBhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1ZiwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpIHtcblx0YnVmLnB1c2goJyAnLCBxdWFsaWZpZWROYW1lLCAnPVwiJywgdmFsdWUucmVwbGFjZSgvWzwmXCJdL2csX3htbEVuY29kZXIpLCAnXCInKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVUb1N0cmluZyhub2RlLGJ1Zixpc0hUTUwsbm9kZUZpbHRlcix2aXNpYmxlTmFtZXNwYWNlcyl7XG5cdGlmICghdmlzaWJsZU5hbWVzcGFjZXMpIHtcblx0XHR2aXNpYmxlTmFtZXNwYWNlcyA9IFtdO1xuXHR9XG5cblx0aWYobm9kZUZpbHRlcil7XG5cdFx0bm9kZSA9IG5vZGVGaWx0ZXIobm9kZSk7XG5cdFx0aWYobm9kZSl7XG5cdFx0XHRpZih0eXBlb2Ygbm9kZSA9PSAnc3RyaW5nJyl7XG5cdFx0XHRcdGJ1Zi5wdXNoKG5vZGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vYnVmLnNvcnQuYXBwbHkoYXR0cnMsIGF0dHJpYnV0ZVNvcnRlcik7XG5cdH1cblxuXHRzd2l0Y2gobm9kZS5ub2RlVHlwZSl7XG5cdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcztcblx0XHR2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR2YXIgbm9kZU5hbWUgPSBub2RlLnRhZ05hbWU7XG5cdFx0XG5cdFx0aXNIVE1MID0gTkFNRVNQQUNFLmlzSFRNTChub2RlLm5hbWVzcGFjZVVSSSkgfHwgaXNIVE1MXG5cblx0XHR2YXIgcHJlZml4ZWROb2RlTmFtZSA9IG5vZGVOYW1lXG5cdFx0aWYgKCFpc0hUTUwgJiYgIW5vZGUucHJlZml4ICYmIG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHR2YXIgZGVmYXVsdE5TXG5cdFx0XHQvLyBsb29rdXAgY3VycmVudCBkZWZhdWx0IG5zIGZyb20gYHhtbG5zYCBhdHRyaWJ1dGVcblx0XHRcdGZvciAodmFyIGFpID0gMDsgYWkgPCBhdHRycy5sZW5ndGg7IGFpKyspIHtcblx0XHRcdFx0aWYgKGF0dHJzLml0ZW0oYWkpLm5hbWUgPT09ICd4bWxucycpIHtcblx0XHRcdFx0XHRkZWZhdWx0TlMgPSBhdHRycy5pdGVtKGFpKS52YWx1ZVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghZGVmYXVsdE5TKSB7XG5cdFx0XHRcdC8vIGxvb2t1cCBjdXJyZW50IGRlZmF1bHQgbnMgaW4gdmlzaWJsZU5hbWVzcGFjZXNcblx0XHRcdFx0Zm9yICh2YXIgbnNpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIC0gMTsgbnNpID49IDA7IG5zaS0tKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IHZpc2libGVOYW1lc3BhY2VzW25zaV1cblx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLnByZWZpeCA9PT0gJycgJiYgbmFtZXNwYWNlLm5hbWVzcGFjZSA9PT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHROUyA9IG5hbWVzcGFjZS5uYW1lc3BhY2Vcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGVmYXVsdE5TICE9PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRmb3IgKHZhciBuc2kgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGggLSAxOyBuc2kgPj0gMDsgbnNpLS0pIHtcblx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gdmlzaWJsZU5hbWVzcGFjZXNbbnNpXVxuXHRcdFx0XHRcdGlmIChuYW1lc3BhY2UubmFtZXNwYWNlID09PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5wcmVmaXgpIHtcblx0XHRcdFx0XHRcdFx0cHJlZml4ZWROb2RlTmFtZSA9IG5hbWVzcGFjZS5wcmVmaXggKyAnOicgKyBub2RlTmFtZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRidWYucHVzaCgnPCcsIHByZWZpeGVkTm9kZU5hbWUpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdC8vIGFkZCBuYW1lc3BhY2VzIGZvciBhdHRyaWJ1dGVzXG5cdFx0XHR2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG5cdFx0XHRpZiAoYXR0ci5wcmVmaXggPT0gJ3htbG5zJykge1xuXHRcdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBhdHRyLmxvY2FsTmFtZSwgbmFtZXNwYWNlOiBhdHRyLnZhbHVlIH0pO1xuXHRcdFx0fWVsc2UgaWYoYXR0ci5ub2RlTmFtZSA9PSAneG1sbnMnKXtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogJycsIG5hbWVzcGFjZTogYXR0ci52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0dmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuXHRcdFx0aWYgKG5lZWROYW1lc3BhY2VEZWZpbmUoYXR0cixpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuXHRcdFx0XHR2YXIgcHJlZml4ID0gYXR0ci5wcmVmaXh8fCcnO1xuXHRcdFx0XHR2YXIgdXJpID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cdFx0XHRcdGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBwcmVmaXggPyAneG1sbnM6JyArIHByZWZpeCA6IFwieG1sbnNcIiwgdXJpKTtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdFx0fVxuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoYXR0cixidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuYW1lc3BhY2UgZm9yIGN1cnJlbnQgbm9kZVx0XHRcblx0XHRpZiAobm9kZU5hbWUgPT09IHByZWZpeGVkTm9kZU5hbWUgJiYgbmVlZE5hbWVzcGFjZURlZmluZShub2RlLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuXHRcdFx0dmFyIHByZWZpeCA9IG5vZGUucHJlZml4fHwnJztcblx0XHRcdHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblx0XHRcdGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBwcmVmaXggPyAneG1sbnM6JyArIHByZWZpeCA6IFwieG1sbnNcIiwgdXJpKTtcblx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6IHByZWZpeCwgbmFtZXNwYWNlOnVyaSB9KTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoY2hpbGQgfHwgaXNIVE1MICYmICEvXig/Om1ldGF8bGlua3xpbWd8YnJ8aHJ8aW5wdXQpJC9pLnRlc3Qobm9kZU5hbWUpKXtcblx0XHRcdGJ1Zi5wdXNoKCc+Jyk7XG5cdFx0XHQvL2lmIGlzIGNkYXRhIGNoaWxkIG5vZGVcblx0XHRcdGlmKGlzSFRNTCAmJiAvXnNjcmlwdCQvaS50ZXN0KG5vZGVOYW1lKSl7XG5cdFx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0XHRpZihjaGlsZC5kYXRhKXtcblx0XHRcdFx0XHRcdGJ1Zi5wdXNoKGNoaWxkLmRhdGEpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2Vcblx0XHRcdHtcblx0XHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnVmLnB1c2goJzwvJyxwcmVmaXhlZE5vZGVOYW1lLCc+Jyk7XG5cdFx0fWVsc2V7XG5cdFx0XHRidWYucHVzaCgnLz4nKTtcblx0XHR9XG5cdFx0Ly8gcmVtb3ZlIGFkZGVkIHZpc2libGUgbmFtZXNwYWNlc1xuXHRcdC8vdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoID0gc3RhcnRWaXNpYmxlTmFtZXNwYWNlcztcblx0XHRyZXR1cm47XG5cdGNhc2UgRE9DVU1FTlRfTk9ERTpcblx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdHJldHVybiBhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1Ziwgbm9kZS5uYW1lLCBub2RlLnZhbHVlKTtcblx0Y2FzZSBURVhUX05PREU6XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFtcGVyc2FuZCBjaGFyYWN0ZXIgKCYpIGFuZCB0aGUgbGVmdCBhbmdsZSBicmFja2V0ICg8KSBtdXN0IG5vdCBhcHBlYXIgaW4gdGhlaXIgbGl0ZXJhbCBmb3JtLFxuXHRcdCAqIGV4Y2VwdCB3aGVuIHVzZWQgYXMgbWFya3VwIGRlbGltaXRlcnMsIG9yIHdpdGhpbiBhIGNvbW1lbnQsIGEgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgb3IgYSBDREFUQSBzZWN0aW9uLlxuXHRcdCAqIElmIHRoZXkgYXJlIG5lZWRlZCBlbHNld2hlcmUsIHRoZXkgbXVzdCBiZSBlc2NhcGVkIHVzaW5nIGVpdGhlciBudW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIG9yIHRoZSBzdHJpbmdzXG5cdFx0ICogYCZhbXA7YCBhbmQgYCZsdDtgIHJlc3BlY3RpdmVseS5cblx0XHQgKiBUaGUgcmlnaHQgYW5nbGUgYnJhY2tldCAoPikgbWF5IGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBzdHJpbmcgXCIgJmd0OyBcIiwgYW5kIG11c3QsIGZvciBjb21wYXRpYmlsaXR5LFxuXHRcdCAqIGJlIGVzY2FwZWQgdXNpbmcgZWl0aGVyIGAmZ3Q7YCBvciBhIGNoYXJhY3RlciByZWZlcmVuY2Ugd2hlbiBpdCBhcHBlYXJzIGluIHRoZSBzdHJpbmcgYF1dPmAgaW4gY29udGVudCxcblx0XHQgKiB3aGVuIHRoYXQgc3RyaW5nIGlzIG5vdCBtYXJraW5nIHRoZSBlbmQgb2YgYSBDREFUQSBzZWN0aW9uLlxuXHRcdCAqXG5cdFx0ICogSW4gdGhlIGNvbnRlbnQgb2YgZWxlbWVudHMsIGNoYXJhY3RlciBkYXRhIGlzIGFueSBzdHJpbmcgb2YgY2hhcmFjdGVyc1xuXHRcdCAqIHdoaWNoIGRvZXMgbm90IGNvbnRhaW4gdGhlIHN0YXJ0LWRlbGltaXRlciBvZiBhbnkgbWFya3VwXG5cdFx0ICogYW5kIGRvZXMgbm90IGluY2x1ZGUgdGhlIENEQVRBLXNlY3Rpb24tY2xvc2UgZGVsaW1pdGVyLCBgXV0+YC5cblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtQ2hhckRhdGFcblx0XHQgKi9cblx0XHRyZXR1cm4gYnVmLnB1c2gobm9kZS5kYXRhXG5cdFx0XHQucmVwbGFjZSgvWzwmXS9nLF94bWxFbmNvZGVyKVxuXHRcdFx0LnJlcGxhY2UoL11dPi9nLCAnXV0mZ3Q7Jylcblx0XHQpO1xuXHRjYXNlIENEQVRBX1NFQ1RJT05fTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goICc8IVtDREFUQVsnLG5vZGUuZGF0YSwnXV0+Jyk7XG5cdGNhc2UgQ09NTUVOVF9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggXCI8IS0tXCIsbm9kZS5kYXRhLFwiLS0+XCIpO1xuXHRjYXNlIERPQ1VNRU5UX1RZUEVfTk9ERTpcblx0XHR2YXIgcHViaWQgPSBub2RlLnB1YmxpY0lkO1xuXHRcdHZhciBzeXNpZCA9IG5vZGUuc3lzdGVtSWQ7XG5cdFx0YnVmLnB1c2goJzwhRE9DVFlQRSAnLG5vZGUubmFtZSk7XG5cdFx0aWYocHViaWQpe1xuXHRcdFx0YnVmLnB1c2goJyBQVUJMSUMgJywgcHViaWQpO1xuXHRcdFx0aWYgKHN5c2lkICYmIHN5c2lkIT0nLicpIHtcblx0XHRcdFx0YnVmLnB1c2goJyAnLCBzeXNpZCk7XG5cdFx0XHR9XG5cdFx0XHRidWYucHVzaCgnPicpO1xuXHRcdH1lbHNlIGlmKHN5c2lkICYmIHN5c2lkIT0nLicpe1xuXHRcdFx0YnVmLnB1c2goJyBTWVNURU0gJywgc3lzaWQsICc+Jyk7XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgc3ViID0gbm9kZS5pbnRlcm5hbFN1YnNldDtcblx0XHRcdGlmKHN1Yil7XG5cdFx0XHRcdGJ1Zi5wdXNoKFwiIFtcIixzdWIsXCJdXCIpO1xuXHRcdFx0fVxuXHRcdFx0YnVmLnB1c2goXCI+XCIpO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdGNhc2UgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggXCI8P1wiLG5vZGUudGFyZ2V0LFwiIFwiLG5vZGUuZGF0YSxcIj8+XCIpO1xuXHRjYXNlIEVOVElUWV9SRUZFUkVOQ0VfTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goICcmJyxub2RlLm5vZGVOYW1lLCc7Jyk7XG5cdC8vY2FzZSBFTlRJVFlfTk9ERTpcblx0Ly9jYXNlIE5PVEFUSU9OX05PREU6XG5cdGRlZmF1bHQ6XG5cdFx0YnVmLnB1c2goJz8/Jyxub2RlLm5vZGVOYW1lKTtcblx0fVxufVxuZnVuY3Rpb24gaW1wb3J0Tm9kZShkb2Msbm9kZSxkZWVwKXtcblx0dmFyIG5vZGUyO1xuXHRzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcblx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0bm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG5cdFx0bm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcblx0XHQvL3ZhciBhdHRycyA9IG5vZGUyLmF0dHJpYnV0ZXM7XG5cdFx0Ly92YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHRcdC8vZm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdC8vbm9kZTIuc2V0QXR0cmlidXRlTm9kZU5TKGltcG9ydE5vZGUoZG9jLGF0dHJzLml0ZW0oaSksZGVlcCkpO1xuXHRcdC8vfVxuXHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0YnJlYWs7XG5cdGNhc2UgQVRUUklCVVRFX05PREU6XG5cdFx0ZGVlcCA9IHRydWU7XG5cdFx0YnJlYWs7XG5cdC8vY2FzZSBFTlRJVFlfUkVGRVJFTkNFX05PREU6XG5cdC8vY2FzZSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6XG5cdC8vLy9jYXNlIFRFWFRfTk9ERTpcblx0Ly9jYXNlIENEQVRBX1NFQ1RJT05fTk9ERTpcblx0Ly9jYXNlIENPTU1FTlRfTk9ERTpcblx0Ly9cdGRlZXAgPSBmYWxzZTtcblx0Ly9cdGJyZWFrO1xuXHQvL2Nhc2UgRE9DVU1FTlRfTk9ERTpcblx0Ly9jYXNlIERPQ1VNRU5UX1RZUEVfTk9ERTpcblx0Ly9jYW5ub3QgYmUgaW1wb3J0ZWQuXG5cdC8vY2FzZSBFTlRJVFlfTk9ERTpcblx0Ly9jYXNlIE5PVEFUSU9OX05PREXvvJpcblx0Ly9jYW4gbm90IGhpdCBpbiBsZXZlbDNcblx0Ly9kZWZhdWx0OnRocm93IGU7XG5cdH1cblx0aWYoIW5vZGUyKXtcblx0XHRub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTsvL2ZhbHNlXG5cdH1cblx0bm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcblx0bm9kZTIucGFyZW50Tm9kZSA9IG51bGw7XG5cdGlmKGRlZXApe1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRub2RlMi5hcHBlbmRDaGlsZChpbXBvcnROb2RlKGRvYyxjaGlsZCxkZWVwKSk7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbm9kZTI7XG59XG4vL1xuLy92YXIgX3JlbGF0aW9uTWFwID0ge2ZpcnN0Q2hpbGQ6MSxsYXN0Q2hpbGQ6MSxwcmV2aW91c1NpYmxpbmc6MSxuZXh0U2libGluZzoxLFxuLy9cdFx0XHRcdFx0YXR0cmlidXRlczoxLGNoaWxkTm9kZXM6MSxwYXJlbnROb2RlOjEsZG9jdW1lbnRFbGVtZW50OjEsZG9jdHlwZSx9O1xuZnVuY3Rpb24gY2xvbmVOb2RlKGRvYyxub2RlLGRlZXApe1xuXHR2YXIgbm9kZTIgPSBuZXcgbm9kZS5jb25zdHJ1Y3RvcigpO1xuXHRmb3IodmFyIG4gaW4gbm9kZSl7XG5cdFx0dmFyIHYgPSBub2RlW25dO1xuXHRcdGlmKHR5cGVvZiB2ICE9ICdvYmplY3QnICl7XG5cdFx0XHRpZih2ICE9IG5vZGUyW25dKXtcblx0XHRcdFx0bm9kZTJbbl0gPSB2O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZihub2RlLmNoaWxkTm9kZXMpe1xuXHRcdG5vZGUyLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0fVxuXHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRzd2l0Y2ggKG5vZGUyLm5vZGVUeXBlKSB7XG5cdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdHZhciBhdHRyc1x0PSBub2RlLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGF0dHJzMlx0PSBub2RlMi5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdHZhciBsZW4gPSBhdHRycy5sZW5ndGhcblx0XHRhdHRyczIuX293bmVyRWxlbWVudCA9IG5vZGUyO1xuXHRcdGZvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHRub2RlMi5zZXRBdHRyaWJ1dGVOb2RlKGNsb25lTm9kZShkb2MsYXR0cnMuaXRlbShpKSx0cnVlKSk7XG5cdFx0fVxuXHRcdGJyZWFrOztcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRkZWVwID0gdHJ1ZTtcblx0fVxuXHRpZihkZWVwKXtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0bm9kZTIuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGRvYyxjaGlsZCxkZWVwKSk7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbm9kZTI7XG59XG5cbmZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LGtleSx2YWx1ZSl7XG5cdG9iamVjdFtrZXldID0gdmFsdWVcbn1cbi8vZG8gZHluYW1pY1xudHJ5e1xuXHRpZihPYmplY3QuZGVmaW5lUHJvcGVydHkpe1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXZlTm9kZUxpc3QucHJvdG90eXBlLCdsZW5ndGgnLHtcblx0XHRcdGdldDpmdW5jdGlvbigpe1xuXHRcdFx0XHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkbGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCd0ZXh0Q29udGVudCcse1xuXHRcdFx0Z2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiBnZXRUZXh0Q29udGVudCh0aGlzKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldDpmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0c3dpdGNoKHRoaXMubm9kZVR5cGUpe1xuXHRcdFx0XHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRcdFx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdFx0XHRcdHdoaWxlKHRoaXMuZmlyc3RDaGlsZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGRhdGEgfHwgU3RyaW5nKGRhdGEpKXtcblx0XHRcdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xuXHRcdFx0XHRcdHRoaXMubm9kZVZhbHVlID0gZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0XG5cdFx0ZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQobm9kZSl7XG5cdFx0XHRzd2l0Y2gobm9kZS5ub2RlVHlwZSl7XG5cdFx0XHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRcdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRcdFx0dmFyIGJ1ZiA9IFtdO1xuXHRcdFx0XHRub2RlID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdFx0XHR3aGlsZShub2RlKXtcblx0XHRcdFx0XHRpZihub2RlLm5vZGVUeXBlIT09NyAmJiBub2RlLm5vZGVUeXBlICE9PTgpe1xuXHRcdFx0XHRcdFx0YnVmLnB1c2goZ2V0VGV4dENvbnRlbnQobm9kZSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRub2RlID0gbm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYnVmLmpvaW4oJycpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG5vZGUubm9kZVZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF9fc2V0X18gPSBmdW5jdGlvbihvYmplY3Qsa2V5LHZhbHVlKXtcblx0XHRcdC8vY29uc29sZS5sb2codmFsdWUpXG5cdFx0XHRvYmplY3RbJyQkJytrZXldID0gdmFsdWVcblx0XHR9XG5cdH1cbn1jYXRjaChlKXsvL2llOFxufVxuXG4vL2lmKHR5cGVvZiByZXF1aXJlID09ICdmdW5jdGlvbicpe1xuXHRleHBvcnRzLkRvY3VtZW50VHlwZSA9IERvY3VtZW50VHlwZTtcblx0ZXhwb3J0cy5ET01FeGNlcHRpb24gPSBET01FeGNlcHRpb247XG5cdGV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSBET01JbXBsZW1lbnRhdGlvbjtcblx0ZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcblx0ZXhwb3J0cy5Ob2RlID0gTm9kZTtcblx0ZXhwb3J0cy5Ob2RlTGlzdCA9IE5vZGVMaXN0O1xuXHRleHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBYTUxTZXJpYWxpemVyO1xuLy99XG4iLCJ2YXIgZnJlZXplID0gcmVxdWlyZSgnLi9jb252ZW50aW9ucycpLmZyZWV6ZTtcblxuLyoqXG4gKiBUaGUgZW50aXRpZXMgdGhhdCBhcmUgcHJlZGVmaW5lZCBpbiBldmVyeSBYTUwgZG9jdW1lbnQuXG4gKlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvMjAwNi9SRUMteG1sMTEtMjAwNjA4MTYvI3NlYy1wcmVkZWZpbmVkLWVudCBXM0MgWE1MIDEuMVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMteG1sLTIwMDgxMTI2LyNzZWMtcHJlZGVmaW5lZC1lbnQgVzNDIFhNTCAxLjBcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI1ByZWRlZmluZWRfZW50aXRpZXNfaW5fWE1MIFdpa2lwZWRpYVxuICovXG5leHBvcnRzLlhNTF9FTlRJVElFUyA9IGZyZWV6ZSh7YW1wOicmJywgYXBvczpcIidcIiwgZ3Q6Jz4nLCBsdDonPCcsIHF1b3Q6J1wiJ30pXG5cbi8qKlxuICogQSBtYXAgb2YgY3VycmVudGx5IDI0MSBlbnRpdGllcyB0aGF0IGFyZSBkZXRlY3RlZCBpbiBhbiBIVE1MIGRvY3VtZW50LlxuICogVGhleSBjb250YWluIGFsbCBlbnRyaWVzIGZyb20gYFhNTF9FTlRJVElFU2AuXG4gKlxuICogQHNlZSBYTUxfRU5USVRJRVNcbiAqIEBzZWUgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZ1xuICogQHNlZSBET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUuY3JlYXRlSFRNTERvY3VtZW50XG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzIFdIQVRXRyBIVE1MKDUpIFNwZWNcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1lbnRpdHktbmFtZXMvIFczQyBYTUwgRW50aXR5IE5hbWVzXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNC9zZ21sL2VudGl0aWVzLmh0bWwgVzNDIEhUTUw0L1NHTUxcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI0NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlc19pbl9IVE1MIFdpa2lwZWRpYSAoSFRNTClcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9YTUxfYW5kX0hUTUxfY2hhcmFjdGVyX2VudGl0eV9yZWZlcmVuY2VzI0VudGl0aWVzX3JlcHJlc2VudGluZ19zcGVjaWFsX2NoYXJhY3RlcnNfaW5fWEhUTUwgV2lrcGVkaWEgKFhIVE1MKVxuICovXG5leHBvcnRzLkhUTUxfRU5USVRJRVMgPSBmcmVlemUoe1xuICAgICAgIGx0OiAnPCcsXG4gICAgICAgZ3Q6ICc+JyxcbiAgICAgICBhbXA6ICcmJyxcbiAgICAgICBxdW90OiAnXCInLFxuICAgICAgIGFwb3M6IFwiJ1wiLFxuICAgICAgIEFncmF2ZTogXCLDgFwiLFxuICAgICAgIEFhY3V0ZTogXCLDgVwiLFxuICAgICAgIEFjaXJjOiBcIsOCXCIsXG4gICAgICAgQXRpbGRlOiBcIsODXCIsXG4gICAgICAgQXVtbDogXCLDhFwiLFxuICAgICAgIEFyaW5nOiBcIsOFXCIsXG4gICAgICAgQUVsaWc6IFwiw4ZcIixcbiAgICAgICBDY2VkaWw6IFwiw4dcIixcbiAgICAgICBFZ3JhdmU6IFwiw4hcIixcbiAgICAgICBFYWN1dGU6IFwiw4lcIixcbiAgICAgICBFY2lyYzogXCLDilwiLFxuICAgICAgIEV1bWw6IFwiw4tcIixcbiAgICAgICBJZ3JhdmU6IFwiw4xcIixcbiAgICAgICBJYWN1dGU6IFwiw41cIixcbiAgICAgICBJY2lyYzogXCLDjlwiLFxuICAgICAgIEl1bWw6IFwiw49cIixcbiAgICAgICBFVEg6IFwiw5BcIixcbiAgICAgICBOdGlsZGU6IFwiw5FcIixcbiAgICAgICBPZ3JhdmU6IFwiw5JcIixcbiAgICAgICBPYWN1dGU6IFwiw5NcIixcbiAgICAgICBPY2lyYzogXCLDlFwiLFxuICAgICAgIE90aWxkZTogXCLDlVwiLFxuICAgICAgIE91bWw6IFwiw5ZcIixcbiAgICAgICBPc2xhc2g6IFwiw5hcIixcbiAgICAgICBVZ3JhdmU6IFwiw5lcIixcbiAgICAgICBVYWN1dGU6IFwiw5pcIixcbiAgICAgICBVY2lyYzogXCLDm1wiLFxuICAgICAgIFV1bWw6IFwiw5xcIixcbiAgICAgICBZYWN1dGU6IFwiw51cIixcbiAgICAgICBUSE9STjogXCLDnlwiLFxuICAgICAgIHN6bGlnOiBcIsOfXCIsXG4gICAgICAgYWdyYXZlOiBcIsOgXCIsXG4gICAgICAgYWFjdXRlOiBcIsOhXCIsXG4gICAgICAgYWNpcmM6IFwiw6JcIixcbiAgICAgICBhdGlsZGU6IFwiw6NcIixcbiAgICAgICBhdW1sOiBcIsOkXCIsXG4gICAgICAgYXJpbmc6IFwiw6VcIixcbiAgICAgICBhZWxpZzogXCLDplwiLFxuICAgICAgIGNjZWRpbDogXCLDp1wiLFxuICAgICAgIGVncmF2ZTogXCLDqFwiLFxuICAgICAgIGVhY3V0ZTogXCLDqVwiLFxuICAgICAgIGVjaXJjOiBcIsOqXCIsXG4gICAgICAgZXVtbDogXCLDq1wiLFxuICAgICAgIGlncmF2ZTogXCLDrFwiLFxuICAgICAgIGlhY3V0ZTogXCLDrVwiLFxuICAgICAgIGljaXJjOiBcIsOuXCIsXG4gICAgICAgaXVtbDogXCLDr1wiLFxuICAgICAgIGV0aDogXCLDsFwiLFxuICAgICAgIG50aWxkZTogXCLDsVwiLFxuICAgICAgIG9ncmF2ZTogXCLDslwiLFxuICAgICAgIG9hY3V0ZTogXCLDs1wiLFxuICAgICAgIG9jaXJjOiBcIsO0XCIsXG4gICAgICAgb3RpbGRlOiBcIsO1XCIsXG4gICAgICAgb3VtbDogXCLDtlwiLFxuICAgICAgIG9zbGFzaDogXCLDuFwiLFxuICAgICAgIHVncmF2ZTogXCLDuVwiLFxuICAgICAgIHVhY3V0ZTogXCLDulwiLFxuICAgICAgIHVjaXJjOiBcIsO7XCIsXG4gICAgICAgdXVtbDogXCLDvFwiLFxuICAgICAgIHlhY3V0ZTogXCLDvVwiLFxuICAgICAgIHRob3JuOiBcIsO+XCIsXG4gICAgICAgeXVtbDogXCLDv1wiLFxuICAgICAgIG5ic3A6IFwiXFx1MDBhMFwiLFxuICAgICAgIGlleGNsOiBcIsKhXCIsXG4gICAgICAgY2VudDogXCLColwiLFxuICAgICAgIHBvdW5kOiBcIsKjXCIsXG4gICAgICAgY3VycmVuOiBcIsKkXCIsXG4gICAgICAgeWVuOiBcIsKlXCIsXG4gICAgICAgYnJ2YmFyOiBcIsKmXCIsXG4gICAgICAgc2VjdDogXCLCp1wiLFxuICAgICAgIHVtbDogXCLCqFwiLFxuICAgICAgIGNvcHk6IFwiwqlcIixcbiAgICAgICBvcmRmOiBcIsKqXCIsXG4gICAgICAgbGFxdW86IFwiwqtcIixcbiAgICAgICBub3Q6IFwiwqxcIixcbiAgICAgICBzaHk6IFwiwq3CrVwiLFxuICAgICAgIHJlZzogXCLCrlwiLFxuICAgICAgIG1hY3I6IFwiwq9cIixcbiAgICAgICBkZWc6IFwiwrBcIixcbiAgICAgICBwbHVzbW46IFwiwrFcIixcbiAgICAgICBzdXAyOiBcIsKyXCIsXG4gICAgICAgc3VwMzogXCLCs1wiLFxuICAgICAgIGFjdXRlOiBcIsK0XCIsXG4gICAgICAgbWljcm86IFwiwrVcIixcbiAgICAgICBwYXJhOiBcIsK2XCIsXG4gICAgICAgbWlkZG90OiBcIsK3XCIsXG4gICAgICAgY2VkaWw6IFwiwrhcIixcbiAgICAgICBzdXAxOiBcIsK5XCIsXG4gICAgICAgb3JkbTogXCLCulwiLFxuICAgICAgIHJhcXVvOiBcIsK7XCIsXG4gICAgICAgZnJhYzE0OiBcIsK8XCIsXG4gICAgICAgZnJhYzEyOiBcIsK9XCIsXG4gICAgICAgZnJhYzM0OiBcIsK+XCIsXG4gICAgICAgaXF1ZXN0OiBcIsK/XCIsXG4gICAgICAgdGltZXM6IFwiw5dcIixcbiAgICAgICBkaXZpZGU6IFwiw7dcIixcbiAgICAgICBmb3JhbGw6IFwi4oiAXCIsXG4gICAgICAgcGFydDogXCLiiIJcIixcbiAgICAgICBleGlzdDogXCLiiINcIixcbiAgICAgICBlbXB0eTogXCLiiIVcIixcbiAgICAgICBuYWJsYTogXCLiiIdcIixcbiAgICAgICBpc2luOiBcIuKIiFwiLFxuICAgICAgIG5vdGluOiBcIuKIiVwiLFxuICAgICAgIG5pOiBcIuKIi1wiLFxuICAgICAgIHByb2Q6IFwi4oiPXCIsXG4gICAgICAgc3VtOiBcIuKIkVwiLFxuICAgICAgIG1pbnVzOiBcIuKIklwiLFxuICAgICAgIGxvd2FzdDogXCLiiJdcIixcbiAgICAgICByYWRpYzogXCLiiJpcIixcbiAgICAgICBwcm9wOiBcIuKInVwiLFxuICAgICAgIGluZmluOiBcIuKInlwiLFxuICAgICAgIGFuZzogXCLiiKBcIixcbiAgICAgICBhbmQ6IFwi4oinXCIsXG4gICAgICAgb3I6IFwi4oioXCIsXG4gICAgICAgY2FwOiBcIuKIqVwiLFxuICAgICAgIGN1cDogXCLiiKpcIixcbiAgICAgICAnaW50JzogXCLiiKtcIixcbiAgICAgICB0aGVyZTQ6IFwi4oi0XCIsXG4gICAgICAgc2ltOiBcIuKIvFwiLFxuICAgICAgIGNvbmc6IFwi4omFXCIsXG4gICAgICAgYXN5bXA6IFwi4omIXCIsXG4gICAgICAgbmU6IFwi4omgXCIsXG4gICAgICAgZXF1aXY6IFwi4omhXCIsXG4gICAgICAgbGU6IFwi4omkXCIsXG4gICAgICAgZ2U6IFwi4omlXCIsXG4gICAgICAgc3ViOiBcIuKKglwiLFxuICAgICAgIHN1cDogXCLiioNcIixcbiAgICAgICBuc3ViOiBcIuKKhFwiLFxuICAgICAgIHN1YmU6IFwi4oqGXCIsXG4gICAgICAgc3VwZTogXCLiiodcIixcbiAgICAgICBvcGx1czogXCLiipVcIixcbiAgICAgICBvdGltZXM6IFwi4oqXXCIsXG4gICAgICAgcGVycDogXCLiiqVcIixcbiAgICAgICBzZG90OiBcIuKLhVwiLFxuICAgICAgIEFscGhhOiBcIs6RXCIsXG4gICAgICAgQmV0YTogXCLOklwiLFxuICAgICAgIEdhbW1hOiBcIs6TXCIsXG4gICAgICAgRGVsdGE6IFwizpRcIixcbiAgICAgICBFcHNpbG9uOiBcIs6VXCIsXG4gICAgICAgWmV0YTogXCLOllwiLFxuICAgICAgIEV0YTogXCLOl1wiLFxuICAgICAgIFRoZXRhOiBcIs6YXCIsXG4gICAgICAgSW90YTogXCLOmVwiLFxuICAgICAgIEthcHBhOiBcIs6aXCIsXG4gICAgICAgTGFtYmRhOiBcIs6bXCIsXG4gICAgICAgTXU6IFwizpxcIixcbiAgICAgICBOdTogXCLOnVwiLFxuICAgICAgIFhpOiBcIs6eXCIsXG4gICAgICAgT21pY3JvbjogXCLOn1wiLFxuICAgICAgIFBpOiBcIs6gXCIsXG4gICAgICAgUmhvOiBcIs6hXCIsXG4gICAgICAgU2lnbWE6IFwizqNcIixcbiAgICAgICBUYXU6IFwizqRcIixcbiAgICAgICBVcHNpbG9uOiBcIs6lXCIsXG4gICAgICAgUGhpOiBcIs6mXCIsXG4gICAgICAgQ2hpOiBcIs6nXCIsXG4gICAgICAgUHNpOiBcIs6oXCIsXG4gICAgICAgT21lZ2E6IFwizqlcIixcbiAgICAgICBhbHBoYTogXCLOsVwiLFxuICAgICAgIGJldGE6IFwizrJcIixcbiAgICAgICBnYW1tYTogXCLOs1wiLFxuICAgICAgIGRlbHRhOiBcIs60XCIsXG4gICAgICAgZXBzaWxvbjogXCLOtVwiLFxuICAgICAgIHpldGE6IFwizrZcIixcbiAgICAgICBldGE6IFwizrdcIixcbiAgICAgICB0aGV0YTogXCLOuFwiLFxuICAgICAgIGlvdGE6IFwizrlcIixcbiAgICAgICBrYXBwYTogXCLOulwiLFxuICAgICAgIGxhbWJkYTogXCLOu1wiLFxuICAgICAgIG11OiBcIs68XCIsXG4gICAgICAgbnU6IFwizr1cIixcbiAgICAgICB4aTogXCLOvlwiLFxuICAgICAgIG9taWNyb246IFwizr9cIixcbiAgICAgICBwaTogXCLPgFwiLFxuICAgICAgIHJobzogXCLPgVwiLFxuICAgICAgIHNpZ21hZjogXCLPglwiLFxuICAgICAgIHNpZ21hOiBcIs+DXCIsXG4gICAgICAgdGF1OiBcIs+EXCIsXG4gICAgICAgdXBzaWxvbjogXCLPhVwiLFxuICAgICAgIHBoaTogXCLPhlwiLFxuICAgICAgIGNoaTogXCLPh1wiLFxuICAgICAgIHBzaTogXCLPiFwiLFxuICAgICAgIG9tZWdhOiBcIs+JXCIsXG4gICAgICAgdGhldGFzeW06IFwiz5FcIixcbiAgICAgICB1cHNpaDogXCLPklwiLFxuICAgICAgIHBpdjogXCLPllwiLFxuICAgICAgIE9FbGlnOiBcIsWSXCIsXG4gICAgICAgb2VsaWc6IFwixZNcIixcbiAgICAgICBTY2Fyb246IFwixaBcIixcbiAgICAgICBzY2Fyb246IFwixaFcIixcbiAgICAgICBZdW1sOiBcIsW4XCIsXG4gICAgICAgZm5vZjogXCLGklwiLFxuICAgICAgIGNpcmM6IFwiy4ZcIixcbiAgICAgICB0aWxkZTogXCLLnFwiLFxuICAgICAgIGVuc3A6IFwi4oCCXCIsXG4gICAgICAgZW1zcDogXCLigINcIixcbiAgICAgICB0aGluc3A6IFwi4oCJXCIsXG4gICAgICAgenduajogXCLigIxcIixcbiAgICAgICB6d2o6IFwi4oCNXCIsXG4gICAgICAgbHJtOiBcIuKAjlwiLFxuICAgICAgIHJsbTogXCLigI9cIixcbiAgICAgICBuZGFzaDogXCLigJNcIixcbiAgICAgICBtZGFzaDogXCLigJRcIixcbiAgICAgICBsc3F1bzogXCLigJhcIixcbiAgICAgICByc3F1bzogXCLigJlcIixcbiAgICAgICBzYnF1bzogXCLigJpcIixcbiAgICAgICBsZHF1bzogXCLigJxcIixcbiAgICAgICByZHF1bzogXCLigJ1cIixcbiAgICAgICBiZHF1bzogXCLigJ5cIixcbiAgICAgICBkYWdnZXI6IFwi4oCgXCIsXG4gICAgICAgRGFnZ2VyOiBcIuKAoVwiLFxuICAgICAgIGJ1bGw6IFwi4oCiXCIsXG4gICAgICAgaGVsbGlwOiBcIuKAplwiLFxuICAgICAgIHBlcm1pbDogXCLigLBcIixcbiAgICAgICBwcmltZTogXCLigLJcIixcbiAgICAgICBQcmltZTogXCLigLNcIixcbiAgICAgICBsc2FxdW86IFwi4oC5XCIsXG4gICAgICAgcnNhcXVvOiBcIuKAulwiLFxuICAgICAgIG9saW5lOiBcIuKAvlwiLFxuICAgICAgIGV1cm86IFwi4oKsXCIsXG4gICAgICAgdHJhZGU6IFwi4oSiXCIsXG4gICAgICAgbGFycjogXCLihpBcIixcbiAgICAgICB1YXJyOiBcIuKGkVwiLFxuICAgICAgIHJhcnI6IFwi4oaSXCIsXG4gICAgICAgZGFycjogXCLihpNcIixcbiAgICAgICBoYXJyOiBcIuKGlFwiLFxuICAgICAgIGNyYXJyOiBcIuKGtVwiLFxuICAgICAgIGxjZWlsOiBcIuKMiFwiLFxuICAgICAgIHJjZWlsOiBcIuKMiVwiLFxuICAgICAgIGxmbG9vcjogXCLijIpcIixcbiAgICAgICByZmxvb3I6IFwi4oyLXCIsXG4gICAgICAgbG96OiBcIuKXilwiLFxuICAgICAgIHNwYWRlczogXCLimaBcIixcbiAgICAgICBjbHViczogXCLimaNcIixcbiAgICAgICBoZWFydHM6IFwi4pmlXCIsXG4gICAgICAgZGlhbXM6IFwi4pmmXCJcbn0pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBgSFRNTF9FTlRJVElFU2AgaW5zdGVhZFxuICogQHNlZSBIVE1MX0VOVElUSUVTXG4gKi9cbmV4cG9ydHMuZW50aXR5TWFwID0gZXhwb3J0cy5IVE1MX0VOVElUSUVTXG4iLCJ2YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKVxuZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IGRvbS5ET01JbXBsZW1lbnRhdGlvblxuZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gZG9tLlhNTFNlcmlhbGl6ZXJcbmV4cG9ydHMuRE9NUGFyc2VyID0gcmVxdWlyZSgnLi9kb20tcGFyc2VyJykuRE9NUGFyc2VyXG4iLCJ2YXIgTkFNRVNQQUNFID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIikuTkFNRVNQQUNFO1xuXG4vL1s0XSAgIFx0TmFtZVN0YXJ0Q2hhclx0ICAgOjo9ICAgXHRcIjpcIiB8IFtBLVpdIHwgXCJfXCIgfCBbYS16XSB8IFsjeEMwLSN4RDZdIHwgWyN4RDgtI3hGNl0gfCBbI3hGOC0jeDJGRl0gfCBbI3gzNzAtI3gzN0RdIHwgWyN4MzdGLSN4MUZGRl0gfCBbI3gyMDBDLSN4MjAwRF0gfCBbI3gyMDcwLSN4MjE4Rl0gfCBbI3gyQzAwLSN4MkZFRl0gfCBbI3gzMDAxLSN4RDdGRl0gfCBbI3hGOTAwLSN4RkRDRl0gfCBbI3hGREYwLSN4RkZGRF0gfCBbI3gxMDAwMC0jeEVGRkZGXVxuLy9bNGFdICAgXHROYW1lQ2hhclx0ICAgOjo9ICAgXHROYW1lU3RhcnRDaGFyIHwgXCItXCIgfCBcIi5cIiB8IFswLTldIHwgI3hCNyB8IFsjeDAzMDAtI3gwMzZGXSB8IFsjeDIwM0YtI3gyMDQwXVxuLy9bNV0gICBcdE5hbWVcdCAgIDo6PSAgIFx0TmFtZVN0YXJ0Q2hhciAoTmFtZUNoYXIpKlxudmFyIG5hbWVTdGFydENoYXIgPSAvW0EtWl9hLXpcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXS8vL1xcdTEwMDAwLVxcdUVGRkZGXG52YXIgbmFtZUNoYXIgPSBuZXcgUmVnRXhwKFwiW1xcXFwtXFxcXC4wLTlcIituYW1lU3RhcnRDaGFyLnNvdXJjZS5zbGljZSgxLC0xKStcIlxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwXVwiKTtcbnZhciB0YWdOYW1lUGF0dGVybiA9IG5ldyBSZWdFeHAoJ14nK25hbWVTdGFydENoYXIuc291cmNlK25hbWVDaGFyLnNvdXJjZSsnKig/OlxcOicrbmFtZVN0YXJ0Q2hhci5zb3VyY2UrbmFtZUNoYXIuc291cmNlKycqKT8kJyk7XG4vL3ZhciB0YWdOYW1lUGF0dGVybiA9IC9eW2EtekEtWl9dW1xcd1xcLVxcLl0qKD86XFw6W2EtekEtWl9dW1xcd1xcLVxcLl0qKT8kL1xuLy92YXIgaGFuZGxlcnMgPSAncmVzb2x2ZUVudGl0eSxnZXRFeHRlcm5hbFN1YnNldCxjaGFyYWN0ZXJzLGVuZERvY3VtZW50LGVuZEVsZW1lbnQsZW5kUHJlZml4TWFwcGluZyxpZ25vcmFibGVXaGl0ZXNwYWNlLHByb2Nlc3NpbmdJbnN0cnVjdGlvbixzZXREb2N1bWVudExvY2F0b3Isc2tpcHBlZEVudGl0eSxzdGFydERvY3VtZW50LHN0YXJ0RWxlbWVudCxzdGFydFByZWZpeE1hcHBpbmcsbm90YXRpb25EZWNsLHVucGFyc2VkRW50aXR5RGVjbCxlcnJvcixmYXRhbEVycm9yLHdhcm5pbmcsYXR0cmlidXRlRGVjbCxlbGVtZW50RGVjbCxleHRlcm5hbEVudGl0eURlY2wsaW50ZXJuYWxFbnRpdHlEZWNsLGNvbW1lbnQsZW5kQ0RBVEEsZW5kRFRELGVuZEVudGl0eSxzdGFydENEQVRBLHN0YXJ0RFRELHN0YXJ0RW50aXR5Jy5zcGxpdCgnLCcpXG5cbi8vU19UQUcsXHRTX0FUVFIsXHRTX0VRLFx0U19BVFRSX05PUVVPVF9WQUxVRVxuLy9TX0FUVFJfU1BBQ0UsXHRTX0FUVFJfRU5ELFx0U19UQUdfU1BBQ0UsIFNfVEFHX0NMT1NFXG52YXIgU19UQUcgPSAwOy8vdGFnIG5hbWUgb2ZmZXJyaW5nXG52YXIgU19BVFRSID0gMTsvL2F0dHIgbmFtZSBvZmZlcnJpbmcgXG52YXIgU19BVFRSX1NQQUNFPTI7Ly9hdHRyIG5hbWUgZW5kIGFuZCBzcGFjZSBvZmZlclxudmFyIFNfRVEgPSAzOy8vPXNwYWNlP1xudmFyIFNfQVRUUl9OT1FVT1RfVkFMVUUgPSA0Oy8vYXR0ciB2YWx1ZShubyBxdW90IHZhbHVlIG9ubHkpXG52YXIgU19BVFRSX0VORCA9IDU7Ly9hdHRyIHZhbHVlIGVuZCBhbmQgbm8gc3BhY2UocXVvdCBlbmQpXG52YXIgU19UQUdfU1BBQ0UgPSA2Oy8vKGF0dHIgdmFsdWUgZW5kIHx8IHRhZyBlbmQgKSAmJiAoc3BhY2Ugb2ZmZXIpXG52YXIgU19UQUdfQ0xPU0UgPSA3Oy8vY2xvc2VkIGVsPGVsIC8+XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlcnJvciB0aGF0IHdpbGwgbm90IGJlIGNhdWdodCBieSBYTUxSZWFkZXIgYWthIHRoZSBTQVggcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge2FueT99IGxvY2F0b3IgT3B0aW9uYWwsIGNhbiBwcm92aWRlIGRldGFpbHMgYWJvdXQgdGhlIGxvY2F0aW9uIGluIHRoZSBzb3VyY2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJzZUVycm9yKG1lc3NhZ2UsIGxvY2F0b3IpIHtcblx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuXHR0aGlzLmxvY2F0b3IgPSBsb2NhdG9yXG5cdGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBQYXJzZUVycm9yKTtcbn1cblBhcnNlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5QYXJzZUVycm9yLnByb3RvdHlwZS5uYW1lID0gUGFyc2VFcnJvci5uYW1lXG5cbmZ1bmN0aW9uIFhNTFJlYWRlcigpe1xuXHRcbn1cblxuWE1MUmVhZGVyLnByb3RvdHlwZSA9IHtcblx0cGFyc2U6ZnVuY3Rpb24oc291cmNlLGRlZmF1bHROU01hcCxlbnRpdHlNYXApe1xuXHRcdHZhciBkb21CdWlsZGVyID0gdGhpcy5kb21CdWlsZGVyO1xuXHRcdGRvbUJ1aWxkZXIuc3RhcnREb2N1bWVudCgpO1xuXHRcdF9jb3B5KGRlZmF1bHROU01hcCAsZGVmYXVsdE5TTWFwID0ge30pXG5cdFx0cGFyc2Uoc291cmNlLGRlZmF1bHROU01hcCxlbnRpdHlNYXAsXG5cdFx0XHRcdGRvbUJ1aWxkZXIsdGhpcy5lcnJvckhhbmRsZXIpO1xuXHRcdGRvbUJ1aWxkZXIuZW5kRG9jdW1lbnQoKTtcblx0fVxufVxuZnVuY3Rpb24gcGFyc2Uoc291cmNlLGRlZmF1bHROU01hcENvcHksZW50aXR5TWFwLGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKXtcblx0ZnVuY3Rpb24gZml4ZWRGcm9tQ2hhckNvZGUoY29kZSkge1xuXHRcdC8vIFN0cmluZy5wcm90b3R5cGUuZnJvbUNoYXJDb2RlIGRvZXMgbm90IHN1cHBvcnRzXG5cdFx0Ly8gPiAyIGJ5dGVzIHVuaWNvZGUgY2hhcnMgZGlyZWN0bHlcblx0XHRpZiAoY29kZSA+IDB4ZmZmZikge1xuXHRcdFx0Y29kZSAtPSAweDEwMDAwO1xuXHRcdFx0dmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoY29kZSA+PiAxMClcblx0XHRcdFx0LCBzdXJyb2dhdGUyID0gMHhkYzAwICsgKGNvZGUgJiAweDNmZik7XG5cblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZW50aXR5UmVwbGFjZXIoYSl7XG5cdFx0dmFyIGsgPSBhLnNsaWNlKDEsLTEpO1xuXHRcdGlmKGsgaW4gZW50aXR5TWFwKXtcblx0XHRcdHJldHVybiBlbnRpdHlNYXBba107IFxuXHRcdH1lbHNlIGlmKGsuY2hhckF0KDApID09PSAnIycpe1xuXHRcdFx0cmV0dXJuIGZpeGVkRnJvbUNoYXJDb2RlKHBhcnNlSW50KGsuc3Vic3RyKDEpLnJlcGxhY2UoJ3gnLCcweCcpKSlcblx0XHR9ZWxzZXtcblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcignZW50aXR5IG5vdCBmb3VuZDonK2EpO1xuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFwcGVuZFRleHQoZW5kKXsvL2hhcyBzb21lIGJ1Z3Ncblx0XHRpZihlbmQ+c3RhcnQpe1xuXHRcdFx0dmFyIHh0ID0gc291cmNlLnN1YnN0cmluZyhzdGFydCxlbmQpLnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0bG9jYXRvciYmcG9zaXRpb24oc3RhcnQpO1xuXHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHh0LDAsZW5kLXN0YXJ0KTtcblx0XHRcdHN0YXJ0ID0gZW5kXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHBvc2l0aW9uKHAsbSl7XG5cdFx0d2hpbGUocD49bGluZUVuZCAmJiAobSA9IGxpbmVQYXR0ZXJuLmV4ZWMoc291cmNlKSkpe1xuXHRcdFx0bGluZVN0YXJ0ID0gbS5pbmRleDtcblx0XHRcdGxpbmVFbmQgPSBsaW5lU3RhcnQgKyBtWzBdLmxlbmd0aDtcblx0XHRcdGxvY2F0b3IubGluZU51bWJlcisrO1xuXHRcdFx0Ly9jb25zb2xlLmxvZygnbGluZSsrOicsbG9jYXRvcixzdGFydFBvcyxlbmRQb3MpXG5cdFx0fVxuXHRcdGxvY2F0b3IuY29sdW1uTnVtYmVyID0gcC1saW5lU3RhcnQrMTtcblx0fVxuXHR2YXIgbGluZVN0YXJ0ID0gMDtcblx0dmFyIGxpbmVFbmQgPSAwO1xuXHR2YXIgbGluZVBhdHRlcm4gPSAvLiooPzpcXHJcXG4/fFxcbil8LiokL2dcblx0dmFyIGxvY2F0b3IgPSBkb21CdWlsZGVyLmxvY2F0b3I7XG5cdFxuXHR2YXIgcGFyc2VTdGFjayA9IFt7Y3VycmVudE5TTWFwOmRlZmF1bHROU01hcENvcHl9XVxuXHR2YXIgY2xvc2VNYXAgPSB7fTtcblx0dmFyIHN0YXJ0ID0gMDtcblx0d2hpbGUodHJ1ZSl7XG5cdFx0dHJ5e1xuXHRcdFx0dmFyIHRhZ1N0YXJ0ID0gc291cmNlLmluZGV4T2YoJzwnLHN0YXJ0KTtcblx0XHRcdGlmKHRhZ1N0YXJ0PDApe1xuXHRcdFx0XHRpZighc291cmNlLnN1YnN0cihzdGFydCkubWF0Y2goL15cXHMqJC8pKXtcblx0XHRcdFx0XHR2YXIgZG9jID0gZG9tQnVpbGRlci5kb2M7XG5cdCAgICBcdFx0XHR2YXIgdGV4dCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShzb3VyY2Uuc3Vic3RyKHN0YXJ0KSk7XG5cdCAgICBcdFx0XHRkb2MuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdCAgICBcdFx0XHRkb21CdWlsZGVyLmN1cnJlbnRFbGVtZW50ID0gdGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZih0YWdTdGFydD5zdGFydCl7XG5cdFx0XHRcdGFwcGVuZFRleHQodGFnU3RhcnQpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoKHNvdXJjZS5jaGFyQXQodGFnU3RhcnQrMSkpe1xuXHRcdFx0Y2FzZSAnLyc6XG5cdFx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignPicsdGFnU3RhcnQrMyk7XG5cdFx0XHRcdHZhciB0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCArIDIsIGVuZCkucmVwbGFjZSgvWyBcXHRcXG5cXHJdKyQvZywgJycpO1xuXHRcdFx0XHR2YXIgY29uZmlnID0gcGFyc2VTdGFjay5wb3AoKTtcblx0XHRcdFx0aWYoZW5kPDApe1xuXHRcdFx0XHRcdFxuXHQgICAgICAgIFx0XHR0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCsyKS5yZXBsYWNlKC9bXFxzPF0uKi8sJycpO1xuXHQgICAgICAgIFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBpcyBub3QgY29tcGxldGU6Jytjb25maWcudGFnTmFtZSk7XG5cdCAgICAgICAgXHRcdGVuZCA9IHRhZ1N0YXJ0KzErdGFnTmFtZS5sZW5ndGg7XG5cdCAgICAgICAgXHR9ZWxzZSBpZih0YWdOYW1lLm1hdGNoKC9cXHM8Lykpe1xuXHQgICAgICAgIFx0XHR0YWdOYW1lID0gdGFnTmFtZS5yZXBsYWNlKC9bXFxzPF0uKi8sJycpO1xuXHQgICAgICAgIFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBtYXliZSBub3QgY29tcGxldGUnKTtcblx0ICAgICAgICBcdFx0ZW5kID0gdGFnU3RhcnQrMSt0YWdOYW1lLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgbG9jYWxOU01hcCA9IGNvbmZpZy5sb2NhbE5TTWFwO1xuXHRcdFx0XHR2YXIgZW5kTWF0Y2ggPSBjb25maWcudGFnTmFtZSA9PSB0YWdOYW1lO1xuXHRcdFx0XHR2YXIgZW5kSWdub3JlQ2FzZU1hY2ggPSBlbmRNYXRjaCB8fCBjb25maWcudGFnTmFtZSYmY29uZmlnLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lLnRvTG93ZXJDYXNlKClcblx0XHQgICAgICAgIGlmKGVuZElnbm9yZUNhc2VNYWNoKXtcblx0XHQgICAgICAgIFx0ZG9tQnVpbGRlci5lbmRFbGVtZW50KGNvbmZpZy51cmksY29uZmlnLmxvY2FsTmFtZSx0YWdOYW1lKTtcblx0XHRcdFx0XHRpZihsb2NhbE5TTWFwKXtcblx0XHRcdFx0XHRcdGZvcih2YXIgcHJlZml4IGluIGxvY2FsTlNNYXApe1xuXHRcdFx0XHRcdFx0XHRkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KSA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKCFlbmRNYXRjaCl7XG5cdFx0ICAgICAgICAgICAgXHRlcnJvckhhbmRsZXIuZmF0YWxFcnJvcihcImVuZCB0YWcgbmFtZTogXCIrdGFnTmFtZSsnIGlzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBzdGFydCB0YWdOYW1lOicrY29uZmlnLnRhZ05hbWUgKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHRcdFx0fVxuXHRcdCAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICBcdHBhcnNlU3RhY2sucHVzaChjb25maWcpXG5cdFx0ICAgICAgICB9XG5cdFx0XHRcdFxuXHRcdFx0XHRlbmQrKztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdC8vIGVuZCBlbG1lbnRcblx0XHRcdGNhc2UgJz8nOi8vIDw/Li4uPz5cblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHRlbmQgPSBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSx0YWdTdGFydCxkb21CdWlsZGVyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICchJzovLyA8IWRvY3R5cGUsPCFbQ0RBVEEsPCEtLVxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdGVuZCA9IHBhcnNlRENDKHNvdXJjZSx0YWdTdGFydCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHR2YXIgZWwgPSBuZXcgRWxlbWVudEF0dHJpYnV0ZXMoKTtcblx0XHRcdFx0dmFyIGN1cnJlbnROU01hcCA9IHBhcnNlU3RhY2tbcGFyc2VTdGFjay5sZW5ndGgtMV0uY3VycmVudE5TTWFwO1xuXHRcdFx0XHQvL2VsU3RhcnRFbmRcblx0XHRcdFx0dmFyIGVuZCA9IHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2UsdGFnU3RhcnQsZWwsY3VycmVudE5TTWFwLGVudGl0eVJlcGxhY2VyLGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdHZhciBsZW4gPSBlbC5sZW5ndGg7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIWVsLmNsb3NlZCAmJiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSxlbmQsZWwudGFnTmFtZSxjbG9zZU1hcCkpe1xuXHRcdFx0XHRcdGVsLmNsb3NlZCA9IHRydWU7XG5cdFx0XHRcdFx0aWYoIWVudGl0eU1hcC5uYnNwKXtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCd1bmNsb3NlZCB4bWwgYXR0cmlidXRlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGxvY2F0b3IgJiYgbGVuKXtcblx0XHRcdFx0XHR2YXIgbG9jYXRvcjIgPSBjb3B5TG9jYXRvcihsb2NhdG9yLHt9KTtcblx0XHRcdFx0XHQvL3RyeXsvL2F0dHJpYnV0ZSBwb3NpdGlvbiBmaXhlZFxuXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7aTxsZW47aSsrKXtcblx0XHRcdFx0XHRcdHZhciBhID0gZWxbaV07XG5cdFx0XHRcdFx0XHRwb3NpdGlvbihhLm9mZnNldCk7XG5cdFx0XHRcdFx0XHRhLmxvY2F0b3IgPSBjb3B5TG9jYXRvcihsb2NhdG9yLHt9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjJcblx0XHRcdFx0XHRpZihhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKSl7XG5cdFx0XHRcdFx0XHRwYXJzZVN0YWNrLnB1c2goZWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3I7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKGFwcGVuZEVsZW1lbnQoZWwsZG9tQnVpbGRlcixjdXJyZW50TlNNYXApKXtcblx0XHRcdFx0XHRcdHBhcnNlU3RhY2sucHVzaChlbClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoTkFNRVNQQUNFLmlzSFRNTChlbC51cmkpICYmICFlbC5jbG9zZWQpIHtcblx0XHRcdFx0XHRlbmQgPSBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsZW5kLGVsLnRhZ05hbWUsZW50aXR5UmVwbGFjZXIsZG9tQnVpbGRlcilcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmQrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1jYXRjaChlKXtcblx0XHRcdGlmIChlIGluc3RhbmNlb2YgUGFyc2VFcnJvcikge1xuXHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0fVxuXHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKCdlbGVtZW50IHBhcnNlIGVycm9yOiAnK2UpXG5cdFx0XHRlbmQgPSAtMTtcblx0XHR9XG5cdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdHN0YXJ0ID0gZW5kO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly9UT0RPOiDov5nph4zmnInlj6/og71zYXjlm57pgIDvvIzmnInkvY3nva7plJnor6/po47pmalcblx0XHRcdGFwcGVuZFRleHQoTWF0aC5tYXgodGFnU3RhcnQsc3RhcnQpKzEpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24gY29weUxvY2F0b3IoZix0KXtcblx0dC5saW5lTnVtYmVyID0gZi5saW5lTnVtYmVyO1xuXHR0LmNvbHVtbk51bWJlciA9IGYuY29sdW1uTnVtYmVyO1xuXHRyZXR1cm4gdDtcbn1cblxuLyoqXG4gKiBAc2VlICNhcHBlbmRFbGVtZW50KHNvdXJjZSxlbFN0YXJ0RW5kLGVsLHNlbGZDbG9zZWQsZW50aXR5UmVwbGFjZXIsZG9tQnVpbGRlcixwYXJzZVN0YWNrKTtcbiAqIEByZXR1cm4gZW5kIG9mIHRoZSBlbGVtZW50U3RhcnRQYXJ0KGVuZCBvZiBlbGVtZW50RW5kUGFydCBmb3Igc2VsZkNsb3NlZCBlbClcbiAqL1xuZnVuY3Rpb24gcGFyc2VFbGVtZW50U3RhcnRQYXJ0KHNvdXJjZSxzdGFydCxlbCxjdXJyZW50TlNNYXAsZW50aXR5UmVwbGFjZXIsZXJyb3JIYW5kbGVyKXtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHFuYW1lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRJbmRleFxuXHQgKi9cblx0ZnVuY3Rpb24gYWRkQXR0cmlidXRlKHFuYW1lLCB2YWx1ZSwgc3RhcnRJbmRleCkge1xuXHRcdGlmIChlbC5hdHRyaWJ1dGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShxbmFtZSkpIHtcblx0XHRcdGVycm9ySGFuZGxlci5mYXRhbEVycm9yKCdBdHRyaWJ1dGUgJyArIHFuYW1lICsgJyByZWRlZmluZWQnKVxuXHRcdH1cblx0XHRlbC5hZGRWYWx1ZShxbmFtZSwgdmFsdWUsIHN0YXJ0SW5kZXgpXG5cdH1cblx0dmFyIGF0dHJOYW1lO1xuXHR2YXIgdmFsdWU7XG5cdHZhciBwID0gKytzdGFydDtcblx0dmFyIHMgPSBTX1RBRzsvL3N0YXR1c1xuXHR3aGlsZSh0cnVlKXtcblx0XHR2YXIgYyA9IHNvdXJjZS5jaGFyQXQocCk7XG5cdFx0c3dpdGNoKGMpe1xuXHRcdGNhc2UgJz0nOlxuXHRcdFx0aWYocyA9PT0gU19BVFRSKXsvL2F0dHJOYW1lXG5cdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApO1xuXHRcdFx0XHRzID0gU19FUTtcblx0XHRcdH1lbHNlIGlmKHMgPT09IFNfQVRUUl9TUEFDRSl7XG5cdFx0XHRcdHMgPSBTX0VRO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vZmF0YWxFcnJvcjogZXF1YWwgbXVzdCBhZnRlciBhdHRyTmFtZSBvciBzcGFjZSBhZnRlciBhdHRyTmFtZVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSBlcXVhbCBtdXN0IGFmdGVyIGF0dHJOYW1lJyk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnXFwnJzpcblx0XHRjYXNlICdcIic6XG5cdFx0XHRpZihzID09PSBTX0VRIHx8IHMgPT09IFNfQVRUUiAvL3x8IHMgPT0gU19BVFRSX1NQQUNFXG5cdFx0XHRcdCl7Ly9lcXVhbFxuXHRcdFx0XHRpZihzID09PSBTX0FUVFIpe1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpXG5cdFx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscClcblx0XHRcdFx0fVxuXHRcdFx0XHRzdGFydCA9IHArMTtcblx0XHRcdFx0cCA9IHNvdXJjZS5pbmRleE9mKGMsc3RhcnQpXG5cdFx0XHRcdGlmKHA+MCl7XG5cdFx0XHRcdFx0dmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscCkucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQtMSk7XG5cdFx0XHRcdFx0cyA9IFNfQVRUUl9FTkQ7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdC8vZmF0YWxFcnJvcjogbm8gZW5kIHF1b3QgbWF0Y2hcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBubyBlbmQgXFwnJytjKydcXCcgbWF0Y2gnKTtcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2UgaWYocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKXtcblx0XHRcdFx0dmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscCkucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coYXR0ck5hbWUsdmFsdWUsc3RhcnQscClcblx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpO1xuXHRcdFx0XHQvL2NvbnNvbGUuZGlyKGVsKVxuXHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJythdHRyTmFtZSsnXCIgbWlzc2VkIHN0YXJ0IHF1b3QoJytjKycpISEnKTtcblx0XHRcdFx0c3RhcnQgPSBwKzE7XG5cdFx0XHRcdHMgPSBTX0FUVFJfRU5EXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly9mYXRhbEVycm9yOiBubyBlcXVhbCBiZWZvcmVcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJy8nOlxuXHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0Y2FzZSBTX1RBRzpcblx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpO1xuXHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0Y2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdGNhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdHMgPVNfVEFHX0NMT1NFO1xuXHRcdFx0XHRlbC5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuXHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL2Nhc2UgU19FUTpcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSBpbnZhbGlkIGNsb3NlIGNoYXIoJy8nKVwiKSAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJyc6Ly9lbmQgZG9jdW1lbnRcblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcigndW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcblx0XHRcdGlmKHMgPT0gU19UQUcpe1xuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHRjYXNlICc+Jzpcblx0XHRcdHN3aXRjaChzKXtcblx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRicmVhazsvL25vcm1hbFxuXHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOi8vQ29tcGF0aWJsZSBzdGF0ZVxuXHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LHApO1xuXHRcdFx0XHRpZih2YWx1ZS5zbGljZSgtMSkgPT09ICcvJyl7XG5cdFx0XHRcdFx0ZWwuY2xvc2VkICA9IHRydWU7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zbGljZSgwLC0xKVxuXHRcdFx0XHR9XG5cdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0aWYocyA9PT0gU19BVFRSX1NQQUNFKXtcblx0XHRcdFx0XHR2YWx1ZSA9IGF0dHJOYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSl7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrdmFsdWUrJ1wiIG1pc3NlZCBxdW90KFwiKSEnKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpLCBzdGFydClcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIU5BTUVTUEFDRS5pc0hUTUwoY3VycmVudE5TTWFwWycnXSkgfHwgIXZhbHVlLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKXtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgdmFsdWUhISBcIicrdmFsdWUrJ1wiIGluc3RlYWQhIScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZSh2YWx1ZSwgdmFsdWUsIHN0YXJ0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTX0VROlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtaXNzZWQhIScpO1xuXHRcdFx0fVxuLy9cdFx0XHRjb25zb2xlLmxvZyh0YWdOYW1lLHRhZ05hbWVQYXR0ZXJuLHRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpXG5cdFx0XHRyZXR1cm4gcDtcblx0XHQvKnhtbCBzcGFjZSAnXFx4MjAnIHwgI3g5IHwgI3hEIHwgI3hBOyAqL1xuXHRcdGNhc2UgJ1xcdTAwODAnOlxuXHRcdFx0YyA9ICcgJztcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYoYzw9ICcgJyl7Ly9zcGFjZVxuXHRcdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpOy8vdGFnTmFtZVxuXHRcdFx0XHRcdHMgPSBTX1RBR19TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscClcblx0XHRcdFx0XHRzID0gU19BVFRSX1NQQUNFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LHApLnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgcXVvdChcIikhIScpO1xuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KVxuXHRcdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRcdFx0cyA9IFNfVEFHX1NQQUNFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRcdC8vY2FzZSBTX0VROlxuXHRcdFx0XHQvL2Nhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHQvL1x0dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdFx0Ly9pZ25vcmUgd2FybmluZ1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXsvL25vdCBzcGFjZVxuLy9TX1RBRyxcdFNfQVRUUixcdFNfRVEsXHRTX0FUVFJfTk9RVU9UX1ZBTFVFXG4vL1NfQVRUUl9TUEFDRSxcdFNfQVRUUl9FTkQsXHRTX1RBR19TUEFDRSwgU19UQUdfQ0xPU0Vcblx0XHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0XHQvL2Nhc2UgU19UQUc6dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19BVFRSOnZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0XHR2YXIgdGFnTmFtZSA9ICBlbC50YWdOYW1lO1xuXHRcdFx0XHRcdGlmICghTkFNRVNQQUNFLmlzSFRNTChjdXJyZW50TlNNYXBbJyddKSB8fCAhYXR0ck5hbWUubWF0Y2goL14oPzpkaXNhYmxlZHxjaGVja2VkfHNlbGVjdGVkKSQvaSkpIHtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK2F0dHJOYW1lKydcIiBtaXNzZWQgdmFsdWUhISBcIicrYXR0ck5hbWUrJ1wiIGluc3RlYWQyISEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJOYW1lLCBzdGFydCk7XG5cdFx0XHRcdFx0c3RhcnQgPSBwO1xuXHRcdFx0XHRcdHMgPSBTX0FUVFI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHNwYWNlIGlzIHJlcXVpcmVkXCInK2F0dHJOYW1lKydcIiEhJylcblx0XHRcdFx0Y2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdFx0XHRzID0gU19BVFRSO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0VROlxuXHRcdFx0XHRcdHMgPSBTX0FUVFJfTk9RVU9UX1ZBTFVFO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJlbGVtZW50cyBjbG9zZWQgY2hhcmFjdGVyICcvJyBhbmQgJz4nIG11c3QgYmUgY29ubmVjdGVkIHRvXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fS8vZW5kIG91dGVyIHN3aXRjaFxuXHRcdC8vY29uc29sZS5sb2coJ3ArKycscClcblx0XHRwKys7XG5cdH1cbn1cbi8qKlxuICogQHJldHVybiB0cnVlIGlmIGhhcyBuZXcgbmFtZXNwYWNlIGRlZmluZVxuICovXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKXtcblx0dmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXHR2YXIgbG9jYWxOU01hcCA9IG51bGw7XG5cdC8vdmFyIGN1cnJlbnROU01hcCA9IHBhcnNlU3RhY2tbcGFyc2VTdGFjay5sZW5ndGgtMV0uY3VycmVudE5TTWFwO1xuXHR2YXIgaSA9IGVsLmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHR2YXIgYSA9IGVsW2ldO1xuXHRcdHZhciBxTmFtZSA9IGEucU5hbWU7XG5cdFx0dmFyIHZhbHVlID0gYS52YWx1ZTtcblx0XHR2YXIgbnNwID0gcU5hbWUuaW5kZXhPZignOicpO1xuXHRcdGlmKG5zcD4wKXtcblx0XHRcdHZhciBwcmVmaXggPSBhLnByZWZpeCA9IHFOYW1lLnNsaWNlKDAsbnNwKTtcblx0XHRcdHZhciBsb2NhbE5hbWUgPSBxTmFtZS5zbGljZShuc3ArMSk7XG5cdFx0XHR2YXIgbnNQcmVmaXggPSBwcmVmaXggPT09ICd4bWxucycgJiYgbG9jYWxOYW1lXG5cdFx0fWVsc2V7XG5cdFx0XHRsb2NhbE5hbWUgPSBxTmFtZTtcblx0XHRcdHByZWZpeCA9IG51bGxcblx0XHRcdG5zUHJlZml4ID0gcU5hbWUgPT09ICd4bWxucycgJiYgJydcblx0XHR9XG5cdFx0Ly9jYW4gbm90IHNldCBwcmVmaXgsYmVjYXVzZSBwcmVmaXggIT09ICcnXG5cdFx0YS5sb2NhbE5hbWUgPSBsb2NhbE5hbWUgO1xuXHRcdC8vcHJlZml4ID09IG51bGwgZm9yIG5vIG5zIHByZWZpeCBhdHRyaWJ1dGUgXG5cdFx0aWYobnNQcmVmaXggIT09IGZhbHNlKXsvL2hhY2shIVxuXHRcdFx0aWYobG9jYWxOU01hcCA9PSBudWxsKXtcblx0XHRcdFx0bG9jYWxOU01hcCA9IHt9XG5cdFx0XHRcdC8vY29uc29sZS5sb2coY3VycmVudE5TTWFwLDApXG5cdFx0XHRcdF9jb3B5KGN1cnJlbnROU01hcCxjdXJyZW50TlNNYXA9e30pXG5cdFx0XHRcdC8vY29uc29sZS5sb2coY3VycmVudE5TTWFwLDEpXG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50TlNNYXBbbnNQcmVmaXhdID0gbG9jYWxOU01hcFtuc1ByZWZpeF0gPSB2YWx1ZTtcblx0XHRcdGEudXJpID0gTkFNRVNQQUNFLlhNTE5TXG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0UHJlZml4TWFwcGluZyhuc1ByZWZpeCwgdmFsdWUpIFxuXHRcdH1cblx0fVxuXHR2YXIgaSA9IGVsLmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHRhID0gZWxbaV07XG5cdFx0dmFyIHByZWZpeCA9IGEucHJlZml4O1xuXHRcdGlmKHByZWZpeCl7Ly9ubyBwcmVmaXggYXR0cmlidXRlIGhhcyBubyBuYW1lc3BhY2Vcblx0XHRcdGlmKHByZWZpeCA9PT0gJ3htbCcpe1xuXHRcdFx0XHRhLnVyaSA9IE5BTUVTUEFDRS5YTUw7XG5cdFx0XHR9aWYocHJlZml4ICE9PSAneG1sbnMnKXtcblx0XHRcdFx0YS51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXVxuXHRcdFx0XHRcblx0XHRcdFx0Ly97Y29uc29sZS5sb2coJyMjIycrYS5xTmFtZSxkb21CdWlsZGVyLmxvY2F0b3Iuc3lzdGVtSWQrJycsY3VycmVudE5TTWFwLGEudXJpKX1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIG5zcCA9IHRhZ05hbWUuaW5kZXhPZignOicpO1xuXHRpZihuc3A+MCl7XG5cdFx0cHJlZml4ID0gZWwucHJlZml4ID0gdGFnTmFtZS5zbGljZSgwLG5zcCk7XG5cdFx0bG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZS5zbGljZShuc3ArMSk7XG5cdH1lbHNle1xuXHRcdHByZWZpeCA9IG51bGw7Ly9pbXBvcnRhbnQhIVxuXHRcdGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG5cdH1cblx0Ly9ubyBwcmVmaXggZWxlbWVudCBoYXMgZGVmYXVsdCBuYW1lc3BhY2Vcblx0dmFyIG5zID0gZWwudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ107XG5cdGRvbUJ1aWxkZXIuc3RhcnRFbGVtZW50KG5zLGxvY2FsTmFtZSx0YWdOYW1lLGVsKTtcblx0Ly9lbmRQcmVmaXhNYXBwaW5nIGFuZCBzdGFydFByZWZpeE1hcHBpbmcgaGF2ZSBub3QgYW55IGhlbHAgZm9yIGRvbSBidWlsZGVyXG5cdC8vbG9jYWxOU01hcCA9IG51bGxcblx0aWYoZWwuY2xvc2VkKXtcblx0XHRkb21CdWlsZGVyLmVuZEVsZW1lbnQobnMsbG9jYWxOYW1lLHRhZ05hbWUpO1xuXHRcdGlmKGxvY2FsTlNNYXApe1xuXHRcdFx0Zm9yKHByZWZpeCBpbiBsb2NhbE5TTWFwKXtcblx0XHRcdFx0ZG9tQnVpbGRlci5lbmRQcmVmaXhNYXBwaW5nKHByZWZpeCkgXG5cdFx0XHR9XG5cdFx0fVxuXHR9ZWxzZXtcblx0XHRlbC5jdXJyZW50TlNNYXAgPSBjdXJyZW50TlNNYXA7XG5cdFx0ZWwubG9jYWxOU01hcCA9IGxvY2FsTlNNYXA7XG5cdFx0Ly9wYXJzZVN0YWNrLnB1c2goZWwpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5mdW5jdGlvbiBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsZWxTdGFydEVuZCx0YWdOYW1lLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIpe1xuXHRpZigvXig/OnNjcmlwdHx0ZXh0YXJlYSkkL2kudGVzdCh0YWdOYW1lKSl7XG5cdFx0dmFyIGVsRW5kU3RhcnQgPSAgc291cmNlLmluZGV4T2YoJzwvJyt0YWdOYW1lKyc+JyxlbFN0YXJ0RW5kKTtcblx0XHR2YXIgdGV4dCA9IHNvdXJjZS5zdWJzdHJpbmcoZWxTdGFydEVuZCsxLGVsRW5kU3RhcnQpO1xuXHRcdGlmKC9bJjxdLy50ZXN0KHRleHQpKXtcblx0XHRcdGlmKC9ec2NyaXB0JC9pLnRlc3QodGFnTmFtZSkpe1xuXHRcdFx0XHQvL2lmKCEvXFxdXFxdPi8udGVzdCh0ZXh0KSl7XG5cdFx0XHRcdFx0Ly9sZXhIYW5kbGVyLnN0YXJ0Q0RBVEEoKTtcblx0XHRcdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnModGV4dCwwLHRleHQubGVuZ3RoKTtcblx0XHRcdFx0XHQvL2xleEhhbmRsZXIuZW5kQ0RBVEEoKTtcblx0XHRcdFx0XHRyZXR1cm4gZWxFbmRTdGFydDtcblx0XHRcdFx0Ly99XG5cdFx0XHR9Ly99ZWxzZXsvL3RleHQgYXJlYVxuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKTtcblx0XHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsMCx0ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdHJldHVybiBlbEVuZFN0YXJ0O1xuXHRcdFx0Ly99XG5cdFx0XHRcblx0XHR9XG5cdH1cblx0cmV0dXJuIGVsU3RhcnRFbmQrMTtcbn1cbmZ1bmN0aW9uIGZpeFNlbGZDbG9zZWQoc291cmNlLGVsU3RhcnRFbmQsdGFnTmFtZSxjbG9zZU1hcCl7XG5cdC8vaWYodGFnTmFtZSBpbiBjbG9zZU1hcCl7XG5cdHZhciBwb3MgPSBjbG9zZU1hcFt0YWdOYW1lXTtcblx0aWYocG9zID09IG51bGwpe1xuXHRcdC8vY29uc29sZS5sb2codGFnTmFtZSlcblx0XHRwb3MgPSAgc291cmNlLmxhc3RJbmRleE9mKCc8LycrdGFnTmFtZSsnPicpXG5cdFx0aWYocG9zPGVsU3RhcnRFbmQpey8v5b+Y6K6w6Zet5ZCIXG5cdFx0XHRwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyt0YWdOYW1lKVxuXHRcdH1cblx0XHRjbG9zZU1hcFt0YWdOYW1lXSA9cG9zXG5cdH1cblx0cmV0dXJuIHBvczxlbFN0YXJ0RW5kO1xuXHQvL30gXG59XG5mdW5jdGlvbiBfY29weShzb3VyY2UsdGFyZ2V0KXtcblx0Zm9yKHZhciBuIGluIHNvdXJjZSl7dGFyZ2V0W25dID0gc291cmNlW25dfVxufVxuZnVuY3Rpb24gcGFyc2VEQ0Moc291cmNlLHN0YXJ0LGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKXsvL3N1cmUgc3RhcnQgd2l0aCAnPCEnXG5cdHZhciBuZXh0PSBzb3VyY2UuY2hhckF0KHN0YXJ0KzIpXG5cdHN3aXRjaChuZXh0KXtcblx0Y2FzZSAnLSc6XG5cdFx0aWYoc291cmNlLmNoYXJBdChzdGFydCArIDMpID09PSAnLScpe1xuXHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCctLT4nLHN0YXJ0KzQpO1xuXHRcdFx0Ly9hcHBlbmQgY29tbWVudCBzb3VyY2Uuc3Vic3RyaW5nKDQsZW5kKS8vPCEtLVxuXHRcdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdFx0ZG9tQnVpbGRlci5jb21tZW50KHNvdXJjZSxzdGFydCs0LGVuZC1zdGFydC00KTtcblx0XHRcdFx0cmV0dXJuIGVuZCszO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGVycm9ySGFuZGxlci5lcnJvcihcIlVuY2xvc2VkIGNvbW1lbnRcIik7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdC8vZXJyb3Jcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdGRlZmF1bHQ6XG5cdFx0aWYoc291cmNlLnN1YnN0cihzdGFydCszLDYpID09ICdDREFUQVsnKXtcblx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignXV0+JyxzdGFydCs5KTtcblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnRDREFUQSgpO1xuXHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHNvdXJjZSxzdGFydCs5LGVuZC1zdGFydC05KTtcblx0XHRcdGRvbUJ1aWxkZXIuZW5kQ0RBVEEoKSBcblx0XHRcdHJldHVybiBlbmQrMztcblx0XHR9XG5cdFx0Ly88IURPQ1RZUEVcblx0XHQvL3N0YXJ0RFREKGphdmEubGFuZy5TdHJpbmcgbmFtZSwgamF2YS5sYW5nLlN0cmluZyBwdWJsaWNJZCwgamF2YS5sYW5nLlN0cmluZyBzeXN0ZW1JZCkgXG5cdFx0dmFyIG1hdGNocyA9IHNwbGl0KHNvdXJjZSxzdGFydCk7XG5cdFx0dmFyIGxlbiA9IG1hdGNocy5sZW5ndGg7XG5cdFx0aWYobGVuPjEgJiYgLyFkb2N0eXBlL2kudGVzdChtYXRjaHNbMF1bMF0pKXtcblx0XHRcdHZhciBuYW1lID0gbWF0Y2hzWzFdWzBdO1xuXHRcdFx0dmFyIHB1YmlkID0gZmFsc2U7XG5cdFx0XHR2YXIgc3lzaWQgPSBmYWxzZTtcblx0XHRcdGlmKGxlbj4zKXtcblx0XHRcdFx0aWYoL15wdWJsaWMkL2kudGVzdChtYXRjaHNbMl1bMF0pKXtcblx0XHRcdFx0XHRwdWJpZCA9IG1hdGNoc1szXVswXTtcblx0XHRcdFx0XHRzeXNpZCA9IGxlbj40ICYmIG1hdGNoc1s0XVswXTtcblx0XHRcdFx0fWVsc2UgaWYoL15zeXN0ZW0kL2kudGVzdChtYXRjaHNbMl1bMF0pKXtcblx0XHRcdFx0XHRzeXNpZCA9IG1hdGNoc1szXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIGxhc3RNYXRjaCA9IG1hdGNoc1tsZW4tMV1cblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnREVEQobmFtZSwgcHViaWQsIHN5c2lkKTtcblx0XHRcdGRvbUJ1aWxkZXIuZW5kRFREKCk7XG5cdFx0XHRcblx0XHRcdHJldHVybiBsYXN0TWF0Y2guaW5kZXgrbGFzdE1hdGNoWzBdLmxlbmd0aFxuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cblxuXG5mdW5jdGlvbiBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSxzdGFydCxkb21CdWlsZGVyKXtcblx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc/Picsc3RhcnQpO1xuXHRpZihlbmQpe1xuXHRcdHZhciBtYXRjaCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsZW5kKS5tYXRjaCgvXjxcXD8oXFxTKilcXHMqKFtcXHNcXFNdKj8pXFxzKiQvKTtcblx0XHRpZihtYXRjaCl7XG5cdFx0XHR2YXIgbGVuID0gbWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0ZG9tQnVpbGRlci5wcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obWF0Y2hbMV0sIG1hdGNoWzJdKSA7XG5cdFx0XHRyZXR1cm4gZW5kKzI7XG5cdFx0fWVsc2V7Ly9lcnJvclxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIEVsZW1lbnRBdHRyaWJ1dGVzKCl7XG5cdHRoaXMuYXR0cmlidXRlTmFtZXMgPSB7fVxufVxuRWxlbWVudEF0dHJpYnV0ZXMucHJvdG90eXBlID0ge1xuXHRzZXRUYWdOYW1lOmZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdGlmKCF0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0YWdOYW1lOicrdGFnTmFtZSlcblx0XHR9XG5cdFx0dGhpcy50YWdOYW1lID0gdGFnTmFtZVxuXHR9LFxuXHRhZGRWYWx1ZTpmdW5jdGlvbihxTmFtZSwgdmFsdWUsIG9mZnNldCkge1xuXHRcdGlmKCF0YWdOYW1lUGF0dGVybi50ZXN0KHFOYW1lKSl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXR0cmlidXRlOicrcU5hbWUpXG5cdFx0fVxuXHRcdHRoaXMuYXR0cmlidXRlTmFtZXNbcU5hbWVdID0gdGhpcy5sZW5ndGg7XG5cdFx0dGhpc1t0aGlzLmxlbmd0aCsrXSA9IHtxTmFtZTpxTmFtZSx2YWx1ZTp2YWx1ZSxvZmZzZXQ6b2Zmc2V0fVxuXHR9LFxuXHRsZW5ndGg6MCxcblx0Z2V0TG9jYWxOYW1lOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLmxvY2FsTmFtZX0sXG5cdGdldExvY2F0b3I6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0ubG9jYXRvcn0sXG5cdGdldFFOYW1lOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLnFOYW1lfSxcblx0Z2V0VVJJOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLnVyaX0sXG5cdGdldFZhbHVlOmZ1bmN0aW9uKGkpe3JldHVybiB0aGlzW2ldLnZhbHVlfVxuLy9cdCxnZXRJbmRleDpmdW5jdGlvbih1cmksIGxvY2FsTmFtZSkpe1xuLy9cdFx0aWYobG9jYWxOYW1lKXtcbi8vXHRcdFx0XG4vL1x0XHR9ZWxzZXtcbi8vXHRcdFx0dmFyIHFOYW1lID0gdXJpXG4vL1x0XHR9XG4vL1x0fSxcbi8vXHRnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFZhbHVlKHRoaXMuZ2V0SW5kZXguYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sXG4vL1x0Z2V0VHlwZTpmdW5jdGlvbih1cmksbG9jYWxOYW1lKXt9XG4vL1x0Z2V0VHlwZTpmdW5jdGlvbihpKXt9LFxufVxuXG5cblxuZnVuY3Rpb24gc3BsaXQoc291cmNlLHN0YXJ0KXtcblx0dmFyIG1hdGNoO1xuXHR2YXIgYnVmID0gW107XG5cdHZhciByZWcgPSAvJ1teJ10rJ3xcIlteXCJdK1wifFteXFxzPD5cXC89XSs9P3woXFwvP1xccyo+fDwpL2c7XG5cdHJlZy5sYXN0SW5kZXggPSBzdGFydDtcblx0cmVnLmV4ZWMoc291cmNlKTsvL3NraXAgPFxuXHR3aGlsZShtYXRjaCA9IHJlZy5leGVjKHNvdXJjZSkpe1xuXHRcdGJ1Zi5wdXNoKG1hdGNoKTtcblx0XHRpZihtYXRjaFsxXSlyZXR1cm4gYnVmO1xuXHR9XG59XG5cbmV4cG9ydHMuWE1MUmVhZGVyID0gWE1MUmVhZGVyO1xuZXhwb3J0cy5QYXJzZUVycm9yID0gUGFyc2VFcnJvcjtcbiIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIiwiLyohIEBuYW1lIG1wZC1wYXJzZXIgQHZlcnNpb24gMC4yMS4xIEBsaWNlbnNlIEFwYWNoZS0yLjAgKi9cbmltcG9ydCByZXNvbHZlVXJsIGZyb20gJ0B2aWRlb2pzL3Zocy11dGlscy9lcy9yZXNvbHZlLXVybCc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHsgZm9yRWFjaE1lZGlhR3JvdXAgfSBmcm9tICdAdmlkZW9qcy92aHMtdXRpbHMvZXMvbWVkaWEtZ3JvdXBzJztcbmltcG9ydCBkZWNvZGVCNjRUb1VpbnQ4QXJyYXkgZnJvbSAnQHZpZGVvanMvdmhzLXV0aWxzL2VzL2RlY29kZS1iNjQtdG8tdWludDgtYXJyYXknO1xuaW1wb3J0IHsgRE9NUGFyc2VyIH0gZnJvbSAnQHhtbGRvbS94bWxkb20nO1xuXG52YXIgdmVyc2lvbiA9IFwiMC4yMS4xXCI7XG5cbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9iamVjdHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb2JqZWN0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdFtrZXldKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHJlc3VsdFtrZXldLmNvbmNhdChzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHJlc3VsdFtrZXldKSAmJiBpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59O1xudmFyIHZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcyhvKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb1trXTtcbiAgfSk7XG59O1xuXG52YXIgcmFuZ2UgPSBmdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgZmxhdHRlbiA9IGZ1bmN0aW9uIGZsYXR0ZW4obGlzdHMpIHtcbiAgcmV0dXJuIGxpc3RzLnJlZHVjZShmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB4LmNvbmNhdCh5KTtcbiAgfSwgW10pO1xufTtcbnZhciBmcm9tID0gZnVuY3Rpb24gZnJvbShsaXN0KSB7XG4gIGlmICghbGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2gobGlzdFtpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBmaW5kSW5kZXhlcyA9IGZ1bmN0aW9uIGZpbmRJbmRleGVzKGwsIGtleSkge1xuICByZXR1cm4gbC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGUsIGkpIHtcbiAgICBpZiAoZVtrZXldKSB7XG4gICAgICBhLnB1c2goaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH0sIFtdKTtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGluZGV4IHRoYXQgc2F0aXNmaWVzIHRoZSBtYXRjaGluZyBmdW5jdGlvbiwgb3IgLTEgaWYgbm90IGZvdW5kLlxuICpcbiAqIE9ubHkgbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgSUUxMSBzdXBwb3J0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgLSB0aGUgbGlzdCB0byBzZWFyY2ggdGhyb3VnaFxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWF0Y2hpbmdGdW5jdGlvbiAtIHRoZSBtYXRjaGluZyBmdW5jdGlvblxuICpcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIG1hdGNoaW5nIGluZGV4IG9yIC0xIGlmIG5vdCBmb3VuZFxuICovXG5cbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgobGlzdCwgbWF0Y2hpbmdGdW5jdGlvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWF0Y2hpbmdGdW5jdGlvbihsaXN0W2ldKSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufTtcbi8qKlxuICogUmV0dXJucyBhIHVuaW9uIG9mIHRoZSBpbmNsdWRlZCBsaXN0cyBwcm92aWRlZCBlYWNoIGVsZW1lbnQgY2FuIGJlIGlkZW50aWZpZWQgYnkgYSBrZXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCAtIGxpc3Qgb2YgbGlzdHMgdG8gZ2V0IHRoZSB1bmlvbiBvZlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5RnVuY3Rpb24gLSB0aGUgZnVuY3Rpb24gdG8gdXNlIGFzIGEga2V5IGZvciBlYWNoIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIHVuaW9uIG9mIHRoZSBhcnJheXNcbiAqL1xuXG52YXIgdW5pb24gPSBmdW5jdGlvbiB1bmlvbihsaXN0cywga2V5RnVuY3Rpb24pIHtcbiAgcmV0dXJuIHZhbHVlcyhsaXN0cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbGlzdCkge1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGFjY1trZXlGdW5jdGlvbihlbCldID0gZWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pKTtcbn07XG5cbnZhciBlcnJvcnMgPSB7XG4gIElOVkFMSURfTlVNQkVSX09GX1BFUklPRDogJ0lOVkFMSURfTlVNQkVSX09GX1BFUklPRCcsXG4gIERBU0hfRU1QVFlfTUFOSUZFU1Q6ICdEQVNIX0VNUFRZX01BTklGRVNUJyxcbiAgREFTSF9JTlZBTElEX1hNTDogJ0RBU0hfSU5WQUxJRF9YTUwnLFxuICBOT19CQVNFX1VSTDogJ05PX0JBU0VfVVJMJyxcbiAgTUlTU0lOR19TRUdNRU5UX0lORk9STUFUSU9OOiAnTUlTU0lOR19TRUdNRU5UX0lORk9STUFUSU9OJyxcbiAgU0VHTUVOVF9USU1FX1VOU1BFQ0lGSUVEOiAnU0VHTUVOVF9USU1FX1VOU1BFQ0lGSUVEJyxcbiAgVU5TVVBQT1JURURfVVRDX1RJTUlOR19TQ0hFTUU6ICdVTlNVUFBPUlRFRF9VVENfVElNSU5HX1NDSEVNRSdcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2luZ2xlVXJpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJpIC0gcmVsYXRpdmUgbG9jYXRpb24gb2Ygc2VnbWVudFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlc29sdmVkVXJpIC0gcmVzb2x2ZWQgbG9jYXRpb24gb2Ygc2VnbWVudFxuICogQHByb3BlcnR5IHtPYmplY3R9IGJ5dGVyYW5nZSAtIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIG9uIGhvdyB0byBtYWtlIGJ5dGUgcmFuZ2VcbiAqICAgcmVxdWVzdHMgZm9sbG93aW5nIGJ5dGUtcmFuZ2Utc3BlYyBwZXIgUkZDMjYxNi5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBieXRlcmFuZ2UubGVuZ3RoIC0gbGVuZ3RoIG9mIHJhbmdlIHJlcXVlc3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBieXRlcmFuZ2Uub2Zmc2V0IC0gYnl0ZSBvZmZzZXQgb2YgcmFuZ2UgcmVxdWVzdFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTQuaHRtbCNzZWMxNC4zNS4xXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVSTFR5cGUgbm9kZSAoNS4zLjkuMi4zIFRhYmxlIDEzKSB0byBhIHNlZ21lbnQgb2JqZWN0XG4gKiB0aGF0IGNvbmZvcm1zIHRvIGhvdyBtM3U4LXBhcnNlciBpcyBzdHJ1Y3R1cmVkXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy9tM3U4LXBhcnNlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsIC0gYmFzZVVybCBwcm92aWRlZCBieSA8QmFzZVVybD4gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgLSBzb3VyY2UgdXJsIGZvciBzZWdtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2UgLSBvcHRpb25hbCByYW5nZSB1c2VkIGZvciByYW5nZSBjYWxscyxcbiAqICAgZm9sbG93cyAgUkZDIDI2MTYsIENsYXVzZSAxNC4zNS4xXG4gKiBAcmV0dXJuIHtTaW5nbGVVcml9IGZ1bGwgc2VnbWVudCBpbmZvcm1hdGlvbiB0cmFuc2Zvcm1lZCBpbnRvIGEgZm9ybWF0IHNpbWlsYXJcbiAqICAgdG8gbTN1OC1wYXJzZXJcbiAqL1xuXG52YXIgdXJsVHlwZVRvU2VnbWVudCA9IGZ1bmN0aW9uIHVybFR5cGVUb1NlZ21lbnQoX3JlZikge1xuICB2YXIgX3JlZiRiYXNlVXJsID0gX3JlZi5iYXNlVXJsLFxuICAgICAgYmFzZVVybCA9IF9yZWYkYmFzZVVybCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJGJhc2VVcmwsXG4gICAgICBfcmVmJHNvdXJjZSA9IF9yZWYuc291cmNlLFxuICAgICAgc291cmNlID0gX3JlZiRzb3VyY2UgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRzb3VyY2UsXG4gICAgICBfcmVmJHJhbmdlID0gX3JlZi5yYW5nZSxcbiAgICAgIHJhbmdlID0gX3JlZiRyYW5nZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHJhbmdlLFxuICAgICAgX3JlZiRpbmRleFJhbmdlID0gX3JlZi5pbmRleFJhbmdlLFxuICAgICAgaW5kZXhSYW5nZSA9IF9yZWYkaW5kZXhSYW5nZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJGluZGV4UmFuZ2U7XG4gIHZhciBzZWdtZW50ID0ge1xuICAgIHVyaTogc291cmNlLFxuICAgIHJlc29sdmVkVXJpOiByZXNvbHZlVXJsKGJhc2VVcmwgfHwgJycsIHNvdXJjZSlcbiAgfTtcblxuICBpZiAocmFuZ2UgfHwgaW5kZXhSYW5nZSkge1xuICAgIHZhciByYW5nZVN0ciA9IHJhbmdlID8gcmFuZ2UgOiBpbmRleFJhbmdlO1xuICAgIHZhciByYW5nZXMgPSByYW5nZVN0ci5zcGxpdCgnLScpOyAvLyBkZWZhdWx0IHRvIHBhcnNpbmcgdGhpcyBhcyBhIEJpZ0ludCBpZiBwb3NzaWJsZVxuXG4gICAgdmFyIHN0YXJ0UmFuZ2UgPSB3aW5kb3cuQmlnSW50ID8gd2luZG93LkJpZ0ludChyYW5nZXNbMF0pIDogcGFyc2VJbnQocmFuZ2VzWzBdLCAxMCk7XG4gICAgdmFyIGVuZFJhbmdlID0gd2luZG93LkJpZ0ludCA/IHdpbmRvdy5CaWdJbnQocmFuZ2VzWzFdKSA6IHBhcnNlSW50KHJhbmdlc1sxXSwgMTApOyAvLyBjb252ZXJ0IGJhY2sgdG8gYSBudW1iZXIgaWYgbGVzcyB0aGFuIE1BWF9TQUZFX0lOVEVHRVJcblxuICAgIGlmIChzdGFydFJhbmdlIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgJiYgdHlwZW9mIHN0YXJ0UmFuZ2UgPT09ICdiaWdpbnQnKSB7XG4gICAgICBzdGFydFJhbmdlID0gTnVtYmVyKHN0YXJ0UmFuZ2UpO1xuICAgIH1cblxuICAgIGlmIChlbmRSYW5nZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICYmIHR5cGVvZiBlbmRSYW5nZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIGVuZFJhbmdlID0gTnVtYmVyKGVuZFJhbmdlKTtcbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVvZiBlbmRSYW5nZSA9PT0gJ2JpZ2ludCcgfHwgdHlwZW9mIHN0YXJ0UmFuZ2UgPT09ICdiaWdpbnQnKSB7XG4gICAgICBsZW5ndGggPSB3aW5kb3cuQmlnSW50KGVuZFJhbmdlKSAtIHdpbmRvdy5CaWdJbnQoc3RhcnRSYW5nZSkgKyB3aW5kb3cuQmlnSW50KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSBlbmRSYW5nZSAtIHN0YXJ0UmFuZ2UgKyAxO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGVuZ3RoID09PSAnYmlnaW50JyAmJiBsZW5ndGggPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aCk7XG4gICAgfSAvLyBieXRlcmFuZ2Ugc2hvdWxkIGJlIGluY2x1c2l2ZSBhY2NvcmRpbmcgdG9cbiAgICAvLyBSRkMgMjYxNiwgQ2xhdXNlIDE0LjM1LjFcblxuXG4gICAgc2VnbWVudC5ieXRlcmFuZ2UgPSB7XG4gICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgIG9mZnNldDogc3RhcnRSYW5nZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2VnbWVudDtcbn07XG52YXIgYnl0ZVJhbmdlVG9TdHJpbmcgPSBmdW5jdGlvbiBieXRlUmFuZ2VUb1N0cmluZyhieXRlcmFuZ2UpIHtcbiAgLy8gYGVuZFJhbmdlYCBpcyBvbmUgbGVzcyB0aGFuIGBvZmZzZXQgKyBsZW5ndGhgIGJlY2F1c2UgdGhlIEhUVFAgcmFuZ2VcbiAgLy8gaGVhZGVyIHVzZXMgaW5jbHVzaXZlIHJhbmdlc1xuICB2YXIgZW5kUmFuZ2U7XG5cbiAgaWYgKHR5cGVvZiBieXRlcmFuZ2Uub2Zmc2V0ID09PSAnYmlnaW50JyB8fCB0eXBlb2YgYnl0ZXJhbmdlLmxlbmd0aCA9PT0gJ2JpZ2ludCcpIHtcbiAgICBlbmRSYW5nZSA9IHdpbmRvdy5CaWdJbnQoYnl0ZXJhbmdlLm9mZnNldCkgKyB3aW5kb3cuQmlnSW50KGJ5dGVyYW5nZS5sZW5ndGgpIC0gd2luZG93LkJpZ0ludCgxKTtcbiAgfSBlbHNlIHtcbiAgICBlbmRSYW5nZSA9IGJ5dGVyYW5nZS5vZmZzZXQgKyBieXRlcmFuZ2UubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJldHVybiBieXRlcmFuZ2Uub2Zmc2V0ICsgXCItXCIgKyBlbmRSYW5nZTtcbn07XG5cbi8qKlxuICogcGFyc2UgdGhlIGVuZCBudW1iZXIgYXR0cmlidWUgdGhhdCBjYW4gYmUgYSBzdHJpbmdcbiAqIG51bWJlciwgb3IgdW5kZWZpbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnx1bmRlZmluZWR9IGVuZE51bWJlclxuICogICAgICAgIFRoZSBlbmQgbnVtYmVyIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAqICAgICAgICAgIFRoZSByZXN1bHQgb2YgcGFyc2luZyB0aGUgZW5kIG51bWJlci5cbiAqL1xuXG52YXIgcGFyc2VFbmROdW1iZXIgPSBmdW5jdGlvbiBwYXJzZUVuZE51bWJlcihlbmROdW1iZXIpIHtcbiAgaWYgKGVuZE51bWJlciAmJiB0eXBlb2YgZW5kTnVtYmVyICE9PSAnbnVtYmVyJykge1xuICAgIGVuZE51bWJlciA9IHBhcnNlSW50KGVuZE51bWJlciwgMTApO1xuICB9XG5cbiAgaWYgKGlzTmFOKGVuZE51bWJlcikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbmROdW1iZXI7XG59O1xuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIGNhbGN1bGF0aW5nIHRoZSByYW5nZSBvZiBhdmFpbGFibGUgc2VnbWVudHMgaW4gc3RhdGljIGFuZCBkeW5hbWljXG4gKiBtYW5pZmVzdHMuXG4gKi9cblxuXG52YXIgc2VnbWVudFJhbmdlID0ge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW50aXJlIHJhbmdlIG9mIGF2YWlsYWJsZSBzZWdtZW50cyBmb3IgYSBzdGF0aWMgTVBEXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAqICAgICAgICBJbmhlcml0aWVkIE1QRCBhdHRyaWJ1dGVzXG4gICAqIEByZXR1cm4ge3sgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgfX1cbiAgICogICAgICAgICBUaGUgc3RhcnQgYW5kIGVuZCBudW1iZXJzIGZvciBhdmFpbGFibGUgc2VnbWVudHNcbiAgICovXG4gIHN0YXRpYzogZnVuY3Rpb24gX3N0YXRpYyhhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICAgICAgX2F0dHJpYnV0ZXMkdGltZXNjYWxlID0gYXR0cmlidXRlcy50aW1lc2NhbGUsXG4gICAgICAgIHRpbWVzY2FsZSA9IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZSA9PT0gdm9pZCAwID8gMSA6IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZSxcbiAgICAgICAgc291cmNlRHVyYXRpb24gPSBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgICBwZXJpb2REdXJhdGlvbiA9IGF0dHJpYnV0ZXMucGVyaW9kRHVyYXRpb247XG4gICAgdmFyIGVuZE51bWJlciA9IHBhcnNlRW5kTnVtYmVyKGF0dHJpYnV0ZXMuZW5kTnVtYmVyKTtcbiAgICB2YXIgc2VnbWVudER1cmF0aW9uID0gZHVyYXRpb24gLyB0aW1lc2NhbGU7XG5cbiAgICBpZiAodHlwZW9mIGVuZE51bWJlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IGVuZE51bWJlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBlcmlvZER1cmF0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogcGVyaW9kRHVyYXRpb24gLyBzZWdtZW50RHVyYXRpb25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZW5kOiBzb3VyY2VEdXJhdGlvbiAvIHNlZ21lbnREdXJhdGlvblxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbGl2ZSB3aW5kb3cgcmFuZ2Ugb2YgYXZhaWxhYmxlIHNlZ21lbnRzIGZvciBhIGR5bmFtaWMgTVBEXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAqICAgICAgICBJbmhlcml0aWVkIE1QRCBhdHRyaWJ1dGVzXG4gICAqIEByZXR1cm4ge3sgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgfX1cbiAgICogICAgICAgICBUaGUgc3RhcnQgYW5kIGVuZCBudW1iZXJzIGZvciBhdmFpbGFibGUgc2VnbWVudHNcbiAgICovXG4gIGR5bmFtaWM6IGZ1bmN0aW9uIGR5bmFtaWMoYXR0cmlidXRlcykge1xuICAgIHZhciBOT1cgPSBhdHRyaWJ1dGVzLk5PVyxcbiAgICAgICAgY2xpZW50T2Zmc2V0ID0gYXR0cmlidXRlcy5jbGllbnRPZmZzZXQsXG4gICAgICAgIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IGF0dHJpYnV0ZXMuYXZhaWxhYmlsaXR5U3RhcnRUaW1lLFxuICAgICAgICBfYXR0cmlidXRlcyR0aW1lc2NhbGUyID0gYXR0cmlidXRlcy50aW1lc2NhbGUsXG4gICAgICAgIHRpbWVzY2FsZSA9IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTIgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyR0aW1lc2NhbGUyLFxuICAgICAgICBkdXJhdGlvbiA9IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgICAgIF9hdHRyaWJ1dGVzJHBlcmlvZFN0YSA9IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgICAgIHBlcmlvZFN0YXJ0ID0gX2F0dHJpYnV0ZXMkcGVyaW9kU3RhID09PSB2b2lkIDAgPyAwIDogX2F0dHJpYnV0ZXMkcGVyaW9kU3RhLFxuICAgICAgICBfYXR0cmlidXRlcyRtaW5pbXVtVXAgPSBhdHRyaWJ1dGVzLm1pbmltdW1VcGRhdGVQZXJpb2QsXG4gICAgICAgIG1pbmltdW1VcGRhdGVQZXJpb2QgPSBfYXR0cmlidXRlcyRtaW5pbXVtVXAgPT09IHZvaWQgMCA/IDAgOiBfYXR0cmlidXRlcyRtaW5pbXVtVXAsXG4gICAgICAgIF9hdHRyaWJ1dGVzJHRpbWVTaGlmdCA9IGF0dHJpYnV0ZXMudGltZVNoaWZ0QnVmZmVyRGVwdGgsXG4gICAgICAgIHRpbWVTaGlmdEJ1ZmZlckRlcHRoID0gX2F0dHJpYnV0ZXMkdGltZVNoaWZ0ID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9hdHRyaWJ1dGVzJHRpbWVTaGlmdDtcbiAgICB2YXIgZW5kTnVtYmVyID0gcGFyc2VFbmROdW1iZXIoYXR0cmlidXRlcy5lbmROdW1iZXIpOyAvLyBjbGllbnRPZmZzZXQgaXMgcGFzc2VkIGluIGF0IHRoZSB0b3AgbGV2ZWwgb2YgbXBkLXBhcnNlciBhbmQgaXMgYW4gb2Zmc2V0IGNhbGN1bGF0ZWRcbiAgICAvLyBhZnRlciByZXRyaWV2aW5nIFVUQyBzZXJ2ZXIgdGltZS5cblxuICAgIHZhciBub3cgPSAoTk9XICsgY2xpZW50T2Zmc2V0KSAvIDEwMDA7IC8vIFdDIHN0YW5kcyBmb3IgV2FsbCBDbG9jay5cbiAgICAvLyBDb252ZXJ0IHRoZSBwZXJpb2Qgc3RhcnQgdGltZSB0byBFUE9DSC5cblxuICAgIHZhciBwZXJpb2RTdGFydFdDID0gYXZhaWxhYmlsaXR5U3RhcnRUaW1lICsgcGVyaW9kU3RhcnQ7IC8vIFBlcmlvZCBlbmQgaW4gRVBPQ0ggaXMgbWFuaWZlc3QncyByZXRyaWV2YWwgdGltZSArIHRpbWUgdW50aWwgbmV4dCB1cGRhdGUuXG5cbiAgICB2YXIgcGVyaW9kRW5kV0MgPSBub3cgKyBtaW5pbXVtVXBkYXRlUGVyaW9kO1xuICAgIHZhciBwZXJpb2REdXJhdGlvbiA9IHBlcmlvZEVuZFdDIC0gcGVyaW9kU3RhcnRXQztcbiAgICB2YXIgc2VnbWVudENvdW50ID0gTWF0aC5jZWlsKHBlcmlvZER1cmF0aW9uICogdGltZXNjYWxlIC8gZHVyYXRpb24pO1xuICAgIHZhciBhdmFpbGFibGVTdGFydCA9IE1hdGguZmxvb3IoKG5vdyAtIHBlcmlvZFN0YXJ0V0MgLSB0aW1lU2hpZnRCdWZmZXJEZXB0aCkgKiB0aW1lc2NhbGUgLyBkdXJhdGlvbik7XG4gICAgdmFyIGF2YWlsYWJsZUVuZCA9IE1hdGguZmxvb3IoKG5vdyAtIHBlcmlvZFN0YXJ0V0MpICogdGltZXNjYWxlIC8gZHVyYXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogTWF0aC5tYXgoMCwgYXZhaWxhYmxlU3RhcnQpLFxuICAgICAgZW5kOiB0eXBlb2YgZW5kTnVtYmVyID09PSAnbnVtYmVyJyA/IGVuZE51bWJlciA6IE1hdGgubWluKHNlZ21lbnRDb3VudCwgYXZhaWxhYmxlRW5kKVxuICAgIH07XG4gIH1cbn07XG4vKipcbiAqIE1hcHMgYSByYW5nZSBvZiBudW1iZXJzIHRvIG9iamVjdHMgd2l0aCBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gYnVpbGQgdGhlIGNvcnJlc3BvbmRpbmdcbiAqIHNlZ21lbnQgbGlzdFxuICpcbiAqIEBuYW1lIHRvU2VnbWVudHNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gKiAgICAgICAgTnVtYmVyIG9mIHRoZSBzZWdtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqICAgICAgICBJbmRleCBvZiB0aGUgbnVtYmVyIGluIHRoZSByYW5nZSBsaXN0XG4gKiBAcmV0dXJuIHt7IG51bWJlcjogTnVtYmVyLCBkdXJhdGlvbjogTnVtYmVyLCB0aW1lbGluZTogTnVtYmVyLCB0aW1lOiBOdW1iZXIgfX1cbiAqICAgICAgICAgT2JqZWN0IHdpdGggc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBhIHJhbmdlIG9mIG51bWJlcnMgdG9cbiAqIGluZm9ybWF0aW9uIG5lZWRlZCB0byBidWlsZCB0aGUgc2VnbWVudCBsaXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgSW5oZXJpdGVkIE1QRCBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHt0b1NlZ21lbnRzQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIG1hcCBmdW5jdGlvblxuICovXG5cbnZhciB0b1NlZ21lbnRzID0gZnVuY3Rpb24gdG9TZWdtZW50cyhhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICAgICAgX2F0dHJpYnV0ZXMkdGltZXNjYWxlMyA9IGF0dHJpYnV0ZXMudGltZXNjYWxlLFxuICAgICAgICB0aW1lc2NhbGUgPSBfYXR0cmlidXRlcyR0aW1lc2NhbGUzID09PSB2b2lkIDAgPyAxIDogX2F0dHJpYnV0ZXMkdGltZXNjYWxlMyxcbiAgICAgICAgcGVyaW9kU3RhcnQgPSBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgICBfYXR0cmlidXRlcyRzdGFydE51bWIgPSBhdHRyaWJ1dGVzLnN0YXJ0TnVtYmVyLFxuICAgICAgICBzdGFydE51bWJlciA9IF9hdHRyaWJ1dGVzJHN0YXJ0TnVtYiA9PT0gdm9pZCAwID8gMSA6IF9hdHRyaWJ1dGVzJHN0YXJ0TnVtYjtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtYmVyOiBzdGFydE51bWJlciArIG51bWJlcixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIHRpbWVzY2FsZSxcbiAgICAgIHRpbWVsaW5lOiBwZXJpb2RTdGFydCxcbiAgICAgIHRpbWU6IG51bWJlciAqIGR1cmF0aW9uXG4gICAgfTtcbiAgfTtcbn07XG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mbyB1c2VkIGZvclxuICogYnVpbGRpbmcgdGhlIGxpc3Qgb2Ygc2VnbWVudHMuIFRoaXMgdXNlcyB0aGUgQGR1cmF0aW9uIGF0dHJpYnV0ZSBzcGVjaWZpZWRcbiAqIGluIHRoZSBNUEQgbWFuaWZlc3QgdG8gZGVyaXZlIHRoZSByYW5nZSBvZiBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIEluaGVyaXRlZCBNUEQgYXR0cmlidXRlc1xuICogQHJldHVybiB7e251bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHRpbWVsaW5lOiBudW1iZXJ9W119XG4gKiAgICAgICAgIExpc3Qgb2YgT2JqZWN0cyB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxudmFyIHBhcnNlQnlEdXJhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKSB7XG4gIHZhciB0eXBlID0gYXR0cmlidXRlcy50eXBlLFxuICAgICAgZHVyYXRpb24gPSBhdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgICAgX2F0dHJpYnV0ZXMkdGltZXNjYWxlNCA9IGF0dHJpYnV0ZXMudGltZXNjYWxlLFxuICAgICAgdGltZXNjYWxlID0gX2F0dHJpYnV0ZXMkdGltZXNjYWxlNCA9PT0gdm9pZCAwID8gMSA6IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTQsXG4gICAgICBwZXJpb2REdXJhdGlvbiA9IGF0dHJpYnV0ZXMucGVyaW9kRHVyYXRpb24sXG4gICAgICBzb3VyY2VEdXJhdGlvbiA9IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb247XG5cbiAgdmFyIF9zZWdtZW50UmFuZ2UkdHlwZSA9IHNlZ21lbnRSYW5nZVt0eXBlXShhdHRyaWJ1dGVzKSxcbiAgICAgIHN0YXJ0ID0gX3NlZ21lbnRSYW5nZSR0eXBlLnN0YXJ0LFxuICAgICAgZW5kID0gX3NlZ21lbnRSYW5nZSR0eXBlLmVuZDtcblxuICB2YXIgc2VnbWVudHMgPSByYW5nZShzdGFydCwgZW5kKS5tYXAodG9TZWdtZW50cyhhdHRyaWJ1dGVzKSk7XG5cbiAgaWYgKHR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgdmFyIGluZGV4ID0gc2VnbWVudHMubGVuZ3RoIC0gMTsgLy8gc2VjdGlvbiBpcyBlaXRoZXIgYSBwZXJpb2Qgb3IgdGhlIGZ1bGwgc291cmNlXG5cbiAgICB2YXIgc2VjdGlvbkR1cmF0aW9uID0gdHlwZW9mIHBlcmlvZER1cmF0aW9uID09PSAnbnVtYmVyJyA/IHBlcmlvZER1cmF0aW9uIDogc291cmNlRHVyYXRpb247IC8vIGZpbmFsIHNlZ21lbnQgbWF5IGJlIGxlc3MgdGhhbiBmdWxsIHNlZ21lbnQgZHVyYXRpb25cblxuICAgIHNlZ21lbnRzW2luZGV4XS5kdXJhdGlvbiA9IHNlY3Rpb25EdXJhdGlvbiAtIGR1cmF0aW9uIC8gdGltZXNjYWxlICogaW5kZXg7XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHM7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgU2VnbWVudEJhc2UgaW50byBhIHNldCBvZiBzZWdtZW50cy5cbiAqIChEQVNIIFNQRUMgU2VjdGlvbiA1LjMuOS4zLjIpIGNvbnRhaW5zIGEgc2V0IG9mIDxTZWdtZW50VVJMPiBub2Rlcy4gIEVhY2hcbiAqIG5vZGUgc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW50byBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICBuYW1lcyBhcyBrZXlzXG4gKiBAcmV0dXJuIHtPYmplY3QuPEFycmF5Pn0gbGlzdCBvZiBzZWdtZW50c1xuICovXG5cbnZhciBzZWdtZW50c0Zyb21CYXNlID0gZnVuY3Rpb24gc2VnbWVudHNGcm9tQmFzZShhdHRyaWJ1dGVzKSB7XG4gIHZhciBiYXNlVXJsID0gYXR0cmlidXRlcy5iYXNlVXJsLFxuICAgICAgX2F0dHJpYnV0ZXMkaW5pdGlhbGl6ID0gYXR0cmlidXRlcy5pbml0aWFsaXphdGlvbixcbiAgICAgIGluaXRpYWxpemF0aW9uID0gX2F0dHJpYnV0ZXMkaW5pdGlhbGl6ID09PSB2b2lkIDAgPyB7fSA6IF9hdHRyaWJ1dGVzJGluaXRpYWxpeixcbiAgICAgIHNvdXJjZUR1cmF0aW9uID0gYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbixcbiAgICAgIF9hdHRyaWJ1dGVzJGluZGV4UmFuZyA9IGF0dHJpYnV0ZXMuaW5kZXhSYW5nZSxcbiAgICAgIGluZGV4UmFuZ2UgPSBfYXR0cmlidXRlcyRpbmRleFJhbmcgPT09IHZvaWQgMCA/ICcnIDogX2F0dHJpYnV0ZXMkaW5kZXhSYW5nLFxuICAgICAgcGVyaW9kU3RhcnQgPSBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgcHJlc2VudGF0aW9uVGltZSA9IGF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZSxcbiAgICAgIF9hdHRyaWJ1dGVzJG51bWJlciA9IGF0dHJpYnV0ZXMubnVtYmVyLFxuICAgICAgbnVtYmVyID0gX2F0dHJpYnV0ZXMkbnVtYmVyID09PSB2b2lkIDAgPyAwIDogX2F0dHJpYnV0ZXMkbnVtYmVyLFxuICAgICAgZHVyYXRpb24gPSBhdHRyaWJ1dGVzLmR1cmF0aW9uOyAvLyBiYXNlIHVybCBpcyByZXF1aXJlZCBmb3IgU2VnbWVudEJhc2UgdG8gd29yaywgcGVyIHNwZWMgKFNlY3Rpb24gNS4zLjkuMi4xKVxuXG4gIGlmICghYmFzZVVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuTk9fQkFTRV9VUkwpO1xuICB9XG5cbiAgdmFyIGluaXRTZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybDogYmFzZVVybCxcbiAgICBzb3VyY2U6IGluaXRpYWxpemF0aW9uLnNvdXJjZVVSTCxcbiAgICByYW5nZTogaW5pdGlhbGl6YXRpb24ucmFuZ2VcbiAgfSk7XG4gIHZhciBzZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybDogYmFzZVVybCxcbiAgICBzb3VyY2U6IGJhc2VVcmwsXG4gICAgaW5kZXhSYW5nZTogaW5kZXhSYW5nZVxuICB9KTtcbiAgc2VnbWVudC5tYXAgPSBpbml0U2VnbWVudDsgLy8gSWYgdGhlcmUgaXMgYSBkdXJhdGlvbiwgdXNlIGl0LCBvdGhlcndpc2UgdXNlIHRoZSBnaXZlbiBkdXJhdGlvbiBvZiB0aGUgc291cmNlXG4gIC8vIChzaW5jZSBTZWdtZW50QmFzZSBpcyBvbmx5IGZvciBvbmUgdG90YWwgc2VnbWVudClcblxuICBpZiAoZHVyYXRpb24pIHtcbiAgICB2YXIgc2VnbWVudFRpbWVJbmZvID0gcGFyc2VCeUR1cmF0aW9uKGF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKHNlZ21lbnRUaW1lSW5mby5sZW5ndGgpIHtcbiAgICAgIHNlZ21lbnQuZHVyYXRpb24gPSBzZWdtZW50VGltZUluZm9bMF0uZHVyYXRpb247XG4gICAgICBzZWdtZW50LnRpbWVsaW5lID0gc2VnbWVudFRpbWVJbmZvWzBdLnRpbWVsaW5lO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzb3VyY2VEdXJhdGlvbikge1xuICAgIHNlZ21lbnQuZHVyYXRpb24gPSBzb3VyY2VEdXJhdGlvbjtcbiAgICBzZWdtZW50LnRpbWVsaW5lID0gcGVyaW9kU3RhcnQ7XG4gIH0gLy8gSWYgcHJlc2VudGF0aW9uIHRpbWUgaXMgcHJvdmlkZWQsIHRoZXNlIHNlZ21lbnRzIGFyZSBiZWluZyBnZW5lcmF0ZWQgYnkgU0lEWFxuICAvLyByZWZlcmVuY2VzLCBhbmQgc2hvdWxkIHVzZSB0aGUgdGltZSBwcm92aWRlZC4gRm9yIHRoZSBnZW5lcmFsIGNhc2Ugb2YgU2VnbWVudEJhc2UsXG4gIC8vIHRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSBzZWdtZW50IGluIHRoZSBwZXJpb2QsIHNvIGl0cyBwcmVzZW50YXRpb24gdGltZSBpcyB0aGUgc2FtZVxuICAvLyBhcyBpdHMgcGVyaW9kIHN0YXJ0LlxuXG5cbiAgc2VnbWVudC5wcmVzZW50YXRpb25UaW1lID0gcHJlc2VudGF0aW9uVGltZSB8fCBwZXJpb2RTdGFydDtcbiAgc2VnbWVudC5udW1iZXIgPSBudW1iZXI7XG4gIHJldHVybiBbc2VnbWVudF07XG59O1xuLyoqXG4gKiBHaXZlbiBhIHBsYXlsaXN0LCBhIHNpZHggYm94LCBhbmQgYSBiYXNlVXJsLCB1cGRhdGUgdGhlIHNlZ21lbnQgbGlzdCBvZiB0aGUgcGxheWxpc3RcbiAqIGFjY29yZGluZyB0byB0aGUgc2lkeCBpbmZvcm1hdGlvbiBnaXZlbi5cbiAqXG4gKiBwbGF5bGlzdC5zaWR4IGhhcyBtZXRhZGFkYXRhIGFib3V0IHRoZSBzaWR4IHdoZXJlLWFzIHRoZSBzaWR4IHBhcmFtXG4gKiBpcyB0aGUgcGFyc2VkIHNpZHggYm94IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGxheWxpc3QgdGhlIHBsYXlsaXN0IHRvIHVwZGF0ZSB0aGUgc2lkeCBpbmZvcm1hdGlvbiBmb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzaWR4IHRoZSBwYXJzZWQgc2lkeCBib3hcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHBsYXlsaXN0IG9iamVjdCB3aXRoIHRoZSB1cGRhdGVkIHNpZHggaW5mb3JtYXRpb25cbiAqL1xuXG52YXIgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCQxID0gZnVuY3Rpb24gYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChwbGF5bGlzdCwgc2lkeCwgYmFzZVVybCkge1xuICAvLyBSZXRhaW4gaW5pdCBzZWdtZW50IGluZm9ybWF0aW9uXG4gIHZhciBpbml0U2VnbWVudCA9IHBsYXlsaXN0LnNpZHgubWFwID8gcGxheWxpc3Quc2lkeC5tYXAgOiBudWxsOyAvLyBSZXRhaW4gc291cmNlIGR1cmF0aW9uIGZyb20gaW5pdGlhbCBtYWluIG1hbmlmZXN0IHBhcnNpbmdcblxuICB2YXIgc291cmNlRHVyYXRpb24gPSBwbGF5bGlzdC5zaWR4LmR1cmF0aW9uOyAvLyBSZXRhaW4gc291cmNlIHRpbWVsaW5lXG5cbiAgdmFyIHRpbWVsaW5lID0gcGxheWxpc3QudGltZWxpbmUgfHwgMDtcbiAgdmFyIHNpZHhCeXRlUmFuZ2UgPSBwbGF5bGlzdC5zaWR4LmJ5dGVyYW5nZTtcbiAgdmFyIHNpZHhFbmQgPSBzaWR4Qnl0ZVJhbmdlLm9mZnNldCArIHNpZHhCeXRlUmFuZ2UubGVuZ3RoOyAvLyBSZXRhaW4gdGltZXNjYWxlIG9mIHRoZSBwYXJzZWQgc2lkeFxuXG4gIHZhciB0aW1lc2NhbGUgPSBzaWR4LnRpbWVzY2FsZTsgLy8gcmVmZXJlbmNlVHlwZSAxIHJlZmVycyB0byBvdGhlciBzaWR4IGJveGVzXG5cbiAgdmFyIG1lZGlhUmVmZXJlbmNlcyA9IHNpZHgucmVmZXJlbmNlcy5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gci5yZWZlcmVuY2VUeXBlICE9PSAxO1xuICB9KTtcbiAgdmFyIHNlZ21lbnRzID0gW107XG4gIHZhciB0eXBlID0gcGxheWxpc3QuZW5kTGlzdCA/ICdzdGF0aWMnIDogJ2R5bmFtaWMnO1xuICB2YXIgcGVyaW9kU3RhcnQgPSBwbGF5bGlzdC5zaWR4LnRpbWVsaW5lO1xuICB2YXIgcHJlc2VudGF0aW9uVGltZSA9IHBlcmlvZFN0YXJ0O1xuICB2YXIgbnVtYmVyID0gcGxheWxpc3QubWVkaWFTZXF1ZW5jZSB8fCAwOyAvLyBmaXJzdE9mZnNldCBpcyB0aGUgb2Zmc2V0IGZyb20gdGhlIGVuZCBvZiB0aGUgc2lkeCBib3hcblxuICB2YXIgc3RhcnRJbmRleDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgaWYgKHR5cGVvZiBzaWR4LmZpcnN0T2Zmc2V0ID09PSAnYmlnaW50Jykge1xuICAgIHN0YXJ0SW5kZXggPSB3aW5kb3cuQmlnSW50KHNpZHhFbmQpICsgc2lkeC5maXJzdE9mZnNldDtcbiAgfSBlbHNlIHtcbiAgICBzdGFydEluZGV4ID0gc2lkeEVuZCArIHNpZHguZmlyc3RPZmZzZXQ7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1lZGlhUmVmZXJlbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByZWZlcmVuY2UgPSBzaWR4LnJlZmVyZW5jZXNbaV07IC8vIHNpemUgb2YgdGhlIHJlZmVyZW5jZWQgKHN1YilzZWdtZW50XG5cbiAgICB2YXIgc2l6ZSA9IHJlZmVyZW5jZS5yZWZlcmVuY2VkU2l6ZTsgLy8gZHVyYXRpb24gb2YgdGhlIHJlZmVyZW5jZWQgKHN1YilzZWdtZW50LCBpbiAgdGhlICB0aW1lc2NhbGVcbiAgICAvLyB0aGlzIHdpbGwgYmUgY29udmVydGVkIHRvIHNlY29uZHMgd2hlbiBnZW5lcmF0aW5nIHNlZ21lbnRzXG5cbiAgICB2YXIgZHVyYXRpb24gPSByZWZlcmVuY2Uuc3Vic2VnbWVudER1cmF0aW9uOyAvLyBzaG91bGQgYmUgYW4gaW5jbHVzaXZlIHJhbmdlXG5cbiAgICB2YXIgZW5kSW5kZXggPSB2b2lkIDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgaWYgKHR5cGVvZiBzdGFydEluZGV4ID09PSAnYmlnaW50Jykge1xuICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgd2luZG93LkJpZ0ludChzaXplKSAtIHdpbmRvdy5CaWdJbnQoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHNpemUgLSAxO1xuICAgIH1cblxuICAgIHZhciBpbmRleFJhbmdlID0gc3RhcnRJbmRleCArIFwiLVwiICsgZW5kSW5kZXg7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgICBiYXNlVXJsOiBiYXNlVXJsLFxuICAgICAgdGltZXNjYWxlOiB0aW1lc2NhbGUsXG4gICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICBwZXJpb2RTdGFydDogcGVyaW9kU3RhcnQsXG4gICAgICBwcmVzZW50YXRpb25UaW1lOiBwcmVzZW50YXRpb25UaW1lLFxuICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBzb3VyY2VEdXJhdGlvbjogc291cmNlRHVyYXRpb24sXG4gICAgICBpbmRleFJhbmdlOiBpbmRleFJhbmdlLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH07XG4gICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c0Zyb21CYXNlKGF0dHJpYnV0ZXMpWzBdO1xuXG4gICAgaWYgKGluaXRTZWdtZW50KSB7XG4gICAgICBzZWdtZW50Lm1hcCA9IGluaXRTZWdtZW50O1xuICAgIH1cblxuICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG5cbiAgICBpZiAodHlwZW9mIHN0YXJ0SW5kZXggPT09ICdiaWdpbnQnKSB7XG4gICAgICBzdGFydEluZGV4ICs9IHdpbmRvdy5CaWdJbnQoc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0SW5kZXggKz0gc2l6ZTtcbiAgICB9XG5cbiAgICBwcmVzZW50YXRpb25UaW1lICs9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xuICAgIG51bWJlcisrO1xuICB9XG5cbiAgcGxheWxpc3Quc2VnbWVudHMgPSBzZWdtZW50cztcbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcblxudmFyIFNVUFBPUlRFRF9NRURJQV9UWVBFUyA9IFsnQVVESU8nLCAnU1VCVElUTEVTJ107IC8vIGFsbG93IG9uZSA2MGZwcyBmcmFtZSBhcyBsZW5pZW5jeSAoYXJiaXRyYXJpbHkgY2hvc2VuKVxuXG52YXIgVElNRV9GVURHRSA9IDEgLyA2MDtcbi8qKlxuICogR2l2ZW4gYSBsaXN0IG9mIHRpbWVsaW5lU3RhcnRzLCBjb21iaW5lcywgZGVkdXBlcywgYW5kIHNvcnRzIHRoZW0uXG4gKlxuICogQHBhcmFtIHtUaW1lbGluZVN0YXJ0W119IHRpbWVsaW5lU3RhcnRzIC0gbGlzdCBvZiB0aW1lbGluZSBzdGFydHNcbiAqXG4gKiBAcmV0dXJuIHtUaW1lbGluZVN0YXJ0W119IHRoZSBjb21iaW5lZCBhbmQgZGVkdXBlZCB0aW1lbGluZSBzdGFydHNcbiAqL1xuXG52YXIgZ2V0VW5pcXVlVGltZWxpbmVTdGFydHMgPSBmdW5jdGlvbiBnZXRVbmlxdWVUaW1lbGluZVN0YXJ0cyh0aW1lbGluZVN0YXJ0cykge1xuICByZXR1cm4gdW5pb24odGltZWxpbmVTdGFydHMsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICByZXR1cm4gdGltZWxpbmU7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS50aW1lbGluZSA+IGIudGltZWxpbmUgPyAxIDogLTE7XG4gIH0pO1xufTtcbi8qKlxuICogRmluZHMgdGhlIHBsYXlsaXN0IHdpdGggdGhlIG1hdGNoaW5nIE5BTUUgYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBsYXlsaXN0cyAtIHBsYXlsaXN0cyB0byBzZWFyY2ggdGhyb3VnaFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB0aGUgTkFNRSBhdHRyaWJ1dGUgdG8gc2VhcmNoIGZvclxuICpcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfSB0aGUgbWF0Y2hpbmcgcGxheWxpc3Qgb2JqZWN0LCBvciBudWxsXG4gKi9cblxudmFyIGZpbmRQbGF5bGlzdFdpdGhOYW1lID0gZnVuY3Rpb24gZmluZFBsYXlsaXN0V2l0aE5hbWUocGxheWxpc3RzLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBsYXlsaXN0c1tpXS5hdHRyaWJ1dGVzLk5BTUUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBwbGF5bGlzdHNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuLyoqXG4gKiBHZXRzIGEgZmxhdHRlbmVkIGFycmF5IG9mIG1lZGlhIGdyb3VwIHBsYXlsaXN0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgLSB0aGUgbWFpbiBtYW5pZmVzdCBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIG1lZGlhIGdyb3VwIHBsYXlsaXN0c1xuICovXG5cbnZhciBnZXRNZWRpYUdyb3VwUGxheWxpc3RzID0gZnVuY3Rpb24gZ2V0TWVkaWFHcm91cFBsYXlsaXN0cyhtYW5pZmVzdCkge1xuICB2YXIgbWVkaWFHcm91cFBsYXlsaXN0cyA9IFtdO1xuICBmb3JFYWNoTWVkaWFHcm91cChtYW5pZmVzdCwgU1VQUE9SVEVEX01FRElBX1RZUEVTLCBmdW5jdGlvbiAocHJvcGVydGllcywgdHlwZSwgZ3JvdXAsIGxhYmVsKSB7XG4gICAgbWVkaWFHcm91cFBsYXlsaXN0cyA9IG1lZGlhR3JvdXBQbGF5bGlzdHMuY29uY2F0KHByb3BlcnRpZXMucGxheWxpc3RzIHx8IFtdKTtcbiAgfSk7XG4gIHJldHVybiBtZWRpYUdyb3VwUGxheWxpc3RzO1xufTtcbi8qKlxuICogVXBkYXRlcyB0aGUgcGxheWxpc3QncyBtZWRpYSBzZXF1ZW5jZSBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBvcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5wbGF5bGlzdCAtIHRoZSBwbGF5bGlzdCB0byB1cGRhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcubWVkaWFTZXF1ZW5jZSAtIHRoZSBtZWRpYVNlcXVlbmNlIG51bWJlciB0byBzdGFydCB3aXRoXG4gKi9cblxudmFyIHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdCA9IGZ1bmN0aW9uIHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdChfcmVmMikge1xuICB2YXIgcGxheWxpc3QgPSBfcmVmMi5wbGF5bGlzdCxcbiAgICAgIG1lZGlhU2VxdWVuY2UgPSBfcmVmMi5tZWRpYVNlcXVlbmNlO1xuICBwbGF5bGlzdC5tZWRpYVNlcXVlbmNlID0gbWVkaWFTZXF1ZW5jZTtcbiAgcGxheWxpc3Quc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCwgaW5kZXgpIHtcbiAgICBzZWdtZW50Lm51bWJlciA9IHBsYXlsaXN0Lm1lZGlhU2VxdWVuY2UgKyBpbmRleDtcbiAgfSk7XG59O1xuLyoqXG4gKiBVcGRhdGVzIHRoZSBtZWRpYSBhbmQgZGlzY29udGludWl0eSBzZXF1ZW5jZSBudW1iZXJzIG9mIG5ld1BsYXlsaXN0cyBnaXZlbiBvbGRQbGF5bGlzdHNcbiAqIGFuZCBhIGNvbXBsZXRlIGxpc3Qgb2YgdGltZWxpbmUgc3RhcnRzLlxuICpcbiAqIElmIG5vIG1hdGNoaW5nIHBsYXlsaXN0IGlzIGZvdW5kLCBvbmx5IHRoZSBkaXNjb250aW51aXR5IHNlcXVlbmNlIG51bWJlciBvZiB0aGUgcGxheWxpc3RcbiAqIHdpbGwgYmUgdXBkYXRlZC5cbiAqXG4gKiBTaW5jZSBlYXJseSBhdmFpbGFibGUgdGltZWxpbmVzIGFyZSBub3Qgc3VwcG9ydGVkLCBhdCBsZWFzdCBvbmUgc2VnbWVudCBtdXN0IGJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIG9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdFtdfSBvbGRQbGF5bGlzdHMgLSB0aGUgb2xkIHBsYXlsaXN0cyB0byB1c2UgYXMgYSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7T2JqZWN0W119IG5ld1BsYXlsaXN0cyAtIHRoZSBuZXcgcGxheWxpc3RzIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVsaW5lU3RhcnRzIC0gYWxsIHRpbWVsaW5lU3RhcnRzIHNlZW4gaW4gdGhlIHN0cmVhbSB0byB0aGlzIHBvaW50XG4gKi9cblxudmFyIHVwZGF0ZVNlcXVlbmNlTnVtYmVycyA9IGZ1bmN0aW9uIHVwZGF0ZVNlcXVlbmNlTnVtYmVycyhfcmVmMykge1xuICB2YXIgb2xkUGxheWxpc3RzID0gX3JlZjMub2xkUGxheWxpc3RzLFxuICAgICAgbmV3UGxheWxpc3RzID0gX3JlZjMubmV3UGxheWxpc3RzLFxuICAgICAgdGltZWxpbmVTdGFydHMgPSBfcmVmMy50aW1lbGluZVN0YXJ0cztcbiAgbmV3UGxheWxpc3RzLmZvckVhY2goZnVuY3Rpb24gKHBsYXlsaXN0KSB7XG4gICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlID0gZmluZEluZGV4KHRpbWVsaW5lU3RhcnRzLCBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgIHZhciB0aW1lbGluZSA9IF9yZWY0LnRpbWVsaW5lO1xuICAgICAgcmV0dXJuIHRpbWVsaW5lID09PSBwbGF5bGlzdC50aW1lbGluZTtcbiAgICB9KTsgLy8gUGxheWxpc3RzIE5BTUVzIGNvbWUgZnJvbSBEQVNIIFJlcHJlc2VudGF0aW9uIElEcywgd2hpY2ggYXJlIG1hbmRhdG9yeVxuICAgIC8vIChzZWUgSVNPXzIzMDA5LTEtMjAxMiA1LjMuNS4yKS5cbiAgICAvL1xuICAgIC8vIElmIHRoZSBzYW1lIFJlcHJlc2VudGF0aW9uIGV4aXN0ZWQgaW4gYSBwcmlvciBQZXJpb2QsIGl0IHdpbGwgcmV0YWluIHRoZSBzYW1lIE5BTUUuXG5cbiAgICB2YXIgb2xkUGxheWxpc3QgPSBmaW5kUGxheWxpc3RXaXRoTmFtZShvbGRQbGF5bGlzdHMsIHBsYXlsaXN0LmF0dHJpYnV0ZXMuTkFNRSk7XG5cbiAgICBpZiAoIW9sZFBsYXlsaXN0KSB7XG4gICAgICAvLyBTaW5jZSB0aGlzIGlzIGEgbmV3IHBsYXlsaXN0LCB0aGUgbWVkaWEgc2VxdWVuY2UgdmFsdWVzIGNhbiBzdGFydCBmcm9tIDAgd2l0aG91dFxuICAgICAgLy8gY29uc2VxdWVuY2UuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUT0RPIGJldHRlciBzdXBwb3J0IGZvciBsaXZlIFNJRFhcbiAgICAvL1xuICAgIC8vIEFzIG9mIHRoaXMgd3JpdGluZywgbXBkLXBhcnNlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGVyaW9kIFNJRFggKGluIGxpdmUgb3IgVk9EKS5cbiAgICAvLyBUaGlzIGlzIGV2aWRlbnQgYnkgYSBwbGF5bGlzdCBvbmx5IGhhdmluZyBhIHNpbmdsZSBTSURYIHJlZmVyZW5jZS4gSW4gYSBtdWx0aXBlcmlvZFxuICAgIC8vIHBsYXlsaXN0IHRoZXJlIHdvdWxkIG5lZWQgdG8gYmUgbXVsdGlwbGUgU0lEWCByZWZlcmVuY2VzLiBJbiBhZGRpdGlvbiwgbGl2ZSBTSURYIGlzXG4gICAgLy8gbm90IHN1cHBvcnRlZCB3aGVuIHRoZSBTSURYIHByb3BlcnRpZXMgY2hhbmdlIG9uIHJlZnJlc2hlcy5cbiAgICAvL1xuICAgIC8vIEluIHRoZSBmdXR1cmUsIGlmIHN1cHBvcnQgbmVlZHMgdG8gYmUgYWRkZWQsIHRoZSBtZXJnaW5nIGxvZ2ljIGhlcmUgY2FuIGJlIGNhbGxlZFxuICAgIC8vIGFmdGVyIFNJRFggcmVmZXJlbmNlcyBhcmUgcmVzb2x2ZWQuIEZvciBub3csIGV4aXQgZWFybHkgdG8gcHJldmVudCBleGNlcHRpb25zIGJlaW5nXG4gICAgLy8gdGhyb3duIGR1ZSB0byB1bmRlZmluZWQgcmVmZXJlbmNlcy5cblxuXG4gICAgaWYgKHBsYXlsaXN0LnNpZHgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFNpbmNlIHdlIGRvbid0IHlldCBzdXBwb3J0IGVhcmx5IGF2YWlsYWJsZSB0aW1lbGluZXMsIHdlIGRvbid0IG5lZWQgdG8gc3VwcG9ydFxuICAgIC8vIHBsYXlsaXN0cyB3aXRoIG5vIHNlZ21lbnRzLlxuXG5cbiAgICB2YXIgZmlyc3ROZXdTZWdtZW50ID0gcGxheWxpc3Quc2VnbWVudHNbMF07XG4gICAgdmFyIG9sZE1hdGNoaW5nU2VnbWVudEluZGV4ID0gZmluZEluZGV4KG9sZFBsYXlsaXN0LnNlZ21lbnRzLCBmdW5jdGlvbiAob2xkU2VnbWVudCkge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKG9sZFNlZ21lbnQucHJlc2VudGF0aW9uVGltZSAtIGZpcnN0TmV3U2VnbWVudC5wcmVzZW50YXRpb25UaW1lKSA8IFRJTUVfRlVER0U7XG4gICAgfSk7IC8vIE5vIG1hdGNoaW5nIHNlZ21lbnQgZnJvbSB0aGUgb2xkIHBsYXlsaXN0IG1lYW5zIHRoZSBlbnRpcmUgcGxheWxpc3Qgd2FzIHJlZnJlc2hlZC5cbiAgICAvLyBJbiB0aGlzIGNhc2UgdGhlIG1lZGlhIHNlcXVlbmNlIHNob3VsZCBhY2NvdW50IGZvciB0aGlzIHVwZGF0ZSwgYW5kIHRoZSBuZXcgc2VnbWVudHNcbiAgICAvLyBzaG91bGQgYmUgbWFya2VkIGFzIGRpc2NvbnRpbnVvdXMgZnJvbSB0aGUgcHJpb3IgY29udGVudCwgc2luY2UgdGhlIGxhc3QgcHJpb3JcbiAgICAvLyB0aW1lbGluZSB3YXMgcmVtb3ZlZC5cblxuICAgIGlmIChvbGRNYXRjaGluZ1NlZ21lbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdCh7XG4gICAgICAgIHBsYXlsaXN0OiBwbGF5bGlzdCxcbiAgICAgICAgbWVkaWFTZXF1ZW5jZTogb2xkUGxheWxpc3QubWVkaWFTZXF1ZW5jZSArIG9sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aFxuICAgICAgfSk7XG4gICAgICBwbGF5bGlzdC5zZWdtZW50c1swXS5kaXNjb250aW51aXR5ID0gdHJ1ZTtcbiAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTdGFydHMudW5zaGlmdCgwKTsgLy8gTm8gbWF0Y2hpbmcgc2VnbWVudCBkb2VzIG5vdCBuZWNlc3NhcmlseSBtZWFuIHRoZXJlJ3MgbWlzc2luZyBjb250ZW50LlxuICAgICAgLy9cbiAgICAgIC8vIElmIHRoZSBuZXcgcGxheWxpc3QncyB0aW1lbGluZSBpcyB0aGUgc2FtZSBhcyB0aGUgbGFzdCBzZWVuIHNlZ21lbnQncyB0aW1lbGluZSxcbiAgICAgIC8vIHRoZW4gYSBkaXNjb250aW51aXR5IGNhbiBiZSBhZGRlZCB0byBpZGVudGlmeSB0aGF0IHRoZXJlJ3MgcG90ZW50aWFsbHkgbWlzc2luZ1xuICAgICAgLy8gY29udGVudC4gSWYgdGhlcmUncyBubyBtaXNzaW5nIGNvbnRlbnQsIHRoZSBkaXNjb250aW51aXR5IHNob3VsZCBzdGlsbCBiZSByYXRoZXJcbiAgICAgIC8vIGhhcm1sZXNzLiBJdCdzIHBvc3NpYmxlIHRoYXQgaWYgc2VnbWVudCBkdXJhdGlvbnMgYXJlIGFjY3VyYXRlIGVub3VnaCwgdGhhdCB0aGVcbiAgICAgIC8vIGV4aXN0ZW5jZSBvZiBhIGdhcCBjYW4gYmUgZGV0ZXJtaW5lZCB1c2luZyB0aGUgcHJlc2VudGF0aW9uIHRpbWVzIGFuZCBkdXJhdGlvbnMsXG4gICAgICAvLyBidXQgaWYgdGhlIHNlZ21lbnQgdGltaW5nIGluZm8gaXMgb2ZmLCBpdCBtYXkgaW50cm9kdWNlIG1vcmUgcHJvYmxlbXMgdGhhbiBzaW1wbHlcbiAgICAgIC8vIGFkZGluZyB0aGUgZGlzY29udGludWl0eS5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgbmV3IHBsYXlsaXN0J3MgdGltZWxpbmUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGxhc3Qgc2VlbiBzZWdtZW50J3MgdGltZWxpbmUsXG4gICAgICAvLyB0aGVuIGEgZGlzY29udGludWl0eSBjYW4gYmUgYWRkZWQgdG8gaWRlbnRpZnkgdGhhdCB0aGlzIGlzIHRoZSBmaXJzdCBzZWVuIHNlZ21lbnRcbiAgICAgIC8vIG9mIGEgbmV3IHRpbWVsaW5lLiBIb3dldmVyLCB0aGUgbG9naWMgYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb24gdGhhdFxuICAgICAgLy8gZGV0ZXJtaW5lZCB0aGUgZGlzY29uaW51aXR5IHNlcXVlbmNlIGJ5IHRpbWVsaW5lIGluZGV4IGlzIG5vdyBvZmYgYnkgb25lICh0aGVcbiAgICAgIC8vIGRpc2NvbnRpbnVpdHkgb2YgdGhlIG5ld2VzdCB0aW1lbGluZSBoYXNuJ3QgeWV0IGZhbGxlbiBvZmYgdGhlIG1hbmlmZXN0Li4uc2luY2VcbiAgICAgIC8vIHdlIGFkZGVkIGl0KSwgc28gdGhlIGRpc2NvbmludWl0eSBzZXF1ZW5jZSBtdXN0IGJlIGRlY3JlbWVudGVkLlxuICAgICAgLy9cbiAgICAgIC8vIEEgcGVyaW9kIG1heSBhbHNvIGhhdmUgYSBkdXJhdGlvbiBvZiB6ZXJvLCBzbyB0aGUgY2FzZSBvZiBubyBzZWdtZW50cyBpcyBoYW5kbGVkXG4gICAgICAvLyBoZXJlIGV2ZW4gdGhvdWdoIHdlIGRvbid0IHlldCBzdXBwb3J0IGVhcmx5IGF2YWlsYWJsZSBwZXJpb2RzLlxuXG4gICAgICBpZiAoIW9sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aCAmJiBwbGF5bGlzdC50aW1lbGluZSA+IG9sZFBsYXlsaXN0LnRpbWVsaW5lIHx8IG9sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aCAmJiBwbGF5bGlzdC50aW1lbGluZSA+IG9sZFBsYXlsaXN0LnNlZ21lbnRzW29sZFBsYXlsaXN0LnNlZ21lbnRzLmxlbmd0aCAtIDFdLnRpbWVsaW5lKSB7XG4gICAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZS0tO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB0aGUgZmlyc3Qgc2VnbWVudCBtYXRjaGVkIHdpdGggYSBwcmlvciBzZWdtZW50IG9uIGEgZGlzY29udGludWl0eSAoaXQncyBtYXRjaGluZ1xuICAgIC8vIG9uIHRoZSBmaXJzdCBzZWdtZW50IG9mIGEgcGVyaW9kKSwgdGhlbiB0aGUgZGlzY29udGludWl0eVNlcXVlbmNlIHNob3VsZG4ndCBiZSB0aGVcbiAgICAvLyB0aW1lbGluZSdzIG1hdGNoaW5nIG9uZSwgYnV0IGluc3RlYWQgc2hvdWxkIGJlIHRoZSBvbmUgcHJpb3IsIGFuZCB0aGUgZmlyc3Qgc2VnbWVudFxuICAgIC8vIG9mIHRoZSBuZXcgbWFuaWZlc3Qgc2hvdWxkIGJlIG1hcmtlZCB3aXRoIGEgZGlzY29udGludWl0eS5cbiAgICAvL1xuICAgIC8vIFRoZSByZWFzb24gZm9yIHRoaXMgc3BlY2lhbCBjYXNlIGlzIHRoYXQgZGlzY29udGludWl0eSBzZXF1ZW5jZSBzaG93cyBob3cgbWFueVxuICAgIC8vIGRpc2NvbnRpbnVpdGllcyBoYXZlIGZhbGxlbiBvZmYgb2YgdGhlIHBsYXlsaXN0LCBhbmQgZGlzY29udGludWl0aWVzIGFyZSBtYXJrZWQgb25cbiAgICAvLyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIG5ldyBcInRpbWVsaW5lLlwiIEJlY2F1c2Ugb2YgdGhpcywgd2hpbGUgREFTSCB3aWxsIHJldGFpbiB0aGF0XG4gICAgLy8gUGVyaW9kIHdoaWxlIHRoZSBcInRpbWVsaW5lXCIgZXhpc3RzLCBITFMga2VlcHMgdHJhY2sgb2YgaXQgdmlhIHRoZSBkaXNjb250aW51aXR5XG4gICAgLy8gc2VxdWVuY2UsIGFuZCB0aGF0IGZpcnN0IHNlZ21lbnQgaXMgYW4gaW5kaWNhdG9yLCBidXQgY2FuIGJlIHJlbW92ZWQgYmVmb3JlIHRoYXRcbiAgICAvLyB0aW1lbGluZSBpcyBnb25lLlxuXG5cbiAgICB2YXIgb2xkTWF0Y2hpbmdTZWdtZW50ID0gb2xkUGxheWxpc3Quc2VnbWVudHNbb2xkTWF0Y2hpbmdTZWdtZW50SW5kZXhdO1xuXG4gICAgaWYgKG9sZE1hdGNoaW5nU2VnbWVudC5kaXNjb250aW51aXR5ICYmICFmaXJzdE5ld1NlZ21lbnQuZGlzY29udGludWl0eSkge1xuICAgICAgZmlyc3ROZXdTZWdtZW50LmRpc2NvbnRpbnVpdHkgPSB0cnVlO1xuICAgICAgcGxheWxpc3QuZGlzY29udGludWl0eVN0YXJ0cy51bnNoaWZ0KDApO1xuICAgICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlLS07XG4gICAgfVxuXG4gICAgdXBkYXRlTWVkaWFTZXF1ZW5jZUZvclBsYXlsaXN0KHtcbiAgICAgIHBsYXlsaXN0OiBwbGF5bGlzdCxcbiAgICAgIG1lZGlhU2VxdWVuY2U6IG9sZFBsYXlsaXN0LnNlZ21lbnRzW29sZE1hdGNoaW5nU2VnbWVudEluZGV4XS5udW1iZXJcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhbiBvbGQgcGFyc2VkIG1hbmlmZXN0IG9iamVjdCBhbmQgYSBuZXcgcGFyc2VkIG1hbmlmZXN0IG9iamVjdCwgdXBkYXRlcyB0aGVcbiAqIHNlcXVlbmNlIGFuZCB0aW1pbmcgdmFsdWVzIHdpdGhpbiB0aGUgbmV3IG1hbmlmZXN0IHRvIGVuc3VyZSB0aGF0IGl0IGxpbmVzIHVwIHdpdGggdGhlXG4gKiBvbGQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gb2xkTWFuaWZlc3QgLSB0aGUgb2xkIG1haW4gbWFuaWZlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge0FycmF5fSBuZXdNYW5pZmVzdCAtIHRoZSBuZXcgbWFpbiBtYW5pZmVzdCBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB1cGRhdGVkIG5ldyBtYW5pZmVzdCBvYmplY3RcbiAqL1xuXG52YXIgcG9zaXRpb25NYW5pZmVzdE9uVGltZWxpbmUgPSBmdW5jdGlvbiBwb3NpdGlvbk1hbmlmZXN0T25UaW1lbGluZShfcmVmNSkge1xuICB2YXIgb2xkTWFuaWZlc3QgPSBfcmVmNS5vbGRNYW5pZmVzdCxcbiAgICAgIG5ld01hbmlmZXN0ID0gX3JlZjUubmV3TWFuaWZlc3Q7XG4gIC8vIFN0YXJ0aW5nIGZyb20gdjQuMS4yIG9mIHRoZSBJT1AsIHNlY3Rpb24gNC40LjMuMyBzdGF0ZXM6XG4gIC8vXG4gIC8vIFwiTVBEQGF2YWlsYWJpbGl0eVN0YXJ0VGltZSBhbmQgUGVyaW9kQHN0YXJ0IHNoYWxsIG5vdCBiZSBjaGFuZ2VkIG92ZXIgTVBEIHVwZGF0ZXMuXCJcbiAgLy9cbiAgLy8gVGhpcyB3YXMgYWRkZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRGFzaC1JbmR1c3RyeS1Gb3J1bS9EQVNILUlGLUlPUC9pc3N1ZXMvMTYwXG4gIC8vXG4gIC8vIEJlY2F1c2Ugb2YgdGhpcyBjaGFuZ2UsIGFuZCB0aGUgZGlmZmljdWx0eSBvZiBzdXBwb3J0aW5nIHBlcmlvZHMgd2l0aCBjaGFuZ2luZyBzdGFydFxuICAvLyB0aW1lcywgcGVyaW9kcyB3aXRoIGNoYW5naW5nIHN0YXJ0IHRpbWVzIGFyZSBub3Qgc3VwcG9ydGVkLiBUaGlzIG1ha2VzIHRoZSBsb2dpYyBtdWNoXG4gIC8vIHNpbXBsZXIsIHNpbmNlIHBlcmlvZHMgd2l0aCB0aGUgc2FtZSBzdGFydCB0aW1lIGNhbiBiZSBjb25zaWRlcnJlZCB0aGUgc2FtZSBwZXJpb2RcbiAgLy8gYWNyb3NzIHJlZnJlc2hlcy5cbiAgLy9cbiAgLy8gVG8gZ2l2ZSBhbiBleGFtcGxlIGFzIHRvIHRoZSBkaWZmaWN1bHR5IG9mIGhhbmRsaW5nIHBlcmlvZHMgd2hlcmUgdGhlIHN0YXJ0IHRpbWUgbWF5XG4gIC8vIGNoYW5nZSwgaWYgYSBzaW5nbGUgcGVyaW9kIG1hbmlmZXN0IGlzIHJlZnJlc2hlZCB3aXRoIGFub3RoZXIgbWFuaWZlc3Qgd2l0aCBhIHNpbmdsZVxuICAvLyBwZXJpb2QsIGFuZCBib3RoIHRoZSBzdGFydCBhbmQgZW5kIHRpbWVzIGFyZSBpbmNyZWFzZWQsIHRoZW4gdGhlIG9ubHkgd2F5IHRvIGRldGVybWluZVxuICAvLyBpZiBpdCdzIGEgbmV3IHBlcmlvZCBvciBhbiBvbGQgb25lIHRoYXQgaGFzIGNoYW5nZWQgaXMgdG8gbG9vayB0aHJvdWdoIHRoZSBzZWdtZW50cyBvZlxuICAvLyBlYWNoIHBsYXlsaXN0IGFuZCBkZXRlcm1pbmUgdGhlIHByZXNlbnRhdGlvbiB0aW1lIGJvdW5kcyB0byBmaW5kIGEgbWF0Y2guIEluIGFkZGl0aW9uLFxuICAvLyBpZiB0aGUgcGVyaW9kIHN0YXJ0IGNoYW5nZWQgdG8gZXhjZWVkIHRoZSBvbGQgcGVyaW9kIGVuZCwgdGhlbiB0aGVyZSB3b3VsZCBiZSBub1xuICAvLyBtYXRjaCwgYW5kIGl0IHdvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcmVmcmVzaGVkIHBlcmlvZCBpcyBhIG5ld1xuICAvLyBvbmUgb3IgdGhlIG9sZCBvbmUuXG4gIHZhciBvbGRQbGF5bGlzdHMgPSBvbGRNYW5pZmVzdC5wbGF5bGlzdHMuY29uY2F0KGdldE1lZGlhR3JvdXBQbGF5bGlzdHMob2xkTWFuaWZlc3QpKTtcbiAgdmFyIG5ld1BsYXlsaXN0cyA9IG5ld01hbmlmZXN0LnBsYXlsaXN0cy5jb25jYXQoZ2V0TWVkaWFHcm91cFBsYXlsaXN0cyhuZXdNYW5pZmVzdCkpOyAvLyBTYXZlIGFsbCBzZWVuIHRpbWVsaW5lU3RhcnRzIHRvIHRoZSBuZXcgbWFuaWZlc3QuIEFsdGhvdWdoIHRoaXMgcG90ZW50aWFsbHkgbWVhbnMgdGhhdFxuICAvLyB0aGVyZSdzIGEgXCJtZW1vcnkgbGVha1wiIGluIHRoYXQgaXQgd2lsbCBuZXZlciBzdG9wIGdyb3dpbmcsIGluIHJlYWxpdHksIG9ubHkgYSBjb3VwbGVcbiAgLy8gb2YgcHJvcGVydGllcyBhcmUgc2F2ZWQgZm9yIGVhY2ggc2VlbiBQZXJpb2QuIEV2ZW4gbG9uZyBydW5uaW5nIGxpdmUgc3RyZWFtcyB3b24ndFxuICAvLyBnZW5lcmF0ZSB0b28gbWFueSBQZXJpb2RzLCB1bmxlc3MgdGhlIHN0cmVhbSBpcyB3YXRjaGVkIGZvciBkZWNhZGVzLiBJbiB0aGUgZnV0dXJlLFxuICAvLyB0aGlzIGNhbiBiZSBvcHRpbWl6ZWQgYnkgbWFwcGluZyB0byBkaXNjb250aW51aXR5IHNlcXVlbmNlIG51bWJlcnMgZm9yIGVhY2ggdGltZWxpbmUsXG4gIC8vIGJ1dCBpdCBtYXkgbm90IGJlY29tZSBhbiBpc3N1ZSwgYW5kIHRoZSBhZGRpdGlvbmFsIGluZm8gY2FuIGJlIHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuXG4gIG5ld01hbmlmZXN0LnRpbWVsaW5lU3RhcnRzID0gZ2V0VW5pcXVlVGltZWxpbmVTdGFydHMoW29sZE1hbmlmZXN0LnRpbWVsaW5lU3RhcnRzLCBuZXdNYW5pZmVzdC50aW1lbGluZVN0YXJ0c10pO1xuICB1cGRhdGVTZXF1ZW5jZU51bWJlcnMoe1xuICAgIG9sZFBsYXlsaXN0czogb2xkUGxheWxpc3RzLFxuICAgIG5ld1BsYXlsaXN0czogbmV3UGxheWxpc3RzLFxuICAgIHRpbWVsaW5lU3RhcnRzOiBuZXdNYW5pZmVzdC50aW1lbGluZVN0YXJ0c1xuICB9KTtcbiAgcmV0dXJuIG5ld01hbmlmZXN0O1xufTtcblxudmFyIGdlbmVyYXRlU2lkeEtleSA9IGZ1bmN0aW9uIGdlbmVyYXRlU2lkeEtleShzaWR4KSB7XG4gIHJldHVybiBzaWR4ICYmIHNpZHgudXJpICsgJy0nICsgYnl0ZVJhbmdlVG9TdHJpbmcoc2lkeC5ieXRlcmFuZ2UpO1xufTtcblxudmFyIG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyA9IGZ1bmN0aW9uIG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhwbGF5bGlzdHMpIHtcbiAgdmFyIG1lcmdlZFBsYXlsaXN0cyA9IHZhbHVlcyhwbGF5bGlzdHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYXlsaXN0KSB7XG4gICAgLy8gYXNzdW1pbmcgcGxheWxpc3QgSURzIGFyZSB0aGUgc2FtZSBhY3Jvc3MgcGVyaW9kc1xuICAgIC8vIFRPRE86IGhhbmRsZSBtdWx0aXBlcmlvZCB3aGVyZSByZXByZXNlbnRhdGlvbiBzZXRzIGFyZSBub3QgdGhlIHNhbWVcbiAgICAvLyBhY3Jvc3MgcGVyaW9kc1xuICAgIHZhciBuYW1lID0gcGxheWxpc3QuYXR0cmlidXRlcy5pZCArIChwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgfHwgJycpO1xuXG4gICAgaWYgKCFhY2NbbmFtZV0pIHtcbiAgICAgIC8vIEZpcnN0IFBlcmlvZFxuICAgICAgYWNjW25hbWVdID0gcGxheWxpc3Q7XG4gICAgICBhY2NbbmFtZV0uYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdWJzZXF1ZW50IFBlcmlvZHNcbiAgICAgIGlmIChwbGF5bGlzdC5zZWdtZW50cykge1xuICAgICAgICB2YXIgX2FjYyRuYW1lJHNlZ21lbnRzO1xuXG4gICAgICAgIC8vIGZpcnN0IHNlZ21lbnQgb2Ygc3Vic2VxdWVudCBwZXJpb2RzIHNpZ25hbCBhIGRpc2NvbnRpbnVpdHlcbiAgICAgICAgaWYgKHBsYXlsaXN0LnNlZ21lbnRzWzBdKSB7XG4gICAgICAgICAgcGxheWxpc3Quc2VnbWVudHNbMF0uZGlzY29udGludWl0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAoX2FjYyRuYW1lJHNlZ21lbnRzID0gYWNjW25hbWVdLnNlZ21lbnRzKS5wdXNoLmFwcGx5KF9hY2MkbmFtZSRzZWdtZW50cywgcGxheWxpc3Quc2VnbWVudHMpO1xuICAgICAgfSAvLyBidWJibGUgdXAgY29udGVudFByb3RlY3Rpb24sIHRoaXMgYXNzdW1lcyBhbGwgRFJNIGNvbnRlbnRcbiAgICAgIC8vIGhhcyB0aGUgc2FtZSBjb250ZW50UHJvdGVjdGlvblxuXG5cbiAgICAgIGlmIChwbGF5bGlzdC5hdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgICAgIGFjY1tuYW1lXS5hdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uID0gcGxheWxpc3QuYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY2NbbmFtZV0uYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cy5wdXNoKHtcbiAgICAgIC8vIEFsdGhvdWdoIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lIG51bWJlciwgaXQncyBpbXBvcnRhbnQgdG8gaGF2ZSBib3RoIHRvIG1ha2UgaXRcbiAgICAgIC8vIGNvbXBhdGlibGUgd2l0aCBITFMgcG90ZW50aWFsbHkgaGF2aW5nIGEgc2ltaWxhciBhdHRyaWJ1dGUuXG4gICAgICBzdGFydDogcGxheWxpc3QuYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICAgIHRpbWVsaW5lOiBwbGF5bGlzdC5hdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pKTtcbiAgcmV0dXJuIG1lcmdlZFBsYXlsaXN0cy5tYXAoZnVuY3Rpb24gKHBsYXlsaXN0KSB7XG4gICAgcGxheWxpc3QuZGlzY29udGludWl0eVN0YXJ0cyA9IGZpbmRJbmRleGVzKHBsYXlsaXN0LnNlZ21lbnRzIHx8IFtdLCAnZGlzY29udGludWl0eScpO1xuICAgIHJldHVybiBwbGF5bGlzdDtcbiAgfSk7XG59O1xuXG52YXIgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCA9IGZ1bmN0aW9uIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QocGxheWxpc3QsIHNpZHhNYXBwaW5nKSB7XG4gIHZhciBzaWR4S2V5ID0gZ2VuZXJhdGVTaWR4S2V5KHBsYXlsaXN0LnNpZHgpO1xuICB2YXIgc2lkeE1hdGNoID0gc2lkeEtleSAmJiBzaWR4TWFwcGluZ1tzaWR4S2V5XSAmJiBzaWR4TWFwcGluZ1tzaWR4S2V5XS5zaWR4O1xuXG4gIGlmIChzaWR4TWF0Y2gpIHtcbiAgICBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0JDEocGxheWxpc3QsIHNpZHhNYXRjaCwgcGxheWxpc3Quc2lkeC5yZXNvbHZlZFVyaSk7XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3Q7XG59O1xudmFyIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3RzID0gZnVuY3Rpb24gYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdHMocGxheWxpc3RzLCBzaWR4TWFwcGluZykge1xuICBpZiAoc2lkeE1hcHBpbmcgPT09IHZvaWQgMCkge1xuICAgIHNpZHhNYXBwaW5nID0ge307XG4gIH1cblxuICBpZiAoIU9iamVjdC5rZXlzKHNpZHhNYXBwaW5nKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGxheWxpc3RzO1xuICB9XG5cbiAgZm9yICh2YXIgaSBpbiBwbGF5bGlzdHMpIHtcbiAgICBwbGF5bGlzdHNbaV0gPSBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0KHBsYXlsaXN0c1tpXSwgc2lkeE1hcHBpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0cztcbn07XG52YXIgZm9ybWF0QXVkaW9QbGF5bGlzdCA9IGZ1bmN0aW9uIGZvcm1hdEF1ZGlvUGxheWxpc3QoX3JlZiwgaXNBdWRpb09ubHkpIHtcbiAgdmFyIF9hdHRyaWJ1dGVzO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc2VnbWVudHMgPSBfcmVmLnNlZ21lbnRzLFxuICAgICAgc2lkeCA9IF9yZWYuc2lkeCxcbiAgICAgIG1lZGlhU2VxdWVuY2UgPSBfcmVmLm1lZGlhU2VxdWVuY2UsXG4gICAgICBkaXNjb250aW51aXR5U2VxdWVuY2UgPSBfcmVmLmRpc2NvbnRpbnVpdHlTZXF1ZW5jZSxcbiAgICAgIGRpc2NvbnRpbnVpdHlTdGFydHMgPSBfcmVmLmRpc2NvbnRpbnVpdHlTdGFydHM7XG4gIHZhciBwbGF5bGlzdCA9IHtcbiAgICBhdHRyaWJ1dGVzOiAoX2F0dHJpYnV0ZXMgPSB7XG4gICAgICBOQU1FOiBhdHRyaWJ1dGVzLmlkLFxuICAgICAgQkFORFdJRFRIOiBhdHRyaWJ1dGVzLmJhbmR3aWR0aCxcbiAgICAgIENPREVDUzogYXR0cmlidXRlcy5jb2RlY3NcbiAgICB9LCBfYXR0cmlidXRlc1snUFJPR1JBTS1JRCddID0gMSwgX2F0dHJpYnV0ZXMpLFxuICAgIHVyaTogJycsXG4gICAgZW5kTGlzdDogYXR0cmlidXRlcy50eXBlID09PSAnc3RhdGljJyxcbiAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICByZXNvbHZlZFVyaTogJycsXG4gICAgdGFyZ2V0RHVyYXRpb246IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgZGlzY29udGludWl0eVNlcXVlbmNlOiBkaXNjb250aW51aXR5U2VxdWVuY2UsXG4gICAgZGlzY29udGludWl0eVN0YXJ0czogZGlzY29udGludWl0eVN0YXJ0cyxcbiAgICB0aW1lbGluZVN0YXJ0czogYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyxcbiAgICBtZWRpYVNlcXVlbmNlOiBtZWRpYVNlcXVlbmNlLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9O1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgcGxheWxpc3QuY29udGVudFByb3RlY3Rpb24gPSBhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uO1xuICB9XG5cbiAgaWYgKHNpZHgpIHtcbiAgICBwbGF5bGlzdC5zaWR4ID0gc2lkeDtcbiAgfVxuXG4gIGlmIChpc0F1ZGlvT25seSkge1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXMuQVVESU8gPSAnYXVkaW8nO1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXMuU1VCVElUTEVTID0gJ3N1YnMnO1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0O1xufTtcbnZhciBmb3JtYXRWdHRQbGF5bGlzdCA9IGZ1bmN0aW9uIGZvcm1hdFZ0dFBsYXlsaXN0KF9yZWYyKSB7XG4gIHZhciBfbTN1OEF0dHJpYnV0ZXM7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzLFxuICAgICAgc2VnbWVudHMgPSBfcmVmMi5zZWdtZW50cyxcbiAgICAgIG1lZGlhU2VxdWVuY2UgPSBfcmVmMi5tZWRpYVNlcXVlbmNlLFxuICAgICAgZGlzY29udGludWl0eVN0YXJ0cyA9IF9yZWYyLmRpc2NvbnRpbnVpdHlTdGFydHMsXG4gICAgICBkaXNjb250aW51aXR5U2VxdWVuY2UgPSBfcmVmMi5kaXNjb250aW51aXR5U2VxdWVuY2U7XG5cbiAgaWYgKHR5cGVvZiBzZWdtZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyB2dHQgdHJhY2tzIG1heSB1c2Ugc2luZ2xlIGZpbGUgaW4gQmFzZVVSTFxuICAgIHNlZ21lbnRzID0gW3tcbiAgICAgIHVyaTogYXR0cmlidXRlcy5iYXNlVXJsLFxuICAgICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgICByZXNvbHZlZFVyaTogYXR0cmlidXRlcy5iYXNlVXJsIHx8ICcnLFxuICAgICAgZHVyYXRpb246IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb24sXG4gICAgICBudW1iZXI6IDBcbiAgICB9XTsgLy8gdGFyZ2V0RHVyYXRpb24gc2hvdWxkIGJlIHRoZSBzYW1lIGR1cmF0aW9uIGFzIHRoZSBvbmx5IHNlZ21lbnRcblxuICAgIGF0dHJpYnV0ZXMuZHVyYXRpb24gPSBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uO1xuICB9XG5cbiAgdmFyIG0zdThBdHRyaWJ1dGVzID0gKF9tM3U4QXR0cmlidXRlcyA9IHtcbiAgICBOQU1FOiBhdHRyaWJ1dGVzLmlkLFxuICAgIEJBTkRXSURUSDogYXR0cmlidXRlcy5iYW5kd2lkdGhcbiAgfSwgX20zdThBdHRyaWJ1dGVzWydQUk9HUkFNLUlEJ10gPSAxLCBfbTN1OEF0dHJpYnV0ZXMpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNvZGVjcykge1xuICAgIG0zdThBdHRyaWJ1dGVzLkNPREVDUyA9IGF0dHJpYnV0ZXMuY29kZWNzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVzOiBtM3U4QXR0cmlidXRlcyxcbiAgICB1cmk6ICcnLFxuICAgIGVuZExpc3Q6IGF0dHJpYnV0ZXMudHlwZSA9PT0gJ3N0YXRpYycsXG4gICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgcmVzb2x2ZWRVcmk6IGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJyxcbiAgICB0YXJnZXREdXJhdGlvbjogYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICB0aW1lbGluZVN0YXJ0czogYXR0cmlidXRlcy50aW1lbGluZVN0YXJ0cyxcbiAgICBkaXNjb250aW51aXR5U3RhcnRzOiBkaXNjb250aW51aXR5U3RhcnRzLFxuICAgIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZTogZGlzY29udGludWl0eVNlcXVlbmNlLFxuICAgIG1lZGlhU2VxdWVuY2U6IG1lZGlhU2VxdWVuY2UsXG4gICAgc2VnbWVudHM6IHNlZ21lbnRzXG4gIH07XG59O1xudmFyIG9yZ2FuaXplQXVkaW9QbGF5bGlzdHMgPSBmdW5jdGlvbiBvcmdhbml6ZUF1ZGlvUGxheWxpc3RzKHBsYXlsaXN0cywgc2lkeE1hcHBpbmcsIGlzQXVkaW9Pbmx5KSB7XG4gIGlmIChzaWR4TWFwcGluZyA9PT0gdm9pZCAwKSB7XG4gICAgc2lkeE1hcHBpbmcgPSB7fTtcbiAgfVxuXG4gIGlmIChpc0F1ZGlvT25seSA9PT0gdm9pZCAwKSB7XG4gICAgaXNBdWRpb09ubHkgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBtYWluUGxheWxpc3Q7XG4gIHZhciBmb3JtYXR0ZWRQbGF5bGlzdHMgPSBwbGF5bGlzdHMucmVkdWNlKGZ1bmN0aW9uIChhLCBwbGF5bGlzdCkge1xuICAgIHZhciByb2xlID0gcGxheWxpc3QuYXR0cmlidXRlcy5yb2xlICYmIHBsYXlsaXN0LmF0dHJpYnV0ZXMucm9sZS52YWx1ZSB8fCAnJztcbiAgICB2YXIgbGFuZ3VhZ2UgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgfHwgJyc7XG4gICAgdmFyIGxhYmVsID0gcGxheWxpc3QuYXR0cmlidXRlcy5sYWJlbCB8fCAnbWFpbic7XG5cbiAgICBpZiAobGFuZ3VhZ2UgJiYgIXBsYXlsaXN0LmF0dHJpYnV0ZXMubGFiZWwpIHtcbiAgICAgIHZhciByb2xlTGFiZWwgPSByb2xlID8gXCIgKFwiICsgcm9sZSArIFwiKVwiIDogJyc7XG4gICAgICBsYWJlbCA9IFwiXCIgKyBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmcgKyByb2xlTGFiZWw7XG4gICAgfVxuXG4gICAgaWYgKCFhW2xhYmVsXSkge1xuICAgICAgYVtsYWJlbF0gPSB7XG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICAgICAgYXV0b3NlbGVjdDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogcm9sZSA9PT0gJ21haW4nLFxuICAgICAgICBwbGF5bGlzdHM6IFtdLFxuICAgICAgICB1cmk6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZWQgPSBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0KGZvcm1hdEF1ZGlvUGxheWxpc3QocGxheWxpc3QsIGlzQXVkaW9Pbmx5KSwgc2lkeE1hcHBpbmcpO1xuICAgIGFbbGFiZWxdLnBsYXlsaXN0cy5wdXNoKGZvcm1hdHRlZCk7XG5cbiAgICBpZiAodHlwZW9mIG1haW5QbGF5bGlzdCA9PT0gJ3VuZGVmaW5lZCcgJiYgcm9sZSA9PT0gJ21haW4nKSB7XG4gICAgICBtYWluUGxheWxpc3QgPSBwbGF5bGlzdDtcbiAgICAgIG1haW5QbGF5bGlzdC5kZWZhdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfSwge30pOyAvLyBpZiBubyBwbGF5bGlzdHMgaGF2ZSByb2xlIFwibWFpblwiLCBtYXJrIHRoZSBmaXJzdCBhcyBtYWluXG5cbiAgaWYgKCFtYWluUGxheWxpc3QpIHtcbiAgICB2YXIgZmlyc3RMYWJlbCA9IE9iamVjdC5rZXlzKGZvcm1hdHRlZFBsYXlsaXN0cylbMF07XG4gICAgZm9ybWF0dGVkUGxheWxpc3RzW2ZpcnN0TGFiZWxdLmRlZmF1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdHRlZFBsYXlsaXN0cztcbn07XG52YXIgb3JnYW5pemVWdHRQbGF5bGlzdHMgPSBmdW5jdGlvbiBvcmdhbml6ZVZ0dFBsYXlsaXN0cyhwbGF5bGlzdHMsIHNpZHhNYXBwaW5nKSB7XG4gIGlmIChzaWR4TWFwcGluZyA9PT0gdm9pZCAwKSB7XG4gICAgc2lkeE1hcHBpbmcgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdHMucmVkdWNlKGZ1bmN0aW9uIChhLCBwbGF5bGlzdCkge1xuICAgIHZhciBsYWJlbCA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFuZyB8fCAndGV4dCc7XG5cbiAgICBpZiAoIWFbbGFiZWxdKSB7XG4gICAgICBhW2xhYmVsXSA9IHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhYmVsLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgYXV0b3NlbGVjdDogZmFsc2UsXG4gICAgICAgIHBsYXlsaXN0czogW10sXG4gICAgICAgIHVyaTogJydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYVtsYWJlbF0ucGxheWxpc3RzLnB1c2goYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdChmb3JtYXRWdHRQbGF5bGlzdChwbGF5bGlzdCksIHNpZHhNYXBwaW5nKSk7XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBvcmdhbml6ZUNhcHRpb25TZXJ2aWNlcyA9IGZ1bmN0aW9uIG9yZ2FuaXplQ2FwdGlvblNlcnZpY2VzKGNhcHRpb25TZXJ2aWNlcykge1xuICByZXR1cm4gY2FwdGlvblNlcnZpY2VzLnJlZHVjZShmdW5jdGlvbiAoc3ZjT2JqLCBzdmMpIHtcbiAgICBpZiAoIXN2Yykge1xuICAgICAgcmV0dXJuIHN2Y09iajtcbiAgICB9XG5cbiAgICBzdmMuZm9yRWFjaChmdW5jdGlvbiAoc2VydmljZSkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBzZXJ2aWNlLmNoYW5uZWwsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBzZXJ2aWNlLmxhbmd1YWdlO1xuICAgICAgc3ZjT2JqW2xhbmd1YWdlXSA9IHtcbiAgICAgICAgYXV0b3NlbGVjdDogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBpbnN0cmVhbUlkOiBjaGFubmVsLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZXJ2aWNlLmhhc093blByb3BlcnR5KCdhc3BlY3RSYXRpbycpKSB7XG4gICAgICAgIHN2Y09ialtsYW5ndWFnZV0uYXNwZWN0UmF0aW8gPSBzZXJ2aWNlLmFzcGVjdFJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VydmljZS5oYXNPd25Qcm9wZXJ0eSgnZWFzeVJlYWRlcicpKSB7XG4gICAgICAgIHN2Y09ialtsYW5ndWFnZV0uZWFzeVJlYWRlciA9IHNlcnZpY2UuZWFzeVJlYWRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlcnZpY2UuaGFzT3duUHJvcGVydHkoJzNEJykpIHtcbiAgICAgICAgc3ZjT2JqW2xhbmd1YWdlXVsnM0QnXSA9IHNlcnZpY2VbJzNEJ107XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN2Y09iajtcbiAgfSwge30pO1xufTtcblxudmFyIGZvcm1hdFZpZGVvUGxheWxpc3QgPSBmdW5jdGlvbiBmb3JtYXRWaWRlb1BsYXlsaXN0KF9yZWYzKSB7XG4gIHZhciBfYXR0cmlidXRlczI7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzLFxuICAgICAgc2VnbWVudHMgPSBfcmVmMy5zZWdtZW50cyxcbiAgICAgIHNpZHggPSBfcmVmMy5zaWR4LFxuICAgICAgZGlzY29udGludWl0eVN0YXJ0cyA9IF9yZWYzLmRpc2NvbnRpbnVpdHlTdGFydHM7XG4gIHZhciBwbGF5bGlzdCA9IHtcbiAgICBhdHRyaWJ1dGVzOiAoX2F0dHJpYnV0ZXMyID0ge1xuICAgICAgTkFNRTogYXR0cmlidXRlcy5pZCxcbiAgICAgIEFVRElPOiAnYXVkaW8nLFxuICAgICAgU1VCVElUTEVTOiAnc3VicycsXG4gICAgICBSRVNPTFVUSU9OOiB7XG4gICAgICAgIHdpZHRoOiBhdHRyaWJ1dGVzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGF0dHJpYnV0ZXMuaGVpZ2h0XG4gICAgICB9LFxuICAgICAgQ09ERUNTOiBhdHRyaWJ1dGVzLmNvZGVjcyxcbiAgICAgIEJBTkRXSURUSDogYXR0cmlidXRlcy5iYW5kd2lkdGhcbiAgICB9LCBfYXR0cmlidXRlczJbJ1BST0dSQU0tSUQnXSA9IDEsIF9hdHRyaWJ1dGVzMiksXG4gICAgdXJpOiAnJyxcbiAgICBlbmRMaXN0OiBhdHRyaWJ1dGVzLnR5cGUgPT09ICdzdGF0aWMnLFxuICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgIHJlc29sdmVkVXJpOiAnJyxcbiAgICB0YXJnZXREdXJhdGlvbjogYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICBkaXNjb250aW51aXR5U3RhcnRzOiBkaXNjb250aW51aXR5U3RhcnRzLFxuICAgIHRpbWVsaW5lU3RhcnRzOiBhdHRyaWJ1dGVzLnRpbWVsaW5lU3RhcnRzLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9O1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgcGxheWxpc3QuY29udGVudFByb3RlY3Rpb24gPSBhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uO1xuICB9XG5cbiAgaWYgKHNpZHgpIHtcbiAgICBwbGF5bGlzdC5zaWR4ID0gc2lkeDtcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG5cbnZhciB2aWRlb09ubHkgPSBmdW5jdGlvbiB2aWRlb09ubHkoX3JlZjQpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmNC5hdHRyaWJ1dGVzO1xuICByZXR1cm4gYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ3ZpZGVvL21wNCcgfHwgYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ3ZpZGVvL3dlYm0nIHx8IGF0dHJpYnV0ZXMuY29udGVudFR5cGUgPT09ICd2aWRlbyc7XG59O1xuXG52YXIgYXVkaW9Pbmx5ID0gZnVuY3Rpb24gYXVkaW9Pbmx5KF9yZWY1KSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZjUuYXR0cmlidXRlcztcbiAgcmV0dXJuIGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICdhdWRpby9tcDQnIHx8IGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICdhdWRpby93ZWJtJyB8fCBhdHRyaWJ1dGVzLmNvbnRlbnRUeXBlID09PSAnYXVkaW8nO1xufTtcblxudmFyIHZ0dE9ubHkgPSBmdW5jdGlvbiB2dHRPbmx5KF9yZWY2KSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZjYuYXR0cmlidXRlcztcbiAgcmV0dXJuIGF0dHJpYnV0ZXMubWltZVR5cGUgPT09ICd0ZXh0L3Z0dCcgfHwgYXR0cmlidXRlcy5jb250ZW50VHlwZSA9PT0gJ3RleHQnO1xufTtcbi8qKlxuICogQ29udGFpbnMgc3RhcnQgYW5kIHRpbWVsaW5lIHByb3BlcnRpZXMgZGVub3RpbmcgYSB0aW1lbGluZSBzdGFydC4gRm9yIERBU0gsIHRoZXNlIHdpbGxcbiAqIGJlIHRoZSBzYW1lIG51bWJlci5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUaW1lbGluZVN0YXJ0XG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgLSB0aGUgc3RhcnQgdGltZSBvZiB0aGUgdGltZWxpbmVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lbGluZSAtIHRoZSB0aW1lbGluZSBudW1iZXJcbiAqL1xuXG4vKipcbiAqIEFkZHMgYXBwcm9wcmlhdGUgbWVkaWEgYW5kIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgdmFsdWVzIHRvIHRoZSBzZWdtZW50cyBhbmQgcGxheWxpc3RzLlxuICpcbiAqIFRocm91Z2hvdXQgbXBkLXBhcnNlciwgdGhlIGBudW1iZXJgIGF0dHJpYnV0ZSBpcyB1c2VkIGluIHJlbGF0aW9uIHRvIGBzdGFydE51bWJlcmAsIGFcbiAqIERBU0ggc3BlY2lmaWMgYXR0cmlidXRlIHVzZWQgaW4gY29uc3RydWN0aW5nIHNlZ21lbnQgVVJJJ3MgZnJvbSB0ZW1wbGF0ZXMuIEhvd2V2ZXIsIGZyb21cbiAqIGFuIEhMUyBwZXJzcGVjdGl2ZSwgdGhlIGBudW1iZXJgIGF0dHJpYnV0ZSBvbiBhIHNlZ21lbnQgd291bGQgYmUgaXRzIGBtZWRpYVNlcXVlbmNlYFxuICogdmFsdWUsIHdoaWNoIHNob3VsZCBzdGFydCBhdCB0aGUgb3JpZ2luYWwgbWVkaWEgc2VxdWVuY2UgdmFsdWUgKG9yIDApIGFuZCBpbmNyZW1lbnQgYnkgMVxuICogZm9yIGVhY2ggc2VnbWVudCB0aGVyZWFmdGVyLiBTaW5jZSBEQVNIJ3MgYHN0YXJ0TnVtYmVyYCB2YWx1ZXMgYXJlIGluZGVwZW5kZW50IHBlclxuICogcGVyaW9kLCBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gdXNlIGl0IGZvciBgbnVtYmVyYC4gSW5zdGVhZCwgYXNzdW1lIGV2ZXJ5dGhpbmcgc3RhcnRzXG4gKiBmcm9tIGEgMCBtZWRpYVNlcXVlbmNlIHZhbHVlIGFuZCBpbmNyZW1lbnQgZnJvbSB0aGVyZS5cbiAqXG4gKiBOb3RlIHRoYXQgVkhTIGN1cnJlbnRseSBkb2Vzbid0IHVzZSB0aGUgYG51bWJlcmAgcHJvcGVydHksIGJ1dCBpdCBjYW4gYmUgaGVscGZ1bCBmb3JcbiAqIGRlYnVnZ2luZyBhbmQgbWFraW5nIHNlbnNlIG9mIHRoZSBtYW5pZmVzdC5cbiAqXG4gKiBGb3IgbGl2ZSBwbGF5bGlzdHMsIHRvIGFjY291bnQgZm9yIHZhbHVlcyBpbmNyZWFzaW5nIGluIG1hbmlmZXN0cyB3aGVuIHBlcmlvZHMgYXJlXG4gKiByZW1vdmVkIG9uIHJlZnJlc2hlcywgbWVyZ2luZyBsb2dpYyBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG51bWJlcnMgdG8gdGhlaXJcbiAqIGFwcHJvcHJpYXRlIHZhbHVlcyAodG8gZW5zdXJlIHRoZXkncmUgc2VxdWVudGlhbCBhbmQgaW5jcmVhc2luZykuXG4gKlxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWxpc3RzIC0gdGhlIHBsYXlsaXN0cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7VGltZWxpbmVTdGFydFtdfSB0aW1lbGluZVN0YXJ0cyAtIHRoZSB0aW1lbGluZSBzdGFydHMgZm9yIHRoZSBtYW5pZmVzdFxuICovXG5cblxudmFyIGFkZE1lZGlhU2VxdWVuY2VWYWx1ZXMgPSBmdW5jdGlvbiBhZGRNZWRpYVNlcXVlbmNlVmFsdWVzKHBsYXlsaXN0cywgdGltZWxpbmVTdGFydHMpIHtcbiAgLy8gaW5jcmVtZW50IGFsbCBzZWdtZW50cyBzZXF1ZW50aWFsbHlcbiAgcGxheWxpc3RzLmZvckVhY2goZnVuY3Rpb24gKHBsYXlsaXN0KSB7XG4gICAgcGxheWxpc3QubWVkaWFTZXF1ZW5jZSA9IDA7XG4gICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlID0gZmluZEluZGV4KHRpbWVsaW5lU3RhcnRzLCBmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgIHZhciB0aW1lbGluZSA9IF9yZWY3LnRpbWVsaW5lO1xuICAgICAgcmV0dXJuIHRpbWVsaW5lID09PSBwbGF5bGlzdC50aW1lbGluZTtcbiAgICB9KTtcblxuICAgIGlmICghcGxheWxpc3Quc2VnbWVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbGF5bGlzdC5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50LCBpbmRleCkge1xuICAgICAgc2VnbWVudC5udW1iZXIgPSBpbmRleDtcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhIG1lZGlhIGdyb3VwIG9iamVjdCwgZmxhdHRlbnMgYWxsIHBsYXlsaXN0cyB3aXRoaW4gdGhlIG1lZGlhIGdyb3VwIGludG8gYSBzaW5nbGVcbiAqIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZWRpYUdyb3VwT2JqZWN0IC0gdGhlIG1lZGlhIGdyb3VwIG9iamVjdFxuICpcbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogICAgICAgICBUaGUgbWVkaWEgZ3JvdXAgcGxheWxpc3RzXG4gKi9cblxudmFyIGZsYXR0ZW5NZWRpYUdyb3VwUGxheWxpc3RzID0gZnVuY3Rpb24gZmxhdHRlbk1lZGlhR3JvdXBQbGF5bGlzdHMobWVkaWFHcm91cE9iamVjdCkge1xuICBpZiAoIW1lZGlhR3JvdXBPYmplY3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVkaWFHcm91cE9iamVjdCkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGxhYmVsKSB7XG4gICAgdmFyIGxhYmVsQ29udGVudHMgPSBtZWRpYUdyb3VwT2JqZWN0W2xhYmVsXTtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChsYWJlbENvbnRlbnRzLnBsYXlsaXN0cyk7XG4gIH0sIFtdKTtcbn07XG52YXIgdG9NM3U4ID0gZnVuY3Rpb24gdG9NM3U4KF9yZWY4KSB7XG4gIHZhciBfbWVkaWFHcm91cHM7XG5cbiAgdmFyIGRhc2hQbGF5bGlzdHMgPSBfcmVmOC5kYXNoUGxheWxpc3RzLFxuICAgICAgbG9jYXRpb25zID0gX3JlZjgubG9jYXRpb25zLFxuICAgICAgX3JlZjgkc2lkeE1hcHBpbmcgPSBfcmVmOC5zaWR4TWFwcGluZyxcbiAgICAgIHNpZHhNYXBwaW5nID0gX3JlZjgkc2lkeE1hcHBpbmcgPT09IHZvaWQgMCA/IHt9IDogX3JlZjgkc2lkeE1hcHBpbmcsXG4gICAgICBwcmV2aW91c01hbmlmZXN0ID0gX3JlZjgucHJldmlvdXNNYW5pZmVzdDtcblxuICBpZiAoIWRhc2hQbGF5bGlzdHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9IC8vIGdyYWIgYWxsIG1haW4gbWFuaWZlc3QgYXR0cmlidXRlc1xuXG5cbiAgdmFyIF9kYXNoUGxheWxpc3RzJDAkYXR0ciA9IGRhc2hQbGF5bGlzdHNbMF0uYXR0cmlidXRlcyxcbiAgICAgIGR1cmF0aW9uID0gX2Rhc2hQbGF5bGlzdHMkMCRhdHRyLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgdHlwZSA9IF9kYXNoUGxheWxpc3RzJDAkYXR0ci50eXBlLFxuICAgICAgc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXkgPSBfZGFzaFBsYXlsaXN0cyQwJGF0dHIuc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXksXG4gICAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gX2Rhc2hQbGF5bGlzdHMkMCRhdHRyLm1pbmltdW1VcGRhdGVQZXJpb2Q7XG4gIHZhciB2aWRlb1BsYXlsaXN0cyA9IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhkYXNoUGxheWxpc3RzLmZpbHRlcih2aWRlb09ubHkpKS5tYXAoZm9ybWF0VmlkZW9QbGF5bGlzdCk7XG4gIHZhciBhdWRpb1BsYXlsaXN0cyA9IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhkYXNoUGxheWxpc3RzLmZpbHRlcihhdWRpb09ubHkpKTtcbiAgdmFyIHZ0dFBsYXlsaXN0cyA9IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhkYXNoUGxheWxpc3RzLmZpbHRlcih2dHRPbmx5KSk7XG4gIHZhciBjYXB0aW9ucyA9IGRhc2hQbGF5bGlzdHMubWFwKGZ1bmN0aW9uIChwbGF5bGlzdCkge1xuICAgIHJldHVybiBwbGF5bGlzdC5hdHRyaWJ1dGVzLmNhcHRpb25TZXJ2aWNlcztcbiAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICB2YXIgbWFuaWZlc3QgPSB7XG4gICAgYWxsb3dDYWNoZTogdHJ1ZSxcbiAgICBkaXNjb250aW51aXR5U3RhcnRzOiBbXSxcbiAgICBzZWdtZW50czogW10sXG4gICAgZW5kTGlzdDogdHJ1ZSxcbiAgICBtZWRpYUdyb3VwczogKF9tZWRpYUdyb3VwcyA9IHtcbiAgICAgIEFVRElPOiB7fSxcbiAgICAgIFZJREVPOiB7fVxuICAgIH0sIF9tZWRpYUdyb3Vwc1snQ0xPU0VELUNBUFRJT05TJ10gPSB7fSwgX21lZGlhR3JvdXBzLlNVQlRJVExFUyA9IHt9LCBfbWVkaWFHcm91cHMpLFxuICAgIHVyaTogJycsXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHBsYXlsaXN0czogYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdHModmlkZW9QbGF5bGlzdHMsIHNpZHhNYXBwaW5nKVxuICB9O1xuXG4gIGlmIChtaW5pbXVtVXBkYXRlUGVyaW9kID49IDApIHtcbiAgICBtYW5pZmVzdC5taW5pbXVtVXBkYXRlUGVyaW9kID0gbWluaW11bVVwZGF0ZVBlcmlvZCAqIDEwMDA7XG4gIH1cblxuICBpZiAobG9jYXRpb25zKSB7XG4gICAgbWFuaWZlc3QubG9jYXRpb25zID0gbG9jYXRpb25zO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdkeW5hbWljJykge1xuICAgIG1hbmlmZXN0LnN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5ID0gc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXk7XG4gIH1cblxuICB2YXIgaXNBdWRpb09ubHkgPSBtYW5pZmVzdC5wbGF5bGlzdHMubGVuZ3RoID09PSAwO1xuICB2YXIgb3JnYW5pemVkQXVkaW9Hcm91cCA9IGF1ZGlvUGxheWxpc3RzLmxlbmd0aCA/IG9yZ2FuaXplQXVkaW9QbGF5bGlzdHMoYXVkaW9QbGF5bGlzdHMsIHNpZHhNYXBwaW5nLCBpc0F1ZGlvT25seSkgOiBudWxsO1xuICB2YXIgb3JnYW5pemVkVnR0R3JvdXAgPSB2dHRQbGF5bGlzdHMubGVuZ3RoID8gb3JnYW5pemVWdHRQbGF5bGlzdHModnR0UGxheWxpc3RzLCBzaWR4TWFwcGluZykgOiBudWxsO1xuICB2YXIgZm9ybWF0dGVkUGxheWxpc3RzID0gdmlkZW9QbGF5bGlzdHMuY29uY2F0KGZsYXR0ZW5NZWRpYUdyb3VwUGxheWxpc3RzKG9yZ2FuaXplZEF1ZGlvR3JvdXApLCBmbGF0dGVuTWVkaWFHcm91cFBsYXlsaXN0cyhvcmdhbml6ZWRWdHRHcm91cCkpO1xuICB2YXIgcGxheWxpc3RUaW1lbGluZVN0YXJ0cyA9IGZvcm1hdHRlZFBsYXlsaXN0cy5tYXAoZnVuY3Rpb24gKF9yZWY5KSB7XG4gICAgdmFyIHRpbWVsaW5lU3RhcnRzID0gX3JlZjkudGltZWxpbmVTdGFydHM7XG4gICAgcmV0dXJuIHRpbWVsaW5lU3RhcnRzO1xuICB9KTtcbiAgbWFuaWZlc3QudGltZWxpbmVTdGFydHMgPSBnZXRVbmlxdWVUaW1lbGluZVN0YXJ0cyhwbGF5bGlzdFRpbWVsaW5lU3RhcnRzKTtcbiAgYWRkTWVkaWFTZXF1ZW5jZVZhbHVlcyhmb3JtYXR0ZWRQbGF5bGlzdHMsIG1hbmlmZXN0LnRpbWVsaW5lU3RhcnRzKTtcblxuICBpZiAob3JnYW5pemVkQXVkaW9Hcm91cCkge1xuICAgIG1hbmlmZXN0Lm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvID0gb3JnYW5pemVkQXVkaW9Hcm91cDtcbiAgfVxuXG4gIGlmIChvcmdhbml6ZWRWdHRHcm91cCkge1xuICAgIG1hbmlmZXN0Lm1lZGlhR3JvdXBzLlNVQlRJVExFUy5zdWJzID0gb3JnYW5pemVkVnR0R3JvdXA7XG4gIH1cblxuICBpZiAoY2FwdGlvbnMubGVuZ3RoKSB7XG4gICAgbWFuaWZlc3QubWVkaWFHcm91cHNbJ0NMT1NFRC1DQVBUSU9OUyddLmNjID0gb3JnYW5pemVDYXB0aW9uU2VydmljZXMoY2FwdGlvbnMpO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzTWFuaWZlc3QpIHtcbiAgICByZXR1cm4gcG9zaXRpb25NYW5pZmVzdE9uVGltZWxpbmUoe1xuICAgICAgb2xkTWFuaWZlc3Q6IHByZXZpb3VzTWFuaWZlc3QsXG4gICAgICBuZXdNYW5pZmVzdDogbWFuaWZlc3RcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYW5pZmVzdDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgUiAocmVwZXRpdGlvbikgdmFsdWUgZm9yIGEgbGl2ZSBzdHJlYW0gKGZvciB0aGUgZmluYWwgc2VnbWVudFxuICogaW4gYSBtYW5pZmVzdCB3aGVyZSB0aGUgciB2YWx1ZSBpcyBuZWdhdGl2ZSAxKVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqICAgICAgICBjdXJyZW50IHRpbWUgKHR5cGljYWxseSB0aGUgdG90YWwgdGltZSB1cCB1bnRpbCB0aGUgZmluYWwgc2VnbWVudClcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogICAgICAgIGR1cmF0aW9uIHByb3BlcnR5IGZvciB0aGUgZ2l2ZW4gPFMgLz5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgICAgICAgUiB2YWx1ZSB0byByZWFjaCB0aGUgZW5kIG9mIHRoZSBnaXZlbiBwZXJpb2RcbiAqL1xudmFyIGdldExpdmVSVmFsdWUgPSBmdW5jdGlvbiBnZXRMaXZlUlZhbHVlKGF0dHJpYnV0ZXMsIHRpbWUsIGR1cmF0aW9uKSB7XG4gIHZhciBOT1cgPSBhdHRyaWJ1dGVzLk5PVyxcbiAgICAgIGNsaWVudE9mZnNldCA9IGF0dHJpYnV0ZXMuY2xpZW50T2Zmc2V0LFxuICAgICAgYXZhaWxhYmlsaXR5U3RhcnRUaW1lID0gYXR0cmlidXRlcy5hdmFpbGFiaWxpdHlTdGFydFRpbWUsXG4gICAgICBfYXR0cmlidXRlcyR0aW1lc2NhbGUgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSxcbiAgICAgIHRpbWVzY2FsZSA9IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZSA9PT0gdm9pZCAwID8gMSA6IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZSxcbiAgICAgIF9hdHRyaWJ1dGVzJHBlcmlvZFN0YSA9IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgICBwZXJpb2RTdGFydCA9IF9hdHRyaWJ1dGVzJHBlcmlvZFN0YSA9PT0gdm9pZCAwID8gMCA6IF9hdHRyaWJ1dGVzJHBlcmlvZFN0YSxcbiAgICAgIF9hdHRyaWJ1dGVzJG1pbmltdW1VcCA9IGF0dHJpYnV0ZXMubWluaW11bVVwZGF0ZVBlcmlvZCxcbiAgICAgIG1pbmltdW1VcGRhdGVQZXJpb2QgPSBfYXR0cmlidXRlcyRtaW5pbXVtVXAgPT09IHZvaWQgMCA/IDAgOiBfYXR0cmlidXRlcyRtaW5pbXVtVXA7XG4gIHZhciBub3cgPSAoTk9XICsgY2xpZW50T2Zmc2V0KSAvIDEwMDA7XG4gIHZhciBwZXJpb2RTdGFydFdDID0gYXZhaWxhYmlsaXR5U3RhcnRUaW1lICsgcGVyaW9kU3RhcnQ7XG4gIHZhciBwZXJpb2RFbmRXQyA9IG5vdyArIG1pbmltdW1VcGRhdGVQZXJpb2Q7XG4gIHZhciBwZXJpb2REdXJhdGlvbiA9IHBlcmlvZEVuZFdDIC0gcGVyaW9kU3RhcnRXQztcbiAgcmV0dXJuIE1hdGguY2VpbCgocGVyaW9kRHVyYXRpb24gKiB0aW1lc2NhbGUgLSB0aW1lKSAvIGR1cmF0aW9uKTtcbn07XG4vKipcbiAqIFVzZXMgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgU2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZSB0byBkZXRlcm1pbmUgc2VnbWVudFxuICogdGltaW5nIGFuZCBkdXJhdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXX0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKlxuICogQHJldHVybiB7e251bWJlcjogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHRpbWVsaW5lOiBudW1iZXJ9W119XG4gKiAgICAgICAgIExpc3Qgb2YgT2JqZWN0cyB3aXRoIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvXG4gKi9cblxuXG52YXIgcGFyc2VCeVRpbWVsaW5lID0gZnVuY3Rpb24gcGFyc2VCeVRpbWVsaW5lKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSkge1xuICB2YXIgdHlwZSA9IGF0dHJpYnV0ZXMudHlwZSxcbiAgICAgIF9hdHRyaWJ1dGVzJG1pbmltdW1VcDIgPSBhdHRyaWJ1dGVzLm1pbmltdW1VcGRhdGVQZXJpb2QsXG4gICAgICBtaW5pbXVtVXBkYXRlUGVyaW9kID0gX2F0dHJpYnV0ZXMkbWluaW11bVVwMiA9PT0gdm9pZCAwID8gMCA6IF9hdHRyaWJ1dGVzJG1pbmltdW1VcDIsXG4gICAgICBfYXR0cmlidXRlcyRtZWRpYSA9IGF0dHJpYnV0ZXMubWVkaWEsXG4gICAgICBtZWRpYSA9IF9hdHRyaWJ1dGVzJG1lZGlhID09PSB2b2lkIDAgPyAnJyA6IF9hdHRyaWJ1dGVzJG1lZGlhLFxuICAgICAgc291cmNlRHVyYXRpb24gPSBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgX2F0dHJpYnV0ZXMkdGltZXNjYWxlMiA9IGF0dHJpYnV0ZXMudGltZXNjYWxlLFxuICAgICAgdGltZXNjYWxlID0gX2F0dHJpYnV0ZXMkdGltZXNjYWxlMiA9PT0gdm9pZCAwID8gMSA6IF9hdHRyaWJ1dGVzJHRpbWVzY2FsZTIsXG4gICAgICBfYXR0cmlidXRlcyRzdGFydE51bWIgPSBhdHRyaWJ1dGVzLnN0YXJ0TnVtYmVyLFxuICAgICAgc3RhcnROdW1iZXIgPSBfYXR0cmlidXRlcyRzdGFydE51bWIgPT09IHZvaWQgMCA/IDEgOiBfYXR0cmlidXRlcyRzdGFydE51bWIsXG4gICAgICB0aW1lbGluZSA9IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQ7XG4gIHZhciBzZWdtZW50cyA9IFtdO1xuICB2YXIgdGltZSA9IC0xO1xuXG4gIGZvciAodmFyIHNJbmRleCA9IDA7IHNJbmRleCA8IHNlZ21lbnRUaW1lbGluZS5sZW5ndGg7IHNJbmRleCsrKSB7XG4gICAgdmFyIFMgPSBzZWdtZW50VGltZWxpbmVbc0luZGV4XTtcbiAgICB2YXIgZHVyYXRpb24gPSBTLmQ7XG4gICAgdmFyIHJlcGVhdCA9IFMuciB8fCAwO1xuICAgIHZhciBzZWdtZW50VGltZSA9IFMudCB8fCAwO1xuXG4gICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICAvLyBmaXJzdCBzZWdtZW50XG4gICAgICB0aW1lID0gc2VnbWVudFRpbWU7XG4gICAgfVxuXG4gICAgaWYgKHNlZ21lbnRUaW1lICYmIHNlZ21lbnRUaW1lID4gdGltZSkge1xuICAgICAgLy8gZGlzY29udGludWl0eVxuICAgICAgLy8gVE9ETzogSG93IHRvIGhhbmRsZSB0aGlzIHR5cGUgb2YgZGlzY29udGludWl0eVxuICAgICAgLy8gdGltZWxpbmUrKyBoZXJlIHdvdWxkIHRyZWF0IGl0IGxpa2UgSExTIGRpc2NvbnR1aXR5IGFuZCBjb250ZW50IHdvdWxkXG4gICAgICAvLyBnZXQgYXBwZW5kZWQgd2l0aG91dCBnYXBcbiAgICAgIC8vIEUuRy5cbiAgICAgIC8vICA8UyB0PVwiMFwiIGQ9XCIxXCIgLz5cbiAgICAgIC8vICA8UyBkPVwiMVwiIC8+XG4gICAgICAvLyAgPFMgZD1cIjFcIiAvPlxuICAgICAgLy8gIDxTIHQ9XCI1XCIgZD1cIjFcIiAvPlxuICAgICAgLy8gd291bGQgaGF2ZSAkVGltZSQgdmFsdWVzIG9mIFswLCAxLCAyLCA1XVxuICAgICAgLy8gc2hvdWxkIHRoaXMgYmUgYXBwZW5lZCBhdCB0aW1lIHBvc2l0aW9ucyBbMCwgMSwgMiwgM10sKCNFWFQtWC1ESVNDT05USU5VSVRZKVxuICAgICAgLy8gb3IgWzAsIDEsIDIsIGdhcCwgZ2FwLCA1XT8gKCNFWFQtWC1HQVApXG4gICAgICAvLyBkb2VzIHRoZSB2YWx1ZSBvZiBzb3VyY2VEdXJhdGlvbiBjb25zaWRlciB0aGlzIHdoZW4gY2FsY3VsYXRpbmcgYXJiaXRyYXJ5XG4gICAgICAvLyBuZWdhdGl2ZSBAciByZXBlYXQgdmFsdWU/XG4gICAgICAvLyBFLkcuIFNhbWUgZWxlbWVudHMgYXMgYWJvdmUgd2l0aCB0aGlzIGFkZGVkIGF0IHRoZSBlbmRcbiAgICAgIC8vICA8UyBkPVwiMVwiIHI9XCItMVwiIC8+XG4gICAgICAvLyAgd2l0aCBhIHNvdXJjZUR1cmF0aW9uIG9mIDEwXG4gICAgICAvLyBXb3VsZCB0aGUgMiBnYXBzIGJlIGluY2x1ZGVkIGluIHRoZSB0aW1lIGR1cmF0aW9uIGNhbGN1bGF0aW9ucyByZXN1bHRpbmcgaW5cbiAgICAgIC8vIDggc2VnbWVudHMgd2l0aCAkVGltZSQgdmFsdWVzIG9mIFswLCAxLCAyLCA1LCA2LCA3LCA4LCA5XSBvciAxMCBzZWdtZW50c1xuICAgICAgLy8gd2l0aCAkVGltZSQgdmFsdWVzIG9mIFswLCAxLCAyLCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdID9cbiAgICAgIHRpbWUgPSBzZWdtZW50VGltZTtcbiAgICB9XG5cbiAgICB2YXIgY291bnQgPSB2b2lkIDA7XG5cbiAgICBpZiAocmVwZWF0IDwgMCkge1xuICAgICAgdmFyIG5leHRTID0gc0luZGV4ICsgMTtcblxuICAgICAgaWYgKG5leHRTID09PSBzZWdtZW50VGltZWxpbmUubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3Qgc2VnbWVudFxuICAgICAgICBpZiAodHlwZSA9PT0gJ2R5bmFtaWMnICYmIG1pbmltdW1VcGRhdGVQZXJpb2QgPiAwICYmIG1lZGlhLmluZGV4T2YoJyROdW1iZXIkJykgPiAwKSB7XG4gICAgICAgICAgY291bnQgPSBnZXRMaXZlUlZhbHVlKGF0dHJpYnV0ZXMsIHRpbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUT0RPOiBUaGlzIG1heSBiZSBpbmNvcnJlY3QgZGVwZW5kaW5nIG9uIGNvbmNsdXNpb24gb2YgVE9ETyBhYm92ZVxuICAgICAgICAgIGNvdW50ID0gKHNvdXJjZUR1cmF0aW9uICogdGltZXNjYWxlIC0gdGltZSkgLyBkdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQgPSAoc2VnbWVudFRpbWVsaW5lW25leHRTXS50IC0gdGltZSkgLyBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSByZXBlYXQgKyAxO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBzdGFydE51bWJlciArIHNlZ21lbnRzLmxlbmd0aCArIGNvdW50O1xuICAgIHZhciBudW1iZXIgPSBzdGFydE51bWJlciArIHNlZ21lbnRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChudW1iZXIgPCBlbmQpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gdGltZXNjYWxlLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmVcbiAgICAgIH0pO1xuICAgICAgdGltZSArPSBkdXJhdGlvbjtcbiAgICAgIG51bWJlcisrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cztcbn07XG5cbnZhciBpZGVudGlmaWVyUGF0dGVybiA9IC9cXCQoW0Etel0qKSg/OiglMCkoWzAtOV0rKWQpP1xcJC9nO1xuLyoqXG4gKiBSZXBsYWNlcyB0ZW1wbGF0ZSBpZGVudGlmaWVycyB3aXRoIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBUbyBiZSB1c2VkIGFzIHRoZSBjYWxsYmFja1xuICogZm9yIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICpcbiAqIEBuYW1lIHJlcGxhY2VDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hcbiAqICAgICAgICBFbnRpcmUgbWF0Y2ggb2YgaWRlbnRpZmllclxuICogQHBhcmFtIHtzdHJpbmd9IGlkZW50aWZpZXJcbiAqICAgICAgICBOYW1lIG9mIG1hdGNoZWQgaWRlbnRpZmllclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFxuICogICAgICAgIEZvcm1hdCB0YWcgc3RyaW5nLiBJdHMgcHJlc2VuY2UgaW5kaWNhdGVzIHRoYXQgcGFkZGluZyBpcyBleHBlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHdpZHRoXG4gKiAgICAgICAgRGVzaXJlZCBsZW5ndGggb2YgdGhlIHJlcGxhY2VkIHZhbHVlLiBWYWx1ZXMgbGVzcyB0aGFuIHRoaXMgd2lkdGggc2hhbGwgYmUgbGVmdFxuICogICAgICAgIHplcm8gcGFkZGVkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgICAgICAgIFJlcGxhY2VtZW50IGZvciB0aGUgbWF0Y2hlZCBpZGVudGlmaWVyXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIGZvciBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UgdG8gcmVwbGFjZVxuICogdGVtcGxhdGUgaWRlbnRpZmllcnNcbiAqXG4gKiBAcGFyYW0ge09iZWN0fSB2YWx1ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyB2YWx1ZXMgdGhhdCBzaGFsbCBiZSB1c2VkIHRvIHJlcGxhY2Uga25vd24gaWRlbnRpZmllcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuUmVwcmVzZW50YXRpb25JRFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBpZCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuTnVtYmVyXG4gKiAgICAgICAgTnVtYmVyIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuQmFuZHdpZHRoXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGJhbmR3aWR0aCBhdHRyaWJ1dGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlRpbWVcbiAqICAgICAgICBUaW1lc3RhbXAgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHJldHVybiB7cmVwbGFjZUNhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayB0byBiZSB1c2VkIHdpdGggU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlIHRvIHJlcGxhY2UgaWRlbnRpZmllcnNcbiAqL1xuXG52YXIgaWRlbnRpZmllclJlcGxhY2VtZW50ID0gZnVuY3Rpb24gaWRlbnRpZmllclJlcGxhY2VtZW50KHZhbHVlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKG1hdGNoLCBpZGVudGlmaWVyLCBmb3JtYXQsIHdpZHRoKSB7XG4gICAgaWYgKG1hdGNoID09PSAnJCQnKSB7XG4gICAgICAvLyBlc2NhcGUgc2VxdWVuY2VcbiAgICAgIHJldHVybiAnJCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZXNbaWRlbnRpZmllcl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gJycgKyB2YWx1ZXNbaWRlbnRpZmllcl07XG5cbiAgICBpZiAoaWRlbnRpZmllciA9PT0gJ1JlcHJlc2VudGF0aW9uSUQnKSB7XG4gICAgICAvLyBGb3JtYXQgdGFnIHNoYWxsIG5vdCBiZSBwcmVzZW50IHdpdGggUmVwcmVzZW50YXRpb25JRFxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB3aWR0aCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgsIDEwKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUubGVuZ3RoID49IHdpZHRoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIgKyBuZXcgQXJyYXkod2lkdGggLSB2YWx1ZS5sZW5ndGggKyAxKS5qb2luKCcwJykgKyB2YWx1ZTtcbiAgfTtcbn07XG4vKipcbiAqIENvbnN0cnVjdHMgYSBzZWdtZW50IHVybCBmcm9tIGEgdGVtcGxhdGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogICAgICAgIFRlbXBsYXRlIHN0cmluZyB0byBjb25zdHJ1Y3QgdXJsIGZyb21cbiAqIEBwYXJhbSB7T2JlY3R9IHZhbHVlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIHZhbHVlcyB0aGF0IHNoYWxsIGJlIHVzZWQgdG8gcmVwbGFjZSBrbm93biBpZGVudGlmaWVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5SZXByZXNlbnRhdGlvbklEXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGlkIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5OdW1iZXJcbiAqICAgICAgICBOdW1iZXIgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5CYW5kd2lkdGhcbiAqICAgICAgICBWYWx1ZSBvZiB0aGUgUmVwcmVzZW50YXRpb25AYmFuZHdpZHRoIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuVGltZVxuICogICAgICAgIFRpbWVzdGFtcCB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWdtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiAgICAgICAgIFNlZ21lbnQgdXJsIHdpdGggaWRlbnRpZmllcnMgcmVwbGFjZWRcbiAqL1xuXG52YXIgY29uc3RydWN0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbiBjb25zdHJ1Y3RUZW1wbGF0ZVVybCh1cmwsIHZhbHVlcykge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoaWRlbnRpZmllclBhdHRlcm4sIGlkZW50aWZpZXJSZXBsYWNlbWVudCh2YWx1ZXMpKTtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgZWFjaFxuICogc2VnbWVudCBuZWVkZWQgdG8gZ2VuZXJhdGUgc2VnbWVudCB1cmlzIGFuZCB0aGUgY29tcGxldGUgc2VnbWVudCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBhdHRyaWJ1dGVzIG9mIGVhY2ggUyBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW5cbiAqICAgICAgICB0aGUgU2VnbWVudFRpbWVsaW5lIGVsZW1lbnRcbiAqIEByZXR1cm4ge3tudW1iZXI6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgdGltZTogbnVtYmVyLCB0aW1lbGluZTogbnVtYmVyfVtdfVxuICogICAgICAgICBMaXN0IG9mIE9iamVjdHMgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cbnZhciBwYXJzZVRlbXBsYXRlSW5mbyA9IGZ1bmN0aW9uIHBhcnNlVGVtcGxhdGVJbmZvKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSkge1xuICBpZiAoIWF0dHJpYnV0ZXMuZHVyYXRpb24gJiYgIXNlZ21lbnRUaW1lbGluZSkge1xuICAgIC8vIGlmIG5laXRoZXIgQGR1cmF0aW9uIG9yIFNlZ21lbnRUaW1lbGluZSBhcmUgcHJlc2VudCwgdGhlbiB0aGVyZSBzaGFsbCBiZSBleGFjdGx5XG4gICAgLy8gb25lIG1lZGlhIHNlZ21lbnRcbiAgICByZXR1cm4gW3tcbiAgICAgIG51bWJlcjogYXR0cmlidXRlcy5zdGFydE51bWJlciB8fCAxLFxuICAgICAgZHVyYXRpb246IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb24sXG4gICAgICB0aW1lOiAwLFxuICAgICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnRcbiAgICB9XTtcbiAgfVxuXG4gIGlmIChhdHRyaWJ1dGVzLmR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUJ5VGltZWxpbmUoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKTtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygc2VnbWVudHMgdXNpbmcgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgdGhlIFNlZ21lbnRUZW1wbGF0ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgICAgICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKiAgICAgICAgdGhlIFNlZ21lbnRUaW1lbGluZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqICAgICAgICAgTGlzdCBvZiBzZWdtZW50IG9iamVjdHNcbiAqL1xuXG52YXIgc2VnbWVudHNGcm9tVGVtcGxhdGUgPSBmdW5jdGlvbiBzZWdtZW50c0Zyb21UZW1wbGF0ZShhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpIHtcbiAgdmFyIHRlbXBsYXRlVmFsdWVzID0ge1xuICAgIFJlcHJlc2VudGF0aW9uSUQ6IGF0dHJpYnV0ZXMuaWQsXG4gICAgQmFuZHdpZHRoOiBhdHRyaWJ1dGVzLmJhbmR3aWR0aCB8fCAwXG4gIH07XG4gIHZhciBfYXR0cmlidXRlcyRpbml0aWFsaXogPSBhdHRyaWJ1dGVzLmluaXRpYWxpemF0aW9uLFxuICAgICAgaW5pdGlhbGl6YXRpb24gPSBfYXR0cmlidXRlcyRpbml0aWFsaXogPT09IHZvaWQgMCA/IHtcbiAgICBzb3VyY2VVUkw6ICcnLFxuICAgIHJhbmdlOiAnJ1xuICB9IDogX2F0dHJpYnV0ZXMkaW5pdGlhbGl6O1xuICB2YXIgbWFwU2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmw6IGF0dHJpYnV0ZXMuYmFzZVVybCxcbiAgICBzb3VyY2U6IGNvbnN0cnVjdFRlbXBsYXRlVXJsKGluaXRpYWxpemF0aW9uLnNvdXJjZVVSTCwgdGVtcGxhdGVWYWx1ZXMpLFxuICAgIHJhbmdlOiBpbml0aWFsaXphdGlvbi5yYW5nZVxuICB9KTtcbiAgdmFyIHNlZ21lbnRzID0gcGFyc2VUZW1wbGF0ZUluZm8oYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKTtcbiAgcmV0dXJuIHNlZ21lbnRzLm1hcChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgIHRlbXBsYXRlVmFsdWVzLk51bWJlciA9IHNlZ21lbnQubnVtYmVyO1xuICAgIHRlbXBsYXRlVmFsdWVzLlRpbWUgPSBzZWdtZW50LnRpbWU7XG4gICAgdmFyIHVyaSA9IGNvbnN0cnVjdFRlbXBsYXRlVXJsKGF0dHJpYnV0ZXMubWVkaWEgfHwgJycsIHRlbXBsYXRlVmFsdWVzKTsgLy8gU2VlIERBU0ggc3BlYyBzZWN0aW9uIDUuMy45LjIuMlxuICAgIC8vIC0gaWYgdGltZXNjYWxlIGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDEuXG5cbiAgICB2YXIgdGltZXNjYWxlID0gYXR0cmlidXRlcy50aW1lc2NhbGUgfHwgMTsgLy8gLSBpZiBwcmVzZW50YXRpb25UaW1lT2Zmc2V0IGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDBcblxuICAgIHZhciBwcmVzZW50YXRpb25UaW1lT2Zmc2V0ID0gYXR0cmlidXRlcy5wcmVzZW50YXRpb25UaW1lT2Zmc2V0IHx8IDA7XG4gICAgdmFyIHByZXNlbnRhdGlvblRpbWUgPSAvLyBFdmVuIGlmIHRoZSBAdCBhdHRyaWJ1dGUgaXMgbm90IHNwZWNpZmllZCBmb3IgdGhlIHNlZ21lbnQsIHNlZ21lbnQudGltZSBpc1xuICAgIC8vIGNhbGN1bGF0ZWQgaW4gbXBkLXBhcnNlciBwcmlvciB0byB0aGlzLCBzbyBpdCdzIGFzc3VtZWQgdG8gYmUgYXZhaWxhYmxlLlxuICAgIGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQgKyAoc2VnbWVudC50aW1lIC0gcHJlc2VudGF0aW9uVGltZU9mZnNldCkgLyB0aW1lc2NhbGU7XG4gICAgdmFyIG1hcCA9IHtcbiAgICAgIHVyaTogdXJpLFxuICAgICAgdGltZWxpbmU6IHNlZ21lbnQudGltZWxpbmUsXG4gICAgICBkdXJhdGlvbjogc2VnbWVudC5kdXJhdGlvbixcbiAgICAgIHJlc29sdmVkVXJpOiByZXNvbHZlVXJsKGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJywgdXJpKSxcbiAgICAgIG1hcDogbWFwU2VnbWVudCxcbiAgICAgIG51bWJlcjogc2VnbWVudC5udW1iZXIsXG4gICAgICBwcmVzZW50YXRpb25UaW1lOiBwcmVzZW50YXRpb25UaW1lXG4gICAgfTtcbiAgICByZXR1cm4gbWFwO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSA8U2VnbWVudFVybD4gKG9mIHR5cGUgVVJMVHlwZSBmcm9tIHRoZSBEQVNIIHNwZWMgNS4zLjkuMiBUYWJsZSAxNClcbiAqIHRvIGFuIG9iamVjdCB0aGF0IG1hdGNoZXMgdGhlIG91dHB1dCBvZiBhIHNlZ21lbnQgaW4gdmlkZW9qcy9tcGQtcGFyc2VyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWdtZW50VXJsXG4gKiAgIDxTZWdtZW50VVJMPiBub2RlIHRvIHRyYW5zbGF0ZSBpbnRvIGEgc2VnbWVudCBvYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gdHJhbnNsYXRlZCBzZWdtZW50IG9iamVjdFxuICovXG5cbnZhciBTZWdtZW50VVJMVG9TZWdtZW50T2JqZWN0ID0gZnVuY3Rpb24gU2VnbWVudFVSTFRvU2VnbWVudE9iamVjdChhdHRyaWJ1dGVzLCBzZWdtZW50VXJsKSB7XG4gIHZhciBiYXNlVXJsID0gYXR0cmlidXRlcy5iYXNlVXJsLFxuICAgICAgX2F0dHJpYnV0ZXMkaW5pdGlhbGl6ID0gYXR0cmlidXRlcy5pbml0aWFsaXphdGlvbixcbiAgICAgIGluaXRpYWxpemF0aW9uID0gX2F0dHJpYnV0ZXMkaW5pdGlhbGl6ID09PSB2b2lkIDAgPyB7fSA6IF9hdHRyaWJ1dGVzJGluaXRpYWxpejtcbiAgdmFyIGluaXRTZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybDogYmFzZVVybCxcbiAgICBzb3VyY2U6IGluaXRpYWxpemF0aW9uLnNvdXJjZVVSTCxcbiAgICByYW5nZTogaW5pdGlhbGl6YXRpb24ucmFuZ2VcbiAgfSk7XG4gIHZhciBzZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybDogYmFzZVVybCxcbiAgICBzb3VyY2U6IHNlZ21lbnRVcmwubWVkaWEsXG4gICAgcmFuZ2U6IHNlZ21lbnRVcmwubWVkaWFSYW5nZVxuICB9KTtcbiAgc2VnbWVudC5tYXAgPSBpbml0U2VnbWVudDtcbiAgcmV0dXJuIHNlZ21lbnQ7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHNlZ21lbnRzIHVzaW5nIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBTZWdtZW50TGlzdCBlbGVtZW50XG4gKiBTZWdtZW50TGlzdCAoREFTSCBTUEVDIFNlY3Rpb24gNS4zLjkuMy4yKSBjb250YWlucyBhIHNldCBvZiA8U2VnbWVudFVSTD4gbm9kZXMuICBFYWNoXG4gKiBub2RlIHNob3VsZCBiZSB0cmFuc2xhdGVkIGludG8gc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXXx1bmRlZmluZWR9IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICogICAgICAgIHRoZSBTZWdtZW50VGltZWxpbmUgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0LjxBcnJheT59IGxpc3Qgb2Ygc2VnbWVudHNcbiAqL1xuXG5cbnZhciBzZWdtZW50c0Zyb21MaXN0ID0gZnVuY3Rpb24gc2VnbWVudHNGcm9tTGlzdChhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpIHtcbiAgdmFyIGR1cmF0aW9uID0gYXR0cmlidXRlcy5kdXJhdGlvbixcbiAgICAgIF9hdHRyaWJ1dGVzJHNlZ21lbnRVciA9IGF0dHJpYnV0ZXMuc2VnbWVudFVybHMsXG4gICAgICBzZWdtZW50VXJscyA9IF9hdHRyaWJ1dGVzJHNlZ21lbnRVciA9PT0gdm9pZCAwID8gW10gOiBfYXR0cmlidXRlcyRzZWdtZW50VXIsXG4gICAgICBwZXJpb2RTdGFydCA9IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQ7IC8vIFBlciBzcGVjICg1LjMuOS4yLjEpIG5vIHdheSB0byBkZXRlcm1pbmUgc2VnbWVudCBkdXJhdGlvbiBPUlxuICAvLyBpZiBib3RoIFNlZ21lbnRUaW1lbGluZSBhbmQgQGR1cmF0aW9uIGFyZSBkZWZpbmVkLCBpdCBpcyBvdXRzaWRlIG9mIHNwZWMuXG5cbiAgaWYgKCFkdXJhdGlvbiAmJiAhc2VnbWVudFRpbWVsaW5lIHx8IGR1cmF0aW9uICYmIHNlZ21lbnRUaW1lbGluZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuU0VHTUVOVF9USU1FX1VOU1BFQ0lGSUVEKTtcbiAgfVxuXG4gIHZhciBzZWdtZW50VXJsTWFwID0gc2VnbWVudFVybHMubWFwKGZ1bmN0aW9uIChzZWdtZW50VXJsT2JqZWN0KSB7XG4gICAgcmV0dXJuIFNlZ21lbnRVUkxUb1NlZ21lbnRPYmplY3QoYXR0cmlidXRlcywgc2VnbWVudFVybE9iamVjdCk7XG4gIH0pO1xuICB2YXIgc2VnbWVudFRpbWVJbmZvO1xuXG4gIGlmIChkdXJhdGlvbikge1xuICAgIHNlZ21lbnRUaW1lSW5mbyA9IHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIGlmIChzZWdtZW50VGltZWxpbmUpIHtcbiAgICBzZWdtZW50VGltZUluZm8gPSBwYXJzZUJ5VGltZWxpbmUoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKTtcbiAgfVxuXG4gIHZhciBzZWdtZW50cyA9IHNlZ21lbnRUaW1lSW5mby5tYXAoZnVuY3Rpb24gKHNlZ21lbnRUaW1lLCBpbmRleCkge1xuICAgIGlmIChzZWdtZW50VXJsTWFwW2luZGV4XSkge1xuICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50VXJsTWFwW2luZGV4XTsgLy8gU2VlIERBU0ggc3BlYyBzZWN0aW9uIDUuMy45LjIuMlxuICAgICAgLy8gLSBpZiB0aW1lc2NhbGUgaXNuJ3QgcHJlc2VudCBvbiBhbnkgbGV2ZWwsIGRlZmF1bHQgdG8gMS5cblxuICAgICAgdmFyIHRpbWVzY2FsZSA9IGF0dHJpYnV0ZXMudGltZXNjYWxlIHx8IDE7IC8vIC0gaWYgcHJlc2VudGF0aW9uVGltZU9mZnNldCBpc24ndCBwcmVzZW50IG9uIGFueSBsZXZlbCwgZGVmYXVsdCB0byAwXG5cbiAgICAgIHZhciBwcmVzZW50YXRpb25UaW1lT2Zmc2V0ID0gYXR0cmlidXRlcy5wcmVzZW50YXRpb25UaW1lT2Zmc2V0IHx8IDA7XG4gICAgICBzZWdtZW50LnRpbWVsaW5lID0gc2VnbWVudFRpbWUudGltZWxpbmU7XG4gICAgICBzZWdtZW50LmR1cmF0aW9uID0gc2VnbWVudFRpbWUuZHVyYXRpb247XG4gICAgICBzZWdtZW50Lm51bWJlciA9IHNlZ21lbnRUaW1lLm51bWJlcjtcbiAgICAgIHNlZ21lbnQucHJlc2VudGF0aW9uVGltZSA9IHBlcmlvZFN0YXJ0ICsgKHNlZ21lbnRUaW1lLnRpbWUgLSBwcmVzZW50YXRpb25UaW1lT2Zmc2V0KSAvIHRpbWVzY2FsZTtcbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0gLy8gU2luY2Ugd2UncmUgbWFwcGluZyB3ZSBzaG91bGQgZ2V0IHJpZCBvZiBhbnkgYmxhbmsgc2VnbWVudHMgKGluIGNhc2VcbiAgICAvLyB0aGUgZ2l2ZW4gU2VnbWVudFRpbWVsaW5lIGlzIGhhbmRsaW5nIGZvciBtb3JlIGVsZW1lbnRzIHRoYW4gd2UgaGF2ZVxuICAgIC8vIFNlZ21lbnRVUkxzIGZvcikuXG5cbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgcmV0dXJuIHNlZ21lbnQ7XG4gIH0pO1xuICByZXR1cm4gc2VnbWVudHM7XG59O1xuXG52YXIgZ2VuZXJhdGVTZWdtZW50cyA9IGZ1bmN0aW9uIGdlbmVyYXRlU2VnbWVudHMoX3JlZikge1xuICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHNlZ21lbnRJbmZvID0gX3JlZi5zZWdtZW50SW5mbztcbiAgdmFyIHNlZ21lbnRBdHRyaWJ1dGVzO1xuICB2YXIgc2VnbWVudHNGbjtcblxuICBpZiAoc2VnbWVudEluZm8udGVtcGxhdGUpIHtcbiAgICBzZWdtZW50c0ZuID0gc2VnbWVudHNGcm9tVGVtcGxhdGU7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMgPSBtZXJnZShhdHRyaWJ1dGVzLCBzZWdtZW50SW5mby50ZW1wbGF0ZSk7XG4gIH0gZWxzZSBpZiAoc2VnbWVudEluZm8uYmFzZSkge1xuICAgIHNlZ21lbnRzRm4gPSBzZWdtZW50c0Zyb21CYXNlO1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzID0gbWVyZ2UoYXR0cmlidXRlcywgc2VnbWVudEluZm8uYmFzZSk7XG4gIH0gZWxzZSBpZiAoc2VnbWVudEluZm8ubGlzdCkge1xuICAgIHNlZ21lbnRzRm4gPSBzZWdtZW50c0Zyb21MaXN0O1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzID0gbWVyZ2UoYXR0cmlidXRlcywgc2VnbWVudEluZm8ubGlzdCk7XG4gIH1cblxuICB2YXIgc2VnbWVudHNJbmZvID0ge1xuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcblxuICBpZiAoIXNlZ21lbnRzRm4pIHtcbiAgICByZXR1cm4gc2VnbWVudHNJbmZvO1xuICB9XG5cbiAgdmFyIHNlZ21lbnRzID0gc2VnbWVudHNGbihzZWdtZW50QXR0cmlidXRlcywgc2VnbWVudEluZm8uc2VnbWVudFRpbWVsaW5lKTsgLy8gVGhlIEBkdXJhdGlvbiBhdHRyaWJ1dGUgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluIHRoZSBwbGF5bGlzdCdzIHRhcmdldER1cmF0aW9uIHdoaWNoXG4gIC8vIG11c3QgYmUgaW4gc2Vjb25kcy4gU2luY2Ugd2UndmUgZ2VuZXJhdGVkIHRoZSBzZWdtZW50IGxpc3QsIHdlIG5vIGxvbmdlciBuZWVkXG4gIC8vIEBkdXJhdGlvbiB0byBiZSBpbiBAdGltZXNjYWxlIHVuaXRzLCBzbyB3ZSBjYW4gY29udmVydCBpdCBoZXJlLlxuXG4gIGlmIChzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbikge1xuICAgIHZhciBfc2VnbWVudEF0dHJpYnV0ZXMgPSBzZWdtZW50QXR0cmlidXRlcyxcbiAgICAgICAgZHVyYXRpb24gPSBfc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgICAgIF9zZWdtZW50QXR0cmlidXRlcyR0aSA9IF9zZWdtZW50QXR0cmlidXRlcy50aW1lc2NhbGUsXG4gICAgICAgIHRpbWVzY2FsZSA9IF9zZWdtZW50QXR0cmlidXRlcyR0aSA9PT0gdm9pZCAwID8gMSA6IF9zZWdtZW50QXR0cmlidXRlcyR0aTtcbiAgICBzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbiA9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xuICB9IGVsc2UgaWYgKHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIEBkdXJhdGlvbiBhdHRyaWJ1dGUsIHVzZSB0aGUgbGFyZ2VzdCBzZWdtZW50IGR1cmF0aW9uIGFzXG4gICAgLy8gYXMgdGFyZ2V0IGR1cmF0aW9uXG4gICAgc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24gPSBzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKG1heCwgc2VnbWVudCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KG1heCwgTWF0aC5jZWlsKHNlZ21lbnQuZHVyYXRpb24pKTtcbiAgICB9LCAwKTtcbiAgfSBlbHNlIHtcbiAgICBzZWdtZW50QXR0cmlidXRlcy5kdXJhdGlvbiA9IDA7XG4gIH1cblxuICBzZWdtZW50c0luZm8uYXR0cmlidXRlcyA9IHNlZ21lbnRBdHRyaWJ1dGVzO1xuICBzZWdtZW50c0luZm8uc2VnbWVudHMgPSBzZWdtZW50czsgLy8gVGhpcyBpcyBhIHNpZHggYm94IHdpdGhvdXQgYWN0dWFsIHNlZ21lbnQgaW5mb3JtYXRpb25cblxuICBpZiAoc2VnbWVudEluZm8uYmFzZSAmJiBzZWdtZW50QXR0cmlidXRlcy5pbmRleFJhbmdlKSB7XG4gICAgc2VnbWVudHNJbmZvLnNpZHggPSBzZWdtZW50c1swXTtcbiAgICBzZWdtZW50c0luZm8uc2VnbWVudHMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50c0luZm87XG59O1xudmFyIHRvUGxheWxpc3RzID0gZnVuY3Rpb24gdG9QbGF5bGlzdHMocmVwcmVzZW50YXRpb25zKSB7XG4gIHJldHVybiByZXByZXNlbnRhdGlvbnMubWFwKGdlbmVyYXRlU2VnbWVudHMpO1xufTtcblxudmFyIGZpbmRDaGlsZHJlbiA9IGZ1bmN0aW9uIGZpbmRDaGlsZHJlbihlbGVtZW50LCBuYW1lKSB7XG4gIHJldHVybiBmcm9tKGVsZW1lbnQuY2hpbGROb2RlcykuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHRhZ05hbWUgPSBfcmVmLnRhZ05hbWU7XG4gICAgcmV0dXJuIHRhZ05hbWUgPT09IG5hbWU7XG4gIH0pO1xufTtcbnZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbn07XG5cbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihzdHIpIHtcbiAgdmFyIFNFQ09ORFNfSU5fWUVBUiA9IDM2NSAqIDI0ICogNjAgKiA2MDtcbiAgdmFyIFNFQ09ORFNfSU5fTU9OVEggPSAzMCAqIDI0ICogNjAgKiA2MDtcbiAgdmFyIFNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwO1xuICB2YXIgU0VDT05EU19JTl9IT1VSID0gNjAgKiA2MDtcbiAgdmFyIFNFQ09ORFNfSU5fTUlOID0gNjA7IC8vIFAxMFkxME0xMERUMTBIMTBNMTAuMVNcblxuICB2YXIgZHVyYXRpb25SZWdleCA9IC9QKD86KFxcZCopWSk/KD86KFxcZCopTSk/KD86KFxcZCopRCk/KD86VCg/OihcXGQqKUgpPyg/OihcXGQqKU0pPyg/OihbXFxkLl0qKVMpPyk/LztcbiAgdmFyIG1hdGNoID0gZHVyYXRpb25SZWdleC5leGVjKHN0cik7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIF9tYXRjaCRzbGljZSA9IG1hdGNoLnNsaWNlKDEpLFxuICAgICAgeWVhciA9IF9tYXRjaCRzbGljZVswXSxcbiAgICAgIG1vbnRoID0gX21hdGNoJHNsaWNlWzFdLFxuICAgICAgZGF5ID0gX21hdGNoJHNsaWNlWzJdLFxuICAgICAgaG91ciA9IF9tYXRjaCRzbGljZVszXSxcbiAgICAgIG1pbnV0ZSA9IF9tYXRjaCRzbGljZVs0XSxcbiAgICAgIHNlY29uZCA9IF9tYXRjaCRzbGljZVs1XTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCh5ZWFyIHx8IDApICogU0VDT05EU19JTl9ZRUFSICsgcGFyc2VGbG9hdChtb250aCB8fCAwKSAqIFNFQ09ORFNfSU5fTU9OVEggKyBwYXJzZUZsb2F0KGRheSB8fCAwKSAqIFNFQ09ORFNfSU5fREFZICsgcGFyc2VGbG9hdChob3VyIHx8IDApICogU0VDT05EU19JTl9IT1VSICsgcGFyc2VGbG9hdChtaW51dGUgfHwgMCkgKiBTRUNPTkRTX0lOX01JTiArIHBhcnNlRmxvYXQoc2Vjb25kIHx8IDApO1xufTtcbnZhciBwYXJzZURhdGUgPSBmdW5jdGlvbiBwYXJzZURhdGUoc3RyKSB7XG4gIC8vIERhdGUgZm9ybWF0IHdpdGhvdXQgdGltZXpvbmUgYWNjb3JkaW5nIHRvIElTTyA4NjAxXG4gIC8vIFlZWS1NTS1ERFRoaDptbTpzcy5zc3Nzc3NcbiAgdmFyIGRhdGVSZWdleCA9IC9eXFxkKy1cXGQrLVxcZCtUXFxkKzpcXGQrOlxcZCsoXFwuXFxkKyk/JC87IC8vIElmIHRoZSBkYXRlIHN0cmluZyBkb2VzIG5vdCBzcGVjaWZpeSBhIHRpbWV6b25lLCB3ZSBtdXN0IHNwZWNpZml5IFVUQy4gVGhpcyBpc1xuICAvLyBleHByZXNzZWQgYnkgZW5kaW5nIHdpdGggJ1onXG5cbiAgaWYgKGRhdGVSZWdleC50ZXN0KHN0cikpIHtcbiAgICBzdHIgKz0gJ1onO1xuICB9XG5cbiAgcmV0dXJuIERhdGUucGFyc2Uoc3RyKTtcbn07XG5cbnZhciBwYXJzZXJzID0ge1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBkdXJhdGlvbiBvZiB0aGUgZW50aXJlIE1lZGlhIFByZXNlbnRhdGlvbi4gRm9ybWF0IGlzIGEgZHVyYXRpb24gc3RyaW5nXG4gICAqIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIG1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb246IGZ1bmN0aW9uIG1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgU2VnbWVudCBhdmFpbGFiaWxpdHkgc3RhcnQgdGltZSBmb3IgYWxsIFNlZ21lbnRzIHJlZmVycmVkIHRvIGluIHRoaXNcbiAgICogTVBELiBGb3IgYSBkeW5hbWljIG1hbmlmZXN0LCBpdCBzcGVjaWZpZXMgdGhlIGFuY2hvciBmb3IgdGhlIGVhcmxpZXN0IGF2YWlsYWJpbGl0eVxuICAgKiB0aW1lLiBGb3JtYXQgaXMgYSBkYXRlIHN0cmluZyBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkYXRlIGFzIHNlY29uZHMgZnJvbSB1bml4IGVwb2NoXG4gICAqL1xuICBhdmFpbGFiaWxpdHlTdGFydFRpbWU6IGZ1bmN0aW9uIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZURhdGUodmFsdWUpIC8gMTAwMDtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzbWFsbGVzdCBwZXJpb2QgYmV0d2VlbiBwb3RlbnRpYWwgY2hhbmdlcyB0byB0aGUgTVBELiBGb3JtYXQgaXMgYVxuICAgKiBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgbWluaW11bVVwZGF0ZVBlcmlvZDogZnVuY3Rpb24gbWluaW11bVVwZGF0ZVBlcmlvZCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzdWdnZXN0ZWQgcHJlc2VudGF0aW9uIGRlbGF5LiBGb3JtYXQgaXMgYVxuICAgKiBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgc3VnZ2VzdGVkUHJlc2VudGF0aW9uRGVsYXk6IGZ1bmN0aW9uIHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBzcGVjaWZpY2VzIHRoZSB0eXBlIG9mIG1wZC4gQ2FuIGJlIGVpdGhlciBcInN0YXRpY1wiIG9yIFwiZHluYW1pY1wiXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBUaGUgdHlwZSBhcyBhIHN0cmluZ1xuICAgKi9cbiAgdHlwZTogZnVuY3Rpb24gdHlwZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBkdXJhdGlvbiBvZiB0aGUgc21hbGxlc3QgdGltZSBzaGlmdGluZyBidWZmZXIgZm9yIGFueSBSZXByZXNlbnRhdGlvblxuICAgKiBpbiB0aGUgTVBELiBGb3JtYXQgaXMgYSBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgdGltZVNoaWZ0QnVmZmVyRGVwdGg6IGZ1bmN0aW9uIHRpbWVTaGlmdEJ1ZmZlckRlcHRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFBlcmlvZFN0YXJ0IHRpbWUgb2YgdGhlIFBlcmlvZCByZWxhdGl2ZSB0byB0aGUgYXZhaWxhYmlsaXR5U3RhcnR0aW1lLlxuICAgKiBGb3JtYXQgaXMgYSBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSB2aXN1YWwgcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHdpZHRoXG4gICAqL1xuICB3aWR0aDogZnVuY3Rpb24gd2lkdGgodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBoZWlnaHQgb2YgdGhlIHZpc3VhbCBwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgaGVpZ2h0XG4gICAqL1xuICBoZWlnaHQ6IGZ1bmN0aW9uIGhlaWdodCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGJpdHJhdGUgb2YgdGhlIHJlcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGJhbmR3aWR0aFxuICAgKi9cbiAgYmFuZHdpZHRoOiBmdW5jdGlvbiBiYW5kd2lkdGgodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGhlIGZpcnN0IE1lZGlhIFNlZ21lbnQgaW4gdGhpcyBSZXByZXNlbnRhdGlvbiBpbiB0aGUgUGVyaW9kXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIG51bWJlclxuICAgKi9cbiAgc3RhcnROdW1iZXI6IGZ1bmN0aW9uIHN0YXJ0TnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgdGltZXNjYWxlIGluIHVuaXRzIHBlciBzZWNvbmRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIHRpbWVzY2FsZVxuICAgKi9cbiAgdGltZXNjYWxlOiBmdW5jdGlvbiB0aW1lc2NhbGUodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBwcmVzZW50YXRpb25UaW1lT2Zmc2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgcHJlc2VudGF0aW9uVGltZU9mZnNldFxuICAgKi9cbiAgcHJlc2VudGF0aW9uVGltZU9mZnNldDogZnVuY3Rpb24gcHJlc2VudGF0aW9uVGltZU9mZnNldCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGNvbnN0YW50IGFwcHJveGltYXRlIFNlZ21lbnQgZHVyYXRpb25cbiAgICogTk9URTogVGhlIDxQZXJpb2Q+IGVsZW1lbnQgYWxzbyBjb250YWlucyBhbiBAZHVyYXRpb24gYXR0cmlidXRlLiBUaGlzIGR1cmF0aW9uXG4gICAqICAgICAgIHNwZWNpZmllcyB0aGUgZHVyYXRpb24gb2YgdGhlIFBlcmlvZC4gVGhpcyBhdHRyaWJ1dGUgaXMgY3VycmVudGx5IG5vdFxuICAgKiAgICAgICBzdXBwb3J0ZWQgYnkgdGhlIHJlc3Qgb2YgdGhlIHBhcnNlciwgaG93ZXZlciB3ZSBzdGlsbCBjaGVjayBmb3IgaXQgdG8gcHJldmVudFxuICAgKiAgICAgICBlcnJvcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGR1cmF0aW9uXG4gICAqL1xuICBkdXJhdGlvbjogZnVuY3Rpb24gZHVyYXRpb24odmFsdWUpIHtcbiAgICB2YXIgcGFyc2VkVmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgaWYgKGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBTZWdtZW50IGR1cmF0aW9uLCBpbiB1bml0cyBvZiB0aGUgdmFsdWUgb2YgdGhlIEB0aW1lc2NhbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGR1cmF0aW9uXG4gICAqL1xuICBkOiBmdW5jdGlvbiBkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgTVBEIHN0YXJ0IHRpbWUsIGluIEB0aW1lc2NhbGUgdW5pdHMsIHRoZSBmaXJzdCBTZWdtZW50IGluIHRoZSBzZXJpZXNcbiAgICogc3RhcnRzIHJlbGF0aXZlIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIFBlcmlvZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCB0aW1lXG4gICAqL1xuICB0OiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcmVwZWF0IGNvdW50IG9mIHRoZSBudW1iZXIgb2YgZm9sbG93aW5nIGNvbnRpZ3VvdXMgU2VnbWVudHMgd2l0aCB0aGVcbiAgICogc2FtZSBkdXJhdGlvbiBleHByZXNzZWQgYnkgdGhlIHZhbHVlIG9mIEBkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIG51bWJlclxuICAgKi9cbiAgcjogZnVuY3Rpb24gcih2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHBhcnNlciBmb3IgYWxsIG90aGVyIGF0dHJpYnV0ZXMuIEFjdHMgYXMgYSBuby1vcCBhbmQganVzdCByZXR1cm5zIHRoZSB2YWx1ZVxuICAgKiBhcyBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVW5wYXJzZWQgdmFsdWVcbiAgICovXG4gIERFRkFVTFQ6IGZ1bmN0aW9uIERFRkFVTFQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG4vKipcbiAqIEdldHMgYWxsIHRoZSBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXMgb2YgdGhlIHByb3ZpZGVkIG5vZGUsIHBhcnNlcyBhdHRyaWJ1dGVzIHdpdGgga25vd25cbiAqIHR5cGVzLCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhdHRyaWJ1dGUgbmFtZXMgbWFwcGVkIHRvIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiAgICAgICAgVGhlIG5vZGUgdG8gcGFyc2UgYXR0cmlidXRlcyBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIE9iamVjdCB3aXRoIGFsbCBhdHRyaWJ1dGVzIG9mIGVsIHBhcnNlZFxuICovXG5cbnZhciBwYXJzZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZXMoZWwpIHtcbiAgaWYgKCEoZWwgJiYgZWwuYXR0cmlidXRlcykpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZXR1cm4gZnJvbShlbC5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGUpIHtcbiAgICB2YXIgcGFyc2VGbiA9IHBhcnNlcnNbZS5uYW1lXSB8fCBwYXJzZXJzLkRFRkFVTFQ7XG4gICAgYVtlLm5hbWVdID0gcGFyc2VGbihlLnZhbHVlKTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufTtcblxudmFyIGtleVN5c3RlbXNNYXAgPSB7XG4gICd1cm46dXVpZDoxMDc3ZWZlYy1jMGIyLTRkMDItYWNlMy0zYzFlNTJlMmZiNGInOiAnb3JnLnczLmNsZWFya2V5JyxcbiAgJ3Vybjp1dWlkOmVkZWY4YmE5LTc5ZDYtNGFjZS1hM2M4LTI3ZGNkNTFkMjFlZCc6ICdjb20ud2lkZXZpbmUuYWxwaGEnLFxuICAndXJuOnV1aWQ6OWEwNGYwNzktOTg0MC00Mjg2LWFiOTItZTY1YmUwODg1Zjk1JzogJ2NvbS5taWNyb3NvZnQucGxheXJlYWR5JyxcbiAgJ3Vybjp1dWlkOmYyMzllNzY5LWVmYTMtNDg1MC05YzE2LWE5MDNjNjkzMmVmYic6ICdjb20uYWRvYmUucHJpbWV0aW1lJ1xufTtcbi8qKlxuICogQnVpbGRzIGEgbGlzdCBvZiB1cmxzIHRoYXQgaXMgdGhlIHByb2R1Y3Qgb2YgdGhlIHJlZmVyZW5jZSB1cmxzIGFuZCBCYXNlVVJMIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZmVyZW5jZVVybHNcbiAqICAgICAgICBMaXN0IG9mIHJlZmVyZW5jZSB1cmxzIHRvIHJlc29sdmUgdG9cbiAqIEBwYXJhbSB7Tm9kZVtdfSBiYXNlVXJsRWxlbWVudHNcbiAqICAgICAgICBMaXN0IG9mIEJhc2VVUkwgbm9kZXMgZnJvbSB0aGUgbXBkXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgTGlzdCBvZiByZXNvbHZlZCB1cmxzXG4gKi9cblxudmFyIGJ1aWxkQmFzZVVybHMgPSBmdW5jdGlvbiBidWlsZEJhc2VVcmxzKHJlZmVyZW5jZVVybHMsIGJhc2VVcmxFbGVtZW50cykge1xuICBpZiAoIWJhc2VVcmxFbGVtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlVXJscztcbiAgfVxuXG4gIHJldHVybiBmbGF0dGVuKHJlZmVyZW5jZVVybHMubWFwKGZ1bmN0aW9uIChyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gYmFzZVVybEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoYmFzZVVybEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiByZXNvbHZlVXJsKHJlZmVyZW5jZSwgZ2V0Q29udGVudChiYXNlVXJsRWxlbWVudCkpO1xuICAgIH0pO1xuICB9KSk7XG59O1xuLyoqXG4gKiBDb250YWlucyBhbGwgU2VnbWVudCBpbmZvcm1hdGlvbiBmb3IgaXRzIGNvbnRhaW5pbmcgQWRhcHRhdGlvblNldFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNlZ21lbnRJbmZvcm1hdGlvblxuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSB0ZW1wbGF0ZVxuICogICAgICAgICAgIENvbnRhaW5zIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgU2VnbWVudFRlbXBsYXRlIG5vZGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICAgICBDb250YWlucyBhIGxpc3Qgb2YgYXRycmlidXRlcyBmb3IgZWFjaCBTIG5vZGUgd2l0aGluIHRoZSBTZWdtZW50VGltZWxpbmUgbm9kZVxuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSBsaXN0XG4gKiAgICAgICAgICAgQ29udGFpbnMgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBTZWdtZW50TGlzdCBub2RlXG4gKiBAcHJvcGVydHkge09iamVjdHx1bmRlZmluZWR9IGJhc2VcbiAqICAgICAgICAgICBDb250YWlucyB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIFNlZ21lbnRCYXNlIG5vZGVcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYWxsIGF2YWlsYWJsZSBTZWdtZW50IGluZm9ybWF0aW9uIGNvbnRhaW5lZCB3aXRoaW4gdGhlIEFkYXB0YXRpb25TZXQgbm9kZVxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gYWRhcHRhdGlvblNldFxuICogICAgICAgIFRoZSBBZGFwdGF0aW9uU2V0IG5vZGUgdG8gZ2V0IFNlZ21lbnQgaW5mb3JtYXRpb24gZnJvbVxuICogQHJldHVybiB7U2VnbWVudEluZm9ybWF0aW9ufVxuICogICAgICAgICBUaGUgU2VnbWVudCBpbmZvcm1hdGlvbiBjb250YWluZWQgd2l0aGluIHRoZSBwcm92aWRlZCBBZGFwdGF0aW9uU2V0XG4gKi9cblxudmFyIGdldFNlZ21lbnRJbmZvcm1hdGlvbiA9IGZ1bmN0aW9uIGdldFNlZ21lbnRJbmZvcm1hdGlvbihhZGFwdGF0aW9uU2V0KSB7XG4gIHZhciBzZWdtZW50VGVtcGxhdGUgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1NlZ21lbnRUZW1wbGF0ZScpWzBdO1xuICB2YXIgc2VnbWVudExpc3QgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1NlZ21lbnRMaXN0JylbMF07XG4gIHZhciBzZWdtZW50VXJscyA9IHNlZ21lbnRMaXN0ICYmIGZpbmRDaGlsZHJlbihzZWdtZW50TGlzdCwgJ1NlZ21lbnRVUkwnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gbWVyZ2Uoe1xuICAgICAgdGFnOiAnU2VnbWVudFVSTCdcbiAgICB9LCBwYXJzZUF0dHJpYnV0ZXMocykpO1xuICB9KTtcbiAgdmFyIHNlZ21lbnRCYXNlID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdTZWdtZW50QmFzZScpWzBdO1xuICB2YXIgc2VnbWVudFRpbWVsaW5lUGFyZW50Tm9kZSA9IHNlZ21lbnRMaXN0IHx8IHNlZ21lbnRUZW1wbGF0ZTtcbiAgdmFyIHNlZ21lbnRUaW1lbGluZSA9IHNlZ21lbnRUaW1lbGluZVBhcmVudE5vZGUgJiYgZmluZENoaWxkcmVuKHNlZ21lbnRUaW1lbGluZVBhcmVudE5vZGUsICdTZWdtZW50VGltZWxpbmUnKVswXTtcbiAgdmFyIHNlZ21lbnRJbml0aWFsaXphdGlvblBhcmVudE5vZGUgPSBzZWdtZW50TGlzdCB8fCBzZWdtZW50QmFzZSB8fCBzZWdtZW50VGVtcGxhdGU7XG4gIHZhciBzZWdtZW50SW5pdGlhbGl6YXRpb24gPSBzZWdtZW50SW5pdGlhbGl6YXRpb25QYXJlbnROb2RlICYmIGZpbmRDaGlsZHJlbihzZWdtZW50SW5pdGlhbGl6YXRpb25QYXJlbnROb2RlLCAnSW5pdGlhbGl6YXRpb24nKVswXTsgLy8gU2VnbWVudFRlbXBsYXRlIGlzIGhhbmRsZWQgc2xpZ2h0bHkgZGlmZmVyZW50bHksIHNpbmNlIGl0IGNhbiBoYXZlIGJvdGhcbiAgLy8gQGluaXRpYWxpemF0aW9uIGFuZCBhbiA8SW5pdGlhbGl6YXRpb24+IG5vZGUuICBAaW5pdGlhbGl6YXRpb24gY2FuIGJlIHRlbXBsYXRlZCxcbiAgLy8gd2hpbGUgdGhlIG5vZGUgY2FuIGhhdmUgYSB1cmwgYW5kIHJhbmdlIHNwZWNpZmllZC4gIElmIHRoZSA8U2VnbWVudFRlbXBsYXRlPiBoYXNcbiAgLy8gYm90aCBAaW5pdGlhbGl6YXRpb24gYW5kIGFuIDxJbml0aWFsaXphdGlvbj4gc3ViZWxlbWVudCB3ZSBvcHQgdG8gb3ZlcnJpZGUgd2l0aFxuICAvLyB0aGUgbm9kZSwgYXMgdGhpcyBpbnRlcmFjdGlvbiBpcyBub3QgZGVmaW5lZCBpbiB0aGUgc3BlYy5cblxuICB2YXIgdGVtcGxhdGUgPSBzZWdtZW50VGVtcGxhdGUgJiYgcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRUZW1wbGF0ZSk7XG5cbiAgaWYgKHRlbXBsYXRlICYmIHNlZ21lbnRJbml0aWFsaXphdGlvbikge1xuICAgIHRlbXBsYXRlLmluaXRpYWxpemF0aW9uID0gc2VnbWVudEluaXRpYWxpemF0aW9uICYmIHBhcnNlQXR0cmlidXRlcyhzZWdtZW50SW5pdGlhbGl6YXRpb24pO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlLmluaXRpYWxpemF0aW9uKSB7XG4gICAgLy8gSWYgaXQgaXMgQGluaXRpYWxpemF0aW9uIHdlIGNvbnZlcnQgaXQgdG8gYW4gb2JqZWN0IHNpbmNlIHRoaXMgaXMgdGhlIGZvcm1hdCB0aGF0XG4gICAgLy8gbGF0ZXIgZnVuY3Rpb25zIHdpbGwgcmVseSBvbiBmb3IgdGhlIGluaXRpYWxpemF0aW9uIHNlZ21lbnQuICBUaGlzIGlzIG9ubHkgdmFsaWRcbiAgICAvLyBmb3IgPFNlZ21lbnRUZW1wbGF0ZT5cbiAgICB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvbiA9IHtcbiAgICAgIHNvdXJjZVVSTDogdGVtcGxhdGUuaW5pdGlhbGl6YXRpb25cbiAgICB9O1xuICB9XG5cbiAgdmFyIHNlZ21lbnRJbmZvID0ge1xuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICBzZWdtZW50VGltZWxpbmU6IHNlZ21lbnRUaW1lbGluZSAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudFRpbWVsaW5lLCAnUycpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHBhcnNlQXR0cmlidXRlcyhzKTtcbiAgICB9KSxcbiAgICBsaXN0OiBzZWdtZW50TGlzdCAmJiBtZXJnZShwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudExpc3QpLCB7XG4gICAgICBzZWdtZW50VXJsczogc2VnbWVudFVybHMsXG4gICAgICBpbml0aWFsaXphdGlvbjogcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRJbml0aWFsaXphdGlvbilcbiAgICB9KSxcbiAgICBiYXNlOiBzZWdtZW50QmFzZSAmJiBtZXJnZShwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudEJhc2UpLCB7XG4gICAgICBpbml0aWFsaXphdGlvbjogcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRJbml0aWFsaXphdGlvbilcbiAgICB9KVxuICB9O1xuICBPYmplY3Qua2V5cyhzZWdtZW50SW5mbykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFzZWdtZW50SW5mb1trZXldKSB7XG4gICAgICBkZWxldGUgc2VnbWVudEluZm9ba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VnbWVudEluZm87XG59O1xuLyoqXG4gKiBDb250YWlucyBTZWdtZW50IGluZm9ybWF0aW9uIGFuZCBhdHRyaWJ1dGVzIG5lZWRlZCB0byBjb25zdHJ1Y3QgYSBQbGF5bGlzdCBvYmplY3RcbiAqIGZyb20gYSBSZXByZXNlbnRhdGlvblxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25cbiAqIEBwcm9wZXJ0eSB7U2VnbWVudEluZm9ybWF0aW9ufSBzZWdtZW50SW5mb1xuICogICAgICAgICAgIFNlZ21lbnQgaW5mb3JtYXRpb24gZm9yIHRoaXMgUmVwcmVzZW50YXRpb25cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgICAgSW5oZXJpdGVkIGF0dHJpYnV0ZXMgZm9yIHRoaXMgUmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIE1hcHMgYSBSZXByZXNlbnRhdGlvbiBub2RlIHRvIGFuIG9iamVjdCBjb250YWluaW5nIFNlZ21lbnQgaW5mb3JtYXRpb24gYW5kIGF0dHJpYnV0ZXNcbiAqXG4gKiBAbmFtZSBpbmhlcml0QmFzZVVybHNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge05vZGV9IHJlcHJlc2VudGF0aW9uXG4gKiAgICAgICAgUmVwcmVzZW50YXRpb24gbm9kZSBmcm9tIHRoZSBtcGRcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb259XG4gKiAgICAgICAgIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG5lZWRlZCB0byBjb25zdHJ1Y3QgYSBQbGF5bGlzdCBvYmplY3RcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBSZXByZXNlbnRhdGlvbiBub2RlcyB0b1xuICogU2VnbWVudCBpbmZvcm1hdGlvbiBhbmQgYXR0cmlidXRlcyB1c2luZyBpbmhlcml0ZWQgQmFzZVVSTCBub2Rlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYWRhcHRhdGlvblNldEF0dHJpYnV0ZXNcbiAqICAgICAgICBDb250YWlucyBhdHRyaWJ1dGVzIGluaGVyaXRlZCBieSB0aGUgQWRhcHRhdGlvblNldFxuICogQHBhcmFtIHtzdHJpbmdbXX0gYWRhcHRhdGlvblNldEJhc2VVcmxzXG4gKiAgICAgICAgQ29udGFpbnMgbGlzdCBvZiByZXNvbHZlZCBiYXNlIHVybHMgaW5oZXJpdGVkIGJ5IHRoZSBBZGFwdGF0aW9uU2V0XG4gKiBAcGFyYW0ge1NlZ21lbnRJbmZvcm1hdGlvbn0gYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvXG4gKiAgICAgICAgQ29udGFpbnMgU2VnbWVudCBpbmZvcm1hdGlvbiBmb3IgdGhlIEFkYXB0YXRpb25TZXRcbiAqIEByZXR1cm4ge2luaGVyaXRCYXNlVXJsc0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG52YXIgaW5oZXJpdEJhc2VVcmxzID0gZnVuY3Rpb24gaW5oZXJpdEJhc2VVcmxzKGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzLCBhZGFwdGF0aW9uU2V0QmFzZVVybHMsIGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbykge1xuICByZXR1cm4gZnVuY3Rpb24gKHJlcHJlc2VudGF0aW9uKSB7XG4gICAgdmFyIHJlcEJhc2VVcmxFbGVtZW50cyA9IGZpbmRDaGlsZHJlbihyZXByZXNlbnRhdGlvbiwgJ0Jhc2VVUkwnKTtcbiAgICB2YXIgcmVwQmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKGFkYXB0YXRpb25TZXRCYXNlVXJscywgcmVwQmFzZVVybEVsZW1lbnRzKTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IG1lcmdlKGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzLCBwYXJzZUF0dHJpYnV0ZXMocmVwcmVzZW50YXRpb24pKTtcbiAgICB2YXIgcmVwcmVzZW50YXRpb25TZWdtZW50SW5mbyA9IGdldFNlZ21lbnRJbmZvcm1hdGlvbihyZXByZXNlbnRhdGlvbik7XG4gICAgcmV0dXJuIHJlcEJhc2VVcmxzLm1hcChmdW5jdGlvbiAoYmFzZVVybCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VnbWVudEluZm86IG1lcmdlKGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbywgcmVwcmVzZW50YXRpb25TZWdtZW50SW5mbyksXG4gICAgICAgIGF0dHJpYnV0ZXM6IG1lcmdlKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBiYXNlVXJsOiBiYXNlVXJsXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xufTtcbi8qKlxuICogVHJhbmZvcm1zIGEgc2VyaWVzIG9mIGNvbnRlbnQgcHJvdGVjdGlvbiBub2RlcyB0b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgcHNzaCBkYXRhIGJ5IGtleSBzeXN0ZW1cbiAqXG4gKiBAcGFyYW0ge05vZGVbXX0gY29udGVudFByb3RlY3Rpb25Ob2Rlc1xuICogICAgICAgIENvbnRlbnQgcHJvdGVjdGlvbiBub2Rlc1xuICogQHJldHVybiB7T2JqZWN0fVxuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIHBzc2ggZGF0YSBieSBrZXkgc3lzdGVtXG4gKi9cblxudmFyIGdlbmVyYXRlS2V5U3lzdGVtSW5mb3JtYXRpb24gPSBmdW5jdGlvbiBnZW5lcmF0ZUtleVN5c3RlbUluZm9ybWF0aW9uKGNvbnRlbnRQcm90ZWN0aW9uTm9kZXMpIHtcbiAgcmV0dXJuIGNvbnRlbnRQcm90ZWN0aW9uTm9kZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhub2RlKTsgLy8gQWx0aG91Z2ggaXQgY291bGQgYmUgYXJndWVkIHRoYXQgYWNjb3JkaW5nIHRvIHRoZSBVVUlEIFJGQyBzcGVjIHRoZSBVVUlEIHN0cmluZyAoYS1mIGNoYXJzKSBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgLy8gYXMgYSBsb3dlcmNhc2Ugc3RyaW5nIGl0IGFsc28gbWVudGlvbnMgaXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgY2FzZS1pbnNlbnNpdGl2ZSBvbiBpbnB1dC4gU2luY2UgdGhlIGtleSBzeXN0ZW1cbiAgICAvLyBVVUlEcyBpbiB0aGUga2V5U3lzdGVtc01hcCBhcmUgaGFyZGNvZGVkIGFzIGxvd2VyY2FzZSBpbiB0aGUgY29kZWJhc2UgdGhlcmUgaXNuJ3QgYW55IHJlYXNvbiBub3QgdG8gZG9cbiAgICAvLyAudG9Mb3dlckNhc2UoKSBvbiB0aGUgaW5wdXQgVVVJRCBzdHJpbmcgZnJvbSB0aGUgbWFuaWZlc3QgKGF0IGxlYXN0IEkgY291bGQgbm90IHRoaW5rIG9mIG9uZSkuXG5cbiAgICBpZiAoYXR0cmlidXRlcy5zY2hlbWVJZFVyaSkge1xuICAgICAgYXR0cmlidXRlcy5zY2hlbWVJZFVyaSA9IGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICB2YXIga2V5U3lzdGVtID0ga2V5U3lzdGVtc01hcFthdHRyaWJ1dGVzLnNjaGVtZUlkVXJpXTtcblxuICAgIGlmIChrZXlTeXN0ZW0pIHtcbiAgICAgIGFjY1trZXlTeXN0ZW1dID0ge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgICB9O1xuICAgICAgdmFyIHBzc2hOb2RlID0gZmluZENoaWxkcmVuKG5vZGUsICdjZW5jOnBzc2gnKVswXTtcblxuICAgICAgaWYgKHBzc2hOb2RlKSB7XG4gICAgICAgIHZhciBwc3NoID0gZ2V0Q29udGVudChwc3NoTm9kZSk7XG4gICAgICAgIGFjY1trZXlTeXN0ZW1dLnBzc2ggPSBwc3NoICYmIGRlY29kZUI2NFRvVWludDhBcnJheShwc3NoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59OyAvLyBkZWZpbmVkIGluIEFOU0lfU0NURSAyMTQtMSAyMDE2XG5cblxudmFyIHBhcnNlQ2FwdGlvblNlcnZpY2VNZXRhZGF0YSA9IGZ1bmN0aW9uIHBhcnNlQ2FwdGlvblNlcnZpY2VNZXRhZGF0YShzZXJ2aWNlKSB7XG4gIC8vIDYwOCBjYXB0aW9uc1xuICBpZiAoc2VydmljZS5zY2hlbWVJZFVyaSA9PT0gJ3VybjpzY3RlOmRhc2g6Y2M6Y2VhLTYwODoyMDE1Jykge1xuICAgIHZhciB2YWx1ZXMgPSB0eXBlb2Ygc2VydmljZS52YWx1ZSAhPT0gJ3N0cmluZycgPyBbXSA6IHNlcnZpY2UudmFsdWUuc3BsaXQoJzsnKTtcbiAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBjaGFubmVsO1xuICAgICAgdmFyIGxhbmd1YWdlOyAvLyBkZWZhdWx0IGxhbmd1YWdlIHRvIHZhbHVlXG5cbiAgICAgIGxhbmd1YWdlID0gdmFsdWU7XG5cbiAgICAgIGlmICgvXkNDXFxkPS8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIF92YWx1ZSRzcGxpdCA9IHZhbHVlLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgY2hhbm5lbCA9IF92YWx1ZSRzcGxpdFswXTtcbiAgICAgICAgbGFuZ3VhZ2UgPSBfdmFsdWUkc3BsaXRbMV07XG4gICAgICB9IGVsc2UgaWYgKC9eQ0NcXGQkLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICBjaGFubmVsID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChzZXJ2aWNlLnNjaGVtZUlkVXJpID09PSAndXJuOnNjdGU6ZGFzaDpjYzpjZWEtNzA4OjIwMTUnKSB7XG4gICAgdmFyIF92YWx1ZXMgPSB0eXBlb2Ygc2VydmljZS52YWx1ZSAhPT0gJ3N0cmluZycgPyBbXSA6IHNlcnZpY2UudmFsdWUuc3BsaXQoJzsnKTtcblxuICAgIHJldHVybiBfdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBmbGFncyA9IHtcbiAgICAgICAgLy8gc2VydmljZSBvciBjaGFubmVsIG51bWJlciAxLTYzXG4gICAgICAgICdjaGFubmVsJzogdW5kZWZpbmVkLFxuICAgICAgICAvLyBsYW5ndWFnZSBpcyBhIDNBTFBIQSBwZXIgSVNPIDYzOS4yL0JcbiAgICAgICAgLy8gZmllbGQgaXMgcmVxdWlyZWRcbiAgICAgICAgJ2xhbmd1YWdlJzogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCSVQgMS8wIG9yID9cbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyAxLCBtZWFuaW5nIDE2OjkgYXNwZWN0IHJhdGlvLCAwIGlzIDQ6MywgPyBpcyB1bmtub3duXG4gICAgICAgICdhc3BlY3RSYXRpbyc6IDEsXG4gICAgICAgIC8vIEJJVCAxLzBcbiAgICAgICAgLy8gZWFzeSByZWFkZXIgZmxhZyBpbmRpY2F0ZWQgdGhlIHRleHQgaXMgdGFpbGVkIHRvIHRoZSBuZWVkcyBvZiBiZWdpbm5pbmcgcmVhZGVyc1xuICAgICAgICAvLyBkZWZhdWx0IDAsIG9yIG9mZlxuICAgICAgICAnZWFzeVJlYWRlcic6IDAsXG4gICAgICAgIC8vIEJJVCAxLzBcbiAgICAgICAgLy8gSWYgM2QgbWV0YWRhdGEgaXMgcHJlc2VudCAoQ0VBLTcwOC4xKSB0aGVuIDFcbiAgICAgICAgLy8gZGVmYXVsdCAwXG4gICAgICAgICczRCc6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmICgvPS8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIF92YWx1ZSRzcGxpdDIgPSB2YWx1ZS5zcGxpdCgnPScpLFxuICAgICAgICAgICAgY2hhbm5lbCA9IF92YWx1ZSRzcGxpdDJbMF0sXG4gICAgICAgICAgICBfdmFsdWUkc3BsaXQyJCA9IF92YWx1ZSRzcGxpdDJbMV0sXG4gICAgICAgICAgICBvcHRzID0gX3ZhbHVlJHNwbGl0MiQgPT09IHZvaWQgMCA/ICcnIDogX3ZhbHVlJHNwbGl0MiQ7XG5cbiAgICAgICAgZmxhZ3MuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIGZsYWdzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgICAgIG9wdHMuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICB2YXIgX29wdCRzcGxpdCA9IG9wdC5zcGxpdCgnOicpLFxuICAgICAgICAgICAgICBuYW1lID0gX29wdCRzcGxpdFswXSxcbiAgICAgICAgICAgICAgdmFsID0gX29wdCRzcGxpdFsxXTtcblxuICAgICAgICAgIGlmIChuYW1lID09PSAnbGFuZycpIHtcbiAgICAgICAgICAgIGZsYWdzLmxhbmd1YWdlID0gdmFsOyAvLyBlciBmb3IgZWFzeVJlYWRlcnlcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdlcicpIHtcbiAgICAgICAgICAgIGZsYWdzLmVhc3lSZWFkZXIgPSBOdW1iZXIodmFsKTsgLy8gd2FyIGZvciB3aWRlIGFzcGVjdCByYXRpb1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3dhcicpIHtcbiAgICAgICAgICAgIGZsYWdzLmFzcGVjdFJhdGlvID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnM0QnKSB7XG4gICAgICAgICAgICBmbGFnc1snM0QnXSA9IE51bWJlcih2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGFncy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxhZ3MuY2hhbm5lbCkge1xuICAgICAgICBmbGFncy5jaGFubmVsID0gJ1NFUlZJQ0UnICsgZmxhZ3MuY2hhbm5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsYWdzO1xuICAgIH0pO1xuICB9XG59O1xuLyoqXG4gKiBNYXBzIGFuIEFkYXB0YXRpb25TZXQgbm9kZSB0byBhIGxpc3Qgb2YgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gb2JqZWN0c1xuICpcbiAqIEBuYW1lIHRvUmVwcmVzZW50YXRpb25zQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtOb2RlfSBhZGFwdGF0aW9uU2V0XG4gKiAgICAgICAgQWRhcHRhdGlvblNldCBub2RlIGZyb20gdGhlIG1wZFxuICogQHJldHVybiB7UmVwcmVzZW50YXRpb25JbmZvcm1hdGlvbltdfVxuICogICAgICAgICBMaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBSZXByZXNlbnRhaW9uIGluZm9ybWF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgQWRhcHRhdGlvblNldCBub2RlcyB0byBhIGxpc3Qgb2ZcbiAqIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGVyaW9kQXR0cmlidXRlc1xuICogICAgICAgIENvbnRhaW5zIGF0dHJpYnV0ZXMgaW5oZXJpdGVkIGJ5IHRoZSBQZXJpb2RcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBlcmlvZEJhc2VVcmxzXG4gKiAgICAgICAgQ29udGFpbnMgbGlzdCBvZiByZXNvbHZlZCBiYXNlIHVybHMgaW5oZXJpdGVkIGJ5IHRoZSBQZXJpb2RcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBlcmlvZFNlZ21lbnRJbmZvXG4gKiAgICAgICAgQ29udGFpbnMgU2VnbWVudCBJbmZvcm1hdGlvbiBhdCB0aGUgcGVyaW9kIGxldmVsXG4gKiBAcmV0dXJuIHt0b1JlcHJlc2VudGF0aW9uc0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG52YXIgdG9SZXByZXNlbnRhdGlvbnMgPSBmdW5jdGlvbiB0b1JlcHJlc2VudGF0aW9ucyhwZXJpb2RBdHRyaWJ1dGVzLCBwZXJpb2RCYXNlVXJscywgcGVyaW9kU2VnbWVudEluZm8pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhZGFwdGF0aW9uU2V0KSB7XG4gICAgdmFyIGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKGFkYXB0YXRpb25TZXQpO1xuICAgIHZhciBhZGFwdGF0aW9uU2V0QmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKHBlcmlvZEJhc2VVcmxzLCBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0Jhc2VVUkwnKSk7XG4gICAgdmFyIHJvbGUgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1JvbGUnKVswXTtcbiAgICB2YXIgcm9sZUF0dHJpYnV0ZXMgPSB7XG4gICAgICByb2xlOiBwYXJzZUF0dHJpYnV0ZXMocm9sZSlcbiAgICB9O1xuICAgIHZhciBhdHRycyA9IG1lcmdlKHBlcmlvZEF0dHJpYnV0ZXMsIGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzLCByb2xlQXR0cmlidXRlcyk7XG4gICAgdmFyIGFjY2Vzc2liaWxpdHkgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0FjY2Vzc2liaWxpdHknKVswXTtcbiAgICB2YXIgY2FwdGlvblNlcnZpY2VzID0gcGFyc2VDYXB0aW9uU2VydmljZU1ldGFkYXRhKHBhcnNlQXR0cmlidXRlcyhhY2Nlc3NpYmlsaXR5KSk7XG5cbiAgICBpZiAoY2FwdGlvblNlcnZpY2VzKSB7XG4gICAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCB7XG4gICAgICAgIGNhcHRpb25TZXJ2aWNlczogY2FwdGlvblNlcnZpY2VzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbGFiZWwgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0xhYmVsJylbMF07XG5cbiAgICBpZiAobGFiZWwgJiYgbGFiZWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsYWJlbFZhbCA9IGxhYmVsLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlLnRyaW0oKTtcbiAgICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIHtcbiAgICAgICAgbGFiZWw6IGxhYmVsVmFsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudFByb3RlY3Rpb24gPSBnZW5lcmF0ZUtleVN5c3RlbUluZm9ybWF0aW9uKGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnQ29udGVudFByb3RlY3Rpb24nKSk7XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoY29udGVudFByb3RlY3Rpb24pLmxlbmd0aCkge1xuICAgICAgYXR0cnMgPSBtZXJnZShhdHRycywge1xuICAgICAgICBjb250ZW50UHJvdGVjdGlvbjogY29udGVudFByb3RlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzZWdtZW50SW5mbyA9IGdldFNlZ21lbnRJbmZvcm1hdGlvbihhZGFwdGF0aW9uU2V0KTtcbiAgICB2YXIgcmVwcmVzZW50YXRpb25zID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdSZXByZXNlbnRhdGlvbicpO1xuICAgIHZhciBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8gPSBtZXJnZShwZXJpb2RTZWdtZW50SW5mbywgc2VnbWVudEluZm8pO1xuICAgIHJldHVybiBmbGF0dGVuKHJlcHJlc2VudGF0aW9ucy5tYXAoaW5oZXJpdEJhc2VVcmxzKGF0dHJzLCBhZGFwdGF0aW9uU2V0QmFzZVVybHMsIGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbykpKTtcbiAgfTtcbn07XG4vKipcbiAqIENvbnRhaW5zIGFsbCBwZXJpb2QgaW5mb3JtYXRpb24gZm9yIG1hcHBpbmcgbm9kZXMgb250byBhZGFwdGF0aW9uIHNldHMuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUGVyaW9kSW5mb3JtYXRpb25cbiAqIEBwcm9wZXJ0eSB7Tm9kZX0gcGVyaW9kLm5vZGVcbiAqICAgICAgICAgICBQZXJpb2Qgbm9kZSBmcm9tIHRoZSBtcGRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwZXJpb2QuYXR0cmlidXRlc1xuICogICAgICAgICAgIFBhcnNlZCBwZXJpb2QgYXR0cmlidXRlcyBmcm9tIG5vZGUgcGx1cyBhbnkgYWRkZWRcbiAqL1xuXG4vKipcbiAqIE1hcHMgYSBQZXJpb2RJbmZvcm1hdGlvbiBvYmplY3QgdG8gYSBsaXN0IG9mIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHMgZm9yIGFsbFxuICogQWRhcHRhdGlvblNldCBub2RlcyBjb250YWluZWQgd2l0aGluIHRoZSBQZXJpb2QuXG4gKlxuICogQG5hbWUgdG9BZGFwdGF0aW9uU2V0c0NhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7UGVyaW9kSW5mb3JtYXRpb259IHBlcmlvZFxuICogICAgICAgIFBlcmlvZCBvYmplY3QgY29udGFpbmluZyBuZWNlc3NhcnkgcGVyaW9kIGluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kU3RhcnRcbiAqICAgICAgICBTdGFydCB0aW1lIG9mIHRoZSBQZXJpb2Qgd2l0aGluIHRoZSBtcGRcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25bXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgUmVwcmVzZW50YWlvbiBpbmZvcm1hdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNhbGxiYWNrIGZvciBBcnJheS5wcm90b3R5cGUubWFwIGZvciBtYXBwaW5nIFBlcmlvZCBub2RlcyB0byBhIGxpc3Qgb2ZcbiAqIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbXBkQXR0cmlidXRlc1xuICogICAgICAgIENvbnRhaW5zIGF0dHJpYnV0ZXMgaW5oZXJpdGVkIGJ5IHRoZSBtcGRcbiAqIEBwYXJhbSB7c3RyaW5nW119IG1wZEJhc2VVcmxzXG4gKiAgICAgICAgQ29udGFpbnMgbGlzdCBvZiByZXNvbHZlZCBiYXNlIHVybHMgaW5oZXJpdGVkIGJ5IHRoZSBtcGRcbiAqIEByZXR1cm4ge3RvQWRhcHRhdGlvblNldHNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxudmFyIHRvQWRhcHRhdGlvblNldHMgPSBmdW5jdGlvbiB0b0FkYXB0YXRpb25TZXRzKG1wZEF0dHJpYnV0ZXMsIG1wZEJhc2VVcmxzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocGVyaW9kLCBpbmRleCkge1xuICAgIHZhciBwZXJpb2RCYXNlVXJscyA9IGJ1aWxkQmFzZVVybHMobXBkQmFzZVVybHMsIGZpbmRDaGlsZHJlbihwZXJpb2Qubm9kZSwgJ0Jhc2VVUkwnKSk7XG4gICAgdmFyIHBlcmlvZEF0dHJpYnV0ZXMgPSBtZXJnZShtcGRBdHRyaWJ1dGVzLCB7XG4gICAgICBwZXJpb2RTdGFydDogcGVyaW9kLmF0dHJpYnV0ZXMuc3RhcnRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgcGVyaW9kLmF0dHJpYnV0ZXMuZHVyYXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICBwZXJpb2RBdHRyaWJ1dGVzLnBlcmlvZER1cmF0aW9uID0gcGVyaW9kLmF0dHJpYnV0ZXMuZHVyYXRpb247XG4gICAgfVxuXG4gICAgdmFyIGFkYXB0YXRpb25TZXRzID0gZmluZENoaWxkcmVuKHBlcmlvZC5ub2RlLCAnQWRhcHRhdGlvblNldCcpO1xuICAgIHZhciBwZXJpb2RTZWdtZW50SW5mbyA9IGdldFNlZ21lbnRJbmZvcm1hdGlvbihwZXJpb2Qubm9kZSk7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYWRhcHRhdGlvblNldHMubWFwKHRvUmVwcmVzZW50YXRpb25zKHBlcmlvZEF0dHJpYnV0ZXMsIHBlcmlvZEJhc2VVcmxzLCBwZXJpb2RTZWdtZW50SW5mbykpKTtcbiAgfTtcbn07XG4vKipcbiAqIEdldHMgUGVyaW9kQHN0YXJ0IHByb3BlcnR5IGZvciBhIGdpdmVuIHBlcmlvZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5hdHRyaWJ1dGVzXG4gKiAgICAgICAgUGVyaW9kIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wcmlvclBlcmlvZEF0dHJpYnV0ZXNdXG4gKiAgICAgICAgUHJpb3IgcGVyaW9kIGF0dHJpYnV0ZXMgKGlmIHByaW9yIHBlcmlvZCBpcyBhdmFpbGFibGUpXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tcGRUeXBlXG4gKiAgICAgICAgVGhlIE1QREB0eXBlIHRoZXNlIHBlcmlvZHMgY2FtZSBmcm9tXG4gKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAqICAgICAgICAgVGhlIHBlcmlvZCBzdGFydCwgb3IgbnVsbCBpZiBpdCdzIGFuIGVhcmx5IGF2YWlsYWJsZSBwZXJpb2Qgb3IgZXJyb3JcbiAqL1xuXG52YXIgZ2V0UGVyaW9kU3RhcnQgPSBmdW5jdGlvbiBnZXRQZXJpb2RTdGFydChfcmVmKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzID0gX3JlZi5wcmlvclBlcmlvZEF0dHJpYnV0ZXMsXG4gICAgICBtcGRUeXBlID0gX3JlZi5tcGRUeXBlO1xuXG4gIC8vIFN1bW1hcnkgb2YgcGVyaW9kIHN0YXJ0IHRpbWUgY2FsY3VsYXRpb24gZnJvbSBEQVNIIHNwZWMgc2VjdGlvbiA1LjMuMi4xXG4gIC8vXG4gIC8vIEEgcGVyaW9kJ3Mgc3RhcnQgaXMgdGhlIGZpcnN0IHBlcmlvZCdzIHN0YXJ0ICsgdGltZSBlbGFwc2VkIGFmdGVyIHBsYXlpbmcgYWxsXG4gIC8vIHByaW9yIHBlcmlvZHMgdG8gdGhpcyBvbmUuIFBlcmlvZHMgY29udGludWUgb25lIGFmdGVyIHRoZSBvdGhlciBpbiB0aW1lICh3aXRob3V0XG4gIC8vIGdhcHMpIHVudGlsIHRoZSBlbmQgb2YgdGhlIHByZXNlbnRhdGlvbi5cbiAgLy9cbiAgLy8gVGhlIHZhbHVlIG9mIFBlcmlvZEBzdGFydCBzaG91bGQgYmU6XG4gIC8vIDEuIGlmIFBlcmlvZEBzdGFydCBpcyBwcmVzZW50OiB2YWx1ZSBvZiBQZXJpb2RAc3RhcnRcbiAgLy8gMi4gaWYgcHJldmlvdXMgcGVyaW9kIGV4aXN0cyBhbmQgaXQgaGFzIEBkdXJhdGlvbjogcHJldmlvdXMgUGVyaW9kQHN0YXJ0ICtcbiAgLy8gICAgcHJldmlvdXMgUGVyaW9kQGR1cmF0aW9uXG4gIC8vIDMuIGlmIHRoaXMgaXMgZmlyc3QgcGVyaW9kIGFuZCBNUERAdHlwZSBpcyAnc3RhdGljJzogMFxuICAvLyA0LiBpbiBhbGwgb3RoZXIgY2FzZXMsIGNvbnNpZGVyIHRoZSBwZXJpb2QgYW4gXCJlYXJseSBhdmFpbGFibGUgcGVyaW9kXCIgKG5vdGU6IG5vdFxuICAvLyAgICBjdXJyZW50bHkgc3VwcG9ydGVkKVxuICAvLyAoMSlcbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLnN0YXJ0ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhdHRyaWJ1dGVzLnN0YXJ0O1xuICB9IC8vICgyKVxuXG5cbiAgaWYgKHByaW9yUGVyaW9kQXR0cmlidXRlcyAmJiB0eXBlb2YgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLnN0YXJ0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzLmR1cmF0aW9uID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBwcmlvclBlcmlvZEF0dHJpYnV0ZXMuc3RhcnQgKyBwcmlvclBlcmlvZEF0dHJpYnV0ZXMuZHVyYXRpb247XG4gIH0gLy8gKDMpXG5cblxuICBpZiAoIXByaW9yUGVyaW9kQXR0cmlidXRlcyAmJiBtcGRUeXBlID09PSAnc3RhdGljJykge1xuICAgIHJldHVybiAwO1xuICB9IC8vICg0KVxuICAvLyBUaGVyZSBpcyBjdXJyZW50bHkgbm8gbG9naWMgZm9yIGNhbGN1bGF0aW5nIHRoZSBQZXJpb2RAc3RhcnQgdmFsdWUgaWYgdGhlcmUgaXNcbiAgLy8gbm8gUGVyaW9kQHN0YXJ0IG9yIHByaW9yIFBlcmlvZEBzdGFydCBhbmQgUGVyaW9kQGR1cmF0aW9uIGF2YWlsYWJsZS4gVGhpcyBpcyBub3QgbWFkZVxuICAvLyBleHBsaWNpdCBieSB0aGUgREFTSCBpbnRlcm9wIGd1aWRlbGluZXMgb3IgdGhlIERBU0ggc3BlYywgaG93ZXZlciwgc2luY2UgdGhlcmUnc1xuICAvLyBub3RoaW5nIGFib3V0IGFueSBvdGhlciByZXNvbHV0aW9uIHN0cmF0ZWdpZXMsIGl0J3MgaW1wbGllZC4gVGh1cywgdGhpcyBjYXNlIHNob3VsZFxuICAvLyBiZSBjb25zaWRlcmVkIGFuIGVhcmx5IGF2YWlsYWJsZSBwZXJpb2QsIG9yIGVycm9yLCBhbmQgbnVsbCBzaG91bGQgc3VmZmljZSBmb3IgYm90aFxuICAvLyBvZiB0aG9zZSBjYXNlcy5cblxuXG4gIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogVHJhdmVyc2VzIHRoZSBtcGQgeG1sIHRyZWUgdG8gZ2VuZXJhdGUgYSBsaXN0IG9mIFJlcHJlc2VudGF0aW9uIGluZm9ybWF0aW9uIG9iamVjdHNcbiAqIHRoYXQgaGF2ZSBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBub2Rlc1xuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbXBkXG4gKiAgICAgICAgVGhlIHJvb3Qgbm9kZSBvZiB0aGUgbXBkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgIEF2YWlsYWJsZSBvcHRpb25zIGZvciBpbmhlcml0QXR0cmlidXRlc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWFuaWZlc3RVcmlcbiAqICAgICAgICBUaGUgdXJpIHNvdXJjZSBvZiB0aGUgbXBkXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5OT1dcbiAqICAgICAgICBDdXJyZW50IHRpbWUgcGVyIERBU0ggSU9QLiAgRGVmYXVsdCBpcyBjdXJyZW50IHRpbWUgaW4gbXMgc2luY2UgZXBvY2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmNsaWVudE9mZnNldFxuICogICAgICAgIENsaWVudCB0aW1lIGRpZmZlcmVuY2UgZnJvbSBOT1cgKGluIG1pbGxpc2Vjb25kcylcbiAqIEByZXR1cm4ge1JlcHJlc2VudGF0aW9uSW5mb3JtYXRpb25bXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIGNvbnRhaW5pbmcgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb25cbiAqL1xuXG52YXIgaW5oZXJpdEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBpbmhlcml0QXR0cmlidXRlcyhtcGQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRtYW5pZmVzdFVyaSA9IF9vcHRpb25zLm1hbmlmZXN0VXJpLFxuICAgICAgbWFuaWZlc3RVcmkgPSBfb3B0aW9ucyRtYW5pZmVzdFVyaSA9PT0gdm9pZCAwID8gJycgOiBfb3B0aW9ucyRtYW5pZmVzdFVyaSxcbiAgICAgIF9vcHRpb25zJE5PVyA9IF9vcHRpb25zLk5PVyxcbiAgICAgIE5PVyA9IF9vcHRpb25zJE5PVyA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IF9vcHRpb25zJE5PVyxcbiAgICAgIF9vcHRpb25zJGNsaWVudE9mZnNldCA9IF9vcHRpb25zLmNsaWVudE9mZnNldCxcbiAgICAgIGNsaWVudE9mZnNldCA9IF9vcHRpb25zJGNsaWVudE9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGNsaWVudE9mZnNldDtcbiAgdmFyIHBlcmlvZE5vZGVzID0gZmluZENoaWxkcmVuKG1wZCwgJ1BlcmlvZCcpO1xuXG4gIGlmICghcGVyaW9kTm9kZXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5JTlZBTElEX05VTUJFUl9PRl9QRVJJT0QpO1xuICB9XG5cbiAgdmFyIGxvY2F0aW9ucyA9IGZpbmRDaGlsZHJlbihtcGQsICdMb2NhdGlvbicpO1xuICB2YXIgbXBkQXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhtcGQpO1xuICB2YXIgbXBkQmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKFttYW5pZmVzdFVyaV0sIGZpbmRDaGlsZHJlbihtcGQsICdCYXNlVVJMJykpOyAvLyBTZWUgREFTSCBzcGVjIHNlY3Rpb24gNS4zLjEuMiwgU2VtYW50aWNzIG9mIE1QRCBlbGVtZW50LiBEZWZhdWx0IHR5cGUgdG8gJ3N0YXRpYycuXG5cbiAgbXBkQXR0cmlidXRlcy50eXBlID0gbXBkQXR0cmlidXRlcy50eXBlIHx8ICdzdGF0aWMnO1xuICBtcGRBdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uID0gbXBkQXR0cmlidXRlcy5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uIHx8IDA7XG4gIG1wZEF0dHJpYnV0ZXMuTk9XID0gTk9XO1xuICBtcGRBdHRyaWJ1dGVzLmNsaWVudE9mZnNldCA9IGNsaWVudE9mZnNldDtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCkge1xuICAgIG1wZEF0dHJpYnV0ZXMubG9jYXRpb25zID0gbG9jYXRpb25zLm1hcChnZXRDb250ZW50KTtcbiAgfVxuXG4gIHZhciBwZXJpb2RzID0gW107IC8vIFNpbmNlIHRvQWRhcHRhdGlvblNldHMgYWN0cyBvbiBpbmRpdmlkdWFsIHBlcmlvZHMgcmlnaHQgbm93LCB0aGUgc2ltcGxlc3QgYXBwcm9hY2ggdG9cbiAgLy8gYWRkaW5nIHByb3BlcnRpZXMgdGhhdCByZXF1aXJlIGxvb2tpbmcgYXQgcHJpb3IgcGVyaW9kcyBpcyB0byBwYXJzZSBhdHRyaWJ1dGVzIGFuZCBhZGRcbiAgLy8gbWlzc2luZyBvbmVzIGJlZm9yZSB0b0FkYXB0YXRpb25TZXRzIGlzIGNhbGxlZC4gSWYgbW9yZSBzdWNoIHByb3BlcnRpZXMgYXJlIGFkZGVkLCBpdFxuICAvLyBtYXkgYmUgYmV0dGVyIHRvIHJlZmFjdG9yIHRvQWRhcHRhdGlvblNldHMuXG5cbiAgcGVyaW9kTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhub2RlKTsgLy8gVXNlIHRoZSBsYXN0IG1vZGlmaWVkIHByaW9yIHBlcmlvZCwgYXMgaXQgbWF5IGNvbnRhaW4gYWRkZWQgaW5mb3JtYXRpb24gbmVjZXNzYXJ5XG4gICAgLy8gZm9yIHRoaXMgcGVyaW9kLlxuXG4gICAgdmFyIHByaW9yUGVyaW9kID0gcGVyaW9kc1tpbmRleCAtIDFdO1xuICAgIGF0dHJpYnV0ZXMuc3RhcnQgPSBnZXRQZXJpb2RTdGFydCh7XG4gICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgcHJpb3JQZXJpb2RBdHRyaWJ1dGVzOiBwcmlvclBlcmlvZCA/IHByaW9yUGVyaW9kLmF0dHJpYnV0ZXMgOiBudWxsLFxuICAgICAgbXBkVHlwZTogbXBkQXR0cmlidXRlcy50eXBlXG4gICAgfSk7XG4gICAgcGVyaW9kcy5wdXNoKHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uczogbXBkQXR0cmlidXRlcy5sb2NhdGlvbnMsXG4gICAgcmVwcmVzZW50YXRpb25JbmZvOiBmbGF0dGVuKHBlcmlvZHMubWFwKHRvQWRhcHRhdGlvblNldHMobXBkQXR0cmlidXRlcywgbXBkQmFzZVVybHMpKSlcbiAgfTtcbn07XG5cbnZhciBzdHJpbmdUb01wZFhtbCA9IGZ1bmN0aW9uIHN0cmluZ1RvTXBkWG1sKG1hbmlmZXN0U3RyaW5nKSB7XG4gIGlmIChtYW5pZmVzdFN0cmluZyA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLkRBU0hfRU1QVFlfTUFOSUZFU1QpO1xuICB9XG5cbiAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgdmFyIHhtbDtcbiAgdmFyIG1wZDtcblxuICB0cnkge1xuICAgIHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFuaWZlc3RTdHJpbmcsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICBtcGQgPSB4bWwgJiYgeG1sLmRvY3VtZW50RWxlbWVudC50YWdOYW1lID09PSAnTVBEJyA/IHhtbC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuICB9IGNhdGNoIChlKSB7Ly8gaWUgMTEgdGhyb3dzdyBvbiBpbnZhbGlkIHhtbFxuICB9XG5cbiAgaWYgKCFtcGQgfHwgbXBkICYmIG1wZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5EQVNIX0lOVkFMSURfWE1MKTtcbiAgfVxuXG4gIHJldHVybiBtcGQ7XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgbWFuaWZlc3QgZm9yIGEgVVRDVGltaW5nIG5vZGUsIHJldHVybmluZyB0aGUgbm9kZXMgYXR0cmlidXRlcyBpZiBmb3VuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtcGRcbiAqICAgICAgICBYTUwgc3RyaW5nIG9mIHRoZSBNUEQgbWFuaWZlc3RcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICogICAgICAgICBBdHRyaWJ1dGVzIG9mIFVUQ1RpbWluZyBub2RlIHNwZWNpZmllZCBpbiB0aGUgbWFuaWZlc3QuIE51bGwgaWYgbm9uZSBmb3VuZFxuICovXG5cbnZhciBwYXJzZVVUQ1RpbWluZ1NjaGVtZSA9IGZ1bmN0aW9uIHBhcnNlVVRDVGltaW5nU2NoZW1lKG1wZCkge1xuICB2YXIgVVRDVGltaW5nTm9kZSA9IGZpbmRDaGlsZHJlbihtcGQsICdVVENUaW1pbmcnKVswXTtcblxuICBpZiAoIVVUQ1RpbWluZ05vZGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBhdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKFVUQ1RpbWluZ05vZGUpO1xuXG4gIHN3aXRjaCAoYXR0cmlidXRlcy5zY2hlbWVJZFVyaSkge1xuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaGVhZDoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLWhlYWQ6MjAxMic6XG4gICAgICBhdHRyaWJ1dGVzLm1ldGhvZCA9ICdIRUFEJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC14c2RhdGU6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1pc286MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC14c2RhdGU6MjAxMic6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1pc286MjAxMic6XG4gICAgICBhdHRyaWJ1dGVzLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpkaXJlY3Q6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6ZGlyZWN0OjIwMTInOlxuICAgICAgYXR0cmlidXRlcy5tZXRob2QgPSAnRElSRUNUJztcbiAgICAgIGF0dHJpYnV0ZXMudmFsdWUgPSBEYXRlLnBhcnNlKGF0dHJpYnV0ZXMudmFsdWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLW50cDoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpudHA6MjAxNCc6XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6c250cDoyMDE0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5VTlNVUFBPUlRFRF9VVENfVElNSU5HX1NDSEVNRSk7XG4gIH1cblxuICByZXR1cm4gYXR0cmlidXRlcztcbn07XG5cbnZhciBWRVJTSU9OID0gdmVyc2lvbjtcbi8qXG4gKiBHaXZlbiBhIERBU0ggbWFuaWZlc3Qgc3RyaW5nIGFuZCBvcHRpb25zLCBwYXJzZXMgdGhlIERBU0ggbWFuaWZlc3QgaW50byBhbiBvYmplY3QgaW4gdGhlXG4gKiBmb3JtIG91dHB1dGVkIGJ5IG0zdTgtcGFyc2VyIGFuZCBhY2NlcHRlZCBieSB2aWRlb2pzL2h0dHAtc3RyZWFtaW5nLlxuICpcbiAqIEZvciBsaXZlIERBU0ggbWFuaWZlc3RzLCBpZiBgcHJldmlvdXNNYW5pZmVzdGAgaXMgcHJvdmlkZWQgaW4gb3B0aW9ucywgdGhlbiB0aGUgbmV3bHlcbiAqIHBhcnNlZCBEQVNIIG1hbmlmZXN0IHdpbGwgaGF2ZSBpdHMgbWVkaWEgc2VxdWVuY2UgYW5kIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgdmFsdWVzXG4gKiB1cGRhdGVkIHRvIHJlZmxlY3QgaXRzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBwcmlvciBtYW5pZmVzdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFuaWZlc3RTdHJpbmcgLSB0aGUgREFTSCBtYW5pZmVzdCBhcyBhIHN0cmluZ1xuICogQHBhcmFtIHtvcHRpb25zfSBbb3B0aW9uc10gLSBhbnkgb3B0aW9uc1xuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1hbmlmZXN0IG9iamVjdFxuICovXG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKG1hbmlmZXN0U3RyaW5nLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcGFyc2VkTWFuaWZlc3RJbmZvID0gaW5oZXJpdEF0dHJpYnV0ZXMoc3RyaW5nVG9NcGRYbWwobWFuaWZlc3RTdHJpbmcpLCBvcHRpb25zKTtcbiAgdmFyIHBsYXlsaXN0cyA9IHRvUGxheWxpc3RzKHBhcnNlZE1hbmlmZXN0SW5mby5yZXByZXNlbnRhdGlvbkluZm8pO1xuICByZXR1cm4gdG9NM3U4KHtcbiAgICBkYXNoUGxheWxpc3RzOiBwbGF5bGlzdHMsXG4gICAgbG9jYXRpb25zOiBwYXJzZWRNYW5pZmVzdEluZm8ubG9jYXRpb25zLFxuICAgIHNpZHhNYXBwaW5nOiBvcHRpb25zLnNpZHhNYXBwaW5nLFxuICAgIHByZXZpb3VzTWFuaWZlc3Q6IG9wdGlvbnMucHJldmlvdXNNYW5pZmVzdFxuICB9KTtcbn07XG4vKipcbiAqIFBhcnNlcyB0aGUgbWFuaWZlc3QgZm9yIGEgVVRDVGltaW5nIG5vZGUsIHJldHVybmluZyB0aGUgbm9kZXMgYXR0cmlidXRlcyBpZiBmb3VuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYW5pZmVzdFN0cmluZ1xuICogICAgICAgIFhNTCBzdHJpbmcgb2YgdGhlIE1QRCBtYW5pZmVzdFxuICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gKiAgICAgICAgIEF0dHJpYnV0ZXMgb2YgVVRDVGltaW5nIG5vZGUgc3BlY2lmaWVkIGluIHRoZSBtYW5pZmVzdC4gTnVsbCBpZiBub25lIGZvdW5kXG4gKi9cblxuXG52YXIgcGFyc2VVVENUaW1pbmcgPSBmdW5jdGlvbiBwYXJzZVVUQ1RpbWluZyhtYW5pZmVzdFN0cmluZykge1xuICByZXR1cm4gcGFyc2VVVENUaW1pbmdTY2hlbWUoc3RyaW5nVG9NcGRYbWwobWFuaWZlc3RTdHJpbmcpKTtcbn07XG5cbmV4cG9ydCB7IFZFUlNJT04sIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QkMSBhcyBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0LCBnZW5lcmF0ZVNpZHhLZXksIGluaGVyaXRBdHRyaWJ1dGVzLCBwYXJzZSwgcGFyc2VVVENUaW1pbmcsIHN0cmluZ1RvTXBkWG1sLCB0b00zdTgsIHRvUGxheWxpc3RzIH07XG4iLCIvLyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzE4MDhcblxuKGZ1bmN0aW9uIChyb290KSB7XG4gIHZhciBVUkxfUkVHRVggPVxuICAgIC9eKD89KCg/OlthLXpBLVowLTkrXFwtLl0rOik/KSlcXDEoPz0oKD86XFwvXFwvW15cXC8/I10qKT8pKVxcMig/PSgoPzooPzpbXj8jXFwvXSpcXC8pKlteOz8jXFwvXSopPykpXFwzKCg/OjtbXj8jXSopPykoXFw/W14jXSopPygjW15dKik/JC87XG4gIHZhciBGSVJTVF9TRUdNRU5UX1JFR0VYID0gL14oPz0oW15cXC8/I10qKSlcXDEoW15dKikkLztcbiAgdmFyIFNMQVNIX0RPVF9SRUdFWCA9IC8oPzpcXC98XilcXC4oPz1cXC8pL2c7XG4gIHZhciBTTEFTSF9ET1RfRE9UX1JFR0VYID0gLyg/OlxcL3xeKVxcLlxcLlxcLyg/IVxcLlxcLlxcLylbXlxcL10qKD89XFwvKS9nO1xuXG4gIHZhciBVUkxUb29sa2l0ID0ge1xuICAgIC8vIElmIG9wdHMuYWx3YXlzTm9ybWFsaXplIGlzIHRydWUgdGhlbiB0aGUgcGF0aCB3aWxsIGFsd2F5cyBiZSBub3JtYWxpemVkIGV2ZW4gd2hlbiBpdCBzdGFydHMgd2l0aCAvIG9yIC8vXG4gICAgLy8gRS5nXG4gICAgLy8gV2l0aCBvcHRzLmFsd2F5c05vcm1hbGl6ZSA9IGZhbHNlIChkZWZhdWx0LCBzcGVjIGNvbXBsaWFudClcbiAgICAvLyBodHRwOi8vYS5jb20vYi9jZCArIC9lL2YvLi4vZyA9PiBodHRwOi8vYS5jb20vZS9mLy4uL2dcbiAgICAvLyBXaXRoIG9wdHMuYWx3YXlzTm9ybWFsaXplID0gdHJ1ZSAobm90IHNwZWMgY29tcGxpYW50KVxuICAgIC8vIGh0dHA6Ly9hLmNvbS9iL2NkICsgL2UvZi8uLi9nID0+IGh0dHA6Ly9hLmNvbS9lL2dcbiAgICBidWlsZEFic29sdXRlVVJMOiBmdW5jdGlvbiAoYmFzZVVSTCwgcmVsYXRpdmVVUkwsIG9wdHMpIHtcbiAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgLy8gcmVtb3ZlIGFueSByZW1haW5pbmcgc3BhY2UgYW5kIENSTEZcbiAgICAgIGJhc2VVUkwgPSBiYXNlVVJMLnRyaW0oKTtcbiAgICAgIHJlbGF0aXZlVVJMID0gcmVsYXRpdmVVUkwudHJpbSgpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVVSTCkge1xuICAgICAgICAvLyAyYSkgSWYgdGhlIGVtYmVkZGVkIFVSTCBpcyBlbnRpcmVseSBlbXB0eSwgaXQgaW5oZXJpdHMgdGhlXG4gICAgICAgIC8vIGVudGlyZSBiYXNlIFVSTCAoaS5lLiwgaXMgc2V0IGVxdWFsIHRvIHRoZSBiYXNlIFVSTClcbiAgICAgICAgLy8gYW5kIHdlIGFyZSBkb25lLlxuICAgICAgICBpZiAoIW9wdHMuYWx3YXlzTm9ybWFsaXplKSB7XG4gICAgICAgICAgcmV0dXJuIGJhc2VVUkw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJhc2VQYXJ0c0Zvck5vcm1hbGlzZSA9IFVSTFRvb2xraXQucGFyc2VVUkwoYmFzZVVSTCk7XG4gICAgICAgIGlmICghYmFzZVBhcnRzRm9yTm9ybWFsaXNlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB0cnlpbmcgdG8gcGFyc2UgYmFzZSBVUkwuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZVBhcnRzRm9yTm9ybWFsaXNlLnBhdGggPSBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgoXG4gICAgICAgICAgYmFzZVBhcnRzRm9yTm9ybWFsaXNlLnBhdGhcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRVUkxGcm9tUGFydHMoYmFzZVBhcnRzRm9yTm9ybWFsaXNlKTtcbiAgICAgIH1cbiAgICAgIHZhciByZWxhdGl2ZVBhcnRzID0gVVJMVG9vbGtpdC5wYXJzZVVSTChyZWxhdGl2ZVVSTCk7XG4gICAgICBpZiAoIXJlbGF0aXZlUGFydHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB0cnlpbmcgdG8gcGFyc2UgcmVsYXRpdmUgVVJMLicpO1xuICAgICAgfVxuICAgICAgaWYgKHJlbGF0aXZlUGFydHMuc2NoZW1lKSB7XG4gICAgICAgIC8vIDJiKSBJZiB0aGUgZW1iZWRkZWQgVVJMIHN0YXJ0cyB3aXRoIGEgc2NoZW1lIG5hbWUsIGl0IGlzXG4gICAgICAgIC8vIGludGVycHJldGVkIGFzIGFuIGFic29sdXRlIFVSTCBhbmQgd2UgYXJlIGRvbmUuXG4gICAgICAgIGlmICghb3B0cy5hbHdheXNOb3JtYWxpemUpIHtcbiAgICAgICAgICByZXR1cm4gcmVsYXRpdmVVUkw7XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpdmVQYXJ0cy5wYXRoID0gVVJMVG9vbGtpdC5ub3JtYWxpemVQYXRoKHJlbGF0aXZlUGFydHMucGF0aCk7XG4gICAgICAgIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkVVJMRnJvbVBhcnRzKHJlbGF0aXZlUGFydHMpO1xuICAgICAgfVxuICAgICAgdmFyIGJhc2VQYXJ0cyA9IFVSTFRvb2xraXQucGFyc2VVUkwoYmFzZVVSTCk7XG4gICAgICBpZiAoIWJhc2VQYXJ0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHRyeWluZyB0byBwYXJzZSBiYXNlIFVSTC4nKTtcbiAgICAgIH1cbiAgICAgIGlmICghYmFzZVBhcnRzLm5ldExvYyAmJiBiYXNlUGFydHMucGF0aCAmJiBiYXNlUGFydHMucGF0aFswXSAhPT0gJy8nKSB7XG4gICAgICAgIC8vIElmIG5ldExvYyBtaXNzaW5nIGFuZCBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCAnLycsIGFzc3VtZSBldmVydGhpbmcgYmVmb3JlIHRoZSBmaXJzdCAnLycgaXMgdGhlIG5ldExvY1xuICAgICAgICAvLyBUaGlzIGNhdXNlcyAnZXhhbXBsZS5jb20vYScgdG8gYmUgaGFuZGxlZCBhcyAnLy9leGFtcGxlLmNvbS9hJyBpbnN0ZWFkIG9mICcvZXhhbXBsZS5jb20vYSdcbiAgICAgICAgdmFyIHBhdGhQYXJ0cyA9IEZJUlNUX1NFR01FTlRfUkVHRVguZXhlYyhiYXNlUGFydHMucGF0aCk7XG4gICAgICAgIGJhc2VQYXJ0cy5uZXRMb2MgPSBwYXRoUGFydHNbMV07XG4gICAgICAgIGJhc2VQYXJ0cy5wYXRoID0gcGF0aFBhcnRzWzJdO1xuICAgICAgfVxuICAgICAgaWYgKGJhc2VQYXJ0cy5uZXRMb2MgJiYgIWJhc2VQYXJ0cy5wYXRoKSB7XG4gICAgICAgIGJhc2VQYXJ0cy5wYXRoID0gJy8nO1xuICAgICAgfVxuICAgICAgdmFyIGJ1aWx0UGFydHMgPSB7XG4gICAgICAgIC8vIDJjKSBPdGhlcndpc2UsIHRoZSBlbWJlZGRlZCBVUkwgaW5oZXJpdHMgdGhlIHNjaGVtZSBvZlxuICAgICAgICAvLyB0aGUgYmFzZSBVUkwuXG4gICAgICAgIHNjaGVtZTogYmFzZVBhcnRzLnNjaGVtZSxcbiAgICAgICAgbmV0TG9jOiByZWxhdGl2ZVBhcnRzLm5ldExvYyxcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgcGFyYW1zOiByZWxhdGl2ZVBhcnRzLnBhcmFtcyxcbiAgICAgICAgcXVlcnk6IHJlbGF0aXZlUGFydHMucXVlcnksXG4gICAgICAgIGZyYWdtZW50OiByZWxhdGl2ZVBhcnRzLmZyYWdtZW50LFxuICAgICAgfTtcbiAgICAgIGlmICghcmVsYXRpdmVQYXJ0cy5uZXRMb2MpIHtcbiAgICAgICAgLy8gMykgSWYgdGhlIGVtYmVkZGVkIFVSTCdzIDxuZXRfbG9jPiBpcyBub24tZW1wdHksIHdlIHNraXAgdG9cbiAgICAgICAgLy8gU3RlcCA3LiAgT3RoZXJ3aXNlLCB0aGUgZW1iZWRkZWQgVVJMIGluaGVyaXRzIHRoZSA8bmV0X2xvYz5cbiAgICAgICAgLy8gKGlmIGFueSkgb2YgdGhlIGJhc2UgVVJMLlxuICAgICAgICBidWlsdFBhcnRzLm5ldExvYyA9IGJhc2VQYXJ0cy5uZXRMb2M7XG4gICAgICAgIC8vIDQpIElmIHRoZSBlbWJlZGRlZCBVUkwgcGF0aCBpcyBwcmVjZWRlZCBieSBhIHNsYXNoIFwiL1wiLCB0aGVcbiAgICAgICAgLy8gcGF0aCBpcyBub3QgcmVsYXRpdmUgYW5kIHdlIHNraXAgdG8gU3RlcCA3LlxuICAgICAgICBpZiAocmVsYXRpdmVQYXJ0cy5wYXRoWzBdICE9PSAnLycpIHtcbiAgICAgICAgICBpZiAoIXJlbGF0aXZlUGFydHMucGF0aCkge1xuICAgICAgICAgICAgLy8gNSkgSWYgdGhlIGVtYmVkZGVkIFVSTCBwYXRoIGlzIGVtcHR5IChhbmQgbm90IHByZWNlZGVkIGJ5IGFcbiAgICAgICAgICAgIC8vIHNsYXNoKSwgdGhlbiB0aGUgZW1iZWRkZWQgVVJMIGluaGVyaXRzIHRoZSBiYXNlIFVSTCBwYXRoXG4gICAgICAgICAgICBidWlsdFBhcnRzLnBhdGggPSBiYXNlUGFydHMucGF0aDtcbiAgICAgICAgICAgIC8vIDVhKSBpZiB0aGUgZW1iZWRkZWQgVVJMJ3MgPHBhcmFtcz4gaXMgbm9uLWVtcHR5LCB3ZSBza2lwIHRvXG4gICAgICAgICAgICAvLyBzdGVwIDc7IG90aGVyd2lzZSwgaXQgaW5oZXJpdHMgdGhlIDxwYXJhbXM+IG9mIHRoZSBiYXNlXG4gICAgICAgICAgICAvLyBVUkwgKGlmIGFueSkgYW5kXG4gICAgICAgICAgICBpZiAoIXJlbGF0aXZlUGFydHMucGFyYW1zKSB7XG4gICAgICAgICAgICAgIGJ1aWx0UGFydHMucGFyYW1zID0gYmFzZVBhcnRzLnBhcmFtcztcbiAgICAgICAgICAgICAgLy8gNWIpIGlmIHRoZSBlbWJlZGRlZCBVUkwncyA8cXVlcnk+IGlzIG5vbi1lbXB0eSwgd2Ugc2tpcCB0b1xuICAgICAgICAgICAgICAvLyBzdGVwIDc7IG90aGVyd2lzZSwgaXQgaW5oZXJpdHMgdGhlIDxxdWVyeT4gb2YgdGhlIGJhc2VcbiAgICAgICAgICAgICAgLy8gVVJMIChpZiBhbnkpIGFuZCB3ZSBza2lwIHRvIHN0ZXAgNy5cbiAgICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgYnVpbHRQYXJ0cy5xdWVyeSA9IGJhc2VQYXJ0cy5xdWVyeTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA2KSBUaGUgbGFzdCBzZWdtZW50IG9mIHRoZSBiYXNlIFVSTCdzIHBhdGggKGFueXRoaW5nXG4gICAgICAgICAgICAvLyBmb2xsb3dpbmcgdGhlIHJpZ2h0bW9zdCBzbGFzaCBcIi9cIiwgb3IgdGhlIGVudGlyZSBwYXRoIGlmIG5vXG4gICAgICAgICAgICAvLyBzbGFzaCBpcyBwcmVzZW50KSBpcyByZW1vdmVkIGFuZCB0aGUgZW1iZWRkZWQgVVJMJ3MgcGF0aCBpc1xuICAgICAgICAgICAgLy8gYXBwZW5kZWQgaW4gaXRzIHBsYWNlLlxuICAgICAgICAgICAgdmFyIGJhc2VVUkxQYXRoID0gYmFzZVBhcnRzLnBhdGg7XG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9XG4gICAgICAgICAgICAgIGJhc2VVUkxQYXRoLnN1YnN0cmluZygwLCBiYXNlVVJMUGF0aC5sYXN0SW5kZXhPZignLycpICsgMSkgK1xuICAgICAgICAgICAgICByZWxhdGl2ZVBhcnRzLnBhdGg7XG4gICAgICAgICAgICBidWlsdFBhcnRzLnBhdGggPSBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgobmV3UGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnVpbHRQYXJ0cy5wYXRoID09PSBudWxsKSB7XG4gICAgICAgIGJ1aWx0UGFydHMucGF0aCA9IG9wdHMuYWx3YXlzTm9ybWFsaXplXG4gICAgICAgICAgPyBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgocmVsYXRpdmVQYXJ0cy5wYXRoKVxuICAgICAgICAgIDogcmVsYXRpdmVQYXJ0cy5wYXRoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRVUkxGcm9tUGFydHMoYnVpbHRQYXJ0cyk7XG4gICAgfSxcbiAgICBwYXJzZVVSTDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgdmFyIHBhcnRzID0gVVJMX1JFR0VYLmV4ZWModXJsKTtcbiAgICAgIGlmICghcGFydHMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzY2hlbWU6IHBhcnRzWzFdIHx8ICcnLFxuICAgICAgICBuZXRMb2M6IHBhcnRzWzJdIHx8ICcnLFxuICAgICAgICBwYXRoOiBwYXJ0c1szXSB8fCAnJyxcbiAgICAgICAgcGFyYW1zOiBwYXJ0c1s0XSB8fCAnJyxcbiAgICAgICAgcXVlcnk6IHBhcnRzWzVdIHx8ICcnLFxuICAgICAgICBmcmFnbWVudDogcGFydHNbNl0gfHwgJycsXG4gICAgICB9O1xuICAgIH0sXG4gICAgbm9ybWFsaXplUGF0aDogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgb3BlcmF0aW9ucyBhcmVcbiAgICAgIC8vIHRoZW4gYXBwbGllZCwgaW4gb3JkZXIsIHRvIHRoZSBuZXcgcGF0aDpcbiAgICAgIC8vIDZhKSBBbGwgb2NjdXJyZW5jZXMgb2YgXCIuL1wiLCB3aGVyZSBcIi5cIiBpcyBhIGNvbXBsZXRlIHBhdGhcbiAgICAgIC8vIHNlZ21lbnQsIGFyZSByZW1vdmVkLlxuICAgICAgLy8gNmIpIElmIHRoZSBwYXRoIGVuZHMgd2l0aCBcIi5cIiBhcyBhIGNvbXBsZXRlIHBhdGggc2VnbWVudCxcbiAgICAgIC8vIHRoYXQgXCIuXCIgaXMgcmVtb3ZlZC5cbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykucmVwbGFjZShTTEFTSF9ET1RfUkVHRVgsICcnKTtcbiAgICAgIC8vIDZjKSBBbGwgb2NjdXJyZW5jZXMgb2YgXCI8c2VnbWVudD4vLi4vXCIsIHdoZXJlIDxzZWdtZW50PiBpcyBhXG4gICAgICAvLyBjb21wbGV0ZSBwYXRoIHNlZ21lbnQgbm90IGVxdWFsIHRvIFwiLi5cIiwgYXJlIHJlbW92ZWQuXG4gICAgICAvLyBSZW1vdmFsIG9mIHRoZXNlIHBhdGggc2VnbWVudHMgaXMgcGVyZm9ybWVkIGl0ZXJhdGl2ZWx5LFxuICAgICAgLy8gcmVtb3ZpbmcgdGhlIGxlZnRtb3N0IG1hdGNoaW5nIHBhdHRlcm4gb24gZWFjaCBpdGVyYXRpb24sXG4gICAgICAvLyB1bnRpbCBubyBtYXRjaGluZyBwYXR0ZXJuIHJlbWFpbnMuXG4gICAgICAvLyA2ZCkgSWYgdGhlIHBhdGggZW5kcyB3aXRoIFwiPHNlZ21lbnQ+Ly4uXCIsIHdoZXJlIDxzZWdtZW50PiBpcyBhXG4gICAgICAvLyBjb21wbGV0ZSBwYXRoIHNlZ21lbnQgbm90IGVxdWFsIHRvIFwiLi5cIiwgdGhhdFxuICAgICAgLy8gXCI8c2VnbWVudD4vLi5cIiBpcyByZW1vdmVkLlxuICAgICAgd2hpbGUgKFxuICAgICAgICBwYXRoLmxlbmd0aCAhPT0gKHBhdGggPSBwYXRoLnJlcGxhY2UoU0xBU0hfRE9UX0RPVF9SRUdFWCwgJycpKS5sZW5ndGhcbiAgICAgICkge31cbiAgICAgIHJldHVybiBwYXRoLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgfSxcbiAgICBidWlsZFVSTEZyb21QYXJ0czogZnVuY3Rpb24gKHBhcnRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwYXJ0cy5zY2hlbWUgK1xuICAgICAgICBwYXJ0cy5uZXRMb2MgK1xuICAgICAgICBwYXJ0cy5wYXRoICtcbiAgICAgICAgcGFydHMucGFyYW1zICtcbiAgICAgICAgcGFydHMucXVlcnkgK1xuICAgICAgICBwYXJ0cy5mcmFnbWVudFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBVUkxUb29sa2l0O1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gVVJMVG9vbGtpdDtcbiAgICB9KTtcbiAgZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSBleHBvcnRzWydVUkxUb29sa2l0J10gPSBVUkxUb29sa2l0O1xuICBlbHNlIHJvb3RbJ1VSTFRvb2xraXQnXSA9IFVSTFRvb2xraXQ7XG59KSh0aGlzKTtcbiIsIlxuLy8gZnVuY3Rpb24gY3JlYXRlTWVkaWFLZXlzKGtleVN5c3RlbSwgY29uZmlnKSB7XG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbi8vICAgICBpZiAoIXZpZGVvLndlYmtpdEtleXMpIHtcbi8vICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgLy8gZm9yIFNhZmFyaSBvbmx5XG4vLyAgICAgICAgICAgdmFyIG1lZGlha2V5ID0gbmV3IHdpbmRvdy5XZWJLaXRNZWRpYUtleXMoa2V5U3lzdGVtKTtcbi8vICAgICAgICAgICB2aWRlby53ZWJraXRTZXRNZWRpYUtleXMobWVkaWFrZXkpO1xuXG4vLyAgICAgICB9Y2F0Y2goZXJyb3IpIHtcbi8vICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuLy8gICAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuXG5jb25zdCBrZXlTeXN0ZW1zID0ge1xuICAgIHdpZGV2aW5lOiBbJ2NvbS53aWRldmluZS5hbHBoYSddLFxuICAgIHBsYXlyZWFkeTogWydjb20ubWljcm9zb2Z0LnBsYXlyZWFkeScsICdjb20ueW91dHViZS5wbGF5cmVhZHknXSxcbiAgICBjbGVhcmtleTogWyd3ZWJraXQtb3JnLnczLmNsZWFya2V5JywgJ29yZy53My5jbGVhcmtleSddLFxuICAgIHByaW1ldGltZTogWydjb20uYWRvYmUucHJpbWV0aW1lJywgJ2NvbS5hZG9iZS5hY2Nlc3MnXSxcbiAgICBmYWlycGxheTogWydjb20uYXBwbGUuZnBzJywgJ2NvbS5hcHBsZS5mcHMuMV8wJywgJ2NvbS5hcHBsZS5mcHMuMl8wJywgJ2NvbS5hcHBsZS5mcHMuM18wJ11cbn07XG5cbnZhciBlbnN1cmVQcm9taXNlO1xudmFyIHNlc3Npb247XG5cbi8qKlxuICogY3JlYXRlTWVkaWFLZXlzXG4gKiBAcGFyYW0geyp9IHZpZGVvIFxuICogQHBhcmFtIHsqfSBrZXlTeXN0ZW0gXG4gKiBAcGFyYW0geyp9IGNvbmZpZyBcbiAqIEByZXR1cm5zIFxuICovXG5mdW5jdGlvbiBjcmVhdGVNZWRpYUtleXModmlkZW8sIGtleVN5c3RlbSwgY29uZmlnKSB7XG4gICAgaWYgKGVuc3VyZVByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGVuc3VyZVByb21pc2U7XG4gICAgfVxuICAgIGVuc3VyZVByb21pc2UgPSBuYXZpZ2F0b3IucmVxdWVzdE1lZGlhS2V5U3lzdGVtQWNjZXNzKGtleVN5c3RlbSwgY29uZmlnKVxuICAgICAgICAudGhlbihmdW5jdGlvbihrZXlTeXN0ZW1BY2Nlc3Mpe1xuICAgICAgICAgICAgdmFyIG1lZGlhS2V5cyA9IGtleVN5c3RlbUFjY2Vzcy5jcmVhdGVNZWRpYUtleXMoKTtcbiAgICAgICAgICAgIHZpZGVvLm1lZGlhS2V5c09iamVjdCA9IG1lZGlhS2V5cztcbiAgICAgICAgICAgIHJldHVybiBtZWRpYUtleXM7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obWVkaWFLZXlzKXtcbiAgICAgICAgICAgIHZpZGVvLm1lZGlhS2V5c09iamVjdCA9IG1lZGlhS2V5cztcbiAgICAgICAgICAgIC8vIGlmIChzZXJ2ZXJDZXJ0aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAvLyAgIG1lZGlhS2V5cy5zZXRTZXJ2ZXJDZXJ0aWZpY2F0ZShzZXJ2ZXJDZXJ0aWZpY2F0aW9uKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiB2aWRlby5zZXRNZWRpYUtleXMobWVkaWFLZXlzKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGVuc3VyZVByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxpY2Vuc2VSZXF1ZXN0UmVhZHkoZXZlbnQpIHtcbiAgaWYgKGV2ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHJlcXVlc3QgPSBldmVudC5tZXNzYWdlO1xuICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4bWxodHRwLmtleVNlc3Npb24gPSBldmVudC50YXJnZXQ7XG4gIHhtbGh0dHAucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgY29uc3QgbGljZW5zZVVybCA9IFwiaHR0cHM6Ly9saWMuc3RhZ2luZy5kcm10b2RheS5jb20vbGljZW5zZS1wcm94eS13aWRldmluZS9jZW5jLz9zcGVjQ29uZm9ybT10cnVlXCI7XG4gIGNvbnN0IGN1c3RvbURhdGEgPSAnZXdvZ0lDQWdJblZ6WlhKSlpDSTZJQ0poZDNNdFpXeGxiV1Z1ZEdGc09qcHpjR1ZyWlMxMFpYTjBhVzVuSWl3S0lDQWdJQ0p6WlhOemFXOXVTV1FpT2lBaVpXeGxiV1Z1ZEdGc0xYSmxabk4wY21WaGJTSXNDaUFnSUNBaWJXVnlZMmhoYm5RaU9pQWlZWGR6TFdWc1pXMWxiblJoYkNJS2ZRbz0nO1xuICB4bWxodHRwLm9wZW4oXCJQT1NUXCIsIGxpY2Vuc2VVcmwpO1xuICB4bWxodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJ4LWR0LWN1c3RvbS1kYXRhXCIsIGN1c3RvbURhdGEpO1xuICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgdmFyIGxpY2Vuc2UgPSBuZXcgVWludDhBcnJheSh4bWxodHRwLnJlc3BvbnNlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHNlc3Npb24udXBkYXRlKGxpY2Vuc2UpO1xuICAgICAgICB4bWxodHRwLmtleVNlc3Npb24udXBkYXRlKGxpY2Vuc2UpO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygneG1saHR0cC5rZXlTZXNzaW9uLnVwZGF0ZSBFcnJvcjogJywgZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ3VwZGF0ZSgpIGZhaWxlZCcpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHhtbGh0dHAuc2VuZChyZXF1ZXN0KTtcbn1cblxuLyoqXG4gKiBzZXR1cCBFTUVcbiAqIEBwYXJhbSB7Kn0ga2V5U3lzdGVtIFxuICogQHBhcmFtIHsqfSBjb25maWcgXG4gKi9cbmZ1bmN0aW9uIHNldHVwRU1FKHZpZGVvLCBrZXlTeXN0ZW0sIGNvbmZpZykge1xuICAgIHZpZGVvLnNlc3Npb24gPSBbXTtcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdlbmNyeXB0ZWQnLCBmdW5jdGlvbihlbmNyeXB0ZWRFdmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVuY3J5cHRlZEV2ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXREYXRhVHlwZSA9PT0+ICcsIGVuY3J5cHRlZEV2ZW50LmluaXREYXRhVHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0RGF0YSA9PT0+ICcsIGVuY3J5cHRlZEV2ZW50LmluaXREYXRhKTtcblxuICAgICAgICAvLyBpZiAodmlkZW8ubWVkaWFLZXlzT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gICB2aWRlby5tZWRpYUtleXNPYmplY3QgPSBudWxsOyAvLyBQcmV2ZW50IGVudGVyaW5nIHRoaXMgcGF0aCBhZ2Fpbi5cbiAgICAgICAgLy8gICB2aWRlby5wZW5kaW5nU2Vzc2lvbkRhdGEgPSBbXTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNyZWF0ZU1lZGlhS2V5cyh2aWRlbywga2V5U3lzdGVtLCBjb25maWcpLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdmFyIHNlc3Npb24gPSB2aWRlby5tZWRpYUtleXMuY3JlYXRlU2Vzc2lvbignY29tLndpZGV2aW5lLmFscGhhJywgZW5jcnlwdGVkRXZlbnQuaW5pdERhdGEpO1xuICAgICAgICAgICAgc2Vzc2lvbiA9IHZpZGVvLm1lZGlhS2V5cy5jcmVhdGVTZXNzaW9uKCk7XG4gICAgICAgICAgICB2aWRlby5zZXNzaW9uLnB1c2goc2Vzc2lvbik7XG4gICAgICAgICAgICBzZXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaWNlbnNlUmVxdWVzdFJlYWR5KGV2ZW50KSwgZmFsc2UpO1xuICAgICAgICAgICAgc2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlzdGF0dXNjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleXN0YXR1c2NoYW5nZSA9PT0+ICcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0ZvciBzYWZhcmkgZXZlbnQgJ3dlYmtpdGtleW1lc3NhZ2UnLlxuICAgICAgICAgICAgLy8gc2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRrZXltZXNzYWdlJywgd2Via2l0VXBkYXRlU2Vzc2lvbik7XG4gICAgICAgICAgICBzZXNzaW9uLmdlbmVyYXRlUmVxdWVzdChlbmNyeXB0ZWRFdmVudC5pbml0RGF0YVR5cGUsIGVuY3J5cHRlZEV2ZW50LmluaXREYXRhKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFTUUgc2V0dXAgY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnN0YWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5leHBvcnQge3NldHVwRU1FfTsiLCJleHBvcnQgY2xhc3MgTlhUTWVkaWFUcmFjayB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZFNlZ21lbnQoc2VnbWVudCkge1xuICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgfVxuXG4gIGdldFNlZ21lbnQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWdtZW50c1tpbmRleF07XG4gIH1cblxuICBzZXRBbGxTZWdtZW50cyhzZWdtZW50cykge1xuICAgIHRoaXMuc2VnbWVudHMgPSBzZWdtZW50cztcbiAgfVxuXG4gIGdldEFsbFNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWdtZW50cztcbiAgfVxuXG4gIHNldFRyYWNrTmFtZSh0cmFja05hbWUpIHtcbiAgICB0aGlzLnRyYWNrTmFtZSA9IHRyYWNrTmFtZTtcbiAgfVxuXG4gIGdldFNlZ21lbnRVcmwoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5zZWdtZW50cyAmJiB0aGlzLnNlZ21lbnRzW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHNbaW5kZXhdLnJlc29sdmVkVXJpXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiaW1wb3J0IHsgcGFyc2UgYXMgbXBkUGFyc2VyIH0gZnJvbSBcIm1wZC1wYXJzZXJcIjtcblxudmFyIHBhcnNlZE1hbmlmZXN0O1xuY29uc3QgbWFuaWZlc3RVcmkgPSAnaHR0cHM6Ly9kMjRyd3hudDd2dzlxYi5jbG91ZGZyb250Lm5ldC92MS9kYXNoL2U2ZDIzNDk2NTY0NWI0MTFhZDU3MjgwMmI2YzlkNWExMDc5OWM5YzEvQWxsX1JlZmVyZW5jZV9TdHJlYW1zLzQ1NzdkY2E1ZjhhNDQ3NTY4NzVhYjVjYzkxM2NkMWYxL2luZGV4Lm1wZCc7XG4vLyBEUk0gdm9kXG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL2QyNHJ3eG50N3Z3OXFiLmNsb3VkZnJvbnQubmV0L3YxL2Rhc2gvZTZkMjM0OTY1NjQ1YjQxMWFkNTcyODAyYjZjOWQ1YTEwNzk5YzljMS9BbGxfUmVmZXJlbmNlX1N0cmVhbXMvMmZjMjM5NDc5NDU4NDFiOWIxYmU5NzY4ZjljMTNlNzUvaW5kZXgubXBkJztcbi8vIERSTSBMaXZlXG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL2QyNHJ3eG50N3Z3OXFiLmNsb3VkZnJvbnQubmV0L3YxL2Rhc2gvZTZkMjM0OTY1NjQ1YjQxMWFkNTcyODAyYjZjOWQ1YTEwNzk5YzljMS9BbGxfUmVmZXJlbmNlX1N0cmVhbXMvMmZjMjM5NDc5NDU4NDFiOWIxYmU5NzY4ZjljMTNlNzUvaW5kZXgubXBkJztcbi8vIGNvbnN0IG1hbmlmZXN0VXJpID0gJ2h0dHBzOi8vZGFzaC5ha2FtYWl6ZWQubmV0L2FrYW1haS9iYmJfMzBmcHMvYmJiXzMwZnBzLm1wZCc7XG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL2Rhc2guYWthbWFpemVkLm5ldC9kYXNoMjY0L1Rlc3RDYXNlcy81YS9ub21vci8xLm1wZCc7XG4vLyBjb25zdCBtYW5pZmVzdFVyaSA9ICdodHRwczovL21lZGlhLmF4cHJvZC5uZXQvVGVzdFZlY3RvcnMvdjctQ2xlYXIvTWFuaWZlc3RfMTA4MHAubXBkJztcblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VNUEQoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG1hbmlmZXN0VXJpKTtcbiAgY29uc3QgbWFuaWZlc3QgPSBhd2FpdCByZXMudGV4dCgpO1xuICBwYXJzZWRNYW5pZmVzdCA9IG1wZFBhcnNlcihtYW5pZmVzdCwgeyBtYW5pZmVzdFVyaSB9KTtcbiAgcmV0dXJuIHBhcnNlZE1hbmlmZXN0O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWxvYWRNUEQoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobWFuaWZlc3RVcmkpO1xuICAgIGNvbnN0IG1hbmlmZXN0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICB2YXIgbmV3UGFyc2VkTWFuaWZlc3QgPSBtcGRQYXJzZXIobWFuaWZlc3QsIHsgbWFuaWZlc3RVcmksIHByZXZpb3VzTWFuaWZlc3Q6IHBhcnNlZE1hbmlmZXN0IH0pO1xuICAgIHJldHVybiBuZXdQYXJzZWRNYW5pZmVzdDtcbn1cblxuZXhwb3J0IHsgcGFyc2VNUEQsIHJlbG9hZE1QRCB9O1xuIiwiLyoqXG4gKiBzbGVlcCBmb3IgdGhlIHNwZWNpZmllZCBhbW91bnQgb2YgdGltZVxuICogQHBhcmFtIHsqfSBtcyBcbiAqIEByZXR1cm5zIFxuICovXG5mdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLyoqXG4gKiBGZXRjaCB1cmwgYW5kIHJldHVybiB0aGUgYXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7Kn0gdXJsIFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIGdldE1lZGlhKHVybCkge1xuICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5leHBlY3RlZCBzdGF0dXMgY29kZSBcIiArIHJlcy5zdGF0dXMgKyBcIiBmb3IgXCIgKyB1cmwpO1xuICAgICAgICB0aHJvdyByZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmFycmF5QnVmZmVyKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5kaXIoZXJyKSk7XG59XG5cbmV4cG9ydCB7c2xlZXAsIGdldE1lZGlhfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3BhcnNlTVBELCByZWxvYWRNUER9IGZyb20gXCIuL21wZFwiO1xuaW1wb3J0IHsgc2V0dXBFTUUgfSBmcm9tIFwiLi9lbWVcIjtcbmltcG9ydCB7IHNsZWVwLCBnZXRNZWRpYSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBOWFRNZWRpYVRyYWNrIH0gZnJvbSBcIi4vbWVkaWF0cmFja1wiXG5cbmNsYXNzIE5YUGxheWVyIHtcbiAgb3B0aW9ucztcbiAgdmlkZW87XG4gIG1hbmlmZXN0RGF0YTtcbiAgaW5pdFNlZ21lbnQ7XG4gIGF1ZGlvSW5pdFNlZ21lbnQ7XG4gIG51bWJlck9mVmlkZW9DaHVua3M7XG4gIG51bWJlck9mQXVkaW9DaHVua3M7XG5cbiAgdmlkZW9NaW1lVHlwZSA9ICd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNjQwMDFlXCInO1xuICBhdWRpb01pbWVUeXBlID0gJ2F1ZGlvL21wNDsgY29kZWNzPVwibXA0YS40MC4yXCInO1xuXG4gIGNvbnN0cnVjdG9yKHZpZGVvLCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gIH1cblxuICAvKipcbiAgKiBUaGUgbWFpbiBlbnRyYW5jZSBvZiBueHRQbGF5ZXJcbiAgKiBAcmV0dXJucyBcbiAgKi9cbiAgYXN5bmMgcGxheSgpIHtcbiAgICAvKiogcHJlLWRlZmluZSBzb3VyY2VCdWZmZXIgKi9cbiAgICBsZXQgdmlkZW9TcmNCdWZmZXI7XG4gICAgbGV0IGF1ZGlvU3JjQnVmZmVyO1xuICAgIFxuICAgIC8qKiAtLS0gdXBkYXRlIG1hbmlmZXN0IGRhdGEgLS0tICoqL1xuICAgIGNvbnN0IHN0YXJ0UmVsb2FkaW5nTG9vcCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBmZXRjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lID49IDIwMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVsb2FkIG1hbmlmZXN0Li4uJyk7XG4gICAgICAgICAgbWFuaWZlc3REYXRhID0gYXdhaXQgcmVsb2FkTVBEKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ21hbmlmZXN0IHJlbG9hZGVkLicpO1xuICAgICAgICAgIG51bWJlck9mVmlkZW9DaHVua3MgPSBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzLmxlbmd0aDtcbiAgICAgICAgICBudW1iZXJPZkF1ZGlvQ2h1bmtzID0gbWFuaWZlc3REYXRhLm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvLmVuZy5wbGF5bGlzdHNbMF0uc2VnbWVudHMubGVuZ3RoO1xuICAgICAgICAgIHN0YXJ0VGltZSA9IGZldGNoVGltZTtcbiAgICAgICAgfVxuICAgICAgICBzbGVlcCgxMDApO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gc3RhcnRSZWxvYWRpbmdMb29wKCk7XG4gICAgXG4gICAgLyoqIHBhcnNlIG1hbmlmZXN0IGJ5ICdtcGQtcGFyc2VyJyAqL1xuICAgIG1hbmlmZXN0RGF0YSA9IGF3YWl0IHBhcnNlTVBEKCk7XG5cbiAgICB2YXIgdmlkZW9UcmFjayA9IG5ldyBOWFRNZWRpYVRyYWNrKCk7XG4gICAgdmlkZW9UcmFjay5zZXRBbGxTZWdtZW50cyhtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzKTtcbiAgICBudW1iZXJPZlZpZGVvQ2h1bmtzID0gdmlkZW9UcmFjay5zZWdtZW50cy5sZW5ndGg7XG5cbiAgICB2YXIgYXVkaW9UcmFjayA9IG5ldyBOWFRNZWRpYVRyYWNrKCk7XG4gICAgYXVkaW9UcmFjay5zZXRBbGxTZWdtZW50cyhtYW5pZmVzdERhdGEubWVkaWFHcm91cHMuQVVESU8uYXVkaW8uZW5nLnBsYXlsaXN0c1swXS5zZWdtZW50cyk7XG4gICAgbnVtYmVyT2ZBdWRpb0NodW5rcyA9IGF1ZGlvVHJhY2suc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgLyoqIGdldCB2aWRlbyBlbGVtZW50IHVuZGVyIGNvbnRyb2wgKi9cbiAgICAvLyBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKTtcbiAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW87XG5cbiAgICAvKiogY2hlY2sgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgTVNFIG9yIG5vdCAqL1xuICAgIGlmICghd2luZG93Lk1lZGlhU291cmNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTm8gTWVkaWEgU291cmNlIEFQSSBhdmFpbGFibGVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqIGNyZWF0ZSBNU0UgaW5zdGFuY2UgKi9cbiAgICBsZXQgbWVkaWFTb3VyY2UgPSBuZXcgTWVkaWFTb3VyY2UoKTtcbiAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChtZWRpYVNvdXJjZSk7XG5cbiAgICAvLyBMb2cgZXZlbnRzIGRpc3BhdGNoZWQgdG8gbWFrZSBkZWJ1Z2dpbmcgZWFzaWVyLi4uXG4gICAgWyBcImNhbnBsYXlcIiwgXCJjYW5wbGF5dGhyb3VnaFwiLCBcImVuY3J5cHRlZFwiLCBcImVuZGVkXCIsIFwiZXJyb3JcIiwgXCJsb2FkZWRkYXRhXCIsXG4gICAgICBcImxvYWRlZG1ldGFkYXRhXCIsIFwibG9hZHN0YXJ0XCIsIFwicGF1c2VcIiwgXCJwbGF5XCIsIFwicGxheWluZ1wiLCBcInByb2dyZXNzXCIsXG4gICAgICBcInN0YWxsZWRcIiwgXCJzdXNwZW5kXCIsIFwid2FpdGluZ1wiLFxuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihlLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVWRU5UOiBcIiArIGUpO1xuICAgICAgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgLyoqIEFkZCBjYWxsYmFjayBmdW5jdGlvbiBbb25NZWRpYVNvdXJjZU9wZW5dICAqL1xuICAgIG1lZGlhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIoXCJzb3VyY2VvcGVuXCIsIG9uTWVkaWFTb3VyY2VPcGVuKTtcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICB2aWRlby5wbGF5KCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAqIFNldHVwIEVNRSBPcHRpb25zXG4gICAgKi9cbiAgICAvLyB2YXIgZW1lT3B0aW9ucztcbiAgICAvLyBpZiAodHlwZW9mKE1lZGlhS2V5U3lzdGVtQWNjZXNzLnByb3RvdHlwZS5nZXRDb25maWd1cmF0aW9uKSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gICAvLyBGaXJlZm94IDQzIGFuZCBlYXJsaWVyIHVzZWQgYSBkaWZmZXJlbnQgc3R5bGUgb2YgZGVmaW5pbmcgY29uZmlndXJhdGlvbnNcbiAgICAvLyAgIC8vIGZvciBuYXZpZ2F0b3IucmVxdWVzdE1lZGlhS2V5U3lzdGVtIHRoYXQgZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBzcGVjLlxuICAgIC8vICAgbG9nKFwiRGV0ZWN0ZWQgb2Jzb2xldGUgbmF2aWdhdG9yLnJlcXVlc3RNZWRpYUtleVN5c3RlbSBvcHRpb25zIHN0eWxlLlwiKTtcbiAgICAvLyAgIGVtZU9wdGlvbnMgPSBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBpbml0RGF0YVR5cGU6IFwiY2VuY1wiLFxuICAgIC8vICAgICAgIHZpZGVvVHlwZTogdmlkZW9NaW1lVHlwZSxcbiAgICAvLyAgICAgICBhdWRpb1R5cGU6IGF1ZGlvTWltZVR5cGVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgZW1lT3B0aW9ucyA9IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGluaXREYXRhVHlwZXM6IFsna2V5aWRzJywnY2VuYyddLFxuICAgIC8vICAgICAgIHZpZGVvQ2FwYWJpbGl0aWVzOiBbe2NvbnRlbnRUeXBlOiB2aWRlb01pbWVUeXBlfV0sXG4gICAgLy8gICAgICAgYXVkaW9DYXBhYmlsaXRpZXM6IFt7Y29udGVudFR5cGU6IGF1ZGlvTWltZVR5cGV9XSxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXTtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAqIEluaXRpYWxpemUgRW5jcnlwdGVkIE1lZGlhIEV4dGVudGlvblxuICAgICovXG4gICAgLy8gc2V0dXBFTUUodmlkZW8sIGtleVN5c3RlbXMud2lkZXZpbmVbMF0sIGVtZU9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgKiBcbiAgICAqL1xuICAgIGZ1bmN0aW9uIG9uTWVkaWFTb3VyY2VPcGVuKCkge1xuXG4gICAgICB2aWRlb1NyY0J1ZmZlciA9IG1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcih2aWRlb01pbWVUeXBlKTtcbiAgICAgIHZpZGVvU3JjQnVmZmVyLm1vZGUgPSAnc2VxdWVuY2UnO1xuICAgICAgXG4gICAgICBhdWRpb1NyY0J1ZmZlciA9IG1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihhdWRpb01pbWVUeXBlKTtcbiAgICAgIGF1ZGlvU3JjQnVmZmVyLm1vZGUgPSAnc2VxdWVuY2UnO1xuXG4gICAgICB2aWRlb1NyY0J1ZmZlci5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZW5kXCIsIG5leHRTZWdtZW50KFwidmlkZW9cIikpO1xuICAgICAgYXVkaW9TcmNCdWZmZXIuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCBuZXh0U2VnbWVudChcImF1ZGlvXCIpKTtcblxuICAgICAgLy8gYXdzIG11bHRpIHBlcmlvZFxuICAgICAgdmFyIGluaXRVcmwgPSBtYW5pZmVzdERhdGEucGxheWxpc3RzWzBdLnNlZ21lbnRzWzBdLm1hcC5yZXNvbHZlZFVyaTtcbiAgICAgIC8vIHRlYXJzIHdpZGV2aW5lIHRlc3RcbiAgICAgIC8vIHZhciBpbml0VXJsID0gbWFuaWZlc3REYXRhLnBsYXlsaXN0c1swXS5zaWR4LnVyaVxuICAgICAgaW5pdFNlZ21lbnQgPSBpbml0VXJsO1xuXG4gICAgICAvLyBhd3MgbXVsdGkgcGVyaW9kXG4gICAgICB2YXIgYXVkaW9Jbml0VXJsID0gbWFuaWZlc3REYXRhLm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvLmVuZy5wbGF5bGlzdHNbMF0uc2VnbWVudHNbMF0ubWFwLnJlc29sdmVkVXJpO1xuICAgICAgLy8gdGVhcnMgd2lkZXZpbmUgdGVzdFxuICAgICAgLy8gdmFyIGF1ZGlvSW5pdFVybCA9IG1hbmlmZXN0RGF0YS5tZWRpYUdyb3Vwcy5BVURJTy5hdWRpby5lbi5wbGF5bGlzdHNbMF0uc2lkeC51cmk7XG4gICAgICBhdWRpb0luaXRTZWdtZW50ID0gYXVkaW9Jbml0VXJsO1xuICAgICAgLy8gdmFyIGluaXRVcmwgPSBiYXNlVXJsICsgbWFuaWZlc3REYXRhLnBsYXlsaXN0c1swXS5zZWdtZW50c1swXS5tYXAudXJpO1xuXG4gICAgICBnZXRNZWRpYShpbml0VXJsKS50aGVuKGFwcGVuZFRvQnVmZmVyKFwidmlkZW9cIikpO1xuICAgICAgZ2V0TWVkaWEoYXVkaW9Jbml0VXJsKS50aGVuKGFwcGVuZFRvQnVmZmVyKFwiYXVkaW9cIikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRTZWdtZW50KHR5cGUpIHtcbiAgICAgIGxldCB2aWRlb0luZGV4ID0gMDtcbiAgICAgIGxldCBhdWRpb0luZGV4ID0gMDtcbiAgICAgIC8vIGNvbnN0IHRtcFVybCA9IHR5cGUgPT09IFwidmlkZW9cIiA/IHRlbXBsYXRlVXJsIDogYXVkaW9UbXBVcmw7XG4gICAgICBjb25zdCBzb3VyY2VidWZmZXIgPSB0eXBlID09PSBcInZpZGVvXCIgPyB2aWRlb1NyY0J1ZmZlciA6IGF1ZGlvU3JjQnVmZmVyO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAobWFuaWZlc3REYXRhLnBsYXlsaXN0c1swXS5zZWdtZW50cy5sZW5ndGggPT09IDApIHsgXG4gICAgICAgICAgc291cmNlYnVmZmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVlbmRcIiwgbmV4dFNlZ21lbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSBcInZpZGVvXCIpIHtcbiAgICAgICAgICBjb25zdCBzZWdtZW50VXJsID0gdmlkZW9UcmFjay5nZXRTZWdtZW50VXJsKHZpZGVvSW5kZXgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWdtZW50VXJsID4+PiAnLCBzZWdtZW50VXJsKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAodmlkZW9UcmFjay5nZXRTZWdtZW50KHZpZGVvSW5kZXgpLm1hcC5yZXNvbHZlZFVyaSA9PT0gaW5pdFNlZ21lbnQpIHtcbiAgICAgICAgICAgIGdldE1lZGlhKHNlZ21lbnRVcmwpLnRoZW4oYXBwZW5kVG9CdWZmZXIodHlwZSkpO1xuICAgICAgICAgICAgdmlkZW9JbmRleCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0U2VnbWVudCA9IG1hbmlmZXN0RGF0YS5wbGF5bGlzdHNbMF0uc2VnbWVudHNbdmlkZW9JbmRleF0ubWFwLnJlc29sdmVkVXJpO1xuICAgICAgICAgICAgZ2V0TWVkaWEoaW5pdFNlZ21lbnQpLnRoZW4oYXBwZW5kVG9CdWZmZXIodHlwZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zdCBzZWdtZW50VXJsID0gYmFzZVVybCArIG1hbmlmZXN0RGF0YS5wbGF5bGlzdHNbMF0uc2VnbWVudHNbaW5kZXhdLnVyaTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAodmlkZW9JbmRleCA+IG51bWJlck9mVmlkZW9DaHVua3MpIHtcbiAgICAgICAgICAgIHNvdXJjZWJ1ZmZlci5yZW1vdmVFdmVudExpc3RlbmVyKFwidXBkYXRlZW5kXCIsIG5leHRTZWdtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYXVkaW9TZWdtZW50VXJsID0gYXVkaW9UcmFjay5nZXRTZWdtZW50VXJsKGF1ZGlvSW5kZXgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpb1NlZ21lbnRVcmwgPj4+ICcsIGF1ZGlvU2VnbWVudFVybCk7XG4gICAgICAgICAgaWYgKGF1ZGlvVHJhY2suZ2V0U2VnbWVudChhdWRpb0luZGV4KS5tYXAucmVzb2x2ZWRVcmkgPT09IGF1ZGlvSW5pdFNlZ21lbnQpIHtcbiAgICAgICAgICAgIGdldE1lZGlhKGF1ZGlvU2VnbWVudFVybCkudGhlbihhcHBlbmRUb0J1ZmZlcih0eXBlKSk7XG4gICAgICAgICAgICBhdWRpb0luZGV4Kys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1ZGlvSW5pdFNlZ21lbnQgPSBtYW5pZmVzdERhdGEubWVkaWFHcm91cHMuQVVESU8uYXVkaW8uZW5nLnBsYXlsaXN0c1swXS5zZWdtZW50c1thdWRpb0luZGV4XS5tYXAucmVzb2x2ZWRVcmk7XG4gICAgICAgICAgICBnZXRNZWRpYShhdWRpb0luaXRTZWdtZW50KS50aGVuKGFwcGVuZFRvQnVmZmVyKHR5cGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGF1ZGlvSW5kZXggPiBudW1iZXJPZkF1ZGlvQ2h1bmtzKSB7XG4gICAgICAgICAgICBzb3VyY2VidWZmZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCBuZXh0U2VnbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUb0J1ZmZlcih0eXBlKSB7XG4gICAgICBjb25zdCBzb3VyY2VidWZmZXIgPSB0eXBlID09PSBcInZpZGVvXCIgPyB2aWRlb1NyY0J1ZmZlciA6IGF1ZGlvU3JjQnVmZmVyO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjaHVuaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yICYmIG1lZGlhU291cmNlLnJlYWR5U3RhdGUgPT09IFwib3BlblwiKSB7XG4gICAgICAgICAgbWVkaWFTb3VyY2UuZW5kT2ZTdHJlYW0oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2h1bmspIHtcbiAgICAgICAgICBzb3VyY2VidWZmZXIuYXBwZW5kQnVmZmVyKG5ldyBVaW50OEFycmF5KGNodW5rKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5YUGxheWVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==