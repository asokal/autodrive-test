<template>
	<form
		class="sm:grid-row-2 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4"
	>
		<label>
			<span class="mb-1 block leading-5 text-gray-700">Телефон*</span>
			<input
				type="phone"
				placeholder="+7 (___) ___-__-__"
				class="w-full rounded-md border border-gray-300 px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm placeholder:text-gray-500"
			/>
		</label>

		<label>
			<span class="mb-1 block leading-5 text-gray-700">Имя*</span>
			<input
				type="text"
				placeholder="Иван Иванов"
				class="w-full rounded-md border border-gray-300 px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm placeholder:text-gray-500"
			/>
		</label>

		<label>
			<span class="mb-1 block leading-5 text-gray-700">Email*</span>
			<input
				type="email"
				placeholder="you@example.com"
				class="w-full rounded-md border border-gray-300 px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm placeholder:text-gray-500"
			/>
		</label>

		<label class="sm:col-span-2 xl:col-span-1">
			<span class="mb-1 block leading-5 text-gray-700">Город*</span>
			<select
				name="city"
				id="city-select"
				class="w-full appearance-none rounded-md border border-gray-300 bg-arrow-down bg-right bg-no-repeat bg-origin-content px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm"
			>
				<option value="moscow" selected>Москва</option>
				<option value="spb">Санкт-Петербург</option>
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
	import BaseButton from './BaseButton.vue';

	export default {
		name: 'request-form',
		components: { BaseButton },

		data() {
			return {};
		},
	};
</script>

<style scoped></style>
