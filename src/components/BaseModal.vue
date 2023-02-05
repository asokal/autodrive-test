<template>
	<Teleport to="#modals">
		<div
			v-if="show"
			class="fixed inset-0 flex items-center justify-center bg-gray-500/75 p-2.5 sm:p-10"
			@click="closeModal"
		>
			<div
				class="w-full rounded-lg bg-white p-6 font-medium shadow-xl lg:w-1/2"
				@click.stop
			>
				<h2
					class="mb-9 text-2xl leading-none text-gray-900 sm:mb-7 md:mb-6"
				>
					{{ title }}
				</h2>

				<slot></slot>
			</div>
		</div>
	</Teleport>
</template>

<script>
	export default {
		emits: ['close-modal'],

		name: 'base-modal',

		props: {
			show: {
				type: Boolean,
				default: false,
			},

			title: {
				type: String,
				required: true,
			},
		},

		methods: {
			closeModal() {
				this.$emit('close-modal');
				console.log('this');
			},
		},

		created() {
			document.addEventListener('keyup', (e) => {
				if (e.keyCode === 27) {
					this.closeModal();
				}
			});
		},
	};
</script>

<style scoped></style>
