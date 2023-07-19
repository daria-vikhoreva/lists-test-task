<template>
	<div class="item">
		<div class="left">
			<input type="checkbox" />
			Item
		</div>
		<div class="right">
			Количество
			<UiColor />
		</div>
	</div>
</template>

<script>
import UiColor from './Ui/UiColor.vue'
export default {
	name: 'AppItem',
	components: {
		UiColor,
	},
}
</script>

<style scoped>
.item {
	display: flex;
	justify-content: space-between;
}

.right {
	display: flex;
	gap: 10px;
	margin-right: 20px;
}
</style>
