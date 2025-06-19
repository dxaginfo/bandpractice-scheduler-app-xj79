# Rehearsal Scheduler

A comprehensive web application for bands to efficiently manage their rehearsal schedules, track attendance, and organize setlists.

## Features

- **Interactive Calendar**: View and schedule rehearsals with an intuitive calendar interface
- **Availability Tracking**: Log member availability to find optimal rehearsal times
- **Smart Scheduling**: Get scheduling suggestions based on band members' availability
- **Attendance Management**: Track who attended rehearsals with check-in features
- **Setlist Builder**: Create and manage setlists for specific rehearsals
- **Venue Management**: Store venue information and manage bookings
- **Notifications**: Receive automated reminders about upcoming rehearsals
- **Mobile Responsive**: Access from any device with a responsive design

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux with Redux Toolkit for state management
- Material-UI for UI components
- FullCalendar.js for calendar interface
- Formik with Yup for form validation
- Axios for HTTP requests
- Chart.js for data visualization

### Backend
- Node.js with Express
- RESTful API with Swagger documentation
- JWT authentication
- Prisma ORM for database access
- Express Validator for input validation

### Database & Infrastructure
- PostgreSQL for primary database
- Redis for caching
- Docker and docker-compose for containerization
- GitHub Actions for CI/CD

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- PostgreSQL (v13+)
- Redis (optional, for production)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/dxaginfo/bandpractice-scheduler-app-xj79.git
   cd bandpractice-scheduler-app-xj79
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   # Edit .env with your database credentials and JWT secret
   ```

4. Run database migrations:
   ```
   npm run migrate:deploy
   ```

5. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Development

1. Start the backend server:
   ```
   # In the backend directory
   npm run dev
   ```

2. Start the frontend development server:
   ```
   # In the frontend directory
   npm start
   ```

3. Access the application at `http://localhost:3000`

### Production Deployment

1. Build the frontend:
   ```
   # In the frontend directory
   npm run build
   ```

2. Build the backend:
   ```
   # In the backend directory
   npm run build
   ```

3. Using Docker Compose:
   ```
   # In the root directory
   docker-compose up -d
   ```

## Project Structure

```
├── backend/                # Node.js backend with Express
│   ├── prisma/            # Database schema and migrations
│   ├── src/               # Source files
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   └── server.ts      # Server entry point
│   └── package.json       # Backend dependencies
│
├── frontend/              # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store setup
│   │   └── App.tsx        # Main application component
│   └── package.json       # Frontend dependencies
│
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # Project documentation
```

## API Documentation

API documentation is available at `/api-docs` when running the backend server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [FullCalendar](https://fullcalendar.io/) for the calendar component
- [Material-UI](https://mui.com/) for the UI components
- [Prisma](https://www.prisma.io/) for the database ORM