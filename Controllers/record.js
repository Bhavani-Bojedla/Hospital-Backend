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
      const recordId = req.params.id;
      const existingUser = await User.findOneAndUpdate(
        { 'record': recordId },
        { $pull: { record: recordId } }
      );
      if (existingUser) {
        await Record.findByIdAndDelete(recordId);
        res.status(200).json({ msg: "Deleted successfully" });
      } else {
        res.status(404).json({ msg: "Record not found for deletion" });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: "Server error" });
    }
  };
  
 const getRecordById = async (req, res) => {
  const record = await Record.findById(req.params.id);
  if (record) {
    res.status(200).json({ record });
  } else {
    res.status(404).json({ msg: "Record not found" });
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
