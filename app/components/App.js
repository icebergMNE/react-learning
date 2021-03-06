import React from 'react'
import Popular from './Popular'
import {
    BrowserRouter as Router,
    Route,
    Switch  
} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'
import Battle2 from './Battle2'

// component is concerned for these 3
//state
// lifecycle event shown to screen, removed from screen
// ui

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    {/* switch renders default route if none of the defined is found */}
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} /> 
                        <Route path='/battle/results' component={Results} /> 
                        <Route exact path='/battle2' component={Battle2} />                        
                        <Route path='/popular' component={Popular} />
                        <Route render={
                            ()=> <p>Not found</p>
                        } />
                    </Switch>

                </div>
            </Router>
        )
    }
}

module.exports = App;