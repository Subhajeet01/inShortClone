import mongoose from 'mongoose'

const Connection = async () => {
  try {
    const url = `mongodb+srv://subhajeetdey:subhajeetdey@inshortsdb.vjaqt.mongodb.net/?retryWrites=true&w=majority`
    await mongoose.connect(
      url,
      { useNewUrlParser: true },
      console.log(`sever connected successfully`)
    )
  } catch (e) {
    console.log(`error while connecting to db`, e)
  }
}

export default Connection
