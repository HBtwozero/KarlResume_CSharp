using KRMDataManager.Library.Interfaces;
using KRMDataManager.Library.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KRMApiResume.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : Controller
    {
        private readonly IBookServices _bookServices;

        /// <summary>
        /// Dependency Injection To create new services
        /// </summary>
        /// <param name="bookServices"></param>
        public BooksController(IBookServices bookServices)
        {
            //Dependency Injection to create new instance
            _bookServices = bookServices;
        }  
        
        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_bookServices.GetBooks());
        }
        [HttpGet("{id}", Name ="GetBook")]
        public IActionResult GetBook(string id)
        {
            return Ok(_bookServices.GetBook(id));
        }
        [HttpPost]
        public IActionResult AddBook(BookModel book)
        {
            _bookServices.AddBook(book);
            return CreatedAtRoute("GetBook", new { id = book.Id }, book);
            //_bookServices.AddBook(book);
            //return Ok(book);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(string id)
        {
            _bookServices.DeleteBook(id);
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateBook(BookModel book)
        {
            return Ok(_bookServices.UpdateBook(book));
        }


    }
}
