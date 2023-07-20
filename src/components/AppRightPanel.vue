<template>
	<div class="right-panel">
		<AppListView
			v-for="(list, index) in lists"
			:key="index"
			:list="list"
			:index="index"
		/>
	</div>
</template>

<script>
import AppListView from './AppListView.vue'
export default {
	name: 'AppRightPanel',
	props: {
		lists: Array,
	},
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
	display: flex;
	flex-direction: column;
	gap: 14px;
}
</style>
