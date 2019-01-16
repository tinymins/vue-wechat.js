/**
 * This file is part of the vue-wechat.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 EM, Z.
 */
var wechat = require('./src/jweixin-1.3.0.js');

module.exports = {
  install: function(Vue) {
    Vue.wechat = wechat;
    Vue.prototype.$wechat = wechat;
  },
};
