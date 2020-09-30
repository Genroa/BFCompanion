<template>
    <v-container class="home">
        <v-row>
            <v-col cols="12" class="white--text" style="z-index: 1">Select a save:</v-col>
            <v-col cols="12" v-if="saves.length > 0">
                <v-card v-for="(save, index) in saves" :key="save.id" class="save" @click="selectSave(save)">
                    <v-card-title>Save {{index+1}}</v-card-title>
                    <v-card-text>
                        <div v-if="save.party.length === 0">No hero selected in this raster.</div>
                        <div v-else>
                            Current party:
                            <v-chip label outlined class="mx-1" v-for="heroId in save.party" :key="heroId">
                                {{heroesMap[heroId].name}}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" v-else>
                No save.
            </v-col>
            <v-col cols="12">
                <v-btn color="primary" @click="createNewSave">Create new save</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { heroesMap } from '@/helpers/heroes'
import { get, call } from 'vuex-pathify'

export default {
	name: 'Home',

	data: () => ({
		heroesMap
	}),
	computed: {
		...get('save', ['saves'])
	},
	methods: {
		...call('save', ['createNewSave', 'selectSave'])
	}
}
</script>
<style lang="scss" scoped>
.save {
    cursor: pointer;
}
</style>
