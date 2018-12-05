# vue-wechat

Wechat sdk for Vue.js.

## install

> npm i vue-wechat -s

Import vue-wechat before create `Vue` instance:

```js
import Wechat from 'vue-wechat';

Vue.use(Wechat);

// ...
new Vue({
  render: h => h(App),
}).$mount('#app');
```

Import specific version of wechat sdk:

```js
import Wechat from 'vue-wechat/1.2.0';

Vue.use(Wechat);

// ...
new Vue({
  render: h => h(App),
}).$mount('#app');
```

## usage

Global use.

```js
import Vue from 'vue';

Vue.wechat.config({
  debug: info.debug,
  appId: info.appId,
  timestamp: info.timestamp,
  nonceStr: info.nonceStr,
  signature: info.signature,
  jsApiList: info.jsApiList,
});
```

Use inside component.

```js
// ...
mounted() {
  this.$wechat.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: this.onWechatFileChoose,
  });
},
methods: {
  onWechatFileChoose({ localIds }) {
    if (window.__wxjs_is_wkwebview) {
      let i = 0;
      const infos = [];
      const next = () => {
        if (i < localIds.length) {
          this.$wechat.getLocalImgData({
            localId: localIds[i],
            success: ({ localData }) => {
              infos.push({ dataUrl: localData });
              i += 1;
              next();
            },
          });
        } else {
          this.insertInfo(infos);
        }
      };
      next();
    } else {
      this.insertInfo(localIds.map(localId => ({ src: localId, localId })));
    }
  },
  insertInfo(rawInfos) {
    console.log(rawInfos);
  },
},
// ...
```
