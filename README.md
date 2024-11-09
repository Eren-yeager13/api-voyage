# API-Voyage

## Description

`api-Voyage` is a RESTful API for managing travel destinations, reservations, and travelers. It allows users to create, read, update, and delete information related to travel destinations and reservations.

## Features

- Manage travel destinations
- Manage reservations
- Manage travelers

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Eren-yeager13/api-voyage.git
   ```

2. Install dependencies:
   ```bash
   cd api-voyage
   npm install
   ```
## API Endpoints
Destination: `/api/destinations` - Allows CRUD operations on travel destinations.

| Method | Endpoint                    | Description                       |
| ------ | --------------------------- | --------------------------------- |
| GET    | /                           | Get all travel destinations       |  
| POST   | /                           | Create a new travel destination   |
| GET    | /:id                        | Get a travel destination by ID    |
| PUT    | /:id                        | Update a travel destination by ID |
| DELETE | /:id                        | Delete a travel destination by ID |

 Reservation: `/api/reservations` - Allows CRUD operations on reservations.

| Method | Endpoint                    | Description                       |
| ------ | --------------------------- | --------------------------------- |
| GET    | /                           | Get all reservations              |
| POST   | /                           | Create a new reservation          |
| GET    | /:id                        | Get a reservation by ID           |
| PUT    | /:id                        | Update a reservation by ID        |
| DELETE | /:id                        | Delete a reservation by ID        |

Voyageur: `/api/voyageurs` - Allows CRUD operations on voyageur.

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | /        | Get all traveler        |
| POST   | /        | Create a new traveler   |
| GET    | /:id     | Get a traveler by ID    |
| PUT    | /:id     | Update a traveler by ID |
| DELETE | /:id     | Delete a traveler by ID |

  


