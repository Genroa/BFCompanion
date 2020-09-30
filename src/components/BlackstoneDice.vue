<template>
    <div class="dice" :style="diceStyle">
        <div class="dice-value" v-show="result > 0">{{result}}</div>
    </div>
</template>
<script>
export default {
	props: {
		result: {
			type: Number,
			default: 1
		}
	},

	computed: {
		diceStyle () {
			return {
				backgroundImage: 'url(' + require('@/assets/dices/blackstone.png') + ')'
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.dice {
    width: 32px;
    display: inline-block;
    background-origin: 0 0;
    background-size: 32px 32px;
    height: 32px;
    user-select: none;
}

.dice-value {
    color: white;
    margin-top: 5px;
}
</style>
