const cors = require('cors');
const connectDB = require('./config/connect');
require('dotenv').config();
const authStuRoutes = require('./routes/authStuRoutes');
const authInsRoutes = require('./routes/authInsRoutes');

const studentRoutes = require('./routes/studentRoutes');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.json());

app.use(cors());

// Or restrict like this:
app.use(cors({
  origin: 'http://localhost:3000',  // your frontend
  credentials: true                 // if using cookies or auth headers
}));

// Define routes here..before the error handlers
app.use('/auth/student', authStuRoutes);
app.use('/auth/instructor', authInsRoutes);

app.use('/student',studentRoutes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
