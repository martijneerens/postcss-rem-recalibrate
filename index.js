/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = { baseValue: 16 }) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-rem-recalibrate',
    Declaration (decl) {
      const unit = 'px'
      decl.value = decl.value.replace(/"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)rem/g, (match, p1) => {
        if (p1 === undefined) return match

        return `${p1 * opts.baseValue}${p1 == 0 ? '' : unit}`
      })
    }
  }
}

module.exports.postcss = true
