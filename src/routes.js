import React, { useContext, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';
import Context from './utils/context';
import AuthCheck from './utils/authcheck';

import Home from './hooks/home';
import Header from './hooks/Header';
import HooksContainer1 from './hooks/hook1';
import Callback from './hooks/callback';
import HooksForm from './hooks/hooks_form1';
import PrivateComponent from './hooks/privatecomponent';
import Profile from './hooks/profile';
import Login from './hooks/auth/Login';
import Register from './hooks/auth/Register';



const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/'}} />
  }
  />
)


const Routes = () => {
    const context = useContext(Context)


      return(
        <div>
          <Router history={history} >
          <Header />
          <br />
          <br />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/hooksform' component={HooksForm} />
              <Route path='/profile' component={Profile} />
              <Route path='/hookscontainer' component={HooksContainer1} />
              <Route path='/authcheck' component={AuthCheck} />
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <PrivateRoute path='/privateroute'
                            auth={context.authState}
                            component={PrivateComponent} />
              <PrivateRoute path="/profile"
                            auth={context.authState}
                            component={Profile} />
              <Route path='/callback'
					       render={(props) => {
                         context.handleAuth(props);                                                            return <Callback />}} />


            </Switch>
          </div>
          </Router>
        </div>
  )}

export default Routes;