const port = process.env.PORT || 3001;
const cors = require('cors')

const server = require('./src/app.js')



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
