import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    switch (req.method) {
      case "GET":
        const book = await prisma.book.findUnique({
          where: { id: Number(id) },
        });
        res.json({ book });
        break;
      case "PUT":
        const { title, author, publisher, year, pages } = req.body;
        const updatedBook = await prisma.book.update({
          where: { id: Number(id) },
          data: {
            title,
            author,
            publisher,
            year,
            pages,
          },
        });
        res.json({ book: updatedBook });
        break;
      case "DELETE":
        const deletedBook = await prisma.book.delete({
          where: { id: Number(id) },
        });
        res.json({ book: deletedBook });
        break;
      default:
        res.status(400).json({ message: "Invalid request method" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
}

