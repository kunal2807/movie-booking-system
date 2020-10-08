import mongoose from 'mongoose';

// Typical mongoose setup
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`Database connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`error: ${error}`.red.bold)
        process.exit(1)
    }
}
export default connectDB;