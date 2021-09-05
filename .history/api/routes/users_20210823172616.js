const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//UPDATE
router.post("/:id", async (req, res) => {
    if (req.body.userId === req.params.id)
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password);
        }
        try {  
        } catch (err) {
            res.status(500).json(err);
        } else {
        res.status(401).json("User can update");
        }
});

module.exports = router;