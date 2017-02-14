# babel-plugin-transform-remove-export

This plugin removes all `export` calls.

## Example

**In**

```javascript
export const a = 1
export default ''
```

**Out**

```javascript
```

## Installation

```sh
npm install babel-plugin-transform-remove-export
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-remove-export"]
}
```

### Via CLI

```sh
babel --plugins transform-remove-export script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-remove-export"]
});
```
