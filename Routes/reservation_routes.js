import express, { Router } from "express";
import * as ReservationController from "../Controllers/ReservationController.js";
const router = express.Router();

router.route("/").get(ReservationController.getAllReservation);
router.route("/").post(ReservationController.createReservation);
router.route("/:id").get(ReservationController.getReservationById);
router.route("/:id").put(ReservationController.updateReservation);
router.route("/:id").delete(ReservationController.deleteReservation);
export default router;
