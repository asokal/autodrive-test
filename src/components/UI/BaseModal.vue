<template>
	<Teleport to="#modals">
		<div
			v-if="show"
			class="fixed inset-0 flex items-center justify-center bg-gray-500/75 p-2.5 sm:p-10"
			@click="closeModal"
		>
			<div
				class="rounded-lg bg-white p-6 font-medium shadow-xl"
				@click.stop
				v-bind="$attrs"
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
		inheritAttrs: false,
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
			},
		},

		created() {
			document.addEventListener('keyup', (e) => {
				if (e.key === 'Escape') {
					this.closeModal();
				}
			});
		},
	};
</script>

<style scoped></style>
