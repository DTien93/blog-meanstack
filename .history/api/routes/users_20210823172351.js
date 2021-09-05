const router = require("express").Router();
const User = require("../models/User");


//UPDATE
router.post("/:id", async (req, res) => {
    if (req.body.userId === req.params.id)
        try {
            
        } catch (err) {
            res.status(500).json(err);
        } else {
            res.status(401)
        }
});

module.exports = router;