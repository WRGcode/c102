//create 2 routas
    //1 for /dashboard GET
    //1 for /login POST

const express = require("express");
const router = express.Router()

// const {Router : router} = require("express")
const { login, dashboard } = require("../controllers/login")

const authMiddlewere = require('../middleware/auth')

router.route('/dashboard').get(authMiddlewere, dashboard)
router.route('/login').post(login)

module.exports = router