const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/", (request, response)=>{
	response.render("index", {teste:"Garrafa Aggile"})
})


app.listen(3000, ()=>console.log("servidor ativo"))
module.exports = app
