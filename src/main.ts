import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

Vue.prototype.$Element = {
  size: "small",
  zIndex: 3000
};
Vue.prototype.$http = axios;
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

Vue.use(Viewer);

// Viewer.setDefaults({
//   Options: {
//     'inline': true,
//     'button': true,
//     'navbar': true,
//     'title': true,
//     'toolbar': true,
//     'tooltip': true,
//     'movable': true,
//     'zoomable': true,
//     'rotatable': true,
//     'scalable': true,
//     'transition': true,
//     'fullscreen': true,
//     'keyboard': true,
//     'url': 'data-source',
//   }
// });

new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>",
  render: h => h(App)
});
