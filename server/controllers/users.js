const model = require('../models/users')

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        if(err) {
            res.send({ error: 'Error' })
        } else {
            res.send({ docs })
        }
    })
}

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if(err) {
            res.send({ error: 'Error' })
        } else {
            res.send({ message: 'Registrado con Exito!' })
        }
    })
}