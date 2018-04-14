import React from "react";

import {connect} from "react-redux";
//import isEqual from "lodash/isEqual";
//import filter from "lodash/find";
//import matches from "lodash/matchesProperty";

import {formSelector} from "../../redux/selectors";

let cartObjects = JSON.parse(localStorage.getItem("Cart-Items"));

class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			click: false,
			datamonitor: 0
		};
	}
    
dataStore = (data)=>{
	localStorage.setItem("Cart-Items", JSON.stringify(data));
}

handleReset = ()=>{
	localStorage.clear();
	this.dataStore([]);
}

componentWillMount(){
	if (cartObjects === null){
		this.dataStore([]);
	}
}

CartIsEmpty = (props)=> {
	const emptyMessage = props.emptyMessage;
	return(
		<div>
			<h5>{props.name}</h5> <p>{`${emptyMessage}`}</p>
		</div>
	);
}

NormalDisplay = (props)=> {
	return(
		<div>
			<h5>{props.name}</h5> <p>{cartObjects.length}</p>
		</div>
	);
}

TouchedDisplay = (props)=> {
	return(
		<div>
			<h5>{props.name}</h5> <p>{cartObjects.length}</p>
			<table>
				<tbody>
					<tr>"Eba and Efo riro"</tr>
					<tr>"23-04-2018"</tr>
					<tr>"1500"</tr>
				</tbody>
			</table>
			<input type="button" value="SEND" />
			<input type="button" value="RESET" onClick = {this.handleReset}/>
			{/*cartObjects.map((item, i ) => {
                return(
                    <table>
                        <tr>item.date</tr>
                        <tr>item.name</tr>
                        <tr>item.price</tr>
                    </table>
                    <input type="button" value="SEND" />
			        <input type="button" value="RESET" onClick = {this.handleReset}/>
                );
            })*/}
		</div>
	);
}

render(){
	//const formObject = this.props.form.weekmenu.values;
	//const uniqueFormObjectCheck = filter(cartObjects, matches(formObject));
	if(this.state.datamonitor === 0){
		return <this.CartIsEmpty name="Menu" emptyMessage="Cart is Empty"/>;
	} else {
		this.dataStore(this.props.form.weekmenu.values);
		return(
			<div onClick = {()=>this.setState({click: !this.state.click})}>
				{this.state.click === false ? <this.NormalDisplay name="Menu" /> : <this.TouchedDisplay name="MenuTouch" />}
			</div>
		);
	}
}
}

const mapStateToProps = (state)=>{
	return {
		form: formSelector(state),
	};
};

export default connect(mapStateToProps, null)(Cart);