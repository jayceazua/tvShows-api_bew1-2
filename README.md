# tvShows-api_bew1-2
### *Backend Web 1_2*

<img src="https://github.com/jayceazua/tvShows-api_bew1-2/blob/master/nested_routes.png">

### Description
Day 3: Nested Routes and Resources.
<br>
Followed instructions from the [BEW1_2 Repo](https://github.com/Product-College-Courses/BEW-1.2-Authentication-and-Associations/tree/master/03-Nested-Routes-and-Resources)

### Technologies used:
- JavaScript (ES6) w/ AirBnB Style Guide
- Node v10.11.0
- Express v4.16.3

#### Notes:
- [Article](https://medium.com/@zachcaceres/child-routers-in-express-56f904597b1b) to read.
- Within the main resource route file next.
This allows to pass the mainResource's `:id` into the subResource route:
`const subResource = require('./subResource');
mainResource.use('/:id/subResource', (req, res, next) => {
  req.showsId = req.params.id;
  next();
}, subResource);`
