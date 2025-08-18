import mongoose from "mongoose";


const connection_url = 'mongodb+srv://MungPick:mungpick123@app.kjht6xp.mongodb.net/mungpick?retryWrites=true&w=majority';
const connect = () => {
  // 배포환경이 아니라면
  if(process.env.NODE_ENV !== "production"){
    mongoose.set("debug", true);
  }

  mongoose
    .connect(connection_url, {
      dbName : "mungpick" 
    })
    .then(() => {
      console.log('Connected to MongoDB!😎')
    })
    .catch((err) => {
      console.error("Connected fail to MongoDB!")
      console.error(err)
    })

}

export default connect;