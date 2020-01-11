import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import LandingPage from './components/pages/landingpage';
import Dashboard from './components/pages/dashboard/dashboard'
import Signin from './components/pages/Signin/Signin';
import UserDashboard from './components/pages/dashboard/userhome'
import customerProfile from './components/pages/dashboard/customerProfile';
import UpdateProfile from './components/pages/dashboard/updateProfile'
import Register from './components/pages/Signup/Register' 
import AllGraphic from './components/pages/listGraphics/graphics'
import AddGraphic from './components/pages/AddGraphic/AddGraphic'


export class routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          
           <Route path="/register"  strict exact={true} component={Register}/>
          
                 <Route path="/dash"  strict exact={true} component={UserDashboard}/>
          <Route path="/"  strict exact={true} component={LandingPage}/>
          
          <Route path="/change/profile/:id"  strict exact={true} component={UpdateProfile}/>
         
          <Route path="/signin" strict exact={true} component={Signin}/>
          
          <Route path="/profile/:id" strict exact={true}  component={customerProfile}/>
           


           //graphics
           < Route path = "/addgraphic"
           strict exact = {
             true
           }
           component = {
             AddGraphic
           }
           />
          
             <Route path ="/graphics" strict exact={true} component={AllGraphic}/>
            
        </Switch>
      </div>
    )
  }
}

export default routes
