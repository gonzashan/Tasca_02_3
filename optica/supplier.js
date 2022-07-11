/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

 db.createCollection('supplier', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'supplier',
      properties: {
        name: {
          bsonType: 'string'
        },
        vat: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'address',
          properties: {
            street: {
              bsonType: 'string'
            },
            zip_code: {
              bsonType: 'string'
            },
            city: {
              bsonType: 'string'
            },
            state: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});