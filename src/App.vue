<script setup></script>

<template>
	<main class="container mx-auto p-2.5 sm:py-5">
		<h1 class="sr-only">Заказать</h1>

		<base-button
			label="Заказать в Москву"
			class="mb-2.5 sm:mb-0 sm:mr-5"
			@click="modalVisible = true"
		/>
		<base-button
			label="Заказать в Санкт-Петербург"
			color="teal"
			@click="modalVisible = true"
		/>

		<base-modal
			title="Заказать звонок"
			:show="modalVisible"
			@close-modal="modalVisible = false"
		>
			<request-form />
		</base-modal>
	</main>
</template>

<script>
	import RequestForm from '@/components/RequestForm.vue';
	export default {
		components: { RequestForm },

		data() {
			return {
				modalVisible: false,
			};
		},
	};
</script>

<style scoped></style>
