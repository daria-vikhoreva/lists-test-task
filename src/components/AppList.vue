<template>
	<div class="list">
		<div class="list__title">
			<UiCheckbox />
			List {{ index + 1 }}
		</div>
		<div class="list__items">
			<AppItem
				v-for="item in list"
				:key="item.id"
				:item="item"
			/>
		</div>
	</div>
</template>

<script>
import AppItem from './AppItem.vue'
import UiCheckbox from './Ui/UiCheckbox.vue'
export default {
	name: 'List',
	props: {
		list: Array,
		index: Number,
	},
	components: {
		AppItem,
		UiCheckbox,
	},
}
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.list__title {
	display: flex;
	gap: 10px;
	font-size: 18px;
}

.list__items {
	margin-left: 20px;
	margin-top: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
</style>
