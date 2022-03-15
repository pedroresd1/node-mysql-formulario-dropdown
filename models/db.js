const Sequelize = require("sequelize");

const conn = new Sequelize('db-formulario-pessoas-cor', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

conn.authenticate().then(() => {
    console.log('Conexão realizada com sucesso!')
}).catch(() => {
    console.log('Conexão não realizada com sucesso!')
});

module.exports = {
    Sequelize: Sequelize,
    conn: conn
}