import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'
const registerUrl="http://localhost:5000/api/auth/register"
class Signup extends Component {
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            email:'xxx@gmail.com',
            message:'',
            mobile:''

        }
        console.log(this.state)
    }
    handleSubmit = () => {
        fetch(registerUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })

        .then(this.props.history.push('/Login'))
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <Fragment>

                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    {/* <form action="#" method="POST"> */}
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label>User Name</label>
                                    <input type="text" name="username" id="username" class="form-control" value={this.state.username} onChange={this.handleChange} required/>
                                   
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label>E-mail</label>
                                    <input type="text" name="email" id="email" class="form-control" value={this.state.email} onChange={this.handleChange} required/>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-5">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="tel" name="mobile" id="mobile" class="form-control" pattern="[0-9]{10}" value={this.state.mobile} onChange={this.handleChange} required/>
                                   
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="Password" name="password" id="password" class="form-control" value={this.state.password} onChange={this.handleChange} required />
                                   
                                </div>
                            </div>
                            <div class="col-md-1">
                                <span class="glyphicon glyphicon-eye-open" onclick="show(1);"></span>
                            </div>
                        </div>


                        <button  class="btn btn-success" onClick={this.handleSubmit} >Submit</button>
                        <button  class="btn btn-danger" ><Link to="/Login" style={{textDecoration:"none"}}> Login</Link></button>


                    {/* </form> */}
                </div >



            </Fragment >
        )

    }
}
export default Signup;