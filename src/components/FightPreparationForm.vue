<template>
    <v-card>
        <v-card-title>Prepare new fight</v-card-title>
        <v-card-text style="min-height: 600px">
            <v-container>
                <fieldset class="px-3">
                    <legend>Hostiles</legend>
                    <v-row wrapped>
                        <v-col cols="12">
                            <v-btn
                            :disabled="hostileGroups.length >= 4"
                            color="primary"
                            @click="addHostileGroup"
                            >Add group</v-btn>
                        </v-col>

                        <v-col
                            :xs="12" :sm="6" :lg="3"
                            v-for="(hostileId, index) in hostileGroups" :key="index"
                            class="py-0"
                        >
                            <v-badge overlap>
                                <v-select
                                outlined
                                dense
                                :label="`Hostile Group ${index+1}`"
                                :items="hostileGroupsSelectList"
                                :value="hostileId"
                                @change="setHostileGroup(index, $event)"
                                />
                                <template v-slot:badge>
                                    <v-icon @click="deleteHostileGroup(index)">mdi-close</v-icon>
                                </template>
                            </v-badge>
                        </v-col>
                    </v-row>
                </fieldset>
                <fieldset>
                    <legend>Participating Heroes</legend>
                    <v-row>
                        <v-col cols="12" class="py-0">
                            <v-chip-group class="px-2"
                              multiple column active-class="selected-chip"
                              v-model="participatingHeroeIds"
                            >
                            <v-chip
                                dark
                                v-for="hero in heroesInParty"
                                :key="hero.id"
                                :value="hero.id"
                            >
                            {{hero.name}}
                        </v-chip>
                        </v-chip-group>
                        </v-col>
                    </v-row>
                </fieldset>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn
                            color="primary" large
                            :disabled="participatingHeroeIds.length === 0 || hostileGroups.length === 0"
                            @click="$router.push('/fight')"
                        >
                            Start fight
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import { hostileGroupsSelectList } from '@/helpers/hostiles'
import { sync, get } from 'vuex-pathify'

export default {
	data: () => ({
		hostileGroupsSelectList
	}),

	computed: {
		...sync('fight', ['hostileGroups', 'participatingHeroeIds']),
		...get('save', ['heroesInParty'])
	},

	methods: {
		addHostileGroup () {
			this.hostileGroups = [...this.hostileGroups, 'guardsmen']
		},

		deleteHostileGroup (index) {
			this.hostileGroups.splice(index, 1)
		}
	}
}
</script>
<style lang="scss" scoped>
.selected-chip {
    background-color: #47555d;
    color: white;
}
</style>
