<template>
	<div class="list-view">
		<div class="list-view__wrapper">
			<div class="list-view__title">List {{ index + 1 }}</div>
			<UiButton
				class="list-view__button"
				@click="toggleSortAndMix"
			>
				{{ isSorted ? 'Перемешать' : 'Сортировать' }}</UiButton
			>
		</div>
		<div class="list-view__items">
			<div
				v-if="!isSorted && mixedList"
				class="list-view__row"
			>
				<div
					v-for="(elem, index) in mixedList"
					:key="index"
					class="item"
					:style="{ 'background-color': elem[1] }"
					@click="deleteItem(elem[0])"
				></div>
			</div>
			<div
				v-for="item in list"
				:key="item.id"
				class="list-view__row"
			>
				<template v-if="isSorted && item.checked">
					<div
						v-for="(_, index) in item.count"
						:key="index"
						class="item"
						:style="{ 'background-color': item.color }"
						@click="deleteItem(item.id)"
					></div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import UiButton from './Ui/UiButton.vue'
import { mapStores } from 'pinia'
import { useListsStore } from '../stores/index'

export default {
	name: 'AppListView',
	components: {
		UiButton,
	},
	props: {
		list: {
			item: Object,
		},
		index: Number,
	},
	data() {
		return {
			isSorted: true,
		}
	},
	computed: {
		...mapStores(useListsStore),
		mixedList() {
			if (!this.isSorted) {
				return this.listsStore.mixItems(this.index)
			} else {
				return []
			}
		},
	},
	methods: {
		deleteItem(id) {
			this.listsStore.deleteItem(id)
		},

		toggleSortAndMix() {
			this.isSorted = !this.isSorted
		},
	},
}
</script>

<style scoped>
.list-view {
	border: 2px solid black;
	padding: 10px;
}
.list-view__wrapper {
	display: flex;
	justify-content: space-between;
}
.list-view__items {
	margin-top: 6px;
}
.list-view__row {
	margin-top: 4px;
	display: flex;
	flex-wrap: wrap;
	gap: 3px;
	cursor: pointer;
}
.item {
	width: 10px;
	height: 10px;
}
</style>
