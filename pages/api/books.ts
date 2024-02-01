import { NextApiRequest, NextApiResponse } from "next";

interface Book {
  id: string;
  name: string;
  price: number;
}

let books: Book[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  try {
    // CREATE
    if (method === "POST") {
      const { body } = req;
      const book = books.find((book) => book.name === body.name);
      if (book) throw new Error("You cannot add two books with the same name");
      const bookId = String(new Date().getTime());
      const updatedBookss = [...books, { ...body, id: bookId }];
      books = updatedBookss;
      return res.status(201).json({ message: "Created" });
    }

    // UPDATE PARTIAL
    if (method === "PATCH") {
      const bookId = query.id;
      const book = books.find((book) => book.id === query.id);
      if (!book) throw new Error("Book does not exist");
      const updatedBookss = books.map((book) => {
        if (book.id === bookId) {
          return { ...book, name: req.body.name };
        }
        return book;
      });
      books = updatedBookss;
      return res.status(204).json({ message: "Updated" });
    }

    // UPDATE FULL
    if (method === "PUT") {
      const bookId = query.id;
      const book = books.find((book) => book.id === query.id);
      if (!book) throw new Error("Book does not exist");
      const updatedBookss = books.map((book) => {
        if (book.id === bookId) {
          return { ...req.body, id: book.id };
        }
        return book;
      });
      books = updatedBookss;
      return res.status(204).json({ message: "Updated" });
    }

    // DELETE
    if (method === "DELETE") {
      const bookId = query.id;
      const book = books.find((book) => book.id === query.id);
      if (!book) throw new Error("Book does not exist");
      const updatedBookss = books.filter((book) => {
        return book.id !== bookId;
      });
      books = updatedBookss;
      return res.status(204).json({ message: "Deleted" });
    }

    // READ - BY ID
    if (query.id) {
      const book = books.find((book) => book.id === query.id);
      if (!book) throw new Error("Book does not exist");
      return res.status(200).json({ message: "Ok", data: book });
    }

    // READ - ALL
    return res.status(200).json({ message: "Ok", data: books });
  } catch (e: any) {
    return res.status(500).json({ message: "Ok", error: e.message });
  }
}
