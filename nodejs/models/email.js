'use strict';

const firebase = require("firebase");

// Initialize Firebase

var config = {
	apiKey: "AIzaSyBFl2Lre7t7u-8cwtYUu0k3gjrD0iQ3cWs",
	authDomain: "friendlychat-61656.firebaseapp.com",
	databaseURL: "https://friendlychat-61656.firebaseio.com",
	storageBucket: "friendlychat-61656.appspot.com",
	messagingSenderId: "493931773012"
};

firebase.initializeApp(config);

module.exports = class Email {
	constructor() {
		this.db = firebase.database();
		this.ref = this.db.ref('/friendlychat-61656/');
	}

	 composeEmail(email) {
		return new Promise((resolve, reject) => {
			this.ref.child('emails').push().set(e, (error) => {
				if(error) reject(error);
				resolve(email);
			})
		})
	}
};
