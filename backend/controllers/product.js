const { Product } = require("../models/product");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const detailedProduct = async(req, res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findOne({_id : id});
        res.send(product);
    }catch(err){
       res.status(500).json({message : err.message});
    }
}

const addProduct = async (req, res) => { 
    try{
        const {name ,price ,featured, rating, createdAt, company} = req.body;

        const newProduct = new Product({
            name ,
            price,
            featured,
            rating,
            createdAt,
            company
        })
        await newProduct.save();
        res.status(200).json({message : "new product created", newProduct});
    }catch(err) {
        res.status(500).json({message : err.message});
    }
    
};

const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete({_id : id});

        if (!deleteProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully",  deleteProduct});
    }catch(err){
        res.status(500).json({message : err.message});
    }
 };

 const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updates);

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({ featured: true });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductsByPrice = async (req, res) => {
    try {
        const { value } = req.params;
        const products = await Product.find({ price: { $lt: value } });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductsByRating = async (req, res) => {
    try {
        const { value } = req.params;
        const products = await Product.find({ rating: { $gte: value } });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getAllProducts, getFeaturedProducts, getProductsByPrice, getProductsByRating, addProduct, deleteProduct, updateProduct,detailedProduct
}