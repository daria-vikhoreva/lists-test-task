<template>
	<div class="list-view">
		<div class="list-view__wrapper">
			<div class="list-view__title">List {{ index + 1 }}</div>
			<UiButton class="list-view__button" />
		</div>
		<div class="list-view__items">
			<div
				v-for="item in list"
				:key="item.id"
				class="list-view__item"
			>
				<template v-if="item.checked">
					<div
						v-for="(_, index) in item.count"
						:key="index"
						class="item"
						:style="{ 'background-color': item.color }"
						@click="deleteItem(item)"
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
	computed: {
		...mapStores(useListsStore),
	},
	methods: {
		deleteItem(item) {
			item.count = item.count - 1
			this.listsStore.setCount(item, item.count)
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
.list-view__item {
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
