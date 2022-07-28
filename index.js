const port = process.env.PORT || 3001;
const cors = require('cors')
const app = express();
const server = require('./src/app.js')

app.use(cors())

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
