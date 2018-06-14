export const createUser = payload =>{
	return{
		type: "CREATE-USER-FROM-FIREBASE-RESPONSE",
		payload: payload
	};
};

export const logOut = _ =>{
	return{
		type: "LOGOUT-USER",
	};
};