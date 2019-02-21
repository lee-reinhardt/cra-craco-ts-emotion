// craco's preset/plugin behavior requires a workaround for the way this preset is applied
// https://github.com/emotion-js/emotion/issues/1123#issuecomment-455767886
const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(undefined, {
  autoLabel: true,
  labelFormat: '[local]',
})

module.exports = function({ env, paths }) {
  return {
    babel: {
      plugins: [...emotionBabelPreset.plugins],
    },
  }
}
