const Record = require("../models/record");
const User = require("../models/user");


const createRecord = async (req, res) => {
    try { 
      const { Date, temparature,pressure,rate, id } = req.body;
      const existingUser = await User.findById(id);
      if (existingUser) {
        const record = new Record({ Date, temparature,pressure,rate, user: existingUser });
        await record.save().then(() => res.status(200).json({ record }));
        existingUser.record.push(record);
        existingUser.save();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateRecord = async (req, res) => {
    try {
      const {Date, temparature,pressure,rate, id } = req.body;
      const existingUser = await User.findById(id);
      if (existingUser) {
        const record = await Record.findByIdAndUpdate(
          req.params.id,
          { Date, temparature,pressure,rate },
          { new: true }
        );
        if (!record) {
          return res.status(404).json({ msg: "Record not found" });
        }
    
        res.status(200).json({ record });
      }
    } catch (e) {
      console.log(e); 
    }
  };
  const deleteRecord = async (req, res) => {
    try {
      const { id } = req.body;
      const existingUser = await User.findByIdAndUpdate(
         id ,
        { $pull: { record: req.params.id } }
      );
      if (existingUser) {
        await Record.findByIdAndDelete(req.params.id).then(() =>
          res.status(200).json({
            msg: "deleeted succesfully",
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  const getRecordById = async (req, res) => {
    const record= await Record.find({user:req.params.id}).sort({createdAt : -1});
    if(record.length!==0){
     res.status(200).json({record:record});
    }
    else{ 
     res.status(200).json({msg:"no records"});
    } 
 };

 const getRecord = async (req, res) => {
  const record= await Record.find().sort({createdAt : -1});
  if(record.length!==0){
   res.status(200).json({record:record});
  }
  else{ 
   res.status(200).json({msg:"no records"});
  } 
};
module.exports = { createRecord,updateRecord,getRecord,deleteRecord,getRecordById};
