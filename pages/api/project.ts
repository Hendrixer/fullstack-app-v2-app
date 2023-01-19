import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    /* @ts-ignore */
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
    
    await db.project.create({
        /* @ts-ignore */
        data: {
        name: req?.body?.name,
        ownerId: user.id,
        },
    });

    res.json({ data: { message: "ok" } });
}