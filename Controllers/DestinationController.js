import DestinationModel from "../Models/Destination.js";

export async function getAllDestination(req, res) {
  try {
    const destination = await DestinationModel.find();
    res.status(200).json(destination);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getDestinationById(req, res) {
  try {
    const destination = await DestinationModel.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    } else {
      res.status(200).json(destination);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createDestination(req, res) {
  try {
    const destination = await new DestinationModel(req.body).save();
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateDestination(req, res) {
  try {
    const destination = await DestinationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    } else {
      res.status(200).json(destination);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteDestination(req, res) {
  try {
    const destination = await DestinationModel.findByIdAndDelete(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    } else {
      res.status(200).json({ message: "Destination deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
