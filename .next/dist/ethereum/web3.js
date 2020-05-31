'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
var provider = void 0;
if (typeof window !== 'undefined') {
    if (typeof window.web3 !== 'undefined') {
        provider = window.web3.currentProvider;
    }
} else {
    provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7');
}
web3 = new _web2.default(provider);
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJwcm92aWRlciIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFJLFlBQUo7QUFDQSxJQUFJLGdCQUFKO0FBQ0EsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBckIsYUFBaUMsQUFDN0I7UUFBSSxPQUFPLE9BQU8sQUFBZCxTQUFxQixBQUF6QixhQUFxQyxBQUNyQzttQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUNDO0FBQ0o7QUFKRCxPQUlLLEFBQ0Q7ZUFBUyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ0wsQUFESyxBQUFULEFBSUg7O0FBQ0QsT0FBSyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFMLEFBQ0E7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RoZWVydTEyL3Byb2plY3RzL2tpY2tzdGFydCJ9