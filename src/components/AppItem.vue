<template>
	<div class="item">
		<div class="left">
			<input
				type="checkbox"
				class="input__checkbox"
				:checked="item.checked"
				@change="toggleChecked(item)"
			/>
			{{ item.name }}
		</div>
		<div class="right">
			<input
				@change="changeCount(item.count)"
				type="number"
				min="0"
				max="100"
				v-model.number="item.count"
				class="item__input"
			/>
			<UiColor
				@change-color="changeColor"
				:color="item.color"
				class="item__color"
			/>
		</div>
	</div>
</template>

<script>
import UiColor from './Ui/UiColor.vue'
import { mapStores } from 'pinia'
import { useListsStore } from '../stores/index'

export default {
	name: 'AppItem',
	props: {
		item: Object,
	},
	emits: ['change-color'],
	components: {
		UiColor,
	},
	methods: {
		changeColor(color) {
			this.listsStore.setColor(this.item, color)
		},
		changeCount(count) {
			this.listsStore.setCount(this.item, count)
		},
		toggleChecked(item) {
			this.listsStore.toggleChecked(item)
		},
	},
	computed: {
		...mapStores(useListsStore),
	},
}
</script>

<style scoped>
.item {
	display: flex;
	justify-content: space-between;
}
.item__input {
	width: 50px;
}
.right {
	display: flex;
	gap: 10px;
	margin-right: 20px;
}
</style>
