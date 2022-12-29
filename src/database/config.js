const { Sequelize } = require("sequelize");
require('dotenv').config();

const POSTGRES_HOST = Number(process.env.HOST);
const POSTGRES_USERNAME = Number(process.env.POSTGRES_USERNAME);
const POSTGRES_PASSWORD = Number(process.env.POSTGRES_PASSWORD);


const sequelize = new Sequelize({
  host: POSTGRES_HOST,
  dialect: "postgres",
  database: "db",
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
});

async function initDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // await sequelize.dropSchema("public",{});
    // await sequelize.createSchema("public",{});
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = {
  initDB,
  sequelize,
};