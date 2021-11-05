import * as VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import Frontend from './components/home/Frontend.vue'
import Basketball from './components/home/Basketball.vue'
import FrontendContents from './components/frontend/FrontendContents.vue'

const routes = [
	{
		path: '/',
		components: {
			Home,
			Frontend,
			Basketball
		}
	},
	{
		path: '/frontend',
		components: { Home, Frontend: FrontendContents, Basketball }
	}
]
const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})
export default router
