const bookService = require('../services/bookService');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await bookService.create({ title, author, pageQuantity });
  return res.status(201).json(newBook);
};

module.exports = {
  getAll,
  getById,
  create,
};
