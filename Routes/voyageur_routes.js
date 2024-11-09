import express, { Router } from "express";
import * as VoyageurController from "../Controllers/VoyageurController.js";
const router = express.Router();

router.route("/").get(VoyageurController.getAllVoyageur);
router.route("/:id").get(VoyageurController.getVoyageurById);
router.route("/").post(VoyageurController.createVoyageur);
router.route("/:id").put(VoyageurController.updateVoyageur);
router.route("/:id").delete(VoyageurController.deleteVoyageur);

export default router;
