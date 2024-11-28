import { NextRequest, NextResponse } from "next/server";

// Get Geting data
// POST Creating data
// PUT Updating data
// Delete Deleting Data


export function GET(request: NextRequest) {

    //fetch users from a data base
    //hard code our data
    // return NextResponse.json("Hello")
    return NextResponse.json([
    {id:1, name:'Jose'},
    {id:1, name:'Jacob'},
    ])
}