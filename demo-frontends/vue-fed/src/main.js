import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue';
// import wrap from '@vue/web-component-wrapper';

// const CustomElement = wrap(Vue, HelloWorld);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
