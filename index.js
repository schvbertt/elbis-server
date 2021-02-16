const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Elbis.2020',
    database: 'elbis',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/insert', (req, res) => {

    const inputs = req.body.inputs;
    const isChecked = req.body.isChecked;


    const sqlInsert = 'INSERT INTO elbis (name, street, zip, city, description, parn, email, tel, checkbox) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    db.query(sqlInsert, [inputs.name, inputs.adress, inputs.zip, inputs.city, inputs.description, inputs.parn, inputs.email, inputs.tel, isChecked ], (err, result) => {
        console.log(result)
    });
})

app.listen(3001, () => {
    console.log('running on port 3001')
});