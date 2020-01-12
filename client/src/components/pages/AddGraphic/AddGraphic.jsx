import React, { Component } from "react";
import "./AddGraphic.css";

import "../../asset/css/smalloader.css";
import axios from "axios";
import Leftsidebar from "../SidesBars/Leftsidebar";
import { Link } from "react-router-dom";

class AddGraphic extends Component {
  constructor() {
    super();
    this.state = {
      caption: "",
      ideaname: "",
      name: "",
      file: "",
      // projectdoc:'',
      notif: "",
      isLoading: false,
      error: false
    };
    this.handleCaption = this.handleCaption.bind(this);
    this.handleInspiration = this.handleInspiration.bind(this);
    this.handleDName = this.handleDName.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  async handlePost(id) {
    console.log(id + "kkkn");
    const formdata = new FormData();
    formdata.append("file", this.state.file);
    formdata.append("name", this.state.name);
    formdata.append("caption", this.state.caption);
    formdata.append("ideaname", this.state.ideaname);

    // axios
    //   .post(`/api/v1/graphic/post/${id}`, formdata, {
    //     headers: {

    //       "content-type": "multipart/form-data"
    //     }
    //   })
    fetch(`http://localhost:3001/api/v1/graphic/post/${id}`, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        Accept: "application/json"
        // "Content-Type": "multipart/form-data"
      },
      body: formdata
    })
      .then(response => {
        // alert(response.data);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        //this.setState({error: true})
      });
  }
  handleProject(e) {
    e.preventDefault();
    this.handlePost(this.props.match.params.id);
  }

  handleCaption(e) {
    this.setState({ caption: e.target.value });
  }
  handleInspiration(e) {
    this.setState({ ideaname: e.target.value });
  }
  handleDName(e) {
    this.setState({ name: e.target.value });
  }
  handleFile(e) {
    this.setState({ file: e.target.files[0] });
    // console.log(e.target.value + '  oooo')
  }

  async componentDidMount() {
    const token = await localStorage.getItem("token");
    console.log(token);
    if (!token) {
      this.props.history.push("/");
    }
  }

  render() {
    const { name, ideaname, caption, file } = this.state;
    if (this.state.error) {
      return <h1>Something went wrong, please try again.</h1>;
    }
    return (
      <div>
        {/* <UserHeader/> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-5">
              <Leftsidebar />
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
                  <div
                    className="alert alert-danger"
                    style={{ display: "none" }}
                  >
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
                      value={caption}
                      onChange={this.handleCaption}
                      placeholder="Design Caption"
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
                      value={ideaname}
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
                      value={name}
                      onChange={this.handleDName}
                      placeholder="Designer name/who designs it"
                    />
                  </div>

                  <div className="form-group">
                    <p>Select file design to upload </p>

                    <input
                      type="file"
                      name="file"
                      className="form-control"
                      onChange={this.handleFile}
                    />
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

            <div className="col-lg-3 mt-5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGraphic;
