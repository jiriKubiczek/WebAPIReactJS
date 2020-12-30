using System.Collections.Generic;

namespace MyAPI.Models
{
    public interface IRepository
    {
        IEnumerable<Customer> Customers { get; }
        void Add(Customer customer);
        IEnumerable<Customer> GetAll();
        Customer Find(int id);
        void Remove(int id);
        void Update(int id, Customer customer);

    }
}
