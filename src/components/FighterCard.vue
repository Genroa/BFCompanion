<template>
    <v-card
        class="mx-1 card"
        height="100"
        width="100"
    >
        <div class="filter" :style="backgroundStyle"></div>
        <v-row
            class="fill-height content"
            align="center"
            justify="center"
        >
        <span v-if="fighter.type ==='heroe'">
            {{heroesMap[fighter.id].name}}
        </span>
        <span v-else>
            {{hostileGroupsListsMap[fighter.id].name}}
        </span>
        </v-row>
    </v-card>
</template>
<script>
import { heroesMap, heroesBackgrounds } from '@/helpers/heroes'
import { hostileGroupsListsMap } from '@/helpers/hostiles'

export default {
	props: {
		active: {
			type: Boolean,
			default: false
		},
		fighter: {
			type: Object,
			default: () => ({})
		}
	},

	data: () => ({
		heroesMap,
		hostileGroupsListsMap
	}),

	computed: {
		backgroundStyle () {
			const filter = this.active
				? 'grayscale(20%) brightness(80%)'
				: 'grayscale(80%) contrast(50%) brightness(80%)'
			const border = this.active
				? '0px 0px 5px 2px rgba(255,255,255,1)'
				: ''

			const backgroundImage = this.fighter.type === 'heroe'
				? 'url(' + require(`@/assets/heroes/${this.fighter.id}.png`) + ')'
				: ''

			const backgroundData = this.fighter.type === 'heroe'
				? heroesBackgrounds[this.fighter.id]
				: {}

			return {
				backgroundImage,
				filter,
				'box-shadow': border,
				...backgroundData
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.card {
    position: relative;
    .filter {
        position: absolute;
        width: 100%;
        height: 100px;
        background: white;
    }

    .content {
        position: flex;
        text-align: center;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
        > * {
            position: relative;
        }
    }
}
</style>
