import axios from "axios";

const url = " http://localhost:8000/menu/";
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


