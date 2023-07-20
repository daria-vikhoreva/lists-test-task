import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', () => {
	const savedLists = JSON.parse(localStorage.getItem('lists'))

	const lists = savedLists || [
		[
			{
				id: 1,
				name: 'Item 1',
				count: 2,
				checked: true,
				color: 'grey',
			},
			{
				id: 2,
				name: 'Item 2',
				count: 3,
				checked: false,
				color: 'grey',
			},
		],
		[
			{
				id: 3,
				name: 'Item 1',
				count: 1,
				checked: false,
				color: 'grey',
			},
			{
				id: 4,
				name: 'Item 2',
				count: 4,
				checked: true,
				color: 'grey',
			},
		],
		[
			{
				id: 5,
				name: 'Item 1',
				count: 0,
				checked: false,
				color: 'grey',
			},
		],
		[
			{
				id: 6,
				name: 'Item 1',
				count: 5,
				checked: true,
				color: 'grey',
			},
			{
				id: 7,
				name: 'Item 2',
				count: 2,
				checked: false,
				color: 'grey',
			},
			{
				id: 8,
				name: 'Item 3',
				count: 3,
				checked: true,
				color: 'grey',
			},
		],
		[
			{
				id: 9,
				name: 'Item 1',
				count: 1,
				checked: false,
				color: 'grey',
			},
			{
				id: 10,
				name: 'Item 2',
				count: 0,
				checked: true,
				color: 'grey',
			},
			{
				id: 11,
				name: 'Item 3',
				count: 2,
				checked: true,
				color: 'grey',
			},
		],
	]

	const saveToLocalStore = () => {
		localStorage.setItem('lists', JSON.stringify(lists))
	}

	const setColor = (item, newColor) => {
		item.color = newColor
		saveToLocalStore()
	}

	const setCount = (item, newCount) => {
		item.count = newCount
		saveToLocalStore()
	}

	const toggleChecked = (item) => {
		item.checked = !item.checked
		saveToLocalStore()
	}

	return { lists, setColor, setCount, toggleChecked }
})
