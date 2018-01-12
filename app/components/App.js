import React from 'react'
import Popular from './Popular'


// component is concerned for these 3
//state
// lifecycle event shown to screen, removed from screen
// ui

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

module.exports = App;