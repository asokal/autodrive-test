<template>
	<button
		:class="`w-full rounded-md ${colorClass} py-2 px-4 font-medium text-white shadow-sm transition hover:brightness-110 sm:w-auto`"
	>
		{{ label }}
	</button>
</template>

<script>
	export default {
		name: 'base-button',

		props: {
			label: {
				type: String,
				default: 'button',
			},

			color: {
				type: String,
				default: 'blue-500',
			},
		},

		computed: {
			colorClass() {
				const color = this.color;
				return `bg-${color}`;
			},
		},
	};
</script>

<style scoped></style>
