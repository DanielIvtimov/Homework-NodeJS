import { RecipeModel } from "../model/recipe.models.js";
import recipeLogic from "../recipeLogic/joi_recipe.logic.js";
export class RecipeController{
    constructor(){
        this.recipeModel = new RecipeModel();
    }
    async createRecipe(req, res){
        try{
            const recipeData = req.body;
            await recipeLogic.validateAsync(recipeData);
            const savedRecipe = await this.recipeModel.createRecipe(recipeData);
            res.status(201).send({ message: "Successfully created new recipe", recipe: savedRecipe });
        }catch(error){
            console.error(error);
            res.status(500).send({ error: "Failed to create recipe." });
        }
    }

    async getAllRecipes(req, res){
        try{
            const recipes = await this.recipeModel.getAllRecipes();
            res.status(200).send({recipes});
        }catch(error){
            console.error(error);
            res.status(500).send({ error: "Failed to read all recipes." });
        }
    }

    async getRecipeById(req, res){
        try{
            const recipeId = req.params.id;
            const recipe = await this.recipeModel.getRecipeById(recipeId);
            if(!recipe){
                return res.status(404).send({ error: "Recipe not found." });
            }
            res.status(200).send({recipe});
        }catch(error){
            console.error(error);
            res.status(500).send({ error: "Failed to read recipe by ID." });
        }
    }

    async deleteRecipeById(req, res){
        try{
            const recipeId = req.params.id;
            const deletedRecipe = await this.recipeModel.deleteRecipeById(recipeId);
            if(!deletedRecipe){
                return res.status(404).send({ error: "Recipe not found." });
            }
            res.status(200).send({ message: "Recipe successfully deleted", deletedRecipe });
        }catch(error){
            console.error(error);
            res.status(500).send({ error: "Failed to delete recipe by ID." });
        }
    }

    async updateRecipeById(req, res){
        try{
            const recipeId = req.params.id;
            const updatedRecipeData = req.body;
            await recipeLogic.validateAsync(updatedRecipeData);
            const updatedRecipe = await this.recipeModel.updateRecipeById(recipeId, updatedRecipeData);
            if(!updatedRecipe){
                return res.status(404).send({ error: "Recipe not found." });
            }
            res.status(200).send({ message: "Recipe successfully updated", updatedRecipe });
        }catch(error){
            console.error(error);
            res.status(500).send({ error: "Failed to update recipe by ID." });
        }
    }
}





