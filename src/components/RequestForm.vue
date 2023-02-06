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
			:error="getErrorMessage('name')"
		/>

		<base-input
			type="phone"
			label="Телефон*"
			v-maska
			data-maska="+7 (###) ###-##-##"
			placeholder="+7 (___) ___-__-__"
			v-model="formData.phone"
			:error="getErrorMessage('phone')"
		/>

		<base-input
			type="email"
			label="Email*"
			placeholder="you@example.com"
			v-model="formData.email"
			:error="getErrorMessage('email')"
		/>

		<base-select
			name="city"
			id="city-select"
			label="Город*"
			v-model="formData.city_id"
			rootClassList="sm:col-span-2 xl:col-span-1"
			:error="getErrorMessage('city_id')"
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
	import axios from 'axios';

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
					city_id: String(this.$store.state.cities.selectedId),
				},

				cityList: this.$store.state.cities.list,

				validationMessages: {
					empty: 'Обязательное поле',
					incorrectEmail: 'Некорректный адрес',
					incorrectNumber: 'Некорректный номер',
				},
			};
		},

		validations() {
			return {
				formData: {
					name: {
						required: helpers.withMessage(
							this.validationMessages.empty,
							required
						),
					},
					phone: {
						required: helpers.withMessage(
							this.validationMessages.empty,
							required
						),
						minLength: helpers.withMessage(
							this.validationMessages.incorrectNumber,
							minLength(18)
						),
					},
					email: {
						required: helpers.withMessage(
							this.validationMessages.empty,
							required
						),
						minLength: helpers.withMessage(
							this.validationMessages.incorrectEmail,
							email
						),
					},
					city_id: {
						required: helpers.withMessage(
							this.validationMessages.empty,
							required
						),
					},
				},
			};
		},

		methods: {
			async submitForm() {
				try {
					const validation = await this.v$.$validate();
					if (this.v$.$error) {
						return console.log('Data is invalid!');
					}
					const response = await axios.post(
						'http://hh.autodrive-agency.ru/test-tasks/front/task-7/',
						{
							name: this.formData.name,
							phone: this.formData.phone.replace(/[^\d+]/g, ''),
							email: this.formData.email,
							city_id: this.formData.city_id,
						}
					);
					this.$store.commit('setRequestFormResponse', {
						success: true,
						data: response.data,
					});

					this.$store.commit('setModal', {
						name: 'responseModal',
						open: true,
					});
					for (let field in this.formData) {
						this.formData[field] = '';
					}

					console.log('Done!', response.data);
				} catch (err) {
					this.$store.commit('setRequestFormResponse', {
						success: false,
						data: err,
					});

					this.$store.commit('setModal', {
						name: 'responseModal',
						open: true,
					});
					console.log('Something went wrong...', err);
				}
			},

			getErrorMessage(field) {
				return this.v$.formData[field].$error
					? this.v$.formData[field].$errors[0].$message
					: false;
			},
		},
	};
</script>

<style scoped></style>
