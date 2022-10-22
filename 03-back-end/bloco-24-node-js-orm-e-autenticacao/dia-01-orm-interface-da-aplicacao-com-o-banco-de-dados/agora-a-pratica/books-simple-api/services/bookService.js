const { book } = require("../models");

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const bookById = await book.findByPk(id);
  return bookById;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await book.create({ title, author, pageQuantity });
  return newBook;
};

module.exports = {
  getAll,
  getById,
  create,
};
