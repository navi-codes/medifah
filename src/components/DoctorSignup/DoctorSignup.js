import React,{ Component } from 'react'
import fire from '../../config/Fire';





class DoctorSignup extends Component{

	constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
    	hospital:'',
    	doctor:'',
      	email: '',
      	password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }




  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
    }).then((u) =>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }




	render(){

		return(
			<div>

				<div className="container">
					<form>
						<div class="form-group">
            <label><strong>Doctor's Sign up</strong></label>

						<input value={this.state.hospitalName} onChange={this.handleChange} type="text" name="hospitalName" class="form-control" id="exampleInputHospitalName" aria-describedby="emailHelp" placeholder="Hospital name" />

						</div>
						<div class="form-group">

						<input value={this.state.DoctorName} onChange={this.handleChange} type="text" name="DoctorName" class="form-control" id="exampleInputDoctorName" placeholder="Doctor name" />
						</div>

						<div class="form-group">

						<input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

						</div>
						<div class="form-group">

						<input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
						</div>

						<div class="form-group">

						<input value={this.state.location} onChange={this.handleChange} type="text" name="location" class="form-control" id="exampleInputLocation" placeholder="Location" />
						</div>

						<div class="form-group">

						<input value={this.state.certificate} onChange={this.handleChange} type="file" name="certificate" class="form-control" id="exampleInputCertificate" placeholder="Certificate" />
						</div>

						<button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
					</form>

				</div>

			</div>

		)
	}





}

export default DoctorSignup
