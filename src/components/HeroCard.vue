<template>
    <v-card class="card" @click="$emit('click')" :style="`filter: ${filter}`">
        <div class="background" :style="heroBackground(hero)"/>
        <div class="pa-2 content">
            <div class="hero-name">{{hero.name}}</div>
        </div>
        <div class="foreground" :style="filter"/>
    </v-card>
</template>
<script>
import { heroesBackgrounds } from '@/helpers/heroes'
export default {
	props: {
		hero: {
			type: Object,
			default: () => ({})
		},
		filter: {
			type: String,
			default: ''
		},

		desaturate: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		heroBackground (hero) {
			return {
				backgroundImage: 'url(' + require(`@/assets/heroes/${this.hero.id}.png`) + ')',
				...heroesBackgrounds[this.hero.id] ?? {},
				filter: `grayscale(${this.desaturate ? '100' : '20'}%) opacity(50%)`
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.card {
    &::before {
        background: initial;
    }
    min-height: 100px;
    position: relative;

    .background, .foreground {
        position: absolute;
        width: 100%;
        height: 100px;
    }
    .background {
    }

    .content {
        position: absolute;

        .hero-name {
            font-size: 20px;
            font-weight: bold;
        }
    }
}

</style>
