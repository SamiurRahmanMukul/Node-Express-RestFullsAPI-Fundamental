var MongoClient = require("mongodb").MongoClient;

var URL =
  "mongodb+srv://mongodbaccess:3eNEii5hpxDhrbU0@cluster0.obmk2.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, myMongoClient) {
  if (error) {
    console.log("Connection Fail.");
    console.log(error);
  } else {
    console.log("Connection Successful.");
    // InsertData(myMongoClient); // TODO: data insert method call
    // DeleteOneItem(myMongoClient); // TODO: single data delete method call
    // DeleteAllItem(myMongoClient); // TODO: delete all data
    // FindOneItem(myMongoClient); // TODO: find single item
    // FindAllItem(myMongoClient); // TODO: find all item
    // FindAllDataByProjection(myMongoClient); // TODO: find all data using projection
    // FindAllDataByQuey(myMongoClient); // TODO: find all data by query
    // FindAllDataByLimit(myMongoClient); // TODO: find all data by limit
    // FindAllDataBySort(myMongoClient); // TODO: data sorted
    // updateData(myMongoClient); // TODO: update data
    // createNewCollection(myMongoClient); // TODO: create a new collection
    // dropCollection(myMongoClient); // TODO: drop a collection
  }
});

// TODO-1: create a Insert data function =>
function InsertData(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  var myData = [
    { Name: "Mukul", Roll: "001", Class: "Graduate", City: "Mymensingh" },
    { Name: "Alam", Roll: "002", Class: "Graduate", City: "Mymensingh" },
    { Name: "Arif", Roll: "003", Class: "Graduate", City: "Mymensingh" },
    { Name: "Mostofa", Roll: "004", Class: "Graduate", City: "Mymensingh" },
    { Name: "Mehedi", Roll: "005", Class: "Graduate", City: "Mymensingh" },
  ];

  myCollection.insertOne(myData[4], function (error) {
    if (error) {
      console.log("Data Insert Fail => " + error);
    } else {
      console.log("Data Insert Success.");
    }
  });
}

// TODO-2: create a DeleteItem data function =>
function DeleteOneItem(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  var deleteItem = { Roll: "001" };
  myCollection.deleteOne(deleteItem, function (error) {
    if (error) {
      console.log("Data Delete Fail => " + error);
    } else {
      console.log("Data Delete Success.");
    }
  });
}

// TODO-3: create a DeleteAllItem data function =>
function DeleteAllItem(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  myCollection.deleteMany(function (error, resultObj) {
    if (error) {
      console.log("Delete All Data Fail => " + error);
    } else {
      console.log("Delete All Data Success => " + resultObj);
    }
  });
}

// TODO-4: create a FindOneItem data function =>
function FindOneItem(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  // var findObj = {}; // TODO: find data without condition
  var findObj = { Roll: "001" }; // TODO: find data using condition

  myCollection.findOne(findObj, (error, result) => {
    if (error) {
      console.log("Data Find Fail => Error: " + error);
    } else {
      console.log("Data Find Success => ");
      console.log(result);
    }
  });
}

// TODO-5: create a FindOneItem data function =>
const FindAllItem = (myMongoClient) => {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  // TODO: not this using this type ... find using array method =>
  /* myCollection.find((error, result) => {
    if (error) {
      console.log("All Data Find Fail => ");
      console.log(error);
    } else {
      console.log("All Data Find Success => ");
      console.log(result);
    }
  }); */

  // TODO: find using array method =>
  myCollection.find().toArray((error, result) => {
    if (error) {
      console.log("All Data Find Fail => ");
      console.log(error);
    } else {
      console.log("All Data Find Success => ");
      console.log(result);
    }
  });
};

// TODO-6: find data using projection method =>
const FindAllDataByProjection = (myMongoClient) => {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  var itemObj = {};
  var ItemProjection = { projection: { Class: "", Roll: "" } };

  myCollection.find(itemObj, ItemProjection).toArray((error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};

// TODO-7: find data using query method =>
const FindAllDataByQuey = (myMongoClient) => {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  // var query = {City:"Dhaka"};
  var query = { Roll: "1", City: "Dhaka" }; // TODO: double condition check

  myCollection.find(query).toArray((error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};

// TODO-7: find data using limit method =>
const FindAllDataByLimit = (myMongoClient) => {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  myCollection
    .find()
    .limit()
    .toArray((error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
};

// TODO-8: sorting data function create =>
function FindAllDataBySort(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  // sorted pattern create
  var sortPattern = { Roll: 1 }; // accessing to descending sort
  var sortPattern = { Roll: -1 }; // descending to accessing sort

  myCollection
    .find()
    .sort(sortPattern)
    .toArray((error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
}

// TODO-9: update data function create =>
function updateData(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  var myCollection = myDatabase.collection("student");

  var myQuery = { Roll: "004" };
  var myNewValue = { $set: { Name: "Shakil", City: "Dhaka" } };

  myCollection.updateOne(myQuery, myCollection, (e, r) => {
    if (e) {
      console.log(e);
    } else {
      console.log(r);
    }
  });
}

// TODO-10: create a new collection function =>
function createNewCollection(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  myDatabase.createCollection("teacher", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
}

// TODO-10: create drop a collection function =>
function dropCollection(myMongoClient) {
  var myDatabase = myMongoClient.db("school");
  myDatabase.dropCollection("teacher", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
}
