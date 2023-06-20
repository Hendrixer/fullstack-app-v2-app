import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res){
  const cookieName = process.env.COOKIE_NAME;
  if (!cookieName) throw new Error('COOKIE_NAME is not set');

  const user = await validateJWT(req.cookies[cookieName])

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id
    }
  })

  res.json({data: {message: 'hi'}})  
}