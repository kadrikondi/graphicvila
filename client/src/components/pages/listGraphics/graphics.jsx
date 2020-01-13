import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import axios from 'axios';

// import  '../../assets/style.css'





class Graphics extends Component{

    constructor(){
      super()
      this.state={
        id:'',
        name:'',
       designer:'',
        inspi:'',
        year:'',
        summary:'',
        allgraphics:[],
        token:'',
        searchText:''
        
      }
      this.handleSearch= this.handleSearch.bind(this)
    }

     handleSearch(e){
       this.setState({searchText:e.target.value})
       console.log(this.state.searchText)
     }

   async componentWillMount(){
     const id = await localStorage.getItem("userId");
     this.setState({id:id})
     
   }
       componentDidMount(){

        const token= localStorage.getItem('token')
        this.setState({token})

        
  
        fetch("/api/v1/graphics", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())

          .then(result => {
             console.log(result.info)
            this.setState({
              allgraphics: result.info
            });
          })
          .catch(err => {
            console.log(err);
            if (err) {
              document.getElementById("head").innerText =
                "No project Available";
            }
          });
       }

 

    render(){

 const allgraphics =this.state.allgraphics.filter((graphic)=>{
   let search= this.state.searchText
   return graphic.name.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1;
  //  indexOf(this.state.searchText.toLowerCase())!==-1;
   
 })
 const {token, id }= this.state
return (
  <div>
    {/* {this.state.token ? <UserHeader/>:<div></div>} */}

    <div className="contaner ">
      {/* {<Search /> } */}

      {/* <form className="form-group ml-5">
        <div className="form-group my-0">
          <input
            className="form-control "
            type="text"
            onChange={this.handleSearch}
            value={this.state.searchText}
            placeholder="Search project topics"
            aria-label="Search"
          />
        </div>
      </form> */}
      {/*  */}
    </div>
    <div className="mt text-center ">
      <Link to={`addgraphic/${id}`}>
        {" "}
        <button
          className="btn btn-lg btn-primary text-center"
          style={{ width: "" }}
        >
          {" "}
          Upload Your Designs{" "}
        </button>
      </Link>

      <form className="form-group m-2">
        <div className="form-group my-0">
          <input
            className="form-control "
            type="text"
            onChange={this.handleSearch}
            value={this.state.searchText}
            placeholder="Search project topics"
            aria-label="Search"
          />
        </div>
      </form>

      <hr />
      <div className="mt-5 ">
        {/* carddeck */}

        <div className="row grid">
          {allgraphics ? (
            allgraphics.map((pro, index) => {
              const { _id, name, photo, ideaname, caption } = pro;
              return (
                <div className="single-portfolio col-sm-3 all vector " key ={index}>
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={photo} alt="" />
                    </div>
                    <div className="img-pop-up">
                      <div className="middle">
                        <div className=" align-self-center  p-0 text-light bg-primary ">
                          {caption} Design by {name} his inspire by {ideaname}
                          <a
                            className="btn btn-success"
                            href={photo}
                            target="_blank"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              );
            })
          ) : (
            <h1>no project available</h1>
          )}
        </div>
        {/* carddeck end */}
      </div>

      {/* row */}
    </div>
    {/* main */}
  </div>
);

    }   
}

export default Graphics