const express = require("express");
const app = express();

app.use('/',(req,res)=>{
    res.send("Hello new world")
});

app.listen(2000, () => {
    console.log("Run....");
  });
  