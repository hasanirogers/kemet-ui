module.exports = {
  extends: [
    '@open-wc/eslint-config',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lit/no-native-attributes': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'lit/no-classfield-shadowing': 'off',
  },
  ignorePatterns: [
    'dist/**/*.js',
    'src/utilities/controllers/**/*.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
