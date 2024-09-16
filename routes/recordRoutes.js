const express = require("express");
const recordRouter = express.Router();

const recordController = require("../Controllers/record");

recordRouter.post("/createrecord", recordController.createRecord);
recordRouter.put("/updaterecord/:id", recordController.updateRecord);
recordRouter.delete("/deleterecord/:id",recordController.deleteRecord);
recordRouter.get("/getrecord/:id",recordController.getRecordById);
recordRouter.get("/getrecord",recordController.getRecord);

module.exports = recordRouter;
