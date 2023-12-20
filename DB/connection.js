const mongoose = require('mongoose');
const connection_string = process.env.DB_CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB connected sucessfully with DC_server");
}).catch((err)=>{
    console.log(err);
})