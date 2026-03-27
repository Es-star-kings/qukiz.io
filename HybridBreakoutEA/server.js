const express = require("express")
const fs = require("fs")
const { v4: uuidv4 } = require("uuid")
const nodemailer = require("nodemailer")

const app = express()

app.use(express.json())

// License file
const LICENSE_FILE = "licenses.json"

// Create license
function generateLicense(){

return "HYB-" + uuidv4().split("-")[0].toUpperCase()

}

// Purchase endpoint
app.post("/buy",(req,res)=>{

const license = generateLicense()

let licenses = []

if(fs.existsSync(LICENSE_FILE)){

licenses = JSON.parse(fs.readFileSync(LICENSE_FILE))

}

licenses.push({license})

fs.writeFileSync(LICENSE_FILE,JSON.stringify(licenses))

sendEmail(req.body.email,license)

res.json({
success:true,
license
})

})


// Email system
function sendEmail(email,license){

let transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:"youremail@gmail.com",
pass:"yourapppassword"
}

})

let mailOptions = {

from:"HybridBreakoutEA",

to:email,

subject:"Your EA License",

text:`Your license key is: ${license}

Download your EA here:
https://yoursite.com/downloads/HybridBreakoutEA.ex5`
}

transporter.sendMail(mailOptions)

}

app.listen(3000,()=>{

console.log("Server running")

})