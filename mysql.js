const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web-js-mysql'
})

connection.connect((err) => {
    if (err) throw err
    console.log('Conected to BD')
})

// insert
const insertar = "INSERT INTO users (id, nombre) VALUES (NULL, 'Romina')"
const dataInserted = connection.query(insertar, (err, rows) => {
    if (err) throw err
    console.log(dataInserted)
})

connection.query('SELECT * from users', (err, rows) => {
    if (err) throw err
    console.log(rows)
    console.log(rows.length)
        //const usuario1 = rows[1]
        //console.log(`El usuario con id ${usuario1.id} se llama ${usuario1.nombre}`)
})



connection.end()