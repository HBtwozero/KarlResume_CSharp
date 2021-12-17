using KRMDataManager.Library.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace KRMDataManager.Library.Interfaces
{
    public interface IMongoDbContext
    {
        IMongoCollection<BookModel> GetBooksCollection();
    }
}
