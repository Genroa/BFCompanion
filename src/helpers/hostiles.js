
export const hostileProfiles = [

]

export const hostileProfilesMap = Object.fromEntries(
	hostileProfiles.map(h => [h.id, h])
)

export const hostileGroupsLists = [
	{
		id: 'guardsmen',
		name: 'Guardsmen',
		profileIds: ['guardsmen']
	}
]

export const hostileGroupsSelectList = hostileGroupsLists.map(
	g => ({ text: g.name, value: g.id })
)

export const hostileGroupsListsMap = Object.fromEntries(
	hostileGroupsLists.map(h => [h.id, h])
)
