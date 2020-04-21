const admin = require("firebase-admin");
const firebaseTesting = require("@firebase/testing");
const serviceAccount = require("../serviceAccountKey.json");
const projectId = "testdb";

exports.getApp = function () {
  process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
  process.env.FIREBASE_FIRESTORE_EMULATOR_ADDRESS = "localhost:8080";
  admin
    .initializeApp({
      // projectId: projectId,
      credential: admin.credential.cert(serviceAccount),
      // credential: admin.credential.applicationDefault(),
    });
  return admin.app();
};

exports.getTestDb = function () {
  const db = firebaseTesting.initializeAdminApp({
    projectId: projectId,
    databaseName: 'mydb'
  }).firestore();
  db.settings({
    host: "localhost:8080",
    ssl: false
  })
  return db;
}

exports.getTestClientDb = function () {
  process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
  const db = firebaseTesting.initializeTestApp({
    projectId: projectId,
    auth: { uid: "alice", email: "alice@example.com" }
  }).firestore();
  return db;
}

exports.clearDb = async function () {
  return firebaseTesting.clearFirestoreData({ projectId: projectId });
};
