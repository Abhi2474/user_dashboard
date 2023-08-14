import mongoose from "mongoose";

const MONGO_URI = process.env.DB_URL


async function dbConnect() {
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise()
	}

	if (MONGO_URI == undefined) {
		throw new Error('string connection link is undefined')
	}

	return await mongoose.connect(MONGO_URI)

}

export default dbConnect

// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", () => {
// 	console.log("DB Connected ...");
// });