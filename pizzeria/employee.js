
/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

db.createCollection('employee', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'employee',
      properties: {
        name: {
          bsonType: 'string'
        },
        surname: {
          bsonType: 'string'
        },
        nif: {
          bsonType: 'string'
        },
        phone_number: {
          bsonType: 'string'
        },
        type_employee: {
          enum: ["cook", "riders"]
        }
      }
    }
  }
});