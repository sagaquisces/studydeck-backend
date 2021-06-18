const jsonServer = require('json-server')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(cors())
server.use(jsonServer.bodyParser)

// access the lowdb instance from router
const { db } = router

db._.createId = () => uuidv4()

server.use(middlewares)
server.use('/api', router)

server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`)
})