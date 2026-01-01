# Campus Track

A modern, professional assignment management system built with Next.js, Tailwind CSS, and Node.js.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - JavaScript UI library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## ✨ Features

- **User Authentication** - Secure login/register with JWT
- **Assignment Management** - Create, read, update, delete assignments
- **Status Tracking** - Mark assignments as pending or completed
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Professional UI** - Clean, modern interface with Tailwind CSS
- **Real-time Updates** - Instant UI updates without page refresh

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/JayBhandarkar/Campus-Track.git
cd Campus-Track
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create `.env.local` file in frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
Backend runs on: http://localhost:5000

### Start Frontend Server
```bash
cd frontend
npm run dev
```
Frontend runs on: http://localhost:3000

## 📁 Project Structure

```
Campus-Track/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # API controllers
│   │   ├── middleware/     # Authentication middleware
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Main server file
│   └── package.json
├── frontend/               # Next.js + Tailwind CSS
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── lib/              # API utilities
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Assignments (Protected)
- `GET /api/assignments` - Get user assignments
- `POST /api/assignments` - Create new assignment
- `PUT /api/assignments/:id` - Update assignment
- `DELETE /api/assignments/:id` - Delete assignment

## 🎨 Design System

- **Primary Color**: Blue (#3b82f6)
- **Success Color**: Green (#10b981)
- **Danger Color**: Red (#ef4444)
- **Typography**: System font stack
- **Spacing**: 8px grid system
- **Components**: Card-based layout with subtle shadows

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Jay Bhandarkar**
- GitHub: [@JayBhandarkar](https://github.com/JayBhandarkar)
- Email: vbhandakar9@gmail.com

---

⭐ Star this repository if you found it helpful!