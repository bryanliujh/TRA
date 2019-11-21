/**
 * HTTP GET: Server responds with res.render(), send html page
 * HTTP POST: submits data with form, server does something with data e.g. update db, call res.redirect, client HTTP GET
 */

//All the require at the top?

const express = require("express");

const router = express.Router();
router.use(express.json());

const apiController = require("../controllers/apiController");
const { asyncErrorHandler } = require("../middlewares/asyncErrorHandler");
const { error400sHandler } = require("../middlewares/errorHandler");


router.get("/teachers", asyncErrorHandler(apiController.teachers));
router.get("/students", asyncErrorHandler(apiController.students));
//some html form method does not support put, post useful if know url
router.post("/register", asyncErrorHandler(apiController.register));
router.get("/commonstudents", asyncErrorHandler(apiController.commonStudents));
//put instead (update one contact) (idempotent as if we execute it 10 times (timeout) is the same as making it once, post is not idempotent )
//Whether to support creation via PUT depends on whether the client can specify a URI to a resource before it exists
router.post("/suspend", asyncErrorHandler(apiController.suspend));
//get instead
router.post(
  "/retrievefornotifications",
  asyncErrorHandler(apiController.retrieveForNotifications)
);

module.exports = app => {
  app.use("/api", router, error400sHandler);
};
