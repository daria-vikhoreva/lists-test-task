<template>
	<div class="list">
		<div class="list__title">
			<div
				@click="toggleList"
				class="list__dropdown"
			>
				<img
					src="../assets/dropdown.png"
					alt="dropdown"
					class="dropdown"
					:class="{ dropdown_rotate: listIsOpen }"
				/>
			</div>
			<UiCheckbox class="list__checkbox" />
			List {{ index + 1 }}
		</div>
		<div
			v-show="listIsOpen"
			class="list__items"
		>
			<AppItem
				v-for="item in list"
				:key="item.id"
				:item="item"
			/>
		</div>
	</div>
</template>

<script>
import AppItem from './AppItem.vue'
import UiCheckbox from './Ui/UiCheckbox.vue'
export default {
	name: 'List',
	components: {
		AppItem,
		UiCheckbox,
	},
	props: {
		list: Array,
		index: Number,
	},
	data() {
		return {
			listIsOpen: true,
		}
	},
	methods: {
		toggleList() {
			this.listIsOpen = !this.listIsOpen
		},
	},
}
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.list__title {
	display: flex;
	gap: 10px;
	font-size: 18px;
}

.list__items {
	margin-left: 20px;
	margin-top: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.dropdown {
	width: 20px;
	cursor: pointer;
}
.dropdown_rotate {
	transform: rotate(-90deg);
}
</style>
