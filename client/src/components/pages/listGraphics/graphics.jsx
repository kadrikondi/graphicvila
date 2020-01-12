import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import axios from 'axios';

// import  '../../assets/style.css'





class Projects extends Component{

    constructor(){
      super()
      this.state={
        id:'',
        name:'',
       designer:'',
        inspi:'',
        year:'',
        summary:'',
        allproject:[],
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

        
  
        fetch('/projects',{
          method:'GET',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            
        }
        })
       
       .then(res => res.json())
     
       .then(result=>{
   
        //  console.log(result.info[1])
         this.setState({
           allproject:result.info
         })
         
        })
        .catch(err=>{
          console.log(err)
          if(err){
            document.getElementById('head').innerText="No project Available"
        }
        })
       }

 

    render(){

 const allproject =this.state.allproject.filter((project)=>{
   let search= this.state.searchText
   return project.topic.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1;
  //  indexOf(this.state.searchText.toLowerCase())!==-1;
   
 })
 const {token, id }= this.state
return(
          
    <div className="mt-5">
    
    {/* {this.state.token ? <UserHeader/>:<div></div>} */}
    
   <div className="col-lg-  mt-5">
      {/* {<Search /> } */}



       <form className="form-group ml-5">
        <div className="form-group my-0">
          <input className="form-control " type="text"
            onChange={this.handleSearch} value={this.state.searchText} placeholder="Search project topics" aria-label="Search" />
        </div>
      </form>


    </div> 
       <div className='mt text-center '> 
       
      <Link to={`addgraphic/${id}`}> <button className="btn btn-lg btn-primary text-center" style={{ width: '' }}> Upload Your Designs </button></Link>
            
          
          
        <hr/>
      <div className="mt-5 ">
        {/* carddeck */}
       
       
        <div className="card-deck "  >
        

{ allproject ?
  allproject.map((pro ,index)=>{
  const{_id,topic,department,school,year,summary,date,projectdoc,comments,user}=pro
  return (
    // className="col-lg-3 col-sm-6 col-xm-12  col-md-4"
  <div  className="card"  className="col-lg- col-sm-6 col-xm-12  col-md-4"  key={_id}>
   <div className=" card card-cascade" style={{marginBottom:'20px', width:'100%' ,boxShadow:'none'}} >

  {/* <!-- Card title --> */}
  <div className="card-header ">

 
    {/* <!-- Title --> */}
    <h6 className="card-header-title text-left  p-0" style={{color:'#000000' ,margin:'0px;',fontWeight:'bold' ,textTransform:'uppercase'}}> {topic}</h6>
    {/* <!-- Text --> */}
    
  
  </div>
    
  {/* <!-- Card content --> */}
  <div className="card-body card-body-cascade text-left">
  
    {/* <!-- Text --> */}
    <p className="card-text">{summary}</p>
   
  
  </div>
  {/* <!-- Card content --> */}
  
     <Link to={`/projectD/${_id}`}>
          <button className="btn  btn-sm btn-outline " style={{ 'backgroundColor': '#fff', border: '1px  groove gray', color: '#000'}}>Detail</button>
     </Link>
  {/* <!-- Card footer --> */}
        <div className="rounded-bottom mdb-color dark lighten-1 text-center pt-3">
    <ul className="list-unstyled list-inline font-small">
      <li className="list-inline-item pr-2 white-text"><i className="mdi mdi-cloud-download pr-1"></i><span>2</span></li>
      <li className="list-inline-item pr-2"><a href="#"className="pink-text"><i className="fa fa-heart-o pr-1"></i>3</a></li>
      <li className="list-inline-item pr-2"><a href="#" className="white-text"><i className="mdi mdi-eye-outline pr-1"> </i>21</a></li>
      
    </ul>
  </div>
  
  </div>
  {/* <!-- Card --> */}
  </div>)
  }) :<h1>no project available</h1>

}



  
</div>
{/* carddeck end */}
 
 </div>

 
    
 {/* row */}
 </div>
 {/* main */}
    </div>

      
    
)

    }   
}

export default Projects