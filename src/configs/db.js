import mongoose from "mongoose";
import { DB_URI } from "./enviroments.js";

const connectDB = async () => {
	try {
		// Helpful debug log so startup clearly shows which URI is used.
		// This prevents the common "uri must be a string, got undefined" issue
		// and makes it easier to see if connection attempts go to the expected host.
		console.log("Using MongoDB URI:", DB_URI);

		const connected = await mongoose.connect(DB_URI);
		console.log(
			`Connected MongoDB: mongodb://${connected.connection.host}:${connected.connection.port}/${connected.connection.name}`
		);
	} catch (error) {
		console.error(`MongoDB connection error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
