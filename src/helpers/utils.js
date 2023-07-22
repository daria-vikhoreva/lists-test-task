export function createLists() {
	const colors = [
		'#4ba4c5',
		'#2e8d7d',
		'#1bbb3f',
		'#c1c882',
		'#17ed18',
		'#297636',
		'#5b4d87',
		'#b09df7',
		'#6013e1',
		'#d62b90',
	]

	const getRandomNumber = (min, max) => {
		const randomNumber = Math.random()
		const randomNumberInRange = min + randomNumber * (max - min + 1)
		return Math.floor(randomNumberInRange)
	}

	const getRandomBoolean = () => {
		const randomNumber = Math.random()
		const value = 0.5
		return randomNumber >= value
	}

	const createListWithItems = (indexOfList) => {
		const items = []
		const countOfItems = getRandomNumber(4, 10)

		for (let i = 0; i < countOfItems; i++) {
			items.push({
				id: `${indexOfList}${i}`,
				name: `Item ${i + 1}`,
				checked: getRandomBoolean(),
				color: colors[getRandomNumber(0, 9)],
				count: getRandomNumber(0, 100),
			})
		}

		return items
	}

	const lists = []
	const countOfLists = 5

	for (let i = 0; i < countOfLists; i++) {
		lists.push(createListWithItems(i))
	}

	return lists
}
