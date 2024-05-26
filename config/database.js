import { Sequelize } from "sequelize";

const db = new Sequelize('bouxfcprkey7ber9mf4p', 'uz5lhpshc94frqdr', 'DHlspT3JvXkR8Sw0SVbd', {

    host: "bouxfcprkey7ber9mf4p-mysql.services.clever-cloud.com",
    port: "3306",
    dialect: "mysql"
});

db
    .authenticate()
    .then(() => {
        console.log(' connection has been  established successfuly')
    })
    .catch((err) => {
        console.log(' unable to connect')
    })
export default db;