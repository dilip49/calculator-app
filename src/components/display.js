import React, { Component } from 'react';
import ButtonsPanel from './buttonsPanel';
import calculation from '../calculations/calculations';
import './display.css';

class Display extends Component {
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.changeDisplay = this.changeDisplay.bind(this);
	}

	changeDisplay(newValue){	
		if(/[0-9]/.test(newValue)) {
			this.setState({value: this.state.value.concat(newValue)})
		} else if (newValue === null) {
			this.setState({value: ''});
		} else {
			this.setState(calculation(newValue, this.state.value));
		}
	}

	render() {
		return (
			<div className='app-container'>
				<div className='container'>
					<div className='screen'>
						<h1 id='input'>{this.state.value}</h1>
					</div>

					<div className='row'>
						<ButtonsPanel onClick={this.changeDisplay} />
					</div>
				</div>
			</div>
		);
	}
}

export default Display;