import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import { slugify } from '../helpers';

// TODO: Você deve verificar se a receita existe
const RecipePage = ({match, recipes}) => {
    const recipeId = match.params.recipeId
    const receitaFiltrada = recipes.filter((item) => {
        return slugify(item.title) === recipeId
    })
    if(receitaFiltrada[0]){
        return(
            <div>
                <a>
                <img className="card-img-top img-fluid" src={receitaFiltrada[0].thumbnail} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{receitaFiltrada[0].title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{receitaFiltrada[0].ingredients}
                    </p>
                </div>
                </a>
            </div>
        )
    }
    return(<h1>Not Encontrado</h1>)
}

RecipePage.propTypes = {
    recipe: PropTypes.object
}

export default withRouter(RecipePage)
