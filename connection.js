/* this code sets up the environment to establish a connection with the MongoDB database using Mongoose and the mongodb package. It loads the environment variables using dotenv, retrieves the MongoDB URI from the environment variables, and defines a function to connect to the MongoDB database. */



// Require the dotenv library to load environment variables from the .env file
require("dotenv").config();  
const { MongoClient } = require("mongodb");


// Require the Mongoose library for object modeling with MongoDB
let mongoose = require("mongoose");
// Set the strictQuery option to true for Mongoose to enforce strict mode when executing queries
mongoose.set("strictQuery", true);

// Get the MongoDB URI from the environment variables (.env ) file and named is as a mongoURI 
//and process.env is a method to access variables from .env file 
const URI = process.env.MONGOURI;
// const URI = "mongodb://localhost:27017/bookMovie" + "bookMovie"

// Defining the function to connect to the mongodb database 
const connectToMongo = async () => {
  // Use Mongoose to connect to the MongoDB database using the URI and options
  // mongoose.connect method is used to establish a connection with the MongoDB server using the URI and options.
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
       // If the connection is successful, log a message
      console.log("connection established with mongodb server");
    })
    .catch((err) => {
       // If there is an error, log the error message
      console.log("error while connection", err);
      
    });
};
// Export the connectToMongo function for use in other files
exports.connection = connectToMongo;
