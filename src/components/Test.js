import React, { Component } from 'react';
import fire from '../config/Fire'
import HospitalFinderMap from './HospitalFinderMap'

class Test extends Component{
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	  

	logout(){
	  	fire.auth().signOut();
	}


	render(){
	return(
		<div class="nav-bar">
			
			<button onClick={this.logout} class="btn btn-primary">logout</button>
			
		</div>

		);
	}
}

export default Test