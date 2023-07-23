import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { createLists } from '../helpers/utils'

export const useListsStore = defineStore('lists', () => {
	const lists = reactive(createLists())

	const setParameter = (id, parameter, value) => {
		const item = findItemById(id)
		if (item) {
			item[parameter] = value
		}
	}

	const deleteItem = (id) => {
		const item = findItemById(id)
		if (item) {
			item.count -= 1
		}
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
		}
	}

	const hasUncheckedItems = (listIndex) => {
		const allChecked = lists[listIndex].every((item) => item.checked)
		const someChecked = lists[listIndex].some((item) => item.checked)

		return someChecked && !allChecked
	}

	const allItemsChecked = (listIndex) => {
		const allChecked = lists[listIndex].every((item) => item.checked)

		return allChecked
	}

	const toggleCheckedList = (listIndex) => {
		const allChecked = lists[listIndex].every((item) => item.checked)

		lists[listIndex] = lists[listIndex].map((item) => {
			item.checked = !allChecked
			return item
		})
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
		hasUncheckedItems,
		allItemsChecked,
		toggleChecked,
		toggleCheckedList,
		mixItems,
	}
})
