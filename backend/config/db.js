require("dotenv").config();

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDb connection successful");
  } catch (error) {
    console.log(error, ":  MongoDb connection unsuccessful");
    // this returns the 'Uncaught Fatal Exception' node error response
    process.exit(1);
  }
};

module.exports = connectDb;
