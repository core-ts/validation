"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resources = (function () {
  function resources() {
  }
  resources.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/i;
  resources.phone = /^\d{5,14}$/;
  resources.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  resources.url = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  resources.digit = /^\d+$/;
  resources.amount = /^[0-9]{0,15}(?:\.[0-9]{1,3})?$/;
  resources.percentage = /^[1-9][0-9]?$|^100$/;
  resources.digitAndDash = /^[0-9-]*$/;
  resources.digitAndChar = /^\w*\d*$/;
  resources.lowerDashCode = '^(?=.*[a-z])[a-z0-9_]{1,100}$';
  resources.checkNumber = /^\d{0,8}$/;
  resources.ipv4 = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  resources.ipv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  resources.caPostcode = /^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][ -]?[0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][0-9]$/;
  resources.usPostcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  return resources;
}());
exports.resources = resources;
var tel = (function () {
  function tel() {
  }
  tel.isPhone = function (str) {
    if (!str || str.length === 0 || str === '+') {
      return false;
    }
    var r = new RegExp(resources.phone);
    if (str.charAt(0) !== '+') {
      return r.test(str);
    }
    else {
      var phoneNumber = str.substring(1);
      if (!resources.phonecodes) {
        return r.test(phoneNumber);
      }
      else {
        if (r.test(phoneNumber)) {
          for (var degit = 1; degit <= 3; degit++) {
            var countryCode = phoneNumber.substr(0, degit);
            if (countryCode in resources.phonecodes) {
              return true;
            }
          }
          return false;
        }
        else {
          return false;
        }
      }
    }
  };
  tel.isFax = function (fax) {
    return tel.isPhone(fax);
  };
  return tel;
}());
exports.tel = tel;
function isPhone(str) {
  return tel.isPhone(str);
}
exports.isPhone = isPhone;
function isFax(str) {
  return tel.isFax(str);
}
exports.isFax = isFax;
function isValidPassword(password) {
  var r = new RegExp(resources.password);
  return r.test(password);
}
exports.isValidPassword = isValidPassword;
function isIPv6(ipv6) {
  if (!ipv6 || ipv6.length === 0) {
    return false;
  }
  var r = new RegExp(resources.ipv6);
  return r.test(ipv6);
}
exports.isIPv6 = isIPv6;
function isIPv4(ipv4) {
  if (!ipv4 || ipv4.length === 0) {
    return false;
  }
  var r = new RegExp(resources.ipv4);
  return r.test(ipv4);
}
exports.isIPv4 = isIPv4;
function isEmpty(str) {
  return (!str || str === '');
}
exports.isEmpty = isEmpty;
function isValidPattern(v, pattern, flags) {
  if (!isEmpty(pattern)) {
    if (!flags) {
      flags = 'g';
    }
    var p = new RegExp(pattern, flags);
    return p.test(v);
  }
  else {
    return false;
  }
}
exports.isValidPattern = isValidPattern;
function isUrl(url) {
  if (!url || url.length === 0) {
    return false;
  }
  var r = new RegExp(resources.url);
  return r.test(url);
}
exports.isUrl = isUrl;
function isEmail(email) {
  if (!email || email.length === 0) {
    return false;
  }
  var r = new RegExp(resources.email);
  return r.test(email);
}
exports.isEmail = isEmail;
function isPercentage(v) {
  var r = new RegExp(resources.percentage);
  return r.test(v);
}
exports.isPercentage = isPercentage;
function isTime4(str) {
  if (!str || str.length !== 4) {
    return false;
  }
  if (isDigitOnly(str) === false) {
    return false;
  }
  var hours = parseInt(str.substring(0, 2), 10);
  var minutes = parseInt(str.substring(2), 10);
  if (hours > 24 || minutes > 59) {
    return false;
  }
  else {
    return true;
  }
}
exports.isTime4 = isTime4;
function isValidCode(str) {
  var r = new RegExp(resources.digitAndChar);
  return r.test(str);
}
exports.isValidCode = isValidCode;
function isDashCode(str) {
  if (!str || str.length === 0) {
    return false;
  }
  var len = str.length - 1;
  for (var i = 0; i <= len; i++) {
    var chr = str.charAt(i);
    if (!((chr >= '0' && chr <= '9') || (chr >= 'A' && chr <= 'Z') || (chr >= 'a' && chr <= 'z') || chr === '-')) {
      return false;
    }
  }
  return true;
}
exports.isDashCode = isDashCode;
function isDigitOnly(v) {
  if (!v) {
    return false;
  }
  var r = new RegExp(resources.digit);
  return r.test(v);
}
exports.isDigitOnly = isDigitOnly;
function isDashDigit(v) {
  var r = new RegExp(resources.digitAndDash);
  return r.test(v);
}
exports.isDashDigit = isDashDigit;
function isLowerDashCode(v) {
  var p = new RegExp(resources.lowerDashCode, 'g');
  return p.test(v);
}
exports.isLowerDashCode = isLowerDashCode;
function isCheckNumber(v) {
  var r = new RegExp(resources.checkNumber);
  return r.test(v);
}
exports.isCheckNumber = isCheckNumber;
function isAmountNumber(v) {
  var r = new RegExp(resources.amount);
  return r.test(v);
}
exports.isAmountNumber = isAmountNumber;
function isUSPostalCode(postcode) {
  var r = new RegExp(resources.usPostcode);
  return r.test(postcode);
}
exports.isUSPostalCode = isUSPostalCode;
function isCAPostalCode(postcode) {
  var r = new RegExp(resources.caPostcode);
  return r.test(postcode);
}
exports.isCAPostalCode = isCAPostalCode;
function isDate(v) {
  var _a;
  var date = (_a = new Date(v)) === null || _a === void 0 ? void 0 : _a.getDate();
  return !isNaN(date);
}
exports.isDate = isDate;
function isValidDate(date) {
  return !(!(date instanceof Date) || date.toString() === "Invalid Date");
}
exports.isValidDate = isValidDate;
