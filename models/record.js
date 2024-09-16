const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
  {
    Date: {
      type: Date,
      required: true,
    },
    temparature: {
      type: Number,
      required: true,
    },
    pressure:{
      type:Number,
      required: true,
    },
    rate:{
        type:Number,
        required: true,
    },
    user: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true, Collection: "record" }
);

module.exports = mongoose.model("record", recordSchema);
