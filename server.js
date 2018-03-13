var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://admin:admin@cluster0-oqh4b.mongodb.net";
MongoClient.connect(uri, function(err, client) {
    if (err) throw err;
    console.log("connected!!");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    const collection = client.db("test").collection("devices");
    //collection.insertOne(myobj, function(err, res) {
      //  if (err) throw err;
        //console.log("1 document inserted");
    //});

    collection.findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
      });
    // perform actions on the collection object
    client.close();
});