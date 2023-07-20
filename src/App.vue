<script>
import AppLeftPanel from './components/AppLeftPanel.vue'
import AppRightPanel from './components/AppRightPanel.vue'
import { computed } from 'vue'

import { useListsStore } from './stores/index'

export default {
	name: 'App',
	components: {
		AppLeftPanel,
		AppRightPanel,
	},
	setup() {
		const listsStore = useListsStore()
		const lists = computed(() => listsStore.lists)

		return {
			lists,
		}
	},
}
</script>

<template>
	<div class="wrapper">
		<AppLeftPanel :lists="lists" />
		<AppRightPanel :lists="lists" />
	</div>
</template>

<style>
.wrapper {
	width: max-content;
	height: 100%;
	margin: 0 auto;
	padding: 25px;
	display: flex;
	justify-content: center;
	gap: 60px;
	border: 2px solid black;
}
</style>
