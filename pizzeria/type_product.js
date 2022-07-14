
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
        item: {
          bsonType: 'object',
          title: 'item',
          required: ['name', 'price'],
          properties: {
            name: {
              bsonType: 'string'
            },
            price: {
              bsonType: 'double'
            },
            category_pizza: {
              bsonType: 'array',
              items: {
                title: 'category_pizza',
                properties: {
                  name_category_pizza: {
                    bsonType: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});