import React from "react";

import ImageSlider from "../Imageslider/index";
import DashBoard from "../Dashboard/Dashboard";
import HomeNav from "../Navhome/nav";

import "../Scss/home.scss";


const HomePage = ()=>{
	return(
		<div className="home-container">
			<ImageSlider/>
			<DashBoard/>
			<HomeNav/>
		</div>
	);
};

export default HomePage;