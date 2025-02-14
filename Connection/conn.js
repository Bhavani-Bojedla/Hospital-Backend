const mongoose=require('mongoose');

const dbconnect=async ()=>{
      try{
        await mongoose.connect("mongodb+srv://admin:Py6CUFdbc2Rs7H1B@cluster0.zbicutx.mongodb.net/Hospital")
        .then(()=>{
          console.log("connected to db")
        })
      }
      catch(e){
          console.log(e)
      }
}

dbconnect();