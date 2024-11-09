import { request } from "express";
import mongoose from "mongoose";
const DestinationSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  pays: {
    type: String,
    required: true,
  },
  prixParNuit: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const DestinationModel = mongoose.model("Destination", DestinationSchema);
export default DestinationModel;
