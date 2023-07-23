<template>
	<div
		class="checkbox"
		@click="clickCheckbox"
	>
		<div
			class="checkbox__content"
			:class="{
				checkbox__content_checked: areAllChecked,
				checkbox__content_dotted: areSomeChecked,
			}"
		></div>
	</div>
</template>

<script>
export default {
	name: 'UiCheckbox',
	props: {
		allChecked: Boolean,
		someChecked: Boolean,
	},
	data() {
		return {
			areAllChecked: false,
			areSomeChecked: false,
		}
	},
	emits: ['change-checkbox'],
	methods: {
		clickCheckbox() {
			this.$emit('change-checkbox')
		},
		setValues() {
			this.areAllChecked = this.allChecked
			this.areSomeChecked = this.someChecked
		},
	},
	beforeMount() {
		this.setValues()
	},
	beforeUpdate() {
		this.setValues()
	},
}
</script>

<style scoped>
.checkbox {
	height: 20px;
	border: 2px inset #000;
	border-radius: 4px;
}
.checkbox__content {
	width: 18px;
	height: 18px;
}
.checkbox__content.checkbox__content_checked::before {
	content: '\2713';
	text-align: center;
	color: black;
	line-height: 20px;
	width: 100%;
	display: inline-block;
}
.checkbox__content.checkbox__content_dotted::before {
	content: '\2022';
	text-align: center;
	color: black;
	line-height: 20px;
	width: 100%;
	display: inline-block;
}
</style>
