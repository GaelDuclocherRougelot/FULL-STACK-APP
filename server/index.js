require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./app/middlewares/auth.middleware');

const postRoutes = require('./app/routes/post.routes');
const userRoutes = require('./app/routes/user.routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

app.get('*', authMiddleware.checkUser);
app.get('/jwtid', authMiddleware.requireAuth, (req, res) => {
  res.status(200).send(req.user);
});

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

const port = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(port, () => console.log(`Server running on port http://localhost:${port}`)))
.catch((error) => console.log(`${error} did not connect`));