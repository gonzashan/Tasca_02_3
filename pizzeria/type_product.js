
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

db.createCollection('type_product', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'type_product',
      properties: {
        name: {
          bsonType: 'string'
        },
        is_pizza: {
          bsonType: 'object',
          title: 'category_pizza',
          properties: {
            name: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});