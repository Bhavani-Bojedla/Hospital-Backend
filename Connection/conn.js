const mongoose=require('mongoose');

const dbconnect=async ()=>{
      try{
        await mongoose.connect("mongodb+srv://admin:T87Ku3cJmHZ8JX0p@cluster0.zbicutx.mongodb.net/Hospital")
        .then(()=>{
          console.log("connected to db")
        })
      }
      catch(e){
           res.status(400).json({
            msg:"not connected"
           })
      }
}

dbconnect();