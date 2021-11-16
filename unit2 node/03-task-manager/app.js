const express = require("express");
const app = express();
require('dotenv').config()
const taskRoute = require("./routes/tasksRoute");
const connect = require('./db/connect')

app
  //declaring html/css diretory
  .use(express.static("./public"))

  //middleware
  .use([express.urlencoded({ extended: false }), express.json()])

  //routes
  .use("/api/v1/tasks", taskRoute)
  //listen

  //COnnect us to the DB 
  //Then on success we spin up the server
  const startServer = async() => {
    try{
      await connect(process.env.MONGO_URL)
      
      app.listen(3000, () => console.log("server is listen to 3000"));
    }catch(err){
      console.log(err);
    }
  }

  startServer()

