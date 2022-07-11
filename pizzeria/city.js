
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

db.createCollection('city', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'city',
      required: ['provence'],
      properties: {
        city_name: {
          bsonType: 'string'
        },
        provence: {
          bsonType: 'objectId'
        }
      }
    }
  }
});