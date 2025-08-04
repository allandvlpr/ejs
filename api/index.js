/*const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/", (request, response)=>{
	response.render("index", {teste:"Garrafa Aggile"})
})


app.listen(3000, ()=>console.log("servidor ativo"))
module.exports = app*/


const express = require("express");
//const bodyParser = require("body-parser")

const app = express();


app.get("/", (req, res) => res.send("Express on Vercel"));



app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
