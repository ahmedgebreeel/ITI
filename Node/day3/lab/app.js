const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 7000;



//#region ////middleware

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//#endregion

//#region /// get method
app.get("/",(req,res)=>{
    res.redirect("/main.html");
})
app.get("/main.html",(req,res)=>{
   res.sendFile(path.join(__dirname, "/client-side/main.html"));

})

app.get("/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname, "/client-side/style.css"));
})

app.post("/main.html",(req,res)=>{
    console.log(req.body);
    res.send(`Welcome ${req.body.name}! Your entered data is as follows:<br>
    Mobile Number: ${req.body.mobile}<br>
    Email: ${req.body.email}<br>
    Address: ${req.body.addr}`);
});

//#endregion




app.listen(port,()=>{console.log("http://localhost:" + port);});