import React, { Component } from "react";

import { Link } from "react-router-dom";
import './Leftsidebar.css'
import {userProfile} from '../../apidata/api'

export default class Leftsidebar extends Component {
    

  constructor(){
    super()
    this.state={
      id:'',
      name:'',
      photo:''
    }
    this.handleprofile= this.handleprofile.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  async componentWillMount(){
    const id = await localStorage.getItem("userId")
    if(!id){
      this.props.history.push('/signin') 
    }
    this.setState({id:id})

  
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      
      const user = await userProfile(id)
       
      if (!user) {
   
        this.props.history.push('/signin')
      } else {
       
        this.setState({ name: user.name, photo: user.photo})

      }
    

    }
    if (!token) {
      this.props.history.push('/')
    }
    
  }

  handleAlert(){
    alert('Setting Ok to Modify click profile')
  }

  async handleLogout() {
    await localStorage.removeItem("token");
    await window.localStorage.clear();
    await this.setState({ usertoken: null });
  }


  async handleprofile(){
    const user = await userProfile(this.props.match.params.id)
    console.log(user)
  }


  render() {
    const {id ,name,photo}= this.state
    const sidebarStyle = {
        leftsidbar :{
      marginTop: "0% !important",
      textAlign: "left",
      borderRadius: "8px",
      backgroundColor: "#fff",
      // boxShadow: '1px 1px 20px black',
      /* background-image: url('../assets/img/project.jpeg'); */
      //
      color: "rgb(3, 10, 73)",
      // boxShadow: "0.2px 0.2px 4px grey",
      padding: "8px", 
      width:'90%',
    

      },
      imgStyle :{
            width: "30%",
            height: "auto",
            cursor: "pointer",
            boxShadow: '0.3px 0.3px 1px gray',
            borderRadius:"50%"        },

        listItem :{
            ':hover': {
                backgroundColor: 'red'
            },
            border: "0px",
            fontWeight: 'bold',
            // ':hover':{
            //     backgroundColor:'red'
            // },
            listStyleType:'none',
            padding:"10px"
          
          
        },
        listLink:{
              boxSizing: 'border-box',  
      padding: '5px 8px',
      display: 'block'

        }

    };
    

    return (
      <div style={sidebarStyle.leftsidbar}>
        <div className="text-center">
          <Link to={`/profile/${id}`} title="Your profile">
            <img src={photo} style={sidebarStyle.imgStyle} />
            <h4>{name}</h4>
          </Link>
          <hr />
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item" style={sidebarStyle.listItem}>
              {" "}
              <Link
                to={`/profile/${id}`}
                className="list-link"
                style={sidebarStyle.listLink}
              >
                {" "}
                <i className="fa fa-book "></i> Profile{" "}
              </Link>
            </li>

            <li className="list-group-item" style={sidebarStyle.listItem}>
              {" "}
              <Link
                to={`addgraphic/${id}`}
                className="list-link"
                style={sidebarStyle.listLink}
              >
                <i className="fa fa-camera"></i>Upload Graphics{" "}
              </Link>{" "}
            </li>
            <li className="list-group-item" style={sidebarStyle.listItem}>
              <Link
                to="/graphics"
                className="list-link"
                style={sidebarStyle.listLink}
              >
                {" "}
                <i className="fa fa-road "></i> Graphics{" "}
              </Link>{" "}
            </li>
            <li className="list-group-item" style={sidebarStyle.listItem}>
              <a href="#" className="list-link" style={sidebarStyle.listLink} onClick={this.handleAlert.bind(this)}>
                {" "}
                <i className="fa fa-tool "></i> Setting{" "}
              </a>{" "}
            </li>
            <li className="list-group-item" style={sidebarStyle.listItem}>
              <Link
                to="/"
                className="list-link"
                style={sidebarStyle.listLink}
                onClick={this.handleLogout}
              >
                {" "}
                Logout{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
