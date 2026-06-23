import React, { useState } from "react";
import recipe_bg from "../assets/recipe_bg.jpg";
function RecipeGenerator() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [recipe, setRecipe] = useState('');

    const createRecipe = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/recipe-creator?ingredients=${ingredients},@dietaryRestrictions=${dietaryRestriction}&cuisine=italian=${encodeURIComponent(cuisine)}`
            );
            const data = await response.text();
            console.log(data);
            setRecipe(data);

        } catch (error) {
            console.error("Error generating recipe :", error)
        }
    };

    // return (
    //     <div>
    //         <h2>Generate a Recipe....</h2>
    //         <input
    //             type="text"
    //             value={ingredients}
    //             onChange={(e) => setIngredients(e.target.value)}
    //             placeholder="Enter ingredients (comma separated)"
    //         />

    //         <input
    //             type="text"
    //             value={cuisine}
    //             onChange={(e) => setCuisine(e.target.value)}
    //             placeholder="Enter cuisine type"
    //         />

    //         <input
    //             type="text"
    //             value={dietaryRestriction}
    //             onChange={(e) => setDietaryRestriction(e.target.value)}
    //             placeholder="Enter dietary restrictions(if any)"
    //         />

    //         <button onClick={createRecipe}>Create Recipe</button>

    //         <div className="output">
    //             <pre className="recipe-text">{recipe}</pre>
    //         </div>
    //     </div>

    // );


    return (
        <div className="recipe-page">
        
            <div className="recipe-title">
                <h1>🍳 Recipe Studio</h1>
                <p>AI Powered. Your Ingredients, Endless Recipes.</p>
            </div>
        
            <div className="recipe-form-card">
        
                <div className="field">
                    <label>🥕 Ingredients</label>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e)=>setIngredients(e.target.value)}
                        placeholder="eggs, potato, cheese..."
                    />
                </div>
        
                <div className="field">
                    <label>🌍 Cuisine</label>
                    <input
                        type="text"
                        value={cuisine}
                        onChange={(e)=>setCuisine(e.target.value)}
                        placeholder="Italian, Indian..."
                    />
                </div>
        
                <div className="field">
                    <label>🥗 Dietary Restrictions</label>
                    <input
                        type="text"
                        value={dietaryRestriction}
                        onChange={(e)=>setDietaryRestriction(e.target.value)}
                        placeholder="Vegetarian, Vegan..."
                    />
                </div>
        
                <button className="recipe-create-btn"
                        onClick={createRecipe}>
                    ✨ Create Recipe
                </button>
        
            </div>
        
            {
                recipe &&
                <div className="recipe-result-card">
        
                    <h2>🍽 Generated Recipe</h2>
        
                    <pre className="recipe-result">
                        {recipe}
                    </pre>
        
                </div>
            }
        
        </div>
        )
}
export default RecipeGenerator;