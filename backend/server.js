const winston = require("winston");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
//need a fix
app.use(cookieParser());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers");
// });

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Headers", "*");
// });

// app.use(cors({credentials: true, origin: "http://localhost:3000"}))

require("./startup/logging")();
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/config")();
require("./startup/validations")();

const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
