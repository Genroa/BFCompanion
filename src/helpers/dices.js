
export const DICE_TYPES = {
	SQUARE: {
		faces: 6,
		miss: 4,
		hit: 1,
		critical: 1
	},
	TRIANGLE: {
		faces: 8,
		miss: 4,
		hit: 2,
		critical: 2
	},
	PENTAGON: {
		faces: 12,
		miss: 4,
		hit: 4,
		critical: 4
	},
	BLACKSTONE: {
		faces: 20
	}
}

export const rollValue = function (diceTypeId) {
	const type = DICE_TYPES[diceTypeId]
	return Math.floor(Math.random() * Math.floor(type.faces)) + 1
}

export const convertValueToHitResult = function (diceTypeId, value) {
	const type = DICE_TYPES[diceTypeId]
	if (value <= type.miss) return 'miss'
	if (value <= type.miss + type.hit) return 'hit'
	return 'critical'
}

export const rollHitDice = function (diceTypeId) {
	const value = rollValue(diceTypeId)
	return convertValueToHitResult(diceTypeId, value)
}

export const rollBlackstoneDice = function () {
	return rollValue('BLACKSTONE')
}
