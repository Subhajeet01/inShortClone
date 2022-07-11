import express from 'express'
import { getNews } from '../controllers/newsController.js'

const route = express.Router()

route.get('/news', getNews)

export default route
