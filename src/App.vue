<script setup>
import AppLeftPanel from './components/AppLeftPanel.vue'
import AppRightPanel from './components/AppRightPanel.vue'
</script>

<template>
	<div class="wrapper">
		<AppLeftPanel />
		<AppRightPanel />
	</div>
</template>

<style>
.wrapper {
	width: max-content;
	margin: 0 auto;
	padding: 25px;
	display: flex;
	justify-content: center;
	gap: 60px;
	border: 2px solid black;
}
</style>
