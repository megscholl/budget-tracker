
"use strict";

let $ = require('../lib/node_modules/jquery'),
    user = require('./user'),
    firebase = require('./firebasekey');


    // budget object

    $(document).on("click", "#save-btn", function() {
        console.log("save button clicked");
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
            url: `{firebase.getFBsettings().databaseURL}/income.json`,
            type: 'POST',
            data: JSON.stringify()
        });
    }

    