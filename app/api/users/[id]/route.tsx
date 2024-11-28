import { NextRequest, NextResponse } from "next/server";

// PROPS CAN BE INLINE
// interface Props {
//     params: {id: number}
// }

//inline interface if line is longer just use interface
export function GET(request:NextRequest, {params}: {params:{id:number}}){

    if(params.id > 10)
        return NextResponse.json({error: 'User not found'}, {status:404})
        return NextResponse.json({id:1, name:"Jose"})

}


