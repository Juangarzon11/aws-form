const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        country: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', UserSchema)