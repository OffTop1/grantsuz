const mongoose = require('mongoose');


const grantSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	image:{
		type:String,
		required:true
	},
	deadline:{
		type:String,
		required:true
	},
	when:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	link:{
		type:String
	},
	contacts:{
		type:String
	},
	categoryId:{
		type:Number
	},
	countryId:{
		type:Number
	},
	auditoryId:{
		type:Number
	}
},{timestamps:true})


const Grant = mongoose.model('Grant', grantSchema);


module.exports = {Grant}