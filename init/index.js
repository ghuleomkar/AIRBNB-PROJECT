const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/AirBNB";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: '67faae3d66ffd194499efca1',
    geometry: {
      type: "Point",
      coordinates: [77.1025, 28.7041], // change as needed
    }
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
