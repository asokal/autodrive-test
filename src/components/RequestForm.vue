<template>
	<form
		class="sm:grid-row-2 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4"
		@submit.prevent="submitForm"
		novalidate
	>
		<base-input
			label="Имя*"
			placeholder="Иван Иванов"
			v-model="formData.name"
			:error="valiData.errors.name"
		/>

		<base-input
			type="phone"
			label="Телефон*"
			v-maska
			data-maska="+7 (###) ###-##-##"
			placeholder="+7 (___) ___-__-__"
			v-model="formData.phone"
			:error="valiData.errors.phone"
		/>

		<base-input
			type="email"
			label="Email*"
			placeholder="you@example.com"
			v-model="formData.email"
			:error="valiData.errors.email"
		/>

		<base-select
			name="city"
			id="city-select"
			label="Город*"
			v-model="formData.city_id"
			rootClassList="sm:col-span-2 xl:col-span-1"
			:error="valiData.errors.city_id"
		>
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
	import { useVuelidate } from '@vuelidate/core';
	import { required, email, minLength, helpers } from '@vuelidate/validators';

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

				valiData: {
					errors: {
						name: false,
						phone: false,
						email: false,
					},

					errorMessages: {
						empty: 'Обязательное поле',
						incorrectEmail: 'Некорректный адрес',
						incorrectNumber: 'Некорректный номер',
					},
				},
			};
		},

		validations() {
			return {
				formData: {
					name: {
						required: helpers.withMessage(
							this.valiData.errorMessages.empty,
							required
						),
					},
					phone: {
						required: helpers.withMessage(
							this.valiData.errorMessages.empty,
							required
						),
						minLength: helpers.withMessage(
							this.valiData.errorMessages.incorrectNumber,
							minLength(18)
						),
					},
					email: {
						required: helpers.withMessage(
							this.valiData.errorMessages.empty,
							required
						),
						minLength: helpers.withMessage(
							this.valiData.errorMessages.incorrectEmail,
							email
						),
					},
					city_id: {
						required: helpers.withMessage(
							this.valiData.errorMessages.empty,
							required
						),
					},
				},
			};
		},

		methods: {
			setErrors() {
				let errorsFields = this.valiData.errors;
				let vuelidateFormData = this.v$.formData;

				for (let field in errorsFields) {
					if (vuelidateFormData[field].$errors[0].$message) {
						errorsFields[field] =
							vuelidateFormData[field].$errors[0].$message;
					}
				}
			},

			async submitForm() {
				await this.v$.$validate();
				this.setErrors();

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
