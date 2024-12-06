import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";


// Get Geting data
// POST Creating data
// PUT Updating data
// Delete Deleting Data


export async function GET(request: NextRequest) {

    //fetch users from a data base
    const users = await prisma.user.findMany()

    //hard code our data
    // return NextResponse.json("Hello")
    return NextResponse.json(users
    //     [
    //  {id:1, name:'Jose'},
    // {id:1, name:'Jacob'},
    // ]
)
}

export async function POST(request: NextRequest) {

    const body = await request.json();
    //validate the data
    //If valid, return 400
const validation = schema.safeParse(body)

    // if(!body.name)
    //     return NextResponse.json({error:'Name is required'}, {status: 400})

    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    //Else, return the data that was created
    return NextResponse.json({id: 1, name: body.name}, {status: 201} )
  
  }
  