<template>
	<div>
		<label :style="{ 'background-color': color }">
			<input
				type="color"
				@change="changeColor"
				class="ui-color"
			/>
		</label>
	</div>
</template>

<script>
export default {
	name: 'UiColor',
	props: {
		color: String,
	},
	methods: {
		changeColor(event) {
			this.$emit('change-color', event.target.value)
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
