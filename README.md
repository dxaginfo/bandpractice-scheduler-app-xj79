# Rehearsal Scheduler

A comprehensive web application for bands to efficiently schedule rehearsals, track attendance, send automated reminders, and suggest optimal rehearsal times based on member availability.

## 🎵 Features

### Calendar Management
- Shared calendar view for all band members
- Add, edit, and delete rehearsal events
- Block out unavailable dates/times
- RSVP functionality for confirming attendance

### Smart Scheduling
- Algorithm to suggest optimal rehearsal times based on member availability
- Polling system for finding consensus on rehearsal dates
- Conflict detection to prevent double-booking

### Communication
- Automated email/SMS reminders for upcoming rehearsals
- In-app messaging system for band communication
- Comment threads on specific rehearsal events

### Attendance Tracking
- Check-in system for rehearsals
- Attendance history and analytics
- Absence notification system

### Venue Management
- Store and manage rehearsal locations
- Link to maps/directions
- Track venue availability

### Set List Integration
- Create and edit set lists for specific rehearsals
- Track practiced songs and progress
- Notes and feedback on song performance

## 🚀 Technology Stack

### Frontend
- React.js with TypeScript
- Redux for global state management
- Material-UI for responsive design
- FullCalendar.js for interactive calendar functionality
- Formik with Yup for form validation
- Chart.js for attendance visualization

### Backend
- Node.js with Express
- RESTful API with OpenAPI/Swagger documentation
- JWT with OAuth2 integration for social login
- Prisma ORM

### Database
- PostgreSQL for relational data
- Redis for caching

### Infrastructure
- AWS (EC2, ELB) or Vercel/Netlify for frontend
- GitHub Actions for CI/CD
- Sentry for error tracking
- SendGrid for email, Twilio for SMS

## 🛠️ Setup and Installation

### Prerequisites
- Node.js v18+
- npm or yarn
- PostgreSQL 13+
- Redis 6+

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/bandpractice-scheduler-app-xj79.git
cd bandpractice-scheduler-app-xj79
```

2. Install dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables
```bash
# Copy environment example files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# Edit the .env files with your configuration
```

4. Set up the database
```bash
# Run migrations
cd backend
npm run migrate:dev
```

5. Start the development servers
```bash
# Start backend
cd backend
npm run dev

# Start frontend (in a new terminal)
cd frontend
npm start
```

## 🏗️ Project Structure

```
.
├── frontend                    # React frontend application
│   ├── public                  # Static files
│   └── src                     # Source code
│       ├── components          # Reusable components
│       ├── contexts            # React contexts
│       ├── hooks               # Custom React hooks
│       ├── pages               # Application pages
│       ├── services            # API services
│       ├── store               # Redux store configuration
│       └── utils               # Utility functions
│
├── backend                     # Node.js/Express backend
│   ├── src                     # Source code
│   │   ├── controllers         # Route controllers
│   │   ├── middleware          # Express middlewares
│   │   ├── models              # Data models
│   │   ├── routes              # API routes
│   │   └── services            # Business logic
│   ├── prisma                  # Prisma schema and migrations
│   └── tests                   # Tests
│
└── docs                        # Documentation
```

## 📝 API Documentation

The API documentation is generated using Swagger and can be accessed at `http://localhost:5000/api-docs` when the backend server is running.

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## 🚢 Deployment

### Frontend Deployment
1. Build the frontend
```bash
cd frontend
npm run build
```

2. Deploy to Vercel/Netlify or AWS S3 + CloudFront

### Backend Deployment
1. Build the backend
```bash
cd backend
npm run build
```

2. Deploy to AWS EC2 or similar service

## 📱 Mobile Support

The application is designed to be responsive and works well on mobile devices. It also includes Progressive Web App (PWA) capabilities for offline access.

## 🔒 Security Considerations

- HTTPS for all communications
- JWT with secure token management
- Password hashing with bcrypt
- CSRF protection
- Rate limiting to prevent brute force attacks
- Regular security audits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@rehearsalscheduler.com or open an issue on GitHub.