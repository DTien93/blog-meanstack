const router = require("express").Router();
const User = require("../models/User");


//UPDATE
router.post("/:id", async (req, res) => {
  try {
  
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;