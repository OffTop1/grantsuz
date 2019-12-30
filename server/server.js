const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config')(process.env.NODE_ENV);
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();


const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});




mongoose.set('useFindAndModify', false);

mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;
mongoose.connect(config.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});
app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public', express.static('public'));

const {Grant} = require('./models/grant');
const {CountryList} = require('./models/countryList');
const {AuditoryList} = require('./models/auditoryList');
const {CategoryList} = require('./models/categoryList');

//Grants api **************************************************************************
app.get('/api/grants_sorted',(req,res)=>{
	var query = {};
	for(var key in req.query){ //could also be req.query and req.params
	  req.query[key] !== "" ? query[key] = req.query[key] : null;
	}

	Grant.find(query, function(err, doc){
		if(err) return res.status(400).send(err);
		res.send(doc);
	})
})


app.get('/api/grants',(req,res)=>{
	let limit = parseInt(req.query.limit);
	let skip = parseInt(req.query.skip);
	let order = req.query.order

	Grant.find({}).skip(skip).sort({_id:order}).limit(limit).exec((err, doc)=>{
		if(err) return res.status(400).send(err);
		res.send(doc);
	})
})

app.post('/api/grants', upload.single('image'),(req,res)=>{
	const url = req.protocol + '://' + req.get('host')

	const grant = new Grant({
		title:req.body.title,
		deadline:req.body.deadline,
		when:req.body.when,
		description:req.body.description,
		link:req.body.link,
		contacts:req.body.contacts,
		categoryId:req.body.categoryId,
		countryId:req.body.countryId,
		auditoryId:req.body.auditoryId,
		image:req.file.path,
	})

	grant.save((err, doc)=>{
		if(err) return res.status(400).send(err);

		res.status(200).json({message:"Saved Successfully", post:doc, url:url})
	})
})

app.post('/api/grants_update',upload.single('image'),(req,res)=>{
	let id = req.query.id;
	const updateGrant = {
		title:req.body.title,
		deadline:req.body.deadline,
		when:req.body.when,
		description:req.body.description,
		link:req.body.link,
		contacts:req.body.contacts,
		categoryId:req.body.categoryId,
		countryId:req.body.countryId,
		auditoryId:req.body.auditoryId,
		image:req.file.path,
	}
	Grant.findByIdAndUpdate(id, updateGrant,{upsert:true, new:false},(err, doc)=>{
		if(err) return res.status(400).send(err);
			fs.unlink(doc.image, (err)=>{
				res.status(200).json({
						updated:true,
						post:doc
					});
			});
			
		});
		
})


app.delete('/api/grants',(req,res)=>{
	const url = req.protocol + '://' + req.get('host')
	let id = req.query.id;

	Grant.findByIdAndRemove(id,(err,doc)=>{
		if(err) return res.status(400).send(err);

		fs.unlink(doc.image, (err)=>{
			if(err) return res.status(400).send(err);

			res.status(200).json(true)
		});

		
	})
})
//Grants api **************************************************************************

//Categories api **********************************************************************
app.get('/api/categories',(req,res)=>{

	CategoryList.find({},(err, doc)=>{
		if(err) return res.status(400).send(err);
		res.send(doc);
	})
})

app.post('/api/categories',(req,res)=>{
	const category = new CategoryList(req.body)

	category.save((err, doc)=>{
		if(err) return res.status(400).send(err);

		res.status(200).json({succes:true})
	})
})
//**************************************************************************************

//Countries api ************************************************************************
app.get('/api/countries',(req,res)=>{

	CountryList.find({},(err, doc)=>{
		if(err) return res.status(400).send(err);
		res.send(doc);
	})
})

app.post('/api/countries',(req,res)=>{
	const country = new CountryList(req.body)

	country.save((err, doc)=>{
		if(err) return res.status(400).send(err);

		res.status(200).json({succes:true})
	})
})

//Auditories api ***********************************************************************
app.get('/api/auditories',(req,res)=>{

	AuditoryList.find({},(err, doc)=>{
		if(err) return res.status(400).send(err);
		res.send(doc);
	})
})

app.post('/api/auditories',(req,res)=>{
	const auditory = new AuditoryList(req.body)

	auditory.save((err, doc)=>{
		if(err) return res.status(400).send(err);

		res.status(200).json({succes:true})
	})
})
//*****************************************************************************************


const port = process.env.PORT || 3001;


// if(process.env.NODE_ENV === 'production'){
// 	app.use(express.static('client/build'))
// }
if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


app.listen(port, ()=>{
	console.log('Start running the server')
})