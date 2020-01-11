import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../asset/css/loader.css";
import "./Signup.css";

import axios from "axios";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      
      email: "",
      password: "",
      gender: "",
      password1:"",
      phone: "",
      bdate: "",
     
      address: "",
     
     
      info: "",
     
      isLoading: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
       this.handlePassword1 = this.handlePassword1.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
   
  }
  componentDidMount() {
    //document.getElementById('form').style.display = 'none'
    //document.getElementById('form').style.display = 'block'
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.password)
    if(this.state.password!==this.state.password1){
      this.setState({info:'password not match type same password'})
    }
    await this.setState({ isLoading: true });


    fetch("/api/v1/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
     
      })
    })
    
      .then(res => res.json())
      .then(res => {
        console.log(res);

        this.setState({ isLoading: false });
        this.setState({ info: res.message });
        if (res.message === "created") {
          this.props.history.push("/signin");
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }
  
  handleName(e) {
    this.setState({ name: e.target.value });
  }
 
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleGender(e) {
    this.setState({ gender: e.target.value });
  }
  
 

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handlePassword1(e) {
    this.setState({ password1: e.target.value });
  }

  
  render() {
    //     if(this.state.info===''){
    //         document.getElementById('info').style.display='none'
    //   }
    const noshowinfo = {
      display: "none"
    };
    const Sty = {
      marginTop: '500px',
      boxShadow: '1px 1px 20px black ',
      BTN:{
        width:'100%',
       
      }
      
    }
    

    return (
      <div>
        {/* <!--Form with header--> */}
        <div className="card mt-5" id="signup" style={Sty}>
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-4">
              <h3>
                <i className="fa fa-user-plus" /> Signup
              </h3>
            </div>

            {/* <!--Body--> */}
            

              <div className=" form-group input-group mt-4">
           
                <input
                  type="text"
                  required="required"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleName}
                  placeholder='Enter Your Name'
                />
              </div>

              


             

              <div className="form-group input-group">
                {/* <i className="fa fa-envelope prefix"></i> */}
            
                <input
                  type="email"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleEmail}
                placeholder='Enter Your Email'
                />
              </div>


              <div class="form-group input-group">
               
                <select
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.handleGender}
                placeholder='Enter Your Gender'
                >
                  <option>--Select Gender--</option>
                  <option>male</option>
                  <option>female</option>
                </select>
              </div>

    
           
           
              <div className="form-group">
                {/* <i class="fa fa-lock prefix"></i> */}
                <label for="form4">
                  <span className="fa fa-lock" /> Password
                </label>
                <input
                  type="password"
                  id="form4"
                  required="required"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handlePassword}
                placeholder='Enter Your Password'
                />
              </div>
            <div className="form-group">
              {/* <i class="fa fa-lock prefix"></i> */}
              <label for="form4">
                <span className="fa fa-lock" /> Confirm  Password
                </label>
              <input
                type="password"
                id="form4"
                required="required"
                className="form-control"
                value={this.state.password1}
                onChange={this.handlePassword1}
                placeholder='confirm password'
              />
            </div>
          

            {this.state.info === "" || this.state.info === undefined ? (
              <div className="alert alert-danger" style={noshowinfo} id="info">
                ){this.state.info}
              </div>
            ) : (
              <div className="alert alert-danger" id="info">
                {this.state.info}
              </div>
            )}

            <div className="text-center">
              <button
               style={Sty.BTN}
                className="btn primary-btn text-uppercase"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              >
                &nbsp;Sign up
                <div style={{ margin: "auto", color: "white" }}>
                  {this.state.isLoading === true ? (
                    <div id="signuploading"></div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </button>
            </div>
            <p className="pt-3 text-right">
              {" "}
              Aready a Customer
              <Link to="/signin"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
