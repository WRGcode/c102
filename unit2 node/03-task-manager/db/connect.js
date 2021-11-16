const mongoose = require("mongoose");

const connectDB =  (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("connected to DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

//how to visalize mongo DB

/*cluster => whole library => NYC library
   


*/
