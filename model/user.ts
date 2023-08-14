import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		// followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
		// following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);


const UserModel = () => mongoose.model('User', userSchema)

export default (mongoose.models.User || UserModel()) as ReturnType<
	typeof UserModel
>
// export default mongoose.model("User", userSchema, "users");