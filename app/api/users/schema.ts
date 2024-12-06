import { z } from "zod";

// z.object({
//     name: z.string().min(3),
//     email: z.string().email(),
//     name: z.numbers()
// })

const schema = z.object({
    name: z.string().min(3),
})

export default schema;