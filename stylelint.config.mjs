import stylelintConfigSassGuidelines from 'stylelint-config-sass-guidelines';

export default {
  extends: [stylelintConfigSassGuidelines],
  rules: {
    'selector-no-qualifying-type': null,
    'scss/at-function-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/no-global-function-names': null,
  },
  ignoreFiles: ['**/*.js', '**/*.html', 'coverage/**'],
};
