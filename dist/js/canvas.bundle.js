/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((module) => {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
var GRAVITY = 1;
var FRICTION = 0.88;

// Event Listeners
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});
addEventListener('click', function () {
  init();
});

// Objects
var Ball = /*#__PURE__*/function () {
  function Ball(_ref) {
    var x = _ref.x,
      y = _ref.y,
      dx = _ref.dx,
      dy = _ref.dy,
      radius = _ref.radius,
      color = _ref.color;
    _classCallCheck(this, Ball);
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radiusX = radius;
    this.radiusY = radius;
    this.color = color;
  }
  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      //c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y + this.radiusY + this.dy > canvas.height) {
        // Hozzá kell adni a csorsulást is hogy ne ragadjanak hozzá a talajhoz.
        this.dy *= -1;
        this.dy *= FRICTION;
        this.dx *= FRICTION;
      } else {
        this.dy += GRAVITY;
      }
      if (this.x + this.radiusX + this.dx > canvas.width) {
        this.dx *= -1;
        this.dx *= FRICTION;
      }
      if (this.x - this.radiusX <= 0) {
        this.dx *= -1;
        this.dx *= FRICTION;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }]);
  return Ball;
}(); // Implementation
var ballArray = [];
function init() {
  var radius = 30;
  ballArray = [];
  for (var i = 0; i < 10; i++) {
    var ball = new Ball({
      x: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(radius, canvas.width - radius),
      y: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(canvas.height / 2 - 300, canvas.height / 2 + 100),
      dx: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(-10, 10),
      dy: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromRange)(-10, 10),
      radius: radius,
      color: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomColor)(colors)
    });
    ballArray.push(ball);
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Clear the screen.
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })

  ballArray.forEach(function (ball) {
    ball.update();
  });
}
init();
animate();
})();

/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map