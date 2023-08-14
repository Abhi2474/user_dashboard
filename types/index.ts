export type TUser = {
	username: string
	email: string
	password: string
	phonenumber: string
	about: string
	education_detail: TEducation[]
	experience: TExperience[]
	skills: string[]
	followers: string[]
}


export type TEducation = {
	course_name: string,
	duration: number
	college: string
	join_date: number
	completion_date: number
	content: string
	userId: string
}

export type typeEducation = Pick<TEducation, "userId"> & Omit<Partial<TEducation>, "userId">

export type TExperience = {
	course_name: string
	duration: number
	type: "job" | "intern"
	join_date: number
	completion_date: number
	createdAt: string
	userId: string
}

