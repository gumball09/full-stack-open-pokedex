const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// MAKE THE SURE THE APPLICATION IS UP AND RUNNING AFTER DEPLOYMENT
// Health check
app.get('/health', (_, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
