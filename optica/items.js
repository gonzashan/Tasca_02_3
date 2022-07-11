/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

 db.createCollection('item', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'item',
      required: ['supplier'],
      properties: {
        model_id: {
          bsonType: 'string'
        },
        title: {
          bsonType: 'string'
        },
        prescription_left: {
          bsonType: 'decimal'
        },
        prescription_right: {
          bsonType: 'decimal'
        },
        type_frame: {
          enum: ["flotante", "pasta", "metálica"]
        },
        color_glass: {
          bsonType: 'array',
          items: {
            title: 'colors',
            properties: {
              kind: {
                bsonType: 'string'
              }
            }
          }
        },
        price: {
          bsonType: 'double'
        },
        supplier: {
          bsonType: 'objectId'
        }
      }
    }
  }
});