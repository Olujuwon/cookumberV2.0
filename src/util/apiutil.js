import * as firebase from "firebase";
import axios from "axios";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBCCd1OIxkOTgRY0rhf-9go6Xs3FPGbR9Q",
	authDomain: "cookumber-b82fb.firebaseapp.com",
	databaseURL: "https://cookumber-b82fb.firebaseio.com",
	projectId: "cookumber-b82fb",
	storageBucket: "cookumber-b82fb.appspot.com",
	messagingSenderId: "761805107180"
};
firebase.initializeApp(firebaseConfig);


export const signUp = async (object) => {
	try{
		//check if email exists before passing to firebase, send the rest data to database 
		const response = await firebase.auth().createUserWithEmailAndPassword(object.email, object.password);

		await firebase.auth().currentUser.sendEmailVerification()
			.then(function() {
				console.log("Email sent");
			});

		await firebase.auth().currentUser.updateProfile({
			displayName: object.firstname,
			phoneNumber: object.phone,
		}).then(function() {
			console.log("User update successful");
		});
		return response;
	}catch(error){
		console.error(error);
	}
};

export const signIn = async (email, password) => {
	try{
		const user = await firebase.auth().signInWithEmailAndPassword(email.trim() , password)
			.then(response => response.user);
		return user;
	}catch(error){
		return{error: error};
	}
};

export const resetCredentials = () => {
      
};

export const postData = async (dataToPost, title) => {
	const url = `https://cookumber-b82fb.firebaseio.com/${title}.json`;
	const data = {
		method: "POST", 
		body: JSON.stringify(dataToPost), 
	};
	try{
		await fetch(url , data)
			.then(response => console.log(response));
	}catch(error){
		console.error(error);
	}
};

export const getData = async (url)=>{
	try{
		const data = await axios.get(url)
			.then(response=>response.data);
		return data;
	}catch(error){
		return {
			error: error
		};
	}
};
