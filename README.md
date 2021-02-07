# KC BootCamp Web X. 
# Desarrollo backend con NodeJS. 
## Fco Ríos.

## Init the project with these 2 steps
  1. `npm run installDB` - Init db.
  2. `npm run dev` -> Run an http server on localhost:3000

## You must have a MongoDB local instance running. 
./bin/mongod --dbpath ./data/db

## API Methods
### GET /api/ads
Get a list of ads

### GET /api/tags
Get a list of current tags 

### POST /api/ads (body)
Insert a new ad. Data must be in the body.

### PUT /api/ads:id (body)
Modify ad. 

### DELETE /api/ads:id 
Remove an ad.

### Advertisement model:
See nodepop/models/Ad.js

### Images:
We can get images stored in the server directly with the url:
http://localhost:3000/images/<nombreRecurso>

### Filters:
We can filter by names, tags, price and kind of advertisement. 
The key words to add in the url for properly filtering are **'nombre'**, **'tag'**, **'precio'** and **'venta'** respectively.
Our 'venta' filter condition is not a boolean, it is an `enum: ["vende", "busca"]` instead.  

By Model property isType -> http://localhost:3000/api/ads?venta=<value>
  <value> is enum: ["vende", "busca"]

By Model property name -> http://localhost:3000/api/ads?venta=vende&nombre=ta

By Model property tag -> http://localhost:3000/api/ads?tag=work
                         http://localhost:3000/api/ads?tag=work&tag=lifestyle 

By Model property price:
  - Price = X http://localhost:3000/api/ads?precio=350.15 
  - Price > X http://localhost:3000/api/ads?precio=200- 
  - Price < X http://localhost:3000/api/ads?precio=-200 
  - X > Price > Y http://localhost:3000/api/ads?precio=100-500 
 
We can mix filters -> http://localhost:3000/api/ads?venta=vende&nombre=ta&precio=50-300&tag=lifestyle

### Pagination:
We can set the number of items retrieved and shown with the param `limit` in the url:
*http://localhost:3000/api/ads?limit=4*
Also available the param `skip` for the next pages in the list (user interaction needed)
*http://localhost:3000/api/ads?limit=4&skip=4*