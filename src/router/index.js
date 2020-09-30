import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const redirectIfNoSelectedSave = (to, from, next) => {
	if (store.get('save/save')) next()
	else next('/')
}

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/precipice',
		name: 'precipice',
		beforeEnter: redirectIfNoSelectedSave,
		component: () => import(/* webpackChunkName: "about" */ '@/views/Precipice.vue')
	},
	{
		path: '/expedition',
		name: 'expedition',
		beforeEnter: redirectIfNoSelectedSave,
		component: () => import(/* webpackChunkName: "about" */ '@/views/Expedition.vue')
	},
	{
		path: '/fight',
		name: 'fight',
		beforeEnter: redirectIfNoSelectedSave,
		component: () => import(/* webpackChunkName: "about" */ '@/views/Fight.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
