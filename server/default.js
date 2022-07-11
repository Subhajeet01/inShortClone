import News from './modal/news.js'
import { data } from './constants/data.js'

const defaultData = async () => {
  try {
    await News.deleteMany({})
    await News.insertMany(data)
    console.log('data imported successfully')
  } catch (e) {
    console.log('error : ', e.message)
  }
}

export default defaultData
