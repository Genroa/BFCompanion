<template>
    <v-container>
        <v-dialog v-model="openFightPreparation">
            <FightPreparationForm />
        </v-dialog>
        <v-row wrapped>
            <v-col cols="6" class="pb-0">
                <v-btn color="primary" @click="$router.push('/precipice')">Back to Precipice</v-btn>
            </v-col>
            <v-col cols="6" class="text-right pb-0">
                <v-btn color="primary" @click="openFightPreparationDialog()">Manage Fight</v-btn>
            </v-col>
            <v-col cols="12" sm="6" lg="3" v-for="hero in heroesInParty" :key="hero.id">
                <HeroCard :hero="hero"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { sync } from 'vuex-pathify'
import { heroesMap } from '@/helpers/heroes'
import HeroCard from '@/components/HeroCard'
import FightPreparationForm from '@/components/FightPreparationForm'

export default {
	components: {
		FightPreparationForm,
		HeroCard
	},

	data: () => ({
		openFightPreparation: false
	}),

	computed: {
		...sync('fight', ['participatingHeroeIds', 'hostileGroups']),
		save: {
			get () { return this.$store.get('save/save') },
			set (newValue) { this.$store.set('save/save', newValue) }
		},

		heroesInParty () {
			return this.save.party.map(hId => heroesMap[hId])
		}
	},

	methods: {
		openFightPreparationDialog () {
			this.hostileGroups = ['guardsmen', 'guardsmen', 'guardsmen']
			this.participatingHeroeIds = [...this.save.party]
			this.openFightPreparation = true
		}
	}
}
</script>
<style lang="scss" scoped>

</style>
