import axios from "axios";

const urlGet = " https://cookumber-b82fb.firebaseio.com/.json";
const urlPost = " https://cookumber-b82fb.firebaseio.com/.json";
const header = {"Access-Control-Allow-Origin": "*"};

const getApi = (url, headers) => axios.get(urlGet);
const postApi = (url) => axios.get(urlPost);

export const fetchData = async ()=>{
	try{
		const menuData = await getApi(urlGet, header);
		return menuData.data;
	} catch(err){
		return err.status;
	}
};

export const postData = async ()=>{
	try{
		const menuData = await postApi(urlPost, header);
		return menuData.data;
	} catch(err){
		return err.status;
	}
};

