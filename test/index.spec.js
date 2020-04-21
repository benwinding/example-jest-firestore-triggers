/*
 * @jest-environment node
 */

const { clearDb, getApp } = require("../src/db");

const sleep = (milli) => new Promise((res) => setTimeout(res, milli));

describe("Test", () => {
  beforeEach(async () => {
    await clearDb();
  });

  test("Add Crew Members", async function () {
    const db = getApp().firestore();
    console.log("adding to collection");
    await db.collection("posts").add({ title: "New Post" });
    await sleep(5000);
    console.log("checking collection");
    const postCount = (await db.collection("posts").get()).docs.length;
    expect(postCount).toBe(1);
    const statsCount = (await db.collection("stats").get()).docs.length;
    expect(statsCount).toBe(1);
  }, 10000);
});
