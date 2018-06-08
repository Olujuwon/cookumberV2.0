import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const propTypes = {
	textarea: PropTypes.node,
	type:PropTypes.string,
	classname:PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
};

const defaultProps = {
	label: "Input Label",
};

const TextArea = props =>{
	return(
		<div className="inputContainer">
			<label htmlFor={props.name}>
				{props.label}
			</label>
			<textarea 
				name={props.name} 
				className={props.classname} 
				cols={props.cols}
				rows={props.rows}
				value={props.value}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

const InputForm = props => {
	return(
        <div className="inputContainer">
			<label htmlFor={props.name}>
			    {props.label}
			</label>
		<input 
			type={props.type}
			className={props.classname}
			value={props.value}
			name ={props.name}
			placeholder={props.placeholder}
		/>
	);
};

class FormInput extends React.Component{
	constructor(props){
		super (props);
		this.state={
			value: ""
		};
	}

handleChange = (event)=>{
	this.setState({value: event.target.value});
}

render(){
	return(
		<div className="inputContainer">
			{this.props.textarea ? <TextArea 
				name={this.props.name}
				classname={this.props.classname}
				cols={this.props.cols}
				rows={this.props.rows}
				value={this.state.value}
				onChange={this.handleChange}
				placeholder={this.props.placeholder}
			/> : <InputForm 
				type={this.props.type}
				className={this.props.classname}
				value={this.state.value}
				name ={this.props.name}
				onChange={this.handleChange}
				placeholder={this.props.placeholder}
			/>}
		</div>
	);
}
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;