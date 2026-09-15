import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 500,
        },
    },
    {
        timestamps: true,
    }
);

const Contact =
    mongoose.models.Contact ||
    mongoose.model("Contact", contactSchema);

export default Contact;