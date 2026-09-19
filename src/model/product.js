import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        description: {
            type: String,
            default: "",
        },

        author: {
            type: String,
            required: true,
            trim: true,
        },

        translator: {
            type: String,
            default: "",
            trim: true,
        },

        publisher: {
            type: String,
            default: "",
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        discountPrice: {
            type: Number,
            default: null,
            min: 0,
        },

        stock: {
            type: Number,
            default: 0,
            min: 0,
        },

        isbn: {
            type: String,
            default: "",
            trim: true,
        },

        pages: {
            type: Number,
            default: null,
            min: 0,
        },

        publishYear: {
            type: Number,
            default: null,
        },

        image: {
            type: String,
            required: true,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        views: {
            type: Number,
            default: 0,
            min: 0,
        },

        soldCount: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Product =
    mongoose.models.Product ||
    mongoose.model("Product", productSchema);

export default Product;