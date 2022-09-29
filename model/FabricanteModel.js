const Sequelize = require("sequelize");

const connection = require("../database/database");

const Fabricante = connection.define(
    "tbl_fabricante",
    {
        nome_fabricante:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cnpj_fabricante:{
            type: Sequelize.STRING(18),
            allowNull: false
        }
    }
);

//Fabricante.sync({force:true});

module.exports = Fabricante;