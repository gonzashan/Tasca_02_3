
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['name', 'surname', 'address'],
      properties: {
        name: {
          bsonType: 'string'
        },
        surname: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'array',
          items: {
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
          }
        },
        phone_number: {
          bsonType: 'string'
        }
      }
    }
  }
});