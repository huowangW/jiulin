import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_menuBar from './global_menuBar.js'
// import 'lib-flexible/flexible.js'
import 'lib-flexible/flexible.js'


import './stype/comment.css'
import './stype/iconfont.css'
// import './style/iconfont.css'


// VueTouch.config.swipe = {
// 
// 	threshold: 100 //手指左右滑动距离
// 
// }

Vue.config.productionTip = false
Vue.use(global_menuBar)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
