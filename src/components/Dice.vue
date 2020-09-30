<template>
    <img class="dice" :src="resultIcon" />
</template>
<script>
export default {
	props: {
		result: {
			type: String,
			default: 'miss'
		},

		type: {
			type: String,
			default: 'SQUARE'
		}
	},

	computed: {
		resultIcon () {
			return require(`@/assets/dices/${this.type.toLowerCase()}_${this.result}.png`)
		}
	}
}
</script>
<style lang="scss" scoped>
.dice {
    width: 32px;
    user-select: none;
}
</style>
