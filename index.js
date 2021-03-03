const express=require("express")
app=express()
app.listen(3000,()=>
{
    console.log("server started");
})
app.get("/",(req,res)=>
{
res.send("WElcome FUn ");
})