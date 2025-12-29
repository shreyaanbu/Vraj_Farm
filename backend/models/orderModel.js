import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: {
        firstName: String,
        lastName: String,
        street: String,
        city: {type:String, required:true},
        state: {type:String, required:true},
        country: String,
        phone: {
            type: String,
            required: true
        }
    },
    status: { type: String, required: true, default: 'Order Placed' },
    date: { type: Number, required: true },
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
export default orderModel