import prisma from "../../../lib/prisma"

export default async function handle(
  req,
  res,
) {
  switch (req.method) {
    case 'POST':
      return await handlePOST(req, res)
    default:
      return res.status(404).json();
  }
}

// POST /api/user
const handlePOST = async (
  req,
  res,
)  => {
  try {
    await prisma.user.create({
      data:{
        id:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
      }
    })  
    return res.status(200).json("User Created")
  } catch (error) {
    return res.status(404).json("User Not Created")
  }
  
}