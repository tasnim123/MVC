require("dotenv").config();
const Sequelize = require("sequelize");
if (process.env.NODEDB_URL) {
  sequelize = new Sequelize(process.env.NODEDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: "mysql",
    }
  );
}
module.exports = sequelize;
