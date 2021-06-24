const express = require("express");
const path = require("path");
require("./api/data/dbconnection").open();

const rounter = require("./api/routes");

const app = express();

app.set("port", 3000);

app.use(function(request, response, next) {
    console.log(request.methos, request.url);
    next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use("/api", rounter);

const server = app.listen(app.get("port"), function() {
    console.log("Listening to port ", server.address().port)
})
