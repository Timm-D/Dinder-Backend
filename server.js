const express = require("express")
const mongoose = require("mongoose")
const app = express()


const uri = "mongodb+srv://Tim:Dinder123@dinder.3ntspee.mongodb.net/test"

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}
connect();


app.listen(9090, ()=> {
    console.log("Connected to port 9090")
})