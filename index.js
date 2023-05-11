//1.importing express
const express = require("express");

//2.init installation
const app =new express();

app.use(express.urlencoded({extened:true}));
app.use(express.json());
//3. Api creation
app.get('/',(req,res) => {
    res.json("Hey where are you")
})

app.post('/sign',(req,res) =>{
    res.send(`abc ${req.body.name}`)
})

//4.setting port
app.listen(3005,()=>{
    console.log("port 3005 is running");

})
