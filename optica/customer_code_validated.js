/* Gonzalo San Miguel Alonso 
 Paste this code inside _MONGOSH */

db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['first_name', 'second_name', 'date_registered'],
      properties: {
        first_name: {
          bsonType: 'string'
        },
        second_name: {
          bsonType: 'string'
        },
        date_registered: {
          bsonType: 'date'
        },
        recommened: {
          bsonType: 'string'
        }
      },
      patternProperties: {
        "contact": {
          bsonType: 'array',
          items: {
            title: 'contact',
            properties: {
              email: {
                bsonType: 'array',
                items: {
                  bsonType: 'string'
                }
              },
              address: {
                bsonType: 'array',
                items: {
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
              },
              phones: {
                bsonType: 'object',
                title: 'phone',
                properties: {
                  mobile: {
                    bsonType: 'string'
                  },
                  landline: {
                    bsonType: 'string'
                  },
                  fax: {
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