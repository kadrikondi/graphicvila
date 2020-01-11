import React, { Component } from "react";


import { Link } from "react-router-dom";
export class footer extends Component {
  render() {
    return (
      <div>
        {/* Footer section */}
       
        {/* start footer Area */}
        <footer className=" text-center">
          <div className="container">
            <div className="row">
               <div className="col-lg-4"></div>

              <div className="col-lg-4">&copy; Stivo 2020</div> 
                        
            </div>
          </div>
        </footer>
        {/* End footer Area */}
      </div>
    );
  }
}

export default footer;
