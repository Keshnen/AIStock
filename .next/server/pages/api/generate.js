"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n  // apiKey: process.env.OPENAI_API_KEY,\n  apiKey: \"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\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const completion = await openai.createCompletion(\"text-davinci-001\", {\n    prompt: generatePrompt(req.body.animal),\n    temperature: 0.1,\n    max_tokens: 150\n  });\n  res.status(200).json({\n    result: completion.data.choices[0].text\n  }); //res.status(200).json({ result: \"TESTING\" });  \n}\n\nfunction generatePrompt(animal) {\n  const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();\n  return `Suggest three stock tickers that would do well if the event happens\n\n  Event: oil prices rise\n  Stocks: XLE, XOM, BP\n  Event: bitcoin moons\n  Stocks: COIN, SQ, NVDA\n  Event: genetic modification is successful\n  Stocks: CRSPR, EDIT, BEAM\n  Event: fast food companies are having high success with attracting new markets\n  Stocks: MCD, DPZ, YUM\n  Event: we reach Mars\n  Stocks: SPCE, RKLB, BA\n  Event: war breaks out\n  Stocks: ATK, BA, GD\n  Event: gas prices rise\n  Stocks: TSLA, CVX, DVN\n  Event: covid is cured\n  Stocks: RCL, CCL, NCLH\n  Event: consumers are trying to be healthier\n  Stocks: PTON, SFM, BYND\n  Event: trump wins reelection\n  Stocks: BAC, JPM, NYT\n  Event: consumer spending increases\n  Stocks: NKE, EBAY, AMZN\n  Event: real estate market crashes,\n  Stocks: COST, WMT, REYN\n  Event: inflation increases\n  Stocks: GLD, SLV, VTIP\n  Event: russia loses war\n  Stocks: GOOGL, AAPL, SNP\n  Event: ${capitalizedAnimal}\n  Stocks:`;\n} // `Which stocks to buy if ${capitalizedAnimal}?`\n\n/* `Suggest three good stock tickers to buy today.\n\nIndustry: Energy\nStock Tickers: MPC, CLR, HFC\nIndustry: Materials\nStock Tickers: X, CLF, STLD\nIndustry: Healthcare\nStock Tickers: SAGE, BIO, WBA\nIndustry: Financials\nStock Tickers: UWMC, RKT, VOYA\nIndustry: ${capitalizedAnimal}\nNames:`;  *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxhQUFhLEdBQUcsSUFBSUYsaURBQUosQ0FBa0I7QUFDdEM7QUFDQUcsRUFBQUEsTUFBTSxFQUFFO0FBRjhCLENBQWxCLENBQXRCO0FBSUEsTUFBTUMsTUFBTSxHQUFHLElBQUlILDZDQUFKLENBQWNDLGFBQWQsQ0FBZjtBQUVBLDZCQUFlLDBDQUFnQkcsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLFFBQU1DLFVBQVUsR0FBRyxNQUFNSCxNQUFNLENBQUNJLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QztBQUNuRUMsSUFBQUEsTUFBTSxFQUFFQyxjQUFjLENBQUNMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxNQUFWLENBRDZDO0FBRW5FQyxJQUFBQSxXQUFXLEVBQUUsR0FGc0Q7QUFHbkVDLElBQUFBLFVBQVUsRUFBRTtBQUh1RCxHQUE1QyxDQUF6QjtBQU1BUixFQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxNQUFNLEVBQUVWLFVBQVUsQ0FBQ1csSUFBWCxDQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBeEIsRUFBMkJDO0FBQXJDLEdBQXJCLEVBUHVDLENBUXZDO0FBQ0Q7O0FBRUQsU0FBU1YsY0FBVCxDQUF3QkUsTUFBeEIsRUFBZ0M7QUFDOUIsUUFBTVMsaUJBQWlCLEdBQ3JCVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVVLFdBQVYsS0FBMEJWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBRDVCO0FBRUEsU0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXSCxpQkFBa0I7QUFDN0IsVUEvQkU7QUFnQ0QsRUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzEzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICAvLyBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICBhcGlLZXk6IFwic2stcnZGOUx1N2NsTUJpcEZIb1BJSjVUM0JsYmtGSmVqb2dNSG5GTHRvRWlXNU9wTWlWXCJcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbihcInRleHQtZGF2aW5jaS0wMDFcIiwge1xuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocmVxLmJvZHkuYW5pbWFsKSxcbiAgICB0ZW1wZXJhdHVyZTogMC4xLFxuICAgIG1heF90b2tlbnM6IDE1MCxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7ICBcbiAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogXCJURVNUSU5HXCIgfSk7ICBcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQoYW5pbWFsKSB7XG4gIGNvbnN0IGNhcGl0YWxpemVkQW5pbWFsID1cbiAgICBhbmltYWxbMF0udG9VcHBlckNhc2UoKSArIGFuaW1hbC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gYFN1Z2dlc3QgdGhyZWUgc3RvY2sgdGlja2VycyB0aGF0IHdvdWxkIGRvIHdlbGwgaWYgdGhlIGV2ZW50IGhhcHBlbnNcblxuICBFdmVudDogb2lsIHByaWNlcyByaXNlXG4gIFN0b2NrczogWExFLCBYT00sIEJQXG4gIEV2ZW50OiBiaXRjb2luIG1vb25zXG4gIFN0b2NrczogQ09JTiwgU1EsIE5WREFcbiAgRXZlbnQ6IGdlbmV0aWMgbW9kaWZpY2F0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgU3RvY2tzOiBDUlNQUiwgRURJVCwgQkVBTVxuICBFdmVudDogZmFzdCBmb29kIGNvbXBhbmllcyBhcmUgaGF2aW5nIGhpZ2ggc3VjY2VzcyB3aXRoIGF0dHJhY3RpbmcgbmV3IG1hcmtldHNcbiAgU3RvY2tzOiBNQ0QsIERQWiwgWVVNXG4gIEV2ZW50OiB3ZSByZWFjaCBNYXJzXG4gIFN0b2NrczogU1BDRSwgUktMQiwgQkFcbiAgRXZlbnQ6IHdhciBicmVha3Mgb3V0XG4gIFN0b2NrczogQVRLLCBCQSwgR0RcbiAgRXZlbnQ6IGdhcyBwcmljZXMgcmlzZVxuICBTdG9ja3M6IFRTTEEsIENWWCwgRFZOXG4gIEV2ZW50OiBjb3ZpZCBpcyBjdXJlZFxuICBTdG9ja3M6IFJDTCwgQ0NMLCBOQ0xIXG4gIEV2ZW50OiBjb25zdW1lcnMgYXJlIHRyeWluZyB0byBiZSBoZWFsdGhpZXJcbiAgU3RvY2tzOiBQVE9OLCBTRk0sIEJZTkRcbiAgRXZlbnQ6IHRydW1wIHdpbnMgcmVlbGVjdGlvblxuICBTdG9ja3M6IEJBQywgSlBNLCBOWVRcbiAgRXZlbnQ6IGNvbnN1bWVyIHNwZW5kaW5nIGluY3JlYXNlc1xuICBTdG9ja3M6IE5LRSwgRUJBWSwgQU1aTlxuICBFdmVudDogcmVhbCBlc3RhdGUgbWFya2V0IGNyYXNoZXMsXG4gIFN0b2NrczogQ09TVCwgV01ULCBSRVlOXG4gIEV2ZW50OiBpbmZsYXRpb24gaW5jcmVhc2VzXG4gIFN0b2NrczogR0xELCBTTFYsIFZUSVBcbiAgRXZlbnQ6IHJ1c3NpYSBsb3NlcyB3YXJcbiAgU3RvY2tzOiBHT09HTCwgQUFQTCwgU05QXG4gIEV2ZW50OiAke2NhcGl0YWxpemVkQW5pbWFsfVxuICBTdG9ja3M6YDtcbn1cblxuLy8gYFdoaWNoIHN0b2NrcyB0byBidXkgaWYgJHtjYXBpdGFsaXplZEFuaW1hbH0/YFxuXG4vKiBgU3VnZ2VzdCB0aHJlZSBnb29kIHN0b2NrIHRpY2tlcnMgdG8gYnV5IHRvZGF5LlxuXG5JbmR1c3RyeTogRW5lcmd5XG5TdG9jayBUaWNrZXJzOiBNUEMsIENMUiwgSEZDXG5JbmR1c3RyeTogTWF0ZXJpYWxzXG5TdG9jayBUaWNrZXJzOiBYLCBDTEYsIFNUTERcbkluZHVzdHJ5OiBIZWFsdGhjYXJlXG5TdG9jayBUaWNrZXJzOiBTQUdFLCBCSU8sIFdCQVxuSW5kdXN0cnk6IEZpbmFuY2lhbHNcblN0b2NrIFRpY2tlcnM6IFVXTUMsIFJLVCwgVk9ZQVxuSW5kdXN0cnk6ICR7Y2FwaXRhbGl6ZWRBbmltYWx9XG5OYW1lczpgOyAgKi9cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsIm9wZW5haSIsInJlcSIsInJlcyIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJib2R5IiwiYW5pbWFsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsImNhcGl0YWxpemVkQW5pbWFsIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/generate.js\n");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();