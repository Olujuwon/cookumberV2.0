import React from "react";

import {connect} from "react-redux";
//import isEqual from "lodash/isEqual";
//import filter from "lodash/find";
//import matches from "lodash/matchesProperty";

import {formSelector} from "../../redux/selectors";


class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			click: false,
			datamonitor: 0
		};
	}

handleReset = ()=>{
	localStorage.clear();
	this.dataStore([]);
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
			<h5>{props.name}</h5> <p>{this.props.count}</p>
		</div>
	);
}

TouchedDisplay = (props)=> {
	return(
		<div>
			<h5>{props.name}</h5> <p>{this.props.count}</p>
			{props.arrItems.map((item, i ) => {
				const itemKeys = Object.values(item);
				return(
					<table key={i}>
						{itemKeys.map((value,index) => {return <tbody key={index}>
							<tr>{value}</tr></tbody> ;})}
					</table>
				);
			})}
			<input type="button" value="SEND" />
			<input type="button" value="RESET" onClick = {this.handleReset}/>
		</div>
	);
}

render(){
	if(this.props.count === 0){
		return <this.CartIsEmpty name="Menu" emptyMessage="Cart is Empty"/>;
	} else {
		console.log(this.props.modalcontent);
		return(
			<div onClick = {()=>this.setState({click: !this.state.click})}>
				{this.state.click === false ? <this.NormalDisplay name="Menu" /> 
					: <this.TouchedDisplay name="MenuTouch" arrItems={this.props.modalcontent} />}
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