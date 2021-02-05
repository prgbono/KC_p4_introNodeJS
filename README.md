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
By property isType -> http://localhost:3000/api/ads?isType=<value>
  <value> is enum: ["vende", "busca"]

//TODO: DEcidir si tag va a ser enum -> enum: ["work", "lifestyle", "motor", "mobile"]