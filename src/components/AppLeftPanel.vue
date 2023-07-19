<template>
	<div class="left-panel">
		<div class="left-panel__wrapper">
			<AppList
				v-for="i in 5"
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
}
</script>

<style scoped>
.left-panel {
	padding: 30px;
	border: 2px solid black;
	width: 30vw;
	height: 100vh;
}

.left-panel__wrapper {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
