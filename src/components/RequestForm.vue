<template>
	<form
		class="sm:grid-row-2 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4"
	>
		<base-input label="Имя*" placeholder="Иван Иванов" />

		<base-input
			type="phone"
			label="Телефон*"
			v-maska
			data-maska="+7 (###) ###-##-##"
			placeholder="+7 (___) ___-__-__"
		/>

		<base-input type="email" label="Email*" placeholder="you@example.com" />

		<base-select name="city" id="city-select" label="Город*">
			<option v-for="city in cityList" :key="city.id" :value="city.id">
				{{ city.name }}
			</option>
		</base-select>

		<base-button
			label="Отправить"
			color="green"
			class="self-end sm:col-start-3 xl:col-start-4"
		/>
	</form>
</template>

<script>
	import { vMaska } from 'maska';

	export default {
		name: 'request-form',
		directives: { maska: vMaska },

		data() {
			return {
				formData: {
					name: '',
					phone: '',
					email: '',
					city_id: 1,
				},

				cityList: [
					{
						id: 1,
						name: 'Москва',
					},
					{
						id: 2,
						name: 'Санкт-Петербург',
					},
					{
						id: 3,
						name: 'Казань',
					},
				],
			};
		},
	};
</script>

<style scoped></style>
