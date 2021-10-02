import { createStore } from 'redux';
const initialState = {
	usuario: {
		ok: false,
		token: null,
		uid: null,
		rol: null,
	},
};
const reducerUsuario = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_OK':
			console.log(action);
			return {
				...state,
				usuario: {
					ok: action.usuario.ok,
				},
			};
		case 'LOGOUT_OK':
			return {
				...state,
				usuario: {
					ok: false,
					token: null,
					uid: null,
					rol: null,
				},
			};
		default:
			return state;
	}
};

export default createStore(reducerUsuario);
