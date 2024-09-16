const express=require("express");
const userController=require("../Controllers/userController");

const userRouter=express.Router();

userRouter.post("/createuser",userController.createUser);
userRouter.post("/checkuser",userController.checkUser);

module.exports=userRouter;