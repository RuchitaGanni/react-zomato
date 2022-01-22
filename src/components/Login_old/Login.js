import React, { Component, Fragment } from 'react';

import './login.css'
const loginUrl="http://localhost:5000/api/auth/login"
class Login extends Component {
    constructor(props){
        super(props)

        this.state={
           
            email:'',
            message:'',
            password:''

        }
        console.log(this.state)
    }
    handleSubmit = () => {
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })

        .then((res) => res.json())
        .then((data) => {
            if(data.auth ===  false){
                this.setState({message:data.token});
            }else{
                localStorage.setItem('ltk',data.token)
                
                this.props.history.push('/')
            }
        })
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>Login</h1>

                    {/* <form action="#" method="POST"> */}
                    <div class="row">

                        <div class="col-md-5">
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="text" name="email" id="email" class="form-control" value={this.state.email} onChange={this.handleChange} required />

                            </div>
                        </div>
                    </div>
                    <div class="row">


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


                    <button class="btn btn-success" onClick={this.handleSubmit} >Submit</button>
                    {/* <button type="submit" class="btn btn-danger" >Login</button> */}
                   

                    {/* </form> */}
                </div >

            </Fragment >
        )

    }
}
export default Login;