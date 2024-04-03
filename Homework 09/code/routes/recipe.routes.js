import { Router } from "express";
import { RecipeController } from "../controller/recipe.controller.js";

const routerRecipe = Router();
const recipeController = new RecipeController();

routerRecipe.post("/create", async (req,res) => {
    await recipeController.createRecipe(req, res);
});

routerRecipe.get("/recipes", async (req, res) => {
    await recipeController.getAllRecipes(req, res);
});

routerRecipe.get("/recipes/:id", async (req, res) => {
    await recipeController.getRecipeById(req, res);
});

routerRecipe.delete("/recipes/:id", async (req, res) => {
    await recipeController.deleteRecipeById(req, res);
});

routerRecipe.put("/recipes/:id", async (req, res) => {
    await recipeController.updateRecipeById(req, res);
});

export default routerRecipe;