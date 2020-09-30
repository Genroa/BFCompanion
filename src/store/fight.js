import store from '@/store'
import { make } from 'vuex-pathify'

function shuffle (a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]]
	}
	return a
}

const state = {
	hostileGroups: [],
	participatingHeroeIds: [],
	initiativeTrack: [],
	activeFighter: null
}

const getters = {
	fightingHeroes (state) {
		const heroesInParty = store.get('save/heroesInParty')
		return heroesInParty.filter(h => state.participatingHeroeIds.includes(h.id))
	}
}

const mutations = {
	...make.mutations(state)
}

const actions = {
	shuffleInitiativeTrack ({ state }) {
		const heroesFightData = state.participatingHeroeIds.map(id => ({ id, type: 'heroe' }))
		const hostilesFightData = state.hostileGroups.map((gid, index) => ({ id: gid, type: 'hostile', group: index + 1 }))

		const track = [...heroesFightData, ...hostilesFightData]
		shuffle(track)
		store.set('fight/initiativeTrack', track)
		store.set('fight/activeFighter', 0)
	},

	activateNextFighter ({ state }) {
		let nextFighter = state.activeFighter + 1
		if (nextFighter >= state.initiativeTrack.length) nextFighter = null
		store.set('fight/activeFighter', nextFighter)
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
	namespaced: true
}
