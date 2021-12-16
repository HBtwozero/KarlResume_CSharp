using KRMDataManager.Library.Interfaces;
using KRMDataManager.Library.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace KRMDataManager.Library.DataAccess
{
    public class BookDataServices : IBookServices
    {
        private readonly IMongoCollection<BookModel> _books;
        public BookDataServices(IDbClient dbClient)
        {
            _books = dbClient.GetBooksCollection();
        }
        public BookModel AddBook(BookModel book)
        {
            _books.InsertOne(book);
            return book;

        }

        public void DeleteBook(string id)
        {
            _books.DeleteOne(book => book.Id == id);
        }

        public BookModel GetBook(string id)
        {
           return _books.Find(book => book.Id == id).First();
        }

        public List<BookModel> GetBooks()
        {
            //return new List<BookModel>
            //{
            //    new BookModel
            //    {
            //        BookName = "Design Patterns",
            //        Price = 54.93,
            //        Author = "Ralph Johnson",
            //        Category = "Computers"
            //    }
            //};
            return _books.Find(book => true).ToList();
        }

        public BookModel UpdateBook(BookModel book)
        {
            GetBook(book.Id);
            _books.ReplaceOne(b => b.Id == book.Id, book);
            return book;

        }
    }
}
