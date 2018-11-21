import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import about from './views/About.vue'
import home from './pages/Home/home.vue'
import classify from './pages/Classify/classify.vue'
import order from './pages/Order/order.vue'
import user from './pages/User/user.vue'
import confirmOrder from './pages/confirmOrder.vue'
import shopCart from './pages/shopCart/shopCart.vue'
import proDetalis from './pages/proDetalis/proDetalis.vue'
import productDisplay from './pages/proDetalis/components/productDisplay.vue'
import priceParameter from './pages/proDetalis/components/priceParameter.vue'
import AfterSale from './pages/proDetalis/components/AfterSale.vue'
import searchPage from '@/pages/searchPage.vue'
import proList from '@/pages/proList.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/classify',
			name: 'classify',
			component: classify
		},
		{
			path: '/order',
			name: 'order',
			component: order
		},
		{
			path: '/user',
			name: 'user',
			component: user
		},
		{
			path: '/shopCart',
			name: 'shopCart',
			component: shopCart
		},
		{
			path: '/searchPage',
			name: 'searchPage',
			component: searchPage
		},
		{
			path: '/proDetalis',
			name: 'proDetalis',
			component: proDetalis,
			redirect: '/proDetalis/productDisplay',
			children: [{
					path: '/proDetalis/productDisplay',
					component: productDisplay
				},
				{
					path: '/proDetalis/priceParameter',
					component: priceParameter
				},
				{
					path: '/proDetalis/AfterSale',
					component: AfterSale
				}
			]
		},
		{
			path: '/proList',
			name: 'proList',
			component: proList
		},
		{
			path: '/confirmOrder',
			name: 'confirmOrder',
			component: confirmOrder
		}
	]
})
