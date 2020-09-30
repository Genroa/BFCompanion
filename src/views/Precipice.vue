<template>
    <v-container>
        <v-row wrapped>
            <v-col cols="4">
                <v-btn color="primary" @click="$router.push('/')">Back</v-btn>
            </v-col>
            <v-col cols="8" class="text-right">
                <v-btn color="primary" :disabled="save.party.length < 1" @click="startExpedition">Start expedition</v-btn>
            </v-col>
            <v-col cols="12" class="white--text" style="z-index: 1">
                Select at least one hero:
            </v-col>
            <v-col cols="6" lg="3" v-for="hero in save.heroes" :key="hero.id">
                <HeroCard
                    :hero="hero"
                    :class="{selected: heroIsInParty(hero)}"
                    @click="toggleHeroInParty(hero)"
                    :filter="heroIsInParty(hero) ? '' : 'contrast(50%)'"
                    :desaturate="!heroIsInParty(hero)"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import HeroCard from '@/components/HeroCard'

export default {
	components: {
		HeroCard
	},
	computed: {
		save: {
			get () { return this.$store.get('save/save') },
			set (newValue) { this.$store.set('save/save', newValue) }
		}
	},

	methods: {
		heroIsInParty (hero) {
			return this.save.party.includes(hero.id)
		},
		toggleHeroInParty (hero) {
			if (this.heroIsInParty(hero)) {
				this.save.party = [...this.save.party.filter(id => id !== hero.id)]
			} else if (this.save.party.length < 4) {
				this.save.party.push(hero.id)
			}
			this.save = { ...this.save }
		},

		startExpedition () {
			this.$router.push({ name: 'expedition', params: { id: this.save.id } })
		}
	}
}
</script>
<style lang="scss" scoped>
.selected {
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,1) !important;
}
</style>
