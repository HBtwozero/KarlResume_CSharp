using KRMDataManager.Library.Interfaces;
using KRMDataManager.Library.Internal.DataAccess;
using KRMDataManager.Library.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace KRMDataManager.Library.DataAccess
{
    public class MongoDBContext : IMongoDbContext
    {
        private readonly IMongoCollection<BookModel> _books;
        public MongoDBContext(IOptions<MongoDataAccess> mongoDataAccess)
        {
            var mongoClient = new MongoClient(mongoDataAccess.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(mongoDataAccess.Value.DatabaseName);
            _books = mongoDatabase.GetCollection<BookModel>(mongoDataAccess.Value.BooksCollectionName);

        }
        public IMongoCollection<BookModel> GetBooksCollection()
        {
            return _books;
        }
    }
}
