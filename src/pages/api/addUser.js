import prisma from "../../services/prismaService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      console.log("uer: ", newUser);

      res.status(201).json(newUser);
    } catch (error) {
      console.error("error: message: ", error.message);
      res.status(500).json({ error: "Error creating user" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
