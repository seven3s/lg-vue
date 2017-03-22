// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': [ 'error', 4],
    "semi": [2, "always"], // 末尾分号
    "space-before-function-paren": [2, "always"], // function 括号前加空格
    "space-infix-ops": 2, // 规定在一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
  }
}
