<template>
    <v-container fluid>
        <v-row wrapped>
            <v-col cols="12" class="px-0 d-flex justify-center">
                <v-slide-group dark center-active show-arrows v-model="activeFighter">
                    <v-slide-item
                        v-for="(fighterData, index) in initiativeTrack"
                        :key="index"
                        v-slot:default="{ active }"
                    >
                        <FighterCard :active="active" :fighter="fighterData"/>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
            <v-col cols="12" class="px-0 d-flex justify-center">
                <v-btn color="primary" large v-if="activeFighter === null" @click="shuffleInitiativeTrack">Shuffle Initiative Track</v-btn>
                <v-btn color="primary" large v-else @click="activateNextFighter">Activation done</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { get, sync, call } from 'vuex-pathify'
import FighterCard from '@/components/FighterCard'

export default {
	components: {
		FighterCard
	},

	data: () => ({
	}),

	computed: {
		...sync('fight', ['activeFighter', 'initiativeTrack'])
	},

	methods: {
		...call('fight', ['shuffleInitiativeTrack', 'activateNextFighter'])
	}
}
</script>
<style lang="scss" scoped>

</style>
