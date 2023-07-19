<template>
	<div class="list-view">
		<div class="list-view__wrapper">
			<div class="list-view__title">List 1</div>
			<div class="list-view__button">
				<UiButton />
			</div>
		</div>
		<div class="list-view__items">Items</div>
	</div>
</template>

<script>
import UiButton from './Ui/UiButton.vue'
export default {
	name: 'AppListView',
	components: {
		UiButton,
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
</style>
