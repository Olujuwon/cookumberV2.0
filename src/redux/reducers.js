import {combineReducers} from "redux";

const arithMeth = (state=0, action) => {
	switch (action.type) {
	case "INCREMENT-BY-ONE":
		return state +1;
	case "DECREMENT-BY-ONE":
		return state -1;
	default:
		return state;
	}
};
  
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


const appReducers = combineReducers({total: arithMeth, user: createUser});

export default appReducers;