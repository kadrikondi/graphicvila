import React, { Component } from "react";
import "./AddGraphic.css";

import "../../asset/css/smalloader.css"
import axios from 'axios'
import Leftsidebar from "../SidesBars/Leftsidebar";
import {Link} from "react-router-dom"

class AddGraphic extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      inspiration: "",
      designer: "",
    
      file:"",
      // projectdoc:'',
      notif: "",
      isLoading: false,
      error: false
    };
    this.handleName = this.handleName.bind(this);
    this.handleInspiration = this.handleInspiration.bind(this);
    this.handleDName = this.handleDName.bind(this);
   
  }
  handleFile(e){
    this.setState({file: e.target.files[0]})
    console.log(e.target.value)
  }
  async handlePost(id){
    const formdata = new FormData();
    formdata.append('file', this.state.file)
    formdata.append('year', this.state.year)
    formdata.append('school', this.state.school)
    formdata.append('summary', this.state.summary)
    formdata.append('topic', this.state.topic)
    formdata.append('department', this.state.department)

    axios.post(`/post/project/${id}`, FormData)
    .then( response => {
      //alert(response.data)
      console.log(response)
    })
    .catch( err => {
      console.log(err)
      //this.setState({error: true})
    })
  }
  handleProject(e){
    e.preventDefault()
    this.handlePost(this.props.match.params.id)
  }

  
  handleName(e) {
    this.setState({ topic: e.target.value });
  }
  handleInspiration(e) {
    this.setState({ department: e.target.value });
  }
  handleDName(e) {
    this.setState({ school: e.target.value });
  }
  

  
  async componentDidMount() {
    // const token = await localStorage.getItem("token");
    // console.log(token);
    // if (!token) {
    //   this.props.history.push("/");
    // }
  }

  render() {
    const { name, inspiration, designer } = this.state;
    if(this.state.error){
      return <h1>Something went wrong, please try again.</h1>
    }
    return (
      <div>
        {/* <UserHeader/> */}
        <div className="container">

        <div className="row">


<div className="col-lg-3 mt-5">

<Leftsidebar/>

</div>
<div className="col-lg-5  col-sm-12 col-md-4 mt-5 ml-5">
        {/* <!--Form with header--> */}
        <div className="card  mt-3" id="addproject">
          {/* <!--Header--> */}
          <div className="card-header   text-center ">
            <h3>
              <i className="mdi mdi-note-plus" /> Add Graphics
            </h3>
          </div>

          {this.state.notif === "empty field" ? (
            <div className="alert alert-danger">{this.state.notif}</div>
          ) : (
            <div className="alert alert-danger" style={{ display: "none" }}>
              {this.state.notif}
            </div>
          )}

          <div className="card-body px-lg-5 pt-0  ">
            {/* <!--Body--> */}
            <div className="form-group mt-3">
              <input
                type="text"
                id="form3"
                name="topic"
                className="form-control"
                value={name}
                onChange={this.handleName}
                placeholder="Design Name"
              />
              {/* <label htmlFor="form3"> */}

              {/* <i className="mdi mdi-format-title"></i> Topic</label> */}
            </div>

            <div className="form-group">
              <input
                type="text"
                id="form2"
                className="form-control"
                name="department"
                value={inspiration}
                onChange={this.handleInspiration}
                placeholder="what inspire the design"
              />
           
            </div>

            <div className="form-group">
              <input
                type="text"
                id="form2"
                className="form-control"
                name="school"
                value={designer}
                onChange={this.handleDName}
                placeholder="Designer name"
              />
            
            </div>

              
          

            <div className="form-group">
                    <p>Select file design to upload </p>
              
              <input type="file"  className="form-control" value={this.state.file} onChange={this.handleFile.bind(this)}/>
                  </div>
            

            <div className="text-center">
              {this.state.isLoading === true ? (
                (document.getElementById("btnaddProject").style.display =
                  "none") && <div className="text-center" id="loader" />
              ) : (
                <button
                  id="drop"
                  type="button"
                  id="btnaddProject"
                  className="btn primary-btn mdi mdi-cloud-upload mt-"
                  onClick={this.handleProject.bind(this)}
                >
                  {" "}
                  &nbsp; Upload
                </button>
              )}
            </div>
          </div>
            </div>

            </div>


            <div className="col-lg-3 mt-5">
                  
  
            </div>
        </div>



        </div>
      </div>
    );
  }
}

export default AddGraphic;
