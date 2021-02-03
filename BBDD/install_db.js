require('./../lib/connectMongoose');
const Ad = require('./../models/Ad');

async function initDB(){
  try {
    console.log('Initializing DB...');
    
    // Delete db collection 
    await Ad.deleteMany();
    console.log(`       ...Ads collection deleted`)
    
    // Read mock data from json file 
    const adsFromJson = require('./anuncios.json');
    console.log(`       ...Ads read from json file`)

    // Populate db collection 
    await Ad.insertMany(adsFromJson.anuncios);
    console.log(`       ...new ads added to db`)

    // Exit script. https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
    process.exit(0); 
  } catch (error) {
    console.log('It has been some error while the DB init script, err: ',error);
  }
}

initDB();
//TODO: Cerrar la BBDD??? mongoose.connection.close();
