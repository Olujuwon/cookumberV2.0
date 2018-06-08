import React from "react";
import OrderCard from "../Muicard/Card";
import Info from "../Info/Info";
import Title from "../Title/Title";
import sales from "../../imgs/percentage.svg";

import "./index.scss";

const MainLayout = props => {
	return(
		<div className="maincontainer">
			<Title icon={sales} title="Breakfast menu of the day "/>
			<div className="containerDiv">
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
			</div>
			<Title icon={sales} title="Lunch menu of the day "/>
			<div className="containerDiv">
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
			</div>
			<Info />
		</div>
	);

};


export default MainLayout;