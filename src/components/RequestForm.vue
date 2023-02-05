<template>
	<form
		class="sm:grid-row-2 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4"
		@submit.prevent="submitForm"
	>
		<div class="relative">
			<base-input
				label="Имя*"
				placeholder="Иван Иванов"
				v-model="formData.name"
			/>

			<span
				class="absolute left-0 -bottom-5 text-xs font-normal text-red-500"
				v-if="v$.formData.name.$error"
			>
				Обязательное поле
			</span>
		</div>

		<div class="relative">
			<base-input
				type="phone"
				label="Телефон*"
				v-maska
				data-maska="+7 (###) ###-##-##"
				placeholder="+7 (___) ___-__-__"
				v-model="formData.phone"
			/>

			<span
				class="absolute left-0 -bottom-5 text-xs font-normal text-red-500"
				v-if="v$.formData.phone.$error"
			>
				Обязательное поле
			</span>
		</div>

		<div class="relative">
			<base-input
				type="email"
				label="Email*"
				placeholder="you@example.com"
				v-model="formData.email"
			/>

			<span
				class="absolute left-0 -bottom-5 text-xs font-normal text-red-500"
				v-if="v$.formData.email.$error"
			>
				Обязательное поле
			</span>
		</div>

		<div class="sm:col-span-2 xl:col-span-1">
			<base-select
				name="city"
				id="city-select"
				label="Город*"
				v-model="formData.city_id"
			>
				<option
					v-for="city in cityList"
					:key="city.id"
					:value="city.id"
				>
					{{ city.name }}
				</option>
			</base-select>

			<span
				class="absolute left-0 -bottom-5 text-xs font-normal text-red-500"
				v-if="v$.formData.city_id.$error"
			>
				Обязательное поле
			</span>
		</div>

		<base-button
			label="Отправить"
			color="green"
			class="self-end sm:col-start-3 xl:col-start-4"
		/>
	</form>
</template>

<script>
	import { vMaska } from 'maska';
	import { useVuelidate } from '@vuelidate/core';
	import { required, email, minLength } from '@vuelidate/validators';

	export default {
		name: 'request-form',
		directives: { maska: vMaska },

		data() {
			return {
				v$: useVuelidate(),

				formData: {
					name: '',
					phone: '',
					email: '',
					city_id: '1',
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

		validations() {
			return {
				formData: {
					name: { required },
					phone: { required, minLength: minLength(18) },
					email: { required, email },
					city_id: { required },
				},
			};
		},

		// beforeMount() {
		// 	this.v$.$validate();
		// },

		methods: {
			async submitForm() {
				await this.v$.$validate();
				if (this.v$.$error) {
					return console.log('Data is invalid!');
				}
				console.log('Done!');
			},
		},

		computed: {
			unmaskData() {
				this.formData.phone.replace(/[^\d+]/g, '');
			},
		},
	};
</script>

<style scoped></style>
