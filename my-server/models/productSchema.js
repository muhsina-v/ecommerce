import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    type: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    images: [{ type: String, required: true, trim: true }],
    imageCategory: { type: String, required: true, trim: true },
    details: { type: String, required: true, trim: true },
    isDeleted: { type: Boolean, default: false },
    image: { type: String, required: true, trim: true },

});
export default mongoose.model("products",productSchema)