const { MongoClient, ServerApiVersion } = require("mongodb");

class Database {
  constructor() {
    this.db = null;
    this.run();
  }

  async run() {
    //connect database
    const uri =
      "mongodb+srv://ivatfadhlu:fRiIFiyWj32pBBsf@belajar-mongo.9oqymqj.mongodb.net/?retryWrites=true&w=majority";
    //mongo client
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    //Lakukan CRUD
    this.db = client.db("my-server").collection("posts");
  }
}

module.exports = Database;
