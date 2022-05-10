const mongoose = require('mongoose');
// timestamps creates createdAt and updatedAt
// versionKey false, removes _v attribute
const ProductSchema = new mongoose.Schema(
	{
		name: String,
		price: Number,
		description: String,
	},
	{ timestamps: true, versionKey: false }
);
const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
