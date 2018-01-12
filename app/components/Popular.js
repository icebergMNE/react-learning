import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

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

function RepoGrid(props){
    return (
        <ul className='popular-list'>
            {props.repos.map((repo, index)=>{
                return (
                    <li key={repo.name} className="popular-item"> 
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img 
                                    src={repo.owner.avatar_url} 
                                    alt={repo.owner.login} className="avatar"/>
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
}
class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    // when componet is shown on screen
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang){
        this.setState(function(){
            return {
                selectedLanguage: lang,
                repos: null                
            }
        });

        api.fetchPopularRepos(lang).then((repos)=>{
            this.setState(()=>{
                return {
                    repos: repos
                }
            })
            // console.table(repos);
        })
    }

    render(){

        return(
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage} />
                {!this.state.repos
                ? <p> Loading</p> 
                : <RepoGrid repos={this.state.repos} />}
            </div>
        )
    }
}

module.exports = Popular;