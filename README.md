# validation-core
- validation-core is a lightweight JavaScript validation library designed for validating objects, arrays, and deeply nested data structures.
- It supports built-in rules with fully customizable error messages:
  - type (string, Date, number, integer, boolean)
  - format (email, phone number, URL, IP Address, RegExp)
  - min, max, enum
  - custom rules
- It also supports multi-language error handling by allowing custom message injection per field.
- With no dependencies, it's ideal for both frontend forms (React, Angular, Vue) and backend APIs.

## 📦 Key Features
- Data Type validation: string, Date, number, integer, boolean
- Format validation (for string): email, phone number, URL, IP Address, RegExp
- Nested Object Validation: Supports deep validation of nested structures
- Array Validation: Validate array items with itemType, along with min and max constraints
- Custom Rules:
  - rule: for simple synchronous logic
  - custom: for advanced validation (return error message with error code, error description)
- Custom Error Messages: Fully localized/custom error support per field/rule.
- Multi-language Friendly: Error messages can be defined in any language.
- Form-friendly: Designed for both backend and frontend use.

### ⚙️ Detailed Features

<table><thead>

<tr>
<th>String</th>
<th>Number</th>
<th>Date</th>
<th>Boolean</th>
<th>Nested Object</th>
<th>Array</th>
</tr></thead><tbody>

<tr>
<td>✅ Required</td>
<td>✅ Required</td>
<td>✅ Required</td>
<td>✅ Required</td>
<td>✅ Required</td>
<td>✅ Required</td>
</tr>

<tr>
<td>✅ Enum</td>
<td>✅ Enum</td>
<td></td>
<td></td>
<td></td>
<td>✅ Enum</td>
</tr>

<tr>
<td>✅ Min Length</td>
<td>✅ Min </td>
<td>✅ Min </td>
<td></td>
<td></td>
<td>✅ Min Length</td>
</tr>

<tr>
<td>✅ Max Length</td>
<td>✅ Max</td>
<td>✅ Max</td>
<td></td>
<td></td>
<td>✅ Max Length</td>
</tr>

<tr>
<td>✅ Email</td>
<td>✅ gt (greater than)</td>
<td>✅ gt (greater than)</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>✅ URL</td>
<td>✅ lt (less than)</td>
<td>✅ lt (less than)</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>✅ IP v4</td>
<td>✅ Precision</td>
<td>✅ <b>Relative date</b>:</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>✅ IP v6</td>
<td>✅ Scale</td>
<td>now ✅</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>✅ Phone</td>
<td></td>
<td>today ✅</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>✅ Fax</td>
<td></td>
<td>tomorrow ✅</td>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>✅ Regex match</td>
<td>✅ Integer</td>
<td>yesterday ✅</td>
<td></td>
<td></td>
<td></td>
</tr>

</tbody></table>

## 🛠️ Advantages
- Rich Features: Yes (Look at below Feature Comparison)
- JSON Schema Support: Yes
- Performance: Fast, very lightweight, rule-by-rule
- Typescript/Javascript Support: Yes
- Custom Validators: Yes
- Integration: node, express, react, angular, vue
- Validation Output: Structured Errors (JSON)
- Size: Small
- Dependencies: No
- Learning Curve: Fast (standard JSON Schema)

## 🧱 Real Samples
- Simple Sample: [data-validation-sample](https://github.com/typescript-tutorial/data-validation-sample)
- Simple REST API Sample: [mongo-simple-modular-sample](https://github.com/source-code-template/mongo-simple-modular-sample)
- Backoffice Web App: [backoffice](https://github.com/content-system/backoffice)
- React Sample: [react-cms-backoffice](https://github.com/content-system/react-cms-backoffice)

## 🚀 Benchmark
See the benchmark source code at [data-validation-benchmark](https://github.com/typescript-tutorial/data-validation-benchmark)

<table><thead><tr>
<th><b>Rank</b></th>
<th><b>Library</b></th>
<th><b>Ops/sec</b></th>
<th><b>RME (%)</b></th>
<th><b>Samples</b></th>
<th><b>Size (min+gz)</b></th>
<th><b>Relative Speed (vs fastest)</b></th>
<th><b>Times Slower than Ajv</b></th>
<th><b>Note</b></th>
</tr></thead><tbody>

<tr>
<td>🥇 1</td>
<td>Ajv</td>
<td>6,091,923</td>
<td>0.76%</td>
<td>100</td>
<td>📦 ~114 KB</td>
<td>🏆 1.00× (fastest)</td>
<td>🏆 1×</td>
<td>⚡ Fastest + Heavier bundle</td>
</tr>

<tr>
<td>🥈 2</td>
<td>validation-core</td>
<td>1,246,188</td>
<td>1.29%</td>
<td>92</td>
<td>⚡ ~3.8 KB</td>
<td>~20.46% of Ajv</td>
<td>~4.9×</td>
<td>🔥 Very Fast + Small</td>
</tr>

<tr>
<td>🥉 3</td>
<td>Zod</td>
<td>939,381</td>
<td>0.31%</td>
<td>96</td>
<td>🧱 ~25 KB</td>
<td>~15.42% of Ajv</td>
<td>~6.5×</td>
<td>🐇 Fast + Medium Size</td>
</tr>

<tr>
<td>4</td>
<td>Valibot</td>
<td>859,490</td>
<td>0.24%</td>
<td>95</td>
<td>⚡ ~4 KB</td>
<td>~14.11% of Ajv</td>
<td>~7.1×</td>
<td>🐇 Fast + Small Size</td>
</tr>

<tr>
<td>5</td>
<td>Joi</td>
<td>344,710</td>
<td>0.37%</td>
<td>93</td>
<td>📦 ~80 KB</td>
<td>~5.56% of Ajv</td>
<td>~17.7×</td>
<td>🐢 Slow + Heavy Size</td>
</tr>

<tr>
<td>6</td>
<td>Yup</td>
<td>115,048</td>
<td>0.34%</td>
<td>91</td>
<td>🧱 ~28 KB</td>
<td>~1.89% of Ajv</td>
<td>~52.9×</td>
<td>🐢 Slowest + Medium Size + Frontend-oriented</td>
</tr>

</tbody></table>

### 🔍 Key Insights
#### ✅ Ajv
- Top performer with ~6.09 million ops/sec.
- Best for JSON Schema validation, high-throughput services.
- Ideal for performance-critical Node.js or edge runtimes.
#### ✅ validation-core
- ~4.9x slower than Ajv, but ~1.3x faster than Zod, and even faster than Valibot.
- validation-core is focused on bundle small size + performance, good for frontend.
- Excellent TypeScript inference, flexible custom rules.
- Very good for internal tools, low-code platforms, or apps that require typed validation
#### ⚖️ Zod vs. Valibot
- Nearly similar in ops/sec, suggesting similar architecture or design trade-offs.
- Good for TypeScript-first developer experience but noticeably slower than Ajv/validation-core.
- Both offer great DX.
- Valibot is focused on bundle size + performance, good for frontend.
- Zod still preferred if you need ecosystem maturity and developer ergonomics.
#### ❌ Joi and Yup
- Significantly slower, not suited for performance-sensitive applications.
- Useful in some backend contexts (Joi) or form validation (Yup), but not recommended when performance matters.

### 🏁 Recommendation by Use Case
<table><thead>

<tr>
<th>Use Case</th>
<th>Library</th>
<th>Reason</th>
</tr></thead><tbody>

<tr>
<td>High-throughput backend APIs</td>
<td><b>Ajv</b></td>
<td>Fastest JSON Schema validator</td>
</tr>

<tr>
<td>Minimal frontend apps with type-safe apps and custom rules</td>
<td><b>validation-core</b></td>
<td>Good speed, excellent TypeScript integration</td>
</tr>

<tr>
<td>Minimal frontend apps</td>
<td><b>Valibot</b></td>
<td>Lightweight and efficient</td>
</tr>

<tr>
<td>DX-focused development</td>
<td><b>Zod</b></td>
<td>Clean syntax, popular, ideal for prototypes</td>
</tr>

<tr>
<td>Legacy/enterprise backend apps</td>
<td><b>Joi</b></td>
<td>Powerful features, but low performance</td>
</tr>

<tr>
<td>Form validation in React (Formik)</td>
<td><b>Yup</b></td>
<td>Integrated with form tools, but slow</td>
</tr>

</tbody></table>

### 📌 Summary
- If you need speed: → Ajv
- If you want typescript + good speed + small: → validation-core
- If you prefer a big community support over speed: → Zod or Valibot
- If you already use Formik or legacy stack: → Yup or Joi

## 📊 Feature Comparison

<table><thead>

<tr>
<th>Feature / Library</th>
<th><b>Ajv</b></th>
<th><b>validation-core</b></th>
<th><b>Zod</b></th>
<th><b>Valibot</b></th>
<th><b>Joi</b></th>
<th><b>Yup</b></th>
</tr></thead><tbody>

<tr>
<td><b>Required</b></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>


<tr>
<td><b>Object / Nested validation</b></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>

<tr>
<td><b>Array validation</b></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>

<tr>
<td><b>Email</b></td>
<td>✅ <code>format: "email"</code></td>
<td>✅ <code>format: "email"</code></td>
<td>✅ <code>.email()</code></td>
<td>✅ <code>string([email()])</code></td>
<td>✅ <code>.email()</code></td>
<td>✅ <code>.email()</code></td>
</tr>

<tr>
<td><b>URL</b></td>
<td>✅ <code>format: "uri"</code></td>
<td>✅ <code>format: "url"</code></td>
<td>✅ <code>.url()</code></td>
<td>✅ <code>string([url()])</code></td>
<td>✅ <code>.uri()</code></td>
<td>✅ <code>.url()</code></td>
</tr>

<tr>
<td><b>IPv4 check</b></td>
<td>✅ <code>format: "ipv4"</code></td>
<td>✅ <code>format: "ipv4"</code></td>
<td>⚠️ Regex only</td>
<td>⚠️ Regex only</td>
<td>✅ <code>.ip({ version: ["ipv4"] })</code></td>
<td>⚠️ Regex only</td>
</tr>

<tr>
<td><b>IPv6 check</b></td>
<td>✅ <code>format: "ipv6"</code></td>
<td>✅ <code>format: "ipv6"</code></td>
<td>⚠️ Regex only</td>
<td>⚠️ Regex only</td>
<td>✅ <code>.ip({ version: ["ipv6"] })</code></td>
<td>⚠️ Regex only</td>
</tr>

<tr>
<td><b>Phone number</b></td>
<td>⚠️ No built-in — regex only</td>
<td>✅ <code>format: "phone"</code></td>
<td>⚠️ No built-in — regex only</td>
<td>⚠️ No built-in — regex only</td>
<td>⚠️ No built-in — use <code>.pattern()</code> or <code>.custom()</code> with phone regex</td>
<td>⚠️ No built-in — use <code>.matches()</code> with regex</td>
</tr>

<tr>
<td><b>Fax number</b></td>
<td>⚠️ No built-in — regex only</td>
<td>✅ <code>format: "fax"</code></td>
<td>⚠️ No built-in — regex only</td>
<td>⚠️ No built-in — regex only</td>
<td>⚠️ No built-in — use <code>.pattern()</code> or <code>.custom()</code> with phone regex</td>
<td>⚠️ No built-in — use <code>.matches()</code> with regex</td>
</tr>

<tr>
<td><b>Regex match</b></td>
<td>✅ <code>pattern</code></td>
<td>✅ <code>pattern</code></td>
<td>✅ <code>.regex()</code></td>
<td>✅ <code>string([regex(...)])</code></td>
<td>✅ <code>.pattern()</code></td>
<td>✅ <code>.matches()</code></td>
</tr>

<tr>
<td><b>Enum values</b></td>
<td>✅ <code>enum</code></td>
<td>✅ <code>enum</code></td>
<td>✅ <code>z.enum([...])</code></td>
<td>✅ <code>enumType()</code></td>
<td>✅ <code>.valid(a,b,c)</code></td>
<td>✅ <code>.oneOf([...])</code></td>
</tr>

<tr>
<td><b>Min/Max length (string)</b></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>


<tr>
<td><b>Number type</b></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>

<tr>
<td><b>Min/Max value (number/date)</b></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>

<tr>
<td><b>Precision (decimal places)</b></td>
<td>⚠️ <code>multipleOf</code></td>
<td>✅ <code>precision: n</code></td>
<td>⚠️ <code>.multipleOf()</code> / <code>.refine()</code></td>
<td>⚠️ <code>.refine()</code></td>
<td>✅ <code>.precision(n)</code></td>
<td>⚠️ <code>.test()</code></td>
</tr>

<tr>
<td><b>Scale (integer + fraction limits)</b></td>
<td>⚠️ Custom</td>
<td>✅ <code>scale: n</code></td>
<td>⚠️ Custom</td>
<td>⚠️ Custom</td>
<td>⚠️ Partial via <code>.precision()</code> + <code>.max()</code></td>
<td>⚠️ Custom</td>
</tr>

<tr>
<td><b>Date type</b></td>
<td>✅ <code>format: "date" / "date-time"</code></td>
<td>✅ <code>type: "date" | "datetime"</code></td>
<td>✅ <code>z.date()</code> / <code>.datetime()</code></td>
<td>✅ <code>date()</code></td>
<td>✅ <code>.date()</code></td>
<td>✅ <code>.date()</code></td>
</tr>

<tr>
<td><b>Relative date (now/today/tomorrow/yesterday)</b></td>
<td>⚠️ Custom keyword</td>
<td>✅ <code>min: "now" | "today" | "tomorrow" | "yesterday"</code></td>
<td>⚠️ <code>.refine()</code></td>
<td>⚠️ <code>.refine()</code></td>
<td>✅ <code>.min('now')</code> / <code>.max('now')</code> + <code>Date</code> values</td>
<td>⚠️ Custom <code>.min()</code> / <code>.max()</code></td>
</tr>

<tr>
<td><b>Performance</b></td>
<td>⚡ Fastest</td>
<td>🔥 Fast</td>
<td>🐇 Good</td>
<td>🐇 Good</td>
<td>🐢 Slower</td>
<td>🐢 Slower</td>
</tr>

<tr>
<td><b>Bundle size (browser)</b></td>
<td>Large (~60KB+, tree-shakeable)</td>
<td>Small (~4KB)</td>
<td>Medium (~20KB)</td>
<td>Small (~6–8KB)</td>
<td>Large (~70KB+)</td>
<td>Medium (~30KB)</td>
</tr>

<tr>
<td><b>Best use case</b></td>
<td>API validation, JSON Schema compliance</td>
<td>API validation, JSON Schema compliance, minimal frontend</td>
<td>TS-safe runtime validation</td>
<td>Lightweight TS-safe validation</td>
<td>Rich backend business rules</td>
<td>Frontend form validation</td>
</tr>

</tbody></table>

## 🧱 Samples
### Sample 1
```typescript
import { Attributes, StringMap, validate } from "validation-core"

interface Resources {
  [key: string]: StringMap
}

const enResource: StringMap = {
  error_undefined: "{0} is not allowed to exist.",
  error_exp: "{0} does not match the regular expression.",
  error_type: "Invalid datatype. Type of {0} cannot be {1}.",

  error_required: "{0} is required.",
  error_minlength: "{0} cannot be less than {1} characters.",
  error_maxlength: "{0} cannot be greater than {1} characters.",

  error_email: "{0} is not a valid email address.",
  error_integer: "{0} is not a valid integer.",
  error_number: "{0} is not a valid number.",
  error_precision: "{0} has a valid precision. Precision must be less than or equal to {1}",
  error_scale: "{0} has a valid scale. Scale must be less than or equal to {1}",
  error_phone: "{0} is not a valid phone number.",
  error_fax: "{0} is not a valid fax number.",
  error_url: "{0} is not a valid URL.",
  error_ipv4: "{0} is not a valid ipv4.",
  error_ipv6: "{0} is not a valid ipv6.",

  error_min: "{0} must be greater than or equal to {1}.",
  error_max: "{0} must be less than or equal to {1}.",
  error_date: "{0} is not a valid date.",
  error_enum: "{0} must be one of {1}.",

  username: "Username",
  date_of_birth: "Date Of Birth",
  telephone: "Telephone",
  email: "Email",
  website: "Website",
  status: "User Status",
  credit_limit: "Credit Limit",
}

const viResource = {
  error_undefined: "{0} không được phép tồn tại.",
  error_exp: "{0} không khớp với biểu thức chính quy.",
  error_type: "Kiểu dữ liệu không hợp lệ. Kiểu của {0} không thể là {1}.",

  error_required: "{0} là bắt buộc.",
  error_minlength: "{0} không được ít hơn {1} ký tự.",
  error_maxlength: "{0} không được nhiều hơn {1} ký tự.",

  error_email: "{0} không phải là địa chỉ email hợp lệ.",
  error_integer: "{0} không phải là số nguyên hợp lệ.",
  error_number: "{0} không phải là số hợp lệ.",
  error_precision: "{0} có độ chính xác không hợp lệ. Độ chính xác phải nhỏ hơn hoặc bằng {1}.",
  error_scale: "{0} có thang đo không hợp lệ. Thang đo phải nhỏ hơn hoặc bằng {1}.",
  error_phone: "{0} không phải là số điện thoại hợp lệ.",
  error_fax: "{0} không phải là số fax hợp lệ.",
  error_url: "{0} không phải là URL hợp lệ.",
  error_ipv4: "{0} không phải là địa chỉ IPv4 hợp lệ.",
  error_ipv6: "{0} không phải là địa chỉ IPv6 hợp lệ.",

  error_min: "{0} phải lớn hơn hoặc bằng {1}.",
  error_max: "{0} phải nhỏ hơn hoặc bằng {1}.",
  error_date: "{0} không phải là ngày hợp lệ.",
  error_enum: "{0} phải là một trong các giá trị sau: {1}.",

  username: "Tên người dùng",
  date_of_birth: "Ngày sinh",
  telephone: "Điện thoại",
  email: "Địa chỉ email",
  website: "Trang web",
  status: "Trạng thái người dùng",
  credit_limit: "Hạn mức tín dụng",
}

const resources: Resources = {
  en: enResource,
  vi: viResource,
}

function getResource(lang: string): StringMap {
  return resources[lang] || resources["en"]
}
const resource = getResource("en") // or "vi" for Vietnamese

interface User {
  id: string
  username: string
  email?: string
  phone?: string
  ip?: string
  dateOfBirth?: Date
  website?: string
  creditLimit?: number
  status?: string[]
}

const userSchema: Attributes = {
  id: {
    length: 40,
  },
  username: {
    required: true,
    length: 255,
    resource: "username",
  },
  email: {
    format: "email",
    required: true,
    length: 120,
    resource: "email",
  },
  phone: {
    format: "phone",
    required: true,
    length: 14,
    resource: "telephone",
  },
  ip: {
    format: "ipv4",
    length: 15,
  },
  website: {
    length: 255,
    format: "url",
    resource: "website",
  },
  dateOfBirth: {
    type: "datetime",
  },
  creditLimit: {
    type: "number",
    scale: 2,
    min: 1,
    max: 200000,
    resource: "credit_limit",
  },
  status: {
    type: "strings",
    enum: ["active", "inactive", "online", "offline", "away"],
    resource: "status",
  },
}

const invalidUser = {
  id: "12345678901234567890123456789012345678901", // 41 characters => maximum 40 => invalid
  // username: "james.howlett", // required => invalid
  email: "james.howlett@gmail", // invalid email
  phone: "abcd1234", // required => invalid
  ip: "abcd1234", // invalid => not required
  website: "invalid website",
  dateOfBirth: "1974-03-25", // valid date => the library will convert to date
  creditLimit: 10000000.255, // invalid precision and scale => precision must be less than or equal to 10 digits
  status: ["active", "busy"],
  age: 50, // does not exist in schema => invalid
}
let errors = validate(invalidUser, userSchema, resource)
console.log("Validate James Howlett: ", errors)

const user: User = {
  id: "1234567890123456789012345678901234567890",
  username: "tony.stark",
  email: "tony.stark@gmail.com",
  phone: "+1234567890",
  website: "https://github.com/core-ts",
  dateOfBirth: new Date("1963-03-25"),
  creditLimit: 100000.25,
  status: ["active", "online"],
}
errors = validate(user, userSchema, resource, true)
console.log("Validate Tony Stark (no error): ", errors) // should be empty
```
Out put is:
```text
Validate James Howlett:  [
  {
    field: 'id',
    code: 'maxlength',
    message: 'id cannot be greater than 40 characters.',
    param: 40
  },
  {
    field: 'email',
    code: 'email',
    message: 'Email is not a valid email address.'
  },
  {
    field: 'phone',
    code: 'phone',
    message: 'Telephone is not a valid phone number.'
  },
  { field: 'ip', code: 'ipv4', message: 'ip is not a valid ipv4.' },
  {
    field: 'website',
    code: 'url',
    message: 'Website is not a valid URL.'
  },
  {
    field: 'creditLimit',
    code: 'scale',
    message: 'Credit Limit has a valid scale. Scale must be less than or equal to 2'
  },
  {
    field: 'creditLimit',
    code: 'max',
    message: 'Credit Limit must be less than or equal to 200000.',
    param: 200000
  },
  {
    field: 'status',
    code: 'enum',
    message: 'User Status must be one of active, inactive, online, offline, away.',
    param: 'active, inactive, online, offline, away'
  },
  {
    field: 'age',
    code: 'undefined',
    message: 'age is not allowed to exist.'
  },
  {
    field: 'username',
    code: 'required',
    message: 'Username is required.'
  }
]
Validate Tony Stark (no error):  []
```
### Sample 2
```typescript
import { Attributes, StringMap, validate } from "validation-core"

interface Resources {
  [key: string]: StringMap
}

const enResource: StringMap = {
  error_undefined: "{0} is not allowed to exist.",
  error_exp: "{0} does not match the regular expression.",
  error_type: "Invalid datatype. Type of {0} cannot be {1}.",

  error_boolean: "{0} cannot be boolean.",
  error_strings: "{0} must be an string array.",
  error_numbers: "{0} must be an number array.",
  error_integers: "{0} must be an number array.",
  error_datetimes: "{0} must be an date time array.",
  error_dates: "{0} must be an date array.",

  error_required: "{0} is required.",
  error_minlength: "{0} cannot be less than {1} characters.",
  error_maxlength: "{0} cannot be greater than {1} characters.",
  error_array_min: "Length of {0} cannot be less than {1}.",
  error_array_max: "Length of {0} cannot be greater than {1}.",

  error_email: "{0} is not a valid email address.",
  error_integer: "{0} is not a valid integer.",
  error_number: "{0} is not a valid number.",
  error_precision: "{0} has a valid precision. Precision must be less than or equal to {1}",
  error_scale: "{0} has a valid scale. Scale must be less than or equal to {1}",
  error_phone: "{0} is not a valid phone number.",
  error_fax: "{0} is not a valid fax number.",
  error_url: "{0} is not a valid URL.",
  error_ipv4: "{0} is not a valid ipv4.",
  error_ipv6: "{0} is not a valid ipv6.",

  error_min: "{0} must be greater than or equal to {1}.",
  error_max: "{0} must be less than or equal to {1}.",
  error_gt: "{0} must be greater than {1}.",
  error_lt: "{0} must be less than {1}.",
  error_date: "{0} is not a valid date.",
  error_enum: "{0} must be one of {1}.",

  date_of_birth: "Date Of Birth",
  telephone: "Telephone",
  email: "Email",
  website: "Website",
  status: "User Status",
  state: "State",
  zip: "Zip Code",
  zip_code: "Zip code is not valid.",
  quality: "Quality",
  level: "Level",
}

const viResource = {
  error_undefined: "{0} không được phép tồn tại.",
  error_exp: "{0} không khớp với biểu thức chính quy.",
  error_type: "Kiểu dữ liệu không hợp lệ. Kiểu của {0} không thể là {1}.",

  error_boolean: "{0} không thể là kiểu boolean.",
  error_strings: "{0} phải là một mảng chuỗi.",
  error_numbers: "{0} phải là một mảng số.",
  error_integers: "{0} phải là một mảng số nguyên.",
  error_datetimes: "{0} phải là một mảng ngày giờ.",
  error_dates: "{0} phải là một mảng ngày.",

  error_required: "{0} là bắt buộc.",
  error_minlength: "{0} không được ít hơn {1} ký tự.",
  error_maxlength: "{0} không được nhiều hơn {1} ký tự.",
  error_array_min: "Độ dài của {0} không được nhỏ hơn {1}.",
  error_array_max: "Độ dài của {0} không được lớn hơn {1}.",

  error_email: "{0} không phải là địa chỉ email hợp lệ.",
  error_integer: "{0} không phải là số nguyên hợp lệ.",
  error_number: "{0} không phải là số hợp lệ.",
  error_precision: "{0} có độ chính xác không hợp lệ. Độ chính xác phải nhỏ hơn hoặc bằng {1}.",
  error_scale: "{0} có thang đo không hợp lệ. Thang đo phải nhỏ hơn hoặc bằng {1}.",
  error_phone: "{0} không phải là số điện thoại hợp lệ.",
  error_fax: "{0} không phải là số fax hợp lệ.",
  error_url: "{0} không phải là URL hợp lệ.",
  error_ipv4: "{0} không phải là địa chỉ IPv4 hợp lệ.",
  error_ipv6: "{0} không phải là địa chỉ IPv6 hợp lệ.",

  error_min: "{0} phải lớn hơn hoặc bằng {1}.",
  error_max: "{0} phải nhỏ hơn hoặc bằng {1}.",
  error_gt: "{0} phải lớn hơn {1}.",
  error_lt: "{0} phải nhỏ hơn {1}.",
  error_date: "{0} không phải là ngày hợp lệ.",
  error_enum: "{0} phải là một trong các giá trị sau: {1}.",

  date_of_birth: "Ngày sinh",
  telephone: "Điện thoại",
  email: "Địa chỉ email",
  website: "Trang web",
  status: "Trạng thái người dùng",
  state: "Tiểu bang",
  zip: "Mã bưu điện",
  zip_code: "Mã bưu điện không hợp lệ.",
  quality: "Chất lượng",
  level: "Cấp độ",
}

const resources: Resources = {
  en: enResource,
  vi: viResource,
}

function getResource(lang: string): StringMap {
  return resources[lang] || resources["en"]
}
const resource = getResource("en")

interface Skill {
  skill: string
  level: number
}
interface Achievement {
  subject: string
  description: string
  quality: string
  skills?: Skill[]
}
interface Address {
  street: string
  city: string
  state: string
  zip: string
}
interface User {
  id: string
  username: string
  email?: string
  phone?: string
  dateOfBirth?: Date
  website?: string
  creditLimit?: number
  status?: string[]
  address?: Address
  achievements?: Achievement[]
}

const skillSchema: Attributes = {
  skill: {
    required: true,
    length: 15,
  },
  level: {
    required: true,
    type: "integer",
    enum: [1, 2, 3, 4, 5],
    resource: "level",
  },
}
const achievementSchema: Attributes = {
  subject: {
    required: true,
    length: 255,
  },
  description: {
    required: true,
    length: 255,
  },
  quality: {
    required: true,
    length: 255,
    enum: ["Excellent", "Good", "Average", "Poor", "Very Poor"],
    resource: "quality",
  },
  skills: {
    type: "array",
    typeof: skillSchema,
  },
}

const addressSchema: Attributes = {
  street: {
    required: true,
    length: 255,
  },
  city: {
    required: true,
    length: 255,
  },
  state: {
    length: 2,
    exp: /^[A-Z]{2}$/,
    // resource: "State is not valid.",
  },
  zip: {
    exp: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    resource: "zip_code",
  },
}
const userSchema: Attributes = {
  id: {
    length: 40,
  },
  username: {
    required: true,
    length: 255,
  },
  email: {
    format: "email",
    required: true,
    length: 120,
    resource: "email",
  },
  phone: {
    format: "phone",
    required: true,
    length: 14,
    resource: "telephone",
  },
  website: {
    length: 255,
    format: "url",
    resource: "website",
  },
  dateOfBirth: {
    type: "datetime",
  },
  creditLimit: {
    type: "number",
    precision: 10,
    scale: 2,
    min: 1,
  },
  status: {
    type: "strings",
    enum: ["active", "inactive", "online", "offline", "away"],
    resource: "status",
  },
  address: {
    type: "object",
    typeof: addressSchema,
  },
  achievements: {
    type: "array",
    typeof: achievementSchema,
  },
}

let errors = validate(
  {
    username: "james.howlett",
    email: "james.howlett@gmail", // invalid email
    phone: "", // required => invalid
    website: "https://james.howlett.com",
    dateOfBirth: "1974-03-25", // valid date => the library will convert to date
    age: 50, // does not exist in schema => invalid
  },
  userSchema,
  resource,
)
console.log("Validate James Howlett: ", errors)

const user: User = {
  id: "1234567890123456789012345678901234567890",
  username: "tony.stark",
  email: "tony.stark@gmail.com",
  phone: "+1234567890",
  website: "https://github.com/core-ts",
  dateOfBirth: new Date("1963-03-25"),
  creditLimit: 100000.25,
  status: ["active", "online"],
  address: {
    street: "123 Stark Tower",
    city: "New York",
    state: "NY",
    zip: "07008",
  },
  achievements: [
    {
      subject: "Avengers",
      description: "Leader of the Avengers team",
      quality: "Excellent",
      skills: [
        {
          skill: "Leadership",
          level: 5,
        },
        {
          skill: "Technology",
          level: 4,
        },
        {
          skill: "Martial Arts",
          level: 3,
        },
      ],
    },
    {
      subject: "Iron Suite",
      description: "Iron Armor Suit",
      quality: "Excellent",
    },
  ],
}
errors = validate(user, userSchema, resource, true)
console.log("Validate Tony Stark (no error): ", errors) // should be empty

const invalidUser: User = {
  id: "12345678901234567890123456789012345678901", // 41 characters => maximum 40 => invalid
  username: "peter.parker",
  email: "test", // invalid email
  phone: "abcd1234", // invalid phone number
  website: "wrong url", // invalid URL
  dateOfBirth: new Date("1962-08-25"),
  creditLimit: 10000000.255, // invalid precision and scale => precision must be less than or equal to 10 digits
  status: ["active", "busy"],
  address: {
    street: "123 Stark Tower",
    city: "New York",
    state: "New York",
    zip: "999999", // invalid zip code, does not match regex
  },
  achievements: [
    {
      subject: "Avengers",
      description: "Member of the Avengers team",
      quality: "Normal", // invalid quality, must be one of ["Excellent", "Good", "Average", "Poor", "Very Poor"]
      skills: [
        {
          skill: "Technology",
          level: 5,
        },
        {
          skill: "Martial Arts",
          level: 6, // invalid level, must be be one of [1, 2, 3, 4, 5]
        },
      ],
    },
  ],
}

errors = validate(invalidUser, userSchema, resource, true)
console.log("Validate Peter Parker: ", errors)

```

Out put is:
```text
Validate James Howlett:  [
  {
    field: 'email',
    code: 'email',
    message: 'Email is not a valid email address.'
  },
  {
    field: 'phone',
    code: 'required',
    message: 'Telephone is required.'
  },
  {
    field: 'age',
    code: 'undefined',
    message: 'age is not allowed to exist.'
  }
]
Validate Tony Stark (no error):  []
Validate Peter Parker:  [
  {
    field: 'id',
    code: 'maxlength',
    message: 'id cannot be greater than 40 characters.',
    param: 40
  },
  {
    field: 'email',
    code: 'email',
    message: 'Email is not a valid email address.'
  },
  {
    field: 'phone',
    code: 'phone',
    message: 'Telephone is not a valid phone number.'
  },
  {
    field: 'website',
    code: 'url',
    message: 'Website is not a valid URL.'
  },
  {
    field: 'creditLimit',
    code: 'precision',
    message: 'creditLimit has a valid precision. Precision must be less than or equal to 10'
  },
  {
    field: 'status',
    code: 'enum',
    message: 'User Status must be one of active, inactive, online, offline, away.',
    param: 'active, inactive, online, offline, away'
  },
  {
    field: 'address.state',
    code: 'maxlength',
    message: 'state cannot be greater than 2 characters.',
    param: 2
  },
  {
    field: 'address.state',
    code: 'exp',
    message: 'state does not match the regular expression.'
  },
  { field: 'address.zip', code: 'exp', message: 'zip_code' },
  {
    field: 'achievements[0].quality',
    code: 'enum',
    message: 'Quality must be one of Excellent, Good, Average, Poor, Very Poor.',
    param: 'Excellent, Good, Average, Poor, Very Poor'
  },
  {
    field: 'achievements[0].skills[1].level',
    code: 'enum',
    message: 'Level must be one of 1, 2, 3, 4, 5.',
    param: '1, 2, 3, 4, 5'
  }
]
```