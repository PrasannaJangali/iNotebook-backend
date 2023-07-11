const mongoose =require('mongoose');
const mongoURL="mongodb+srv://Prasanna:prasanna@cluster0.yxa40tq.mongodb.net/?retryWrites=true&w=majority";

const connecttoMongo=()=>{
    const ans=mongoose.connect(mongoURL);
    if(ans)
    console.log("Connected to MongoDB successfully");
    else
    console.log("error");
}
module.exports=connecttoMongo;
    