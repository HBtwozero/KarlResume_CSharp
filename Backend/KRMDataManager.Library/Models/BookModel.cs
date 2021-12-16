using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace KRMDataManager.Library.Models
{
    public class BookModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("BookName")]

        public string BookName { get; set; } 

        public double Price { get; set; }

        public string Category { get; set; } 

        public string Author { get; set; }
        //public string BookName { get; set; } = null!;

        //public double Price { get; set; }

        //public string Category { get; set; } = null!;

        //public string Author { get; set; } = null!;
    }
}
