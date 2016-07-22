module.exports = {
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "rules": {
    "no-unexpected-multiline": 2,
    "block-scoped-var": 2,
    "complexity": [ 1, 15 ],
    "consistent-return": 2,
    "curly": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    "eqeqeq": [2, "smart"],
    "no-alert": 2,
    "no-caller": 2,
    "no-else-return": 2,
    "no-eval": 2,
    "no-implied-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-implicit-coercion": 2,
    "no-invalid-this": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-param-reassign": 2,
    "no-return-assign": 2,
    "no-sequences": 2,
    "no-useless-call": 2,
    "array-bracket-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": 2,
    "comma-style": 2,
    "indent": 2,
    "jsx-quotes": 2,
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "linebreak-style": [2, "unix"],
    "max-params": [2, 4],
    "no-multiple-empty-lines": [2, {"max": 2}],
    "no-nested-ternary": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "object-curly-spacing": [2, "always"],
    "semi": [ 2, "always" ],
    "semi-spacing": 2,
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-before-keywords": [2, "always"],
    "space-infix-ops": [2, {"int32Hint": false} ],
    "arrow-body-style": 2,
    "no-arrow-condition": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "yoda": [2, "never", { "onlyEquality": true }]
  }
};
