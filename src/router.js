import * as VueRouter from 'vue-router'
import Frontend from './components/home/Frontend.vue'
import Basketball from './components/home/Basketball.vue'
import FrontendContents from './components/frontend/FrontendContents.vue'
import Maintable from './components/frontend/Maintable.vue'
import Maincontents from './components/frontend/Maincontents.vue'

const routes = [
	{
		path: '/',
		components: { Frontend, Basketball }
	},
	{
		path: '/frontend',
		components: { Frontend: FrontendContents, Basketball }
	},
	{
		path: '/frontend/:type',
		components: { Frontend: FrontendContents, Basketball },
		children: [
			{
				path: '',
				component: Maintable
			},
			{
				path: ':id',
				component: Maincontents
			}
		]
	}
]
const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})
export default router
