const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El Nombre es Obligatorio.']
    },
    email: {
        type: String,
        required: [true, 'El Email es Obligatorio.'],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'La Contraseña es Obligatoria.']
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [true, 'La Contraseña es Obligatoria.'],
        enum: ['admin_role','user_role']
    },
    create_at: { type: Date, default: Date.now },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
module.exports = model('User',UserSchema);