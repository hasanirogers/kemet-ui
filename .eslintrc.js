module.exports = {
  extends: [
    '@open-wc/eslint-config',
  ],
  rules: {
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lit/no-native-attributes': 'off',
  },
  ignorePatterns: [
    'dist/**/*.js',
    'sandboxes/htmlbox/build/**/*.js',
    'sandboxes/reactbox/build/**/*.js',
    'src/utilities/controllers/**/*.js',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
