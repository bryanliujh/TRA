const express = require("express");

const index = require("./routers/index");
const api = require("./routers/api");
const setupTestDB = require("./setupDb");
const { errorHandler } = require("./middlewares/errorHandler");
const apiController = require("./controllers/apiController");

const app = express();

if (process.env.NODE_ENV === "development") {
  setupTestDB();
}
//use gzip compression
app.use(express.json());

index(app);
api(app);
app.use(errorHandler);

module.exports = app;
