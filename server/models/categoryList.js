const mongoose = require('mongoose');


const categoryListSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	}
})


const CategoryList = mongoose.model('CategoryList', categoryListSchema);


module.exports = {CategoryList}