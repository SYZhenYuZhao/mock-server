import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Home from './Home'

class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route render={() => <Redirect to="/home" />} />
                </Switch>
            </div>
        )
    }
}

export default App