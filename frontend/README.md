# Kilimanjaro Express

Kilimanjaro Express is a learning project that explores the experience of booking bus tickets online. The name is a placeholder used for the app and does not represent a real company or commercial service.

The application is designed around two roles:

- **Passengers** can search for available journeys, select seats, make bookings, view trips, and continue through a payment flow.
- **Operators** can manage buses and routes, register new services, and review bookings through protected administration screens.

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
git clone <repository-url>
cd kilimanjaro-frontend
npm install
```

Create a `.env` file in the project root and provide the backend API base URL:

```env
VITE_BASE_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The app will be available at the local URL printed by Vite.

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

## Project Scope

Kilimanjaro Express is an independent educational project created for portfolio and learning purposes. It is not affiliated with a bus company, and the branding, data, and workflows are illustrative.

## License

This project is available for personal learning and portfolio demonstration.
