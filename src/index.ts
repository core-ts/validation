export interface Phones {
  [key: string]: string;
}
// tslint:disable-next-line:class-name
export class resources {
  static phonecodes?: Phones;
  static email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/i;
  static phone = /^\d{5,14}$/;
  // private static _phoneRegex = /^[1]?[-. ]?(\(?([0-9]{3})\)?)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // private static _phoneRegex2 = /^[+][1][-. ]?(\(?([0-9]{3})\)?)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  static password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  static url = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  static digit = /^\d+$/;
  static amount = /^[0-9]{0,15}(?:\.[0-9]{1,3})?$/; // const regExp = /\d+\.\d+/;
  static percentage = /^[1-9][0-9]?$|^100$/;
  static digitAndDash = /^[0-9-]*$/;
  static digitAndChar = /^\w*\d*$/;
  static checkNumber = /^\d{0,8}$/;
  static ipv4 = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  static ipv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // For Canada Postal codes do not include the letters D, F, I, O, Q or U, and the first position also does not make use of the letters W or Z.
  static caPostcode = /^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][ -]?[0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][0-9]$/;
  static usPostcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
}

// tslint:disable-next-line:class-name
export class tel {
  static isPhone(str: string|null|undefined): boolean {
    if (!str || str.length === 0 || str === '+') {
      return false;
    }
    if (str.charAt(0) !== '+') {
      return resources.phone.test(str);
    } else {
      const phoneNumber = str.substring(1);
      if (!resources.phonecodes) {
        return resources.phone.test(phoneNumber);
      } else {
        if (resources.phone.test(phoneNumber)) {
          for (let degit = 1; degit <= 3; degit++) {
            const countryCode = phoneNumber.substr(0, degit);
            if (countryCode in resources.phonecodes) {
              return true;
            }
          }
          return false;
        } else {
          return false;
        }
      }
    }
  }
  static isFax(fax: string|null|undefined): boolean {
    return tel.isPhone(fax);
  }
}
export function isPhone(str: string|null|undefined): boolean {
  return tel.isPhone(str);
}
export function isFax(str: string|null|undefined): boolean {
  return tel.isFax(str);
}
export function isValidPassword(password: string): boolean {
  return resources.password.test(password);
}
export function isIPv6(ipv6: string|null|undefined): boolean {
  if (!ipv6 || ipv6.length === 0) {
    return false;
  }
  return resources.ipv6.test(ipv6);
}
export function isIPv4(ipv4: string|null|undefined): boolean {
  if (!ipv4 || ipv4.length === 0) {
    return false;
  }
  return resources.ipv4.test(ipv4);
}
export function isEmpty(str: string|null|undefined): boolean {
  return (!str || str === '');
}
export function isValidPattern(v: string, pattern: string, flags?: string|null): boolean {
  if (!isEmpty(pattern)) {
    if (!flags) {
      flags = 'g';
    }
    const p = new RegExp(pattern, flags);
    return p.test(v);
  } else {
    return false;
  }
}
export function isUrl(url: string|null|undefined): boolean {
  if (!url || url.length === 0) {
    return false;
  }
  return resources.url.test(url);
}
export function isEmail(email: string|null|undefined): boolean {
  if (!email || email.length === 0) {
    return false;
  }
  return resources.email.test(email);
}
export function isPercentage(v: string): boolean {
  return resources.percentage.test(v);
}
export function isTime4(str: string|null|undefined): boolean {
  if (!str || str.length !== 4) {
    return false;
  }
  if (isDigitOnly(str) === false) {
    return false;
  }
  const hours = parseInt(str.substring(0, 2), 10);
  const minutes = parseInt(str.substring(2), 10);
  if (hours > 24 || minutes > 59) {
    return false;
  } else {
    return true;
  }
}
export function isValidCode(str: string): boolean {
  return resources.digitAndChar.test(str);
}
export function isDashCode(str: string|null|undefined): boolean {
  if (!str || str.length === 0) {
    return false;
  }
  const len = str.length - 1;
  for (let i = 0; i <= len; i++) {
    const chr = str.charAt(i);
    if (!((chr >= '0' && chr <= '9') || (chr >= 'A' && chr <= 'Z') || (chr >= 'a' && chr <= 'z') || chr === '-')) {
      return false;
    }
  }
  return true;
}
export function isDigitOnly(v: string|null|undefined): boolean {
  if (!v) {
    return false;
  }
  return resources.digit.test(v);
}
export function isDashDigit(v: string): boolean {
  return resources.digitAndDash.test(v);
}
export function isCheckNumber(v: string): boolean {
  return resources.checkNumber.test(v);
}
export function isAmountNumber(v: string): boolean {
  return resources.amount.test(v);
}
export function isUSPostalCode(postcode: string): boolean {
  return resources.usPostcode.test(postcode);
}
export function isCAPostalCode(postcode: string): boolean {
  return resources.caPostcode.test(postcode);
}
