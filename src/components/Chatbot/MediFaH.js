import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Test from '../Test';

class MediFaH extends Component{
	constructor(props){
		super(props);
		this.state = {
			showComponent: false
		};
	}

	_onButtonClick = () => {
		this.setState({
			showComponent: true
		});
	}

	render(){
		return(
			<div>
				<iframe
				allow="microphone;"
				width="350"
				height="430"
				src="https://console.dialogflow.com/api-client/demo/embedded/01af6849-4943-47d5-ab33-590409e9e39f">
				</iframe>
			</div>
		);
	}
}

export default MediFaH;
