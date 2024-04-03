import joi from "joi";

const recipeLogic = joi.object({
    recipeName: joi.string().min(3).required(),
    description: joi.string().required(),
    cookingDuration: joi.string().required(),
    ingredients: joi.array().items(joi.string()).required(),
    servings: joi.number().min(1).required(),
    difficulty: joi.string().valid("EASY", "MEDIUM", "HARD").required(),
    cuisine: joi.string().required()
});
export default recipeLogic;

