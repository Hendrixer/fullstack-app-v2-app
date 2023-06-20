import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res){
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id
    }
  })

  res.json({data: {message: 'hi'}})  
}