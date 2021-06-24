const dbConnection = require("../data/dbconnection");
const ObjectID = require("mongodb").ObjectID;

module.exports.gamesGetAll = function(request, response) {
    console.log("GET all games");
    console.log(request.query);

    let offset = 0;
    let count = 4;

    if(request.query && request.query.offset) {
        offset = parseInt(request.query.offset);
    }

    if(request.query && request.query.count) {
        count = parseInt(request.query.count)
        if(count > 8) {
            count = 8;
        }
    }

    console.log("offset ", offset, " count ", count);

    const db = dbConnection.get();
    const collection = db.collection("games");

    collection.find().skip(offset).limit(count).toArray(function(err, docs) {
        console.log("Found Games ", docs);
        response.status(200).json(docs);
    });
}