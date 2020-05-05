import React from 'react'
import { Switch,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={props=>(
                <Redirect to={{ pathname:'/home' }}/>
            )}/>
            <Route path="/home" component={Home} />
        </Switch>
    )
}
