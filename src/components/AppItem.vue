<template>
	<div class="item">
		<div class="left">
			<input
				type="checkbox"
				:checked="item.checked"
				@change="toggleChecked(item)"
				class="input__checkbox"
			/>
			{{ item.name }}
		</div>
		<div class="right">
			<input
				type="number"
				min="0"
				max="100"
				v-model.number="item.count"
				@change="changeCount(item.count)"
				class="item__input"
			/>
			<UiColor
				:color="item.color"
				@change-color="changeColor"
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
	components: {
		UiColor,
	},
	props: {
		item: Object,
	},
	emits: ['change-color'],
	computed: {
		...mapStores(useListsStore),
	},
	methods: {
		changeColor(color) {
			this.listsStore.setColor(this.item.id, color)
		},
		changeCount(count) {
			this.listsStore.setCount(this.item.id, count)
		},
		toggleChecked(item) {
			this.listsStore.toggleChecked(item.id)
		},
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
