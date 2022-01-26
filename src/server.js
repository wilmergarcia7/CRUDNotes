const express = require('express');
const exphbs = require("express-handlebars");
const path = require("path");
/*
const indexRoutes = require("./routes/index.routes");
const notesRoutes = require("./routes/notes.routes");
const userRoutes = require("./routes/users.routes");*/

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");


// Middlewares
app.use(express.urlencoded({ extended: false }));


// Global Variables


// Routes
app.use(require("./routes/index.routes"));
/*
app.use(indexRoutes);
app.use(userRoutes);
app.use(notesRoutes);*/


// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;