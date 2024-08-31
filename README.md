# E-commerce backend
  
## Description
 This is an application that serves as a backed to an (as yet undeveloped) e-commerce application. It employs an Express.js back end, that also integrates a PostGres database as well as Sequelize in order to respond to various API queries.

## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
## Installation
This program requires the use of both Node and Express.js. Node.js will need to be installed, along with the both the Express, Dotenv, PG and Sequelize packages.

All packages should be included as dependencies within a package.json file, which can the invoked by running NPM install.

Prior to starting the service, the underlying Postgres database needs to be created and seeded.
  
## Usage
As the application was developed using express.js, employing API end-points, the application will accept GET, POST and DELETE requests via API development tools which can supply the appropriately formed requests like Insomnia, Postman, etc.
- A GET request for http://localhost:3001/api/categories will supply a JSON list of all categories. Similarly a GET request for http://localhost:3001/api/categories/:ID (where :ID is a category id) will return details for that category ID.
- A GET request for http://localhost:3001/api/products will supply a JSON list of all products. Similarly a GET request for http://localhost:3001/api/products/:ID (where :ID is a product id) will return details for that product ID.
- A GET request for http://localhost:3001/api/tags will supply a JSON list of all tags. Similarly a GET request for http://localhost:3001/api/tags/:ID (where :ID is a tag id) will return details for that tag ID.
- A PUT request for http://localhost:3001/api/categories with along with JSON formatted with a body like { "category_name" : "Underwear" } would create a new category
- A PUT request for http://localhost:3001/api/products with along with JSON formatted with a body like
{
    "product_name" : "Basketball",
    "price" : 200.00,
    "stock" : 3,
    "tagIds" : [1, 2, 3, 4]
}
would create a new product
- A PUT request for http://localhost:3001/api/tags with along with JSON formatted with a body like { "tag_name" : "Classical music" } would create a new tag
- A DELETE request for http://localhost:3001/api/categories/:ID where :ID is a category id, will delete the item with the corresponding ID.
- A DELETE request for http://localhost:3001/api/products/:ID where :ID is a product id, will delete the item with the corresponding ID.
- A DELETE request for http://localhost:3001/api/tasks/:ID> where :ID is a task id, will delete the item with the corresponding ID.

A full video walkthrough, demonstrating the use of the backend using Insomnia can be found at:

## Contributing
All backend express.js and Sequelize code was refactored by Warren Shan. Starter code supplied by GIT user: Xandromus.
  
## License
None