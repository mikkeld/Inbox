const express = require("express"), bodyParser = require("body-parser"), sentiment = require("sentiment");
let app = express();
const vision = require('./vision.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 8000;
let router = express.Router();

router.route('/annotate')
	.post((req, res) => {
		let Vision = new vision();
		let image = req.body;
		Vision.getLabelsForImage(image)
			.then((annotations, error) => {
				if(error) throw new Error(error);
				console.log(annotations);
			})
	});


// router.use((req, res, next) => {
// 	console.log("Something to happen");
// 	next();
// });
//
// router.get('/', (req, res) => {
// 	console.log("get");
// });
//
// router.route('/emails')
// 	.post((req, res) => {
// 		// let s1 = sentiment(req.body.text);
// 		// let email = new Email();
// 		// console.log(email);
// 		let email = new Email();
// 		let content = req.body;
// 		email.composeEmail(content)
// 			.then((result, error) => {
// 				if(error) throw new Error(error);
// 				res.json(result);
// 			})
// 	})
//
// 	.get((req, res) => {
// 		Email.getEmails()
// 			.then(res => {
// 				console.log(res);
// 			})
// 	});

// let getSentiment = function(text) {
// 	return sentiment(text);
// };


// router.route('/bears')
// 	// curl -d '{"name":["pizza"]}' -H 'content-type:application/json' http://localhost:8000/api/bears
// 	.post((req, res) => {
// 		let bear = new Bear(req.body.name);
// 		mongo.connect(url, (err, db) => {
// 			if(err) throw err;
// 			let bears = db.collection('bears');
// 			bears.insert(bear, (err, data) => {
// 				if(err) throw err;
// 				console.log("Bear inserted");
// 				db.close();
// 			});
// 		})
//
// 	})
//
// 	// curl -X GET http://localhost:8000/api/bears
// 	.get((req, res) => {
// 		mongo.connect(url, (err, db) => {
// 			if(err) throw err;
// 			let bears = db.collection('bears');
// 			bears.find().toArray((err, data) => {
// 				if(err) throw err;
// 				console.log(data);
// 				db.close();
// 			})
// 		})
// 	});

// curl -X GET http://localhost:8000/api/bears/Mikkel
// router.route('/bears/:name')
// 	.get((req, res) => {
// 		mongo.connect(url, (err, db) => {
// 			let bears = db.collection('bears');
// 			bears.find({
// 				name: req.params.name
// 			}).toArray((err, data) => {
// 				if(err) throw err;
// 				res.json(data)
// 			})
// 		})
// 	});

app.use('/api', router);
app.listen(port, () => {
	console.log('listening on', port);
});
