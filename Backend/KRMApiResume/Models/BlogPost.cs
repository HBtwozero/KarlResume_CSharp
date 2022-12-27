using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KRMApiResume.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Body { get; set; }
        public Author Author { get; set; }
        public string[] Tags { get; set; }
    }
}

//https://medium.com/@kristaps.strals/create-your-own-blog-net-core-f3e6fefafb06
//https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/create-a-rest-api-with-attribute-routing