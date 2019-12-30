const config = {
	production:{
		SECRET: process.env.SECRET,
		DATABASE: process.env.MONGODB_URI
	},	
	default:{
		SECRET: 'SUPERSECRETPASSWORD098',
		DATABASE: 'mongodb+srv://Sunny1:' + process.env.MONGO_ATLAS_PW + '@cluster0-dklmk.mongodb.net/test?retryWrites=true&w=majority'
	}
}


module.exports = function (env){
	return config[env] || config.default
}