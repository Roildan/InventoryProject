//////////////////////
///  NPM INSTALL   ///   --save
//////////////////////
//   express                 --> Always
//   ejs                     --> Always
//   request                 --> For making HTTP Request (APIs)
//   body-parser             --> Form
//   mongoose                --> MongoDB Interface
//   method-override         --> PUT and DELETE request
//   express-sanitizer       --> Remove script from input
//   passport                --> Manage SignIn/Login/Logout
//   passport-local          --> Manage local auth (with username + password)
//   passport-local-mongoose --> Passport -- Mongoose Interface
//   express-session         --> Manage session for auth persistence


/////////////////
///   SETUP   ///
/////////////////
const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Set '.ejs' to the 'view' directory.
app.set("view engine", "ejs");
// Call for 'public' directory (CSS/Ressources).
app.use(express.static(__dirname + "/public"));
// Mendatory
app.use(bodyParser.urlencoded({ extended: true }));
// Tells method-override what pattern in the url it should look for
app.use(methodOverride("_method"));

//////////////////
///   ROUTES   ///
//////////////////
app.get("/", function(req, res) {
    res.render("main");
});


////////////////////////
///   START SERVER   ///
////////////////////////
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Inventory Project started on " + process.env.IP + ":" + process.env.PORT);
});
