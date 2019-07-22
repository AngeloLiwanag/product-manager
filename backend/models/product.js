var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'A title is required.'], minlength: [4, "Title must be at least 4 characters long."]},
    price: {type: Number, required: [true, 'A price is required.']},
    image: {type: String, required: [true, 'A image url is required.']}
},{timestamps: true}
);
mongoose.model('Products', productSchema);