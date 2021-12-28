import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.css'
// import '../components/css/card.css'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'

// Vue.use(Demo);
// Vue.use(Card);

// import 'test-component-zl/dist/css/index.css';
import TCOM from 'test-component-zl';
Vue.use(TCOM);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
