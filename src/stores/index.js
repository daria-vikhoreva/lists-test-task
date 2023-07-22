import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { createLists } from '../helpers/utils'

export const useListsStore = defineStore('lists', () => {
	const lists = reactive(createLists())

	const setParameter = (id, parameter, value) => {
		const item = findItemById(id)
		item[parameter] = value
	}

	const deleteItem = (id) => {
		const item = findItemById(id)
		item.count = item.count - 1
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

	const findListByItemId = (id) => {
		for (let i = 0; i < lists.length; i++) {
			const list = lists[i]
			const foundItem = list.find((item) => item.id === id)
			if (foundItem) {
				return i
			}
		}
		return null
	}

	const toggleChecked = (id) => {
		const item = findItemById(id)
		if (item) {
			item.checked = !item.checked
		}
	}

	const toggleCheckedList = (listIndex) => {
		const allChecked = lists[listIndex].every((item) => item.checked)
		const someChecked = lists[listIndex].some((item) => item.checked)

		if (someChecked && !allChecked) {
			return true
		} else {
			lists[listIndex] = lists[listIndex].map((item) => {
				item.checked = !allChecked
				return item
			})
		}
	}

	const mixItems = (listIndex) => {
		const mixedArray = []

		lists[listIndex].forEach((item) => {
			if (item.checked) {
				for (let i = 0; i < item.count; i++) {
					mixedArray.push([item.id, item.color])
				}
			}
		})

		const makeRandom = () => {
			return Math.random() - 0.5
		}

		return mixedArray.sort(makeRandom)
	}

	return {
		lists,
		setParameter,
		deleteItem,
		findListByItemId,
		toggleChecked,
		toggleCheckedList,
		mixItems,
	}
})
