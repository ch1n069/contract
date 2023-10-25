const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const universityRoute = require("./route/university");
const contractRoute = require("./route/contract");
const courseRoute = require("./route/course");
const commissionRateRoute = require("./route/commissionRate");
const associationRoute = require("./route/associationTest");
const mockStudentsRouter = require("./route/studentsMock");
const projectionRoute = require("./route/projections");
const registrationRoute = require("./route/auth");
const roleRoute = require("./route/role");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", universityRoute);
app.use("/api/v1", contractRoute);
app.use("/api/v1", courseRoute);
app.use("/api/v1", commissionRateRoute);
app.use("/api/v1", associationRoute);
app.use("/api/v1", mockStudentsRouter);
app.use("/api/v1", projectionRoute);
app.use("/api/v1", registrationRoute);
app.use("/api/v1", roleRoute);

module.exports = app;
