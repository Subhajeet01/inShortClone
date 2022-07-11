import express from 'express'
import route from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

// components
import Connection from './Connection/db.js'
import defaultData from './default.js'

const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use('/', route)

Connection()
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
defaultData()
