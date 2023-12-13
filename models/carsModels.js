import mongoose from 'mongoose'

const carSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    year: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: String,
        require: true,
        trim: true
    },
   
})

const Car = mongoose.model("Car", carSchema)

export default Car;