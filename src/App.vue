<script>
import AppLeftPanel from './components/AppLeftPanel.vue'
import AppRightPanel from './components/AppRightPanel.vue'

import { useListsStore } from './stores/index'

export default {
	name: 'App',
	components: {
		AppLeftPanel,
		AppRightPanel,
	},
	setup() {
		const listsStore = useListsStore()

		return {
			lists: listsStore.lists,
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
