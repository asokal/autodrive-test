<script setup></script>

<template>
	<main class="container mx-auto p-2.5 sm:py-5 sm:px-0">
		<h1 class="sr-only">Заказать</h1>

		<base-button
			label="Заказать в Москву"
			class="mb-2.5 sm:mb-0 sm:mr-5"
			@click="modalVisible = true"
		/>
		<base-button
			label="Заказать в Санкт-Петербург"
			color="teal-600"
			@click="modalVisible = true"
		/>

		<base-modal
			title="Заказать звонок"
			:show="modalVisible"
			@close-modal="modalVisible = false"
		>
			<div>...</div>
		</base-modal>
	</main>
</template>

<script>
	import BaseButton from './components/BaseButton.vue';
	import BaseModal from './components/BaseModal.vue';
	export default {
		components: { BaseButton, BaseModal },

		data() {
			return {
				modalVisible: false,
			};
		},
	};
</script>

<style scoped></style>
