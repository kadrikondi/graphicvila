import React, { Component } from 'react'
import Customerheader from './customerheader';

import {Link} from 'react-router-dom'
import {userProfile} from '../../apidata/api'
import LeftSidebar from '../SidesBars/Leftsidebar'
export class customerProfile extends Component {
  constructor(){
    super()
    this.state = {
      user:"",
      name:"",
      email:"",
      gender:"",
      graphics:[]
    }
  }
  async componentWillMount(){
    const id = await localStorage.getItem("userId")
   
    const user = await userProfile(id)
   if(user){
     this.setState({name:user.name, email:user.email, gender:user.gender, graphics:user.graphics, _id:user._id})
   }
  }
  async componentDidMount(){
 
  }
  render() {
    const {name, email, gender,graphics, _id}= this.state
    return (
      <div>
        <Customerheader/>

        <div className="container">


            <div className="row">


                <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">

                     <LeftSidebar/>
                </div>


                <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
              <div className="card mt-3 "  >

                {/* <!-- Card image --> */}
                <div className="view overlay" style={{ height: "40%" }}>
                  <img className="card-img-top circle " src={this.state.user.photo} style={{width:'20%',height:'50%'}} alt='user profile photo'/>
                  <a href=''>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>


                {/* <!-- Card content --> */}
                <div className="card-body text-left">

                  {/* <!-- Title --> */}
                  <h4 className="card-title text-center ">{name}</h4>
                  {/* <!-- Text --> */}
                 
                  <div className="card-text ">
                    <ul className="list-group">
                    <li className="list-group-item"><strong>Name:&nbsp;</strong>{name}</li>
                    <li className="list-group-item"><strong>Email:&nbsp;</strong>{email}</li>
                   
                      
                      <li className="list-group-item"><strong>Gender:&nbsp;</strong>{gender}</li>
                   
                      
                    </ul><br/>
                  </div>
                    <Link to={`/change/profile/${_id}`}><button className="btn btn-primary">Update profile</button></Link>
                </div>

              </div>
              {/* <!-- Card --> */}



                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default customerProfile
