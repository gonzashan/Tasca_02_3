
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

 db.createCollection('provence', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'provence',
      properties: {
        name: {
          bsonType: 'string'
        }
      }
    }
  }
});