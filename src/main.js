import Vue from 'vue';
import App from './App.vue';

var components = {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }}</p>'
};

// new Vue({
//   el: '#app',
//   components: {
//     'my-comp': 'cmp'
//     }
// });

new Vue({
  el: '#app',
  render: h => h(App)
});
