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
			color="teal"
			@click="modalVisible = true"
		/>

		<base-modal
			title="Заказать звонок"
			:show="modalVisible"
			@close-modal="modalVisible = false"
		>
			<form>
				<label>
					<span class="mb-1 block leading-5 text-gray-700">Имя*</span>
					<input
						type="text"
						placeholder="Иван Иванов"
						class="rounded-md border border-gray-300 px-3 py-2 font-normal leading-5 text-gray-900 placeholder:text-gray-500"
					/>
				</label>
			</form>
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
