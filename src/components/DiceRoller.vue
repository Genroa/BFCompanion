<template>
    <div @click="roll" class="roller">
        <Dice v-if="type !== 'BLACKSTONE'" :type="type" :result="valueAsHitResult"/>
        <Dice v-if="type !== 'BLACKSTONE' && secondValue > 0" :type="type" :result="secondValueAsHitResult"/>

            <BlackstoneDice v-if="type === 'BLACKSTONE'" :result="value"/>
            <BlackstoneDice v-if="type === 'BLACKSTONE' && secondValue > 0" :result="secondValue"/>
            </div>
        </template>
<script>
import BlackstoneDice from '@/components/BlackstoneDice'
import Dice from '@/components/Dice'
import { rollValue, convertValueToHitResult } from '@/helpers/dices'

export default {
	components: {
		BlackstoneDice,
		Dice
	},
	props: {
		type: { type: String, default: 'SQUARE' }
	},

	data: () => ({
		value: 0,
		secondValue: 0,
		timeoutId: null
	}),

	computed: {
		valueAsHitResult () {
			return convertValueToHitResult(this.type, this.value)
		},
		secondValueAsHitResult () {
			return convertValueToHitResult(this.type, this.secondValue)
		}
	},

	methods: {
		roll () {
			if (!this.timeoutId) {
				this.timeoutId = setTimeout(() => {
					this.value = rollValue(this.type)
					this.secondValue = 0
					this.timeoutId = null
				}, 200)
			} else {
				clearTimeout(this.timeoutId)
				this.timeoutId = null
				this.value = rollValue(this.type)
				this.secondValue = rollValue(this.type)
			}
		}
	}
}
</script>
        <style lang="scss" scoped>
        .roller {
            cursor: pointer;
        }
        </style>
