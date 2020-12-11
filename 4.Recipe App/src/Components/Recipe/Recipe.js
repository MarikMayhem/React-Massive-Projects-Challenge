import React from 'react'
import './Recipe.scss'

const Recipe = ({ label, ingredients, calories, url, image }) => {
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <a href={url} rel="noreferrer" target="_blank">
                <img className="recipe-image" src={image} alt="recipe" />
            </a>
            <ol className="recipe-ingredients">
                {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient.text}</li>)}
            </ol>
            <h3>Calories: {calories}</h3>

        </div>
    );
}

export default Recipe;


