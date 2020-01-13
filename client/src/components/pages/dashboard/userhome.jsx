import React, { Component } from "react";
import { Link } from "react-router-dom";
import Projects from "../listGraphics/graphics";
// import "../../assets/css/style.css";

import LeftSidebar from "../SidesBars/Leftsidebar";

import { userProfile } from "../../apidata/api";

export default class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      userAvater: ""
    };
  }

  async componentWillMount() {
    
    const id = await window.localStorage.getItem("userId");
    if (id) {
      await this.setState({ id: id });
      console.log(this.state.id);
    } else {
      this.props.history.push("/");
    }
  }
  async componentDidMount() {
    const token = await JSON.parse(localStorage.getItem("token"));
    const id = await localStorage.getItem("userId");

    fetch(`/user/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        this.setState({
          id: result.info._id
        });
      })
      .catch(err => console.log(err));
    //logout user after some minute
    setTimeout(() => {
      alert("Re log in");
      localStorage.clear();
    }, 36000000);
  }

  render() {
    const { id, name, userAvater } = this.state;

    const sidebar = {
      backgroundColor: "#757575",
      margin: "0px;"
    };

    return (
      <div>
        {/* <div className="alert alert-info">
          Welcome {name} much{" "}
          <span style={{ color: "red", fontSize: "20px" }}>&hearts;</span>
        </div> */}
        <div className="container ">
          <div className="row  ">
            <div className="col-lg-3 mt-5" style={{}}>
              <LeftSidebar />
            </div>
            <div className="col-lg-3 mt-5" style={{ position: "fixed" }}>
              <LeftSidebar />
            </div>

            <div className="col-lg-9 mt-5">
              <Projects />
            </div>

            {/* <div
              className="col-lg-3 mt-5"
              style={{
                position: "",
                left: ""
              }}
            ></div> */}
          </div>
        </div>
      </div>
    );
  }
}
