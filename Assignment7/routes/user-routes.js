const express = require('express');

const userController = require('../controllers/user-controller');
const checkAuth = require('../middlewares/check-auth');
const router = express.Router();

router.post("/signup",  userController.userSignup);
router.post("/login", userController.userLogin);

router.use(checkAuth);

//GET USER
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/getInfo/:userName", userController.userInfo);
router.post("/createPost", userController.createPost);

module.exports = router;