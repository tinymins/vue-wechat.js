/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $wx: any;
    $wechat: any;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    wx?: any;
    wechat?: any;
  }
}
