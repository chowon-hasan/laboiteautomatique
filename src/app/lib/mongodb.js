import { MongoClient } from "mongodb";

const uri = `mongodb+srv://clictrust2:R2goMYOyw3OVk7Fn@vba-laboiteautomatique.5j1p4.mongodb.net/?retryWrites=true&w=majority&appName=VBA-laboiteautomatique`;

let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect();
}

export default clientPromise;