# Tanzanite Express Backend API

This directory contains the Express and MongoDB REST API for the combined Tanzanite Express bus booking project. The React client is in [`../frontend`](../frontend), and its API base URL should point to this service. For the project-wide architecture and setup, see the [root README](../README.md).

## Features

- Admin account registration and JWT-based login
- Bus and route management
- Route search with pagination and bus amenity/category filters
- Seat-aware reservations
- Mobile-money payment initiation through AzamPesa
- Payment status webhook handling
- SMS notifications through Africa's Talking
- Security middleware with Helmet and CORS
- Centralized JSON error responses

## Tech Stack

- Node.js
- Express 5
- MongoDB with Mongoose
- JWT and bcrypt
- AzamPesa payment APIs
- Africa's Talking SMS API
- `express-validator`
- Axios, Helmet, and CORS

## Project Structure

```text
.
├── app.js                    # Application bootstrap and middleware
├── controllers/              # Request handlers and payment integrations
├── middlewares/              # Authentication middleware
├── models/                   # Mongoose schemas
├── routes/                   # API route definitions
├── .env.example              # Environment variable template
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- A MongoDB database
- AzamPesa credentials for payment-related features
- Africa's Talking credentials for SMS notifications

### Installation

```bash
cd Tanzanite-Express/backend
npm install
cp .env.example .env
```

Update `.env` with your local configuration, then start the API:

```bash
npm start
```

The server listens on `http://localhost:8080` by default, or on the port configured by `PORT`. Set `frontend/.env` to the same address, for example `VITE_BASE_URL=http://localhost:8080`, before starting the client.

### Environment Variables

| Variable | Purpose |
| --- | --- |
| `MONGODB_CONNECTION_STRING` | MongoDB connection string |
| `PORT` | HTTP port; defaults to `8080` |
| `JWT_SECRET` | Secret used to sign admin login tokens |
| `PAYMENT_AUTHENTICATOR_BASE_URL` | AzamPesa authentication base URL |
| `PAYMENT_CHECKOUT_BASE_URL` | AzamPesa checkout base URL |
| `PAYMENT_APP_NAME` | Registered payment application name |
| `PAYMENT_CLIENT_ID` | AzamPesa client ID |
| `PAYMENT_CLIENT_SECRET` | AzamPesa client secret |
| `AFRICAS_TALKING_API` | Africa's Talking API key |
| `AFRICAS_TALKING_USER` | Africa's Talking username |

## API Reference

The API returns JSON responses. Unless stated otherwise, the base URL is `http://localhost:8080`.

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/signup` | Create an admin account |
| `POST` | `/login` | Authenticate an admin and receive a JWT |

Example login request:

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

The login response includes `token`, `username`, `uid`, and `email`. Send the token using:

```text
Authorization: Bearer <token>
```

### Buses

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/create-bus` | Create a bus |
| `GET` | `/buses?page=1` | List buses; 50 results per page |
| `PUT` | `/:busId/edit` | Update a bus |
| `DELETE` | `/:busId/delete` | Delete a bus without routes |

Example bus request:

```json
{
  "name": "Tanzanite Express 01",
  "plate": "T 123 ABC",
  "seats": 45,
  "type": "Luxury",
  "amenities": ["Wi-Fi", "Charging ports"],
  "categories": ["Executive"]
}
```

### Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/:busId/create-route` | Create a route for a bus and initialize seat information |
| `GET` | `/routes?page=1` | List routes; 50 results per page |
| `PUT` | `/:busId/:routeId/edit` | Update a route belonging to a bus |
| `DELETE` | `/:busId/:routeId/delete` | Delete a route without reservations |

Route listing accepts query parameters matching route fields, plus `amenities` and `categories` filters. For example:

```text
GET /routes?origin=Arusha&destination=Moshi&amenities=Wi-Fi&page=1
```

Example route request:

```json
{
  "name": "Arusha to Moshi",
  "origin": "Arusha",
  "destination": "Moshi",
  "departureDate": "2026-10-15",
  "departureTime": "08:00",
  "arrivalDate": "2026-10-15",
  "arrivalTime": "10:00",
  "cost": "25000"
}
```

### Reservations and Payments

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/booking` | Initiate mobile payment and create a reservation when successful |
| `GET` | `/booking?page=1` | List reservations with route details |
| `DELETE` | `/:routeId/:reservationId/delete` | Cancel a reservation |
| `GET` | `/partners` | Retrieve available payment partners from AzamPesa |
| `POST` | `/callback` | Receive an AzamPesa payment status webhook |

Example booking request:

```json
{
  "routeId": "<route-id>",
  "customers": [
    {
      "name": "Jane Doe",
      "gender": "Female",
      "seatNo": "A1",
      "age": "28",
      "email": "jane@example.com"
    }
  ],
  "phoneNo": "255700000000",
  "amount": "25000",
  "provider": "<mobile-money-provider>",
  "description": "One passenger booking"
}
```

The payment callback expects transaction data including `transid`, `transactionstatus`, `message`, and `msisdn`. Successful payments are marked `paid`, failed payments are marked `incomplete`, and the customer receives an SMS notification.

## Data Model

- **Admin**: username, email, and hashed password
- **Bus**: name, plate number, seat count, type, amenities, categories, and routes
- **Route**: bus, origin, destination, schedule, cost, generated seat information, and reservations
- **Reservation**: route, customer details, phone number, fare, payment status, and transaction information

## Error Responses

Errors are returned in a common JSON shape:

```json
{
  "success": false,
  "message": "Error message",
  "data": [],
  "error": {}
}
```

Common status codes include `201` for created resources, `200` for successful requests, `400` for failed transactions, `401` for authentication failures, `404` when a resource is not found, `406` for invalid relationship or deletion conditions, `422` for validation errors, and `500` for unexpected server errors.

## Learning Project Notes

This is a portfolio and learning project rather than a production-ready booking platform. The combined repository does not currently include automated tests, and the admin authentication middleware is present but not enabled on the management routes. A production version would also need stronger request validation, protected webhook verification, transaction-safe seat locking, payment idempotency, rate limiting, structured logging, and a deployment configuration.

## License

This project is released under the ISC license listed in `package.json`.