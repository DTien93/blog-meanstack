const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//UPDATE
router.post("/:id", async (req, res) => {
    if (req.body.userId === req.params.id)
        if (req.body.password) {
            const salt = bcrypt.genSalt(10);
        }
        try {  
        } catch (err) {
            res.status(500).json(err);
        } else {
        res.status(401).json("User can update");
        }
});

module.exports = router;