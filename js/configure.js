"use strict";

let firebase = require("firebase/app"),
    fb = require("./firebaseKey"),
    fbData = fb(), //running the fb file, containing what's inside fb-key
    auth = require("firebase/auth"),
    db = require("firebase/database");

var config = {
  apiKey: fbData.apiKey,
  authDomain: fbData.authDomain,
  databaseURL: fbData.databaseURL
};


firebase.getFBsettings = function(){
  // console.log("get FB Settings", getFBSettings);
	 return config;
};

firebase.initializeApp(config);
module.exports = firebase;
