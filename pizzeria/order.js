
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */


db.createCollection('order', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'order',
      required: ['pizza_shop', 'customer', 'employee'],
      properties: {
        pizza_shop: {
          bsonType: 'objectId'
        },
        customer: {
          bsonType: 'objectId'
        },
        date_order: {
          bsonType: 'timestamp'
        },
        type_delivery: {
          enum: ["click&collect", "delivery"]
        },
        date_delivery: {
          bsonType: 'timestamp'
        },
        employee: {
          bsonType: 'objectId'
        },
        amount_drinks: {
          bsonType: 'int'
        },
        amount_pizzas: {
          bsonType: 'int'
        },
        amount_hamburgers: {
          bsonType: 'int'
        },
        total_ticket: {
          bsonType: 'double'
        },
        item: {
          bsonType: 'array',
          items: {
            title: 'item',
            required: ['name', 'price', 'type_product'],
            properties: {
              name: {
                bsonType: 'string'
              },
              price: {
                bsonType: 'double'
              },
              type_product: {
                bsonType: 'objectId'
              }
            }
          }
        }
      }
    }
  }
});