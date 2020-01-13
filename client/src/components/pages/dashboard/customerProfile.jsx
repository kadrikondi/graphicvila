import React, { Component } from 'react'
import Customerheader from './customerheader';

import {Link} from 'react-router-dom'
import {userProfile} from '../../apidata/api'
import LeftSidebar from '../SidesBars/Leftsidebar'
import axios from 'axios'
export class customerProfile extends Component {
  constructor(){
    super()
    this.state = {
      user:"",
      name:"",
      email:"",
      gender:"",
      photo:"",
      phone:"",
      address:"",
      graphics:[]
    }
    this.handleDeleteGraphic= this.handleDeleteGraphic.bind(this)
  }
  async componentWillMount(){
    const id = await localStorage.getItem("userId")
   
    const user = await userProfile(id)
    console.log(user)
   if(user){
     this.setState({name:user.name, email:user.email, photo:user.photo, phone:user.phone, address:user.address,gender:user.gender, graphics:user.graphics, _id:user._id})
   }
  }
  async componentWillUpdate(){
//  const id = await localStorage.getItem("userId");

//  const user = await userProfile(id);
//  console.log(user);
//  if (user) {
//    this.setState({
//      name: user.name,
//      email: user.email,
//      photo: user.photo,
//      phone: user.phone,
//      address: user.address,
//      gender: user.gender,
//      graphics: user.graphics,
//      _id: user._id
//    });
//  }
  }
   async handleDeleteGraphic(_id,e){
     e.preventDefault()
     console.log(_id)
                   axios.delete(`/api/v1/graphic/delete/${_id}`)
                    .then( res => { console.log(res)})
                    .catch(err=>console.log(err))
                    

                 }
  render() {
    const {name, email, photo, address, phone,gender,graphics, _id}= this.state
    return (
      <div>
        <Customerheader />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
              <LeftSidebar />
            </div>

            <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
              <div className="card mt-3 ">
                {/* <!-- Card image --> */}
                <div className="view overlay" style={{ height: "40%" }}>
                  <img
                    className="card-img-top circle "
                    src={photo}
                    style={{ height: "400px" }}
                    alt="user profile photo"
                  />
                  <a href="">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                {/* <!-- Card content --> */}
                <div className="card-body text-left">
                  {/* <!-- Title --> */}
                  <h4 className="card-title text-center ">{name}</h4>
                  {/* <!-- Text --> */}

                  <div className="card-text text-center">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Name:&nbsp;</strong>
                        {name}
                      </li>
                      <li className="list-group-item">
                        <strong>Email:&nbsp;</strong>
                        {email}
                      </li>

                      <li className="list-group-item">
                        <strong>Gender:&nbsp;</strong>
                        {gender}
                      </li>
                      <li className="list-group-item">
                        <strong>Phone:&nbsp;</strong>
                        {phone}
                      </li>
                      <li className="list-group-item">
                        <strong>Address:&nbsp;</strong>
                        {address}
                      </li>
                    </ul>
                    <br />
                  </div>
                  <Link to={`/change/profile/${_id}`}>
                    <button className="btn btn-primary">Update profile</button>
                  </Link>
                </div>

                <h3 className="text-center"> Graphics</h3>
                {graphics.map((graphic,index)=>{
const {caption, name ,photo, _id}=graphic
return (
  <div className="relative" key ={index}>
    <div className="thumb">
      <div className="overlay overlay-bg" />
      <img className="image img-fluid" src={photo} alt="" />
    </div>
    <div className="img-pop-up">
      <div className="middle">
        <div className=" align-self-center  p-0 text-light bg-primary ">
          {caption}
          <a className="btn btn-danger btn-sm"onClick={this.handleDeleteGraphic.bind(this,_id)}>
            delete
            {/* Download {_id+'oooo'} */}
          </a>
        </div>
      </div>
    </div>
  </div>
);
                })}
              </div>
              {/* <!-- Card --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default customerProfile
