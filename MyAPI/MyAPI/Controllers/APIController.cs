using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using MyAPI.Models;

namespace MyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private IRepository repository;
        public APIController(IRepository repo) => repository = repo;

        // GET: api/API
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return repository.Customers;
        }

        // GET: api/API/5
        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomer(int id)
        {
            var customer = repository.Find(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // PUT: api/API
        [HttpPut]
        public IActionResult AddCustomer(Customer customer)
        {
            if (CustomerExists(customer.Id))
            {
                return NoContent();
            }
            else
            {
                repository.Add(customer);
            }

            return CreatedAtAction("GetCustomer", new { id = customer.Id }, customer);
        }

        // POST: api/api/3
        [HttpPost("{id}")]        
        public ActionResult<Customer> EditCustomer(int id, Customer customer)
        {
            Customer c = repository.Find(id);
            if (c == null)
            {
                return NotFound();
            }

            c.FullName = customer.FullName;
            c.Address = customer.Address;
            c.Email = customer.Email;
            c.Age = customer.Age;
            c.Mobil = customer.Mobil;

            return CreatedAtAction("GetCustomer", new { id = customer.Id }, customer);
        }

        // DELETE: api/api/5
        [HttpDelete("{id}")]
        public ActionResult<Customer> DeleteCustomer(int id)
        {
            var customer = repository.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            repository.Remove(id);

            return customer;
        }
        private bool CustomerExists(int id)
        {
            return repository.Customers.Any(e => e.Id == id);
        }
    }
}
