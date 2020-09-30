<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/bf_logo.png"
                transition="scale-transition"
                width="200"
                />

                <div class="shrink mt-1 hidden-sm-and-down">Game Companion</div>
            </div>
        </v-app-bar>

        <v-main class="mx-0 mb-10" >
            <div :style="contextBackground" class="background"></div>
            <router-view></router-view>
        </v-main>

        <v-footer padless app>
            <v-col
            class="text-center roll-zone"
            cols="3"
            >
                <DiceRoller type="SQUARE"/>
            </v-col>
            <v-col
                class="text-center roll-zone"
                cols="3"
            >
                <DiceRoller type="TRIANGLE"/>
            </v-col>
            <v-col
            class="text-center roll-zone"
            cols="3"
            >
                <DiceRoller type="PENTAGON"/>
            </v-col>
            <v-col
            class="text-center roll-zone"
            cols="3"
            >
                <DiceRoller type="BLACKSTONE"/>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
import DiceRoller from '@/components/DiceRoller'
import { Backgrounds } from '@/helpers/backgrounds'

export default {
	name: 'App',
	components: {
		DiceRoller
	},

	computed: {
		contextBackground () {
			const backgroundData = Backgrounds[this.$route.name]
			const background = backgroundData ? { backgroundImage: 'url(' + require(`@/assets/backgrounds/${this.$route.name}.jpg`) + ')' } : { backgroundColor: 'black' }
			return {
				...backgroundData,
				...background
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.roll-zone {
    border: 1px solid black;
    min-height: 65px;
}

.background {
    position: absolute;
    width: 100%;
    height: 110%;
    background-repeat: none;
    background-size: cover;
}
</style>
