/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

 db.createCollection('order', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'order',
      required: ['customer', 'items', 'employee'],
      properties: {
        customer: {
          bsonType: 'objectId'
        },
        date: {
          bsonType: 'date'
        },
        total_amount: {
          bsonType: 'int'
        },
        processed: {
          bsonType: 'bool'
        },
        items: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        employee: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
 