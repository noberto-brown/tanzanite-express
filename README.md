# Tanzanite Express

Tanzanite Express is a learning project for an online bus ticket booking platform. The repository combines the passenger and operator web application with the REST API that supports it.

The project is organized as two connected applications:

- `frontend/`: React and Vite client for passengers and operators.
- `backend/`: Express and MongoDB API for authentication, buses, routes, reservations, payments, and notifications.

The name, branding, sample data, and workflows are illustrative. This is an independent portfolio and learning project, not a commercial bus service.

## Features

- Search available journeys and routes
- View bus details and select seats
- Create reservations and continue through mobile-money payment
- View passenger trips and booking history
- Operator sign-up, login, dashboard, and booking management
- Create, update, list, and delete buses and routes
- AzamPesa payment initiation and callback handling
- Africa's Talking SMS notifications
- Responsive React interface with loading states and notifications

## Architecture

```text
Passenger or operator
        |
        v
frontend/ (React + Vite)
        |
        | HTTP requests using VITE_BASE_URL
        v
backend/ (Express REST API)
        |
        v
MongoDB

backend/ also integrates with AzamPesa and Africa's Talking.
```

## Tech Stack

### Frontend

- React 19 and Vite
- React Router
- Redux Toolkit and React Redux
- TanStack React Query
- Axios
- Firebase
- Tailwind CSS
- Framer Motion

### Backend

- Node.js and Express 5
- MongoDB with Mongoose
- JWT and bcrypt
- AzamPesa payment APIs
- Africa's Talking SMS API
- `express-validator`, Helmet, CORS, and Axios

## Prerequisites

- Node.js 18 or later
- npm
- MongoDB database
- AzamPesa credentials for payment features
- Africa's Talking credentials for SMS notifications

## Setup

Clone the repository and install dependencies for both applications:

```bash
git clone <repository-url>
cd tanzanite-express

cd backend
npm install
cp .env.example .env

cd ../frontend
npm install
cp .env.example .env
```

Configure `backend/.env` with the database, authentication, payment, and SMS settings described in [backend/README.md](backend/README.md). Set the frontend API URL in `frontend/.env`:

```env
VITE_BASE_URL=http://localhost:8080
```

Start the applications in separate terminals:

```bash
# Terminal 1
cd backend
npm start
```

```bash
# Terminal 2
cd frontend
npm run dev
```

The backend listens on `http://localhost:8080` by default. Vite prints the frontend URL in the terminal, usually `http://localhost:5173`.

## Application Documentation

- [Frontend documentation](frontend/README.md): client features, scripts, and React structure.
- [Backend documentation](backend/README.md): API endpoints, environment variables, data model, and integrations.

## Available Commands

Run commands from the relevant application directory:

| Directory | Command | Purpose |
| --- | --- | --- |
| `frontend/` | `npm run dev` | Start the Vite development server |
| `frontend/` | `npm run build` | Build the frontend for production |
| `frontend/` | `npm run lint` | Run ESLint |
| `frontend/` | `npm run preview` | Preview a production build |
| `backend/` | `npm start` | Start the API with Node watch mode |
| `backend/` | `npm test` | Placeholder script; automated tests are not yet configured |

## Project Structure

```text
.
├── backend/       Express API, controllers, models, middleware, and routes
├── frontend/      React application, pages, components, state, and API client
└── README.md      Combined project documentation
```

## Project Status and Scope

This repository is intended for learning and portfolio demonstration. It does not currently include automated tests. Before production use, the project would need stronger request validation, protected management routes and payment webhooks, transaction-safe seat locking, payment idempotency, rate limiting, structured logging, and deployment configuration.

## License

The backend is released under the ISC license listed in `backend/package.json`. The frontend is available for personal learning and portfolio demonstration.
