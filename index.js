const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

var dataJobs = require('./jobs.json')

const PORT = process.env.PORT || 3001



app.get('/api/jobs', (request, response) =>{
  response.json(dataJobs)
})

app.listen(PORT, ()=>{
  console.log('la app está corriendo', PORT)
})
