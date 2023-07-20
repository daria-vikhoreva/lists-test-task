import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useListsStore = defineStore('lists', () => {
	const savedLists = JSON.parse(localStorage.getItem('lists'))
	const lists = reactive(
		savedLists || [
			[
				{
					id: 1,
					name: 'Item 1',
					count: 9,
					checked: true,
					color: '#4ba4c5',
				},
				{
					id: 2,
					name: 'Item 2',
					count: 12,
					checked: false,
					color: '#2e8d7d',
				},
				{
					id: 3,
					name: 'Item 3',
					count: 4,
					checked: false,
					color: '#1bbb3f',
				},
				{
					id: 4,
					name: 'Item 4',
					count: 8,
					checked: true,
					color: '#c1c882',
				},
				{
					id: 5,
					name: 'Item 5',
					count: 17,
					checked: false,
					color: '#17ed18',
				},
			],
			[
				{
					id: 6,
					name: 'Item 1',
					count: 6,
					checked: false,
					color: '#297636',
				},
				{
					id: 7,
					name: 'Item 2',
					count: 10,
					checked: true,
					color: '#5b4d87',
				},
				{
					id: 8,
					name: 'Item 3',
					count: 5,
					checked: true,
					color: '#b09df7',
				},
				{
					id: 9,
					name: 'Item 4',
					count: 14,
					checked: false,
					color: '#6013e1',
				},
				{
					id: 10,
					name: 'Item 5',
					count: 6,
					checked: true,
					color: '#d62b90',
				},
			],
			[
				{
					id: 11,
					name: 'Item 1',
					count: 13,
					checked: true,
					color: '#d6f7de',
				},
				{
					id: 12,
					name: 'Item 2',
					count: 9,
					checked: false,
					color: '#1b6cc0',
				},
				{
					id: 13,
					name: 'Item 3',
					count: 7,
					checked: false,
					color: '#c8369c',
				},
				{
					id: 14,
					name: 'Item 4',
					count: 11,
					checked: true,
					color: '#a3e636',
				},
				{
					id: 15,
					name: 'Item 5',
					count: 4,
					checked: true,
					color: '#2f19d0',
				},
				{
					id: 16,
					name: 'Item 6',
					count: 0,
					checked: false,
					color: '#43c8b0',
				},
			],
			[
				{
					id: 17,
					name: 'Item 1',
					count: 27,
					checked: true,
					color: '#9854e0',
				},
				{
					id: 18,
					name: 'Item 2',
					count: 8,
					checked: false,
					color: '#77e4bf',
				},
				{
					id: 19,
					name: 'Item 3',
					count: 13,
					checked: true,
					color: '#b6b6bb',
				},
				{
					id: 20,
					name: 'Item 4',
					count: 6,
					checked: true,
					color: '#15a6fe',
				},
				{
					id: 21,
					name: 'Item 5',
					count: 3,
					checked: false,
					color: '#13f4ba',
				},
			],
			[
				{
					id: 22,
					name: 'Item 1',
					count: 5,
					checked: false,
					color: '#64cf69',
				},
				{
					id: 23,
					name: 'Item 2',
					count: 4,
					checked: true,
					color: '#4aa320',
				},
				{
					id: 24,
					name: 'Item 3',
					count: 12,
					checked: false,
					color: '#a67532',
				},
				{
					id: 25,
					name: 'Item 4',
					count: 21,
					checked: true,
					color: '#c81b45',
				},
				{
					id: 26,
					name: 'Item 5',
					count: 8,
					checked: false,
					color: '#231d9e',
				},
				{
					id: 27,
					name: 'Item 6',
					count: 4,
					checked: true,
					color: '#166400',
				},
			],
		]
	)

	const saveToLocalStore = () => {
		localStorage.setItem('lists', JSON.stringify(lists))
	}

	const setColor = (id, newColor) => {
		const item = findItemById(id)
		item.color = newColor
		saveToLocalStore()
	}

	const setCount = (id, newCount) => {
		const item = findItemById(id)
		item.count = newCount
		saveToLocalStore()
	}

	const findItemById = (id) => {
		for (const list of lists) {
			const foundItem = list.find((item) => item.id === id)
			if (foundItem) {
				return foundItem
			}
		}
		return null
	}

	const toggleChecked = (id) => {
		const item = findItemById(id)
		if (item) {
			item.checked = !item.checked
			saveToLocalStore()
		}
	}

	const randomazeItemsInList = (listIndex) => {
		const currentList = lists[listIndex]

		const ids = currentList.map((list) => list.id)
		// рандомим ids

		saveToLocalStore()
	}

	const toggleCheckedList = (listIndex) => {
		const allChecked = lists[listIndex].every((item) => item.checked)

		lists[listIndex] = lists[listIndex].map((item) => {
			item.checked = !allChecked
			return item
		})

		saveToLocalStore()
	}

	return { lists, setColor, setCount, toggleChecked, toggleCheckedList }
})
