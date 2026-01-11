export type Type =
  | "ObjectId"
  | "date"
  | "datetime"
  | "time"
  | "boolean"
  | "number"
  | "integer"
  | "string"
  | "text"
  | "object"
  | "array"
  | "binary"
  | "primitives"
  | "booleans"
  | "numbers"
  | "integers"
  | "strings"
  | "dates"
  | "datetimes"
  | "times"
export type Format = "currency" | "percentage" | "email" | "url" | "phone" | "fax" | "ipv4" | "ipv6"

export type DataType = Type
export type FormatType = Format

export interface ErrorMessage {
  field: string
  code: string
  param?: string | number | Date
  message?: string
}

export interface Model {
  attributes: Attributes
}

export interface StringMap {
  [key: string]: string
}
export interface Attribute {
  name?: string
  type?: Type
  format?: Format
  required?: boolean
  enum?: string[] | number[]
  length?: number
  min?: number | Date | string
  max?: number | Date | string
  gt?: number | Date | string
  lt?: number | Date | string
  precision?: number
  scale?: number
  exp?: RegExp | string
  code?: string
  typeof?: Attributes
  noValidate?: boolean
  resource?: string
}
export interface Attributes {
  [key: string]: Attribute
}

export interface Phones {
  [key: string]: string
}
export function isEmpty(str?: string | null): boolean {
  return !str || str === ""
}
// tslint:disable-next-line:class-name
export class resources {
  static phonecodes?: Phones
  static ignoreDate?: boolean
  static digit = /^\d+$/
  static email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/i
  static url = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  static ipv4 = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/
  static ipv6 = /^(([0-9a-fA-F]{1,4}):){7}([0-9a-fA-F]{1,4})$/
  static isEmpty(str?: string | null): boolean {
    return str === ""
  }
  static isPhone(str: string): boolean {
    if (!str || str.length === 0 || str === "+") {
      return false
    }
    if (str.charAt(0) !== "+") {
      return isDigitOnly(str)
    } else {
      const phoneNumber = str.substring(1)
      if (!resources.phonecodes) {
        return isDigitOnly(phoneNumber)
      } else {
        if (isDigitOnly(phoneNumber)) {
          for (let degit = 1; degit <= 3; degit++) {
            const countryCode = phoneNumber.substring(0, degit)
            if (countryCode in resources.phonecodes) {
              return true
            }
          }
          return false
        } else {
          return false
        }
      }
    }
  }
  static isFax(fax: string): boolean {
    return resources.isPhone(fax)
  }
}
export function isPhone(str: string): boolean {
  return resources.isPhone(str)
}
export function isFax(str: string): boolean {
  return resources.isFax(str)
}
const st = "string"
export function isStrings(s?: string[]): boolean {
  if (!s || s.length === 0) {
    return true
  }
  for (const x of s) {
    if (typeof x !== st) {
      return false
    }
  }
  return true
}
export function isDates(s?: Date[] | string[]): boolean {
  if (!s || s.length === 0) {
    return true
  }
  for (let i = 0; i < s.length; i++) {
    const x = toDate(s[i])
    if (x) {
      s[i] = x
    } else {
      return false
    }
  }
  return true
}
export function isNumbers(s?: number[]): boolean {
  if (!s || s.length === 0) {
    return true
  }
  for (const x of s) {
    if (typeof x !== "number") {
      return false
    }
  }
  return true
}
export function isIntegers(s?: number[]): boolean {
  if (!s || s.length === 0) {
    return true
  }
  for (const x of s) {
    if (!Number.isInteger(x)) {
      return false
    }
  }
  return true
}
export function exist<T>(v: T, s: T[]) {
  for (const x of s) {
    if (v === x) {
      return true
    }
  }
  return false
}
export function toString(s: string[] | number[]): string {
  if (!s || s.length === 0) {
    return ""
  }
  const x: string[] = []
  for (const u of s) {
    x.push("" + u)
  }
  return x.join(", ")
}
export function isDigitOnly(str: string): boolean {
  if (!str) {
    return false
  }
  const r = new RegExp(resources.digit)
  return r.test(str)
}
export function isIPv4(ipv4: string): boolean {
  if (!ipv4 || ipv4.length === 0) {
    return false
  }
  const r = new RegExp(resources.ipv4)
  return r.test(ipv4)
}
export function isIPv6(ipv6: string): boolean {
  if (!ipv6 || ipv6.length === 0) {
    return false
  }
  const r = new RegExp(resources.ipv6)
  return r.test(ipv6)
}
export function isEmail(email: string): boolean {
  if (!email || email.length === 0) {
    return false
  }
  const r = new RegExp(resources.email)
  return r.test(email)
}
export function isUrl(url: string): boolean {
  const r = new RegExp(resources.url)
  return r.test(url)
}
export function isValidScale(n: number, scale?: number): boolean {
  if (isNaN(n) || n === undefined || n == null) {
    return true
  }
  if (scale === undefined || scale < 0) {
    return true
  }
  const s = n.toString()
  const i = s.indexOf(".")
  if (i < 0) {
    return true
  }
  const s2 = s.substring(i + 1)
  return s2.length <= scale
}
export function isValidPrecision(n: number, precision: number, scale?: number): boolean {
  if (isNaN(n) || n === undefined || n == null) {
    return true
  }
  if (precision === undefined || precision < 0) {
    return isValidScale(n, scale)
  }
  if (scale === undefined || scale < 0) {
    scale = 0
  }
  const s = n.toString()
  const i = s.indexOf(".")
  if (i < 0) {
    return s.length <= precision - scale
  }
  const s2 = s.substring(i + 1)
  if (s2.length > scale) {
    return false
  }
  const s3 = s.substring(0, i)
  return s3.length <= precision - scale
}
function createError(path: string, name: string, code: string | undefined, msg: string, param?: string | number | Date): ErrorMessage {
  let x = name
  if (path && path.length > 0) {
    x = path + "." + name
  }
  if (!code) {
    code = "string"
  }
  const error: ErrorMessage = {
    field: x,
    code,
  }
  if (msg) {
    error.message = msg
  }
  if (param) {
    error.param = param
  }
  return error
}

export function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime())
}
function toDate(v: number | string | Date): Date | null | undefined {
  if (!v) {
    return null
  }
  if (v instanceof Date) {
    return v
  } else {
    return new Date(v)
  }
}
export function trimTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
export function getToday(): Date {
  return trimTime(new Date())
}
export function addDays(date: Date, number: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + number)
  return d
}
function handleArrayMinMax(v: number, attr: Attribute, path: string, errors: ErrorMessage[], key: string, resource?: StringMap): void {
  if (attr.min && typeof attr.min === "number" && attr.min > 0 && v < attr.min) {
    const msg = createMessage(key, "min", "error_array_min", resource, attr.resource, attr.min.toString())
    errors.push(createError(path, key, "min", msg, attr.min))
  }
  if (attr.max && typeof attr.max === "number" && attr.max > 0 && v > attr.max) {
    const msg = createMessage(key, "max", "error_array_max", resource, attr.resource, attr.max.toString())
    errors.push(createError(path, key, "max", msg, attr.max))
  }
}
function handleMinMax(v: number | Date, attr: Attribute, path: string, errors: ErrorMessage[], key: string, resource?: StringMap): void {
  let na = attr.name
  if (!na) {
    na = ""
  }
  if (typeof v === "number") {
    if (attr.min != undefined) {
      if (v < (attr.min as number)) {
        const msg = createMessage(key, "min", "error_min", resource, attr.resource, attr.min.toString())
        errors.push(createError(path, na, "min", msg, attr.min))
      }
    } else if (attr.gt != undefined) {
      if (v <= (attr.gt as number)) {
        const msg = createMessage(key, "gt", "error_gt", resource, attr.resource, attr.gt.toString())
        errors.push(createError(path, na, "gt", msg, attr.gt))
      }
    }
    if (attr.max != undefined) {
      if (v > (attr.max as number)) {
        const msg = createMessage(key, "max", "error_max", resource, attr.resource, attr.max.toString())
        errors.push(createError(path, na, "max", msg, attr.max))
      }
    } else if (attr.lt != undefined) {
      if (v >= (attr.lt as number)) {
        const msg = createMessage(key, "lt", "error_lt", resource, attr.resource, attr.lt.toString())
        errors.push(createError(path, na, "lt", msg, attr.lt))
      }
    }
  } else if (v instanceof Date) {
    const t = v.getTime()
    if (attr.min) {
      if (attr.min instanceof Date) {
        if (t < attr.min.getTime()) {
          const msg = createMessage(key, "min", "error_min_date", resource, attr.resource, attr.min.toString())
          errors.push(createError(path, na, "min", msg, attr.min))
        }
      } else {
        switch (attr.min) {
          case "now":
            const now = new Date()
            if (t < now.getTime()) {
              const msg = createMessage(key, "min", "error_from_now", resource, attr.resource)
              errors.push(createError(path, na, "min", msg, "now"))
            }
            break
          case "today":
            const today = getToday()
            if (t < today.getTime()) {
              const msg = createMessage(key, "min", "error_from_today", resource, attr.resource)
              errors.push(createError(path, na, "min", msg, "today"))
            }
            break
          case "tomorrow":
            const tomorrow = addDays(getToday(), 1)
            if (t < tomorrow.getTime()) {
              const msg = createMessage(key, "min", "error_from_tomorrow", resource, attr.resource)
              errors.push(createError(path, na, "min", msg, "tomorrow"))
            }
            break
          case "yesterday":
            const yeserday = addDays(getToday(), -1)
            if (t < yeserday.getTime()) {
              const msg = createMessage(key, "min", "error_from_yeserday", resource, attr.resource)
              errors.push(createError(path, na, "min", msg, "yeserday"))
            }
            break
          default:
            const d = new Date(attr.min)
            attr.min = d
            if (t < d.getTime()) {
              const msg = createMessage(key, "min", "error_min_date", resource, attr.resource, attr.min.toString())
              errors.push(createError(path, na, "min", msg, attr.min))
            }
            break
        }
      }
    } else if (attr.gt) {
      if (attr.gt instanceof Date) {
        if (t <= attr.gt.getTime()) {
          const msg = createMessage(key, "gt", "error_after", resource, attr.resource, attr.gt.toString())
          errors.push(createError(path, na, "gt", msg, attr.gt))
        }
      } else {
        const d = new Date(attr.gt)
        attr.gt = d
        if (t <= d.getTime()) {
          const msg = createMessage(key, "gt", "error_after", resource, attr.resource, attr.gt.toString())
          errors.push(createError(path, na, "gt", msg, attr.gt))
        }
      }
    }
    if (attr.max) {
      if (attr.max instanceof Date) {
        if (t > attr.max.getTime()) {
          const msg = createMessage(key, "max", "error_max_date", resource, attr.resource, attr.max.toString())
          errors.push(createError(path, na, "max", msg, attr.max))
        }
      } else {
        switch (attr.max) {
          case "now":
            const now = new Date()
            if (t > now.getTime()) {
              const msg = createMessage(key, "max", "error_after_now", resource, attr.resource)
              errors.push(createError(path, na, "max", msg, "now"))
            }
            break
          case "today":
            const today = getToday()
            if (t > today.getTime()) {
              const msg = createMessage(key, "max", "error_after_today", resource, attr.resource)
              errors.push(createError(path, na, "max", msg, "today"))
            }
            break
          case "tomorrow":
            const tomorrow = addDays(getToday(), 1)
            if (t > tomorrow.getTime()) {
              const msg = createMessage(key, "max", "error_after_tomorrow", resource, attr.resource)
              errors.push(createError(path, na, "max", msg, "tomorrow"))
            }
            break
          case "yesterday":
            const yeserday = addDays(getToday(), -1)
            if (t > yeserday.getTime()) {
              const msg = createMessage(key, "max", "error_after_yeserday", resource, attr.resource)
              errors.push(createError(path, na, "max", msg, "yeserday"))
            }
            break
          default:
            const d = new Date(attr.max)
            attr.max = d
            if (t > d.getTime()) {
              const msg = createMessage(key, "max", "error_max_date", resource, attr.resource, attr.max.toString())
              errors.push(createError(path, na, "max", msg, attr.max))
            }
            break
        }
      }
    } else if (attr.lt) {
      if (attr.lt instanceof Date) {
        if (t >= attr.lt.getTime()) {
          const msg = createMessage(key, "lt", "error_before", resource, attr.resource, attr.lt.toString())
          errors.push(createError(path, na, "lt", msg, attr.lt))
        }
      } else {
        const d = new Date(attr.lt)
        attr.lt = d
        if (t >= d.getTime()) {
          const msg = createMessage(key, "lt", "error_before", resource, attr.resource, attr.lt.toString())
          errors.push(createError(path, na, "lt", msg, attr.lt))
        }
      }
    }
  }
}

const msgMap = new Map<string, StringFormat>()
export function createMessage(
  field: string,
  code: string,
  errorKey: string,
  resource?: StringMap,
  resourceKey?: string,
  param?: string | number | Date,
): string {
  if (!resource) {
    return ""
  }
  const p1b: string | undefined = resourceKey && resourceKey.length > 0 ? resource[resourceKey] : field
  const p1 = p1b ? p1b : field
  const um = resource[errorKey]
  if (!um) {
    return code
  } else {
    let sf = msgMap.get(um)
    if (!sf) {
      sf = buildFormat(um)
      msgMap.set(um, sf)
    }
    const obj: any = {"0": p1}
    if (param) {
      if (typeof param === st) {
        obj["1"] = param
      } else {
        obj["1"] = "" + param
      }
    } 
    return merge(obj, sf)
  }
}
function validateObject(
  obj: any,
  attributes: Attributes,
  errors: ErrorMessage[],
  path: string,
  resource?: StringMap,
  allowUndefined?: boolean,
  patch?: boolean,
  max?: number,
): void {
  const keys = Object.keys(attributes)
  let count = 0
  for (const key of keys) {
    count = count + 1
    const attr: Attribute = attributes[key]
    attr.name = key
    if (attr.noValidate) {
      continue
    }
    const na = attr.name
    const v = obj[na]
    if (v === undefined) {
      if (attr.required && !patch) {
        const msg = createMessage(key, "required", "error_required", resource, attr.resource)
        errors.push(createError(path, na, "required", msg))
      }
    } else if (v == null) {
      if (attr.required) {
        const msg = createMessage(key, "required", "error_required", resource, attr.resource)
        errors.push(createError(path, na, "required", msg))
      }
    } else {
      const t = typeof v
      const at = attr.type
      switch (at) {
        case "datetime":
          const date = toDate(v)
          if (date) {
            if (isValidDate(date)) {
              obj[na] = date
              handleMinMax(date, attr, path, errors, key, resource)
            } else {
              const msg = createMessage(key, "datetime", "error_datetime", resource, attr.resource)
              errors.push(createError(path, na, "type", msg, "datetime"))
              return
            }
          }
          break
        case "date": {
          if (resources.ignoreDate) {
            const date2 = toDate(v)
            if (date2) {
              if (isValidDate(date2)) {
                obj[na] = date2
                handleMinMax(date2, attr, path, errors, key, resource)
              } else {
                const msg = createMessage(key, "date", "error_date", resource, attr.resource)
                errors.push(createError(path, na, "type", msg, "date"))
                return
              }
            }
          }
          break
        }
        default: {
          switch (t) {
            case "string":
              if (at === undefined || at === "text" || at === "ObjectId" || at === "string") {
                let ne = true
                if (v.length === 0 && attr.required) {
                  if (resources.isEmpty(v)) {
                    const msg = createMessage(key, "required", "error_required", resource, attr.resource)
                    const err = createError(path, na, "required", msg)
                    errors.push(err)
                    ne = false
                  }
                }
                if (ne) {
                  if (attr.min && typeof attr.min === "number" && attr.min > 0 && v.length < attr.min) {
                    const msg = createMessage(key, "minlength", "error_minlength", resource, attr.resource, attr.min.toString())
                    errors.push(createError(path, na, "minlength", msg, attr.min))
                  }
                  if (attr.length && attr.length > 0 && v.length > attr.length) {
                    const msg = createMessage(key, "maxlength", "error_maxlength", resource, attr.resource, attr.length.toString())
                    errors.push(createError(path, na, "maxlength", msg, attr.length))
                  }
                  if (attr.format) {
                    switch (attr.format) {
                      case "email": {
                        if (!isEmail(v)) {
                          const msg = createMessage(key, "email", "error_email", resource, attr.resource)
                          errors.push(createError(path, na, "email", msg))
                        }
                        break
                      }
                      case "url": {
                        if (!isUrl(v)) {
                          const msg = createMessage(key, "url", "error_url", resource, attr.resource)
                          errors.push(createError(path, na, "url", msg))
                        }
                        break
                      }
                      case "phone": {
                        if (!resources.isPhone(v)) {
                          const msg = createMessage(key, "phone", "error_phone", resource, attr.resource)
                          errors.push(createError(path, na, "phone", msg))
                        }
                        break
                      }
                      case "fax": {
                        if (!resources.isFax(v)) {
                          const msg = createMessage(key, "fax", "error_fax", resource, attr.resource)
                          errors.push(createError(path, na, "fax", msg))
                        }
                        break
                      }
                      case "ipv4": {
                        if (!isIPv4(v)) {
                          const msg = createMessage(key, "ipv4", "error_ipv4", resource, attr.resource)
                          errors.push(createError(path, na, "ipv4", msg))
                        }
                        break
                      }
                      case "ipv6": {
                        if (!isIPv6(v)) {
                          const msg = createMessage(key, "ipv6", "error_ipv6", resource, attr.resource)
                          errors.push(createError(path, na, "ipv6", msg))
                        }
                        break
                      }
                      default: {
                        break
                      }
                    }
                  }
                  if (attr.exp) {
                    if (typeof attr.exp === "string") {
                      attr.exp = new RegExp(attr.exp)
                    }
                    const exp: RegExp = attr.exp
                    if (!exp.test(v)) {
                      const code = attr.code ? attr.code : "exp"
                      const msg = resource && attr.resource ? resource[attr.resource] : createMessage(key, "exp", "error_exp", resource)
                      errors.push(createError(path, na, code, msg))
                    }
                  }
                  if (attr.enum && attr.enum.length > 0) {
                    if (!exist(v, attr.enum as string[])) {
                      const msg = createMessage(key, "enum", "error_enum", resource, attr.resource, toString(attr.enum))
                      errors.push(createError(path, na, "enum", msg, toString(attr.enum)))
                    }
                  }
                }
              } else {
                const msg = createMessage(key, "type", "error_type", resource, attr.resource, "string")
                errors.push(createError(path, na, "type", msg, "string"))
                return
              }
              break
            case "number":
              if (attr.type === "integer") {
                if (!Number.isInteger(v) || isNaN(v)) {
                  const msg = createMessage(key, "integer", "error_integer", resource, attr.resource)
                  errors.push(createError(path, na, "type", msg, "integer"))
                }
              } else if (attr.type === "number") {
                if (isNaN(v)) {
                  const msg = createMessage(key, "number", "error_number", resource, attr.resource)
                  errors.push(createError(path, na, "type", msg, "number"))
                } else {
                  if (!isValidScale(v, attr.scale)) {
                    const msg = createMessage(key, "scale", "error_scale", resource, attr.resource, attr.scale)
                    errors.push(createError(path, na, "scale", msg))
                  } else if (attr.precision) {
                    if (!isValidPrecision(v, attr.precision, attr.scale)) {
                      const msg = createMessage(key, "precision", "error_precision", resource, attr.resource, attr.precision)
                      errors.push(createError(path, na, "precision", msg))
                    }
                  }
                }
              } else {
                const msg = createMessage(key, "type", "error_type", resource, attr.resource, "number")
                errors.push(createError(path, na, "type", msg, "number"))
                return
              }
              handleMinMax(v, attr, path, errors, key, resource)
              if (attr.enum && attr.enum.length > 0) {
                if (!exist(v, attr.enum as number[])) {
                  const msg = createMessage(key, "enum", "error_enum", resource, attr.resource, toString(attr.enum))
                  errors.push(createError(path, na, "enum", msg, toString(attr.enum)))
                }
              }
              break
            case "boolean":
              if (at !== "boolean") {
                const msg = createMessage(key, "boolean", "error_boolean", resource, attr.resource)
                errors.push(createError(path, na, "type", msg, "boolean"))
                return
              }
              break
            case "object":
              if (Array.isArray(v)) {
                switch (at) {
                  case "strings": {
                    if (!isStrings(v)) {
                      const msg = createMessage(key, "strings", "error_strings", resource, attr.resource)
                      errors.push(createError(path, na, "type", msg, "strings"))
                    } else {
                      handleArrayMinMax(v.length, attr, path, errors, key, resource)
                      if (attr.enum && attr.enum.length > 0) {
                        for (const x of v) {
                          if (!exist(x, attr.enum as string[])) {
                            const msg = createMessage(key, "enum", "error_enum", resource, attr.resource, toString(attr.enum))
                            errors.push(createError(path, na, "enum", msg, toString(attr.enum)))
                          }
                        }
                      }
                    }
                    break
                  }
                  case "numbers": {
                    if (!isNumbers(v)) {
                      const msg = createMessage(key, "numbers", "error_numbers", resource, attr.resource)
                      errors.push(createError(path, na, "type", msg, "numbers"))
                    } else {
                      handleArrayMinMax(v.length, attr, path, errors, key, resource)
                      if (attr.enum && attr.enum.length > 0) {
                        for (const x of v) {
                          if (!exist(x, attr.enum as number[])) {
                            const msg = createMessage(key, "enum", "error_enum", resource, attr.resource, toString(attr.enum))
                            errors.push(createError(path, na, "enum", msg, toString(attr.enum)))
                          }
                        }
                      }
                    }
                    break
                  }
                  case "integers": {
                    if (!isIntegers(v)) {
                      const msg = createMessage(key, "integers", "error_integers", resource, attr.resource)
                      errors.push(createError(path, na, "type", msg, "integers"))
                    } else {
                      handleArrayMinMax(v.length, attr, path, errors, key, resource)
                      if (attr.enum && attr.enum.length > 0) {
                        for (const x of v) {
                          if (!exist(x, attr.enum as number[])) {
                            const msg = createMessage(key, "enum", "error_enum", resource, attr.resource, toString(attr.enum))
                            errors.push(createError(path, na, "enum", msg, toString(attr.enum)))
                          }
                        }
                      }
                    }
                    break
                  }
                  case "datetimes": {
                    if (!isDates(v)) {
                      const msg = createMessage(key, "datetimes", "error_datetimes", resource, attr.resource)
                      errors.push(createError(path, na, "type", msg, "datetimes"))
                    }
                    break
                  }
                  case "dates": {
                    if (resources.ignoreDate) {
                      if (!isDates(v)) {
                        const msg = createMessage(key, "dates", "error_dates", resource, attr.resource)
                        errors.push(createError(path, na, "type", msg, "dates"))
                      }
                    }
                    break
                  }
                  case "array": {
                    handleArrayMinMax(v.length, attr, path, errors, key, resource)
                    for (let i = 0; i < v.length; i++) {
                      if (typeof v[i] !== "object") {
                        const y = path != null && path.length > 0 ? path + "." + key + "[" + i + "]" : key + "[" + i + "]"
                        const msg = createMessage(key, "type", "error_type", resource, attr.resource, typeof v[i])
                        errors.push(createError("", y, "type", msg, typeof v[i]))
                      } else if (attr.typeof) {
                        const y = path != null && path.length > 0 ? path + "." + key + "[" + i + "]" : key + "[" + i + "]"
                        validateObject(v[i], attr.typeof, errors, y, resource)
                      }
                    }
                    break
                  }
                  case "primitives": {
                    if (typeof v !== "object") {
                      const msg = createMessage(key, "type", "error_type", resource, attr.resource, typeof v)
                      errors.push(createError(path, na, "type", msg, "array"))
                      return
                    } else {
                      if (!Array.isArray(v)) {
                        const msg = createMessage(key, "type", "error_type", resource, attr.resource, typeof v)
                        errors.push(createError(path, na, "type", msg, "array"))
                        return
                      } else {
                        if (attr.code) {
                          if (attr.code === "date") {
                            for (let i = 0; i < v.length; i++) {
                              if (v[i]) {
                                const date3 = toDate(v[i])
                                if (date3) {
                                  if (!isValidDate(date3)) {
                                    const y = path != null && path.length > 0 ? path + "." + key + "[" + i + "]" : key + "[" + i + "]"
                                    const msg = createMessage(key, "date", "error_date", resource, attr.resource)
                                    const err = createError("", y, "type", msg, "date")
                                    errors.push(err)
                                  } else {
                                    v[i] = date3
                                  }
                                }
                              }
                            }
                          } else {
                            for (let i = 0; i < v.length; i++) {
                              if (v[i] && typeof v[i] !== attr.code) {
                                const y = path != null && path.length > 0 ? path + "." + key + "[" + i + "]" : key + "[" + i + "]"
                                const msg = createMessage(key, "type", "error_type", resource, attr.resource, typeof v[i])
                                const err = createError("", y, "type", msg, typeof v[i])
                                errors.push(err)
                              }
                            }
                          }
                        }
                      }
                    }
                    break
                  }
                  case "times":
                    break
                  default:
                    const msg = createMessage(key, "type", "error_type", resource, attr.resource, typeof v)
                    errors.push(createError(path, na, "type", msg, at))
                    return
                }
                /*
                if (attr.min && typeof attr.min === "number" && attr.min > 0 && v.length < attr.min) {
                  const msg = createMessage(key, "min", "error_min", resource, attr.resource)
                  errors.push(createError(path, na, "min", msg, attr.min))
                }
                if (attr.max && typeof attr.max === "number" && attr.max > 0 && v.length > attr.max) {
                  const msg = createMessage(key, "max", "error_max", resource, attr.resource)
                  errors.push(createError(path, na, "max", msg, attr.max))
                }
                  */
              } else if (at === "object") {
                if (typeof v !== "object") {
                  const msg = createMessage(key, "max", "error_max", resource, attr.resource, typeof v)
                  errors.push(createError(path, na, "type", msg, "object"))
                  return
                } else {
                  if (Array.isArray(v)) {
                    const msg = createMessage(key, "max", "error_max", resource, attr.resource, typeof v)
                    errors.push(createError(path, na, "type", msg, "object"))
                  } else if (attr.typeof) {
                    const x = path != null && path.length > 0 ? path + "." + key : key
                    validateObject(v, attr.typeof, errors, x, resource)
                  }
                }
              }
              break
            default:
              break
          }
          break
        }
      }
      if (max !== undefined && errors.length >= max) {
        return
      }
    }
  }
  if (!allowUndefined) {
    checkUndefined(obj, attributes, errors, path, resource)
  }
}
export function checkUndefined<T>(obj: T, attrs: Attributes, errors: ErrorMessage[], path: string, resource?: StringMap): void {
  const keys = Object.keys(obj as any)
  for (const key of keys) {
    const attr = attrs[key]
    if (!attr) {
      const msg = createMessage(key, "undefined", "error_undefined", resource)
      errors.push(createError(path, key, "undefined", msg))
    }
  }
}
export function check<T>(obj: T, attributes: Attributes, resource?: StringMap, patch?: boolean, allowUndefined?: boolean, max?: number): ErrorMessage[] {
  const errors: ErrorMessage[] = []
  const path = ""
  if (max === null) {
    max = undefined
  }
  validateObject(obj, attributes, errors, path, resource, allowUndefined, patch, max)
  return errors
}
export function validate<T>(obj: T, attributes: Attributes, resource?: StringMap, allowUndefined?: boolean, patch?: boolean, max?: number): ErrorMessage[] {
  return check(obj, attributes, resource, patch, allowUndefined, max)
}
// tslint:disable-next-line:max-classes-per-file
export class Validator<T> {
  max: number
  constructor(public attributes: Attributes, public allowUndefined?: boolean, max?: number) {
    this.max = max ? max : 10
    this.validate = this.validate.bind(this)
  }
  validate(obj: T, resource?: StringMap, patch?: boolean): Promise<ErrorMessage[]> {
    const errors = check(obj, this.attributes, resource, patch, this.allowUndefined, this.max)
    return Promise.resolve(errors)
  }
}
export function createValidator<T>(attributes: Attributes, allowUndefined?: boolean, max?: number): Validator<T> {
  return new Validator(attributes, allowUndefined, max)
}

export interface Parameter {
  name: string;
}
export interface StringFormat {
  texts: string[];
  parameters: Parameter[];
}
export function isValidProperty(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    const chr = str.charAt(i);
    if (!(chr >= '0' && chr <= '9')) {
      return false;
    }
  }
  return true;
}
export function buildFormat(str: string): StringFormat {
  const texts = [];
  const parameters = [];
  let from = 0;
  let from2 = 0;
  let i = 0;
  let j = 0;
  while (true) {
    i = str.indexOf('{', from2);
    if (i >= 0) {
      j = str.indexOf('}', i + 1);
      if (j >= 0) {
        const pro = str.substring(i + 1, j);
        if (isValidProperty(pro)) {
          let name: string;
          name = pro;
          texts.push(str.substring(from, i));
          const parameter: Parameter = { name };
          parameters.push(parameter);
          from = j + 1;
          from2 = from;
        } else {
          from2 = j + 1;
        }
      } else {
        from = i + 1;
        from2 = from;
      }
    } else {
      texts.push(str.substring(from));
      break;
    }
  }
  const format: StringFormat = { texts, parameters };
  return format;
}
export function valueOf(obj: any, key: string): any {
  if (obj && obj.hasOwnProperty(key)) {
    return obj[key];
  }
  return "";
}
export function merge(obj: any, format: StringFormat): string {
  const results: string[] = [];
  const parameters = format.parameters;
  const texts = format.texts;
  const length = parameters.length;
  for (let i = 0; i < length; i++) {
    results.push(texts[i]);
    const p = valueOf(obj, parameters[i].name);
    results.push(p);
  }
  if (texts[length] && texts[length].length > 0) {
    results.push(texts[length]);
  }
  return results.join('')
}
