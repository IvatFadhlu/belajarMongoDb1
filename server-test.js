const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ivatfadhlu:fRiIFiyWj32pBBsf@belajar-mongo.9oqymqj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    //Lakukan CRUD
    const db = client.db("my-server").collection("data");

    //1.Create/Insert Data
    // await db.collection('data').insertOne({ nama: "Ivat", alamat: "Bekasi"})
    // await db.collection('data').insertMany([{ nama: 'kevin', alamat: 'jakarta'}, {nama: 'julian', alamat: 'land of dawn'}])

    //2.Read/Search Data
    const data = await db.find({ nama: { $regex: /.*kev.*/i } }).toArray();
    console.log(data);

    //3.Update Data
    // await db.updateOne({ nama : 'ivat'}, { $set: { alamat: 'bekasi utara'}})

    //4.Delete Data
    await db.deleteOne({ nama: "julian" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
