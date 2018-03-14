import React, {Component} from "react";
//import toggle from "../../imgs/toggle.svg";

const prodArray = [{"id":1,"wknumber":3,"day":"Monday","date":"2018-02-20","name":"Short-man Burger","price":1200.0},
	{"id":2,"wknumber":3,"day":"Tuesday","date":"2018-02-20","name":"Medium-Burger","price":1500.0},
	{"id":3,"wknumber":3,"day":"Wednesday","date":"2018-02-20","name":"Pizzaria","price":800.0},
	{"id":4,"wknumber":3,"day":"Thursday","date":"2018-02-20","name":"Thursday-Delight-Double","price":2500.0},
	{"id":5,"wknumber":3,"day":"Friday","date":"2018-02-20","name":"Thanks-to-the-chef-friday","price":2000.0},
	{"id":6,"wknumber":3,"day":"Saturday","date":"2018-02-20","name":"Saturday-Combo","price":1500.0},
	{"id":7,"wknumber":3,"day":"Sunday","date":"2018-02-20","name":"Sunday Fruity","price":1000.0}];



class Menu extends Component {
	constructor(props){
		super(props);
		this.state={
			Monday : false,
			Tuesday:false,
			Wednesday:false,
			Thursday:false,
			Friday:false,
			Saturday:false,
			Sunday:false,
		};
	}

	handleClick = (e, index)=>{
		const initialState = {
			Monday : false,
			Tuesday:false,
			Wednesday:false,
			Thursday:false,
			Friday:false,
			Saturday:false,
			Sunday:false,
		};
		if(index==="Monday"){
			this.setState(initialState);
			this.setState({Monday:!this.state.Monday});
		}else if(index==="Tuesday"){
			this.setState( initialState);
			this.setState({Tuesday:!this.state.Tuesday});
		}else if (index==="Wednesday"){
			this.setState(initialState);
			this.setState({Wednesday:!this.state.Wednesday});
		}else if (index==="Thursday"){
			this.setState(initialState);
			this.setState({Thursday:!this.state.Thursday});
		}else if (index==="Friday"){
			this.setState(initialState);
			this.setState({Friday:!this.state.Friday});
		}else if (index==="Saturday"){
			this.setState(initialState);
			this.setState({Saturday:!this.state.Saturday});
		}else if (index==="Sunday"){
			this.setState(initialState);
			this.setState({Sunday:!this.state.Sunday});
		} else{
			alert("Wow!");
		}
	};

	DailyArray = (props)=>{
		return(
			props.arr.map((menu)=>{ return(
				<div  className={this.state.menuToggle===false? "hide":""} key={menu.day}>
					<table key={menu.day}>
						<tbody>
							<tr >
								<td>{menu.name}</td><td>{`NGN ${menu.price}`}</td>
							</tr>
						</tbody>
					</table>
				</div>
			);})
		);
	}

	render(){
		return(
			<div >
				<h2>{`Menu for week ${prodArray[0].wknumber}`}</h2>
				<div  onClick={(e)=>this.handleClick(e, prodArray[0].day)} className="table-head">
					{prodArray[0].day}
				</div>
				<div>{this.state.Monday===true?<this.DailyArray arr={prodArray}/>:""}</div>

				<div  onClick={(e)=>this.handleClick(e, prodArray[1].day)} className="table-head">
					{prodArray[1].day}
				</div>
				<div>{this.state.Tuesday===true?<this.DailyArray arr={prodArray}/>:""}</div>

				<div  onClick={(e)=>this.handleClick(e, prodArray[2].day)} className="table-head">
					{prodArray[2].day}
				</div>
				<div>{this.state.Wednesday===true?<this.DailyArray arr={prodArray}/>:""}</div>

				<div  onClick={(e)=>this.handleClick(e, prodArray[3].day)} className="table-head">
					{prodArray[3].day}
				</div>
				<div>{this.state.Thursday===true?<this.DailyArray arr={prodArray}/>:""}</div>

				<div  onClick={(e)=>this.handleClick(e, prodArray[4].day)} className="table-head">
					{prodArray[4].day}
				</div>
				<div>{this.state.Friday===true?<this.DailyArray arr={prodArray}/>:""}</div>

				<div  onClick={(e)=>this.handleClick(e, prodArray[5].day)} className="table-head">
					{prodArray[5].day}
				</div>
				<div>{this.state.Saturday===true?<this.DailyArray arr={prodArray}/>:""}</div>

				<div  onClick={(e)=>this.handleClick(e, prodArray[6].day)} className="table-head">
					{prodArray[6].day}
				</div>
				<div>{this.state.Sunday===true?<this.DailyArray arr={prodArray}/>:""}</div>
			</div>	
		);
	}
}

	

export default Menu;