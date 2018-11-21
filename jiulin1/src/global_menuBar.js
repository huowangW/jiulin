import MenuBar from '@/components/menuBar.vue'


const MyPlogin = {}
MyPlogin.install = function(Vue){
	Vue.component("MenuBar",MenuBar)
}
export default MyPlogin