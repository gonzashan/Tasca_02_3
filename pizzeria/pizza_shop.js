
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

db.createCollection('pizza_shop', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'pizza_shop',
      required: ['employee'],
      properties: {
        address: {
          bsonType: 'object',
          title: 'address',
          required: ['city'],
          properties: {
            street: {
              bsonType: 'string'
            },
            zip_code: {
              bsonType: 'int'
            },
            city: {
              bsonType: 'objectId'
            }
          }
        },
        employee: {
          bsonType: 'objectId'
        }
      }
    }
  }
});