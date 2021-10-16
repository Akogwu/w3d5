const express = require('express');
const path = require('path');
const app = express();
const redirectUrl = require('url');


app.use(express.urlencoded({extended:false}));

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./","public","form.html"));
})

app.post("/result",function(req,res){
    let {name,age} = req.body;
    console.log(name,age);
    if(name === "") name = "Person";
    if(age ==="") age = "NA";
    res.redirectUrl(url.format({
        pathname: '/output',
        query: { name, age }
    }));
});

app.listen(3000,function(){
    console.log("Now Listening for request on port 3000");
});