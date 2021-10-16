const express = require('express');

const app = express();


app.get('/',function(req,res){
    let name = req.query.name;
    let age = req.query.age;
    if(!name) name = "Person";
    if(!age) age = "NA";

    res.send(`Welcome ${name} with age ${age}`);
})

app.listen("3000",()=>{
    console.log("Now Listening for request on port 3000");
});

