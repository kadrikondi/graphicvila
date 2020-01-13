import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {getSingleUser} from '../../apidata/api'
import "../Signup/Signup.css"
import axios from 'axios'
import Customerheader from './customerheader';
import Leftsidebar from '../SidesBars/Leftsidebar';


export default class updateProfile extends Component {
                 constructor() {
                   super();
                   this.state = {
                     name: "",

                     email: "",
                     gender: "",
                     phone: "",
                     photo: "",
                     address: "",

                     info: "",

                     isLoading: false,
                     photo: ""
                   };

                   this.handleEmail = this.handleEmail.bind(this);
                   this.handleGender = this.handleGender.bind(this);
                   this.handleFirstName = this.handleFirstName.bind(this);

                   this.handlePhone = this.handlePhone.bind(this);

                   this.handleAddress = this.handleAddress.bind(this);
                   this.handleFile = this.handleFile.bind(this);
                 }
                 async componentDidMount() {
                   const user = await getSingleUser(this.props.match.params.id);
                   console.log("user " + user);
                   this.setState({
                     name: user.info.name,
                     phone: user.info.phone,
                      photo: user.info.photo,
                     address: user.info.address,
                     email: user.info.email,
                     gender: user.info.gender
                   });
                   console.log(user);
                 }
                 handleFirstName(e) {
                   this.setState({ name: e.target.value });
                 }
                 handleEmail(e) {
                   this.setState({ email: e.target.value });
                 }
                 handleGender(e) {
                   this.setState({ gender: e.target.value });
                 }

                 handleAddress(e) {
                   this.setState({ address: e.target.value });
                 }

                 handlePhone(e) {
                   this.setState({ phone: e.target.value });
                 }
                 handleFile(e) {
                   this.setState({ photo: e.target.files[0] });
                   // console.log(e.target.value + '  oooo')
                 }
                 async updateProfile(e) {
                   e.preventDefault();
                   this.setState({ isLoading: true });
                   let id = await window.localStorage.getItem("userId");
                   const formdata = new FormData();
                   formdata.append("photo", this.state.photo);
                   formdata.append("name", this.state.name);
                   formdata.append("email", this.state.email);
                   formdata.append("phone", this.state.phone);
                   formdata.append("address", this.state.address);
                   formdata.append("gender", this.state.gender);

                   axios
                     .put(`/api/v1/user/update/${id}`, formdata)
                     // .then( res => { console.log(res)})
                     // .catch(err => console.log(err.message))

                     .then(res => {
                       this.setState({ isLoading: false });
                       console.log(res);
                        let _id =  window.localStorage.getItem("userId");
                       if(res.status===200){
                       alert(res.data.message);

                       console.log(res);
                       this.props.history.push(`/profile/${_id}`)
                       }
                     })
                     .catch(err => {
                       this.setState({ isLoading: false });
                       console.log(err.message);
                       //this.setState({error: true})
                     });
                 }

                
                 //  handleChange(e) {
                 //    e.preventDefault();
                 //    this.updateProfile(this.props.match.params.id);
                 //  }

                 render() {
                   return (
                     <div>
                       <Customerheader />
                       <div className="container">
                         <div className="row">
                           <div className="col-lg-3 col-md-4 col-sm-4">
                             {" "}
                           <Leftsidebar/>
                           </div>
                           <div className="col-lg-9 col-md-8 col-sm-12">
                             <div className="card mt-" id="signup">
                               <div className="card-body">
                                 {/* <!--Header--> */}
                                 <div className="card-header black-text text-center py-4">
                                   <h3>
                                     <i className="fa fa-user-plus" /> Update
                                     Profile
                                   </h3>
                                 </div>

                                 {/* <!--Body--> */}
                                 <fieldset>
                                   <legend>Upload Profile pic</legend>
                                   <img
                                     src={this.state.photo}
                                     alt=""
                                     className="img-fluid"
                                     style={{ width: "50%", height: "200px" }}
                                   />
                                   <div className="form-group">
                                     <p>select new photo</p>

                                     <input
                                       type="file"
                                       name="photo"
                                       className="form-control"
                                       onChange={this.handleFile}
                                     />
                                   </div>
                                 </fieldset>
                                 <fieldset>
                                   <legend>Personal Information</legend>

                                   <div className=" form-group input-group mt-4">
                                     <label htmlFor="fname">
                                       First Name: &nbsp;
                                     </label>
                                     <input
                                       type="text"
                                       required="required"
                                       className="form-control"
                                       value={this.state.name}
                                       onChange={this.handleFirstName}
                                     />
                                   </div>

                                   <div className=" input-group form-group ">
                                     {/* <i className="fa fa-envelope prefix"></i> */}
                                     <label htmlFor="">Gender:</label>{" "}
                                     <input
                                       type="text"
                                       id="form2"
                                       required="required"
                                       className="form-control"
                                       value={this.state.gender}
                                       onChange={this.handleLastName}
                                     />
                                   </div>

                                   <div className="  form-group  input-group">
                                     {/* <i className="fa fa-envelope prefix"></i> */}
                                     <label htmlFor="">Phone No:</label>{" "}
                                     <input
                                       type="text"
                                       id="form2"
                                       required="required"
                                       className="form-control"
                                       value={this.state.phone}
                                       onChange={this.handlePhone}
                                     />
                                   </div>

                                   <div className="form-group input-group">
                                     {/* <i className="fa fa-envelope prefix"></i> */}
                                     <label htmlFor="">Email: &nbsp;</label>{" "}
                                     <input
                                       type="email"
                                       id="form2"
                                       required="required"
                                       className="form-control"
                                       value={this.state.email}
                                       onChange={this.handleEmail}
                                     />
                                   </div>
                                 </fieldset>
                                 <fieldset>
                                   <legend>Contact Information</legend>

                                   <div className="form-group input-group mt-3 ">
                                     {/* <i className="fa fa-envelope prefix"></i> */}
                                     <label htmlFor="">Address:</label>{" "}
                                     <textarea
                                       type="textarea"
                                       id="form2"
                                       className="form-control"
                                       value={this.state.address}
                                       onChange={this.handleAddress}
                                     />
                                   </div>
                                 </fieldset>

                                 <div className="text-center">
                                   <button
                                     className="btn site-btn btn-primary mdi-account-plus"
                                     type="submit"
                                     onClick={this.updateProfile.bind(this)}
                                   >
                                     &nbsp;Update
                                     <div
                                       style={{
                                         margin: "auto",
                                         color: "white"
                                       }}
                                     >
                                       {this.state.isLoading ? (
                                         <div id="signuploading"></div>
                                       ) : (
                                         <div></div>
                                       )}
                                     </div>
                                   </button>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
