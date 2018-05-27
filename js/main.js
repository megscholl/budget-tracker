"use strict";

let $ = require('../lib/node_modules/jquery'),
login = require('./user'),
configure = require('./configure'), 
interaction = require('./interaction');


let userID = "";
let userImage = "";

function checkUserFB(uid){
  getFBDetails(uid)
  .then((result) => {
      console.log(result);
      let data = Object.values(result);
       if (data.length === 0){
          interaction.addUser(interaction.buildUserObj(result.user.uid))
           .then((result) => {
           });
       }
  });
}

$("#login-btn").click(function() {
    console.log("Login button has been clicked");
    login.logInGoogle()
    .then((result) => {
console.log("result: ", result);

      getFBDetails(result.user.uid).then((kickback) => {
        // console.log("kickback: ", kickback);
        let kickbackUser = Object.values(kickback);
        // console.log("kickbackUser: ", kickbackUser);

        if(kickbackUser.length === 0) {
             interaction.addUser(interaction.buildUserObject(result.user.displayName, result.user.uid, result.user.photoURL));
             login.setUser(result.user.uid);
             userID = result.user.uid;
             userImage = result.user.photoURL;
            //    console.log("login setUser: ", userID);
            console.log("login user photo url", userImage);
            //  $("#login-btn").addClass("d-none");
        } 
        else{
          console.log("kickbackUser not 0");
        }
      });

      });
    });

    $(document).on("click", "#logout", ()=> {
        // console.log("logout clicked");
        login.logOut();
        // console.log("logged out?", userID);
        $("#login-btn").removeClass("d-none");
        $("#logout").addClass("d-none");
      });


      function getFBDetails(user){
        return $.ajax({
            url: `${configure.getFBsettings().databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`
         }).done((resolve) => {
            return resolve;
         }).fail((error) => {
            return error;
         });
      }