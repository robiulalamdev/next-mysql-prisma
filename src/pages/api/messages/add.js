import prisma from "../../../services/prismaService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const newMessage = await prisma.message.create({
        data: req.body,
      });
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
