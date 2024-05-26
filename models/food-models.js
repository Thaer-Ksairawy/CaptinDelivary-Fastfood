import { Sequelize } from "sequelize";
import db from "../config/database.js";

const  DataType  = Sequelize;

const food = db.define(
    "food",
    {
        image: {
            type: DataType.STRING,
        },
        title: {
            type: DataType.STRING,
        },
        paragraph: {
            type: DataType.STRING,
        },
        price: {
            type: DataType.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);
export default food;