import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cookingDuration: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    }
});
export const recipeMongoSchema = mongoose.model("Recipe", recipeSchema, "recepts");

