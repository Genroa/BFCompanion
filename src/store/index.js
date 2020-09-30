import Vue from 'vue'
import Vuex from 'vuex'
import fight from './fight'
import save from './save'
import pathify from 'vuex-pathify'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [pathify.plugin],
	modules: {
		fight,
		save
	}
})
