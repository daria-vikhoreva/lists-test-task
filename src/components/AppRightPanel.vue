<template>
	<div class="right-panel">
		<AppListView v-for="i in 5" />
	</div>
</template>

<script>
import AppListView from './AppListView.vue'
export default {
	name: 'AppRightPanel',
	components: {
		AppListView,
	},
}
</script>

<style scoped>
.right-panel {
	padding: 30px;
	border: 2px solid black;
	width: 30vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 14px;
}
</style>
