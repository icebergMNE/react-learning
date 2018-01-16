import React from 'react'
import PropTypes from 'prop-types'


class Warrior extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.id,
            name:'',
            email:''
        }

        this.updateStateName = this.updateStateName.bind(this);
        this.updateStateEmail = this.updateStateEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    updateStateName(event){
        let value = event.target.value;
        this.setState(()=>{
            return{
                name: value
            }
        })
    }
    updateStateEmail(event){
        let value = event.target.value;
        this.setState(()=>{
            return{
                email: value
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(
            this.state.id,
            this.state.name,
            this.state.email
        );
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.label}</h2> 
                <input 
                    type="text" 
                    name="name" 
                    placeholder="your name"              
                    autoComplete='off'
                    value={this.state.name}
                    onChange={this.updateStateName}
                    />

                <input 
                    type="text" 
                    name="email" 
                    placeholder="your email"              
                    autoComplete='off'
                    value={this.state.email}
                    onChange={this.updateStateEmail}
                    />
                <button 
                    type='submit'
                    disabled={!this.state.name || !this.state.email}>
                    Submit    
                </button>
            </form>
        )
    }
}


class Battle2 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            person1: {
                name: '',
                email: null
            },
            person2: {
                name: '',
                email: null
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // method that is going to submit form values into parent component
    handleSubmit(person, name, email){
        this.setState(()=>{
            let newState = {};
            newState[person] = {
                name: name,
                email: email
            }       
            return newState;
        })
    }


    render(){
        let warriorOneName = this.state.person1.name;
        let warriorTwoName = this.state.person2.name;

        return(
            <div>
                {!warriorOneName &&
                <Warrior 
                    id="person1"
                    label="Warrior ONE"
                    onSubmit={this.handleSubmit}
                />}

                {!warriorTwoName &&
                    <Warrior 
                    id="person2"
                    label="Warrior TWO"
                    onSubmit={this.handleSubmit}
                />}
            </div>
        )
    }
}

module.exports = Battle2;