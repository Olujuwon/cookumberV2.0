import React, {Fragment} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Header from "../Header/index";
import Footer from "../Footer/index";
import HomePage from "../Home/index";
import AboutPage from "../About/index";
import ServicesPage from "../Services/Services";
import ContactPage from "../Contact/Contact";
import UsersPage from "../Clients/index";
import Test from "../Containers/test";

const MainLayout = ({match}) => {
	return(
		<Fragment>
			<Header/>
			<Switch>
				<Route path = {`${match.url}/about`} component={AboutPage}/>
				<Route path = {`${match.url}/services`} component={ServicesPage}/>
				<Route path ={`${match.url}/users`}component={UsersPage}/>
				<Route path = {`${match.url}/contact`} component={ContactPage}/>
				<Route path = {`${match.url}/home`} component={HomePage}/>
				<Route path = {`${match.url}/test`} component={Test}/>
				<Redirect from = {match.url} to={`${match.url}/home`}/>
			</Switch>
			<Footer/>
		</Fragment>
		
	);

};


export default MainLayout;