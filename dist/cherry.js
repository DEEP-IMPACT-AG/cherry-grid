(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.CherryGrid = {}, global.React));
}(this, function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if ( module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ":root{--max-width:1440px;--margin-container-mobile:20px;--margin-container-desktop:20px;--margin-container-child-mobile:10px;--margin-container-child-desktop:10px}.Container_container__26oxB{margin:auto;max-width:1440px;max-width:1440px;max-width:var(--max-width);padding-right:20px;padding-right:20px;padding-right:var(--margin-container-mobile);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-mobile)}@media (--screen-lg){.Container_container__26oxB{padding-right:20px;padding-right:20px;padding-right:var(--margin-container-desktop);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-desktop)}}@media (--screen-xxxl){.Container_container__26oxB{max-width:1704px}}.Container_containerFluid__299KB{width:100%;max-width:none;padding-right:20px;padding-right:20px;padding-right:var(--margin-container-mobile);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-mobile);margin-right:auto;margin-left:auto}@media (--screen-lg){.Container_containerFluid__299KB{padding-right:20px;padding-right:20px;padding-right:var(--margin-container-desktop);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-desktop)}}.Container_containerChild__EGK-d{padding-right:10px;padding-right:10px;padding-right:var(--margin-container-child-mobile);padding-left:10px;padding-left:10px;padding-left:var(--margin-container-child-mobile)}@media (--screen-lg){.Container_containerChild__EGK-d{padding-right:10px;padding-right:10px;padding-right:var(--margin-container-child-desktop);padding-left:10px;padding-left:10px;padding-left:var(--margin-container-child-desktop)}}";
  var styles = {"container":"Container_container__26oxB","containerFluid":"Container_containerFluid__299KB","containerChild":"Container_containerChild__EGK-d"};
  styleInject(css);

  var Container =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
      _classCallCheck(this, Container);

      return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
    }

    _createClass(Container, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            _this$props$fluid = _this$props.fluid,
            fluid = _this$props$fluid === void 0 ? false : _this$props$fluid,
            _this$props$child = _this$props.child,
            child = _this$props$child === void 0 ? false : _this$props$child;
        return React__default.createElement("div", {
          className: classnames(styles.container, (_classNames = {}, _defineProperty(_classNames, styles.containerFluid, fluid), _defineProperty(_classNames, styles.containerChild, child), _classNames), className)
        }, children);
      }
    }]);

    return Container;
  }(React__default.Component);

  var css$1 = ":root{--margin-row-mobile:-10px;--margin-row-desktop:-10px}.Row_row__3u7cQ{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -10px;margin:0 -10px;margin:0 var(--margin-row-mobile)}@media (--screen-lg){.Row_row__3u7cQ{margin:0 -10px;margin:0 -10px;margin:0 var(--margin-row-desktop)}}.Row_justifyContent-flex-start__2evuU{justify-content:flex-start}.Row_justifyContent-flex-end__2TVad{justify-content:flex-end}.Row_justifyContent-center__23Nwl{justify-content:center}.Row_justifyContent-space-between__z81Jw{justify-content:space-between}.Row_justifyContent-space-around__37v0T{justify-content:space-around}.Row_justifyContent-initial__2XoDU{justify-content:normal}.Row_alignItems-stretch__sCva5{align-items:stretch}.Row_alignItems-center__1i5P3{align-items:center}.Row_alignItems-flex-start__JCjMl{align-items:flex-start}.Row_alignItems-flex-end__2kRO9{align-items:flex-end}.Row_alignItems-baseline__2MN-g{align-items:baseline}.Row_alignItems-initial__18lJm{align-items:normal}";
  var styles$1 = {"row":"Row_row__3u7cQ","justifyContent-flex-start":"Row_justifyContent-flex-start__2evuU","justifyContent-flex-end":"Row_justifyContent-flex-end__2TVad","justifyContent-center":"Row_justifyContent-center__23Nwl","justifyContent-space-between":"Row_justifyContent-space-between__z81Jw","justifyContent-space-around":"Row_justifyContent-space-around__37v0T","justifyContent-initial":"Row_justifyContent-initial__2XoDU","alignItems-stretch":"Row_alignItems-stretch__sCva5","alignItems-center":"Row_alignItems-center__1i5P3","alignItems-flex-start":"Row_alignItems-flex-start__JCjMl","alignItems-flex-end":"Row_alignItems-flex-end__2kRO9","alignItems-baseline":"Row_alignItems-baseline__2MN-g","alignItems-initial":"Row_alignItems-initial__18lJm"};
  styleInject(css$1);

  var Row =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Row, _Component);

    function Row() {
      _classCallCheck(this, Row);

      return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
    }

    _createClass(Row, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            alignItems = _this$props.alignItems,
            justifyContent = _this$props.justifyContent;
        return React__default.createElement("div", {
          className: classnames(styles$1.row, (_classNames = {}, _defineProperty(_classNames, styles$1["alignItems-".concat(alignItems)], alignItems), _defineProperty(_classNames, styles$1["justifyContent-".concat(justifyContent)], justifyContent), _classNames), className)
        }, children);
      }
    }]);

    return Row;
  }(React.Component);

  var css$2 = ":root{--gutter-col-mobile:10px;--gutter-col-desktop:10px}.Col_textAlign-left__1xkN0{text-align:left}.Col_textAlign-center__CSYoF{text-align:center}.Col_textAlign-right__2AV5l{text-align:right}.Col_col__3AMjC{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}@media (--screen-lg){.Col_col__3AMjC{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}.Col_colAuto__2DDxY{flex:0 0 auto;width:auto;max-width:none}.Col_col1__y3g_L{flex:0 0 8.333333%;max-width:8.333333%}.Col_col2__ePBBN{flex:0 0 16.666667%;max-width:16.666667%}.Col_col3__1ylIt{flex:0 0 25%;max-width:25%}.Col_col4__1IO62{flex:0 0 33.333333%;max-width:33.333333%}.Col_col5__3xSrW{flex:0 0 41.666667%;max-width:41.666667%}.Col_col6__JITHG{flex:0 0 50%;max-width:50%}.Col_col7__3WiLX{flex:0 0 58.333333%;max-width:58.333333%}.Col_col8__CJL4r{flex:0 0 66.666667%;max-width:66.666667%}.Col_col9__2gErW{flex:0 0 75%;max-width:75%}.Col_col10__YZCPp{flex:0 0 83.333333%;max-width:83.333333%}.Col_col11__3tQpp{flex:0 0 91.666667%;max-width:91.666667%}.Col_col12__3SCWa{flex:0 0 100%;max-width:100%}.Col_orderFirst__3Tvp1{order:-1}.Col_orderLast__GCM7R{order:13}@media (--screen-sm){.Col_colSm__2yjhX{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (--screen-sm) and (--screen-lg){.Col_colSm__2yjhX{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (--screen-sm){.Col_colSmAuto__2qVUy{flex:0 0 auto;width:auto;max-width:none}.Col_colSm1__1tSum{flex:0 0 8.333333%;max-width:8.333333%}.Col_colSm2__xdiPg{flex:0 0 16.666667%;max-width:16.666667%}.Col_colSm3__2Xuzh{flex:0 0 25%;max-width:25%}.Col_colSm4__19RLA{flex:0 0 33.333333%;max-width:33.333333%}.Col_colSm5__2rkc4{flex:0 0 41.666667%;max-width:41.666667%}.Col_colSm6__2r6kg{flex:0 0 50%;max-width:50%}.Col_colSm7__JViol{flex:0 0 58.333333%;max-width:58.333333%}.Col_colSm8__266kh{flex:0 0 66.666667%;max-width:66.666667%}.Col_colSm9__1y-fd{flex:0 0 75%;max-width:75%}.Col_colSm10__7l5Vv{flex:0 0 83.333333%;max-width:83.333333%}.Col_colSm11__3oFiG{flex:0 0 91.666667%;max-width:91.666667%}.Col_colSm12__1IqhI{flex:0 0 100%;max-width:100%}.Col_orderSmFirst__3dKdZ{order:-1}.Col_orderSmLast__2W2f-{order:13}}@media (--screen-md){.Col_colMd__WyzHo{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (--screen-md) and (--screen-lg){.Col_colMd__WyzHo{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (--screen-md){.Col_colMdAuto__39IBr{flex:0 0 auto;width:auto;max-width:none}.Col_colMd1__3fAJ0{flex:0 0 8.333333%;max-width:8.333333%}.Col_colMd2__1bekS{flex:0 0 16.666667%;max-width:16.666667%}.Col_colMd3__1MiC7{flex:0 0 25%;max-width:25%}.Col_colMd4__TnyMC{flex:0 0 33.333333%;max-width:33.333333%}.Col_colMd5__2i_KO{flex:0 0 41.666667%;max-width:41.666667%}.Col_colMd6__yqHDU{flex:0 0 50%;max-width:50%}.Col_colMd7__19WlY{flex:0 0 58.333333%;max-width:58.333333%}.Col_colMd8__1P0Wk{flex:0 0 66.666667%;max-width:66.666667%}.Col_colMd9__1YZZ-{flex:0 0 75%;max-width:75%}.Col_colMd10__1Pv36{flex:0 0 83.333333%;max-width:83.333333%}.Col_colMd11__3Nx3j{flex:0 0 91.666667%;max-width:91.666667%}.Col_colMd12__3hidN{flex:0 0 100%;max-width:100%}.Col_orderMdFirst__2Zilx{order:-1}.Col_orderMdLast__2SFxz{order:13}}@media (--screen-lg){.Col_colLg__3z5tK{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:var(--gutter-col-desktop)}.Col_colLgAuto__3kxlP{flex:0 0 auto;width:auto;max-width:none}.Col_colLg1__1j2Zb{flex:0 0 8.333333%;max-width:8.333333%}.Col_colLg2__3LuMG{flex:0 0 16.666667%;max-width:16.666667%}.Col_colLg3__3MPtv{flex:0 0 25%;max-width:25%}.Col_colLg4__Y0cun{flex:0 0 33.333333%;max-width:33.333333%}.Col_colLg5__1iDvg{flex:0 0 41.666667%;max-width:41.666667%}.Col_colLg6__VSuXJ{flex:0 0 50%;max-width:50%}.Col_colLg7__2aX0G{flex:0 0 58.333333%;max-width:58.333333%}.Col_colLg8__214fO{flex:0 0 66.666667%;max-width:66.666667%}.Col_colLg9__1SIwz{flex:0 0 75%;max-width:75%}.Col_colLg10__1JOhe{flex:0 0 83.333333%;max-width:83.333333%}.Col_colLg11__36UOa{flex:0 0 91.666667%;max-width:91.666667%}.Col_colLg12__zU-1i{flex:0 0 100%;max-width:100%}.Col_orderLgFirst__24RCT{order:-1}.Col_orderLgLast__PhFts{order:13}}@media (--screen-xl){.Col_colXl__3l-A4{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (--screen-xl) and (--screen-lg){.Col_colXl__3l-A4{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (--screen-xl){.Col_colXlAuto__1oPjI{flex:0 0 auto;width:auto;max-width:none}.Col_colXl1__IeGhK{flex:0 0 8.333333%;max-width:8.333333%}.Col_colXl2__2lkes{flex:0 0 16.666667%;max-width:16.666667%}.Col_colXl3__2eIJn{flex:0 0 25%;max-width:25%}.Col_colXl4__1nL8L{flex:0 0 33.333333%;max-width:33.333333%}.Col_colXl5__5AyET{flex:0 0 41.666667%;max-width:41.666667%}.Col_colXl6__Qczqo{flex:0 0 50%;max-width:50%}.Col_colXl7__1WxP9{flex:0 0 58.333333%;max-width:58.333333%}.Col_colXl8__3wwfI{flex:0 0 66.666667%;max-width:66.666667%}.Col_colXl9__LRXYh{flex:0 0 75%;max-width:75%}.Col_colXl10__215XQ{flex:0 0 83.333333%;max-width:83.333333%}.Col_colXl11__3AzGF{flex:0 0 91.666667%;max-width:91.666667%}.Col_colXl12__1GlFv{flex:0 0 100%;max-width:100%}.Col_orderXlFirst__3IJlY{order:-1}.Col_orderXlLast__27Itq{order:13}}@media (--screen-xxl){.Col_colXxl__1Yisa{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (--screen-xxl) and (--screen-lg){.Col_colXxl__1Yisa{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (--screen-xxl){.Col_colXxlAuto__1eqo5{flex:0 0 auto;width:auto;max-width:none}.Col_colXxl1__Do1-3{flex:0 0 8.333333%;max-width:8.333333%}.Col_colXxl2__NgYVg{flex:0 0 16.666667%;max-width:16.666667%}.Col_colXxl3__1UGfd{flex:0 0 25%;max-width:25%}.Col_colXxl4__1BMyD{flex:0 0 33.333333%;max-width:33.333333%}.Col_colXxl5__3AMQI{flex:0 0 41.666667%;max-width:41.666667%}.Col_colXxl6__2oGUH{flex:0 0 50%;max-width:50%}.Col_colXxl7__23O74{flex:0 0 58.333333%;max-width:58.333333%}.Col_colXxl8__2qf9I{flex:0 0 66.666667%;max-width:66.666667%}.Col_colXxl9__3sEAu{flex:0 0 75%;max-width:75%}.Col_colXxl10__liG79{flex:0 0 83.333333%;max-width:83.333333%}.Col_colXxl11__24WFE{flex:0 0 91.666667%;max-width:91.666667%}.Col_colXxl12__F_0BT{flex:0 0 100%;max-width:100%}.Col_orderXxlFirst__3wTHJ{order:-1}.Col_orderXxlLast__12LNt{order:13}}@media (--screen-xxxl){.Col_colXxxl__1YmaQ{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (--screen-xxxl) and (--screen-lg){.Col_colXxxl__1YmaQ{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (--screen-xxxl){.Col_colXxxlAuto__1T9gR{flex:0 0 auto;width:auto;max-width:none}.Col_colXxxl1__2HmRy{flex:0 0 8.333333%;max-width:8.333333%}.Col_colXxxl2__1NTQj{flex:0 0 16.666667%;max-width:16.666667%}.Col_colXxxl3__13ao1{flex:0 0 25%;max-width:25%}.Col_colXxxl4__3yyNN{flex:0 0 33.333333%;max-width:33.333333%}.Col_colXxxl5__1ZuZ1{flex:0 0 41.666667%;max-width:41.666667%}.Col_colXxxl6__3xSwN{flex:0 0 50%;max-width:50%}.Col_colXxxl7__25qeF{flex:0 0 58.333333%;max-width:58.333333%}.Col_colXxxl8__zWyBq{flex:0 0 66.666667%;max-width:66.666667%}.Col_colXxxl9__1Wl-y{flex:0 0 75%;max-width:75%}.Col_colXxxl10__zw8IQ{flex:0 0 83.333333%;max-width:83.333333%}.Col_colXxxl11__3y59z{flex:0 0 91.666667%;max-width:91.666667%}.Col_colXxxl12__eBkT-{flex:0 0 100%;max-width:100%}.Col_orderXxxlFirst__3HwJd{order:-1}.Col_orderXxxlLast__3mOy4{order:13}}";
  var styles$2 = {"textAlign-left":"Col_textAlign-left__1xkN0","textAlign-center":"Col_textAlign-center__CSYoF","textAlign-right":"Col_textAlign-right__2AV5l","col":"Col_col__3AMjC","colAuto":"Col_colAuto__2DDxY","col1":"Col_col1__y3g_L","col2":"Col_col2__ePBBN","col3":"Col_col3__1ylIt","col4":"Col_col4__1IO62","col5":"Col_col5__3xSrW","col6":"Col_col6__JITHG","col7":"Col_col7__3WiLX","col8":"Col_col8__CJL4r","col9":"Col_col9__2gErW","col10":"Col_col10__YZCPp","col11":"Col_col11__3tQpp","col12":"Col_col12__3SCWa","orderFirst":"Col_orderFirst__3Tvp1","orderLast":"Col_orderLast__GCM7R","colSm":"Col_colSm__2yjhX","colSmAuto":"Col_colSmAuto__2qVUy","colSm1":"Col_colSm1__1tSum","colSm2":"Col_colSm2__xdiPg","colSm3":"Col_colSm3__2Xuzh","colSm4":"Col_colSm4__19RLA","colSm5":"Col_colSm5__2rkc4","colSm6":"Col_colSm6__2r6kg","colSm7":"Col_colSm7__JViol","colSm8":"Col_colSm8__266kh","colSm9":"Col_colSm9__1y-fd","colSm10":"Col_colSm10__7l5Vv","colSm11":"Col_colSm11__3oFiG","colSm12":"Col_colSm12__1IqhI","orderSmFirst":"Col_orderSmFirst__3dKdZ","orderSmLast":"Col_orderSmLast__2W2f-","colMd":"Col_colMd__WyzHo","colMdAuto":"Col_colMdAuto__39IBr","colMd1":"Col_colMd1__3fAJ0","colMd2":"Col_colMd2__1bekS","colMd3":"Col_colMd3__1MiC7","colMd4":"Col_colMd4__TnyMC","colMd5":"Col_colMd5__2i_KO","colMd6":"Col_colMd6__yqHDU","colMd7":"Col_colMd7__19WlY","colMd8":"Col_colMd8__1P0Wk","colMd9":"Col_colMd9__1YZZ-","colMd10":"Col_colMd10__1Pv36","colMd11":"Col_colMd11__3Nx3j","colMd12":"Col_colMd12__3hidN","orderMdFirst":"Col_orderMdFirst__2Zilx","orderMdLast":"Col_orderMdLast__2SFxz","colLg":"Col_colLg__3z5tK","colLgAuto":"Col_colLgAuto__3kxlP","colLg1":"Col_colLg1__1j2Zb","colLg2":"Col_colLg2__3LuMG","colLg3":"Col_colLg3__3MPtv","colLg4":"Col_colLg4__Y0cun","colLg5":"Col_colLg5__1iDvg","colLg6":"Col_colLg6__VSuXJ","colLg7":"Col_colLg7__2aX0G","colLg8":"Col_colLg8__214fO","colLg9":"Col_colLg9__1SIwz","colLg10":"Col_colLg10__1JOhe","colLg11":"Col_colLg11__36UOa","colLg12":"Col_colLg12__zU-1i","orderLgFirst":"Col_orderLgFirst__24RCT","orderLgLast":"Col_orderLgLast__PhFts","colXl":"Col_colXl__3l-A4","colXlAuto":"Col_colXlAuto__1oPjI","colXl1":"Col_colXl1__IeGhK","colXl2":"Col_colXl2__2lkes","colXl3":"Col_colXl3__2eIJn","colXl4":"Col_colXl4__1nL8L","colXl5":"Col_colXl5__5AyET","colXl6":"Col_colXl6__Qczqo","colXl7":"Col_colXl7__1WxP9","colXl8":"Col_colXl8__3wwfI","colXl9":"Col_colXl9__LRXYh","colXl10":"Col_colXl10__215XQ","colXl11":"Col_colXl11__3AzGF","colXl12":"Col_colXl12__1GlFv","orderXlFirst":"Col_orderXlFirst__3IJlY","orderXlLast":"Col_orderXlLast__27Itq","colXxl":"Col_colXxl__1Yisa","colXxlAuto":"Col_colXxlAuto__1eqo5","colXxl1":"Col_colXxl1__Do1-3","colXxl2":"Col_colXxl2__NgYVg","colXxl3":"Col_colXxl3__1UGfd","colXxl4":"Col_colXxl4__1BMyD","colXxl5":"Col_colXxl5__3AMQI","colXxl6":"Col_colXxl6__2oGUH","colXxl7":"Col_colXxl7__23O74","colXxl8":"Col_colXxl8__2qf9I","colXxl9":"Col_colXxl9__3sEAu","colXxl10":"Col_colXxl10__liG79","colXxl11":"Col_colXxl11__24WFE","colXxl12":"Col_colXxl12__F_0BT","orderXxlFirst":"Col_orderXxlFirst__3wTHJ","orderXxlLast":"Col_orderXxlLast__12LNt","colXxxl":"Col_colXxxl__1YmaQ","colXxxlAuto":"Col_colXxxlAuto__1T9gR","colXxxl1":"Col_colXxxl1__2HmRy","colXxxl2":"Col_colXxxl2__1NTQj","colXxxl3":"Col_colXxxl3__13ao1","colXxxl4":"Col_colXxxl4__3yyNN","colXxxl5":"Col_colXxxl5__1ZuZ1","colXxxl6":"Col_colXxxl6__3xSwN","colXxxl7":"Col_colXxxl7__25qeF","colXxxl8":"Col_colXxxl8__zWyBq","colXxxl9":"Col_colXxxl9__1Wl-y","colXxxl10":"Col_colXxxl10__zw8IQ","colXxxl11":"Col_colXxxl11__3y59z","colXxxl12":"Col_colXxxl12__eBkT-","orderXxxlFirst":"Col_orderXxxlFirst__3HwJd","orderXxxlLast":"Col_orderXxxlLast__3mOy4"};
  styleInject(css$2);

  var Col =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Col, _Component);

    function Col() {
      _classCallCheck(this, Col);

      return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
    }

    _createClass(Col, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            textAlign = _this$props.textAlign,
            className = _this$props.className,
            id = _this$props.id,
            children = _this$props.children,
            xs = _this$props.xs,
            sm = _this$props.sm,
            md = _this$props.md,
            lg = _this$props.lg,
            xl = _this$props.xl,
            xxl = _this$props.xxl,
            xxxl = _this$props.xxxl,
            first = _this$props.first,
            firstSm = _this$props.firstSm,
            firstMd = _this$props.firstMd,
            firstLg = _this$props.firstLg,
            firstXl = _this$props.firstXl,
            firstXxl = _this$props.firstXxl,
            firstXxxl = _this$props.firstXxxl,
            last = _this$props.last,
            lastSm = _this$props.lastSm,
            lastMd = _this$props.lastMd,
            lastLg = _this$props.lastLg,
            lastXl = _this$props.lastXl,
            lastXxl = _this$props.lastXxl,
            lastXxxl = _this$props.lastXxxl;
        return React__default.createElement("div", {
          id: id,
          className: classnames(styles$2.col, (_classNames = {}, _defineProperty(_classNames, styles$2["textAlign-".concat(textAlign || '')], textAlign), _defineProperty(_classNames, styles$2["col".concat(xs || '')], xs), _defineProperty(_classNames, styles$2["colSm".concat(sm || '')], sm), _defineProperty(_classNames, styles$2["colMd".concat(md || '')], md), _defineProperty(_classNames, styles$2["colLg".concat(lg || '')], lg), _defineProperty(_classNames, styles$2["colXl".concat(xl || '')], xl), _defineProperty(_classNames, styles$2["colXxl".concat(xxl || '')], xxl), _defineProperty(_classNames, styles$2["colXxxl".concat(xxxl || '')], xxxl), _defineProperty(_classNames, styles$2.orderFirst, first), _defineProperty(_classNames, styles$2.orderSmFirst, firstSm), _defineProperty(_classNames, styles$2.orderMdFirst, firstMd), _defineProperty(_classNames, styles$2.orderLgFirst, firstLg), _defineProperty(_classNames, styles$2.orderXlFirst, firstXl), _defineProperty(_classNames, styles$2.orderXxlFirst, firstXxl), _defineProperty(_classNames, styles$2.orderXxxlFirst, firstXxxl), _defineProperty(_classNames, styles$2.orderLast, last), _defineProperty(_classNames, styles$2.orderSmLast, lastSm), _defineProperty(_classNames, styles$2.orderMdLast, lastMd), _defineProperty(_classNames, styles$2.orderLgLast, lastLg), _defineProperty(_classNames, styles$2.orderXlLast, lastXl), _defineProperty(_classNames, styles$2.orderXxlLast, lastXxl), _defineProperty(_classNames, styles$2.orderXxxlLast, lastXxxl), _classNames), className)
        }, children);
      }
    }]);

    return Col;
  }(React.Component);

  exports.Col = Col;
  exports.Container = Container;
  exports.Row = Row;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cherry.js.map
