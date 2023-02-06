import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			modals: {
				requestModal: false,
				responseModal: false,
			},

			requestFormResponse: {
				success: false,
				data: '',
			},

			cities: {
				selectedId: 1,

				list: [
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
			},
		};
	},
	mutations: {
		setSelectedCity(state, cityId) {
			state.cities.selectedId = cityId;
		},

		setRequestFormResponse(state, response) {
			state.requestFormResponse = response;
		},

		setModal(state, modalData) {
			for (let modal in state.modals) {
				if (modal === modalData.name) {
					state.modals[modal] = modalData.open;
				}
			}
		},
	},
});
