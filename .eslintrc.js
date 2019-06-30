module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': ['eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser':'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'import',
    'jsx-a11y'
  ],
  'rules': {
    'quotes': [1, 'single'],
    'camelcase': [0],
    'no-use-before-define': [0],
    'semi': [2],
    'no-unused-vars': [0],
    'comma-dangle': [2, 'never'],
    'no-redeclare': [2, { 'builtinGlobals': true }],
    'no-trailing-spaces': 2,
    'padded-blocks': [2, { 'blocks': 'never' }]
  },
};
