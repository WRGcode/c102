const app = require("express")();
const express = require("express");
const next = require("next");
const { connentDB } = require("./server/util/connect");
require("dotenv").config();

//! create a check for develment vs production
const dev = process.env.NODE_ENV !== "production";

const PORT = process.env.PORT || 3000;

//! there are giant error warnings that pop up when in dev
const nextApp = next({ dev });

//! the is a built in next hander that will handle ALL request made to the server
const handler = nextApp.getRequestHandler();

//*routers
const signupRoute = require("./pages/api/v1/signup")

app.use(express.json());
connentDB();

nextApp.prepare().then(() => {
//* ROUTING
app.use("/api/v1/signup/:username", signupRoute)


  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`server is listening @ ${PORT}`);
  });
});
