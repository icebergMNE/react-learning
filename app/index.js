let React = require('react')
let ReactDOM = require('react-dom')

require('./index.css')



// component is concerned for these 3
//state
// lifecycle event shown to screen, removed from screen
// ui

class App extends React.Component {
    render() {
        return (
            <div>
                Hello worldddddd!!!!
                <br/>
                <HelloUser name="Stefan"/>
            </div>
        )
    }
}

class HelloUser extends React.Component {
    render() {
      return (
        <div> Hello, {this.props.name}</div>
      )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);