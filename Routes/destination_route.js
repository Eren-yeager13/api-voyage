import express, { Router } from "express";
import * as destinationController from "../Controllers/DestinationController.js";
const router = express.Router();

router.route("/").get(destinationController.getAllDestination);
router.route("/:id").get(destinationController.getDestinationById);

router.route("/").post(destinationController.createDestination);

router.route("/:id").put(destinationController.updateDestination);

router.route("/:id").delete(destinationController.deleteDestination);

export default router;
