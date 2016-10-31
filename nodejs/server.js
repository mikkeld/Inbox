const express = require("express"), bodyParser = require("body-parser");
let mongo = require('mongodb').MongoClient
let app = express();
let Bear = require('./models/bear');
const url = 'mongodb://localhost:27017/mikkeltest';




//lets us get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 8000;
let router = express.Router();

router.use((req, res, next) => {
	console.log("Something to happen");
	next();
})

router.get('/', (req, res) => {
	console.log(bear);
});

router.route('/bears')
	// curl -d '{"name":["pizza"]}' -H 'content-type:application/json' http://localhost:8000/api/bears
	.post((req, res) => {
		let bear = new Bear(req.body.name);
		mongo.connect(url, (err, db) => {
			if(err) throw err;
			let bears = db.collection('bears');
			bears.insert(bear, (err, data) => {
				if(err) throw err;
				console.log("Bear inserted");
				db.close();
			});
		})

	})

	// curl -X GET http://localhost:8000/api/bears
	.get((req, res) => {
		mongo.connect(url, (err, db) => {
			if(err) throw err;
			let bears = db.collection('bears');
			bears.find().toArray((err, data) => {
				if(err) throw err;
				console.log(data)
				db.close();
			})
		})
	})

// curl -X GET http://localhost:8000/api/bears/Mikkel
router.route('/bears/:name')
	.get((req, res) => {
		mongo.connect(url, (err, db) => {
			let bears = db.collection('bears');
			bears.find({
				name: req.params.name
			}).toArray((err, data) => {
				if(err) throw err;
				res.json(data)
			})
		})
	})

app.use('/api', router);
app.listen(port, () => {
	console.log('listening on', port);
});
