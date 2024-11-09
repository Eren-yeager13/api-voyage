import ReservationModel from "../Models/Reservation.js";
import DestinationModel from "../Models/Destination.js";

export async function getAllReservation(req, res) {
  try {
    const reservatoin = await ReservationModel.find();
    res.status(200).json(reservatoin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getReservationById(req, res) {
  try {
    const reservation = await ReservationModel.findById(req.params.id);
    if (reservation) {
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createReservation(req, res) {
  try {
    const destination = await DestinationModel.findById(req.body.destinationId);
    const reservation = new ReservationModel(req.body);
    const days =
      (reservation.dateFin - reservation.dateDebut) / (1000 * 60 * 60 * 24);
    reservation.prixTotal =
      destination.prixParNuit * days * reservation.nombrePersonnes;
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateReservation(req, res) {
  try {
    const reservation = await ReservationModel.findById(req.params.id);
    const destinationId = reservation.destinationId;
    const destination = await DestinationModel.findById(destinationId);

    if (reservation) {
      Object.assign(reservation, req.body);
      const days =
        (reservation.dateFin - reservation.dateDebut) / (1000 * 60 * 60 * 24);
      reservation.prixTotal =
        destination.prixParNuit * days * reservation.nombrePersonnes;
      await reservation.save();
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteReservation(req, res) {
  try {
    const reservation = await ReservationModel.findByIdAndDelete(req.params.id);
    if (reservation) {
      res.status(200).json({ message: "Reservation deleted" });
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
