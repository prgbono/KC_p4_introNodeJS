# KC BootCamp Web X. 
# Desarrollo backend con NodeJS. 
## Fco Ríos.

#TODO: Explicar cómo ejecutar el proyecto en dos pasos. 
  1. `npm run installDB` - Inicializa la BBDD.
  2. `npm run dev` -> Correra un http server en localhost:3000

## Comando para arrancar MongoDB (mac/linux)
./bin/mongod --dbpath ./data/db

## API Methods
### GET /api/ads
Get a list of ads

### POST /api/ads (body)
Insert a new ad. Data must be in the body.

### PUT /api/ads:id (body)
Modify ad. TODO: cómo va aquí el body?

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

By property isType -> http://localhost:3000/api/ads?venta=<value>
  <value> is enum: ["vende", "busca"]

By property name -> http://localhost:3000/api/ads?isType=vende&nombre=ta

By property tag -> http://localhost:3000/api/ads?tag=work
                   http://localhost:3000/api/ads?tag=work&tag=lifestyle 

By property price:
  - Price = X http://localhost:3000/api/ads?precio=350.15 
  - Price > X http://localhost:3000/api/ads?precio=200- 
  - Price < X http://localhost:3000/api/ads?precio=-200 
  - X > Price > Y http://localhost:3000/api/ads?precio=100-500 
 
We can mix filters -> http://localhost:3000/api/ads?venta=vende&nombre=ta&precio=50-300&tag=lifestyle
