module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lambda.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs-config.js":
/*!************************!*\
  !*** ./docs-config.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  HTTPS,\n  PORT,\n  NODE_ENV,\n  BACKEND_URL,\n  TEST_BACKEND_URL\n} = process.env;\nconst secure = HTTPS ? JSON.parse(HTTPS) : false;\nconst dev = NODE_ENV === 'development';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // addModels: true,\n  swagger: {\n    info: {\n      title: 'Fastify Dev Env',\n      description: 'Fastify Dev Env documentation',\n      version: '0.1.0'\n    },\n    servers: [{\n      url: `${secure ? 'https' : 'http'}://0.0.0.0:` + PORT,\n      description: 'Local development'\n    }, {\n      url: TEST_BACKEND_URL,\n      description: 'Production on test-server'\n    }, {\n      url: BACKEND_URL,\n      description: 'Production on real-server'\n    }].filter(f => f.url),\n    host: dev ? '0.0.0.0:' + PORT : BACKEND_URL,\n    schemes: ['http', secure && 'https'].filter(f => f),\n    consumes: ['application/json'],\n    produces: ['application/json'],\n    tags: [{\n      name: 'route-1',\n      description: 'Route category 1'\n    }, {\n      name: 'route-2',\n      description: 'Route category 2'\n    }],\n    components: {\n      securitySchemes: {\n        bearerAuth: {\n          type: 'http',\n          description: 'Authorization Token',\n          scheme: 'bearer',\n          bearerFormat: 'JWT'\n        }\n      }\n    },\n    security: [{\n      bearerAuth: []\n    }]\n  },\n  exposeRoute: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzLWNvbmZpZy5qcz8zMjMwIl0sIm5hbWVzIjpbIkhUVFBTIiwiUE9SVCIsIk5PREVfRU5WIiwiQkFDS0VORF9VUkwiLCJURVNUX0JBQ0tFTkRfVVJMIiwicHJvY2VzcyIsImVudiIsInNlY3VyZSIsIkpTT04iLCJwYXJzZSIsImRldiIsInN3YWdnZXIiLCJpbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJzZXJ2ZXJzIiwidXJsIiwiZmlsdGVyIiwiZiIsImhvc3QiLCJzY2hlbWVzIiwiY29uc3VtZXMiLCJwcm9kdWNlcyIsInRhZ3MiLCJuYW1lIiwiY29tcG9uZW50cyIsInNlY3VyaXR5U2NoZW1lcyIsImJlYXJlckF1dGgiLCJ0eXBlIiwic2NoZW1lIiwiYmVhcmVyRm9ybWF0Iiwic2VjdXJpdHkiLCJleHBvc2VSb3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNO0FBQUVBLE9BQUY7QUFBU0MsTUFBVDtBQUFlQyxVQUFmO0FBQXlCQyxhQUF6QjtBQUFzQ0M7QUFBdEMsSUFBMkRDLE9BQU8sQ0FBQ0MsR0FBekU7QUFDQSxNQUFNQyxNQUFNLEdBQUdQLEtBQUssR0FBR1EsSUFBSSxDQUFDQyxLQUFMLENBQVdULEtBQVgsQ0FBSCxHQUF1QixLQUEzQztBQUNBLE1BQU1VLEdBQUcsR0FBR1IsUUFBUSxLQUFLLGFBQXpCO0FBRWU7QUFDYjtBQUNBUyxTQUFPLEVBQUU7QUFDUEMsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxpQkFESDtBQUVKQyxpQkFBVyxFQUFFLCtCQUZUO0FBR0pDLGFBQU8sRUFBRTtBQUhMLEtBREM7QUFNUEMsV0FBTyxFQUFFLENBQ1A7QUFDRUMsU0FBRyxFQUFHLEdBQUVWLE1BQU0sR0FBRyxPQUFILEdBQWEsTUFBTyxhQUE3QixHQUE0Q04sSUFEbkQ7QUFFRWEsaUJBQVcsRUFBRTtBQUZmLEtBRE8sRUFLUDtBQUNFRyxTQUFHLEVBQUViLGdCQURQO0FBRUVVLGlCQUFXLEVBQUU7QUFGZixLQUxPLEVBU1A7QUFDRUcsU0FBRyxFQUFFZCxXQURQO0FBRUVXLGlCQUFXLEVBQUU7QUFGZixLQVRPLEVBYVBJLE1BYk8sQ0FhQ0MsQ0FBRCxJQUFPQSxDQUFDLENBQUNGLEdBYlQsQ0FORjtBQW9CUEcsUUFBSSxFQUFFVixHQUFHLEdBQUcsYUFBYVQsSUFBaEIsR0FBdUJFLFdBcEJ6QjtBQXFCUGtCLFdBQU8sRUFBRSxDQUFDLE1BQUQsRUFBU2QsTUFBTSxJQUFJLE9BQW5CLEVBQTRCVyxNQUE1QixDQUFvQ0MsQ0FBRCxJQUFPQSxDQUExQyxDQXJCRjtBQXNCUEcsWUFBUSxFQUFFLENBQUMsa0JBQUQsQ0F0Qkg7QUF1QlBDLFlBQVEsRUFBRSxDQUFDLGtCQUFELENBdkJIO0FBd0JQQyxRQUFJLEVBQUUsQ0FDSjtBQUNFQyxVQUFJLEVBQUUsU0FEUjtBQUVFWCxpQkFBVyxFQUFFO0FBRmYsS0FESSxFQUtKO0FBQ0VXLFVBQUksRUFBRSxTQURSO0FBRUVYLGlCQUFXLEVBQUU7QUFGZixLQUxJLENBeEJDO0FBa0NQWSxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRTtBQUNmQyxrQkFBVSxFQUFFO0FBQ1ZDLGNBQUksRUFBRSxNQURJO0FBRVZmLHFCQUFXLEVBQUUscUJBRkg7QUFHVmdCLGdCQUFNLEVBQUUsUUFIRTtBQUlWQyxzQkFBWSxFQUFFO0FBSko7QUFERztBQURQLEtBbENMO0FBNENQQyxZQUFRLEVBQUUsQ0FBQztBQUFFSixnQkFBVSxFQUFFO0FBQWQsS0FBRDtBQTVDSCxHQUZJO0FBZ0RiSyxhQUFXLEVBQUU7QUFoREEsQ0FBZiIsImZpbGUiOiIuL2RvY3MtY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBIVFRQUywgUE9SVCwgTk9ERV9FTlYsIEJBQ0tFTkRfVVJMLCBURVNUX0JBQ0tFTkRfVVJMIH0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IHNlY3VyZSA9IEhUVFBTID8gSlNPTi5wYXJzZShIVFRQUykgOiBmYWxzZTtcbmNvbnN0IGRldiA9IE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFkZE1vZGVsczogdHJ1ZSxcbiAgc3dhZ2dlcjoge1xuICAgIGluZm86IHtcbiAgICAgIHRpdGxlOiAnRmFzdGlmeSBEZXYgRW52JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmFzdGlmeSBEZXYgRW52IGRvY3VtZW50YXRpb24nLFxuICAgICAgdmVyc2lvbjogJzAuMS4wJ1xuICAgIH0sXG4gICAgc2VydmVyczogW1xuICAgICAge1xuICAgICAgICB1cmw6IGAke3NlY3VyZSA/ICdodHRwcycgOiAnaHR0cCd9Oi8vMC4wLjAuMDpgICsgUE9SVCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb2NhbCBkZXZlbG9wbWVudCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVybDogVEVTVF9CQUNLRU5EX1VSTCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0aW9uIG9uIHRlc3Qtc2VydmVyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXJsOiBCQUNLRU5EX1VSTCxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0aW9uIG9uIHJlYWwtc2VydmVyJ1xuICAgICAgfVxuICAgIF0uZmlsdGVyKChmKSA9PiBmLnVybCksXG4gICAgaG9zdDogZGV2ID8gJzAuMC4wLjA6JyArIFBPUlQgOiBCQUNLRU5EX1VSTCxcbiAgICBzY2hlbWVzOiBbJ2h0dHAnLCBzZWN1cmUgJiYgJ2h0dHBzJ10uZmlsdGVyKChmKSA9PiBmKSxcbiAgICBjb25zdW1lczogWydhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgcHJvZHVjZXM6IFsnYXBwbGljYXRpb24vanNvbiddLFxuICAgIHRhZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3JvdXRlLTEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JvdXRlIGNhdGVnb3J5IDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAncm91dGUtMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUm91dGUgY2F0ZWdvcnkgMidcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIHNlY3VyaXR5U2NoZW1lczoge1xuICAgICAgICBiZWFyZXJBdXRoOiB7XG4gICAgICAgICAgdHlwZTogJ2h0dHAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXV0aG9yaXphdGlvbiBUb2tlbicsXG4gICAgICAgICAgc2NoZW1lOiAnYmVhcmVyJyxcbiAgICAgICAgICBiZWFyZXJGb3JtYXQ6ICdKV1QnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNlY3VyaXR5OiBbeyBiZWFyZXJBdXRoOiBbXSB9XVxuICB9LFxuICBleHBvc2VSb3V0ZTogdHJ1ZVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs-config.js\n");

/***/ }),

/***/ "./lambda.js":
/*!*******************!*\
  !*** ./lambda.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-serverless-express */ \"aws-serverless-express\");\n/* harmony import */ var aws_serverless_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_serverless_express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/server */ \"./src/server.js\");\n\n\nlet server;\n\nconst serverFactory = handler => {\n  server = aws_serverless_express__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(handler);\n  return server;\n};\n\nconst app = Object(_src_server__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(serverFactory);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((event, context, callback) => {\n  context.callbackWaitsForEmptyEventLoop = false;\n  app.ready(e => {\n    if (e) return console.error(e.stack || e);\n    aws_serverless_express__WEBPACK_IMPORTED_MODULE_0___default.a.proxy(server, event, context, 'CALLBACK', callback);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYW1iZGEuanM/NzA3MiJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJzZXJ2ZXJGYWN0b3J5IiwiaGFuZGxlciIsImF3c1NlcnZlcmxlc3NFeHByZXNzIiwiY3JlYXRlU2VydmVyIiwiYXBwIiwiZmFzdGlmeSIsImV2ZW50IiwiY29udGV4dCIsImNhbGxiYWNrIiwiY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJwcm94eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjs7QUFDQSxNQUFNQyxhQUFhLEdBQUlDLE9BQUQsSUFBYTtBQUNqQ0YsUUFBTSxHQUFHRyw2REFBb0IsQ0FBQ0MsWUFBckIsQ0FBa0NGLE9BQWxDLENBQVQ7QUFDQSxTQUFPRixNQUFQO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNSyxHQUFHLEdBQUdDLDJEQUFPLENBQUNMLGFBQUQsQ0FBbkI7QUFFZSxnRUFBQ00sS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxRQUFqQixLQUE4QjtBQUMzQ0QsU0FBTyxDQUFDRSw4QkFBUixHQUF5QyxLQUF6QztBQUNBTCxLQUFHLENBQUNNLEtBQUosQ0FBV0MsQ0FBRCxJQUFPO0FBQ2YsUUFBSUEsQ0FBSixFQUFPLE9BQU9DLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFDLENBQUNHLEtBQUYsSUFBV0gsQ0FBekIsQ0FBUDtBQUNQVCxpRUFBb0IsQ0FBQ2EsS0FBckIsQ0FBMkJoQixNQUEzQixFQUFtQ08sS0FBbkMsRUFBMENDLE9BQTFDLEVBQW1ELFVBQW5ELEVBQStEQyxRQUEvRDtBQUNELEdBSEQ7QUFJRCxDQU5EIiwiZmlsZSI6Ii4vbGFtYmRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF3c1NlcnZlcmxlc3NFeHByZXNzIGZyb20gJ2F3cy1zZXJ2ZXJsZXNzLWV4cHJlc3MnO1xuaW1wb3J0IGZhc3RpZnkgZnJvbSAnLi9zcmMvc2VydmVyJztcblxubGV0IHNlcnZlcjtcbmNvbnN0IHNlcnZlckZhY3RvcnkgPSAoaGFuZGxlcikgPT4ge1xuICBzZXJ2ZXIgPSBhd3NTZXJ2ZXJsZXNzRXhwcmVzcy5jcmVhdGVTZXJ2ZXIoaGFuZGxlcik7XG4gIHJldHVybiBzZXJ2ZXI7XG59O1xuXG5jb25zdCBhcHAgPSBmYXN0aWZ5KHNlcnZlckZhY3RvcnkpO1xuXG5leHBvcnQgZGVmYXVsdCAoZXZlbnQsIGNvbnRleHQsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gIGFwcC5yZWFkeSgoZSkgPT4ge1xuICAgIGlmIChlKSByZXR1cm4gY29uc29sZS5lcnJvcihlLnN0YWNrIHx8IGUpO1xuICAgIGF3c1NlcnZlcmxlc3NFeHByZXNzLnByb3h5KHNlcnZlciwgZXZlbnQsIGNvbnRleHQsICdDQUxMQkFDSycsIGNhbGxiYWNrKTtcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambda.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanM/ODJiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/harmony-module.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: dbConfig, dev, log, test, prod, corsWhitelist, jwt, secretKey, jwtSign, cookie, port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbConfig\", function() { return dbConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dev\", function() { return dev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prod\", function() { return prod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"corsWhitelist\", function() { return corsWhitelist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jwt\", function() { return jwt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretKey\", function() { return secretKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jwtSign\", function() { return jwtSign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cookie\", function() { return cookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\nconst {\n  NODE_ENV,\n  DB_HOST: host,\n  DB_NAME: db,\n  DB_USER: username,\n  DB_PASSWORD: password,\n  DB_PORT,\n  FRONT_URL,\n  HTTPS,\n  SECURE_COOKIE,\n  COOKIE_SAMESITE,\n  COOKIE_DOMAIN,\n  COOKIE_PATH = '/',\n  ERROR_LOG,\n  secretKey,\n  jwtSecretKey,\n  PORT\n} = process.env;\nconst secure = JSON.parse(HTTPS || SECURE_COOKIE || false);\nconst log = ERROR_LOG ? JSON.parse(ERROR_LOG) : false;\nconst dev = NODE_ENV === 'development';\nconst port = PORT || 8080;\nconst dbConfig = {\n  host,\n  db,\n  username,\n  password,\n  port: DB_PORT\n};\nconst test = NODE_ENV === 'test';\nconst prod = NODE_ENV === 'production' || !NODE_ENV;\nconst corsWhitelist = [FRONT_URL];\nconst jwt = {\n  expiresIn: 7200000\n  /* 2 hour */\n\n};\nconst jwtSign = {\n  secret: jwtSecretKey,\n  sign: {\n    algorithm: 'HS512',\n    issuer: 'api.domain.tld'\n  },\n  verify: {\n    issuer: 'api.domain.tld',\n    secret: secretKey\n  }\n};\nconst cookie = {\n  httpOnly: true,\n  secure,\n  sameSite: COOKIE_SAMESITE ? JSON.parse(COOKIE_SAMESITE) : false,\n  domain: COOKIE_DOMAIN,\n  path: COOKIE_PATH\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzP2RiNDkiXSwibmFtZXMiOlsiTk9ERV9FTlYiLCJEQl9IT1NUIiwiaG9zdCIsIkRCX05BTUUiLCJkYiIsIkRCX1VTRVIiLCJ1c2VybmFtZSIsIkRCX1BBU1NXT1JEIiwicGFzc3dvcmQiLCJEQl9QT1JUIiwiRlJPTlRfVVJMIiwiSFRUUFMiLCJTRUNVUkVfQ09PS0lFIiwiQ09PS0lFX1NBTUVTSVRFIiwiQ09PS0lFX0RPTUFJTiIsIkNPT0tJRV9QQVRIIiwiRVJST1JfTE9HIiwic2VjcmV0S2V5Iiwiand0U2VjcmV0S2V5IiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJzZWN1cmUiLCJKU09OIiwicGFyc2UiLCJsb2ciLCJkZXYiLCJwb3J0IiwiZGJDb25maWciLCJ0ZXN0IiwicHJvZCIsImNvcnNXaGl0ZWxpc3QiLCJqd3QiLCJleHBpcmVzSW4iLCJqd3RTaWduIiwic2VjcmV0Iiwic2lnbiIsImFsZ29yaXRobSIsImlzc3VlciIsInZlcmlmeSIsImNvb2tpZSIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJkb21haW4iLCJwYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNO0FBQ0pBLFVBREk7QUFFSkMsU0FBTyxFQUFFQyxJQUZMO0FBR0pDLFNBQU8sRUFBRUMsRUFITDtBQUlKQyxTQUFPLEVBQUVDLFFBSkw7QUFLSkMsYUFBVyxFQUFFQyxRQUxUO0FBTUpDLFNBTkk7QUFPSkMsV0FQSTtBQVFKQyxPQVJJO0FBU0pDLGVBVEk7QUFVSkMsaUJBVkk7QUFXSkMsZUFYSTtBQVlKQyxhQUFXLEdBQUcsR0FaVjtBQWFKQyxXQWJJO0FBY0pDLFdBZEk7QUFlSkMsY0FmSTtBQWdCSkM7QUFoQkksSUFpQkZDLE9BQU8sQ0FBQ0MsR0FqQlo7QUFtQkEsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2IsS0FBSyxJQUFJQyxhQUFULElBQTBCLEtBQXJDLENBQWY7QUFDQSxNQUFNYSxHQUFHLEdBQUdULFNBQVMsR0FBR08sSUFBSSxDQUFDQyxLQUFMLENBQVdSLFNBQVgsQ0FBSCxHQUEyQixLQUFoRDtBQUNBLE1BQU1VLEdBQUcsR0FBRzFCLFFBQVEsS0FBSyxhQUF6QjtBQUNBLE1BQU0yQixJQUFJLEdBQUdSLElBQUksSUFBSSxJQUFyQjtBQUVBLE1BQU1TLFFBQVEsR0FBRztBQUNmMUIsTUFEZTtBQUVmRSxJQUZlO0FBR2ZFLFVBSGU7QUFJZkUsVUFKZTtBQUtmbUIsTUFBSSxFQUFFbEI7QUFMUyxDQUFqQjtBQU9BLE1BQU1vQixJQUFJLEdBQUc3QixRQUFRLEtBQUssTUFBMUI7QUFDQSxNQUFNOEIsSUFBSSxHQUFHOUIsUUFBUSxLQUFLLFlBQWIsSUFBNkIsQ0FBQ0EsUUFBM0M7QUFDQSxNQUFNK0IsYUFBYSxHQUFHLENBQUNyQixTQUFELENBQXRCO0FBQ0EsTUFBTXNCLEdBQUcsR0FBRztBQUNWQyxXQUFTLEVBQUU7QUFBUTs7QUFEVCxDQUFaO0FBR0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFFBQU0sRUFBRWpCLFlBRE07QUFFZGtCLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUUsT0FEUDtBQUVKQyxVQUFNLEVBQUU7QUFGSixHQUZRO0FBTWRDLFFBQU0sRUFBRTtBQUFFRCxVQUFNLEVBQUUsZ0JBQVY7QUFBNEJILFVBQU0sRUFBRWxCO0FBQXBDO0FBTk0sQ0FBaEI7QUFRQSxNQUFNdUIsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRSxJQURHO0FBRWJuQixRQUZhO0FBR2JvQixVQUFRLEVBQUU3QixlQUFlLEdBQUdVLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxlQUFYLENBQUgsR0FBaUMsS0FIN0M7QUFJYjhCLFFBQU0sRUFBRTdCLGFBSks7QUFLYjhCLE1BQUksRUFBRTdCO0FBTE8sQ0FBZiIsImZpbGUiOiIuL3NyYy9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG4gIE5PREVfRU5WLFxuICBEQl9IT1NUOiBob3N0LFxuICBEQl9OQU1FOiBkYixcbiAgREJfVVNFUjogdXNlcm5hbWUsXG4gIERCX1BBU1NXT1JEOiBwYXNzd29yZCxcbiAgREJfUE9SVCxcbiAgRlJPTlRfVVJMLFxuICBIVFRQUyxcbiAgU0VDVVJFX0NPT0tJRSxcbiAgQ09PS0lFX1NBTUVTSVRFLFxuICBDT09LSUVfRE9NQUlOLFxuICBDT09LSUVfUEFUSCA9ICcvJyxcbiAgRVJST1JfTE9HLFxuICBzZWNyZXRLZXksXG4gIGp3dFNlY3JldEtleSxcbiAgUE9SVFxufSA9IHByb2Nlc3MuZW52O1xuXG5jb25zdCBzZWN1cmUgPSBKU09OLnBhcnNlKEhUVFBTIHx8IFNFQ1VSRV9DT09LSUUgfHwgZmFsc2UpO1xuY29uc3QgbG9nID0gRVJST1JfTE9HID8gSlNPTi5wYXJzZShFUlJPUl9MT0cpIDogZmFsc2U7XG5jb25zdCBkZXYgPSBOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcbmNvbnN0IHBvcnQgPSBQT1JUIHx8IDgwODA7XG5cbmNvbnN0IGRiQ29uZmlnID0ge1xuICBob3N0LFxuICBkYixcbiAgdXNlcm5hbWUsXG4gIHBhc3N3b3JkLFxuICBwb3J0OiBEQl9QT1JUXG59O1xuY29uc3QgdGVzdCA9IE5PREVfRU5WID09PSAndGVzdCc7XG5jb25zdCBwcm9kID0gTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCAhTk9ERV9FTlY7XG5jb25zdCBjb3JzV2hpdGVsaXN0ID0gW0ZST05UX1VSTF07XG5jb25zdCBqd3QgPSB7XG4gIGV4cGlyZXNJbjogNzIwMDAwMCAvKiAyIGhvdXIgKi9cbn07XG5jb25zdCBqd3RTaWduID0ge1xuICBzZWNyZXQ6IGp3dFNlY3JldEtleSxcbiAgc2lnbjoge1xuICAgIGFsZ29yaXRobTogJ0hTNTEyJyxcbiAgICBpc3N1ZXI6ICdhcGkuZG9tYWluLnRsZCdcbiAgfSxcbiAgdmVyaWZ5OiB7IGlzc3VlcjogJ2FwaS5kb21haW4udGxkJywgc2VjcmV0OiBzZWNyZXRLZXkgfVxufTtcbmNvbnN0IGNvb2tpZSA9IHtcbiAgaHR0cE9ubHk6IHRydWUsXG4gIHNlY3VyZSxcbiAgc2FtZVNpdGU6IENPT0tJRV9TQU1FU0lURSA/IEpTT04ucGFyc2UoQ09PS0lFX1NBTUVTSVRFKSA6IGZhbHNlLFxuICBkb21haW46IENPT0tJRV9ET01BSU4sXG4gIHBhdGg6IENPT0tJRV9QQVRIXG59O1xuXG5leHBvcnQge1xuICBkYkNvbmZpZyxcbiAgZGV2LFxuICBsb2csXG4gIHRlc3QsXG4gIHByb2QsXG4gIGNvcnNXaGl0ZWxpc3QsXG4gIGp3dCxcbiAgc2VjcmV0S2V5LFxuICBqd3RTaWduLFxuICBjb29raWUsXG4gIHBvcnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/controllers/Controller1.js":
/*!****************************************!*\
  !*** ./src/controllers/Controller1.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller1; });\n/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ \"./src/controllers/Default.js\");\n // HTTP Controller\n\nclass Controller1 extends _Default__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  get name() {\n    return 'Model1'; // This should refer to src/helpers/models/{MODEL_NAME}\n  }\n\n  async Hello() {\n    const {\n      db\n      /* res, body */\n\n    } = this;\n\n    if (await db.getValue({\n      txt: 'hello'\n    })) {\n      return {\n        hello: 'world'\n      };\n    }\n\n    return {\n      hello: 'world',\n      exists: false\n    };\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQ29udHJvbGxlcjEuanM/YzlkZiJdLCJuYW1lcyI6WyJDb250cm9sbGVyMSIsIkNvbnRyb2xsZXIiLCJuYW1lIiwiSGVsbG8iLCJkYiIsImdldFZhbHVlIiwidHh0IiwiaGVsbG8iLCJleGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNlLE1BQU1BLFdBQU4sU0FBMEJDLGdEQUExQixDQUFxQztBQUNsRCxNQUFJQyxJQUFKLEdBQVc7QUFDVCxXQUFPLFFBQVAsQ0FEUyxDQUNRO0FBQ2xCOztBQUNELFFBQU1DLEtBQU4sR0FBYztBQUNaLFVBQU07QUFBRUM7QUFBRzs7QUFBTCxRQUF5QixJQUEvQjs7QUFFQSxRQUFJLE1BQU1BLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBQVosQ0FBVixFQUF5QztBQUN2QyxhQUFPO0FBQ0xDLGFBQUssRUFBRTtBQURGLE9BQVA7QUFHRDs7QUFDRCxXQUFPO0FBQ0xBLFdBQUssRUFBRSxPQURGO0FBRUxDLFlBQU0sRUFBRTtBQUZILEtBQVA7QUFJRDs7QUFoQmlEIiwiZmlsZSI6Ii4vc3JjL2NvbnRyb2xsZXJzL0NvbnRyb2xsZXIxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9EZWZhdWx0JztcblxuLy8gSFRUUCBDb250cm9sbGVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ01vZGVsMSc7IC8vIFRoaXMgc2hvdWxkIHJlZmVyIHRvIHNyYy9oZWxwZXJzL21vZGVscy97TU9ERUxfTkFNRX1cbiAgfVxuICBhc3luYyBIZWxsbygpIHtcbiAgICBjb25zdCB7IGRiIC8qIHJlcywgYm9keSAqLyB9ID0gdGhpcztcblxuICAgIGlmIChhd2FpdCBkYi5nZXRWYWx1ZSh7IHR4dDogJ2hlbGxvJyB9KSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVsbG86ICd3b3JsZCdcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBoZWxsbzogJ3dvcmxkJyxcbiAgICAgIGV4aXN0czogZmFsc2VcbiAgICB9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/controllers/Controller1.js\n");

/***/ }),

/***/ "./src/controllers/Default.js":
/*!************************************!*\
  !*** ./src/controllers/Default.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n/* harmony import */ var _db_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/controllers */ \"./src/db/controllers/index.js\");\n\nclass Controller {\n  get email() {\n    return this.cookies['user-email'];\n  }\n\n  get slug() {\n    return this.cookies['user-slug'];\n  }\n\n  get user() {\n    return {\n      id: this.slug,\n      email: this.email,\n      slug: this.slug\n    };\n  }\n\n  get role() {\n    const cookieUserRole = this.cookies['user-email'];\n\n    if (cookieUserRole) {\n      return cookieUserRole.split(',');\n    }\n\n    return this.user && this.user.role;\n  }\n\n  get token() {\n    return this.req.headers.authorization;\n  }\n\n  constructor(client, request) {\n    // Check if Controller for HTTP or not\n    this.db = this.name ? _db_controllers__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.name] : null;\n    this.controllers = _db_controllers__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n    if (client.headers && !client.readyState) {\n      this.req = client;\n      this.query = client.query;\n      this.body = client.body;\n      this.cookies = client.cookies;\n      this.res = request;\n    } else {\n      this.on = client.on.bind(client);\n      this.once = client.once.bind(client);\n      this.off = client.off.bind(client);\n      this.emit = client.emit.bind(client);\n      this.client = client;\n      this.req = request;\n      this.query = client.query;\n      this.body = client.body;\n      this.cookies = request.cookies;\n      this.clients = client.onlineClientsMap;\n    }\n  }\n\n  init() {// Initialization\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvRGVmYXVsdC5qcz85OGJjIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbWFpbCIsImNvb2tpZXMiLCJzbHVnIiwidXNlciIsImlkIiwicm9sZSIsImNvb2tpZVVzZXJSb2xlIiwic3BsaXQiLCJ0b2tlbiIsInJlcSIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJyZXF1ZXN0IiwiZGIiLCJuYW1lIiwiREJDb250cm9sbGVycyIsImNvbnRyb2xsZXJzIiwicmVhZHlTdGF0ZSIsInF1ZXJ5IiwiYm9keSIsInJlcyIsIm9uIiwiYmluZCIsIm9uY2UiLCJvZmYiLCJlbWl0IiwiY2xpZW50cyIsIm9ubGluZUNsaWVudHNNYXAiLCJpbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLE1BQU1BLFVBQU4sQ0FBaUI7QUFDOUIsTUFBSUMsS0FBSixHQUFZO0FBQ1YsV0FBTyxLQUFLQyxPQUFMLENBQWEsWUFBYixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSUMsSUFBSixHQUFXO0FBQ1QsV0FBTyxLQUFLRCxPQUFMLENBQWEsV0FBYixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSUUsSUFBSixHQUFXO0FBQ1QsV0FBTztBQUNMQyxRQUFFLEVBQUUsS0FBS0YsSUFESjtBQUVMRixXQUFLLEVBQUUsS0FBS0EsS0FGUDtBQUdMRSxVQUFJLEVBQUUsS0FBS0E7QUFITixLQUFQO0FBS0Q7O0FBQ0QsTUFBSUcsSUFBSixHQUFXO0FBQ1QsVUFBTUMsY0FBYyxHQUFHLEtBQUtMLE9BQUwsQ0FBYSxZQUFiLENBQXZCOztBQUNBLFFBQUlLLGNBQUosRUFBb0I7QUFDbEIsYUFBT0EsY0FBYyxDQUFDQyxLQUFmLENBQXFCLEdBQXJCLENBQVA7QUFDRDs7QUFDRCxXQUFPLEtBQUtKLElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVVFLElBQTlCO0FBQ0Q7O0FBQ0QsTUFBSUcsS0FBSixHQUFZO0FBQ1YsV0FBTyxLQUFLQyxHQUFMLENBQVNDLE9BQVQsQ0FBaUJDLGFBQXhCO0FBQ0Q7O0FBQ0RDLGFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULEVBQWtCO0FBQzNCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLEtBQUtDLElBQUwsR0FBWUMsdURBQWEsQ0FBQyxLQUFLRCxJQUFOLENBQXpCLEdBQXVDLElBQWpEO0FBQ0EsU0FBS0UsV0FBTCxHQUFtQkQsdURBQW5COztBQUNBLFFBQUlKLE1BQU0sQ0FBQ0gsT0FBUCxJQUFrQixDQUFDRyxNQUFNLENBQUNNLFVBQTlCLEVBQTBDO0FBQ3hDLFdBQUtWLEdBQUwsR0FBV0ksTUFBWDtBQUNBLFdBQUtPLEtBQUwsR0FBYVAsTUFBTSxDQUFDTyxLQUFwQjtBQUNBLFdBQUtDLElBQUwsR0FBWVIsTUFBTSxDQUFDUSxJQUFuQjtBQUNBLFdBQUtwQixPQUFMLEdBQWVZLE1BQU0sQ0FBQ1osT0FBdEI7QUFDQSxXQUFLcUIsR0FBTCxHQUFXUixPQUFYO0FBQ0QsS0FORCxNQU1PO0FBQ0wsV0FBS1MsRUFBTCxHQUFVVixNQUFNLENBQUNVLEVBQVAsQ0FBVUMsSUFBVixDQUFlWCxNQUFmLENBQVY7QUFDQSxXQUFLWSxJQUFMLEdBQVlaLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZRCxJQUFaLENBQWlCWCxNQUFqQixDQUFaO0FBQ0EsV0FBS2EsR0FBTCxHQUFXYixNQUFNLENBQUNhLEdBQVAsQ0FBV0YsSUFBWCxDQUFnQlgsTUFBaEIsQ0FBWDtBQUNBLFdBQUtjLElBQUwsR0FBWWQsTUFBTSxDQUFDYyxJQUFQLENBQVlILElBQVosQ0FBaUJYLE1BQWpCLENBQVo7QUFDQSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLSixHQUFMLEdBQVdLLE9BQVg7QUFDQSxXQUFLTSxLQUFMLEdBQWFQLE1BQU0sQ0FBQ08sS0FBcEI7QUFDQSxXQUFLQyxJQUFMLEdBQVlSLE1BQU0sQ0FBQ1EsSUFBbkI7QUFDQSxXQUFLcEIsT0FBTCxHQUFlYSxPQUFPLENBQUNiLE9BQXZCO0FBQ0EsV0FBSzJCLE9BQUwsR0FBZWYsTUFBTSxDQUFDZ0IsZ0JBQXRCO0FBQ0Q7QUFDRjs7QUFDREMsTUFBSSxHQUFHLENBQ0w7QUFDRDs7QUFqRDZCIiwiZmlsZSI6Ii4vc3JjL2NvbnRyb2xsZXJzL0RlZmF1bHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgREJDb250cm9sbGVycyBmcm9tICcuLi9kYi9jb250cm9sbGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICBnZXQgZW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29va2llc1sndXNlci1lbWFpbCddO1xuICB9XG4gIGdldCBzbHVnKCkge1xuICAgIHJldHVybiB0aGlzLmNvb2tpZXNbJ3VzZXItc2x1ZyddO1xuICB9XG4gIGdldCB1c2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5zbHVnLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICBzbHVnOiB0aGlzLnNsdWdcbiAgICB9O1xuICB9XG4gIGdldCByb2xlKCkge1xuICAgIGNvbnN0IGNvb2tpZVVzZXJSb2xlID0gdGhpcy5jb29raWVzWyd1c2VyLWVtYWlsJ107XG4gICAgaWYgKGNvb2tpZVVzZXJSb2xlKSB7XG4gICAgICByZXR1cm4gY29va2llVXNlclJvbGUuc3BsaXQoJywnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlciAmJiB0aGlzLnVzZXIucm9sZTtcbiAgfVxuICBnZXQgdG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgfVxuICBjb25zdHJ1Y3RvcihjbGllbnQsIHJlcXVlc3QpIHtcbiAgICAvLyBDaGVjayBpZiBDb250cm9sbGVyIGZvciBIVFRQIG9yIG5vdFxuICAgIHRoaXMuZGIgPSB0aGlzLm5hbWUgPyBEQkNvbnRyb2xsZXJzW3RoaXMubmFtZV0gOiBudWxsO1xuICAgIHRoaXMuY29udHJvbGxlcnMgPSBEQkNvbnRyb2xsZXJzO1xuICAgIGlmIChjbGllbnQuaGVhZGVycyAmJiAhY2xpZW50LnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVxID0gY2xpZW50O1xuICAgICAgdGhpcy5xdWVyeSA9IGNsaWVudC5xdWVyeTtcbiAgICAgIHRoaXMuYm9keSA9IGNsaWVudC5ib2R5O1xuICAgICAgdGhpcy5jb29raWVzID0gY2xpZW50LmNvb2tpZXM7XG4gICAgICB0aGlzLnJlcyA9IHJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub24gPSBjbGllbnQub24uYmluZChjbGllbnQpO1xuICAgICAgdGhpcy5vbmNlID0gY2xpZW50Lm9uY2UuYmluZChjbGllbnQpO1xuICAgICAgdGhpcy5vZmYgPSBjbGllbnQub2ZmLmJpbmQoY2xpZW50KTtcbiAgICAgIHRoaXMuZW1pdCA9IGNsaWVudC5lbWl0LmJpbmQoY2xpZW50KTtcbiAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgdGhpcy5yZXEgPSByZXF1ZXN0O1xuICAgICAgdGhpcy5xdWVyeSA9IGNsaWVudC5xdWVyeTtcbiAgICAgIHRoaXMuYm9keSA9IGNsaWVudC5ib2R5O1xuICAgICAgdGhpcy5jb29raWVzID0gcmVxdWVzdC5jb29raWVzO1xuICAgICAgdGhpcy5jbGllbnRzID0gY2xpZW50Lm9ubGluZUNsaWVudHNNYXA7XG4gICAgfVxuICB9XG4gIGluaXQoKSB7XG4gICAgLy8gSW5pdGlhbGl6YXRpb25cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controllers/Default.js\n");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! exports provided: Controller1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller1 */ \"./src/controllers/Controller1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller1\", function() { return _Controller1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaW5kZXguanM/NzA1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXIxIGZyb20gJy4vQ29udHJvbGxlcjEnO1xuXG5leHBvcnQgeyBDb250cm9sbGVyMSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controllers/index.js\n");

/***/ }),

/***/ "./src/db/controllers/index.js":
/*!*************************************!*\
  !*** ./src/db/controllers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ \"./src/db/models/index.js\");\n\n\nconst Controllers = {};\nObject.keys(_models__WEBPACK_IMPORTED_MODULE_1__).forEach(name => {\n  Controllers[name] = new _helpers__WEBPACK_IMPORTED_MODULE_0__[\"dbHelper\"](_models__WEBPACK_IMPORTED_MODULE_1__[name]);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controllers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGIvY29udHJvbGxlcnMvaW5kZXguanM/NzE5MiJdLCJuYW1lcyI6WyJDb250cm9sbGVycyIsIk9iamVjdCIsImtleXMiLCJNb2RlbHMiLCJmb3JFYWNoIiwibmFtZSIsImRiSGVscGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBRUFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxvQ0FBWixFQUFvQkMsT0FBcEIsQ0FBNkJDLElBQUQsSUFBVTtBQUNwQ0wsYUFBVyxDQUFDSyxJQUFELENBQVgsR0FBb0IsSUFBSUMsaURBQUosQ0FBYUgsb0NBQU0sQ0FBQ0UsSUFBRCxDQUFuQixDQUFwQjtBQUNELENBRkQ7QUFJZUwsMEVBQWYiLCJmaWxlIjoiLi9zcmMvZGIvY29udHJvbGxlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYkhlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0ICogYXMgTW9kZWxzIGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IENvbnRyb2xsZXJzID0ge307XG5cbk9iamVjdC5rZXlzKE1vZGVscykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICBDb250cm9sbGVyc1tuYW1lXSA9IG5ldyBkYkhlbHBlcihNb2RlbHNbbmFtZV0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/db/controllers/index.js\n");

/***/ }),

/***/ "./src/db/models/Model1.js":
/*!*********************************!*\
  !*** ./src/db/models/Model1.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return {\n    id: 'number',\n    foo: 'bar'\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGIvbW9kZWxzL01vZGVsMS5qcz8zMjJiIl0sIm5hbWVzIjpbImlkIiwiZm9vIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLHFFQUFNO0FBQ25CLFNBQU87QUFDTEEsTUFBRSxFQUFFLFFBREM7QUFFTEMsT0FBRyxFQUFFO0FBRkEsR0FBUDtBQUlELENBTEQiLCJmaWxlIjoiLi9zcmMvZGIvbW9kZWxzL01vZGVsMS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ251bWJlcicsXG4gICAgZm9vOiAnYmFyJ1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/db/models/Model1.js\n");

/***/ }),

/***/ "./src/db/models/index.js":
/*!********************************!*\
  !*** ./src/db/models/index.js ***!
  \********************************/
/*! exports provided: Model1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model1 */ \"./src/db/models/Model1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Model1\", function() { return _Model1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGIvbW9kZWxzL2luZGV4LmpzPzIyNzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9kYi9tb2RlbHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwxIGZyb20gJy4vTW9kZWwxJztcblxuZXhwb3J0IHsgTW9kZWwxIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/db/models/index.js\n");

/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv-safe */ \"dotenv-safe\");\n/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_safe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n\n\n\nif (true) {\n  // Zeit now can cause fail this method\n  // So we just wrapped it within try/catch\n  // To avoid error and avoid crash of server\n  // Now.sh local server\n  _helpers__WEBPACK_IMPORTED_MODULE_1__[\"consolemd\"].log('!#green([*Server*]: started in *DEVELOPMENT* mode)');\n\n  try {\n    dotenv_safe__WEBPACK_IMPORTED_MODULE_0___default.a.config({\n      allowEmptyValues: true\n    });\n  } catch (e) {\n    _helpers__WEBPACK_IMPORTED_MODULE_1__[\"consolemd\"].log('!#red([*Server*]: error while setting ENV variables, ' + 'i think you using Zeit NOW hosting, don\\'t worry, your backend still works)');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW52LmpzPzhjODkiXSwibmFtZXMiOlsicHJvY2VzcyIsImNvbnNvbGVtZCIsImxvZyIsImRvdGVudlNhZmUiLCJjb25maWciLCJhbGxvd0VtcHR5VmFsdWVzIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQUlBLElBQUosRUFBNEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsb0RBQVMsQ0FBQ0MsR0FBVixDQUFjLG9EQUFkOztBQUNBLE1BQUk7QUFDRkMsc0RBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUFFQyxzQkFBZ0IsRUFBRTtBQUFwQixLQUFsQjtBQUNELEdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkwsc0RBQVMsQ0FBQ0MsR0FBVixDQUNFLDBEQUNFLDZFQUZKO0FBSUQ7QUFDRiIsImZpbGUiOiIuL3NyYy9lbnYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52U2FmZSBmcm9tICdkb3RlbnYtc2FmZSc7XG5pbXBvcnQgeyBjb25zb2xlbWQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gWmVpdCBub3cgY2FuIGNhdXNlIGZhaWwgdGhpcyBtZXRob2RcbiAgLy8gU28gd2UganVzdCB3cmFwcGVkIGl0IHdpdGhpbiB0cnkvY2F0Y2hcbiAgLy8gVG8gYXZvaWQgZXJyb3IgYW5kIGF2b2lkIGNyYXNoIG9mIHNlcnZlclxuICAvLyBOb3cuc2ggbG9jYWwgc2VydmVyXG4gIGNvbnNvbGVtZC5sb2coJyEjZ3JlZW4oWypTZXJ2ZXIqXTogc3RhcnRlZCBpbiAqREVWRUxPUE1FTlQqIG1vZGUpJyk7XG4gIHRyeSB7XG4gICAgZG90ZW52U2FmZS5jb25maWcoeyBhbGxvd0VtcHR5VmFsdWVzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZW1kLmxvZyhcbiAgICAgICchI3JlZChbKlNlcnZlcipdOiBlcnJvciB3aGlsZSBzZXR0aW5nIEVOViB2YXJpYWJsZXMsICcgK1xuICAgICAgICAnaSB0aGluayB5b3UgdXNpbmcgWmVpdCBOT1cgaG9zdGluZywgZG9uXFwndCB3b3JyeSwgeW91ciBiYWNrZW5kIHN0aWxsIHdvcmtzKSdcbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/env.js\n");

/***/ }),

/***/ "./src/errors/handler/all-handler.js":
/*!*******************************************!*\
  !*** ./src/errors/handler/all-handler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translations */ \"./src/errors/translations/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (error, request, res) => {\n  if (error.validation || error.code || error.message.includes('is required') || error.statusCode) {\n    res.status(error.statusCode || 500);\n    const {\n      message,\n      code\n    } = error;\n    const {\n      lang = 'en'\n    } = request.headers;\n    const map = _translations__WEBPACK_IMPORTED_MODULE_1__[lang];\n    let errors;\n\n    if (message) {\n      errors = message.split(', ');\n      map && Object.keys(map).forEach(key => {\n        errors = errors.map(m => m.replace(new RegExp(key, 'g'), map[key]));\n      });\n    }\n\n    return {\n      status: 'error',\n      message: map.httpErrors[code] || map.customErrors[code] || map.httpErrors.BadRequest,\n      errors\n    };\n  }\n\n  const stack = error.stack ? error.stack.split('\\n').map(e => e.trim()).filter((e, i, s) => s.indexOf(e) === i) : error.stack_trace;\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"consolemd\"].log('#red([*Server*]: error was happened', '\\n');\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"consolemd\"].log('#red(' + stack + ')');\n  return {\n    status: 'error',\n    message: 'Server error, please contact to server ',\n    stack\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL2hhbmRsZXIvYWxsLWhhbmRsZXIuanM/Y2M3YSJdLCJuYW1lcyI6WyJlcnJvciIsInJlcXVlc3QiLCJyZXMiLCJ2YWxpZGF0aW9uIiwiY29kZSIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJsYW5nIiwiaGVhZGVycyIsIm1hcCIsInRyYW5zbGF0aW9ucyIsImVycm9ycyIsInNwbGl0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJtIiwicmVwbGFjZSIsIlJlZ0V4cCIsImh0dHBFcnJvcnMiLCJjdXN0b21FcnJvcnMiLCJCYWRSZXF1ZXN0Iiwic3RhY2siLCJlIiwidHJpbSIsImZpbHRlciIsImkiLCJzIiwiaW5kZXhPZiIsInN0YWNrX3RyYWNlIiwiY29uc29sZW1kIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsc0VBQU9BLEtBQVAsRUFBY0MsT0FBZCxFQUF1QkMsR0FBdkIsS0FBK0I7QUFDNUMsTUFDRUYsS0FBSyxDQUFDRyxVQUFOLElBQ0FILEtBQUssQ0FBQ0ksSUFETixJQUVBSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsUUFBZCxDQUF1QixhQUF2QixDQUZBLElBR0FOLEtBQUssQ0FBQ08sVUFKUixFQUtFO0FBQ0FMLE9BQUcsQ0FBQ00sTUFBSixDQUFXUixLQUFLLENBQUNPLFVBQU4sSUFBb0IsR0FBL0I7QUFFQSxVQUFNO0FBQUVGLGFBQUY7QUFBV0Q7QUFBWCxRQUFvQkosS0FBMUI7QUFDQSxVQUFNO0FBQUVTLFVBQUksR0FBRztBQUFULFFBQWtCUixPQUFPLENBQUNTLE9BQWhDO0FBQ0EsVUFBTUMsR0FBRyxHQUFHQywwQ0FBWSxDQUFDSCxJQUFELENBQXhCO0FBQ0EsUUFBSUksTUFBSjs7QUFFQSxRQUFJUixPQUFKLEVBQWE7QUFDWFEsWUFBTSxHQUFHUixPQUFPLENBQUNTLEtBQVIsQ0FBYyxJQUFkLENBQVQ7QUFDQUgsU0FBRyxJQUNESSxNQUFNLENBQUNDLElBQVAsQ0FBWUwsR0FBWixFQUFpQk0sT0FBakIsQ0FBMEJDLEdBQUQsSUFBUztBQUNoQ0wsY0FBTSxHQUFHQSxNQUFNLENBQUNGLEdBQVAsQ0FBWVEsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFJQyxNQUFKLENBQVdILEdBQVgsRUFBZ0IsR0FBaEIsQ0FBVixFQUFnQ1AsR0FBRyxDQUFDTyxHQUFELENBQW5DLENBQWxCLENBQVQ7QUFDRCxPQUZELENBREY7QUFJRDs7QUFFRCxXQUFPO0FBQ0xWLFlBQU0sRUFBRSxPQURIO0FBRUxILGFBQU8sRUFDTE0sR0FBRyxDQUFDVyxVQUFKLENBQWVsQixJQUFmLEtBQ0FPLEdBQUcsQ0FBQ1ksWUFBSixDQUFpQm5CLElBQWpCLENBREEsSUFFQU8sR0FBRyxDQUFDVyxVQUFKLENBQWVFLFVBTFo7QUFNTFg7QUFOSyxLQUFQO0FBUUQ7O0FBRUQsUUFBTVksS0FBSyxHQUFHekIsS0FBSyxDQUFDeUIsS0FBTixHQUNWekIsS0FBSyxDQUFDeUIsS0FBTixDQUNDWCxLQURELENBQ08sSUFEUCxFQUVDSCxHQUZELENBRU1lLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxJQUFGLEVBRlosRUFHQ0MsTUFIRCxDQUdRLENBQUNGLENBQUQsRUFBSUcsQ0FBSixFQUFPQyxDQUFQLEtBQWFBLENBQUMsQ0FBQ0MsT0FBRixDQUFVTCxDQUFWLE1BQWlCRyxDQUh0QyxDQURVLEdBS1Y3QixLQUFLLENBQUNnQyxXQUxWO0FBT0FDLG9EQUFTLENBQUNDLEdBQVYsQ0FBYyxxQ0FBZCxFQUFxRCxJQUFyRDtBQUNBRCxvREFBUyxDQUFDQyxHQUFWLENBQWMsVUFBVVQsS0FBVixHQUFrQixHQUFoQztBQUVBLFNBQU87QUFDTGpCLFVBQU0sRUFBRSxPQURIO0FBRUxILFdBQU8sRUFBRSx5Q0FGSjtBQUdMb0I7QUFISyxHQUFQO0FBS0QsQ0EvQ0QiLCJmaWxlIjoiLi9zcmMvZXJyb3JzL2hhbmRsZXIvYWxsLWhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zb2xlbWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCAqIGFzIHRyYW5zbGF0aW9ucyBmcm9tICcuLi90cmFuc2xhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZXJyb3IsIHJlcXVlc3QsIHJlcykgPT4ge1xuICBpZiAoXG4gICAgZXJyb3IudmFsaWRhdGlvbiB8fFxuICAgIGVycm9yLmNvZGUgfHxcbiAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdpcyByZXF1aXJlZCcpIHx8XG4gICAgZXJyb3Iuc3RhdHVzQ29kZVxuICApIHtcbiAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNTAwKTtcblxuICAgIGNvbnN0IHsgbWVzc2FnZSwgY29kZSB9ID0gZXJyb3I7XG4gICAgY29uc3QgeyBsYW5nID0gJ2VuJyB9ID0gcmVxdWVzdC5oZWFkZXJzO1xuICAgIGNvbnN0IG1hcCA9IHRyYW5zbGF0aW9uc1tsYW5nXTtcbiAgICBsZXQgZXJyb3JzO1xuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGVycm9ycyA9IG1lc3NhZ2Uuc3BsaXQoJywgJyk7XG4gICAgICBtYXAgJiZcbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMubWFwKChtKSA9PiBtLnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIG1hcFtrZXldKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICBtYXAuaHR0cEVycm9yc1tjb2RlXSB8fFxuICAgICAgICBtYXAuY3VzdG9tRXJyb3JzW2NvZGVdIHx8XG4gICAgICAgIG1hcC5odHRwRXJyb3JzLkJhZFJlcXVlc3QsXG4gICAgICBlcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc3RhY2sgPSBlcnJvci5zdGFja1xuICAgID8gZXJyb3Iuc3RhY2tcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5tYXAoKGUpID0+IGUudHJpbSgpKVxuICAgICAgLmZpbHRlcigoZSwgaSwgcykgPT4gcy5pbmRleE9mKGUpID09PSBpKVxuICAgIDogZXJyb3Iuc3RhY2tfdHJhY2U7XG5cbiAgY29uc29sZW1kLmxvZygnI3JlZChbKlNlcnZlcipdOiBlcnJvciB3YXMgaGFwcGVuZWQnLCAnXFxuJyk7XG4gIGNvbnNvbGVtZC5sb2coJyNyZWQoJyArIHN0YWNrICsgJyknKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICBtZXNzYWdlOiAnU2VydmVyIGVycm9yLCBwbGVhc2UgY29udGFjdCB0byBzZXJ2ZXIgJyxcbiAgICBzdGFja1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/handler/all-handler.js\n");

/***/ }),

/***/ "./src/errors/handler/index.js":
/*!*************************************!*\
  !*** ./src/errors/handler/index.js ***!
  \*************************************/
/*! exports provided: allHandler, notFoundHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _all_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-handler */ \"./src/errors/handler/all-handler.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"allHandler\", function() { return _all_handler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found */ \"./src/errors/handler/not-found.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"notFoundHandler\", function() { return _not_found__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL2hhbmRsZXIvaW5kZXguanM/MmY2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvZXJyb3JzL2hhbmRsZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWxsSGFuZGxlciBmcm9tICcuL2FsbC1oYW5kbGVyJztcbmltcG9ydCBub3RGb3VuZEhhbmRsZXIgZnJvbSAnLi9ub3QtZm91bmQnO1xuXG5leHBvcnQgeyBhbGxIYW5kbGVyLCBub3RGb3VuZEhhbmRsZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/handler/index.js\n");

/***/ }),

/***/ "./src/errors/handler/not-found.js":
/*!*****************************************!*\
  !*** ./src/errors/handler/not-found.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations */ \"./src/errors/translations/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (error, request) => {\n  const {\n    lang = 'en'\n  } = request.headers;\n  const map = _translations__WEBPACK_IMPORTED_MODULE_0__[lang];\n  const {\n    params\n  } = error;\n  return {\n    status: 'error',\n    code: 404,\n    message: map.httpErrors.NotFound,\n    currentRoute: params['*']\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL2hhbmRsZXIvbm90LWZvdW5kLmpzPzE4ZDYiXSwibmFtZXMiOlsiZXJyb3IiLCJyZXF1ZXN0IiwibGFuZyIsImhlYWRlcnMiLCJtYXAiLCJ0cmFuc2xhdGlvbnMiLCJwYXJhbXMiLCJzdGF0dXMiLCJjb2RlIiwibWVzc2FnZSIsImh0dHBFcnJvcnMiLCJOb3RGb3VuZCIsImN1cnJlbnRSb3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9BLEtBQVAsRUFBY0MsT0FBZCxLQUEwQjtBQUN2QyxRQUFNO0FBQUVDLFFBQUksR0FBRztBQUFULE1BQWtCRCxPQUFPLENBQUNFLE9BQWhDO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQywwQ0FBWSxDQUFDSCxJQUFELENBQXhCO0FBRUEsUUFBTTtBQUFFSTtBQUFGLE1BQWFOLEtBQW5CO0FBRUEsU0FBTztBQUNMTyxVQUFNLEVBQUUsT0FESDtBQUVMQyxRQUFJLEVBQUUsR0FGRDtBQUdMQyxXQUFPLEVBQUVMLEdBQUcsQ0FBQ00sVUFBSixDQUFlQyxRQUhuQjtBQUlMQyxnQkFBWSxFQUFFTixNQUFNLENBQUMsR0FBRDtBQUpmLEdBQVA7QUFNRCxDQVpEIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy9oYW5kbGVyL25vdC1mb3VuZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRyYW5zbGF0aW9ucyBmcm9tICcuLi90cmFuc2xhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZXJyb3IsIHJlcXVlc3QpID0+IHtcbiAgY29uc3QgeyBsYW5nID0gJ2VuJyB9ID0gcmVxdWVzdC5oZWFkZXJzO1xuICBjb25zdCBtYXAgPSB0cmFuc2xhdGlvbnNbbGFuZ107XG5cbiAgY29uc3QgeyBwYXJhbXMgfSA9IGVycm9yO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiAnZXJyb3InLFxuICAgIGNvZGU6IDQwNCxcbiAgICBtZXNzYWdlOiBtYXAuaHR0cEVycm9ycy5Ob3RGb3VuZCxcbiAgICBjdXJyZW50Um91dGU6IHBhcmFtc1snKiddXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/errors/handler/not-found.js\n");

/***/ }),

/***/ "./src/errors/index.js":
/*!*****************************!*\
  !*** ./src/errors/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ \"./src/errors/handler/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => {\n  fastify.setNotFoundHandler(_handler__WEBPACK_IMPORTED_MODULE_0__[\"notFoundHandler\"]);\n  fastify.setErrorHandler(_handler__WEBPACK_IMPORTED_MODULE_0__[\"allHandler\"]);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL2luZGV4LmpzP2NiODUiXSwibmFtZXMiOlsiZmFzdGlmeSIsInNldE5vdEZvdW5kSGFuZGxlciIsIm5vdEZvdW5kSGFuZGxlciIsInNldEVycm9ySGFuZGxlciIsImFsbEhhbmRsZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHFFQUFPQSxPQUFQLElBQW1CO0FBQ2hDQSxTQUFPLENBQUNDLGtCQUFSLENBQTJCQyx3REFBM0I7QUFDQUYsU0FBTyxDQUFDRyxlQUFSLENBQXdCQyxtREFBeEI7QUFDRCxDQUhEIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbEhhbmRsZXIsIG5vdEZvdW5kSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmYXN0aWZ5KSA9PiB7XG4gIGZhc3RpZnkuc2V0Tm90Rm91bmRIYW5kbGVyKG5vdEZvdW5kSGFuZGxlcik7XG4gIGZhc3RpZnkuc2V0RXJyb3JIYW5kbGVyKGFsbEhhbmRsZXIpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/index.js\n");

/***/ }),

/***/ "./src/errors/translations/constants.js":
/*!**********************************************!*\
  !*** ./src/errors/translations/constants.js ***!
  \**********************************************/
/*! exports provided: ONLY_STRING_LETTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ONLY_STRING_LETTERS\", function() { return ONLY_STRING_LETTERS; });\nconst ONLY_STRING_LETTERS = '([0-9A-Za-z]+)';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9jb25zdGFudHMuanM/YTZjMiJdLCJuYW1lcyI6WyJPTkxZX1NUUklOR19MRVRURVJTIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsbUJBQW1CLEdBQUcsZ0JBQTVCIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE9OTFlfU1RSSU5HX0xFVFRFUlMgPSAnKFswLTlBLVphLXpdKyknO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/errors/translations/constants.js\n");

/***/ }),

/***/ "./src/errors/translations/en/custom-errors.js":
/*!*****************************************************!*\
  !*** ./src/errors/translations/en/custom-errors.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  TokenExpiredOrInvalid: 'The token which you logged was expired and/or broken, please relogin to gain access again',\n  UnauthorizedAccess: 'This path is protected and only for Authorized users only, please login first to get access',\n  UnauthorizedDeviceAccess: 'Looks like you changed network or device, so, please login again due of security',\n  AdminOnlyResource: 'This path is accessible only for admins and devs',\n  AccessDeniedByCORS: 'This request is denied by CORS security',\n  UserNotFound: 'User doesn\\'t found in our database',\n  InvalidPassword: 'Invalid password'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9lbi9jdXN0b20tZXJyb3JzLmpzPzBhZGIiXSwibmFtZXMiOlsiVG9rZW5FeHBpcmVkT3JJbnZhbGlkIiwiVW5hdXRob3JpemVkQWNjZXNzIiwiVW5hdXRob3JpemVkRGV2aWNlQWNjZXNzIiwiQWRtaW5Pbmx5UmVzb3VyY2UiLCJBY2Nlc3NEZW5pZWRCeUNPUlMiLCJVc2VyTm90Rm91bmQiLCJJbnZhbGlkUGFzc3dvcmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsdUJBQXFCLEVBQ25CLDJGQUZXO0FBR2JDLG9CQUFrQixFQUNoQiw2RkFKVztBQUtiQywwQkFBd0IsRUFDdEIsa0ZBTlc7QUFPYkMsbUJBQWlCLEVBQUUsa0RBUE47QUFRYkMsb0JBQWtCLEVBQUUseUNBUlA7QUFTYkMsY0FBWSxFQUFFLHFDQVREO0FBVWJDLGlCQUFlLEVBQUU7QUFWSixDQUFmIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvZW4vY3VzdG9tLWVycm9ycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgVG9rZW5FeHBpcmVkT3JJbnZhbGlkOlxuICAgICdUaGUgdG9rZW4gd2hpY2ggeW91IGxvZ2dlZCB3YXMgZXhwaXJlZCBhbmQvb3IgYnJva2VuLCBwbGVhc2UgcmVsb2dpbiB0byBnYWluIGFjY2VzcyBhZ2FpbicsXG4gIFVuYXV0aG9yaXplZEFjY2VzczpcbiAgICAnVGhpcyBwYXRoIGlzIHByb3RlY3RlZCBhbmQgb25seSBmb3IgQXV0aG9yaXplZCB1c2VycyBvbmx5LCBwbGVhc2UgbG9naW4gZmlyc3QgdG8gZ2V0IGFjY2VzcycsXG4gIFVuYXV0aG9yaXplZERldmljZUFjY2VzczpcbiAgICAnTG9va3MgbGlrZSB5b3UgY2hhbmdlZCBuZXR3b3JrIG9yIGRldmljZSwgc28sIHBsZWFzZSBsb2dpbiBhZ2FpbiBkdWUgb2Ygc2VjdXJpdHknLFxuICBBZG1pbk9ubHlSZXNvdXJjZTogJ1RoaXMgcGF0aCBpcyBhY2Nlc3NpYmxlIG9ubHkgZm9yIGFkbWlucyBhbmQgZGV2cycsXG4gIEFjY2Vzc0RlbmllZEJ5Q09SUzogJ1RoaXMgcmVxdWVzdCBpcyBkZW5pZWQgYnkgQ09SUyBzZWN1cml0eScsXG4gIFVzZXJOb3RGb3VuZDogJ1VzZXIgZG9lc25cXCd0IGZvdW5kIGluIG91ciBkYXRhYmFzZScsXG4gIEludmFsaWRQYXNzd29yZDogJ0ludmFsaWQgcGFzc3dvcmQnXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/errors/translations/en/custom-errors.js\n");

/***/ }),

/***/ "./src/errors/translations/en/http-errors.js":
/*!***************************************************!*\
  !*** ./src/errors/translations/en/http-errors.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  NotFound: 'This path doesn\\'t exist at server, please check request path',\n  BadRequest: 'Your request seems to be invalid or incorrect, please check your request'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9lbi9odHRwLWVycm9ycy5qcz9hNmNmIl0sIm5hbWVzIjpbIk5vdEZvdW5kIiwiQmFkUmVxdWVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxVQUFRLEVBQUUsK0RBREc7QUFFYkMsWUFBVSxFQUNSO0FBSFcsQ0FBZiIsImZpbGUiOiIuL3NyYy9lcnJvcnMvdHJhbnNsYXRpb25zL2VuL2h0dHAtZXJyb3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBOb3RGb3VuZDogJ1RoaXMgcGF0aCBkb2VzblxcJ3QgZXhpc3QgYXQgc2VydmVyLCBwbGVhc2UgY2hlY2sgcmVxdWVzdCBwYXRoJyxcbiAgQmFkUmVxdWVzdDpcbiAgICAnWW91ciByZXF1ZXN0IHNlZW1zIHRvIGJlIGludmFsaWQgb3IgaW5jb3JyZWN0LCBwbGVhc2UgY2hlY2sgeW91ciByZXF1ZXN0J1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/translations/en/http-errors.js\n");

/***/ }),

/***/ "./src/errors/translations/en/index.js":
/*!*********************************************!*\
  !*** ./src/errors/translations/en/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reg_ex_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-ex-errors */ \"./src/errors/translations/en/reg-ex-errors.js\");\n/* harmony import */ var _http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-errors */ \"./src/errors/translations/en/http-errors.js\");\n/* harmony import */ var _custom_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-errors */ \"./src/errors/translations/en/custom-errors.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ ..._reg_ex_errors__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  httpErrors: _http_errors__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  customErrors: _custom_errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9lbi9pbmRleC5qcz8zODBkIl0sIm5hbWVzIjpbInJlZ0V4RXJyb3JzIiwiaHR0cEVycm9ycyIsImN1c3RvbUVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxpRUFDYixHQUFHQSxzREFEVTtBQUViQyxrRUFGYTtBQUdiQyxzRUFBWUE7QUFIQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvZW4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVnRXhFcnJvcnMgZnJvbSAnLi9yZWctZXgtZXJyb3JzJztcbmltcG9ydCBodHRwRXJyb3JzIGZyb20gJy4vaHR0cC1lcnJvcnMnO1xuaW1wb3J0IGN1c3RvbUVycm9ycyBmcm9tICcuL2N1c3RvbS1lcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLnJlZ0V4RXJyb3JzLFxuICBodHRwRXJyb3JzLFxuICBjdXN0b21FcnJvcnNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/errors/translations/en/index.js\n");

/***/ }),

/***/ "./src/errors/translations/en/reg-ex-errors.js":
/*!*****************************************************!*\
  !*** ./src/errors/translations/en/reg-ex-errors.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/errors/translations/constants.js\");\n // import { typeNames, requestTypeNames } from './types';\n// import misc from './misc';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'body/(.*) ': 'In Request body field $1',\n  [`(.*) should have required property '${_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"ONLY_STRING_LETTERS\"]}'`]: (_, $0, $1) => `Request ${$0} should have required property \\`${$1}\\``,\n  'body should NOT have additional properties': 'Request body should NOT have additional properties',\n  'body.(.*) should be (.*)': (_, $1, $2) => `Request body field type \\`${$1}\\` should be ${$2}`,\n  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) => `Request body field \\`${$1}\\` should NOT be ${$2} than ${$3} characters`,\n  '(.*) is required!': 'In Response body should be field `$1`!'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9lbi9yZWctZXgtZXJyb3JzLmpzPzYxYWIiXSwibmFtZXMiOlsiT05MWV9TVFJJTkdfTEVUVEVSUyIsIl8iLCIkMCIsIiQxIiwiJDIiLCIkMyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtDQUNBO0FBQ0E7O0FBRWU7QUFDYixnQkFBYywwQkFERDtBQUViLEdBQUUsdUNBQXNDQSxpRUFBb0IsR0FBNUQsR0FBaUUsQ0FDL0RDLENBRCtELEVBRS9EQyxFQUYrRCxFQUcvREMsRUFIK0QsS0FJM0QsV0FBVUQsRUFBRyxvQ0FBbUNDLEVBQUcsSUFONUM7QUFPYixnREFDRSxvREFSVztBQVNiLDhCQUE0QixDQUFDRixDQUFELEVBQUlFLEVBQUosRUFBUUMsRUFBUixLQUN6Qiw2QkFBNEJELEVBQUcsZ0JBQWVDLEVBQUcsRUFWdkM7QUFXYix1REFBcUQsQ0FBQ0gsQ0FBRCxFQUFJRSxFQUFKLEVBQVFDLEVBQVIsRUFBWUMsRUFBWixLQUNsRCx3QkFBdUJGLEVBQUcsb0JBQW1CQyxFQUFHLFNBQVFDLEVBQUcsYUFaakQ7QUFhYix1QkFBcUI7QUFiUixDQUFmIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvZW4vcmVnLWV4LWVycm9ycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9OTFlfU1RSSU5HX0xFVFRFUlMgfSBmcm9tICcuLi9jb25zdGFudHMuanMnO1xuLy8gaW1wb3J0IHsgdHlwZU5hbWVzLCByZXF1ZXN0VHlwZU5hbWVzIH0gZnJvbSAnLi90eXBlcyc7XG4vLyBpbXBvcnQgbWlzYyBmcm9tICcuL21pc2MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICdib2R5LyguKikgJzogJ0luIFJlcXVlc3QgYm9keSBmaWVsZCAkMScsXG4gIFtgKC4qKSBzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSAnJHtPTkxZX1NUUklOR19MRVRURVJTfSdgXTogKFxuICAgIF8sXG4gICAgJDAsXG4gICAgJDFcbiAgKSA9PiBgUmVxdWVzdCAkeyQwfSBzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSBcXGAkeyQxfVxcYGAsXG4gICdib2R5IHNob3VsZCBOT1QgaGF2ZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMnOlxuICAgICdSZXF1ZXN0IGJvZHkgc2hvdWxkIE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllcycsXG4gICdib2R5LiguKikgc2hvdWxkIGJlICguKiknOiAoXywgJDEsICQyKSA9PlxuICAgIGBSZXF1ZXN0IGJvZHkgZmllbGQgdHlwZSBcXGAkeyQxfVxcYCBzaG91bGQgYmUgJHskMn1gLFxuICAnYm9keS4oLiopIHNob3VsZCBOT1QgYmUgKC4qKSB0aGFuICguKikgY2hhcmFjdGVycyc6IChfLCAkMSwgJDIsICQzKSA9PlxuICAgIGBSZXF1ZXN0IGJvZHkgZmllbGQgXFxgJHskMX1cXGAgc2hvdWxkIE5PVCBiZSAkeyQyfSB0aGFuICR7JDN9IGNoYXJhY3RlcnNgLFxuICAnKC4qKSBpcyByZXF1aXJlZCEnOiAnSW4gUmVzcG9uc2UgYm9keSBzaG91bGQgYmUgZmllbGQgYCQxYCEnXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/errors/translations/en/reg-ex-errors.js\n");

/***/ }),

/***/ "./src/errors/translations/index.js":
/*!******************************************!*\
  !*** ./src/errors/translations/index.js ***!
  \******************************************/
/*! exports provided: en, ru */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ \"./src/errors/translations/en/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"en\", function() { return _en__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ru */ \"./src/errors/translations/ru/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ru\", function() { return _ru__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9pbmRleC5qcz9mYmFlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsImZpbGUiOiIuL3NyYy9lcnJvcnMvdHJhbnNsYXRpb25zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuIGZyb20gJy4vZW4nO1xuaW1wb3J0IHJ1IGZyb20gJy4vcnUnO1xuXG5leHBvcnQgeyBlbiwgcnUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/translations/index.js\n");

/***/ }),

/***/ "./src/errors/translations/ru/custom-errors.js":
/*!*****************************************************!*\
  !*** ./src/errors/translations/ru/custom-errors.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  TokenExpiredOrInvalid: 'Токен, который вы вошли в систему, устарел и/или сломан, пожалуйста,' + 'повторно войдите в систему, чтобы получить доступ снова',\n  UnauthorizedAccess: 'Этот путь защищен и только для авторизованных пользователей, пожалуйста, сначала войдите, чтобы получить доступ',\n  UnauthorizedDeviceAccess: 'Похоже, вы изменили сеть или устройство, поэтому, пожалуйста, войдите снова из-за безопасности',\n  AdminOnlyResource: 'Этот путь доступен только для администраторов и разработчиков',\n  AccessDeniedByCORS: 'Этот запрос отклонен системой безопасности CORS',\n  'Too Many Requests': 'Превышено ограничение на частоту запросов',\n  UserNotFound: 'Пользователь не найден в нашей базе данных',\n  InvalidPassword: 'Неверный пароль'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS9jdXN0b20tZXJyb3JzLmpzPzE4ZjAiXSwibmFtZXMiOlsiVG9rZW5FeHBpcmVkT3JJbnZhbGlkIiwiVW5hdXRob3JpemVkQWNjZXNzIiwiVW5hdXRob3JpemVkRGV2aWNlQWNjZXNzIiwiQWRtaW5Pbmx5UmVzb3VyY2UiLCJBY2Nlc3NEZW5pZWRCeUNPUlMiLCJVc2VyTm90Rm91bmQiLCJJbnZhbGlkUGFzc3dvcmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsdUJBQXFCLEVBQ25CLHlFQUNBLHlEQUhXO0FBSWJDLG9CQUFrQixFQUNoQixpSEFMVztBQU1iQywwQkFBd0IsRUFDdEIsZ0dBUFc7QUFRYkMsbUJBQWlCLEVBQ2YsK0RBVFc7QUFVYkMsb0JBQWtCLEVBQUUsaURBVlA7QUFXYix1QkFBcUIsMkNBWFI7QUFZYkMsY0FBWSxFQUFFLDRDQVpEO0FBYWJDLGlCQUFlLEVBQUU7QUFiSixDQUFmIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvcnUvY3VzdG9tLWVycm9ycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgVG9rZW5FeHBpcmVkT3JJbnZhbGlkOlxuICAgICfQotC+0LrQtdC9LCDQutC+0YLQvtGA0YvQuSDQstGLINCy0L7RiNC70Lgg0LIg0YHQuNGB0YLQtdC80YMsINGD0YHRgtCw0YDQtdC7INC4L9C40LvQuCDRgdC70L7QvNCw0L0sINC/0L7QttCw0LvRg9C50YHRgtCwLCcgK1xuICAgICfQv9C+0LLRgtC+0YDQvdC+INCy0L7QudC00LjRgtC1INCyINGB0LjRgdGC0LXQvNGDLCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LTQvtGB0YLRg9C/INGB0L3QvtCy0LAnLFxuICBVbmF1dGhvcml6ZWRBY2Nlc3M6XG4gICAgJ9Ct0YLQvtGCINC/0YPRgtGMINC30LDRidC40YnQtdC9INC4INGC0L7Qu9GM0LrQviDQtNC70Y8g0LDQstGC0L7RgNC40LfQvtCy0LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSwg0L/QvtC20LDQu9GD0LnRgdGC0LAsINGB0L3QsNGH0LDQu9CwINCy0L7QudC00LjRgtC1LCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LTQvtGB0YLRg9C/JyxcbiAgVW5hdXRob3JpemVkRGV2aWNlQWNjZXNzOlxuICAgICfQn9C+0YXQvtC20LUsINCy0Ysg0LjQt9C80LXQvdC40LvQuCDRgdC10YLRjCDQuNC70Lgg0YPRgdGC0YDQvtC50YHRgtCy0L4sINC/0L7RjdGC0L7QvNGDLCDQv9C+0LbQsNC70YPQudGB0YLQsCwg0LLQvtC50LTQuNGC0LUg0YHQvdC+0LLQsCDQuNC3LdC30LAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4JyxcbiAgQWRtaW5Pbmx5UmVzb3VyY2U6XG4gICAgJ9Ct0YLQvtGCINC/0YPRgtGMINC00L7RgdGC0YPQv9C10L0g0YLQvtC70YzQutC+INC00LvRjyDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNC+0LIg0Lgg0YDQsNC30YDQsNCx0L7RgtGH0LjQutC+0LInLFxuICBBY2Nlc3NEZW5pZWRCeUNPUlM6ICfQrdGC0L7RgiDQt9Cw0L/RgNC+0YEg0L7RgtC60LvQvtC90LXQvSDRgdC40YHRgtC10LzQvtC5INCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCBDT1JTJyxcbiAgJ1RvbyBNYW55IFJlcXVlc3RzJzogJ9Cf0YDQtdCy0YvRiNC10L3QviDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC90LAg0YfQsNGB0YLQvtGC0YMg0LfQsNC/0YDQvtGB0L7QsicsXG4gIFVzZXJOb3RGb3VuZDogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC90LDQudC00LXQvSDQsiDQvdCw0YjQtdC5INCx0LDQt9C1INC00LDQvdC90YvRhScsXG4gIEludmFsaWRQYXNzd29yZDogJ9Cd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMJ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/translations/ru/custom-errors.js\n");

/***/ }),

/***/ "./src/errors/translations/ru/http-errors.js":
/*!***************************************************!*\
  !*** ./src/errors/translations/ru/http-errors.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  NotFound: 'Этот путь не существует на сервере, пожалуйста, проверьте путь запроса',\n  BadRequest: 'Ваш запрос кажется недействительным или неправильным, пожалуйста, проверьте ваш запрос'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS9odHRwLWVycm9ycy5qcz9mOTY4Il0sIm5hbWVzIjpbIk5vdEZvdW5kIiwiQmFkUmVxdWVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxVQUFRLEVBQ04sd0VBRlc7QUFHYkMsWUFBVSxFQUNSO0FBSlcsQ0FBZiIsImZpbGUiOiIuL3NyYy9lcnJvcnMvdHJhbnNsYXRpb25zL3J1L2h0dHAtZXJyb3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBOb3RGb3VuZDpcbiAgICAn0K3RgtC+0YIg0L/Rg9GC0Ywg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQvdCwINGB0LXRgNCy0LXRgNC1LCDQv9C+0LbQsNC70YPQudGB0YLQsCwg0L/RgNC+0LLQtdGA0YzRgtC1INC/0YPRgtGMINC30LDQv9GA0L7RgdCwJyxcbiAgQmFkUmVxdWVzdDpcbiAgICAn0JLQsNGIINC30LDQv9GA0L7RgSDQutCw0LbQtdGC0YHRjyDQvdC10LTQtdC50YHRgtCy0LjRgtC10LvRjNC90YvQvCDQuNC70Lgg0L3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C8LCDQv9C+0LbQsNC70YPQudGB0YLQsCwg0L/RgNC+0LLQtdGA0YzRgtC1INCy0LDRiCDQt9Cw0L/RgNC+0YEnXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/errors/translations/ru/http-errors.js\n");

/***/ }),

/***/ "./src/errors/translations/ru/index.js":
/*!*********************************************!*\
  !*** ./src/errors/translations/ru/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reg_ex_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-ex-errors */ \"./src/errors/translations/ru/reg-ex-errors.js\");\n/* harmony import */ var _http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-errors */ \"./src/errors/translations/ru/http-errors.js\");\n/* harmony import */ var _custom_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-errors */ \"./src/errors/translations/ru/custom-errors.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ ..._reg_ex_errors__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  httpErrors: _http_errors__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  customErrors: _custom_errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS9pbmRleC5qcz80ZDJjIl0sIm5hbWVzIjpbInJlZ0V4RXJyb3JzIiwiaHR0cEVycm9ycyIsImN1c3RvbUVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxpRUFDYixHQUFHQSxzREFEVTtBQUViQyxrRUFGYTtBQUdiQyxzRUFBWUE7QUFIQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvcnUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVnRXhFcnJvcnMgZnJvbSAnLi9yZWctZXgtZXJyb3JzJztcbmltcG9ydCBodHRwRXJyb3JzIGZyb20gJy4vaHR0cC1lcnJvcnMnO1xuaW1wb3J0IGN1c3RvbUVycm9ycyBmcm9tICcuL2N1c3RvbS1lcnJvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLnJlZ0V4RXJyb3JzLFxuICBodHRwRXJyb3JzLFxuICBjdXN0b21FcnJvcnNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/errors/translations/ru/index.js\n");

/***/ }),

/***/ "./src/errors/translations/ru/misc.js":
/*!********************************************!*\
  !*** ./src/errors/translations/ru/misc.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  shorter: 'короче',\n  longer: 'длиннее'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS9taXNjLmpzPzI1MTkiXSwibmFtZXMiOlsic2hvcnRlciIsImxvbmdlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxTQUFPLEVBQUUsUUFESTtBQUViQyxRQUFNLEVBQUU7QUFGSyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvcnUvbWlzYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc2hvcnRlcjogJ9C60L7RgNC+0YfQtScsXG4gIGxvbmdlcjogJ9C00LvQuNC90L3QtdC1J1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/translations/ru/misc.js\n");

/***/ }),

/***/ "./src/errors/translations/ru/reg-ex-errors.js":
/*!*****************************************************!*\
  !*** ./src/errors/translations/ru/reg-ex-errors.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/errors/translations/constants.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/errors/translations/ru/types.js\");\n/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc */ \"./src/errors/translations/ru/misc.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'body/(.*) ': 'В тело запроса поле $1',\n  [`(.*) should have required property '${_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"ONLY_STRING_LETTERS\"]}'`]: (_, $0, $1) => `${_types__WEBPACK_IMPORTED_MODULE_1__[\"requestTypeNames\"][$0]} запроса должно иметь обязательное поле \\`${$1}\\``,\n  'body should NOT have additional properties': 'Тело запроса НЕ должно иметь дополнительные поля',\n  'body.(.*) should be (.*)': (_, $1, $2) => `В тело запроса поле \\`${$1}\\` должно быть ${_types__WEBPACK_IMPORTED_MODULE_1__[\"typeNames\"][$2]}`,\n  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) => `В тело запроса поле \\`${$1}\\` НЕ должно быть ${_misc__WEBPACK_IMPORTED_MODULE_2__[\"default\"][$2]} чем ${$3} символов`,\n  '(.*) is required!': 'В ответ должно быть поле `$1`!',\n  'Rate limit exceeded, retry in (.*) seconds': 'Превышено ограничение на частоту, повторите попытку через $1 секунд'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS9yZWctZXgtZXJyb3JzLmpzPzhiZWQiXSwibmFtZXMiOlsiT05MWV9TVFJJTkdfTEVUVEVSUyIsIl8iLCIkMCIsIiQxIiwicmVxdWVzdFR5cGVOYW1lcyIsIiQyIiwidHlwZU5hbWVzIiwiJDMiLCJtaXNjIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlO0FBQ2IsZ0JBQWMsd0JBREQ7QUFFYixHQUFFLHVDQUFzQ0EsaUVBQW9CLEdBQTVELEdBQWlFLENBQy9EQyxDQUQrRCxFQUUvREMsRUFGK0QsRUFHL0RDLEVBSCtELEtBSzlELEdBQUVDLHVEQUFnQixDQUFDRixFQUFELENBQUssNkNBQTRDQyxFQUFHLElBUDVEO0FBUWIsZ0RBQ0Usa0RBVFc7QUFVYiw4QkFBNEIsQ0FBQ0YsQ0FBRCxFQUFJRSxFQUFKLEVBQVFFLEVBQVIsS0FDekIseUJBQXdCRixFQUFHLGtCQUFpQkcsZ0RBQVMsQ0FBQ0QsRUFBRCxDQUFLLEVBWGhEO0FBWWIsdURBQXFELENBQUNKLENBQUQsRUFBSUUsRUFBSixFQUFRRSxFQUFSLEVBQVlFLEVBQVosS0FDbEQseUJBQXdCSixFQUFHLHFCQUMxQkssNkNBQUksQ0FBQ0gsRUFBRCxDQUNMLFFBQU9FLEVBQUcsV0FmQTtBQWdCYix1QkFBcUIsZ0NBaEJSO0FBaUJiLGdEQUNFO0FBbEJXLENBQWYiLCJmaWxlIjoiLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS9yZWctZXgtZXJyb3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT05MWV9TVFJJTkdfTEVUVEVSUyB9IGZyb20gJy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyB0eXBlTmFtZXMsIHJlcXVlc3RUeXBlTmFtZXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtaXNjIGZyb20gJy4vbWlzYyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2JvZHkvKC4qKSAnOiAn0JIg0YLQtdC70L4g0LfQsNC/0YDQvtGB0LAg0L/QvtC70LUgJDEnLFxuICBbYCguKikgc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgJyR7T05MWV9TVFJJTkdfTEVUVEVSU30nYF06IChcbiAgICBfLFxuICAgICQwLFxuICAgICQxXG4gICkgPT5cbiAgICBgJHtyZXF1ZXN0VHlwZU5hbWVzWyQwXX0g0LfQsNC/0YDQvtGB0LAg0LTQvtC70LbQvdC+INC40LzQtdGC0Ywg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvtC1INC/0L7Qu9C1IFxcYCR7JDF9XFxgYCxcbiAgJ2JvZHkgc2hvdWxkIE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllcyc6XG4gICAgJ9Ci0LXQu9C+INC30LDQv9GA0L7RgdCwINCd0JUg0LTQvtC70LbQvdC+INC40LzQtdGC0Ywg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9C+0LvRjycsXG4gICdib2R5LiguKikgc2hvdWxkIGJlICguKiknOiAoXywgJDEsICQyKSA9PlxuICAgIGDQkiDRgtC10LvQviDQt9Cw0L/RgNC+0YHQsCDQv9C+0LvQtSBcXGAkeyQxfVxcYCDQtNC+0LvQttC90L4g0LHRi9GC0YwgJHt0eXBlTmFtZXNbJDJdfWAsXG4gICdib2R5LiguKikgc2hvdWxkIE5PVCBiZSAoLiopIHRoYW4gKC4qKSBjaGFyYWN0ZXJzJzogKF8sICQxLCAkMiwgJDMpID0+XG4gICAgYNCSINGC0LXQu9C+INC30LDQv9GA0L7RgdCwINC/0L7Qu9C1IFxcYCR7JDF9XFxgINCd0JUg0LTQvtC70LbQvdC+INCx0YvRgtGMICR7XG4gICAgICBtaXNjWyQyXVxuICAgIH0g0YfQtdC8ICR7JDN9INGB0LjQvNCy0L7Qu9C+0LJgLFxuICAnKC4qKSBpcyByZXF1aXJlZCEnOiAn0JIg0L7RgtCy0LXRgiDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/QvtC70LUgYCQxYCEnLFxuICAnUmF0ZSBsaW1pdCBleGNlZWRlZCwgcmV0cnkgaW4gKC4qKSBzZWNvbmRzJzpcbiAgICAn0J/RgNC10LLRi9GI0LXQvdC+INC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L3QsCDRh9Cw0YHRgtC+0YLRgywg0L/QvtCy0YLQvtGA0LjRgtC1INC/0L7Qv9GL0YLQutGDINGH0LXRgNC10LcgJDEg0YHQtdC60YPQvdC0J1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/errors/translations/ru/reg-ex-errors.js\n");

/***/ }),

/***/ "./src/errors/translations/ru/types.js":
/*!*********************************************!*\
  !*** ./src/errors/translations/ru/types.js ***!
  \*********************************************/
/*! exports provided: typeNames, requestTypeNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeNames\", function() { return typeNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestTypeNames\", function() { return requestTypeNames; });\nconst typeNames = {\n  string: 'строка',\n  number: 'цифра',\n  array: 'массив',\n  object: 'обьект',\n  symbol: 'символ',\n  boolean: 'були'\n};\nconst requestTypeNames = {\n  querystring: 'Параметр',\n  body: 'Тело'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3JzL3RyYW5zbGF0aW9ucy9ydS90eXBlcy5qcz80YjgxIl0sIm5hbWVzIjpbInR5cGVOYW1lcyIsInN0cmluZyIsIm51bWJlciIsImFycmF5Iiwib2JqZWN0Iiwic3ltYm9sIiwiYm9vbGVhbiIsInJlcXVlc3RUeXBlTmFtZXMiLCJxdWVyeXN0cmluZyIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLFNBQVMsR0FBRztBQUNoQkMsUUFBTSxFQUFFLFFBRFE7QUFFaEJDLFFBQU0sRUFBRSxPQUZRO0FBR2hCQyxPQUFLLEVBQUUsUUFIUztBQUloQkMsUUFBTSxFQUFFLFFBSlE7QUFLaEJDLFFBQU0sRUFBRSxRQUxRO0FBTWhCQyxTQUFPLEVBQUU7QUFOTyxDQUFsQjtBQVNBLE1BQU1DLGdCQUFnQixHQUFHO0FBQ3ZCQyxhQUFXLEVBQUUsVUFEVTtBQUV2QkMsTUFBSSxFQUFFO0FBRmlCLENBQXpCIiwiZmlsZSI6Ii4vc3JjL2Vycm9ycy90cmFuc2xhdGlvbnMvcnUvdHlwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0eXBlTmFtZXMgPSB7XG4gIHN0cmluZzogJ9GB0YLRgNC+0LrQsCcsXG4gIG51bWJlcjogJ9GG0LjRhNGA0LAnLFxuICBhcnJheTogJ9C80LDRgdGB0LjQsicsXG4gIG9iamVjdDogJ9C+0LHRjNC10LrRgicsXG4gIHN5bWJvbDogJ9GB0LjQvNCy0L7QuycsXG4gIGJvb2xlYW46ICfQsdGD0LvQuCdcbn07XG5cbmNvbnN0IHJlcXVlc3RUeXBlTmFtZXMgPSB7XG4gIHF1ZXJ5c3RyaW5nOiAn0J/QsNGA0LDQvNC10YLRgCcsXG4gIGJvZHk6ICfQotC10LvQvidcbn07XG5cbmV4cG9ydCB7IHR5cGVOYW1lcywgcmVxdWVzdFR5cGVOYW1lcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/errors/translations/ru/types.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-apollo-server.js":
/*!******************************************************!*\
  !*** ./src/fastify-plugins/fastify-apollo-server.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-fastify */ \"apollo-server-fastify\");\n/* harmony import */ var apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/schema */ \"./src/graphql/schema/index.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => {\n  // Create instance\n  const apollo = new apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n    schema: _graphql_schema__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    playground: _config_js__WEBPACK_IMPORTED_MODULE_2__[\"dev\"] && {\n      version: '1.7.25'\n    }\n  }); // Add subscription support\n\n  apollo.installSubscriptionHandlers(fastify.server);\n  return fastify.register(apollo.createHandler({\n    origin: _config_js__WEBPACK_IMPORTED_MODULE_2__[\"corsWhitelist\"]\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktYXBvbGxvLXNlcnZlci5qcz80NDQ2Il0sIm5hbWVzIjpbImZhc3RpZnkiLCJhcG9sbG8iLCJBcG9sbG9TZXJ2ZXIiLCJzY2hlbWEiLCJwbGF5Z3JvdW5kIiwiZGV2IiwidmVyc2lvbiIsImluc3RhbGxTdWJzY3JpcHRpb25IYW5kbGVycyIsInNlcnZlciIsInJlZ2lzdGVyIiwiY3JlYXRlSGFuZGxlciIsIm9yaWdpbiIsImNvcnNXaGl0ZWxpc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxxRUFBT0EsT0FBUCxJQUFtQjtBQUNoQztBQUNBLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxrRUFBSixDQUFpQjtBQUM5QkMsbUVBRDhCO0FBRTlCQyxjQUFVLEVBQUVDLDhDQUFHLElBQUk7QUFBRUMsYUFBTyxFQUFFO0FBQVg7QUFGVyxHQUFqQixDQUFmLENBRmdDLENBT2hDOztBQUNBTCxRQUFNLENBQUNNLDJCQUFQLENBQW1DUCxPQUFPLENBQUNRLE1BQTNDO0FBRUEsU0FBT1IsT0FBTyxDQUFDUyxRQUFSLENBQWlCUixNQUFNLENBQUNTLGFBQVAsQ0FBcUI7QUFBRUMsVUFBTSxFQUFFQyx3REFBYUE7QUFBdkIsR0FBckIsQ0FBakIsQ0FBUDtBQUNELENBWEQiLCJmaWxlIjoiLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktYXBvbGxvLXNlcnZlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZmFzdGlmeSc7XG5pbXBvcnQgc2NoZW1hIGZyb20gJy4uL2dyYXBocWwvc2NoZW1hJztcbmltcG9ydCB7IGRldiwgY29yc1doaXRlbGlzdCB9IGZyb20gJy4uL2NvbmZpZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmYXN0aWZ5KSA9PiB7XG4gIC8vIENyZWF0ZSBpbnN0YW5jZVxuICBjb25zdCBhcG9sbG8gPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWEsXG4gICAgcGxheWdyb3VuZDogZGV2ICYmIHsgdmVyc2lvbjogJzEuNy4yNScgfVxuICB9KTtcblxuICAvLyBBZGQgc3Vic2NyaXB0aW9uIHN1cHBvcnRcbiAgYXBvbGxvLmluc3RhbGxTdWJzY3JpcHRpb25IYW5kbGVycyhmYXN0aWZ5LnNlcnZlcik7XG5cbiAgcmV0dXJuIGZhc3RpZnkucmVnaXN0ZXIoYXBvbGxvLmNyZWF0ZUhhbmRsZXIoeyBvcmlnaW46IGNvcnNXaGl0ZWxpc3QgfSkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-apollo-server.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-cors.js":
/*!*********************************************!*\
  !*** ./src/fastify-plugins/fastify-cors.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-cors */ \"fastify-cors\");\n/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => fastify.register(fastify_cors__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  origin: _config__WEBPACK_IMPORTED_MODULE_1__[\"corsWhitelist\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktY29ycy5qcz9iNGJkIl0sIm5hbWVzIjpbImZhc3RpZnkiLCJyZWdpc3RlciIsImZhc3RpZnlDb3JzIiwib3JpZ2luIiwiY29yc1doaXRlbGlzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUscUVBQU9BLE9BQVAsSUFDYkEsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyxtREFBakIsRUFBOEI7QUFBRUMsUUFBTSxFQUFFQyxxREFBYUE7QUFBdkIsQ0FBOUIsQ0FERiIsImZpbGUiOiIuL3NyYy9mYXN0aWZ5LXBsdWdpbnMvZmFzdGlmeS1jb3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhc3RpZnlDb3JzIGZyb20gJ2Zhc3RpZnktY29ycyc7XG5pbXBvcnQgeyBjb3JzV2hpdGVsaXN0IH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGZhc3RpZnkpID0+XG4gIGZhc3RpZnkucmVnaXN0ZXIoZmFzdGlmeUNvcnMsIHsgb3JpZ2luOiBjb3JzV2hpdGVsaXN0IH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-cors.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-helmet.js":
/*!***********************************************!*\
  !*** ./src/fastify-plugins/fastify-helmet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-helmet */ \"fastify-helmet\");\n/* harmony import */ var fastify_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_helmet__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => fastify.register(fastify_helmet__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  hidePoweredBy: {\n    setTo: 'Fastify'\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktaGVsbWV0LmpzP2RiMzYiXSwibmFtZXMiOlsiZmFzdGlmeSIsInJlZ2lzdGVyIiwiZmFzdGlmeUhlbG1ldCIsImhpZGVQb3dlcmVkQnkiLCJzZXRUbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxxRUFBT0EsT0FBUCxJQUNiQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLHFEQUFqQixFQUFnQztBQUFFQyxlQUFhLEVBQUU7QUFBRUMsU0FBSyxFQUFFO0FBQVQ7QUFBakIsQ0FBaEMsQ0FERiIsImZpbGUiOiIuL3NyYy9mYXN0aWZ5LXBsdWdpbnMvZmFzdGlmeS1oZWxtZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFzdGlmeUhlbG1ldCBmcm9tICdmYXN0aWZ5LWhlbG1ldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmYXN0aWZ5KSA9PlxuICBmYXN0aWZ5LnJlZ2lzdGVyKGZhc3RpZnlIZWxtZXQsIHsgaGlkZVBvd2VyZWRCeTogeyBzZXRUbzogJ0Zhc3RpZnknIH0gfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-helmet.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-jwt.js":
/*!********************************************!*\
  !*** ./src/fastify-plugins/fastify-jwt.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-jwt */ \"fastify-jwt\");\n/* harmony import */ var fastify_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => fastify.register(fastify_jwt__WEBPACK_IMPORTED_MODULE_0___default.a, _config__WEBPACK_IMPORTED_MODULE_1__[\"jwtSign\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktand0LmpzP2JkZTgiXSwibmFtZXMiOlsiZmFzdGlmeSIsInJlZ2lzdGVyIiwiZmFzdGlmeUpXVCIsImp3dFNpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLHFFQUFPQSxPQUFQLElBQW1CQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJDLGtEQUFqQixFQUE2QkMsK0NBQTdCLENBQWxDIiwiZmlsZSI6Ii4vc3JjL2Zhc3RpZnktcGx1Z2lucy9mYXN0aWZ5LWp3dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5SldUIGZyb20gJ2Zhc3RpZnktand0JztcbmltcG9ydCB7IGp3dFNpZ24gfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZmFzdGlmeSkgPT4gZmFzdGlmeS5yZWdpc3RlcihmYXN0aWZ5SldULCBqd3RTaWduKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-jwt.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-normalize.js":
/*!**************************************************!*\
  !*** ./src/fastify-plugins/fastify-normalize.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify_normalize_request_reply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-normalize-request-reply */ \"fastify-normalize-request-reply\");\n/* harmony import */ var fastify_normalize_request_reply__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_normalize_request_reply__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => fastify.register(fastify_normalize_request_reply__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  'trust proxy': 1,\n  etag: false\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktbm9ybWFsaXplLmpzP2Y4MDkiXSwibmFtZXMiOlsiZmFzdGlmeSIsInJlZ2lzdGVyIiwiZmFzdGlmeU5vcm1hbGl6ZVJlcXVlc3RSZXBseSIsImV0YWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUscUVBQU9BLE9BQVAsSUFDYkEsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyxzRUFBakIsRUFBK0M7QUFDN0MsaUJBQWUsQ0FEOEI7QUFFN0NDLE1BQUksRUFBRTtBQUZ1QyxDQUEvQyxDQURGIiwiZmlsZSI6Ii4vc3JjL2Zhc3RpZnktcGx1Z2lucy9mYXN0aWZ5LW5vcm1hbGl6ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5Tm9ybWFsaXplUmVxdWVzdFJlcGx5IGZyb20gJ2Zhc3RpZnktbm9ybWFsaXplLXJlcXVlc3QtcmVwbHknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZmFzdGlmeSkgPT5cbiAgZmFzdGlmeS5yZWdpc3RlcihmYXN0aWZ5Tm9ybWFsaXplUmVxdWVzdFJlcGx5LCB7XG4gICAgJ3RydXN0IHByb3h5JzogMSxcbiAgICBldGFnOiBmYWxzZVxuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-normalize.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-oas.js":
/*!********************************************!*\
  !*** ./src/fastify-plugins/fastify-oas.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify_oas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-oas */ \"fastify-oas\");\n/* harmony import */ var fastify_oas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_oas__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _docs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../docs-config */ \"./docs-config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => fastify.register(fastify_oas__WEBPACK_IMPORTED_MODULE_0___default.a, _docs_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktb2FzLmpzPzc5Y2EiXSwibmFtZXMiOlsiZmFzdGlmeSIsInJlZ2lzdGVyIiwiZmFzdGlmeU9hcyIsImZhc3RpZnlPYXNDb25maWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLHFFQUFPQSxPQUFQLElBQ2JBLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQkMsa0RBQWpCLEVBQTZCQyxvREFBN0IsQ0FERiIsImZpbGUiOiIuL3NyYy9mYXN0aWZ5LXBsdWdpbnMvZmFzdGlmeS1vYXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFzdGlmeU9hcyBmcm9tICdmYXN0aWZ5LW9hcyc7XG5pbXBvcnQgZmFzdGlmeU9hc0NvbmZpZyBmcm9tICcuLi8uLi9kb2NzLWNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmYXN0aWZ5KSA9PlxuICBmYXN0aWZ5LnJlZ2lzdGVyKGZhc3RpZnlPYXMsIGZhc3RpZnlPYXNDb25maWcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-oas.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-rate-limiter.js":
/*!*****************************************************!*\
  !*** ./src/fastify-plugins/fastify-rate-limiter.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify_rate_limit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify-rate-limit */ \"fastify-rate-limit\");\n/* harmony import */ var fastify_rate_limit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify_rate_limit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async fastify => fastify.register(fastify_rate_limit__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  max: _config__WEBPACK_IMPORTED_MODULE_1__[\"dev\"] ? 500 : 25,\n  timeWindow: 30000,\n  cache: 10000,\n  // default 5000\n  whitelist: [],\n  skipOnError: false,\n  // default false\n  keyGenerator: _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyGenerator\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktcmF0ZS1saW1pdGVyLmpzPzdkOTgiXSwibmFtZXMiOlsiZmFzdGlmeSIsInJlZ2lzdGVyIiwiZmFzdGlmeVJhdGVMaW1pdCIsIm1heCIsImRldiIsInRpbWVXaW5kb3ciLCJjYWNoZSIsIndoaXRlbGlzdCIsInNraXBPbkVycm9yIiwia2V5R2VuZXJhdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUscUVBQU9BLE9BQVAsSUFDYkEsT0FBTyxDQUFDQyxRQUFSLENBQWlCQyx5REFBakIsRUFBbUM7QUFDakNDLEtBQUcsRUFBRUMsMkNBQUcsR0FBRyxHQUFILEdBQVMsRUFEZ0I7QUFFakNDLFlBQVUsRUFBRSxLQUZxQjtBQUdqQ0MsT0FBSyxFQUFFLEtBSDBCO0FBR25CO0FBQ2RDLFdBQVMsRUFBRSxFQUpzQjtBQUtqQ0MsYUFBVyxFQUFFLEtBTG9CO0FBS2I7QUFDcEJDLHFFQUFZQTtBQU5xQixDQUFuQyxDQURGIiwiZmlsZSI6Ii4vc3JjL2Zhc3RpZnktcGx1Z2lucy9mYXN0aWZ5LXJhdGUtbGltaXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5UmF0ZUxpbWl0IGZyb20gJ2Zhc3RpZnktcmF0ZS1saW1pdCc7XG5pbXBvcnQgeyBkZXYgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsga2V5R2VuZXJhdG9yIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmYXN0aWZ5KSA9PlxuICBmYXN0aWZ5LnJlZ2lzdGVyKGZhc3RpZnlSYXRlTGltaXQsIHtcbiAgICBtYXg6IGRldiA/IDUwMCA6IDI1LFxuICAgIHRpbWVXaW5kb3c6IDMwMDAwLFxuICAgIGNhY2hlOiAxMDAwMCwgLy8gZGVmYXVsdCA1MDAwXG4gICAgd2hpdGVsaXN0OiBbXSxcbiAgICBza2lwT25FcnJvcjogZmFsc2UsIC8vIGRlZmF1bHQgZmFsc2VcbiAgICBrZXlHZW5lcmF0b3JcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-rate-limiter.js\n");

/***/ }),

/***/ "./src/fastify-plugins/fastify-websocket.js":
/*!**************************************************!*\
  !*** ./src/fastify-plugins/fastify-websocket.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var ws_lib_websocket_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ws/lib/websocket-server */ \"ws/lib/websocket-server\");\n/* harmony import */ var ws_lib_websocket_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ws_lib_websocket_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fastify_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fastify-plugin */ \"fastify-plugin\");\n/* harmony import */ var fastify_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fastify_plugin__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fastify_plugin__WEBPACK_IMPORTED_MODULE_3___default()((fastify, options, next) => {\n  const onlineClientsMap = {};\n  const clients = {};\n  fastify.addHook('onRequest', (req, res, next) => {\n    if (req.headers.cookie) {\n      clients[req.headers.cookie] = req;\n    }\n\n    next();\n  });\n\n  function findClient(cookie, tries = 10) {\n    let timerId;\n    return new Promise(function findClientPromise(resolve, reject) {\n      if (clients[cookie]) {\n        clearTimeout(timerId);\n        resolve(clients[cookie], cookie);\n      } else if (tries === 0) {\n        clearTimeout(timerId);\n        reject(new Error('Initial request to server is required ' + 'to be WebSocket and it\\'s verify mechanism'));\n      } else {\n        timerId = setTimeout(findClient, tries-- * 100, resolve, reject);\n      }\n    });\n  }\n\n  fastify.ws = (path, fn) => {\n    const wss = new ws_lib_websocket_server__WEBPACK_IMPORTED_MODULE_2___default.a({\n      verifyClient(info, done) {\n        findClient(info.req.headers.cookie).then((request, key) => {\n          Object.assign(info.req, request);\n          done(_config__WEBPACK_IMPORTED_MODULE_0__[\"corsWhitelist\"].includes(info.origin));\n          delete clients[key];\n        }).catch(code => done(false, code, info.req.headers));\n      },\n\n      server: fastify.server,\n      path\n    });\n    fastify.addHook('onClose', (fastify, done) => {\n      wss.close(done);\n    });\n    wss.on('connection', Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"wsWrap\"])(fn, wss, _config__WEBPACK_IMPORTED_MODULE_0__[\"corsWhitelist\"], onlineClientsMap));\n    return wss;\n  };\n\n  next();\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2Zhc3RpZnktd2Vic29ja2V0LmpzPzYwYWIiXSwibmFtZXMiOlsiZmFzdGlmeVBsdWdpbiIsImZhc3RpZnkiLCJvcHRpb25zIiwibmV4dCIsIm9ubGluZUNsaWVudHNNYXAiLCJjbGllbnRzIiwiYWRkSG9vayIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJjb29raWUiLCJmaW5kQ2xpZW50IiwidHJpZXMiLCJ0aW1lcklkIiwiUHJvbWlzZSIsImZpbmRDbGllbnRQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsZWFyVGltZW91dCIsIkVycm9yIiwic2V0VGltZW91dCIsIndzIiwicGF0aCIsImZuIiwid3NzIiwiU2VydmVyIiwidmVyaWZ5Q2xpZW50IiwiaW5mbyIsImRvbmUiLCJ0aGVuIiwicmVxdWVzdCIsImtleSIsIk9iamVjdCIsImFzc2lnbiIsImNvcnNXaGl0ZWxpc3QiLCJpbmNsdWRlcyIsIm9yaWdpbiIsImNhdGNoIiwiY29kZSIsInNlcnZlciIsImNsb3NlIiwib24iLCJ3c1dyYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZUEsb0hBQWEsQ0FBQyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBbUJDLElBQW5CLEtBQTRCO0FBQ3ZELFFBQU1DLGdCQUFnQixHQUFHLEVBQXpCO0FBRUEsUUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBRUFKLFNBQU8sQ0FBQ0ssT0FBUixDQUFnQixXQUFoQixFQUE2QixDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0wsSUFBWCxLQUFvQjtBQUMvQyxRQUFJSSxHQUFHLENBQUNFLE9BQUosQ0FBWUMsTUFBaEIsRUFBd0I7QUFDdEJMLGFBQU8sQ0FBQ0UsR0FBRyxDQUFDRSxPQUFKLENBQVlDLE1BQWIsQ0FBUCxHQUE4QkgsR0FBOUI7QUFDRDs7QUFDREosUUFBSTtBQUNMLEdBTEQ7O0FBT0EsV0FBU1EsVUFBVCxDQUFvQkQsTUFBcEIsRUFBNEJFLEtBQUssR0FBRyxFQUFwQyxFQUF3QztBQUN0QyxRQUFJQyxPQUFKO0FBQ0EsV0FBTyxJQUFJQyxPQUFKLENBQVksU0FBU0MsaUJBQVQsQ0FBMkJDLE9BQTNCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUM3RCxVQUFJWixPQUFPLENBQUNLLE1BQUQsQ0FBWCxFQUFxQjtBQUNuQlEsb0JBQVksQ0FBQ0wsT0FBRCxDQUFaO0FBQ0FHLGVBQU8sQ0FBQ1gsT0FBTyxDQUFDSyxNQUFELENBQVIsRUFBa0JBLE1BQWxCLENBQVA7QUFDRCxPQUhELE1BR08sSUFBSUUsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDdEJNLG9CQUFZLENBQUNMLE9BQUQsQ0FBWjtBQUNBSSxjQUFNLENBQ0osSUFBSUUsS0FBSixDQUNFLDJDQUNFLDRDQUZKLENBREksQ0FBTjtBQU1ELE9BUk0sTUFRQTtBQUNMTixlQUFPLEdBQUdPLFVBQVUsQ0FBQ1QsVUFBRCxFQUFhQyxLQUFLLEtBQUssR0FBdkIsRUFBNEJJLE9BQTVCLEVBQXFDQyxNQUFyQyxDQUFwQjtBQUNEO0FBQ0YsS0FmTSxDQUFQO0FBZ0JEOztBQUVEaEIsU0FBTyxDQUFDb0IsRUFBUixHQUFhLENBQUNDLElBQUQsRUFBT0MsRUFBUCxLQUFjO0FBQ3pCLFVBQU1DLEdBQUcsR0FBRyxJQUFJQyw4REFBSixDQUFXO0FBQ3JCQyxrQkFBWSxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBYTtBQUN2QmpCLGtCQUFVLENBQUNnQixJQUFJLENBQUNwQixHQUFMLENBQVNFLE9BQVQsQ0FBaUJDLE1BQWxCLENBQVYsQ0FDR21CLElBREgsQ0FDUSxDQUFDQyxPQUFELEVBQVVDLEdBQVYsS0FBa0I7QUFDdEJDLGdCQUFNLENBQUNDLE1BQVAsQ0FBY04sSUFBSSxDQUFDcEIsR0FBbkIsRUFBd0J1QixPQUF4QjtBQUNBRixjQUFJLENBQUNNLHFEQUFhLENBQUNDLFFBQWQsQ0FBdUJSLElBQUksQ0FBQ1MsTUFBNUIsQ0FBRCxDQUFKO0FBQ0EsaUJBQU8vQixPQUFPLENBQUMwQixHQUFELENBQWQ7QUFDRCxTQUxILEVBTUdNLEtBTkgsQ0FNVUMsSUFBRCxJQUFVVixJQUFJLENBQUMsS0FBRCxFQUFRVSxJQUFSLEVBQWNYLElBQUksQ0FBQ3BCLEdBQUwsQ0FBU0UsT0FBdkIsQ0FOdkI7QUFPRCxPQVRvQjs7QUFVckI4QixZQUFNLEVBQUV0QyxPQUFPLENBQUNzQyxNQVZLO0FBV3JCakI7QUFYcUIsS0FBWCxDQUFaO0FBY0FyQixXQUFPLENBQUNLLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkIsQ0FBQ0wsT0FBRCxFQUFVMkIsSUFBVixLQUFtQjtBQUM1Q0osU0FBRyxDQUFDZ0IsS0FBSixDQUFVWixJQUFWO0FBQ0QsS0FGRDtBQUdBSixPQUFHLENBQUNpQixFQUFKLENBQU8sWUFBUCxFQUFxQkMsdURBQU0sQ0FBQ25CLEVBQUQsRUFBS0MsR0FBTCxFQUFVVSxxREFBVixFQUF5QjlCLGdCQUF6QixDQUEzQjtBQUVBLFdBQU9vQixHQUFQO0FBQ0QsR0FyQkQ7O0FBdUJBckIsTUFBSTtBQUNMLENBeEQyQixDQUE1QiIsImZpbGUiOiIuL3NyYy9mYXN0aWZ5LXBsdWdpbnMvZmFzdGlmeS13ZWJzb2NrZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3JzV2hpdGVsaXN0IH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHdzV3JhcCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IFNlcnZlciBmcm9tICd3cy9saWIvd2Vic29ja2V0LXNlcnZlcic7XG5pbXBvcnQgZmFzdGlmeVBsdWdpbiBmcm9tICdmYXN0aWZ5LXBsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZhc3RpZnlQbHVnaW4oKGZhc3RpZnksIG9wdGlvbnMsIG5leHQpID0+IHtcbiAgY29uc3Qgb25saW5lQ2xpZW50c01hcCA9IHt9O1xuXG4gIGNvbnN0IGNsaWVudHMgPSB7fTtcblxuICBmYXN0aWZ5LmFkZEhvb2soJ29uUmVxdWVzdCcsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgIGNsaWVudHNbcmVxLmhlYWRlcnMuY29va2llXSA9IHJlcTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBmaW5kQ2xpZW50KGNvb2tpZSwgdHJpZXMgPSAxMCkge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBmaW5kQ2xpZW50UHJvbWlzZShyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChjbGllbnRzW2Nvb2tpZV0pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICByZXNvbHZlKGNsaWVudHNbY29va2llXSwgY29va2llKTtcbiAgICAgIH0gZWxzZSBpZiAodHJpZXMgPT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICByZWplY3QoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0luaXRpYWwgcmVxdWVzdCB0byBzZXJ2ZXIgaXMgcmVxdWlyZWQgJyArXG4gICAgICAgICAgICAgICd0byBiZSBXZWJTb2NrZXQgYW5kIGl0XFwncyB2ZXJpZnkgbWVjaGFuaXNtJ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGZpbmRDbGllbnQsIHRyaWVzLS0gKiAxMDAsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmYXN0aWZ5LndzID0gKHBhdGgsIGZuKSA9PiB7XG4gICAgY29uc3Qgd3NzID0gbmV3IFNlcnZlcih7XG4gICAgICB2ZXJpZnlDbGllbnQoaW5mbywgZG9uZSkge1xuICAgICAgICBmaW5kQ2xpZW50KGluZm8ucmVxLmhlYWRlcnMuY29va2llKVxuICAgICAgICAgIC50aGVuKChyZXF1ZXN0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaW5mby5yZXEsIHJlcXVlc3QpO1xuICAgICAgICAgICAgZG9uZShjb3JzV2hpdGVsaXN0LmluY2x1ZGVzKGluZm8ub3JpZ2luKSk7XG4gICAgICAgICAgICBkZWxldGUgY2xpZW50c1trZXldO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChjb2RlKSA9PiBkb25lKGZhbHNlLCBjb2RlLCBpbmZvLnJlcS5oZWFkZXJzKSk7XG4gICAgICB9LFxuICAgICAgc2VydmVyOiBmYXN0aWZ5LnNlcnZlcixcbiAgICAgIHBhdGhcbiAgICB9KTtcblxuICAgIGZhc3RpZnkuYWRkSG9vaygnb25DbG9zZScsIChmYXN0aWZ5LCBkb25lKSA9PiB7XG4gICAgICB3c3MuY2xvc2UoZG9uZSk7XG4gICAgfSk7XG4gICAgd3NzLm9uKCdjb25uZWN0aW9uJywgd3NXcmFwKGZuLCB3c3MsIGNvcnNXaGl0ZWxpc3QsIG9ubGluZUNsaWVudHNNYXApKTtcblxuICAgIHJldHVybiB3c3M7XG4gIH07XG5cbiAgbmV4dCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fastify-plugins/fastify-websocket.js\n");

/***/ }),

/***/ "./src/fastify-plugins/index.js":
/*!**************************************!*\
  !*** ./src/fastify-plugins/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fastify_oas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fastify-oas */ \"./src/fastify-plugins/fastify-oas.js\");\n/* harmony import */ var _fastify_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fastify-normalize */ \"./src/fastify-plugins/fastify-normalize.js\");\n/* harmony import */ var _fastify_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fastify-helmet */ \"./src/fastify-plugins/fastify-helmet.js\");\n/* harmony import */ var _fastify_rate_limiter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fastify-rate-limiter */ \"./src/fastify-plugins/fastify-rate-limiter.js\");\n/* harmony import */ var fastify_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fastify-cookie */ \"fastify-cookie\");\n/* harmony import */ var fastify_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fastify_cookie__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fastify_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fastify-cors */ \"./src/fastify-plugins/fastify-cors.js\");\n/* harmony import */ var fastify_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fastify-compress */ \"fastify-compress\");\n/* harmony import */ var fastify_compress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fastify_compress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fastify_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fastify-jwt */ \"./src/fastify-plugins/fastify-jwt.js\");\n/* harmony import */ var _fastify_websocket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fastify-websocket */ \"./src/fastify-plugins/fastify-websocket.js\");\n/* harmony import */ var _fastify_apollo_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fastify-apollo-server */ \"./src/fastify-plugins/fastify-apollo-server.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (fastify, options) => fastify.register(_fastify_oas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).register(_fastify_normalize__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).register(_fastify_helmet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).register(_fastify_rate_limiter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).register(fastify_cookie__WEBPACK_IMPORTED_MODULE_4___default.a).register(_fastify_cors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).register(fastify_compress__WEBPACK_IMPORTED_MODULE_6___default.a).register(_fastify_jwt__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).register(_fastify_websocket__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).register(_fastify_apollo_server__WEBPACK_IMPORTED_MODULE_9__[\"default\"], options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFzdGlmeS1wbHVnaW5zL2luZGV4LmpzPzM4N2QiXSwibmFtZXMiOlsiZmFzdGlmeSIsIm9wdGlvbnMiLCJyZWdpc3RlciIsIm9wZW5hcGkiLCJub3JtYWxpemUiLCJoZWxtZXQiLCJyYXRlTGltaXRlciIsImNvb2tpZSIsImNvcnMiLCJjb21wcmVzcyIsImp3dCIsIndzIiwiYXBvbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsc0VBQU9BLE9BQVAsRUFBZ0JDLE9BQWhCLEtBQ2JELE9BQU8sQ0FDSkUsUUFESCxDQUNZQyxvREFEWixFQUVHRCxRQUZILENBRVlFLDBEQUZaLEVBR0dGLFFBSEgsQ0FHWUcsdURBSFosRUFJR0gsUUFKSCxDQUlZSSw2REFKWixFQUtHSixRQUxILENBS1lLLHFEQUxaLEVBTUdMLFFBTkgsQ0FNWU0scURBTlosRUFPR04sUUFQSCxDQU9ZTyx1REFQWixFQVFHUCxRQVJILENBUVlRLG9EQVJaLEVBU0dSLFFBVEgsQ0FTWVMsMERBVFosRUFVR1QsUUFWSCxDQVVZVSw4REFWWixFQVVvQlgsT0FWcEIsQ0FERiIsImZpbGUiOiIuL3NyYy9mYXN0aWZ5LXBsdWdpbnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3BlbmFwaSBmcm9tICcuL2Zhc3RpZnktb2FzJztcbmltcG9ydCBub3JtYWxpemUgZnJvbSAnLi9mYXN0aWZ5LW5vcm1hbGl6ZSc7XG5pbXBvcnQgaGVsbWV0IGZyb20gJy4vZmFzdGlmeS1oZWxtZXQnO1xuaW1wb3J0IHJhdGVMaW1pdGVyIGZyb20gJy4vZmFzdGlmeS1yYXRlLWxpbWl0ZXInO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdmYXN0aWZ5LWNvb2tpZSc7XG5pbXBvcnQgY29ycyBmcm9tICcuL2Zhc3RpZnktY29ycyc7XG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnZmFzdGlmeS1jb21wcmVzcyc7XG5pbXBvcnQgand0IGZyb20gJy4vZmFzdGlmeS1qd3QnO1xuaW1wb3J0IHdzIGZyb20gJy4vZmFzdGlmeS13ZWJzb2NrZXQnO1xuaW1wb3J0IGFwb2xsbyBmcm9tICcuL2Zhc3RpZnktYXBvbGxvLXNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmYXN0aWZ5LCBvcHRpb25zKSA9PlxuICBmYXN0aWZ5XG4gICAgLnJlZ2lzdGVyKG9wZW5hcGkpXG4gICAgLnJlZ2lzdGVyKG5vcm1hbGl6ZSlcbiAgICAucmVnaXN0ZXIoaGVsbWV0KVxuICAgIC5yZWdpc3RlcihyYXRlTGltaXRlcilcbiAgICAucmVnaXN0ZXIoY29va2llKVxuICAgIC5yZWdpc3Rlcihjb3JzKVxuICAgIC5yZWdpc3Rlcihjb21wcmVzcylcbiAgICAucmVnaXN0ZXIoand0KVxuICAgIC5yZWdpc3Rlcih3cylcbiAgICAucmVnaXN0ZXIoYXBvbGxvLCBvcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/fastify-plugins/index.js\n");

/***/ }),

/***/ "./src/graphql/pubsub.js":
/*!*******************************!*\
  !*** ./src/graphql/pubsub.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-fastify */ \"apollo-server-fastify\");\n/* harmony import */ var apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new apollo_server_fastify__WEBPACK_IMPORTED_MODULE_0__[\"PubSub\"]());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9wdWJzdWIuanM/MjVmZiJdLCJuYW1lcyI6WyJQdWJTdWIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsbUVBQUlBLDREQUFKLEVBQWYiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9wdWJzdWIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdWJTdWIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWZhc3RpZnknO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHViU3ViKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/pubsub.js\n");

/***/ }),

/***/ "./src/graphql/pubsub_constants.js":
/*!*****************************************!*\
  !*** ./src/graphql/pubsub_constants.js ***!
  \*****************************************/
/*! exports provided: HELLO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HELLO\", function() { return HELLO; });\nconst HELLO = 'HELLO';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9wdWJzdWJfY29uc3RhbnRzLmpzPzJlYjYiXSwibmFtZXMiOlsiSEVMTE8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUcsT0FBZCIsImZpbGUiOiIuL3NyYy9ncmFwaHFsL3B1YnN1Yl9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIRUxMTyA9ICdIRUxMTyc7XG5cbmV4cG9ydCB7IEhFTExPIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/pubsub_constants.js\n");

/***/ }),

/***/ "./src/graphql/schema/index.js":
/*!*************************************!*\
  !*** ./src/graphql/schema/index.js ***!
  \*************************************/
/*! exports provided: default, query, mutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return schema; });\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries */ \"./src/graphql/schema/queries/index.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return _queries__WEBPACK_IMPORTED_MODULE_1__; });\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ \"./src/graphql/schema/mutations/index.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mutations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"mutation\", function() { return _mutations__WEBPACK_IMPORTED_MODULE_2__; });\n/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptions */ \"./src/graphql/schema/subscriptions/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.js\");\n\n\n\n\n\nconst schema = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLSchema\"]({\n  query: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"hasKeyObj\"])(_queries__WEBPACK_IMPORTED_MODULE_1__) ? new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n    name: 'Query',\n    fields: _queries__WEBPACK_IMPORTED_MODULE_1__\n  }) : undefined,\n  mutation: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"hasKeyObj\"])(_mutations__WEBPACK_IMPORTED_MODULE_2__) ? new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n    name: 'Mutation',\n    fields: _mutations__WEBPACK_IMPORTED_MODULE_2__\n  }) : undefined,\n  subscription: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"hasKeyObj\"])(_subscriptions__WEBPACK_IMPORTED_MODULE_3__) ? new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n    name: 'Subscription',\n    fields: _subscriptions__WEBPACK_IMPORTED_MODULE_3__\n  }) : undefined\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zY2hlbWEvaW5kZXguanM/YWM1NiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJHcmFwaFFMU2NoZW1hIiwicXVlcnkiLCJoYXNLZXlPYmoiLCJxdWVyaWVzIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJuYW1lIiwiZmllbGRzIiwidW5kZWZpbmVkIiwibXV0YXRpb24iLCJtdXRhdGlvbnMiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxxREFBSixDQUFrQjtBQUMvQkMsT0FBSyxFQUFFQywwREFBUyxDQUFDQyxxQ0FBRCxDQUFULEdBQ0gsSUFBSUMseURBQUosQ0FBc0I7QUFDdEJDLFFBQUksRUFBRSxPQURnQjtBQUV0QkMsVUFBTSxFQUFFSCxxQ0FBT0E7QUFGTyxHQUF0QixDQURHLEdBS0hJLFNBTjJCO0FBTy9CQyxVQUFRLEVBQUVOLDBEQUFTLENBQUNPLHVDQUFELENBQVQsR0FDTixJQUFJTCx5REFBSixDQUFzQjtBQUN0QkMsUUFBSSxFQUFFLFVBRGdCO0FBRXRCQyxVQUFNLEVBQUVHLHVDQUFTQTtBQUZLLEdBQXRCLENBRE0sR0FLTkYsU0FaMkI7QUFhL0JHLGNBQVksRUFBRVIsMERBQVMsQ0FBQ1MsMkNBQUQsQ0FBVCxHQUNWLElBQUlQLHlEQUFKLENBQXNCO0FBQ3RCQyxRQUFJLEVBQUUsY0FEZ0I7QUFFdEJDLFVBQU0sRUFBRUssMkNBQWFBO0FBRkMsR0FBdEIsQ0FEVSxHQUtWSjtBQWxCMkIsQ0FBbEIsQ0FBZiIsImZpbGUiOiIuL3NyYy9ncmFwaHFsL3NjaGVtYS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTY2hlbWEsIEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSAnLi9xdWVyaWVzJztcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucyc7XG5pbXBvcnQgKiBhcyBzdWJzY3JpcHRpb25zIGZyb20gJy4vc3Vic2NyaXB0aW9ucyc7XG5cbmltcG9ydCB7IGhhc0tleU9iaiB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYSh7XG4gIHF1ZXJ5OiBoYXNLZXlPYmoocXVlcmllcylcbiAgICA/IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICBuYW1lOiAnUXVlcnknLFxuICAgICAgZmllbGRzOiBxdWVyaWVzXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZCxcbiAgbXV0YXRpb246IGhhc0tleU9iaihtdXRhdGlvbnMpXG4gICAgPyBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgbmFtZTogJ011dGF0aW9uJyxcbiAgICAgIGZpZWxkczogbXV0YXRpb25zXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZCxcbiAgc3Vic2NyaXB0aW9uOiBoYXNLZXlPYmooc3Vic2NyaXB0aW9ucylcbiAgICA/IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICBuYW1lOiAnU3Vic2NyaXB0aW9uJyxcbiAgICAgIGZpZWxkczogc3Vic2NyaXB0aW9uc1xuICAgIH0pXG4gICAgOiB1bmRlZmluZWRcbn0pO1xuXG5leHBvcnQgeyBzY2hlbWEgYXMgZGVmYXVsdCwgcXVlcmllcyBhcyBxdWVyeSwgbXV0YXRpb25zIGFzIG11dGF0aW9uIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/schema/index.js\n");

/***/ }),

/***/ "./src/graphql/schema/mutations/index.js":
/*!***********************************************!*\
  !*** ./src/graphql/schema/mutations/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9ncmFwaHFsL3NjaGVtYS9tdXRhdGlvbnMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/schema/mutations/index.js\n");

/***/ }),

/***/ "./src/graphql/schema/queries/hello.js":
/*!*********************************************!*\
  !*** ./src/graphql/schema/queries/hello.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pubsub */ \"./src/graphql/pubsub.js\");\n/* harmony import */ var _pubsub_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pubsub_constants */ \"./src/graphql/pubsub_constants.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n\n  resolve() {\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish(_pubsub_constants__WEBPACK_IMPORTED_MODULE_2__[\"HELLO\"], {\n      hello: 'Hello world at ' + Date.now()\n    });\n    return 'Hello world';\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zY2hlbWEvcXVlcmllcy9oZWxsby5qcz82ZGU0Il0sIm5hbWVzIjpbInR5cGUiLCJHcmFwaFFMU3RyaW5nIiwicmVzb2x2ZSIsInB1YnN1YiIsInB1Ymxpc2giLCJIRUxMTyIsImhlbGxvIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlO0FBQ2JBLE1BQUksRUFBRUMscURBRE87O0FBRWJDLFNBQU8sR0FBRztBQUNSQyxtREFBTSxDQUFDQyxPQUFQLENBQWVDLHVEQUFmLEVBQXNCO0FBQUVDLFdBQUssRUFBRSxvQkFBb0JDLElBQUksQ0FBQ0MsR0FBTDtBQUE3QixLQUF0QjtBQUNBLFdBQU8sYUFBUDtBQUNEOztBQUxZLENBQWYiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zY2hlbWEvcXVlcmllcy9oZWxsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTdHJpbmcgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi4vLi4vcHVic3ViJztcbmltcG9ydCB7IEhFTExPIH0gZnJvbSAnLi4vLi4vcHVic3ViX2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgcmVzb2x2ZSgpIHtcbiAgICBwdWJzdWIucHVibGlzaChIRUxMTywgeyBoZWxsbzogJ0hlbGxvIHdvcmxkIGF0ICcgKyBEYXRlLm5vdygpIH0pO1xuICAgIHJldHVybiAnSGVsbG8gd29ybGQnO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/schema/queries/hello.js\n");

/***/ }),

/***/ "./src/graphql/schema/queries/index.js":
/*!*********************************************!*\
  !*** ./src/graphql/schema/queries/index.js ***!
  \*********************************************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ \"./src/graphql/schema/queries/hello.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return _hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zY2hlbWEvcXVlcmllcy9pbmRleC5qcz8zNDYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zY2hlbWEvcXVlcmllcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWxsbyBmcm9tICcuL2hlbGxvJztcblxuZXhwb3J0IHsgaGVsbG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/schema/queries/index.js\n");

/***/ }),

/***/ "./src/graphql/schema/subscriptions/hello.js":
/*!***************************************************!*\
  !*** ./src/graphql/schema/subscriptions/hello.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pubsub */ \"./src/graphql/pubsub.js\");\n/* harmony import */ var _pubsub_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pubsub_constants */ \"./src/graphql/pubsub_constants.js\");\n\n\n // Uncomment here if you want test subscription\n\n/* setInterval(() => {\n  pubsub.publish(HELLO, { hello: 'Hello world at ' + Date.now() });\n}, 1000); */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n  // eslint-disable-next-line no-unused-vars\n  subscribe: (_, data, ctx) => _pubsub__WEBPACK_IMPORTED_MODULE_1__[\"default\"].asyncIterator(_pubsub_constants__WEBPACK_IMPORTED_MODULE_2__[\"HELLO\"])\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zY2hlbWEvc3Vic2NyaXB0aW9ucy9oZWxsby5qcz8wYzM3Il0sIm5hbWVzIjpbInR5cGUiLCJHcmFwaFFMU3RyaW5nIiwic3Vic2NyaWJlIiwiXyIsImRhdGEiLCJjdHgiLCJwdWJzdWIiLCJhc3luY0l0ZXJhdG9yIiwiSEVMTE8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7Ozs7QUFJZTtBQUNiQSxNQUFJLEVBQUVDLHFEQURPO0FBRWI7QUFDQUMsV0FBUyxFQUFFLENBQUNDLENBQUQsRUFBSUMsSUFBSixFQUFVQyxHQUFWLEtBQWtCQywrQ0FBTSxDQUFDQyxhQUFQLENBQXFCQyx1REFBckI7QUFIaEIsQ0FBZiIsImZpbGUiOiIuL3NyYy9ncmFwaHFsL3NjaGVtYS9zdWJzY3JpcHRpb25zL2hlbGxvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuLi8uLi9wdWJzdWInO1xuaW1wb3J0IHsgSEVMTE8gfSBmcm9tICcuLi8uLi9wdWJzdWJfY29uc3RhbnRzJztcblxuLy8gVW5jb21tZW50IGhlcmUgaWYgeW91IHdhbnQgdGVzdCBzdWJzY3JpcHRpb25cbi8qIHNldEludGVydmFsKCgpID0+IHtcbiAgcHVic3ViLnB1Ymxpc2goSEVMTE8sIHsgaGVsbG86ICdIZWxsbyB3b3JsZCBhdCAnICsgRGF0ZS5ub3coKSB9KTtcbn0sIDEwMDApOyAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzdWJzY3JpYmU6IChfLCBkYXRhLCBjdHgpID0+IHB1YnN1Yi5hc3luY0l0ZXJhdG9yKEhFTExPKVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/schema/subscriptions/hello.js\n");

/***/ }),

/***/ "./src/graphql/schema/subscriptions/index.js":
/*!***************************************************!*\
  !*** ./src/graphql/schema/subscriptions/index.js ***!
  \***************************************************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ \"./src/graphql/schema/subscriptions/hello.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return _hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zY2hlbWEvc3Vic2NyaXB0aW9ucy9pbmRleC5qcz9jNTkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zY2hlbWEvc3Vic2NyaXB0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWxsbyBmcm9tICcuL2hlbGxvJztcblxuZXhwb3J0IHsgaGVsbG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/schema/subscriptions/index.js\n");

/***/ }),

/***/ "./src/helpers/console.js":
/*!********************************!*\
  !*** ./src/helpers/console.js ***!
  \********************************/
/*! exports provided: log, warning, debug, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debug\", function() { return debug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony import */ var consolemd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! consolemd */ \"consolemd\");\n/* harmony import */ var consolemd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(consolemd__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst csl = type => (...args) => {\n  try {\n    consolemd__WEBPACK_IMPORTED_MODULE_0___default.a[type](...args);\n  } catch (e) {\n    args = args.map(arg => {\n      if (typeof arg === 'string') {\n        arg = arg.replace(/([!#()*]|green|yellow|blue|cyan|magento)/g, '');\n      }\n\n      return arg;\n    });\n    console.error('Error occured with module ConsoleMD');\n    console[type](...args);\n  }\n};\n\nconst log = csl('log');\nconst warning = csl('warning');\nconst debug = csl('debug');\nconst error = csl('error');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb25zb2xlLmpzPzBjY2EiXSwibmFtZXMiOlsiY3NsIiwidHlwZSIsImFyZ3MiLCJjb25zb2xlbWQiLCJlIiwibWFwIiwiYXJnIiwicmVwbGFjZSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIndhcm5pbmciLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUlDLElBQUQsSUFBVSxDQUFDLEdBQUdDLElBQUosS0FBYTtBQUNqQyxNQUFJO0FBQ0ZDLG9EQUFTLENBQUNGLElBQUQsQ0FBVCxDQUFnQixHQUFHQyxJQUFuQjtBQUNELEdBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVkYsUUFBSSxHQUFHQSxJQUFJLENBQUNHLEdBQUwsQ0FBVUMsR0FBRCxJQUFTO0FBQ3ZCLFVBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCQSxXQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLDJDQUFaLEVBQXlELEVBQXpELENBQU47QUFDRDs7QUFDRCxhQUFPRCxHQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUFFLFdBQU8sQ0FBQ0MsS0FBUixDQUFjLHFDQUFkO0FBQ0FELFdBQU8sQ0FBQ1AsSUFBRCxDQUFQLENBQWMsR0FBR0MsSUFBakI7QUFDRDtBQUNGLENBYkQ7O0FBZUEsTUFBTVEsR0FBRyxHQUFHVixHQUFHLENBQUMsS0FBRCxDQUFmO0FBQ0EsTUFBTVcsT0FBTyxHQUFHWCxHQUFHLENBQUMsU0FBRCxDQUFuQjtBQUNBLE1BQU1ZLEtBQUssR0FBR1osR0FBRyxDQUFDLE9BQUQsQ0FBakI7QUFDQSxNQUFNUyxLQUFLLEdBQUdULEdBQUcsQ0FBQyxPQUFELENBQWpCIiwiZmlsZSI6Ii4vc3JjL2hlbHBlcnMvY29uc29sZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zb2xlbWQgZnJvbSAnY29uc29sZW1kJztcblxuY29uc3QgY3NsID0gKHR5cGUpID0+ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZW1kW3R5cGVdKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYXJncyA9IGFyZ3MubWFwKChhcmcpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICBhcmcgPSBhcmcucmVwbGFjZSgvKFshIygpKl18Z3JlZW58eWVsbG93fGJsdWV8Y3lhbnxtYWdlbnRvKS9nLCAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH0pO1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgd2l0aCBtb2R1bGUgQ29uc29sZU1EJyk7XG4gICAgY29uc29sZVt0eXBlXSguLi5hcmdzKTtcbiAgfVxufTtcblxuY29uc3QgbG9nID0gY3NsKCdsb2cnKTtcbmNvbnN0IHdhcm5pbmcgPSBjc2woJ3dhcm5pbmcnKTtcbmNvbnN0IGRlYnVnID0gY3NsKCdkZWJ1ZycpO1xuY29uc3QgZXJyb3IgPSBjc2woJ2Vycm9yJyk7XG5cbmV4cG9ydCB7IGxvZywgd2FybmluZywgZGVidWcsIGVycm9yIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/console.js\n");

/***/ }),

/***/ "./src/helpers/db.js":
/*!***************************!*\
  !*** ./src/helpers/db.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dbHelpers; });\nclass dbHelpers {\n  getValue() {\n    return 'somevalue';\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kYi5qcz85ZWQ0Il0sIm5hbWVzIjpbImRiSGVscGVycyIsImdldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWUsTUFBTUEsU0FBTixDQUFnQjtBQUM3QkMsVUFBUSxHQUFHO0FBQ1QsV0FBTyxXQUFQO0FBQ0Q7O0FBSDRCIiwiZmlsZSI6Ii4vc3JjL2hlbHBlcnMvZGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYkhlbHBlcnMge1xuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gJ3NvbWV2YWx1ZSc7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/db.js\n");

/***/ }),

/***/ "./src/helpers/has-key-obj.js":
/*!************************************!*\
  !*** ./src/helpers/has-key-obj.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (obj => {\n  for (const key in obj) {\n    return true;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9oYXMta2V5LW9iai5qcz8wNTNiIl0sIm5hbWVzIjpbIm9iaiIsImtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZ0JBLGtFQUFELElBQVM7QUFDdEIsT0FBSyxNQUFNQyxHQUFYLElBQWtCRCxHQUFsQixFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRDtBQUNGLENBSkQiLCJmaWxlIjoiLi9zcmMvaGVscGVycy9oYXMta2V5LW9iai5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChvYmopID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/has-key-obj.js\n");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: hasKeyObj, keyGenerator, wsWrap, dbHelper, routePathsNormalizer, consolemd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _has_key_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-key-obj */ \"./src/helpers/has-key-obj.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasKeyObj\", function() { return _has_key_obj__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _key_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-generator */ \"./src/helpers/key-generator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keyGenerator\", function() { return _key_generator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ws */ \"./src/helpers/ws.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"wsWrap\", function() { return _ws__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ \"./src/helpers/db.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dbHelper\", function() { return _db__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _route_paths_normalizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-paths-normalizer */ \"./src/helpers/route-paths-normalizer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"routePathsNormalizer\", function() { return _route_paths_normalizer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./console */ \"./src/helpers/console.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"consolemd\", function() { return _console__WEBPACK_IMPORTED_MODULE_5__; });\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcz9jZTk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9oZWxwZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhc0tleU9iaiBmcm9tICcuL2hhcy1rZXktb2JqJztcbmltcG9ydCBrZXlHZW5lcmF0b3IgZnJvbSAnLi9rZXktZ2VuZXJhdG9yJztcbmltcG9ydCB3c1dyYXAgZnJvbSAnLi93cyc7XG5pbXBvcnQgZGJIZWxwZXIgZnJvbSAnLi9kYic7XG5pbXBvcnQgcm91dGVQYXRoc05vcm1hbGl6ZXIgZnJvbSAnLi9yb3V0ZS1wYXRocy1ub3JtYWxpemVyJztcbmltcG9ydCAqIGFzIGNvbnNvbGVtZCBmcm9tICcuL2NvbnNvbGUnO1xuXG5leHBvcnQge1xuICBoYXNLZXlPYmosXG4gIGtleUdlbmVyYXRvcixcbiAgd3NXcmFwLFxuICBkYkhlbHBlcixcbiAgcm91dGVQYXRoc05vcm1hbGl6ZXIsXG4gIGNvbnNvbGVtZFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/index.js\n");

/***/ }),

/***/ "./src/helpers/key-generator.js":
/*!**************************************!*\
  !*** ./src/helpers/key-generator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (req => req.headers['x-real-ip'] || // nginx\nreq.headers['cf-connecting-ip'] || // cloudflare at top\nreq.headers['x-client-ip'] || // apache\nreq.headers['x-forwarded-for'] || // if we trust to this, cloudflare\nreq.raw.ip);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9rZXktZ2VuZXJhdG9yLmpzP2ZmNzkiXSwibmFtZXMiOlsicmVxIiwiaGVhZGVycyIsInJhdyIsImlwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFnQkEsa0VBQUQsSUFDYkEsR0FBRyxDQUFDQyxPQUFKLENBQVksV0FBWixLQUE0QjtBQUM1QkQsR0FBRyxDQUFDQyxPQUFKLENBQVksa0JBQVosQ0FEQSxJQUNtQztBQUNuQ0QsR0FBRyxDQUFDQyxPQUFKLENBQVksYUFBWixDQUZBLElBRThCO0FBQzlCRCxHQUFHLENBQUNDLE9BQUosQ0FBWSxpQkFBWixDQUhBLElBR2tDO0FBQ2xDRCxHQUFHLENBQUNFLEdBQUosQ0FBUUMsRUFMViIsImZpbGUiOiIuL3NyYy9oZWxwZXJzL2tleS1nZW5lcmF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxKSA9PlxuICByZXEuaGVhZGVyc1sneC1yZWFsLWlwJ10gfHwgLy8gbmdpbnhcbiAgcmVxLmhlYWRlcnNbJ2NmLWNvbm5lY3RpbmctaXAnXSB8fCAvLyBjbG91ZGZsYXJlIGF0IHRvcFxuICByZXEuaGVhZGVyc1sneC1jbGllbnQtaXAnXSB8fCAvLyBhcGFjaGVcbiAgcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWZvciddIHx8IC8vIGlmIHdlIHRydXN0IHRvIHRoaXMsIGNsb3VkZmxhcmVcbiAgcmVxLnJhdy5pcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/key-generator.js\n");

/***/ }),

/***/ "./src/helpers/route-paths-normalizer.js":
/*!***********************************************!*\
  !*** ./src/helpers/route-paths-normalizer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n // Constants\n\nconst specialWebSocket = 'ws';\nconst fastifyMethods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', specialWebSocket]; // Utils\n\nconst pathKeyNormalizer = path => path.includes('{') ? path.replace(/\\{(.*)\\}/g, ':$1') : path;\n\nconst transformMiddlewares = (fastify, middlewares, hooks) => Array.isArray(hooks) ? hooks.map(key => typeof key === 'function' ? key : Array.isArray(key) ? middlewares[key[0]](fastify, ...key[1]) : middlewares[key].bind(fastify)) : typeof hooks === 'function' ? hooks : middlewares[hooks];\n\nconst mapTransforms = (fastify, middlewares, middlewareMap) => {\n  for (const key in middlewareMap) {\n    middlewareMap[key] = transformMiddlewares(fastify, middlewares, middlewareMap[key]);\n  }\n\n  return middlewareMap;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((middlewares, routes, specialRoutes = ['ws']) => async fastify => {\n  (function normalizeRoutes(path, appRoutes, route = false) {\n    if (appRoutes.normalized) {\n      return;\n    }\n\n    if (route && path) {\n      routes[path] = appRoutes;\n      return;\n    }\n\n    for (const key in appRoutes) {\n      const value = appRoutes[key];\n      const keysOfValue = value && Object.keys(value);\n      const normalisedKey = pathKeyNormalizer(key);\n\n      if (path === '/' && keysOfValue.every(key => fastifyMethods.includes(key.toLowerCase()))) {\n        for (const method in value) {\n          const routeCallback = value[method];\n          value[method] = typeof routeCallback === 'function' ? {\n            callback: routeCallback\n          } : routeCallback;\n        }\n\n        normalizeRoutes(path, value, true);\n      } else if (!path || path === '/' || key.startsWith('/')) {\n        normalizeRoutes(path + normalisedKey, value);\n        delete appRoutes[key];\n      } else if (keysOfValue && keysOfValue.every(key => fastifyMethods.includes(key.toLowerCase()))) {\n        const route = routes[path];\n        const normalisedValue = typeof value === 'function' ? {\n          callback: value\n        } : value;\n\n        if (route) {\n          route[key] = normalisedValue;\n        } else {\n          routes[path] = {\n            [key]: normalisedValue\n          };\n        }\n      } else {\n        _helpers__WEBPACK_IMPORTED_MODULE_0__[\"consolemd\"].error(`#red([*Server*]: The Schema of _*${path}*_ ` + 'is *missing*, please add schema!)');\n      }\n    }\n  })('/', routes, false); // This prevents from N+1 normalize\n\n\n  routes.normalized = true;\n\n  for (const path in routes) {\n    const route = routes[path];\n    const methods = Object.keys(route);\n\n    if (route) {\n      methods.forEach(method => {\n        const {\n          callback,\n          schema,\n          ...allHooks\n        } = route[method];\n\n        if (specialRoutes.includes(method)) {\n          fastify[method](path, callback);\n        } else {\n          fastify.route({\n            method: method.toUpperCase(),\n            url: path,\n            ...mapTransforms(fastify, middlewares, allHooks),\n            schema,\n            handler: callback\n          });\n        }\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yb3V0ZS1wYXRocy1ub3JtYWxpemVyLmpzPzQ0MDQiXSwibmFtZXMiOlsic3BlY2lhbFdlYlNvY2tldCIsImZhc3RpZnlNZXRob2RzIiwicGF0aEtleU5vcm1hbGl6ZXIiLCJwYXRoIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwidHJhbnNmb3JtTWlkZGxld2FyZXMiLCJmYXN0aWZ5IiwibWlkZGxld2FyZXMiLCJob29rcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImtleSIsImJpbmQiLCJtYXBUcmFuc2Zvcm1zIiwibWlkZGxld2FyZU1hcCIsInJvdXRlcyIsInNwZWNpYWxSb3V0ZXMiLCJub3JtYWxpemVSb3V0ZXMiLCJhcHBSb3V0ZXMiLCJyb3V0ZSIsIm5vcm1hbGl6ZWQiLCJ2YWx1ZSIsImtleXNPZlZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIm5vcm1hbGlzZWRLZXkiLCJldmVyeSIsInRvTG93ZXJDYXNlIiwibWV0aG9kIiwicm91dGVDYWxsYmFjayIsImNhbGxiYWNrIiwic3RhcnRzV2l0aCIsIm5vcm1hbGlzZWRWYWx1ZSIsImNvbnNvbGVtZCIsImVycm9yIiwibWV0aG9kcyIsImZvckVhY2giLCJzY2hlbWEiLCJhbGxIb29rcyIsInRvVXBwZXJDYXNlIiwidXJsIiwiaGFuZGxlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtDQUVBOztBQUNBLE1BQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLENBQ3JCLEtBRHFCLEVBRXJCLE1BRnFCLEVBR3JCLEtBSHFCLEVBSXJCLE9BSnFCLEVBS3JCLFFBTHFCLEVBTXJCLE1BTnFCLEVBT3JCLFNBUHFCLEVBUXJCRCxnQkFScUIsQ0FBdkIsQyxDQVdBOztBQUNBLE1BQU1FLGlCQUFpQixHQUFJQyxJQUFELElBQ3hCQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxHQUFkLElBQXFCRCxJQUFJLENBQUNFLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLEtBQTFCLENBQXJCLEdBQXdERixJQUQxRDs7QUFFQSxNQUFNRyxvQkFBb0IsR0FBRyxDQUFDQyxPQUFELEVBQVVDLFdBQVYsRUFBdUJDLEtBQXZCLEtBQzNCQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxJQUNJQSxLQUFLLENBQUNHLEdBQU4sQ0FBV0MsR0FBRCxJQUNWLE9BQU9BLEdBQVAsS0FBZSxVQUFmLEdBQ0lBLEdBREosR0FFSUgsS0FBSyxDQUFDQyxPQUFOLENBQWNFLEdBQWQsSUFDRUwsV0FBVyxDQUFDSyxHQUFHLENBQUMsQ0FBRCxDQUFKLENBQVgsQ0FBb0JOLE9BQXBCLEVBQTZCLEdBQUdNLEdBQUcsQ0FBQyxDQUFELENBQW5DLENBREYsR0FFRUwsV0FBVyxDQUFDSyxHQUFELENBQVgsQ0FBaUJDLElBQWpCLENBQXNCUCxPQUF0QixDQUxOLENBREosR0FRSSxPQUFPRSxLQUFQLEtBQWlCLFVBQWpCLEdBQ0VBLEtBREYsR0FFRUQsV0FBVyxDQUFDQyxLQUFELENBWG5COztBQVlBLE1BQU1NLGFBQWEsR0FBRyxDQUFDUixPQUFELEVBQVVDLFdBQVYsRUFBdUJRLGFBQXZCLEtBQXlDO0FBQzdELE9BQUssTUFBTUgsR0FBWCxJQUFrQkcsYUFBbEIsRUFBaUM7QUFDL0JBLGlCQUFhLENBQUNILEdBQUQsQ0FBYixHQUFxQlAsb0JBQW9CLENBQ3ZDQyxPQUR1QyxFQUV2Q0MsV0FGdUMsRUFHdkNRLGFBQWEsQ0FBQ0gsR0FBRCxDQUgwQixDQUF6QztBQUtEOztBQUNELFNBQU9HLGFBQVA7QUFDRCxDQVREOztBQVdlLGdFQUFDUixXQUFELEVBQWNTLE1BQWQsRUFBc0JDLGFBQWEsR0FBRyxDQUFDLElBQUQsQ0FBdEMsS0FBaUQsTUFDOURYLE9BRDhELElBRTNEO0FBQ0gsR0FBQyxTQUFTWSxlQUFULENBQXlCaEIsSUFBekIsRUFBK0JpQixTQUEvQixFQUEwQ0MsS0FBSyxHQUFHLEtBQWxELEVBQXlEO0FBQ3hELFFBQUlELFNBQVMsQ0FBQ0UsVUFBZCxFQUEwQjtBQUN4QjtBQUNEOztBQUNELFFBQUlELEtBQUssSUFBSWxCLElBQWIsRUFBbUI7QUFDakJjLFlBQU0sQ0FBQ2QsSUFBRCxDQUFOLEdBQWVpQixTQUFmO0FBQ0E7QUFDRDs7QUFDRCxTQUFLLE1BQU1QLEdBQVgsSUFBa0JPLFNBQWxCLEVBQTZCO0FBQzNCLFlBQU1HLEtBQUssR0FBR0gsU0FBUyxDQUFDUCxHQUFELENBQXZCO0FBQ0EsWUFBTVcsV0FBVyxHQUFHRCxLQUFLLElBQUlFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFaLENBQTdCO0FBQ0EsWUFBTUksYUFBYSxHQUFHekIsaUJBQWlCLENBQUNXLEdBQUQsQ0FBdkM7O0FBRUEsVUFDRVYsSUFBSSxLQUFLLEdBQVQsSUFDQXFCLFdBQVcsQ0FBQ0ksS0FBWixDQUFtQmYsR0FBRCxJQUFTWixjQUFjLENBQUNHLFFBQWYsQ0FBd0JTLEdBQUcsQ0FBQ2dCLFdBQUosRUFBeEIsQ0FBM0IsQ0FGRixFQUdFO0FBQ0EsYUFBSyxNQUFNQyxNQUFYLElBQXFCUCxLQUFyQixFQUE0QjtBQUMxQixnQkFBTVEsYUFBYSxHQUFHUixLQUFLLENBQUNPLE1BQUQsQ0FBM0I7QUFDQVAsZUFBSyxDQUFDTyxNQUFELENBQUwsR0FDRSxPQUFPQyxhQUFQLEtBQXlCLFVBQXpCLEdBQ0k7QUFBRUMsb0JBQVEsRUFBRUQ7QUFBWixXQURKLEdBRUlBLGFBSE47QUFJRDs7QUFFRFosdUJBQWUsQ0FBQ2hCLElBQUQsRUFBT29CLEtBQVAsRUFBYyxJQUFkLENBQWY7QUFDRCxPQWJELE1BYU8sSUFBSSxDQUFDcEIsSUFBRCxJQUFTQSxJQUFJLEtBQUssR0FBbEIsSUFBeUJVLEdBQUcsQ0FBQ29CLFVBQUosQ0FBZSxHQUFmLENBQTdCLEVBQWtEO0FBQ3ZEZCx1QkFBZSxDQUFDaEIsSUFBSSxHQUFHd0IsYUFBUixFQUF1QkosS0FBdkIsQ0FBZjtBQUNBLGVBQU9ILFNBQVMsQ0FBQ1AsR0FBRCxDQUFoQjtBQUNELE9BSE0sTUFHQSxJQUNMVyxXQUFXLElBQ1hBLFdBQVcsQ0FBQ0ksS0FBWixDQUFtQmYsR0FBRCxJQUFTWixjQUFjLENBQUNHLFFBQWYsQ0FBd0JTLEdBQUcsQ0FBQ2dCLFdBQUosRUFBeEIsQ0FBM0IsQ0FGSyxFQUdMO0FBQ0EsY0FBTVIsS0FBSyxHQUFHSixNQUFNLENBQUNkLElBQUQsQ0FBcEI7QUFDQSxjQUFNK0IsZUFBZSxHQUNuQixPQUFPWCxLQUFQLEtBQWlCLFVBQWpCLEdBQThCO0FBQUVTLGtCQUFRLEVBQUVUO0FBQVosU0FBOUIsR0FBb0RBLEtBRHREOztBQUdBLFlBQUlGLEtBQUosRUFBVztBQUNUQSxlQUFLLENBQUNSLEdBQUQsQ0FBTCxHQUFhcUIsZUFBYjtBQUNELFNBRkQsTUFFTztBQUNMakIsZ0JBQU0sQ0FBQ2QsSUFBRCxDQUFOLEdBQWU7QUFDYixhQUFDVSxHQUFELEdBQU9xQjtBQURNLFdBQWY7QUFHRDtBQUNGLE9BZk0sTUFlQTtBQUNMQywwREFBUyxDQUFDQyxLQUFWLENBQ0csb0NBQW1DakMsSUFBSyxLQUF6QyxHQUNFLG1DQUZKO0FBSUQ7QUFDRjtBQUNGLEdBbkRELEVBbURHLEdBbkRILEVBbURRYyxNQW5EUixFQW1EZ0IsS0FuRGhCLEVBREcsQ0FzREg7OztBQUNBQSxRQUFNLENBQUNLLFVBQVAsR0FBb0IsSUFBcEI7O0FBRUEsT0FBSyxNQUFNbkIsSUFBWCxJQUFtQmMsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUksS0FBSyxHQUFHSixNQUFNLENBQUNkLElBQUQsQ0FBcEI7QUFDQSxVQUFNa0MsT0FBTyxHQUFHWixNQUFNLENBQUNDLElBQVAsQ0FBWUwsS0FBWixDQUFoQjs7QUFFQSxRQUFJQSxLQUFKLEVBQVc7QUFDVGdCLGFBQU8sQ0FBQ0MsT0FBUixDQUFpQlIsTUFBRCxJQUFZO0FBQzFCLGNBQU07QUFBRUUsa0JBQUY7QUFBWU8sZ0JBQVo7QUFBb0IsYUFBR0M7QUFBdkIsWUFBb0NuQixLQUFLLENBQUNTLE1BQUQsQ0FBL0M7O0FBRUEsWUFBSVosYUFBYSxDQUFDZCxRQUFkLENBQXVCMEIsTUFBdkIsQ0FBSixFQUFvQztBQUNsQ3ZCLGlCQUFPLENBQUN1QixNQUFELENBQVAsQ0FBZ0IzQixJQUFoQixFQUFzQjZCLFFBQXRCO0FBQ0QsU0FGRCxNQUVPO0FBQ0x6QixpQkFBTyxDQUFDYyxLQUFSLENBQWM7QUFDWlMsa0JBQU0sRUFBRUEsTUFBTSxDQUFDVyxXQUFQLEVBREk7QUFFWkMsZUFBRyxFQUFFdkMsSUFGTztBQUdaLGVBQUdZLGFBQWEsQ0FBQ1IsT0FBRCxFQUFVQyxXQUFWLEVBQXVCZ0MsUUFBdkIsQ0FISjtBQUlaRCxrQkFKWTtBQUtaSSxtQkFBTyxFQUFFWDtBQUxHLFdBQWQ7QUFPRDtBQUNGLE9BZEQ7QUFlRDtBQUNGO0FBQ0YsQ0FqRkQiLCJmaWxlIjoiLi9zcmMvaGVscGVycy9yb3V0ZS1wYXRocy1ub3JtYWxpemVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uc29sZW1kIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8vIENvbnN0YW50c1xuY29uc3Qgc3BlY2lhbFdlYlNvY2tldCA9ICd3cyc7XG5jb25zdCBmYXN0aWZ5TWV0aG9kcyA9IFtcbiAgJ2dldCcsXG4gICdwb3N0JyxcbiAgJ3B1dCcsXG4gICdwYXRjaCcsXG4gICdkZWxldGUnLFxuICAnaGVhZCcsXG4gICdvcHRpb25zJyxcbiAgc3BlY2lhbFdlYlNvY2tldFxuXTtcblxuLy8gVXRpbHNcbmNvbnN0IHBhdGhLZXlOb3JtYWxpemVyID0gKHBhdGgpID0+XG4gIHBhdGguaW5jbHVkZXMoJ3snKSA/IHBhdGgucmVwbGFjZSgvXFx7KC4qKVxcfS9nLCAnOiQxJykgOiBwYXRoO1xuY29uc3QgdHJhbnNmb3JtTWlkZGxld2FyZXMgPSAoZmFzdGlmeSwgbWlkZGxld2FyZXMsIGhvb2tzKSA9PlxuICBBcnJheS5pc0FycmF5KGhvb2tzKVxuICAgID8gaG9va3MubWFwKChrZXkpID0+XG4gICAgICB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8ga2V5XG4gICAgICAgIDogQXJyYXkuaXNBcnJheShrZXkpXG4gICAgICAgICAgPyBtaWRkbGV3YXJlc1trZXlbMF1dKGZhc3RpZnksIC4uLmtleVsxXSlcbiAgICAgICAgICA6IG1pZGRsZXdhcmVzW2tleV0uYmluZChmYXN0aWZ5KVxuICAgIClcbiAgICA6IHR5cGVvZiBob29rcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBob29rc1xuICAgICAgOiBtaWRkbGV3YXJlc1tob29rc107XG5jb25zdCBtYXBUcmFuc2Zvcm1zID0gKGZhc3RpZnksIG1pZGRsZXdhcmVzLCBtaWRkbGV3YXJlTWFwKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIG1pZGRsZXdhcmVNYXApIHtcbiAgICBtaWRkbGV3YXJlTWFwW2tleV0gPSB0cmFuc2Zvcm1NaWRkbGV3YXJlcyhcbiAgICAgIGZhc3RpZnksXG4gICAgICBtaWRkbGV3YXJlcyxcbiAgICAgIG1pZGRsZXdhcmVNYXBba2V5XVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG1pZGRsZXdhcmVNYXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAobWlkZGxld2FyZXMsIHJvdXRlcywgc3BlY2lhbFJvdXRlcyA9IFsnd3MnXSkgPT4gYXN5bmMgKFxuICBmYXN0aWZ5XG4pID0+IHtcbiAgKGZ1bmN0aW9uIG5vcm1hbGl6ZVJvdXRlcyhwYXRoLCBhcHBSb3V0ZXMsIHJvdXRlID0gZmFsc2UpIHtcbiAgICBpZiAoYXBwUm91dGVzLm5vcm1hbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJvdXRlICYmIHBhdGgpIHtcbiAgICAgIHJvdXRlc1twYXRoXSA9IGFwcFJvdXRlcztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXBwUm91dGVzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFwcFJvdXRlc1trZXldO1xuICAgICAgY29uc3Qga2V5c09mVmFsdWUgPSB2YWx1ZSAmJiBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICBjb25zdCBub3JtYWxpc2VkS2V5ID0gcGF0aEtleU5vcm1hbGl6ZXIoa2V5KTtcblxuICAgICAgaWYgKFxuICAgICAgICBwYXRoID09PSAnLycgJiZcbiAgICAgICAga2V5c09mVmFsdWUuZXZlcnkoKGtleSkgPT4gZmFzdGlmeU1ldGhvZHMuaW5jbHVkZXMoa2V5LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIGluIHZhbHVlKSB7XG4gICAgICAgICAgY29uc3Qgcm91dGVDYWxsYmFjayA9IHZhbHVlW21ldGhvZF07XG4gICAgICAgICAgdmFsdWVbbWV0aG9kXSA9XG4gICAgICAgICAgICB0eXBlb2Ygcm91dGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHsgY2FsbGJhY2s6IHJvdXRlQ2FsbGJhY2sgfVxuICAgICAgICAgICAgICA6IHJvdXRlQ2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBub3JtYWxpemVSb3V0ZXMocGF0aCwgdmFsdWUsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmICghcGF0aCB8fCBwYXRoID09PSAnLycgfHwga2V5LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBub3JtYWxpemVSb3V0ZXMocGF0aCArIG5vcm1hbGlzZWRLZXksIHZhbHVlKTtcbiAgICAgICAgZGVsZXRlIGFwcFJvdXRlc1trZXldO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5c09mVmFsdWUgJiZcbiAgICAgICAga2V5c09mVmFsdWUuZXZlcnkoKGtleSkgPT4gZmFzdGlmeU1ldGhvZHMuaW5jbHVkZXMoa2V5LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3BhdGhdO1xuICAgICAgICBjb25zdCBub3JtYWxpc2VkVmFsdWUgPVxuICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHsgY2FsbGJhY2s6IHZhbHVlIH0gOiB2YWx1ZTtcblxuICAgICAgICBpZiAocm91dGUpIHtcbiAgICAgICAgICByb3V0ZVtrZXldID0gbm9ybWFsaXNlZFZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlc1twYXRoXSA9IHtcbiAgICAgICAgICAgIFtrZXldOiBub3JtYWxpc2VkVmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlbWQuZXJyb3IoXG4gICAgICAgICAgYCNyZWQoWypTZXJ2ZXIqXTogVGhlIFNjaGVtYSBvZiBfKiR7cGF0aH0qXyBgICtcbiAgICAgICAgICAgICdpcyAqbWlzc2luZyosIHBsZWFzZSBhZGQgc2NoZW1hISknXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9KSgnLycsIHJvdXRlcywgZmFsc2UpO1xuXG4gIC8vIFRoaXMgcHJldmVudHMgZnJvbSBOKzEgbm9ybWFsaXplXG4gIHJvdXRlcy5ub3JtYWxpemVkID0gdHJ1ZTtcblxuICBmb3IgKGNvbnN0IHBhdGggaW4gcm91dGVzKSB7XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbcGF0aF07XG4gICAgY29uc3QgbWV0aG9kcyA9IE9iamVjdC5rZXlzKHJvdXRlKTtcblxuICAgIGlmIChyb3V0ZSkge1xuICAgICAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgICAgY29uc3QgeyBjYWxsYmFjaywgc2NoZW1hLCAuLi5hbGxIb29rcyB9ID0gcm91dGVbbWV0aG9kXTtcblxuICAgICAgICBpZiAoc3BlY2lhbFJvdXRlcy5pbmNsdWRlcyhtZXRob2QpKSB7XG4gICAgICAgICAgZmFzdGlmeVttZXRob2RdKHBhdGgsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYXN0aWZ5LnJvdXRlKHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICB1cmw6IHBhdGgsXG4gICAgICAgICAgICAuLi5tYXBUcmFuc2Zvcm1zKGZhc3RpZnksIG1pZGRsZXdhcmVzLCBhbGxIb29rcyksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICBoYW5kbGVyOiBjYWxsYmFja1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/route-paths-normalizer.js\n");

/***/ }),

/***/ "./src/helpers/ws.js":
/*!***************************!*\
  !*** ./src/helpers/ws.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dalisoft_ws_events_sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dalisoft/ws-events-sync */ \"@dalisoft/ws-events-sync\");\n/* harmony import */ var _dalisoft_ws_events_sync__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dalisoft_ws_events_sync__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dalisoft_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dalisoft/cookie */ \"@dalisoft/cookie\");\n/* harmony import */ var _dalisoft_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dalisoft_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((callback, wss, allowedOrigins, onlineClientsMap) => {\n  return (client, req) => {\n    const {\n      origin\n    } = req.headers;\n    client.clients = wss.clients;\n\n    if (!req.cookies) {\n      req.cookies = Object(_dalisoft_cookie__WEBPACK_IMPORTED_MODULE_1__[\"getFromHeaders\"])(req.headers);\n    }\n\n    if (_config__WEBPACK_IMPORTED_MODULE_2__[\"dev\"] || allowedOrigins.indexOf(origin) !== -1) {\n      return callback(new _dalisoft_ws_events_sync__WEBPACK_IMPORTED_MODULE_0__[\"Server\"](client, onlineClientsMap), req);\n    }\n\n    client.send(JSON.stringify({\n      error: true,\n      message: 'Not allowed by CORS'\n    }));\n    client.close();\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy93cy5qcz81YTI1Il0sIm5hbWVzIjpbImNhbGxiYWNrIiwid3NzIiwiYWxsb3dlZE9yaWdpbnMiLCJvbmxpbmVDbGllbnRzTWFwIiwiY2xpZW50IiwicmVxIiwib3JpZ2luIiwiaGVhZGVycyIsImNsaWVudHMiLCJjb29raWVzIiwiZ2V0RnJvbUhlYWRlcnMiLCJkZXYiLCJpbmRleE9mIiwiU2VydmVyIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsIm1lc3NhZ2UiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsZ0VBQUNBLFFBQUQsRUFBV0MsR0FBWCxFQUFnQkMsY0FBaEIsRUFBZ0NDLGdCQUFoQyxLQUFxRDtBQUNsRSxTQUFPLENBQUNDLE1BQUQsRUFBU0MsR0FBVCxLQUFpQjtBQUN0QixVQUFNO0FBQUVDO0FBQUYsUUFBYUQsR0FBRyxDQUFDRSxPQUF2QjtBQUNBSCxVQUFNLENBQUNJLE9BQVAsR0FBaUJQLEdBQUcsQ0FBQ08sT0FBckI7O0FBRUEsUUFBSSxDQUFDSCxHQUFHLENBQUNJLE9BQVQsRUFBa0I7QUFDaEJKLFNBQUcsQ0FBQ0ksT0FBSixHQUFjQyx1RUFBYyxDQUFDTCxHQUFHLENBQUNFLE9BQUwsQ0FBNUI7QUFDRDs7QUFDRCxRQUFJSSwyQ0FBRyxJQUFJVCxjQUFjLENBQUNVLE9BQWYsQ0FBdUJOLE1BQXZCLE1BQW1DLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQsYUFBT04sUUFBUSxDQUFDLElBQUlhLCtEQUFKLENBQVdULE1BQVgsRUFBbUJELGdCQUFuQixDQUFELEVBQXVDRSxHQUF2QyxDQUFmO0FBQ0Q7O0FBQ0RELFVBQU0sQ0FBQ1UsSUFBUCxDQUNFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxXQUFLLEVBQUUsSUFBVDtBQUFlQyxhQUFPLEVBQUU7QUFBeEIsS0FBZixDQURGO0FBR0FkLFVBQU0sQ0FBQ2UsS0FBUDtBQUNELEdBZEQ7QUFlRCxDQWhCRCIsImZpbGUiOiIuL3NyYy9oZWxwZXJzL3dzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnQGRhbGlzb2Z0L3dzLWV2ZW50cy1zeW5jJztcbmltcG9ydCB7IGdldEZyb21IZWFkZXJzIH0gZnJvbSAnQGRhbGlzb2Z0L2Nvb2tpZSc7XG5pbXBvcnQgeyBkZXYgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCAoY2FsbGJhY2ssIHdzcywgYWxsb3dlZE9yaWdpbnMsIG9ubGluZUNsaWVudHNNYXApID0+IHtcbiAgcmV0dXJuIChjbGllbnQsIHJlcSkgPT4ge1xuICAgIGNvbnN0IHsgb3JpZ2luIH0gPSByZXEuaGVhZGVycztcbiAgICBjbGllbnQuY2xpZW50cyA9IHdzcy5jbGllbnRzO1xuXG4gICAgaWYgKCFyZXEuY29va2llcykge1xuICAgICAgcmVxLmNvb2tpZXMgPSBnZXRGcm9tSGVhZGVycyhyZXEuaGVhZGVycyk7XG4gICAgfVxuICAgIGlmIChkZXYgfHwgYWxsb3dlZE9yaWdpbnMuaW5kZXhPZihvcmlnaW4pICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBTZXJ2ZXIoY2xpZW50LCBvbmxpbmVDbGllbnRzTWFwKSwgcmVxKTtcbiAgICB9XG4gICAgY2xpZW50LnNlbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiB0cnVlLCBtZXNzYWdlOiAnTm90IGFsbG93ZWQgYnkgQ09SUycgfSlcbiAgICApO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/ws.js\n");

/***/ }),

/***/ "./src/instance.js":
/*!*************************!*\
  !*** ./src/instance.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ \"./src/env.js\");\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fastify */ \"fastify\");\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-config */ \"./src/server-config.js\");\n/* harmony import */ var _fastify_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fastify-plugins */ \"./src/fastify-plugins/index.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors */ \"./src/errors/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares */ \"./src/middlewares/index.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverFactory => {\n  if (serverFactory) {\n    _server_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].serverFactory = serverFactory;\n  }\n\n  const config = {};\n  const app = fastify__WEBPACK_IMPORTED_MODULE_1___default()(_server_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  app.register(_errors__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  if (process.env.NETLIFY_ENV) {\n    if (_config__WEBPACK_IMPORTED_MODULE_5__[\"dev\"]) {\n      // Netlify Functions DEV-mode compatibility\n      config.prefix = 'server';\n      app.register(_fastify_plugins__WEBPACK_IMPORTED_MODULE_3__[\"default\"], config);\n      app.register(Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[\"routePathsNormalizer\"])(_middlewares__WEBPACK_IMPORTED_MODULE_8__, _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), config);\n    } else {\n      // Netlify Functions PROD-mode compatibility\n      config.prefix = '.netlify/functions/server';\n      app.register(_fastify_plugins__WEBPACK_IMPORTED_MODULE_3__[\"default\"], config);\n      app.register(Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[\"routePathsNormalizer\"])(_middlewares__WEBPACK_IMPORTED_MODULE_8__, _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), config);\n    }\n  } else {\n    app.register(_fastify_plugins__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).register(Object(_helpers__WEBPACK_IMPORTED_MODULE_6__[\"routePathsNormalizer\"])(_middlewares__WEBPACK_IMPORTED_MODULE_8__, _routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]));\n  }\n\n  return app;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5zdGFuY2UuanM/MjhjOCJdLCJuYW1lcyI6WyJzZXJ2ZXJGYWN0b3J5IiwiZmFzdGlmeUNvbmZpZyIsImNvbmZpZyIsImFwcCIsImZhc3RpZnkiLCJyZWdpc3RlciIsImZhc3RpZnlIYW5kbGVyIiwicHJvY2VzcyIsImVudiIsIk5FVExJRllfRU5WIiwiZGV2IiwicHJlZml4IiwiZmFzdGlmeVBsdWdpbnMiLCJyb3V0ZVBhdGhzTm9ybWFsaXplciIsImFwcE1pZGRsZXdhcmVzIiwiYXBwUm91dGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWdCQSw0RUFBRCxJQUFtQjtBQUNoQyxNQUFJQSxhQUFKLEVBQW1CO0FBQ2pCQywwREFBYSxDQUFDRCxhQUFkLEdBQThCQSxhQUE5QjtBQUNEOztBQUNELFFBQU1FLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyw4Q0FBTyxDQUFDSCxzREFBRCxDQUFuQjtBQUVBRSxLQUFHLENBQUNFLFFBQUosQ0FBYUMsK0NBQWI7O0FBRUEsTUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWhCLEVBQTZCO0FBQzNCLFFBQUlDLDJDQUFKLEVBQVM7QUFDUDtBQUNBUixZQUFNLENBQUNTLE1BQVAsR0FBZ0IsUUFBaEI7QUFDQVIsU0FBRyxDQUFDRSxRQUFKLENBQWFPLHdEQUFiLEVBQTZCVixNQUE3QjtBQUNBQyxTQUFHLENBQUNFLFFBQUosQ0FBYVEscUVBQW9CLENBQUNDLHlDQUFELEVBQWlCQywrQ0FBakIsQ0FBakMsRUFBOERiLE1BQTlEO0FBQ0QsS0FMRCxNQUtPO0FBQ0w7QUFDQUEsWUFBTSxDQUFDUyxNQUFQLEdBQWdCLDJCQUFoQjtBQUNBUixTQUFHLENBQUNFLFFBQUosQ0FBYU8sd0RBQWIsRUFBNkJWLE1BQTdCO0FBQ0FDLFNBQUcsQ0FBQ0UsUUFBSixDQUFhUSxxRUFBb0IsQ0FBQ0MseUNBQUQsRUFBaUJDLCtDQUFqQixDQUFqQyxFQUE4RGIsTUFBOUQ7QUFDRDtBQUNGLEdBWkQsTUFZTztBQUNMQyxPQUFHLENBQ0FFLFFBREgsQ0FDWU8sd0RBRFosRUFFR1AsUUFGSCxDQUVZUSxxRUFBb0IsQ0FBQ0MseUNBQUQsRUFBaUJDLCtDQUFqQixDQUZoQztBQUdEOztBQUVELFNBQU9aLEdBQVA7QUFDRCxDQTVCRCIsImZpbGUiOiIuL3NyYy9pbnN0YW5jZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9lbnYnO1xuaW1wb3J0IGZhc3RpZnkgZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgZmFzdGlmeUNvbmZpZyBmcm9tICcuL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IGZhc3RpZnlQbHVnaW5zIGZyb20gJy4vZmFzdGlmeS1wbHVnaW5zJztcbmltcG9ydCBmYXN0aWZ5SGFuZGxlciBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBkZXYgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmltcG9ydCB7IHJvdXRlUGF0aHNOb3JtYWxpemVyIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuaW1wb3J0IGFwcFJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgKiBhcyBhcHBNaWRkbGV3YXJlcyBmcm9tICcuL21pZGRsZXdhcmVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHNlcnZlckZhY3RvcnkpID0+IHtcbiAgaWYgKHNlcnZlckZhY3RvcnkpIHtcbiAgICBmYXN0aWZ5Q29uZmlnLnNlcnZlckZhY3RvcnkgPSBzZXJ2ZXJGYWN0b3J5O1xuICB9XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuICBjb25zdCBhcHAgPSBmYXN0aWZ5KGZhc3RpZnlDb25maWcpO1xuXG4gIGFwcC5yZWdpc3RlcihmYXN0aWZ5SGFuZGxlcik7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5FVExJRllfRU5WKSB7XG4gICAgaWYgKGRldikge1xuICAgICAgLy8gTmV0bGlmeSBGdW5jdGlvbnMgREVWLW1vZGUgY29tcGF0aWJpbGl0eVxuICAgICAgY29uZmlnLnByZWZpeCA9ICdzZXJ2ZXInO1xuICAgICAgYXBwLnJlZ2lzdGVyKGZhc3RpZnlQbHVnaW5zLCBjb25maWcpO1xuICAgICAgYXBwLnJlZ2lzdGVyKHJvdXRlUGF0aHNOb3JtYWxpemVyKGFwcE1pZGRsZXdhcmVzLCBhcHBSb3V0ZXMpLCBjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXRsaWZ5IEZ1bmN0aW9ucyBQUk9ELW1vZGUgY29tcGF0aWJpbGl0eVxuICAgICAgY29uZmlnLnByZWZpeCA9ICcubmV0bGlmeS9mdW5jdGlvbnMvc2VydmVyJztcbiAgICAgIGFwcC5yZWdpc3RlcihmYXN0aWZ5UGx1Z2lucywgY29uZmlnKTtcbiAgICAgIGFwcC5yZWdpc3Rlcihyb3V0ZVBhdGhzTm9ybWFsaXplcihhcHBNaWRkbGV3YXJlcywgYXBwUm91dGVzKSwgY29uZmlnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYXBwXG4gICAgICAucmVnaXN0ZXIoZmFzdGlmeVBsdWdpbnMpXG4gICAgICAucmVnaXN0ZXIocm91dGVQYXRoc05vcm1hbGl6ZXIoYXBwTWlkZGxld2FyZXMsIGFwcFJvdXRlcykpO1xuICB9XG5cbiAgcmV0dXJuIGFwcDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/instance.js\n");

/***/ }),

/***/ "./src/middlewares/index.js":
/*!**********************************!*\
  !*** ./src/middlewares/index.js ***!
  \**********************************/
/*! exports provided: jwtSign, jwtVerify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jwt_sign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt-sign */ \"./src/middlewares/jwt-sign.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"jwtSign\", function() { return _jwt_sign__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _jwt_verify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt-verify */ \"./src/middlewares/jwt-verify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"jwtVerify\", function() { return _jwt_verify__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvaW5kZXguanM/MDViYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0U2lnbiBmcm9tICcuL2p3dC1zaWduJztcbmltcG9ydCBqd3RWZXJpZnkgZnJvbSAnLi9qd3QtdmVyaWZ5JztcblxuZXhwb3J0IHsgand0U2lnbiwgand0VmVyaWZ5IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/middlewares/index.js\n");

/***/ }),

/***/ "./src/middlewares/jwt-sign.js":
/*!*************************************!*\
  !*** ./src/middlewares/jwt-sign.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.pick */ \"lodash.pick\");\n/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst secureFields = ['email', 'role', 'clientSignature'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, _res, payload, next) {\n  if (payload.status === 'success') {\n    const clientSignature = crypto__WEBPACK_IMPORTED_MODULE_3___default.a.createHash('sha256').update(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyGenerator\"])(req)).digest('hex');\n    const accessToken = await this.jwt.sign(lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()({ ...payload,\n      clientSignature\n    }, secureFields), _config__WEBPACK_IMPORTED_MODULE_1__[\"jwtSign\"].secret, _config__WEBPACK_IMPORTED_MODULE_1__[\"jwt\"]);\n    payload.accessToken = accessToken;\n  }\n\n  next(null, payload);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvand0LXNpZ24uanM/NmJjOSJdLCJuYW1lcyI6WyJzZWN1cmVGaWVsZHMiLCJyZXEiLCJfcmVzIiwicGF5bG9hZCIsIm5leHQiLCJzdGF0dXMiLCJjbGllbnRTaWduYXR1cmUiLCJjcnlwdG8iLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwia2V5R2VuZXJhdG9yIiwiZGlnZXN0IiwiYWNjZXNzVG9rZW4iLCJqd3QiLCJzaWduIiwicGljayIsImp3dFNpZ24iLCJzZWNyZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixpQkFBbEIsQ0FBckI7QUFDZSwrRUFBZUMsR0FBZixFQUFvQkMsSUFBcEIsRUFBMEJDLE9BQTFCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUN0RCxNQUFJRCxPQUFPLENBQUNFLE1BQVIsS0FBbUIsU0FBdkIsRUFBa0M7QUFDaEMsVUFBTUMsZUFBZSxHQUFHQyw2Q0FBTSxDQUMzQkMsVUFEcUIsQ0FDVixRQURVLEVBRXJCQyxNQUZxQixDQUVkQyw2REFBWSxDQUFDVCxHQUFELENBRkUsRUFHckJVLE1BSHFCLENBR2QsS0FIYyxDQUF4QjtBQUtBLFVBQU1DLFdBQVcsR0FBRyxNQUFNLEtBQUtDLEdBQUwsQ0FBU0MsSUFBVCxDQUN4QkMsa0RBQUksQ0FBQyxFQUFFLEdBQUdaLE9BQUw7QUFBY0c7QUFBZCxLQUFELEVBQWtDTixZQUFsQyxDQURvQixFQUV4QmdCLCtDQUFPLENBQUNDLE1BRmdCLEVBR3hCSiwyQ0FId0IsQ0FBMUI7QUFNQVYsV0FBTyxDQUFDUyxXQUFSLEdBQXNCQSxXQUF0QjtBQUNEOztBQUNEUixNQUFJLENBQUMsSUFBRCxFQUFPRCxPQUFQLENBQUo7QUFDRCxDIiwiZmlsZSI6Ii4vc3JjL21pZGRsZXdhcmVzL2p3dC1zaWduLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuaW1wb3J0IHsgand0LCBqd3RTaWduIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGtleUdlbmVyYXRvciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5jb25zdCBzZWN1cmVGaWVsZHMgPSBbJ2VtYWlsJywgJ3JvbGUnLCAnY2xpZW50U2lnbmF0dXJlJ107XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihyZXEsIF9yZXMsIHBheWxvYWQsIG5leHQpIHtcbiAgaWYgKHBheWxvYWQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBjb25zdCBjbGllbnRTaWduYXR1cmUgPSBjcnlwdG9cbiAgICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxuICAgICAgLnVwZGF0ZShrZXlHZW5lcmF0b3IocmVxKSlcbiAgICAgIC5kaWdlc3QoJ2hleCcpO1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLmp3dC5zaWduKFxuICAgICAgcGljayh7IC4uLnBheWxvYWQsIGNsaWVudFNpZ25hdHVyZSB9LCBzZWN1cmVGaWVsZHMpLFxuICAgICAgand0U2lnbi5zZWNyZXQsXG4gICAgICBqd3RcbiAgICApO1xuXG4gICAgcGF5bG9hZC5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICB9XG4gIG5leHQobnVsbCwgcGF5bG9hZCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/middlewares/jwt-sign.js\n");

/***/ }),

/***/ "./src/middlewares/jwt-verify.js":
/*!***************************************!*\
  !*** ./src/middlewares/jwt-verify.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req) {\n  const {\n    headers\n  } = req;\n\n  if (!headers.authorization) {\n    const err = new Error('');\n    err.statusCode = 401;\n    err.code = 'UnauthorizedAccess';\n    throw err;\n  } else {\n    const verifyData = await req.jwtVerify().catch(() => null);\n\n    if (verifyData) {\n      const clientSignature = crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHash('sha256').update(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"keyGenerator\"])(req)).digest('hex');\n\n      if (verifyData.clientSignature !== clientSignature) {\n        const err = new Error('');\n        err.statusCode = 401;\n        err.code = 'UnauthorizedDeviceAccess';\n        throw err;\n      } else {\n        return verifyData;\n      }\n    }\n\n    const err = new Error('');\n    err.statusCode = 403;\n    err.code = 'TokenExpiredOrInvalid';\n    throw err;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZXMvand0LXZlcmlmeS5qcz83MWQ4Il0sIm5hbWVzIjpbInJlcSIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZXJyIiwiRXJyb3IiLCJzdGF0dXNDb2RlIiwiY29kZSIsInZlcmlmeURhdGEiLCJqd3RWZXJpZnkiLCJjYXRjaCIsImNsaWVudFNpZ25hdHVyZSIsImNyeXB0byIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJrZXlHZW5lcmF0b3IiLCJkaWdlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLCtFQUFlQSxHQUFmLEVBQW9CO0FBQ2pDLFFBQU07QUFBRUM7QUFBRixNQUFjRCxHQUFwQjs7QUFFQSxNQUFJLENBQUNDLE9BQU8sQ0FBQ0MsYUFBYixFQUE0QjtBQUMxQixVQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsQ0FBWjtBQUNBRCxPQUFHLENBQUNFLFVBQUosR0FBaUIsR0FBakI7QUFDQUYsT0FBRyxDQUFDRyxJQUFKLEdBQVcsb0JBQVg7QUFDQSxVQUFNSCxHQUFOO0FBQ0QsR0FMRCxNQUtPO0FBQ0wsVUFBTUksVUFBVSxHQUFHLE1BQU1QLEdBQUcsQ0FBQ1EsU0FBSixHQUFnQkMsS0FBaEIsQ0FBc0IsTUFBTSxJQUE1QixDQUF6Qjs7QUFFQSxRQUFJRixVQUFKLEVBQWdCO0FBQ2QsWUFBTUcsZUFBZSxHQUFHQyw2Q0FBTSxDQUMzQkMsVUFEcUIsQ0FDVixRQURVLEVBRXJCQyxNQUZxQixDQUVkQyw2REFBWSxDQUFDZCxHQUFELENBRkUsRUFHckJlLE1BSHFCLENBR2QsS0FIYyxDQUF4Qjs7QUFLQSxVQUFJUixVQUFVLENBQUNHLGVBQVgsS0FBK0JBLGVBQW5DLEVBQW9EO0FBQ2xELGNBQU1QLEdBQUcsR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixDQUFaO0FBQ0FELFdBQUcsQ0FBQ0UsVUFBSixHQUFpQixHQUFqQjtBQUNBRixXQUFHLENBQUNHLElBQUosR0FBVywwQkFBWDtBQUNBLGNBQU1ILEdBQU47QUFDRCxPQUxELE1BS087QUFDTCxlQUFPSSxVQUFQO0FBQ0Q7QUFDRjs7QUFDRCxVQUFNSixHQUFHLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsQ0FBWjtBQUNBRCxPQUFHLENBQUNFLFVBQUosR0FBaUIsR0FBakI7QUFDQUYsT0FBRyxDQUFDRyxJQUFKLEdBQVcsdUJBQVg7QUFDQSxVQUFNSCxHQUFOO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Ii4vc3JjL21pZGRsZXdhcmVzL2p3dC12ZXJpZnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXlHZW5lcmF0b3IgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24ocmVxKSB7XG4gIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVxO1xuXG4gIGlmICghaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCcnKTtcbiAgICBlcnIuc3RhdHVzQ29kZSA9IDQwMTtcbiAgICBlcnIuY29kZSA9ICdVbmF1dGhvcml6ZWRBY2Nlc3MnO1xuICAgIHRocm93IGVycjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2ZXJpZnlEYXRhID0gYXdhaXQgcmVxLmp3dFZlcmlmeSgpLmNhdGNoKCgpID0+IG51bGwpO1xuXG4gICAgaWYgKHZlcmlmeURhdGEpIHtcbiAgICAgIGNvbnN0IGNsaWVudFNpZ25hdHVyZSA9IGNyeXB0b1xuICAgICAgICAuY3JlYXRlSGFzaCgnc2hhMjU2JylcbiAgICAgICAgLnVwZGF0ZShrZXlHZW5lcmF0b3IocmVxKSlcbiAgICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgICAgIGlmICh2ZXJpZnlEYXRhLmNsaWVudFNpZ25hdHVyZSAhPT0gY2xpZW50U2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignJyk7XG4gICAgICAgIGVyci5zdGF0dXNDb2RlID0gNDAxO1xuICAgICAgICBlcnIuY29kZSA9ICdVbmF1dGhvcml6ZWREZXZpY2VBY2Nlc3MnO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmVyaWZ5RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCcnKTtcbiAgICBlcnIuc3RhdHVzQ29kZSA9IDQwMztcbiAgICBlcnIuY29kZSA9ICdUb2tlbkV4cGlyZWRPckludmFsaWQnO1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middlewares/jwt-verify.js\n");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _route1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route1 */ \"./src/routes/route1.js\");\n\nconst app = {\n  '/': {\n    get: async () => ({\n      status: 'success'\n    })\n  },\n  route1: _route1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LmpzP2UyNmMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0Iiwic3RhdHVzIiwicm91dGUxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxHQUFHLEdBQUc7QUFDVixPQUFLO0FBQ0hDLE9BQUcsRUFBRSxhQUFhO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWI7QUFERixHQURLO0FBSVZDLHlEQUFNQTtBQUpJLENBQVo7QUFPZUgsa0VBQWYiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlMSBmcm9tICcuL3JvdXRlMSc7XG5cbmNvbnN0IGFwcCA9IHtcbiAgJy8nOiB7XG4gICAgZ2V0OiBhc3luYyAoKSA9PiAoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KVxuICB9LFxuICByb3V0ZTFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/index.js\n");

/***/ }),

/***/ "./src/routes/route1.js":
/*!******************************!*\
  !*** ./src/routes/route1.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/controllers/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: async () => 'hello',\n  '/hello': {\n    get: async req => new _controllers__WEBPACK_IMPORTED_MODULE_0__[\"Controller1\"](req).Hello()\n  },\n  '/get': {\n    '/:id': {\n      get: async req => 'get called on /get/' + req.params.id\n    }\n  },\n  '/post': {\n    '/profile': {\n      get: async () => 'get called on /post/profile',\n      '/:id': {\n        post: async req => 'post on /post/profile/' + req.params.id,\n        '/verify': {\n          '/{id}': {\n            put: async req => 'put on /post/profile/:id/verify/' + req.params.id\n          },\n          post: async req => 'post on /post/profile/' + req.params.id + '/verify'\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlMS5qcz9mZWJmIl0sIm5hbWVzIjpbImdldCIsInJlcSIsIkNvbnRyb2xsZXIxIiwiSGVsbG8iLCJwYXJhbXMiLCJpZCIsInBvc3QiLCJwdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlO0FBQ2JBLEtBQUcsRUFBRSxZQUFZLE9BREo7QUFFYixZQUFVO0FBQ1JBLE9BQUcsRUFBRSxNQUFPQyxHQUFQLElBQWUsSUFBSUMsd0RBQUosQ0FBZ0JELEdBQWhCLEVBQXFCRSxLQUFyQjtBQURaLEdBRkc7QUFLYixVQUFRO0FBQ04sWUFBUTtBQUNOSCxTQUFHLEVBQUUsTUFBT0MsR0FBUCxJQUFlLHdCQUF3QkEsR0FBRyxDQUFDRyxNQUFKLENBQVdDO0FBRGpEO0FBREYsR0FMSztBQVViLFdBQVM7QUFDUCxnQkFBWTtBQUNWTCxTQUFHLEVBQUUsWUFBWSw2QkFEUDtBQUVWLGNBQVE7QUFDTk0sWUFBSSxFQUFFLE1BQU9MLEdBQVAsSUFBZSwyQkFBMkJBLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxFQURyRDtBQUVOLG1CQUFXO0FBQ1QsbUJBQVM7QUFDUEUsZUFBRyxFQUFFLE1BQU9OLEdBQVAsSUFDSCxxQ0FBcUNBLEdBQUcsQ0FBQ0csTUFBSixDQUFXQztBQUYzQyxXQURBO0FBS1RDLGNBQUksRUFBRSxNQUFPTCxHQUFQLElBQ0osMkJBQTJCQSxHQUFHLENBQUNHLE1BQUosQ0FBV0MsRUFBdEMsR0FBMkM7QUFOcEM7QUFGTDtBQUZFO0FBREw7QUFWSSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9yb3V0ZTEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyMSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQ6IGFzeW5jICgpID0+ICdoZWxsbycsXG4gICcvaGVsbG8nOiB7XG4gICAgZ2V0OiBhc3luYyAocmVxKSA9PiBuZXcgQ29udHJvbGxlcjEocmVxKS5IZWxsbygpXG4gIH0sXG4gICcvZ2V0Jzoge1xuICAgICcvOmlkJzoge1xuICAgICAgZ2V0OiBhc3luYyAocmVxKSA9PiAnZ2V0IGNhbGxlZCBvbiAvZ2V0LycgKyByZXEucGFyYW1zLmlkXG4gICAgfVxuICB9LFxuICAnL3Bvc3QnOiB7XG4gICAgJy9wcm9maWxlJzoge1xuICAgICAgZ2V0OiBhc3luYyAoKSA9PiAnZ2V0IGNhbGxlZCBvbiAvcG9zdC9wcm9maWxlJyxcbiAgICAgICcvOmlkJzoge1xuICAgICAgICBwb3N0OiBhc3luYyAocmVxKSA9PiAncG9zdCBvbiAvcG9zdC9wcm9maWxlLycgKyByZXEucGFyYW1zLmlkLFxuICAgICAgICAnL3ZlcmlmeSc6IHtcbiAgICAgICAgICAnL3tpZH0nOiB7XG4gICAgICAgICAgICBwdXQ6IGFzeW5jIChyZXEpID0+XG4gICAgICAgICAgICAgICdwdXQgb24gL3Bvc3QvcHJvZmlsZS86aWQvdmVyaWZ5LycgKyByZXEucGFyYW1zLmlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb3N0OiBhc3luYyAocmVxKSA9PlxuICAgICAgICAgICAgJ3Bvc3Qgb24gL3Bvc3QvcHJvZmlsZS8nICsgcmVxLnBhcmFtcy5pZCArICcvdmVyaWZ5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/route1.js\n");

/***/ }),

/***/ "./src/server-config.js":
/*!******************************!*\
  !*** ./src/server-config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  LOGGER,\n  HTTPS,\n  HTTP2,\n  PURE,\n  TURBO_HTTP\n} = process.env;\nconst fastifyConfig = {\n  logger: JSON.parse(LOGGER || false),\n  ignoreTrailingSlash: true\n};\n\nif (PURE && HTTPS && JSON.parse(HTTPS)) {\n  fastifyConfig.https = {\n    key: fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync('https/key.pem'),\n    cert: fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync('https/cert.pem')\n  };\n}\n\nif (PURE && HTTP2 && JSON.parse(HTTP2)) {\n  fastifyConfig.http2 = true;\n\n  if (fastifyConfig.https) {\n    fastifyConfig.https.allowHTTP1 = true; // fallback support for HTTP1\n  } else {\n    fastifyConfig.http = {};\n    fastifyConfig.http.allowHTTP1 = true;\n  }\n}\n\nif (TURBO_HTTP && JSON.parse(TURBO_HTTP) === true && \"function\" !== 'undefined' && __webpack_require__.c[__webpack_require__.s] === module && process.env.NETLIFY_ENV) {\n  // This prevents module to be loading when\n  // variable is FALSE or turbo-http module\n  // is not installed\n  try {\n    const Server = /*require.resolve*/(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'turbo-http/lib/server'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n    if (Server) {\n      fastifyConfig.createServer = (httpHandler, options = {}) => {\n        const server = new Server(options);\n        server.on('request', httpHandler);\n        return server;\n      };\n    }\n  } catch (e) {// Module unavailable\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fastifyConfig);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLWNvbmZpZy5qcz9kMmMzIl0sIm5hbWVzIjpbIkxPR0dFUiIsIkhUVFBTIiwiSFRUUDIiLCJQVVJFIiwiVFVSQk9fSFRUUCIsInByb2Nlc3MiLCJlbnYiLCJmYXN0aWZ5Q29uZmlnIiwibG9nZ2VyIiwiSlNPTiIsInBhcnNlIiwiaWdub3JlVHJhaWxpbmdTbGFzaCIsImh0dHBzIiwia2V5IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJjZXJ0IiwiaHR0cDIiLCJhbGxvd0hUVFAxIiwiaHR0cCIsInJlcXVpcmUiLCJtb2R1bGUiLCJORVRMSUZZX0VOViIsIlNlcnZlciIsImNyZWF0ZVNlcnZlciIsImh0dHBIYW5kbGVyIiwib3B0aW9ucyIsInNlcnZlciIsIm9uIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNO0FBQUVBLFFBQUY7QUFBVUMsT0FBVjtBQUFpQkMsT0FBakI7QUFBd0JDLE1BQXhCO0FBQThCQztBQUE5QixJQUE2Q0MsT0FBTyxDQUFDQyxHQUEzRDtBQUVBLE1BQU1DLGFBQWEsR0FBRztBQUNwQkMsUUFBTSxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsTUFBTSxJQUFJLEtBQXJCLENBRFk7QUFFcEJXLHFCQUFtQixFQUFFO0FBRkQsQ0FBdEI7O0FBS0EsSUFBSVIsSUFBSSxJQUFJRixLQUFSLElBQWlCUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsS0FBWCxDQUFyQixFQUF3QztBQUN0Q00sZUFBYSxDQUFDSyxLQUFkLEdBQXNCO0FBQ3BCQyxPQUFHLEVBQUVDLHlDQUFFLENBQUNDLFlBQUgsQ0FBZ0IsZUFBaEIsQ0FEZTtBQUVwQkMsUUFBSSxFQUFFRix5Q0FBRSxDQUFDQyxZQUFILENBQWdCLGdCQUFoQjtBQUZjLEdBQXRCO0FBSUQ7O0FBQ0QsSUFBSVosSUFBSSxJQUFJRCxLQUFSLElBQWlCTyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsS0FBWCxDQUFyQixFQUF3QztBQUN0Q0ssZUFBYSxDQUFDVSxLQUFkLEdBQXNCLElBQXRCOztBQUNBLE1BQUlWLGFBQWEsQ0FBQ0ssS0FBbEIsRUFBeUI7QUFDdkJMLGlCQUFhLENBQUNLLEtBQWQsQ0FBb0JNLFVBQXBCLEdBQWlDLElBQWpDLENBRHVCLENBQ2dCO0FBQ3hDLEdBRkQsTUFFTztBQUNMWCxpQkFBYSxDQUFDWSxJQUFkLEdBQXFCLEVBQXJCO0FBQ0FaLGlCQUFhLENBQUNZLElBQWQsQ0FBbUJELFVBQW5CLEdBQWdDLElBQWhDO0FBQ0Q7QUFDRjs7QUFFRCxJQUNFZCxVQUFVLElBQ1ZLLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixVQUFYLE1BQTJCLElBRDNCLElBRUEsZUFBbUIsV0FGbkIsSUFHQWdCLDRDQUFBLEtBQWlCQyxNQUhqQixJQUlBaEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixXQUxkLEVBTUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHSCxtQkFBQSxDQUFnQiwrSUFBaEIsQ0FBZjs7QUFDQSxRQUFJRyxNQUFKLEVBQVk7QUFDVmhCLG1CQUFhLENBQUNpQixZQUFkLEdBQTZCLENBQUNDLFdBQUQsRUFBY0MsT0FBTyxHQUFHLEVBQXhCLEtBQStCO0FBQzFELGNBQU1DLE1BQU0sR0FBRyxJQUFJSixNQUFKLENBQVdHLE9BQVgsQ0FBZjtBQUNBQyxjQUFNLENBQUNDLEVBQVAsQ0FBVSxTQUFWLEVBQXFCSCxXQUFyQjtBQUNBLGVBQU9FLE1BQVA7QUFDRCxPQUpEO0FBS0Q7QUFDRixHQVRELENBU0UsT0FBT0UsQ0FBUCxFQUFVLENBQ1Y7QUFDRDtBQUNGOztBQUVjdEIsNEVBQWYsRSIsImZpbGUiOiIuL3NyYy9zZXJ2ZXItY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3QgeyBMT0dHRVIsIEhUVFBTLCBIVFRQMiwgUFVSRSwgVFVSQk9fSFRUUCB9ID0gcHJvY2Vzcy5lbnY7XG5cbmNvbnN0IGZhc3RpZnlDb25maWcgPSB7XG4gIGxvZ2dlcjogSlNPTi5wYXJzZShMT0dHRVIgfHwgZmFsc2UpLFxuICBpZ25vcmVUcmFpbGluZ1NsYXNoOiB0cnVlXG59O1xuXG5pZiAoUFVSRSAmJiBIVFRQUyAmJiBKU09OLnBhcnNlKEhUVFBTKSkge1xuICBmYXN0aWZ5Q29uZmlnLmh0dHBzID0ge1xuICAgIGtleTogZnMucmVhZEZpbGVTeW5jKCdodHRwcy9rZXkucGVtJyksXG4gICAgY2VydDogZnMucmVhZEZpbGVTeW5jKCdodHRwcy9jZXJ0LnBlbScpXG4gIH07XG59XG5pZiAoUFVSRSAmJiBIVFRQMiAmJiBKU09OLnBhcnNlKEhUVFAyKSkge1xuICBmYXN0aWZ5Q29uZmlnLmh0dHAyID0gdHJ1ZTtcbiAgaWYgKGZhc3RpZnlDb25maWcuaHR0cHMpIHtcbiAgICBmYXN0aWZ5Q29uZmlnLmh0dHBzLmFsbG93SFRUUDEgPSB0cnVlOyAvLyBmYWxsYmFjayBzdXBwb3J0IGZvciBIVFRQMVxuICB9IGVsc2Uge1xuICAgIGZhc3RpZnlDb25maWcuaHR0cCA9IHt9O1xuICAgIGZhc3RpZnlDb25maWcuaHR0cC5hbGxvd0hUVFAxID0gdHJ1ZTtcbiAgfVxufVxuXG5pZiAoXG4gIFRVUkJPX0hUVFAgJiZcbiAgSlNPTi5wYXJzZShUVVJCT19IVFRQKSA9PT0gdHJ1ZSAmJlxuICB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgcmVxdWlyZS5tYWluID09PSBtb2R1bGUgJiZcbiAgcHJvY2Vzcy5lbnYuTkVUTElGWV9FTlZcbikge1xuICAvLyBUaGlzIHByZXZlbnRzIG1vZHVsZSB0byBiZSBsb2FkaW5nIHdoZW5cbiAgLy8gdmFyaWFibGUgaXMgRkFMU0Ugb3IgdHVyYm8taHR0cCBtb2R1bGVcbiAgLy8gaXMgbm90IGluc3RhbGxlZFxuICB0cnkge1xuICAgIGNvbnN0IFNlcnZlciA9IHJlcXVpcmUucmVzb2x2ZSgndHVyYm8taHR0cC9saWIvc2VydmVyJyk7XG4gICAgaWYgKFNlcnZlcikge1xuICAgICAgZmFzdGlmeUNvbmZpZy5jcmVhdGVTZXJ2ZXIgPSAoaHR0cEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKG9wdGlvbnMpO1xuICAgICAgICBzZXJ2ZXIub24oJ3JlcXVlc3QnLCBodHRwSGFuZGxlcik7XG4gICAgICAgIHJldHVybiBzZXJ2ZXI7XG4gICAgICB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE1vZHVsZSB1bmF2YWlsYWJsZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZhc3RpZnlDb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server-config.js\n");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instance */ \"./src/instance.js\");\nconst time = Date.now(); // For better managing start-time / lags\n\n\n\n\nasync function start() {\n  const port = process.env.PORT || 3000;\n  const appInit = Object(_instance__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  await appInit.listen(port, '0.0.0.0');\n  _helpers__WEBPACK_IMPORTED_MODULE_0__[\"consolemd\"].log(`#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() - time}ms*)`);\n}\n\nif ( true && __webpack_require__.c[__webpack_require__.s] === module) {\n  start();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_instance__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzPzNmOWQiXSwibmFtZXMiOlsidGltZSIsIkRhdGUiLCJub3ciLCJzdGFydCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcEluaXQiLCJhcHAiLCJsaXN0ZW4iLCJjb25zb2xlbWQiLCJsb2ciLCJyZXF1aXJlIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFiLEMsQ0FBeUI7O0FBQ3pCO0FBRUE7O0FBRUEsZUFBZUMsS0FBZixHQUF1QjtBQUNyQixRQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyx5REFBRyxFQUFuQjtBQUNBLFFBQU1ELE9BQU8sQ0FBQ0UsTUFBUixDQUFlTixJQUFmLEVBQXFCLFNBQXJCLENBQU47QUFDQU8sb0RBQVMsQ0FBQ0MsR0FBVixDQUNHLHlEQUF3RFIsSUFBSyxTQUFRSCxJQUFJLENBQUNDLEdBQUwsS0FDcEVGLElBQUssTUFGVDtBQUlEOztBQUVELElBQUksU0FBa0NhLDRDQUFBLEtBQWlCQyxNQUF2RCxFQUErRDtBQUM3RFgsT0FBSztBQUNOOztBQUVjTSxnSEFBZixFIiwiZmlsZSI6Ii4vc3JjL3NlcnZlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpbWUgPSBEYXRlLm5vdygpOyAvLyBGb3IgYmV0dGVyIG1hbmFnaW5nIHN0YXJ0LXRpbWUgLyBsYWdzXG5pbXBvcnQgeyBjb25zb2xlbWQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vaW5zdGFuY2UnO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcbiAgY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbiAgY29uc3QgYXBwSW5pdCA9IGFwcCgpO1xuICBhd2FpdCBhcHBJbml0Lmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuICBjb25zb2xlbWQubG9nKFxuICAgIGAjZ3JlZW4oWypTZXJ2ZXIqXTogc3RhcnRlZCBzdWNjZXNzZnVsbHkgYXQgKmxvY2FsaG9zdDoke3BvcnR9KiBpbiAqJHtEYXRlLm5vdygpIC1cbiAgICAgIHRpbWV9bXMqKWBcbiAgKTtcbn1cblxuaWYgKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyAmJiByZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICBzdGFydCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ }),

/***/ "@dalisoft/cookie":
/*!***********************************!*\
  !*** external "@dalisoft/cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@dalisoft/cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZGFsaXNvZnQvY29va2llXCI/MWQwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZGFsaXNvZnQvY29va2llLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGRhbGlzb2Z0L2Nvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@dalisoft/cookie\n");

/***/ }),

/***/ "@dalisoft/ws-events-sync":
/*!*******************************************!*\
  !*** external "@dalisoft/ws-events-sync" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@dalisoft/ws-events-sync\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZGFsaXNvZnQvd3MtZXZlbnRzLXN5bmNcIj81NmU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBkYWxpc29mdC93cy1ldmVudHMtc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBkYWxpc29mdC93cy1ldmVudHMtc3luY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@dalisoft/ws-events-sync\n");

/***/ }),

/***/ "apollo-server-fastify":
/*!****************************************!*\
  !*** external "apollo-server-fastify" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-fastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWZhc3RpZnlcIj8yY2Q4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1zZXJ2ZXItZmFzdGlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZmFzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-fastify\n");

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-serverless-express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3Mtc2VydmVybGVzcy1leHByZXNzXCI/OGYyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhd3Mtc2VydmVybGVzcy1leHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNlcnZlcmxlc3MtZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-serverless-express\n");

/***/ }),

/***/ "consolemd":
/*!****************************!*\
  !*** external "consolemd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"consolemd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25zb2xlbWRcIj83YWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvbnNvbGVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbnNvbGVtZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///consolemd\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

/***/ }),

/***/ "dotenv-safe":
/*!******************************!*\
  !*** external "dotenv-safe" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv-safe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnYtc2FmZVwiPzI4NGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZG90ZW52LXNhZmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYtc2FmZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv-safe\n");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5XCI/ZGIzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXN0aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify\n");

/***/ }),

/***/ "fastify-compress":
/*!***********************************!*\
  !*** external "fastify-compress" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-compress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LWNvbXByZXNzXCI/NmExNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXN0aWZ5LWNvbXByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1jb21wcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-compress\n");

/***/ }),

/***/ "fastify-cookie":
/*!*********************************!*\
  !*** external "fastify-cookie" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LWNvb2tpZVwiPzRiNDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmFzdGlmeS1jb29raWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5LWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-cookie\n");

/***/ }),

/***/ "fastify-cors":
/*!*******************************!*\
  !*** external "fastify-cors" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LWNvcnNcIj9iOWJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZhc3RpZnktY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3RpZnktY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-cors\n");

/***/ }),

/***/ "fastify-helmet":
/*!*********************************!*\
  !*** external "fastify-helmet" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LWhlbG1ldFwiP2I3NTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmFzdGlmeS1oZWxtZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5LWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-helmet\n");

/***/ }),

/***/ "fastify-jwt":
/*!******************************!*\
  !*** external "fastify-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-jwt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LWp3dFwiPzI0NzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmFzdGlmeS1qd3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5LWp3dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-jwt\n");

/***/ }),

/***/ "fastify-normalize-request-reply":
/*!**************************************************!*\
  !*** external "fastify-normalize-request-reply" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-normalize-request-reply\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LW5vcm1hbGl6ZS1yZXF1ZXN0LXJlcGx5XCI/MDczMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXN0aWZ5LW5vcm1hbGl6ZS1yZXF1ZXN0LXJlcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1ub3JtYWxpemUtcmVxdWVzdC1yZXBseVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-normalize-request-reply\n");

/***/ }),

/***/ "fastify-oas":
/*!******************************!*\
  !*** external "fastify-oas" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-oas\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LW9hc1wiP2VjMzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmFzdGlmeS1vYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5LW9hc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-oas\n");

/***/ }),

/***/ "fastify-plugin":
/*!*********************************!*\
  !*** external "fastify-plugin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-plugin\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LXBsdWdpblwiPzc4YjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmFzdGlmeS1wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5LXBsdWdpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-plugin\n");

/***/ }),

/***/ "fastify-rate-limit":
/*!*************************************!*\
  !*** external "fastify-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fastify-rate-limit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0aWZ5LXJhdGUtbGltaXRcIj9kZjhmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZhc3RpZnktcmF0ZS1saW1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3RpZnktcmF0ZS1saW1pdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fastify-rate-limit\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsXCI/MzExNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql\n");

/***/ }),

/***/ "lodash.pick":
/*!******************************!*\
  !*** external "lodash.pick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.pick\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gucGlja1wiPzBlNWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibG9kYXNoLnBpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gucGlja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash.pick\n");

/***/ }),

/***/ "ws/lib/websocket-server":
/*!******************************************!*\
  !*** external "ws/lib/websocket-server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ws/lib/websocket-server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3cy9saWIvd2Vic29ja2V0LXNlcnZlclwiP2M3ZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoid3MvbGliL3dlYnNvY2tldC1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3cy9saWIvd2Vic29ja2V0LXNlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ws/lib/websocket-server\n");

/***/ })

/******/ });