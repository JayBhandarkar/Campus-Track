# Campus Track Frontend

A modern, professional Next.js frontend with Tailwind CSS for the Campus Track assignment management system.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - JavaScript UI library

## Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive**: Mobile-first responsive design
- **Authentication**: JWT-based user authentication
- **Assignment Management**: Full CRUD operations
- **Status Tracking**: Pending/completed assignment states
- **Real-time Updates**: Instant UI updates
- **Professional Typography**: Clean font hierarchy and spacing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Environment Variables

Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the production build
- `npm run lint` - Runs ESLint

## Design System

**Colors:**
- Primary: Blue (#3b82f6)
- Success: Green (#10b981)
- Danger: Red (#ef4444)
- Gray scale for text and backgrounds

**Components:**
- Clean card layouts with subtle shadows
- Professional button styles
- Consistent form inputs
- Responsive grid layouts
- Smooth hover transitions

**Typography:**
- System font stack for optimal performance
- Clear hierarchy with proper font weights
- Consistent spacing using Tailwind's spacing scale

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── register/         # Register page
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/            # Reusable components
├── contexts/             # React contexts
├── lib/                  # Utility functions and API calls
└── public/               # Static assets
```