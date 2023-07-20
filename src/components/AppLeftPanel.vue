<template>
	<div class="left-panel">
		<div class="left-panel__wrapper">
			<AppList
				v-for="(list, index) in lists"
				:key="index"
				:list="list"
				:index="index"
				class="left-panel__list"
			/>
		</div>
	</div>
</template>

<script>
import AppList from './AppList.vue'

export default {
	name: 'AppLeftPanel',
	components: {
		AppList,
	},
	props: {
		lists: Array,
	},
}
</script>

<style scoped>
.left-panel {
	padding: 30px;
	border: 2px solid black;
	width: 30vw;
}

.left-panel__wrapper {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
