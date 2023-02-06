<script setup></script>

<template>
	<main class="container mx-auto p-2.5 sm:py-5">
		<h1 class="sr-only">Заказать</h1>

		<base-button
			label="Заказать в Москву"
			class="mb-2.5 sm:mb-0 sm:mr-5"
			@click="requestModal = true"
		/>
		<base-button
			label="Заказать в Санкт-Петербург"
			color="teal"
			@click="requestModal = true"
		/>
	</main>

	<base-modal
		title="Заказать звонок"
		:show="requestModal"
		@close-modal="requestModal = false"
	>
		<request-form />
	</base-modal>

	<base-modal
		title="Заказать звонок"
		:show="resultModal"
		@close-modal="resultModal = false"
	>
		Заявка отправлена!
	</base-modal>
</template>

<script>
	import RequestForm from '@/components/RequestForm.vue';
	export default {
		components: { RequestForm },

		data() {
			return {
				requestModal: false,
				resultModal: false,
			};
		},
	};
</script>

<style scoped></style>
