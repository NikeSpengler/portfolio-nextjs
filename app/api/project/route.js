import { connectToDb } from "@/lib/coonectToDb";
import { Project } from "@/lib/models";
import { NextResponse } from "next/server"


export const GET = async(request, { params }) => {

    const {slug} = params;
    try {

        connectToDb();

        const projects = await Project.findOne({slug})
        return NextResponse.json(projects)

    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch projects!");
    }
}