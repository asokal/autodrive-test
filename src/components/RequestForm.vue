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

		<label class="sm:col-span-2 xl:col-span-1">
			<span class="mb-1 block leading-5 text-gray-700">Город*</span>
			<select
				name="city"
				id="city-select"
				class="w-full appearance-none rounded-md border border-gray-300 bg-arrow-down bg-right bg-no-repeat bg-origin-content px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm"
			>
				<option value="1" selected>Москва</option>
				<option value="2">Санкт-Петербург</option>
				<option value="2">Казань</option>
			</select>
		</label>

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
			return {};
		},
	};
</script>

<style scoped></style>
