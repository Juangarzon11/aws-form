const mongoose = require('mongoose')
const config = require('./config')

const DB_URI = `mongodb+srv://juangarzon11:${config.MONGO_PASSWORD}@cluster0.phngtri.mongodb.net/whitesoftform?retryWrites=true&w=majority`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.error('DB: ERROR!');
                } else {
                    console.log('Conexion exitosa');
                }
            }
        )
    }

    connect()
}