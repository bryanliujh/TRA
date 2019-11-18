//This is the main class for the overall program 
//The class will read the environment variable using the dotenv library from github
//This is the class where the port will be assigned to
//More configurations will be added in the future
require("dotenv").config();
const apiController = require("./controllers/apiController");

const app = require("./index"); 
const port = 4000; //The port will be used

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //The log message will be displayed after successful initilaization 
