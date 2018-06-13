import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const propTypes = {
	textarea: PropTypes.node,
	type:PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	cols: PropTypes.number,
	rows: PropTypes.number,
	onChange:PropTypes.func,

};

const defaultProps = {
	label: "Label",
	placeholder: "Placeholder ",
};

export class FormInput extends React.Component{
	constructor(props){
		super (props);
		this.state={
			value: ""
		};
	}

	render(){
		console.log(this.props.isValid);
		return(
			<div className="inputContainer">
				<label htmlFor={this.props.name}>
					{this.props.label}
				</label>
				<input 
					type={this.props.type}
					className="inputForm"
					value={this.props.value}
					name ={this.props.name}
					placeholder={this.props.placeholder}
					onChange={this.props.onChange}
					autoComplete="off"
					autoCapitalize="none"
					onBlur = {this.props.onBlur}
				/>
			</div>
		);
	}
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export class TextArea extends React.Component{
	constructor(props){
		super (props);
		this.state={
			value: "",
		};
	}

	render(){
		return(
			<div className="inputContainer">
				<label htmlFor={this.props.name}>
					{this.props.label}
				</label>
				<textarea 
					name={this.props.name} 
					className="textArea"
					cols={this.props.cols}
					rows={this.props.rows}
					value={this.props.value}
					onChange={this.props.onChange}
					placeholder={this.props.placeholder}
					autoComplete="off"
					autoCapitalize="none"
					onFocus = {this.props.onFocus}
				/>
			</div>
		);
	}
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;
