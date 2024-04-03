import { recipeMongoSchema } from "../schemas/recipe_schemas.js";

export class RecipeModel{
    async createRecipe(recipeData){
        try{
            const newRecipe = new recipeMongoSchema(recipeData);
            const savedRecipe = await newRecipe.save();
            return savedRecipe;
        }catch(error){
            console.error(error);
            throw new Error("Failed to create recipe.");
        }
    }

    async getAllRecipes(){
        try{
            const recipes = await recipeMongoSchema.find();
            return recipes;
        }catch(error){
            console.error(error);
            throw new Error("Failed to read all recipes.");
        }
    }

    async getRecipeById(recipeId){
        try{
            const recipe = await recipeMongoSchema.findById(recipeId);
            return recipe;
        }catch(error){
            console.error(error);
            throw new Error("Failed to read recipe by ID.");
        }
    }

    async deleteRecipeById(recipeId){
        try{
            const deletedRecipe = await recipeMongoSchema.findByIdAndDelete(recipeId);
            return deletedRecipe;
        }catch(error){
            console.error(error);
            throw new Error("Failed to delete recipe by ID.");
        }
    }

    async updateRecipeById(recipeId, updatedRecipeData){
        try{
            const updatedRecipe = await recipeMongoSchema.findByIdAndUpdate(recipeId, updatedRecipeData, { new: true });
            return updatedRecipe;
        }catch(error){
            console.error(error);
            throw new Error("Failed to update recipe by ID.");
        }
    }
}


