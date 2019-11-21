const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

//code should not be on same line
router.use(express.json()); router.get("/", indexController.showHomepage);

module.exports = app => {
  app.use("/", router);
};
