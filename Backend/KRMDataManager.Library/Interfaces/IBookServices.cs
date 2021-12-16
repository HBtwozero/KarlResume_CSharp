using KRMDataManager.Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace KRMDataManager.Library.Interfaces
{
    public interface IBookServices
    {
        List<BookModel> GetBooks();
        BookModel GetBook(string id);

        BookModel AddBook(BookModel book);

        void DeleteBook(string id);

        BookModel UpdateBook(BookModel book);

    }
}
