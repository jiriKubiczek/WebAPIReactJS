using System.Collections.Generic;

namespace MyAPI.Models
{
    public class DataRepository : IRepository
    {
        private static List<Customer> _customers = new List<Customer>();

        public IEnumerable<Customer> Customers => _customers;
        public DataRepository()
        {

        }

        public IEnumerable<Customer> GetAll()
        {
            return _customers;
        }

        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public Customer Find(int id)
        {
            return _customers.Find(k => k.Id == id);
        }

        public void Remove(int id)
        {
            var customer = _customers.Find(k => k.Id == id);
            if (customer == null)
            {
                return;
            }

            _customers.Remove(customer);
        }

        public void Update(int id, Customer customer)
        {
            _customers[id] = customer;            
        }
    }
}
