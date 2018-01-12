import React from 'react'
import PropTypes from 'prop-types'

// stateless functional component
// a component that just renders some ui 
function SelectLanguage(props){
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];    
    return (
        <ul className='languages'>
            {languages.map((language)=>{
                return (
                    <li 
                        onClick={props.onSelect.bind(null, language)}
                        style={language === props.selectedLanguage ? {color: '#d0021b'}:null}
                        key={language}>
                        { language }
                    </li>
                )
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired    
}

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(function(){
            return {
                selectedLanguage: lang
            }
        });
    }

    render(){

        return(
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage} />
            </div>
        )
    }
}

module.exports = Popular;