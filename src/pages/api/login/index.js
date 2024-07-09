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

// POST /api/login
const handlePOST = async (
  req,
  res,
)  => {
  try {
    const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      }) 
      if (user.password === req.body.password) {
        return res.status(200).json(user)    
      }else{
        return res.status(400).json("Invalid Credential")
      } 
  } catch (error) {
    return res.status(404).json("User Not Found")
  }
  
}