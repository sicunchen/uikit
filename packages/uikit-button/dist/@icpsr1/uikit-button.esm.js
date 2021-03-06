import React from 'react';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (_typeof(mix) === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function cx () {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

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

var css_248z = ".styles_Button__2GmQd {\n  background-color: #0018cf;\n  border-radius: 0.25rem;\n  border: 1px solid #0018cf;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.75rem 1rem;\n  transition: all 100ms ease-in-out;\n  width: auto;\n  outline: none;\n}\n\n.styles_Button__2GmQd:hover,\n.styles_Button__2GmQd:focus {\n  background-color: #2e27cc;\n  border-color: #2e27cc;\n}\n\n.styles_ButtonSecondary__2gAlX {\n  background-color: #000;\n  border-color: #000;\n}\n\n.styles_ButtonSecondary__2gAlX:hover,\n.styles_ButtonSecondary__2gAlX:focus {\n  background-color: #3d3d3d;\n  border-color: #3d3d3d;\n}\n\n.styles_ButtonDisabled__h0Xzi {\n  background-color: #a6a6a6;\n  border-color: #a6a6a6;\n  cursor: not-allowed;\n}\n.styles_ButtonDisabled__h0Xzi:hover,\n.styles_ButtonDisabled__h0Xzi:focus {\n  background-color: #a6a6a6;\n  border-color: #a6a6a6;\n}\n.styles_ButtonWarning__3QRXt {\n  background-color: #d93848;\n  border-color: #d93848;\n}\n.styles_ButtonWarning__3QRXt:hover,\n.styles_ButtonWarning__3QRXt:focus {\n  background-color: #eb4d5d;\n  border-color: #eb4d5d;\n}\n";
var styles = {"Button":"styles_Button__2GmQd","ButtonSecondary":"styles_ButtonSecondary__2gAlX","ButtonDisabled":"styles_ButtonDisabled__h0Xzi","ButtonWarning":"styles_ButtonWarning__3QRXt"};
styleInject(css_248z);

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      rest = _objectWithoutProperties(_ref, ["children", "className", "type"]);

  var classes = cx(styles.Button, _defineProperty({}, styles.ButtonSecondary, type === "secondary"), _defineProperty({}, styles.ButtonDisabled, type === "disabled"), _defineProperty({}, styles.ButtonWarning, type === "warning"), className);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    className: classes
  }), children);
};

export { Button };
