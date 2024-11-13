const server = require("express")
const app = server()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose")
const mongodb_uri = process.env.URI
const cors = require('cors')
const bodyparser = require("body-parser")
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


mongoose.connect(mongodb_uri) 
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    })

const nigerianFood = [

    {
        name: "Amala",
        description: "A popular Nigerian food made from cornmeal",
        price: 200,
        image: "https://res.cloudinary.com/dk2wqgk0e/image/upload/v1688398402/Amala_1_lqk8xq.jpg"
    },
    {
        name: "Eba",
        description: "A popular Nigerian food made from cassava flour",
        price: 150,
        image: "https://res.cloudinary.com/dk2wqgk0e/image/upload/v1688398402/Eba_1_rj1z3w.jpg"
    },
    {
        name: "Fufu",
        description: "A popular Nigerian food made from cassava flour",
        price: 100,
        image: "https://res.cloudinary.com/dk2wqgk0e/image/upload/v1688398402/Fufu_1_t0xg2n.jpg"
    }
]
let userSchema = mongoose.Schema({
    item: String,
})

let userModel =   mongoose.model("User", userSchema)

app.get("/home", (req, res) => {
    res.send(nigerianFood)
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    const form = new userModel(req.body)
    form.save()
})


app.listen(PORT, () => {

    console.log(`server is on ${PORT}`);
    
})