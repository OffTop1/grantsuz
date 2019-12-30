const mongoose = require('mongoose');


const auditoryListSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	}
})


const AuditoryList = mongoose.model('AuditoryList', auditoryListSchema);


module.exports = {AuditoryList}