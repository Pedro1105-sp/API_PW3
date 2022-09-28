const Sequelize = require("sequelize");

const connection = new Sequelize(
    "API_CARS",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);
module.exports = connection;