const expressSession = require("express-session");
const express = require("express");
const path = require("path");
const sequelizeSession = require("connect-session-sequelize")(
  expressSession.Store
);
const sequelize = require("./config/sqlconnection.js");

const exphbs = require("express-handlebars");
const exp_hbs = exphbs.create({});

const sessions = {
  secret: "something to change",
  resave: false,
  saveUninitialized: true,
  cookie: {},
  store: new sequelizeSession({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 5002;

app.engine("handlebars", exp_hbs.engine);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/")));
app.use(expressSession(sessions));

const routes = require("./controllers");
app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Port is listening"));
});
