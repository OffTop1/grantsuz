const mongoose = require('mongoose');


const countryListSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	}
})


const CountryList = mongoose.model('CountryList', countryListSchema);


module.exports = {CountryList}