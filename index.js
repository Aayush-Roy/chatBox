const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const app = express();
main()
.then((res)=>console.log("connected")).catch((err)=>console.log(err));
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
// let chat1 = new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me your exam sheets",
//     created_at:new Date(),
// });
// chat1.save().then((res)=>{
//     console.log(res);
// });
app.set("views",path.join(__dirname,"views"))
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))//parse the form data
app.listen(8080,()=>{
    console.log(`app listening on port`);
})
app.get("/",(req,res)=>{
    res.send("welcome");
})
// INDEX ROUTE
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index",{chats})
})
// NEW ROUTE
app.get("/chats/new",(req,res)=>{
    res.render("new");
})
// CREATE ROUTE 
app.post("/chats",(req,res)=>{
    let {from,msg,to} = req.body;
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });
    newChat.save().then((res)=>console.log("chat saved")).catch((err)=>console.log(err));
    res.redirect("/chats");
})

// EDIT ROUTE
app.get('/chats/:id/edit',async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit",{chat})
});
// UPDATED ROUTE
// app.put("/chats/:id",async (req,res)=>{
//     let {id} = req.params;
//     let {newMsg} = req.body;
//     let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true},{new:true});
//     console.log(updatedChat);
//     res.redirect("/chats");
// })
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { newMsg } = req.body;
    console.log(`Updating chat with ID: ${id} and new message: ${newMsg}`);
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
});
app.delete('/chats/:id',async (req,res)=>{
    let {id} = req.params;
    let delChat = await Chat.findByIdAndDelete(id);
    console.log(delChat);
    res.redirect("/chats");
});