import car from "../models/carsModels.js";

const addCar = async (req, res) => {
    const { name } = req.body;
    const existCar = await car.findOne({ name })
    if (existCar) {
        const error = new Error("anime already exists")
        return res.status(400).json({ msg: error.message })
    }
    try {
        const Car = car(req.body);
        const carSave = await Car.save()
        res.json(carSave)
    } catch (error) {
        console.log(error)
    }
}

const modifyCar = async (req, res) => {
    const { id } = req.params;
    const { name, year, price } = req.body
    const Car = await car.findById(id)
    if (!Car) {
        const error = new Error("The car is not found")
        return res.status(400).json({ msg: error })
    }

    try {
        Car.name = name;
        Car.year = year;
        Car.price = price;

        await Car.save()
        res.json({ msg: "campos modificados correctamente" })
    } catch (error) {
        console.log(error)
    }
}
const readCar = async (req, res) => {
    try {
        const Car = await Car.find({})
        res.send({ Car })
    } catch (error) {
        res.status(500).send('Error al obtener los Carros')

        console.log(error)
    }
}

const delateCar = async (req, res) => {
    const { id } = req.params

    try {
        const deletedCar = await car.findByIdAndDelete(id);
        if (!deletedCar) {
            return res.status(404).json({ msg: "Anime not found" });
        }
        res.json({ msg: "Car deleted successfully" });
    } catch (error) {
        console.log(error)
    }
}

export {
    addCar,
    modifyCar,
    readCar,
    delateCar
}