const app = require('./App')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Mentoring API listening at http://localhost:${port}`)
})
