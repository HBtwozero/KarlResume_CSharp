using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Driver;
namespace KRMDataManager.Library.Internal.DataAccess
{
    public class MongoDataAccess
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;

        public string BooksCollectionName { get; set; } = null!;

    
    }
}
