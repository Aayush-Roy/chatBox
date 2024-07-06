const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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
let allCharts = [
    {
        from:"neha",
        to:"priya",
        msg:"send me your exam sheets",
        created_at:new Date(),
    },
    {
        from:"alpha",
        to:"beta",
        msg:"hello, how are you",
        created_at:new Date(),
    },
    {
        from:"Adam",
        to:"Eve",
        msg:"What's goinf on",
        created_at:new Date(),
    },
    {
        from:"steve",
        to:"marky",
        msg:"let' play minecraft together",
        created_at:new Date(),
    },
]
Chat.insertMany(allCharts);