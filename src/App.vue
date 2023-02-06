<script setup></script>

<template>
	<main class="container mx-auto p-2.5 sm:py-5">
		<h1 class="sr-only">Заказать</h1>

		<base-button
			label="Заказать в Москву"
			class="mb-2.5 sm:mb-0 sm:mr-5"
			@click="openRequestModal(1)"
		/>
		<base-button
			label="Заказать в Санкт-Петербург"
			color="teal"
			@click="openRequestModal(2)"
		/>
	</main>

	<base-modal
		title="Заказать звонок"
		:show="$store.state.modals.requestModal"
		class="w-full lg:w-7/12"
		@close-modal="
			$store.commit('setModal', {
				name: 'requestModal',
				open: false,
			})
		"
	>
		<request-form />
	</base-modal>

	<base-modal
		title="Заказать звонок"
		:show="$store.state.modals.responseModal"
		@close-modal="
			$store.commit('setModal', {
				name: 'responseModal',
				open: false,
			})
		"
	>
		<div v-if="$store.state.requestFormResponse.success" class="mb-6">
			Заявка успешно создана!
		</div>

		<div v-else class="mb-10">
			Что-то пошло не так... Попробуем еще раз?.
		</div>
		<base-button
			label="ОК"
			@click="
				$store.commit('setModal', {
					name: 'responseModal',
					open: false,
				})
			"
			class="block"
		/>
	</base-modal>
</template>

<script>
	import RequestForm from '@/components/RequestForm.vue';
	export default {
		components: { RequestForm },

		data() {
			return {
				requestModal: false,
				responseModal: true,
			};
		},

		methods: {
			openRequestModal(cityId) {
				this.$store.commit('setModal', {
					name: 'requestModal',
					open: true,
				});
				this.$store.commit('setSelectedCity', cityId);
			},
		},
	};
</script>

<style scoped></style>
