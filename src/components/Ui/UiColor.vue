<template>
	<div>
		<label :style="{ 'background-color': backgroundColor }">
			<input
				type="color"
				class="ui-color"
				@change="changeColor"
			/>
		</label>
	</div>
</template>

<script>
export default {
	name: 'UiColor',
	data() {
		return {
			backgroundColor: 'black',
		}
	},
	methods: {
		changeColor(event) {
			this.backgroundColor = event.target.value
		},
	},
}
</script>

<style scoped>
input {
	visibility: hidden;
}

label {
	height: 20px;
	width: 20px;
	display: block;
}
</style>
