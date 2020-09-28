import React, {Component} from 'react'
//import Header from './Header'
import SignIn from  '../components/authorization/SignIn'
import SignUp from  '../components/authorization/SignUp'
import PasswordRecovery from  '../components/authorization/PasswordRecovery'
import {Route} from 'react-router-dom'
import Header from './Header'

class Content extends Component{
    render(){
        return(
            <React.Fragment> 
                <div className='content'>
                    <Header />                  
                    <Route exact={true} path='/' component={SignIn}/>
                    <Route exact={true} path='/sign-up' component={SignUp}/>
                    <Route exact={true} path='/password-recovery' component={PasswordRecovery}/>
                </div>
            </React.Fragment> 
        )
    }
}

export default Content