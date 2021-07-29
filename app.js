const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// MAKE THE SURE THE APPLICATION IS UP AND RUNNING AFTER DEPLOYMENT
// Health check
app.get('/health', (_, res) => {
  res.send('<h1>Health is ok!</h1>')
})

app.get('/version', (req, res) => {
  res.send('<h1>Version 5</h1>')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
