const User=require("../models/user");
const bcrypt=require("bcryptjs");
const createUser = async (req, res) => {
    const {Username,Email,Password} = req.body;
  
    try {
      const emailExists = await User.findOne({ Email });
      if (emailExists) {
        return res.status(400).json({ message: "User with this email already exists" });
      }
    
      const usernameExists = await User.findOne({ Username });
      if (usernameExists) {
        return res.status(400).json({ message: "User with this username already exists" });
      }

      const hashPassword=bcrypt.hashSync(Password);
      const user = new User({
        Username,
        Email,
        Password: hashPassword
      });
    
      await user.save();
      res.status(200).json({ message: "User created successfully" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

const checkUser = async (req, res) => {
    try {
      const { Email, Password } = req.body;
      if (!Email || !Password) {
        return res.status(400).json({ message: "Please provide all required fields" });
      }
      const users = await User.findOne({ Email });
      if (!users) {
        return res.status(400).json({ message: "No record existed" });
      }
      const isValidPassword = bcrypt.compareSync(Password, users.Password);
      if (!isValidPassword) {
        return res.status(400).json({ message: "The password is incorrect" });
      }
      // res.json({ message: "success" }); 
      const {...others}=users._doc; 
      res.status(200).json({others,
        msg:"success" 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  module.exports = { createUser,checkUser};