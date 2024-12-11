import prisma from "@/prisma/client";
import email from "next-auth/providers/email";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import bycrypt from 'bcrypt'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST(request:NextRequest){
    const body = await request.json()

    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400});
    const user = await prisma.user.findUnique({where:{email:body.email}});
    if(user)
        return NextResponse.json(
            {error: 'User already exists'},
            {status: 404}
    );
    const hashedPassword= await bycrypt.hash(body.password,10);

    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    });

    return NextResponse.json({email:newUser.email})
   

}


