import prisma from "../../../services/prismaService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const messages = await prisma.message.findMany({
        orderBy: {
          date_created: "desc",
        },
      });
      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching users" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
