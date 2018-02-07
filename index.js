const pug = require('pug')
const util = require('loader-utils')

function type(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

module.exports = function(source) {
  this.cacheable && this.cacheable(true)
  let query = util.getOptions(this)
  let options = Object.assign({
    filename: this.resourcePath,
    doctype: query.doctype || 'js',
    compileDebug: this.debug || false
  }, query)
  if (type(options.plugins) === 'array') {
    options.plugins = options.plugins.map((item) => {
      let plugin = require(item)        
      if (type(plugin) === 'function') {
        return plugin()
      }
      return plugin
    })
  }
  let template = pug.compile(source, options)
  template.dependencies.forEach(this.addDependency)
  let data = query.data || {}
  return template(data)
}
