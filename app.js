const express = require("express")
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const app = express()
const cors = require('cors')
app.use(cors())

mongoose.connect('mongodb://admin:admin123@ds127995.mlab.com:27995/pazzle-db',{ useNewUrlParser: true })
  .then(() => console.log("MongoDB has been connected"))
  .catch(err => console.error(err))


const sectionRouter = require('./routers/sections.js')
const articleRouter = require('./routers/articles.js')
app.use("/api/sectionManagement",sectionRouter)
app.use("/api/articleManagement",articleRouter)

app.listen(port,() => {
  console.log(`Server has been started on the port ${port}`)
})
