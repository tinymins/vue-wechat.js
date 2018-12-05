/**
 * This file is part of the vue-wechat.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 EM, Z.
 */
import wechat from './src/jweixin-1.2.0.js';

const install = (Vue) => {
  Vue.wechat = wechat;
  Vue.prototype.$wechat = wechat;
};

export { install };
