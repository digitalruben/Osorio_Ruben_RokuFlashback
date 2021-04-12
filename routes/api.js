const express = require('express');


const router = express.Router();


router.get("/", (req, res) => {


    res.json({message: "you hit the api route"});
});

router.get("/users", (req, res) => {



    res.json({message: "all users route"});
})


module.exports = router;