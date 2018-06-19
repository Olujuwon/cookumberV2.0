import {combineReducers} from "redux";

  
const createUser = (state = {}, action) => {
	switch (action.type) {
	case "CREATE-USER-FROM-FIREBASE-RESPONSE":
		return action.payload;
	case "LOGOUT-USER":
		return {};
	default:
		return state;
	}
};


const appReducers = combineReducers({user: createUser});

export default appReducers;