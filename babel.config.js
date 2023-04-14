module.exports = {
  // https://lit.dev/docs/components/properties/#avoiding-issues-with-class-fields
  assumptions: {
    setPublicClassFields: true,
    privateFieldsAsSymbols: true,
  },
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  // https://lit.dev/docs/components/decorators/#using-decorators-with-typescript-and-babel
  plugins: [
    ['@babel/plugin-transform-typescript', {
      allowDeclareFields: true,
    }],
    ['@babel/plugin-proposal-decorators', {
      version: '2018-09',
      decoratorsBeforeExport: true,
    }],
    ['@babel/plugin-proposal-class-properties'],
  ],
};
