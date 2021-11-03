import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Frontend from './components/Frontend.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/box/frontend', component: Frontend }
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})

const app = Vue.createApp(App)
app.use(router)
app.mount('#app')
