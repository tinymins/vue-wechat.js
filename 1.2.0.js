/**
 * This file is part of the vue-wechat.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 EM, Z.
 */
var wechat = require('./src/jweixin-1.2.0.js');

for (var key in wechat) {
  module.exports[key] = wechat[key];
}

exports.install = function(Vue) {
  Vue.wechat = wechat;
  Vue.prototype.$wechat = wechat;
};
