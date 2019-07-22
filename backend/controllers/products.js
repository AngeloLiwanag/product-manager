var mongoose = require("mongoose");
var Products = mongoose.model("Products");

module.exports = {
    getAll: (req, res) => {
        console.log('Inside getAll products')
        Products.find({},(err, products) =>{
            if(err){
                console.log(err);
                res.json({message: "Error with get all", error: err})
            }else{
                res.json({message: "Succesfully get all", products: products})
            }
        })
    },
    getOne: (req, res) => {
        console.log('Inside getOne products')
        Products.findById({_id: req.params.id},(err, products) =>{
            if(err){
                console.log(err);
                res.json({message: "Error with get one", error: err})
            }else{
                res.json({message: "Succesfully get one", products: products})
            }
        })
    },
    create: (req, res) => {
        console.log('Inisde create products')
        var product = new Products(req.body);
        product.save((err, products) =>{
            if(err){
                console.log(err);
                res.json({message: "Error with create", error: err})
            }else{
                res.json({message: "Succesfully create", products: products})
            }
        })
    },
    update: (req, res) => {
        console.log('Inisde update products')
        Products.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'},(err, products) =>{
            if(err){
                console.log(err);
                res.json({message: "Error with update", error: err})
            }else{
                res.json({message: "Succesfully update", products: products})
            }
        })
    },
    delete: (req, res) => {
        console.log('Inisde delete products')
        Products.findByIdAndDelete({_id: req.params.id},(err) =>{
            if(err){
                console.log(err);
                res.json({message: "Error with delete", error: err})
            }else{
                res.json({message: "Succesfully delete "})
            }
        })
    },
}

