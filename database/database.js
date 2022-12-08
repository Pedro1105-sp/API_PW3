const Sequelize = require("sequelize");

const connection = new Sequelize(
    "API_CARS",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql",
        define: {
            timestamps: false
        }
    }
);
module.exports = connection;