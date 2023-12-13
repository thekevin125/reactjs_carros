import express from "express";

import connectionDB from "./db/db.js";
import carrosRoutes from "./routers/carsRuta.js";

const app = express();
app.use(express.json())
connectionDB();


const PORT = 4000
app.use('/api/Carros', carrosRoutes)

app.listen(PORT, () => {
    console.log("server working properly")
})