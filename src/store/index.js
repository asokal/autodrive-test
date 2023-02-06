import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			modals: {
				requestModal: false,
				resultModal: false,
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
	},
});
