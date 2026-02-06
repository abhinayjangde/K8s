import express from "express"
import os from "os"
const app = express()
const port = 4000


app.get("/", (req, res)=>{
   const podName = os.hostname(); 
    res.status(200).json({
        "status": "ok",
        "ip": req.ip,
        "podName": podName
    })
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})