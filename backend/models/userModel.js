import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, reuired: true },
    email: { type: String, reuired: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
    phone: { type: String },

    address: {
        firstName: String,
        lastName: String,
        street: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
    },
}, { minimize: false })

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;