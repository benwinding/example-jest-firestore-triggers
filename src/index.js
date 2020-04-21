const { getApp } = require("./db");
const functions = require("firebase-functions");

const db = getApp().firestore();

exports.testtrigger = functions.firestore
  .document("posts/{doc}")
  .onCreate((change, context) => {
    console.log("!!! Triggered added post 'onCreate' !!!");
    return db.collection("stats").add({ title: "trigger works!" });
  });
