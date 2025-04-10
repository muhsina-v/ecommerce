import productSchema from "../models/productSchema.js";

 export const getAllProducts=async (req,res)=>{
    try{
        const products=await productSchema.find();
        res.status(200).json({
            data:products,
        });

    }catch(error){
    console.log(error);
    }
};

export const getProductsById=async(req,res)=>{
    try{
        const{pId}=req.params``;
        const product=await productSchema.findbyid(pId);
        if(!product){
            res.status(400).json({
                messege:"not  found"
            });
            res.status(200).json({
                data:product,
            })
        }
    }catch(error){
        console.log(error);
        

    }
}