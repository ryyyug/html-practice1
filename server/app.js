const express = require("express")
const path = require("path")
const app = express()
const port = 3000

// app.get("/", (req, res) => {
//   res.send("Hello")
// })
app.use("/html-practice1", express.static(path.resolve(__dirname, "../docs")))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})