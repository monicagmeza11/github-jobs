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

app.get('/api/jobs/filterByKeyWord/:keyword', (request, response) =>{
  const keyword = request.params.keyword
  const filterList = dataJobs.filter(job => (job.type.toLowerCase() === keyword.toLowerCase() ||
   job.company.toLowerCase() === keyword.toLowerCase()))
  response.json(filterList)
})

app.listen(PORT, ()=>{
  console.log('la app está corriendo', PORT)
})
