import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
//import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'
import Switch from 'react-router-dom/Switch';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      recipes:recipes.results,
      searchString:""
    }

  }
  updateSearchString = (event)=>{
    this.props.history.push(event.target.value)
    this.setState({searchString:event.target.value})
  }
  
  render() {
    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          <Navbar searchString={this.state.searchString} updateSearchString={this.updateSearchString} />
        
    
        <div className="container mt-10">
          <Switch>
            <Route path="/" exact render={(props) => <Home recipes={this.state.recipes} />}/>
            <Route path="/recipe/:recipeId" exact render={(props) => <RecipePage recipes={this.state.recipes} />} />
            <Route path="/:search" render={(props) => <Home recipes={this.state.recipes} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
