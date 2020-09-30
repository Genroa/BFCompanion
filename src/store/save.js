import store from '@/store'
import router from '@/router'
import { make } from 'vuex-pathify'
import { v4 as uuid } from 'uuid'
import { heroesList } from '@/helpers/heroes'

const state = {
	saves: [],
	selectedSaveId: null
}

const getters = {
	save (state) {
		return state.saves.find(s => s.id === state.selectedSaveId)
	},

	heroesInParty () {
		const save = store.get('save/save')
		if (!save) return []
		return save.heroes.filter(h => save.party.includes(h.id))
	}
}

const mutations = {
	...make.mutations(state),
	SET_SAVES (state, saves) {
		state.saves = saves
		localStorage.setItem('bfc.saves', JSON.stringify(saves))
	},

	SET_SAVE (state, save) {
		state.saves = [...state.saves.filter(s => s.id !== save.id), save]
		localStorage.setItem('bfc.saves', JSON.stringify(state.saves))
	}
}

const actions = {
	loadSaves () {
		const saves = JSON.parse(localStorage.getItem('bfc.saves')) ?? []
		store.set('save/saves', saves)
	},

	createNewSave () {
		const save = {
			id: uuid(),
			heroes: [...heroesList], // non used heroes
			party: [] // current party
		}
		store.set('save/saves', [...state.saves, save])
	},
	selectSave (_, { id }) {
		store.set('save/selectedSaveId', id)
		router.push({ name: 'precipice' })
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
	namespaced: true
}
