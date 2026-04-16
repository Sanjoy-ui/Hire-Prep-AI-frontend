# Hire Prep AI - Frontend Client

A modern, full-featured React application built with Vite for conducting AI-powered interview preparation and assessment. The platform enables users to conduct practice interviews, receive comprehensive reports, and track their interview preparation progress.

## Overview

The Hire Prep AI frontend is a production-ready React 19 application that provides a seamless interview preparation experience with real-time feedback, analytics, and progress tracking. It integrates with Firebase for authentication and payment processing via Razorpay.

**Live Application:** [hire-prep-ai-frontend.onrender.com](https://hire-prep-ai-frontend.onrender.com)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Key Features](#key-features)
- [Architecture](#architecture)

## Tech Stack

### Core Framework
- **React 19.2** - UI framework with concurrent rendering capabilities
- **Vite 7.3** - Next-generation build tool with HMR (Hot Module Replacement)
- **React Router v7** - Client-side routing

### State Management
- **Redux Toolkit 2.11** - Predictable state management with reduced boilerplate
- **React-Redux 9.2** - Official React bindings for Redux

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Tailwind CSS Vite Plugin** - Integrated Tailwind with Vite
- **React Icons 5.5** - Comprehensive icon library

### Data & APIs
- **Axios 1.13** - HTTP client for API communication
- **Firebase 12.9** - Authentication and real-time services

### Features & Components
- **React Router DOM 7.13** - Routing solution
- **React Toastify 11.0** - Toast notifications
- **Recharts 3.7** - Data visualization library
- **React Circular Progressbar 2.2** - Progress indicators
- **jsPDF & jsPDF-AutoTable 4.2/5.0** - PDF generation and reporting
- **Motion 12.34** - Animation library

### Development
- **ESLint 9.39** - Code quality and consistency
- **Vite React Plugin 5.1** - Fast Refresh support
- **Node.js 20.x** (required)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Step1SetUp.jsx   # Interview setup component
│   ├── Step2Interview.jsx # Interview conduct component
│   ├── Step3Report.jsx  # Report generation component
│   ├── Navbar.jsx       # Navigation bar
│   ├── Footer.jsx       # Footer component
│   ├── AuthModel.jsx    # Authentication modal
│   ├── Timer.jsx        # Interview timer
│   ├── CookieConsent.jsx # Cookie consent banner
│   ├── ConfirmDialog.jsx # Confirmation dialogs
│   └── Subscription.jsx  # Subscription management
│
├── pages/               # Page components (route-based)
│   ├── Home.jsx         # Landing page
│   ├── Auth.jsx         # Authentication page
│   ├── InterviewPage.jsx # Interview conductor
│   ├── InterviewHistory.jsx # Past interviews list
│   ├── InterviewReport.jsx  # Detailed interview analysis
│   ├── Pricing.jsx      # Pricing plans
│   ├── Contact.jsx      # Contact page
│   └── TermsAndCons.jsx # Terms & conditions
│
├── redux/               # Redux store configuration
│   ├── store.js         # Redux store setup
│   └── userSlice.js     # User state management
│
├── utils/               # Utility functions
│   ├── firebase.js      # Firebase configuration & helpers
│   ├── toast.js         # Toast notification helpers
│   └── [other utilities]
│
├── assets/              # Static assets (images, videos)
├── App.jsx              # Main app component & routes
├── main.jsx             # React DOM render entry point
├── index.css            # Global styles
└── App.css              # App-level styles
```

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables** (see [Environment Configuration](#environment-configuration))

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Environment Configuration

Create a `.env` file in the project root with the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_FIREBASE_AUTHDOM=your_firebase_auth_domain
VITE_FIREBASE_PROJECTID=your_firebase_project_id
VITE_FIREBASE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGINGSENDERID=your_firebase_messaging_id
VITE_FIREBASE_APPID=your_firebase_app_id

# Razorpay Configuration
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

# Backend API
VITE_SERVER_URL=https://hire-prep-backend.onrender.com
```

**Note:** All Vite environment variables must be prefixed with `VITE_` to be exposed to the browser.

## Development

### Available Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint

# Start preview server (used in production)
npm start
```

### Development Workflow

1. Changes to files automatically trigger HMR - no full page reload needed
2. ESLint runs on save to maintain code quality
3. Tailwind CSS is processed on-the-fly during development
4. Redux DevTools are integrated for state debugging

### Code Quality

The project uses ESLint for code quality. Run linting before committing:

```bash
npm run lint
```

## Building & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Code minification and tree-shaking
- CSS purging (only used styles included)
- Asset optimization

### Deployment

The application is deployed to **Render** with the following configuration:

- **Build Command:** `npm run build`
- **Start Command:** `npm run start` (or `npm run preview`)
- **Node Version:** 20.x
- **Environment:** Production

The preview server runs on all available hosts (configurable via environment) and serves the built application on port defined by `PORT` environment variable.

## Key Features

### Interview Management
- **Step-based Interview Flow:** Setup → Conduct → Report
- **Real-time Timer:** Progress tracking during interviews
- **Multi-format Questions:** Support for various question types

### Assessment & Analytics
- **PDF Report Generation:** Comprehensive interview analysis
- **Performance Metrics:** Visual analytics with Recharts
- **Progress Tracking:** Interview history and comparison

### User Management
- **Firebase Authentication:** Secure user authentication
- **User Profile:** Persistent user data storage
- **Session Management:** Credential-based API calls

### Monetization
- **Subscription Plans:** Razorpay integration for payments
- **Pricing Page:** Flexible subscription options
- **Premium Features:** Feature gating based on subscription

### User Experience
- **Toast Notifications:** Real-time feedback
- **Cookie Consent:** GDPR compliance
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Smooth Animations:** Motion library for delightful UX

## Architecture

### State Management Pattern
The application uses Redux Toolkit for centralized state management, particularly for user authentication and profile data. Each Redux slice encapsulates related state logic and reducers.

### Routing Structure
React Router v7 provides client-side routing with the following route hierarchy:
- Home page (public)
- Authentication flow (public)
- Interview pages (protected via backend)
- History and reports (protected)

### API Communication
Axios is configured for HTTP requests with credentials for authentication across domains. The `ServerUrl` is configured via environment variables.

### Component Philosophy
- **Presentational Components:** Focused on UI rendering in `/components`
- **Container Pages:** Handle logic and routing in `/pages`
- **Redux Integration:** Connected components use React-Redux hooks

## Performance Considerations

- **Vite's ES Module Imports:** Faster cold start and HMR
- **Code Splitting:** Automatic per-route code splitting via React Router
- **Tree-Shaking:** Unused code removed from production builds
- **Image Optimization:** Asset pipeline through Vite
- **CSS Purging:** Only used Tailwind classes included in production

## Browser Support

The application targets modern browsers supporting:
- ES2020+ JavaScript
- CSS Grid and Flexbox
- Fetch API and async/await

## Security

- **Environment Variables:** Sensitive keys kept in `.env` (never committed)
- **Credentials:** Axios configured with `withCredentials: true`
- **Firebase:** Client-side SDK with secure rules
- **HTTPS Only:** Production deployment via secure channels

## Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading
Ensure variables are prefixed with `VITE_` and restart the dev server.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is proprietary and confidential.

---

**Maintained by:**  Sanjoy Deb  
**Last Updated:** April 2026
