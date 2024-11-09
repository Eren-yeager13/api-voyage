import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import destinationRouter from "./Routes/destination_route.js";
import voyageurRouter from "./Routes/voyageur_routes.js";
import reservationRouter from "./Routes/reservation_routes.js";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const db_url = process.env.DB_URL;

app.get("/", (req, res) => {
  res.send("<h1>Page d'accueil</h1>");
});

// Routes
app.use("/api/destinations", destinationRouter);
app.use("/api/voyageurs", voyageurRouter);
app.use("/api/reservations", reservationRouter);

// Connect to MongoDB
mongoose
  .connect(db_url)
  .then((resulta) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((errour) => {
    console.log(errour);
  });
