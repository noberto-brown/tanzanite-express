# Tanzanite Express Frontend

This directory contains the React and Vite client for the combined Tanzanite Express bus booking project. It communicates with the Express API in [`../backend`](../backend) through the `VITE_BASE_URL` environment variable. For the project-wide architecture and setup, see the [root README](../README.md).

The application is designed around two roles:

- **Passengers** can search for available journeys, select seats, make bookings, view trips, and continue through a payment flow.
- **Operators** can manage buses and routes, register new services, and review bookings through administration screens.

This project was built as a practical way to learn and demonstrate React application development, client-side routing, authentication flows, API integration, state management, and responsive interface design.

## Features

- Bus journey and route discovery
- Seat selection and booking flow
- Trip history for passengers
- Payment details screen
- Authenticated routes and sign-in flow
- Operator dashboard
- Bus registration and management
- Route registration and management
- Booking management
- Loading states, notifications, and lazy-loaded pages

## Tech Stack

- React 19
- Vite
- React Router
- Redux Toolkit and React Redux
- TanStack React Query
- Axios
- Firebase
- Tailwind CSS
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A compatible backend API for the booking operations

### Installation

```bash
cd Tanzanite-Express/frontend
npm install
cp .env.example .env
```

Create a `.env` file in the project root and provide the backend API base URL:

```env
VITE_BASE_URL=http://localhost:8080
```

Start the development server:

```bash
npm run dev
```

Start the backend separately from the [`backend/`](../backend) directory before using booking, management, or payment features. The app will be available at the local URL printed by Vite.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── api/          API request helpers
├── components/   Shared layout, booking, and UI components
├── config/       Firebase and Redux store configuration
├── pages/        Passenger, authentication, and operator screens
├── redux/        Actions and reducers
├── routes/       Application routes and protected-route logic
└── services/     External service integrations
```

## Relationship to the Backend

The frontend is only the client application. The backend provides the REST endpoints for authentication, buses, routes, reservations, and payment integrations. Run both applications when developing the complete project.

## Project Scope

Tanzanite Express is an independent educational project created for portfolio and learning purposes. It is not affiliated with a bus company, and the branding, data, and workflows are illustrative.

## License

This project is available for personal learning and portfolio demonstration.
