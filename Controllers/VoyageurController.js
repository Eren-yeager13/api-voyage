import VoyageurModel from "../Models/Voyageur.js";

export async function getAllVoyageur(req, res) {
  try {
    const voyageur = await VoyageurModel.find();
    res.status(200).json(voyageur);
  } catch (error) {
    res.status.json({ message: error.message });
  }
}

export async function createVoyageur(req, res) {
  try {
    const voyageur = await VoyageurModel.create(req.body);
    res.status(201).json(voyageur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getVoyageurById(req, res) {
  try {
    const voyageur = await VoyageurModel.findById(req.params.id);
    if (!voyageur)
      return res.status(404).json({ message: "Voyageur not found" });
    res.status(200).json(voyageur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateVoyageur(req, res) {
  try {
    const voyageur = await VoyageurModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!voyageur)
      return res.status(404).json({ message: "Voyageur not found" });
    res.status(200).json(voyageur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteVoyageur(req, res) {
  try {
    const voyageur = await VoyageurModel.findByIdAndDelete(req.params.id);
    if (!voyageur)
      return res.status(404).json({ message: "Voyageur not found" });
    res.status(200).json({ message: "Voyageur deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
