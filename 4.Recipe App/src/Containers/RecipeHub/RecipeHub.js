import React, { useEffect, useState } from 'react'
import './RecipeHub.scss'
import Recipe from '../../Components/Recipe/Recipe'
import SearchRecipes from '../../Components/SearchRecipes/SearchRecipes'
import Axios from 'axios';

const APP_ID = process.env.REACT_APP_EDAMAM_API_ID
const APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY

const RecipeHub = () => {
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState('')

    const getRecipes = query => {
        const link = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        Axios.get(link)
            .then(res => {
                let recipes = res.data.hits.map(hit => hit.recipe)
                setRecipes(recipes)
            })
            .catch(res => {
                setError('Network Error - Keep in mind that you can only call 5 request per minute')
            })
    }

    useEffect(() => {
        getRecipes('chicken')
    }, [])

    const SearchRecipesHandler = (e, recipeName) => {
        setRecipes([])
        setError('')
        e.preventDefault()
        getRecipes(recipeName)
    }

    let recipesCollection = recipes.map(recipe => {
        return <Recipe
            key={recipe.label}
            label={recipe.label}
            ingredients={recipe.ingredients}
            calories={recipe.calories}
            url={recipe.url}
            image={recipe.image} />
    })

    if (error.length) {
        recipesCollection = <h3>{error}</h3>
    }
    return (
        <section className="recipe-hub">
            <SearchRecipes searchRecipe={SearchRecipesHandler} />
            {recipesCollection}
        </section>
    );
}

export default RecipeHub;
