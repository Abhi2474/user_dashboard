import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

const prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = new PrismaClient()


export const GET = async (req: Request, res: Response) => {

	try {
		// const findUser = await prisma.user.findMany()
		const createUser = await prisma.education.create({
			data: { college: 'REC Ambedkar Nagar', course_name: 'BTECH' }
		})
		return NextResponse.json(createUser)
	} catch (error) {
		console.log(error);
		return
	}

}


