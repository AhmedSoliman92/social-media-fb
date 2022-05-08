const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/DBConn');
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const multer = require('multer')
const  path = require('path');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3500;


app.use('/images', express.static(path.join(__dirname,'public/images')));

// connect to mogoDB
connectDB()


// middleware
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
      },
      filename: function (req, file, cb) {
        
        cb(null, Date.now()+file.originalname)
        
      }
});
const upload = multer({storage:storage});
app.post('/api/upload', upload.fields([{name:'file'}]), (req,res)=>{
        console.log(req.files)
        res.status(200).json("The images uploaded successfully!!")


})
app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/posts',postRouter);



mongoose.connection.once('open',()=>{
    console.log("Connected to DB")
    app.listen(PORT,()=>{
        console.log(`Server running on port: ${PORT}` );
    });
    
})

