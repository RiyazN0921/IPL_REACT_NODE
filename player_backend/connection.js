const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://alhanhussain75:alhan@cluster0.ln1rnm1.mongodb.net/";


const connection = async ()=>{
    const client = new MongoClient(uri)
    await client.connect();
    return client
}
module.exports={
    connection,
}