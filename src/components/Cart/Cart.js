import React from "react";

import { withRouter } from "react-router-dom";

import "../Scss/cart.scss";
import {postData} from "../../util/api";

class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			click: false,
			datamonitor: 0
		};
	}

handleEdit = (index)=>{
	console.log("Edit Button",index);
}

handleSubmit = (arrayOfObjects)=>{
	arrayOfObjects.map(obj => {
		const postIt = postData(obj)
			.then(res => {
				return {response: res};
			})
			.catch(err => {
				return {Error: err};
			});
		return postIt;	
	});
	this.props.history.push("/ck/home");
}
CartIsEmpty = (props)=> {
	const emptyMessage = props.emptyMessage;
	return(
		<div className = "cartContainer">
			<img src={props.icon} alt="" className="cartImage"/>
			<h3 className="cartHeader">{props.name}</h3> 
			<p className="cartText">{`${emptyMessage}`}</p>
		</div>
	);
}

NormalDisplay = (props)=> {
	return(
		<div className = "cartContainer">
			<img src={props.icon} alt="" className="cartImageOne" 
				onClick = {()=>this.setState({click: !this.state.click})}/>
			<h3 className="cartHeader">{props.name}</h3> 
			<p className="cartText">{this.props.count}</p>
		</div>
	);
}

dateFormat = (date)=>{
	console.log(date);
	let formatedDate = date.split(" ");
	let displayDate = `${formatedDate[0]} ${formatedDate[1]} 
										${formatedDate[2]}, ${formatedDate[3]}`;
	return displayDate;
}

TouchedDisplay = (props)=> {
	return(
		<div className = "modal">
			<span className="close" onClick = {()=>this.setState({click: !this.state.click})}>
				&times;</span>
			<div className="modal-content">
				{props.arrItems.map((item, i ) => {
					const itemKeys = Object.values(item);
					return(
						<div key={i} className = "cartList">
							<table key={i} >
								{console.log(itemKeys)}
								<tbody key={i} className="cartListTable">
									<tr className="trOne">{this.dateFormat(itemKeys[0])}</tr>
									<tr className="trTwo">{itemKeys[1]}</tr>
									<tr className="trThree">{itemKeys[2]}</tr>
									<tr className="trFour">{itemKeys[3]}</tr>
									<tr className="trFive">{itemKeys[4]}</tr>
								</tbody>
							</table>
							<button type="button"  className="cartEditButton" 
								onClick={()=>{this.handleEdit(item);}}>Edit</button>
							<button type="button" className="cartEditButton">Delete</button>
						</div>
					);
				})}
				<button type="button" className = "submitButton" 
					onClick={()=>{this.handleSubmit(props.arrItems);}}>Submit</button>
			</div>
			
		</div>
	);
}

render(){
	if(this.props.count === 0){
		return <this.CartIsEmpty name="" emptyMessage="Cart is Empty" icon={this.props.icon}/>;
	} else {
		console.log(this.props.modalcontent);
		return(
			<div className = "cartContainerOuter">
				{this.state.click === false ? <this.NormalDisplay name="" icon={this.props.icon}/> 
					: <this.TouchedDisplay name="" arrItems={this.props.modalcontent} 
						icon={this.props.icon}/>}
			</div>
		);
	}
}
}


export default withRouter(Cart);