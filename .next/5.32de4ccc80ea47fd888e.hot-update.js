webpackHotUpdate(5,{

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(815);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(500);

var _routes = __webpack_require__(734);

var _campaign = __webpack_require__(1123);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1344);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/dheeru12/projects/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, { key: index, id: index, request: request, address: _this2.props.address, approverscount: _this2.props.approverscount, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Body = _semanticUiReact.Table.Body,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'request'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Add request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Recepient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Found ', this.props.requestcount, ' requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestcount, approverscount, requests, i;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestcount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approverscount().call();

                            case 7:
                                approverscount = _context.sent;

                                console.log(requestcount);
                                requests = [];
                                i = 0;

                            case 11:
                                if (!(i < requestcount)) {
                                    _context.next = 20;
                                    break;
                                }

                                _context.t0 = requests;
                                _context.next = 15;
                                return campaign.methods.requests(i).call();

                            case 15:
                                _context.t1 = _context.sent;

                                _context.t0.push.call(_context.t0, _context.t1);

                            case 17:
                                i++;
                                _context.next = 11;
                                break;

                            case 20:
                                console.log(requests);
                                return _context.abrupt('return', { address: address, requests: requests, approverscount: approverscount, requestcount: requestcount });

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzY291bnQiLCJIZWFkZXIiLCJCb2R5IiwiUm93IiwiSGVhZGVyQ2VsbCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Y291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsImkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU87O0FBQ2YsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFDakI7Ozs7Ozs7Ozs7O3FDQWNVO3lCQUNSOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQzVDO3VDQUFPLEFBQUMsc0NBQVcsS0FBWixBQUFpQixPQUFPLElBQXhCLEFBQTRCLE9BQU8sU0FBbkMsQUFBNEMsU0FBUyxTQUFTLE9BQUEsQUFBSyxNQUFuRSxBQUF5RSxTQUFTLGdCQUFnQixPQUFBLEFBQUssTUFBdkcsQUFBNkc7a0NBQTdHO29DQUFQLEFBQU8sQUFDVjtBQURVO2lCQUFBO0FBRFgsQUFBTyxBQUdWLGFBSFU7Ozs7aUNBSUg7Z0JBQUEsQUFDSSxTQURKLEFBQ21DLHVCQURuQyxBQUNJO2dCQURKLEFBQ1ksT0FEWixBQUNtQyx1QkFEbkMsQUFDWTtnQkFEWixBQUNrQixNQURsQixBQUNtQyx1QkFEbkMsQUFDa0I7Z0JBRGxCLEFBQ3VCLGFBRHZCLEFBQ21DLHVCQURuQyxBQUN1QixBQUMzQjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNEJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUMsY0FBeEMsQUFBdUMsQUFBYzs4QkFBckQ7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBS1Isa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDSSxBQUNJLEFBT0ksQUFHUiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFyQlIsQUFTSSxBQVlJLEFBQ0ssQUFBSyxBQUdkLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixjQTFCL0IsQUFDSSxBQXlCSSxBQUdYOzs7OztpSCxBQWpENEI7Ozs7O2lDQUNsQjtBLDBDQUFTLE0sQUFBTSxNLEFBQWYsQUFDRDtBLDJDQUFXLHdCLEFBQUEsQUFBUzs7dUNBQ0QsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUIsQUFBakIsQUFBb0M7O2lDQUF2RDtBOzt1Q0FDcUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7O2lDQUF2RDtBLDBEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0EsMkMsQUFBUyxBQUNQO0Esb0MsQUFBRTs7O3NDQUFFLEksQUFBRTs7Ozs7OEMsQUFDVjs7dUNBQW9CLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLEcsQUFBMUIsQUFBNkI7Ozs7OzRDLEFBQXhDOztpQ0FEYztBOzs7O2lDQUczQjt3Q0FBQSxBQUFRLElBQVIsQUFBWTtpRUFDTCxFQUFDLFNBQUQsU0FBUyxVQUFULFVBQWtCLGdCQUFsQixnQkFBaUMsYyxBQUFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDZixBLEFBckQyQjs7a0JBcUQzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2RoZWVydTEyL3Byb2plY3RzL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/dheeru12/projects/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/dheeru12/projects/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMmRlNGNjYzgwZWE0N2ZkODg4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzJjNjVhNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHtCdXR0b24sVGFibGV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuICAgICAgICBjb25zdCB7YWRkcmVzc309cHJvcHMucXVlcnk7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rjb3VudD1hd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IGFwcHJvdmVyc2NvdW50PWF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzY291bnQoKS5jYWxsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3Rjb3VudClcbiAgICAgICAgY29uc3QgcmVxdWVzdHM9W107XG4gICAgICAgIGZvcih2YXIgaT0wO2k8cmVxdWVzdGNvdW50O2krKyl7XG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKGF3YWl0IGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaSkuY2FsbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XG4gICAgICAgIHJldHVybiB7YWRkcmVzcyxyZXF1ZXN0cyxhcHByb3ZlcnNjb3VudCxyZXF1ZXN0Y291bnR9O1xuICAgIH1cbiAgICByZW5kZXJSb3dzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCxpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybiA8UmVxdWVzdFJvdyBrZXk9e2luZGV4fSBpZD17aW5kZXh9IHJlcXVlc3Q9e3JlcXVlc3R9IGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gYXBwcm92ZXJzY291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzY291bnR9Lz5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IEhlYWRlciAsQm9keSAsUm93ICxIZWFkZXJDZWxsfT1UYWJsZTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8aDM+cmVxdWVzdDwvaDM+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD1cInJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BbW91bnQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjZXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93cygpfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8ZGl2PkZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3Rjb3VudH0gcmVxdWVzdHM8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBN0NBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7OztBQUZBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9