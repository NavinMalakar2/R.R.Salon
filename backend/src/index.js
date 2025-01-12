import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import cors from 'cors'

dotenv.config();

// Initialize app
const app = express();
app.use(cors());
// Middleware for parsing JSON
app.use(express.json());


// API routes
app.use('/api/v1/user',userRouter);

// Database connection
connectDB();

// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
