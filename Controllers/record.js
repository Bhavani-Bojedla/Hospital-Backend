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

const getRecordsForUser = async (req, res) => {
  try {
    const userId = req.query.userId; // Get userId from query parameters
    if (!userId) {
      return res.status(400).json({ msg: "User ID is required" });
    }
    const records = await Record.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json({ records });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Server error" });
  }
};
module.exports = { createRecord,updateRecord,getRecordsForUser,deleteRecord,getRecordById};
