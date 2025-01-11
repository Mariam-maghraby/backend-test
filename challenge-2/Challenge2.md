## Challenge (2)


Write a query to fetch products with a price between $50 and $200, ordered by price (ascending), with pagination (10 products per page). NoSQL Query: (Assuming MongoDB)

`
db.products.find({
  price: { $gte: 50, $lte: 200 }
})
.sort({ price: 1 })
.skip(10) 
.limit(10)
`

Write a query to retrieve products by category (e.g., "Electronics"), sorted by price in descending order. Limit the result to 5 products per page. Optimization:

`SELECT * from Products where category = 'Electronics' order by price desc limit 5 offset 0;`


How would you optimize the queries for high traffic scenarios (e.g., indexing, caching)?

1. indexing should be used on frequently queried columns.
2. caching (e.g., Redis, Memcached) will be used to store query results and reduce load on the database.

