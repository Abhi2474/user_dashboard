import User from "../../../model/user";
import { NextResponse } from "next/server";
import dbConnect from "@/config/dbConnect";


export const POST = async (req: Request, res: Response) => {
	const { username, email, password } = req.body
	console.log('object -1 passwed');
	try {
		console.log('object -1 passwed');

		await dbConnect()
		const newUser = await User.create({ username, email, password });
		NextResponse.json(newUser);
	} catch (error) {
		console.log(error);
		throw new Error('error')
	}
}


export const GET = async (req: Request, res: Response) => {
	let documents;

	try {
		await dbConnect().then(() => {
			documents = User.find().sort({ _id: -1 });

		})

	} catch (error) {
		console.log(error);
		return
	}

	return NextResponse.json(documents);
}
