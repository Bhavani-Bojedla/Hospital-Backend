const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    Username: {
        type: String,
        unique: true,
        required: true,
      },
      Email: {
        type: String,
        required: true,
        unique: true,
      },
      Password: {
        type: String,
        required: true,
      },
    record:[{
        type:mongoose.Types.ObjectId,
        ref:"record"
    }]
},
  {Collection:"users"})

module.exports=mongoose.model("users",userSchema)