require('./../lib/connectMongoose');
const Ad = require('./../models/Ad');

console.log('Running install_db.js file!!!');


// TODO: Probar el async-handler aquí (igual que en el controlador de ads const asyncHandler = require('express-async-handler');)
// FIXME: Se puede usar sin pasarlo como parámetro? Es decir, en otro sitio que no sea un controlador?
async function initDB(){
  try {
    // TODO: Probar a traer aquí la conexión
    const cleanDB = await Ad.deleteMany();
    // `0` if no docs matched the filter, number of docs deleted otherwise
    // cleanDB.deletedCount;
    console.log('After deleteMany in install_DB, cleanDB (res): ', cleanDB);
  } catch (error) {
    console.log('After deleteMany in install_DB, catch, err: ',error);
  }
}

initDB();

// router.get('/', asyncHandler(async function(req, res){  
//   const response = await Ad.find();
//   res.json(response);
// }));

/* TODO: DB Config file:
  module.exports = {
    user: '',
    pass: '',
    cxString: '',
    ...
  }
*/