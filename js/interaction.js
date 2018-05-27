
"use strict";

let $ = require('../lib/node_modules/jquery'),
    user = require('./user'),
    firebase = require('./firebasekey');


    // budget object

    $(document).on("click", "#save-btn", function() {
        console.log("save button clicked");
        addBudgetObj();
    });

    function buildBudgetObject() {
        let budgetObject = {
            date: $("#date").val(),
            job: $("#job").val(),
            income: $("#income").val()
        };
        console.log("date, job, income", budgetObject.date, budgetObject.job, budgetObject.income);
        return budgetObject;
    }

    //post budget to firebase

    function addBudgetObj() {
        return $.ajax({
            user: user.uid,
            url: `{firebase.getFBsettings().databaseURL}/income.json`,
            type: 'POST',
            data: JSON.stringify()
        });
    }
    

//////////////////////////////
/////// LOGIN TO TEND ////////
//////////////////////////////

    $('#login-btn').click(() => {
        console.log("login button pressed");
        // userProfile();
    });

    
//////////////////////////////
// BUILD A USER INTO FIREBASE
//////////////////////////////

// USER OBJECT FOR FIREBASE 
let buildUserObject = (userName, userID, photoURL) => {
    let userObject = {
        Name: userName, 
        uid: userID,
        photo: photoURL
    };
    console.log(userObject);
    return userObject;
};


// ADDS USER TO FIREBASE
function addUser(userObject) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/users.json`,
      type: 'PUT',
      data: JSON.stringify(userObject),
      dataType: 'json'
    }).done((userID) => {
      return userID;
    });
  }
  // POST - Submits data to be processed to a specified resource. Takes one parameter.


  module.exports = {buildUserObject, addUser, buildBudgetObject, addBudgetObj};