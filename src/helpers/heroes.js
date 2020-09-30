
export const heroesBackgrounds = {
	pious_vorne: { backgroundPosition: 'calc(80% + 200px) 20%' },
	amallyn_shadowguide: { backgroundPosition: 'calc(80% + 100px) 31%' },
	dahyak_grekh: { backgroundPosition: 'calc(80% + 100px) 15%' },
	'ur-025': { backgroundPosition: 'calc(80% + 90px) 30%' },
	janus_draik: { backgroundPosition: 'calc(80% + 100px) 13%' },
	taddeus_the_purifier: { backgroundPosition: 'calc(80% + 150px) 20%' },
	espern_locarno: { backgroundPosition: 'calc(80% + 100px) 0%' },
	ratling_twins: { backgroundPosition: 'calc(80% + 100px) 35%' }
}

export const heroesFightBackgrounds = {
	pious_vorne: { backgroundPosition: 'calc(80% + 200px) 20%' },
	amallyn_shadowguide: { backgroundPosition: 'calc(80% + 100px) 31%' },
	dahyak_grekh: { backgroundPosition: 'calc(80% + 100px) 15%' },
	'ur-025': { backgroundPosition: 'calc(80% + 90px) 30%' },
	janus_draik: { backgroundPosition: 'calc(80% + 100px) 13%' },
	taddeus_the_purifier: { backgroundPosition: 'calc(80% + 150px) 20%' },
	espern_locarno: { backgroundPosition: 'calc(80% + 100px) 0%' },
	ratling_twins: { backgroundPosition: 'calc(80% + 100px) 35%' }
}

export const heroesList = [
	{
		id: 'janus_draik',
		name: 'Janus Draik'
	},
	{
		id: 'taddeus_the_purifier',
		name: 'Taddeus the Purifier'
	},
	{
		id: 'espern_locarno',
		name: 'Espern Locarno'
	},
	{
		id: 'pious_vorne',
		name: 'Pious Vorne'
	},
	{
		id: 'ur-025',
		name: 'UR-025'
	},
	{
		id: 'dahyak_grekh',
		name: 'Dahyak Grekh'
	},
	{
		id: 'amallyn_shadowguide',
		name: 'Amallyn Shadowguide'
	},
	{
		id: 'ratling_twins',
		name: 'Rein & Raus'
	}
]
export const heroesMap = Object.fromEntries(
	heroesList.map(h => [h.id, h])
)
