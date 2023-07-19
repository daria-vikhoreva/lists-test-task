<template>
	<div class="list">
		<div class="list__title">
			<UiCheckbox />
			List
		</div>
		<div class="list__items">
			<AppItem />
		</div>
	</div>
</template>

<script>
import AppItem from './AppItem.vue'
import UiCheckbox from './Ui/UiCheckbox.vue'
export default {
	name: 'List',
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
}
</style>
