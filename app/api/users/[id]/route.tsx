import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";




// PROPS CAN BE INLINE
// interface Props {
//     params: {id: number}
// }

//inline interface if line is longer just use interface
export async function GET(request:NextRequest, {params}: {params:{id:string}}){

    //fetch the data from a db
    const user = await prisma.user.findUnique({
        // where: {id: params.id}
        where: {id: parseInt(params.id)}
    })

    // if(params.id > 10)
    if(!user)
        return NextResponse.json({error: 'User not found'}, {status:404})
        // return NextResponse.json({id:1, name:"Jose"})
        return NextResponse.json(user)

}

export async function PUT(request:NextRequest, {params}: {params:{id:number}}){
    //Validate the request of the body
    const body = await request.json()
    //If invalid, return 400
    // const validation = schema
    // if (!body.name)
    //     return NextResponse.json({error:"Name is Required"}, {status: 400})

    // if invalid return 400
    // if(!body.name)
    //     return NextResponse.json({error: "Name is required"}, {status:400})
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    //If doesn't exist 404
        if(params.id > 10)
            return NextResponse.json({error: "User not Found"}, {status: 404})
    //Update the User
        return NextResponse.json({id:1, name:body.name});
    //Fetch the user with the given ID

    //Return the updated user

}

export function DELETE (request:NextRequest, {params}: {params:{id:number}}) {
    //fetched user db
    //If not found. 404
    if(params.id >10)
        return NextResponse.json({error:"user not found"}, {status:404})
    //Delete the use db
    return NextResponse.json({})
    //Return 200 response
}