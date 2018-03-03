import React, { Component } from "react";
import "../Scss/slider.scss";
import images from "./slider";
import left from "../../imgs/left-arrow.svg";
import right from "../../imgs/right-arrow.svg";



class ImageSlider extends Component {
	constructor(){
		super();
		this.state={
			image: 0,
			imgarrlen:images.length -1
		};
	}
incremeMent = ()=>{
	let img = this.state.image +1;
	this.setState({image: img});
}
decremeMent = ()=>{
	let img = this.state.image -1;
	this.setState({image: img});
}
render(){
	return (
		<div className="slider">
			<div className='arrows'>
				<span className="slider-arrow"><img src={left} alt="left" onClick={(e)=>{this.decremeMent(e);}} 
					className={(this.state.image===0)?"disabled":"active"}/></span>
				<span className="slider-arrow"><img src={right} alt="left" onClick={(e)=>{this.incremeMent(e);}}
					className={(this.state.image===this.state.imgarrlen)?"disabled":"active"}/></span>
			</div>
			{<img src={images[this.state.image]} alt="stock" />}
		</div>
	);
}
}

export default ImageSlider;