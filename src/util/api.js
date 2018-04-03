import axios from "axios";

const url = " https://cookumber-b82fb.firebaseio.com/.json";
const header = {"Access-Control-Allow-Origin": "*"};

const getApi = (url, headers) => axios.get(url, header);

export const fetchData = async ()=>{
	try{
		const menuData = await getApi(url, header);
		return menuData.data;
	} catch(err){
		return err.status;
	}
};


