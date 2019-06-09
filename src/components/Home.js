import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import {withRouter} from 'react-router-dom'

const Home = ({match, recipes}) => {

    
    let search = match.params.search
    if(!search){
        search=""
    }
    const receitaFiltrada = recipes.filter((item) => {
        return (item.ingredients.toLowerCase().includes(search.toLowerCase()) 
        || item.title.toLowerCase().includes(search.toLowerCase()))
    })

    if(search){
        
        return(
        <div className="row">
            {receitaFiltrada.map((item, index)=> <RecipeItem key={index} recipe={item}/>)}
        </div>
        )
    }
    return(
        <div className="row">
            {recipes.map((item, index)=> <RecipeItem key={index} recipe={item}/>)}
        </div>
    )
    
    
}

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default withRouter(Home)
