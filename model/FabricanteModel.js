const { type } = require("express/lib/response");
const Sequelize = require("sequelize");

const connection = require("../database/database");

const Fabricante = connection.define(
    "TBL_FABRICANTE",
    {
        nome_fabricante:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cnpj_fabricante:{
            type: Sequelize.INTEGER(14),
            allowNull: false
        }
    }
);

module.exports = Fabricante;