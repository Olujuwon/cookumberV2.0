import React from "react";
import OrderCard from "../Muicard/Card";
import Info from "../Info/Info";
import Title from "../Title/Title";
import sales from "../../imgs/percentage.svg";

import "./index.scss";

const MainLayout = props => {
	return(
		<div className="maincontainer">
			<div className="uppersection">
				<Title icon={sales} title="Breakfast menu of the day "/>
				<div className="containerDiv">
					<OrderCard />
					<OrderCard />
				</div>
			</div>
			<Info />
		</div>
	);

};


export default MainLayout;