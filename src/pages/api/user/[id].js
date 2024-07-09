import prisma from "../../../lib/prisma"

export default async function handle(
  req,
  res,
) {
    // const userId = req.query.id
  switch (req.method) {
    case 'GET':
      return await handleGET(req, res)
    default:
      return res.status(404).json();
  }
}

// GET /api/user/id
const handleGET = async (
  req,
  res,
)  => {
  try {
    const user = await prisma.user.findUnique({
        where: {
          id: req.query.id,
        },
      })  
    return res.status(200).json(user)
  } catch (error) {
    return res.status(404).json("User Not Found")
  }
  
}