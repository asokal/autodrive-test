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
				default: 'blue',
			},
		},

		computed: {
			colorClass() {
				switch (this.color) {
					case 'blue':
						return 'bg-blue-500';
					case 'teal':
						return 'bg-teal-600';
					case 'green':
						return 'bg-green-600';
					default:
						return 'bg-blue-500';
				}
			},
		},
	};
</script>

<style scoped></style>
