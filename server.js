import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './backend/config/mongodb.js'
import connectCloudinary from './backend/config/cloudinary.js'
import userRouter from './backend/routes/userRoute.js'
import productRouter from './backend/routes/productRoute.js'
import cartRouter from './backend/routes/cartRoute.js'
import orderRouter from './backend/routes/orderRoute.js'
import reelRouter from './backend/routes/reelRoutes.js'
import uploadRouter from './backend/routes/uploadRouter.js'
import path from 'path'


// This will allow us to resolve __dirname in ES modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);


// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/reels',reelRouter)
app.use('/upload', uploadRouter); // Ensure this matches the path and router in your backend
app.use('/videos', express.static(path.join(__dirname, 'uploads')));



app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))