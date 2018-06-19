import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import imgplaceholder from "../../imgs/picture.svg";

import "./index.scss";

const propTypes = {
	heading: PropTypes.string,
};

const defaultProps = {
	bigimage: imgplaceholder,
	heading: "Lorem Ipsum: common examples",
	tableheading: "Your Orders",
	description: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments.",
	userdescription: "In a professional context it often happens"
};

const MenuDetail = props =>{
	return(
		<div>
			<div className="detailtexts">
				<h3>{props.heading}</h3>
				<p>{props.description}</p>
			</div>
			<form className="detailforms">
				<div>
					<label htmlFor="">Qty.</label>
					<input type="number" name="" id="" placeholder="Quantity"/>
				</div>
				<div>
					<label htmlFor="">Comments</label>
					<textarea type="text" name="" id="" placeholder="Any other comments/requests to add?" cols="20" rows="3"/>
				</div>
				<div>
					<p>Delivery Options</p>
					<input type="radio" name="delivery" id="homedelivery" value="Home Delivery"/>
					<label htmlFor="homedelivery" className="radiolabel">Home Delivery</label>
					<input type="radio" name="delivery" id="pickup" value="Pickup"/>
					<label htmlFor="pickup" className="radiolabel">Pickup</label>
				</div>
				<div>
					<p>Payment Options</p>
					<input type="radio" name="payop" id="pod" value="POD"/>
					<label htmlFor="pod" className="radiolabel">Pay on Delivery</label>
					<input type="radio" name="payop" id="webpay" value="Webpay"/>
					<label htmlFor="webpay" className="radiolabel">Webpay</label>
				</div>
				<button>Add to Cart</button>
			</form>
		</div>
	);
};

const UserDetail = props =>{
	return(
		<div>
			<div className="detailtexts">
				<h3>{props.heading}</h3>
				<p>{props.description}</p>
				<p>{props.description}</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

class DetailPage extends React.Component{
	state = {
		isUser: false
	};

	handleSwitch = _ =>{
		this.setState({ isUser: !this.state.isUser});
	}

	componentWillMount(){
		if(this.props.location.state.profile){
			this.handleSwitch();
		}
	}

	render(){
		console.log(this.props.location.state.profile);
		return(
			<div className="detailcontainer">
				<button onClick={this.handleSwitch}>Switch User / Menu</button>
				<div className="topsection">
					<div className="leftsection">
						<img 
							src={this.props.bigimage} 
							alt="bigimage"
							className="bigimage"
						/>
					</div>
					<div className="rightsection">
						{this.state.isUser ? <UserDetail heading={this.props.heading} description={this.props.userdescription}/> : < MenuDetail heading={this.props.heading} description={this.props.description}/>}
					</div>
				</div>
				{this.state.isUser ? "" : <div className="bottomsection">
					<h3>{this.props.tableheading}</h3>
					<table>
						<tbody>
							<tr>
								<td>Rice and Sauce</td>
								<td>1 pack with sides</td>
								<td>NGN 2500.00</td>
								<td>Webpay</td>
								<td>Home delivery</td>
								<td>edit</td>
								<td>delete</td>
							</tr>
							<tr>
								<td>Rice and Sauce</td>
								<td>1 pack with sides</td>
								<td>NGN 2500.00</td>
								<td>Webpay</td>
								<td>Home delivery</td>
								<td>edit</td>
								<td>delete</td>
							</tr>
							<tr>
								<td>Rice and Sauce</td>
								<td>1 pack with sides</td>
								<td>NGN 2500.00</td>
								<td>Webpay</td>
								<td>Home delivery</td>
								<td>edit</td>
								<td>delete</td>
							</tr>
							<tr>
								<td>Rice and Sauce</td>
								<td>1 pack with sides</td>
								<td>NGN 2500.00</td>
								<td>Webpay</td>
								<td>Home delivery</td>
								<td>edit</td>
								<td>delete</td>
							</tr>
						</tbody>
					</table>
					<div className="orderButton">
						<button>Order</button>
					</div>
				</div>}
			</div>
		);
	}
}


DetailPage.propTypes = propTypes;
DetailPage.defaultProps = defaultProps;


export default withRouter(DetailPage);