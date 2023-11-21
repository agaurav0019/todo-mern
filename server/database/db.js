import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD

const Connection = () => {
    const MONGODB_URI =
        `mongodb://${encodeURIComponent(USERNAME)}:${PASSWORD}@ac-4yizrz9-shard-00-00.s60oyes.mongodb.net:27017,ac-4yizrz9-shard-00-01.s60oyes.mongodb.net:27017,ac-4yizrz9-shard-00-02.s60oyes.mongodb.net:27017/?ssl=true&replicaSet=atlas-12yryt-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    });

    mongoose.connection.on('error', (error) => {
        console.error("Error in database connection:", error);
    });

    // Retry connection on error
    mongoose.connection.on('reconnectFailed', () => {
        console.error("Reconnection to the database failed");
    });
};

export default Connection;
