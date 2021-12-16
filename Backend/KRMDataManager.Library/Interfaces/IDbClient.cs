using KRMDataManager.Library.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace KRMDataManager.Library.Interfaces
{
   public interface IDbClient
    {
        IMongoCollection<BookModel> GetBooksCollection();
    }
}
